import { useEffect, useRef, useState } from "react";
import axios from "axios";

type UseCourseSearchArgs = {
  API_BASE: string;
  locationSearch: string;
  onSearchApplied?: () => void; // ex: setPage(1)
};

export const useCourseSearch = ({ API_BASE, locationSearch, onSearchApplied }: UseCourseSearchArgs) => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [queryKeyword, setQueryKeyword] = useState<string>("");

  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  const debounceTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  // Autocomplete suggestions (debounced)
  useEffect(() => {
    if (!searchInput.trim()) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    if (searchInput.trim() === queryKeyword.trim()) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

    debounceTimeout.current = setTimeout(async () => {
      try {
        const res = await axios.get<{ success: boolean; data: string[] }>(
          `${API_BASE}/search_and_filter_courses?suggest=true&q=${encodeURIComponent(searchInput)}`
        );

        if (res.data.success) {
          setSuggestions(res.data.data || []);
          setShowSuggestions(true);
        } else {
          setSuggestions([]);
          setShowSuggestions(false);
        }
      } catch {
        setSuggestions([]);
        setShowSuggestions(false);
      }
    }, 300);

    return () => {
      if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    };
  }, [API_BASE, searchInput, queryKeyword]);

  // Hide dropdown after applying query
  useEffect(() => {
    if (queryKeyword) {
      setShowSuggestions(false);
      setSuggestions([]);
    }
  }, [queryKeyword]);

  // Banner search: ?search=xyz
  useEffect(() => {
    const params = new URLSearchParams(locationSearch);
    const searchFromBanner = params.get("search");

    if (searchFromBanner && searchFromBanner !== queryKeyword) {
      setSearchInput(searchFromBanner);
      setQueryKeyword(searchFromBanner);
      onSearchApplied?.();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locationSearch]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const val = searchInput.trim();
    setQueryKeyword(val);
    setShowSuggestions(false);
    setSuggestions([]);
    onSearchApplied?.();
  };

  const handleSuggestionClick = (title: string) => {
    setSearchInput(title);
    setQueryKeyword(title);
    setShowSuggestions(false);
    setSuggestions([]);
    onSearchApplied?.();

    try {
      searchInputRef.current?.blur();
    } catch {
      // ignore
    }
  };

  const handleClearSearch = () => {
    setSearchInput("");
    setQueryKeyword("");
    setSuggestions([]);
    setShowSuggestions(false);
    onSearchApplied?.();
  };

  return {
    searchInput,
    setSearchInput,
    queryKeyword,
    setQueryKeyword,
    suggestions,
    showSuggestions,
    setShowSuggestions,
    searchInputRef,
    handleSearchSubmit,
    handleSuggestionClick,
    handleClearSearch,
  };
};
