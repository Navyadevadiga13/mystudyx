import { useEffect, useRef, useState, type FormEvent } from "react";
import axios from "axios";

type UseCourseSearchArgs = {
  API_BASE: string;
  locationSearch: string;
  appliedCountry?: string;
  appliedType?: string; // ✅ Bachelors/Masters/Phd (from dropdown)
  onSearchApplied?: () => void;
};

const useCourseSearch = ({
  API_BASE,
  locationSearch,
  appliedCountry = "",
  appliedType = "",
  onSearchApplied,
}: UseCourseSearchArgs) => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [queryKeyword, setQueryKeyword] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  const debounceTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  // If user clears typed search, also clear applied queryKeyword immediately
  useEffect(() => {
    if (!searchInput.trim() && queryKeyword.trim()) {
      setQueryKeyword("");
      setSuggestions([]);
      setShowSuggestions(false);
      onSearchApplied?.();
    }
  }, [searchInput, queryKeyword, onSearchApplied]); // dependency rules [web:541]

  // Autocomplete suggestions (title)
  useEffect(() => {
    const typed = searchInput.trim();
    const applied = queryKeyword.trim();

    if (!typed || typed === applied) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

    debounceTimeout.current = setTimeout(async () => {
      try {
        const qs = new URLSearchParams();
        qs.set("suggest", "true");
        qs.set("q", typed);

        if (appliedCountry.trim()) qs.set("country", appliedCountry.trim());
        if (appliedType.trim()) qs.set("type", appliedType.trim()); // ✅ supports dropdown type filter [web:505]

        const url = `${API_BASE}/search_and_filter_courses?${qs.toString()}`;
        const res = await axios.get<{ success: boolean; data: string[] }>(url);

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
  }, [API_BASE, searchInput, queryKeyword, appliedCountry, appliedType]); // dependency rules [web:541]

  // When search applied, hide suggestions
  useEffect(() => {
    if (queryKeyword.trim()) {
      setShowSuggestions(false);
      setSuggestions([]);
    }
  }, [queryKeyword]); // dependency rules [web:541]

  // Banner search (?search=...)
  useEffect(() => {
    const params = new URLSearchParams(locationSearch);
    const searchFromBanner = params.get("search");

    if (searchFromBanner && searchFromBanner.trim() && searchFromBanner !== queryKeyword) {
      const val = searchFromBanner.trim();
      setSearchInput(val);
      setQueryKeyword(val);
      onSearchApplied?.();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locationSearch]);

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    const val = searchInput.trim();
    setQueryKeyword(val);
    setShowSuggestions(false);
    setSuggestions([]);
    onSearchApplied?.();
  };

  const handleSuggestionClick = (title: string) => {
    const val = String(title || "").trim();
    setSearchInput(val);
    setQueryKeyword(val);
    setShowSuggestions(false);
    setSuggestions([]);
    onSearchApplied?.();
    try {
      searchInputRef.current?.blur();
    } catch {}
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

export { useCourseSearch };
export default useCourseSearch;
