// import React, { useEffect, useState, FC, useRef } from "react";
// import InnerHeader from "../layouts/headers/InnerHeader";
// import Wrapper from "../layouts/Wrapper";
// import FooterTwo from "../layouts/footers/FooterTwo";
// import { useNavigate ,useLocation} from "react-router-dom";


// import axios from "axios";
// import {
//   FaBook,
//   FaClock,
//   FaMoneyBillWave,
//   FaFileAlt,
//   FaExclamationCircle,
//   FaHeart,
//   FaFilter,
// } from "react-icons/fa";
// import { FaAward, FaGraduationCap, FaGlobe, FaUserGraduate } from "react-icons/fa";
// import { Button, Form } from "react-bootstrap";

// const getApiBaseUrl = () => {
//   if (typeof window !== "undefined") {
//     const hostname = window.location.hostname;

//     if (hostname === "mystudyx.io" || hostname === "www.mystudyx.io") {
//       return "/api";
//     }
//     if (hostname === "168.231.103.88") {
//       return "http://168.231.103.88:3000/api";
//     }
//     if (hostname === "localhost" || hostname === "127.0.0.1") {
//       return "http://localhost:3000/api";
//     }
//     return "/api";
//   }
//   return "http://localhost:3000/api";
// };

// const API_BASE = getApiBaseUrl();


// interface Course {
//   _id: string;
//   title: string;
//   university: string;
//   country: string;
//   tuition_fee: string;
//   duration: string;
//   partners: boolean;
//   types?: string;
// }

// interface ApiResponse {
//   data: Course[];
//   message?: string;
//   success: boolean;
//   page?: number;
//   pages?: number;
//   count?: number;
//   total?: number;
// }

// const AUTOCOMPLETE_STYLE: React.CSSProperties = {
//   position: "absolute",
//   left: 0,
//   right: 0,
//   top: "100%",
//   background: "white",
//   border: "1px solid #ccc",
//   maxHeight: 180,
//   overflowY: "auto",
//   margin: 0,
//   padding: 0,
//   listStyleType: "none",
//   zIndex: 1500,
//   borderRadius: "0 0 4px 4px",
// };

// const formatINR = (value: string | number) => {
//   const num = Number(value);
//   if (Number.isNaN(num)) return value?.toString() || "";
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(num);
// };

// const uniqById = (arr: Course[] = []) => {
//   const seen = new Set<string>();
//   const out: Course[] = [];
//   for (const it of arr) {
//     if (!it || !it._id) continue;
//     if (!seen.has(it._id)) {
//       seen.add(it._id);
//       out.push(it);
//     }
//   }
//   return out;
// };

// const Courses: FC = () => {
//   const [courses, setCourses] = useState<Course[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const [wishlist, setWishlist] = useState<Set<string>>(new Set());
//   const [page, setPage] = useState<number>(1);
//   const [totalPages, setTotalPages] = useState<number>(1);

//   const [searchInput, setSearchInput] = useState<string>("");
//   const [queryKeyword, setQueryKeyword] = useState<string>("");
//   const [suggestions, setSuggestions] = useState<string[]>([]);
//   const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
//   const debounceTimeout = useRef<NodeJS.Timeout | null>(null);
// // NEW: Track if API has completed at least once
// const [hasLoadedOnce, setHasLoadedOnce] = useState(false);

//   const [showFilter, setShowFilter] = useState(false);
//   const [filters, setFilters] = useState({
//     title: "",
//     university: "",
//     min_fee: "",
//     max_fee: "",
//     types: "",
//   });
//   const [activeFilters, setActiveFilters] = useState<typeof filters>({
//     title: "",
//     university: "",
//     min_fee: "",
//     max_fee: "",
//     types: "",
//   });

//   const [filterTitleSuggestions, setFilterTitleSuggestions] = useState<string[]>([]);
//   const [showFilterTitleSuggestions, setShowFilterTitleSuggestions] = useState(false);
//   const filterTitleTimeout = useRef<NodeJS.Timeout | null>(null);
//   const filterTitleRef = useRef<HTMLInputElement>(null);

//   const [filterUniversitySuggestions, setFilterUniversitySuggestions] = useState<string[]>([]);
//   const [showFilterUniversitySuggestions, setShowFilterUniversitySuggestions] = useState(false);
//   const filterUniversityTimeout = useRef<NodeJS.Timeout | null>(null);
//   const filterUniversityRef = useRef<HTMLInputElement>(null);

//   const [allCountries, setAllCountries] = useState<string[]>([]);
//   const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
//   const [countrySearch, setCountrySearch] = useState<string>("");

//   const navigate = useNavigate();
// const location = useLocation();
//   useEffect(() => {
//     if (courses.length) {
//       console.log("SAMPLE COURSE FROM API =", courses[0]);
//     }
//   }, [courses]);



//   const filteredCountries = allCountries.filter((country) =>
//     country.toLowerCase().includes(countrySearch.toLowerCase())
//   );

//   // suggestions debounce (don't fetch suggestions for the same text as applied query)
//   useEffect(() => {
//     if (!searchInput.trim()) {
//       setSuggestions([]);
//       setShowSuggestions(false);
//       return;
//     }

//     if (searchInput.trim() === queryKeyword.trim()) {
//       setSuggestions([]);
//       setShowSuggestions(false);
//       return;
//     }

//     if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
//     debounceTimeout.current = setTimeout(async () => {
//       try {
//         const res = await axios.get<{ success: boolean; data: string[] }>(
// `${API_BASE}/search_and_filter_courses?suggest=true&q=${encodeURIComponent(searchInput)}`


//         );
//         if (res.data.success) {
//           setSuggestions(res.data.data);
//           setShowSuggestions(true);
//         }
//       } catch {
//         setSuggestions([]);
//         setShowSuggestions(false);
//       }
//     }, 300);
//     return () => {
//       if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
//     };
//   }, [searchInput, queryKeyword]);

//   useEffect(() => {
//     if (queryKeyword) {
//       setShowSuggestions(false);
//       setSuggestions([]);
//     }
//   }, [queryKeyword]);




// useEffect(() => {
//   const params = new URLSearchParams(location.search);
//   const searchFromBanner = params.get("search");

//   if (searchFromBanner && searchFromBanner !== queryKeyword) {
//     setSearchInput(searchFromBanner);
//     setQueryKeyword(searchFromBanner);
//     setPage(1);
//   }
// }, [location.search]);

// useEffect(() => {
//   const controller = new AbortController();

//   const fetchCourses = async () => {
//     setLoading(true);
//     setError(null);

//     try {
//       let url = "";
//       const params = new URLSearchParams();
//       params.append("page", String(page));

//       // ✅ CASE 1: DEFAULT LOAD (NO SEARCH)
//       if (!queryKeyword.trim()) {
//         url = `${API_BASE}/get_all_courses?${params.toString()}`;
//       }
//       // ✅ CASE 2: SEARCH MODE
//       else {
//         params.append("title", queryKeyword.trim());
//         url = `${API_BASE}/search_and_filter_courses?${params.toString()}`;
//       }

//       console.log("API CALL =>", url);

//       const res = await axios.get<ApiResponse>(url, {
//         signal: controller.signal,
//         timeout: 10000,
//       });

//       if (res.data.success) {
//         setCourses(uniqById(res.data.data || []));
//         setTotalPages(res.data.pages || 1);
//         setHasLoadedOnce(true);
//       } else {
//         setCourses([]);
//       }
//     } catch (err) {
//       if (!axios.isCancel(err)) {
//         setError("Failed to load courses.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchCourses();
//   return () => controller.abort();
// }, [page, queryKeyword]);



//   useEffect(() => {
//     const fetchWishlist = async () => {
//       const token = localStorage.getItem("token");
//       if (!token) return;
//       try {
//         const res = await fetch(`${API_BASE}/displayWishlist`, { headers: { Authorization: `Bearer ${token}` } });
//         const data = await res.json();
//         if (data.success && Array.isArray(data.wishlist)) {
//           setWishlist(new Set(data.wishlist.map((c: any) => c._id || c)));
//         }
//       } catch {
//         // ignore
//       }
//     };
//     fetchWishlist();
//   }, []);



// // Replace your toggleWishlist function with this fixed version:

// const toggleWishlist = async (courseId: string) => {
//   const token = localStorage.getItem("token");
//   if (!token) {
//     alert("You must be logged in to use wishlist.");
//     return;
//   }

//   try {
//     if (!wishlist.has(courseId)) {
//       // Adding to wishlist
//       const res = await axios.post(
//         `${API_BASE}/addToWishlist`,
//         { courseId },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (res.data.success) {
//         setWishlist(new Set(res.data.wishlist.map((c: any) => c._id || c)));
//       }
//     } else {
//       // Removing from wishlist
//       const res = await axios.post(
//         `${API_BASE}/removeWishlist`,
//         { courseId },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (res.data.success) {
//         setWishlist(new Set(res.data.wishlist.map((c: any) => c._id || c)));
//       }
//     }
//   } catch (error) {
//     console.error("Wishlist error:", error);
//     alert("Network error updating wishlist.");
//   }
// };

//   const handleSearchSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setPage(1);
//     setQueryKeyword(searchInput);
//     setShowSuggestions(false);
//     setSuggestions([]);
//   };

//   const handleClearSearch = () => {
//     setSearchInput("");
//     setQueryKeyword("");
//     setPage(1);
//     setError(null);
//   };

//   const searchInputRef = useRef<HTMLInputElement | null>(null);

//   const handleSuggestionClick = (title: string) => {
//     setSearchInput(title);
//     setQueryKeyword(title);
//     setPage(1);
//     setShowSuggestions(false);
//     setSuggestions([]);
//     try {
//       searchInputRef.current?.blur();
//     } catch (e) {
//       // ignore
//     }
//   };

//   const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFilters({ ...filters, [e.target.name]: e.target.value });
//   };

//   const handleCountryCheckbox = (country: string) => {
//     setSelectedCountries((prev) => (prev.includes(country) ? prev.filter((c) => c !== country) : [...prev, country]));
//   };

//   const resetFilters = () => {
//     setFilters({ title: "", university: "", min_fee: "", max_fee: "", types: "" });
//     setActiveFilters({ title: "", university: "", min_fee: "", max_fee: "", types: "" });
//     setSelectedCountries([]);
//     setPage(1);
//     setQueryKeyword("");
//     setSearchInput("");
//   };

// const applyFilterSubmit = (e: React.FormEvent) => {
//   e.preventDefault();
//   setShowFilter(false);
// };


//   return (
//     <Wrapper>
//       <InnerHeader />
//       <div className="py-4 py-md-5" style={{ background: "linear-gradient(135deg, #f4fbf6 0%, #f9fffb 40%, #f3f9ff 100%)" }}>
//         <div
//           className="container"
//           style={{
//             maxWidth: 1200,
//             background: "#ffffff",
//             borderRadius: 18,
//             boxShadow: "0 18px 45px rgba(15, 23, 42, 0.10)",
//             padding: "24px 20px 32px",
//           }}
//         >
//           <div className="mb-4 mb-md-5 d-flex flex-column flex-md-row justify-content-between align-items-start gap-3">
//             <div>
//               <h2
//                 className="fw-bold mb-1"
//                 style={{
//                   fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
//                   color: "#111827",
//                   fontFamily: "'Outfit', sans-serif",
//                   letterSpacing: "-0.04em",
//                 }}
//               >
//                 Explore Courses
//               </h2>
//               <p
//                 className="text-muted mb-0"
//                 style={{
//                   fontSize: "clamp(0.9rem, 2vw, 1rem)",
//                   fontFamily: "'Inter', sans-serif",
//                   color: "#6b7280",
//                 }}
//               >
//                 Curated programs from leading universities worldwide.
//               </p>
//             </div>

//             {(queryKeyword ||
//               activeFilters.title ||
//               activeFilters.university ||
//               activeFilters.min_fee ||
//               activeFilters.max_fee ||
//               selectedCountries.length) && (
//               <div className="d-flex flex-wrap align-items-center gap-2">
//                 {queryKeyword && (
//                   <span className="badge rounded-pill bg-success-subtle text-success px-3 py-2">
//                     Title: <strong className="ms-1">{queryKeyword}</strong>
//                   </span>
//                 )}
//                 {activeFilters.title && !queryKeyword && (
//                   <span className="badge rounded-pill bg-success-subtle text-success px-3 py-2">
//                     Title: <strong className="ms-1">{activeFilters.title}</strong>
//                   </span>
//                 )}
//                 {activeFilters.types && (
//                   <span className="badge rounded-pill bg-success-subtle text-success px-3 py-2">
//                     Type:{" "}
//                     <strong className="ms-1">
//                       {activeFilters.types?.toLowerCase() === "masters"
//                         ? "Masters"
//                         : activeFilters.types?.toLowerCase() === "phd"
//                         ? "PhD"
//                         : "Bachelors"}
//                     </strong>
//                   </span>
//                 )}

//                 {activeFilters.university && (
//                   <span className="badge rounded-pill bg-success-subtle text-success px-3 py-2">
//                     Univ: <strong className="ms-1">{activeFilters.university}</strong>
//                   </span>
//                 )}
//                 {(activeFilters.min_fee || activeFilters.max_fee) && (
//                   <span className="badge rounded-pill bg-success-subtle text-success px-3 py-2">
//                     Fee:
//                     <strong className="ms-1">
//                       {activeFilters.min_fee || "0"} – {activeFilters.max_fee || "∞"}
//                     </strong>
//                   </span>
//                 )}
//                 {selectedCountries.length > 0 && (
//                   <span className="badge rounded-pill bg-success-subtle text-success px-3 py-2">
//                     Countries:{" "}
//                     <strong className="ms-1">
//                       {selectedCountries.slice(0, 2).join(", ")}
//                       {selectedCountries.length > 2 && ` +${selectedCountries.length - 2}`}
//                     </strong>
//                   </span>
//                 )}
//                 <button type="button" onClick={resetFilters} className="btn btn-link p-0 ms-1" style={{ fontSize: "0.85rem" }}>
//                   Clear all
//                 </button>
//               </div>
//             )}
//           </div>

//           <form onSubmit={handleSearchSubmit} className="d-flex flex-column flex-md-row align-items-stretch w-100 mb-4" style={{ gap: "0.75rem", position: "relative" }}>
//             <input
//               type="text"
//               className="form-control flex-grow-1"
//               placeholder="Search by Course Title "
//               ref={searchInputRef}
//               value={searchInput}
//               onChange={(e) => setSearchInput(e.target.value)}
//               onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
//               onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
//               aria-label="Search courses by title"
//               autoComplete="off"
//               style={{ minWidth: 0 }}
//             />
//             <Button type="submit" variant="success" className="px-4 flex-shrink-0" style={{ width: "100%", maxWidth: 180 }}>
//               Search
//             </Button>
//             <Button variant="outline-secondary" onClick={() => setShowFilter(true)} className="d-flex align-items-center px-4 flex-shrink-0" style={{ whiteSpace: "nowrap", width: "100%", maxWidth: 180 }}>
//               <FaFilter size={18} className="me-2" /> Filters
//             </Button>
//             {(searchInput || queryKeyword) && (
//               <Button variant="outline-secondary" onClick={handleClearSearch} className="px-2 flex-shrink-0" style={{ minWidth: 90 }}>
//                 Clear
//               </Button>
//             )}
//             {showSuggestions && (
//               <ul style={AUTOCOMPLETE_STYLE}>
//                 {suggestions.length === 0 ? (
//                   <li style={{ padding: 8 }}>No suggestions</li>
//                 ) : (
//                   suggestions.map((s, idx) => (
//                     <li key={idx} style={{ padding: 8, cursor: "pointer" }} onMouseDown={() => handleSuggestionClick(s)}>
//                       {s}
//                     </li>
//                   ))
//                 )}
//               </ul>
//             )}
//           </form>

//           {showFilter && (
//             <>
//               <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-25" style={{ zIndex: 1040 }} onClick={() => setShowFilter(false)} />
//               <div
//                 className="position-fixed top-0 start-0 h-100 d-flex flex-column"
//                 style={{
//                   width: "100%",
//                   maxWidth: 340,
//                   zIndex: 1041,
//                   background: "linear-gradient(180deg, #ffffff 0%, #f8fbff 40%, #f4fbf6 100%)",
//                   boxShadow: "12px 0 35px rgba(15, 23, 42, 0.18)",
//                   borderRight: "1px solid rgba(15, 118, 110, 0.08)",
//                   transition: "transform .3s ease-out",
//                   transform: "translateX(0)",
//                 }}
//               >
//                 <div className="d-flex justify-content-between align-items-center border-bottom py-3 px-3">
//                   <div>
//                     <h5 className="m-0 fw-bold" style={{ letterSpacing: "-0.02em" }}>
//                       Filter Courses
//                     </h5>
//                     <small className="text-muted">Refine by program, country & fees</small>
//                   </div>
//                   <button className="btn btn-light rounded-circle ms-2" style={{ width: 32, height: 32, padding: 0 }} onClick={() => setShowFilter(false)} aria-label="Close">
//                     &times;
//                   </button>
//                 </div>

//                 <Form onSubmit={applyFilterSubmit} className="flex-grow-1 p-3 pb-4 overflow-auto">
//                   <Form.Group className="mb-3" style={{ position: "relative" }}>
//                     <Form.Label>Title</Form.Label>
//                     <Form.Control
//                       ref={filterTitleRef}
//                       name="title"
//                       value={filters.title}
//                       onChange={handleFilterChange}
//                       onFocus={() => filterTitleSuggestions.length > 0 && setShowFilterTitleSuggestions(true)}
//                       onBlur={() => setTimeout(() => setShowFilterTitleSuggestions(false), 200)}
//                       autoFocus
//                       autoComplete="off"
//                     />
//                     {showFilterTitleSuggestions && (
//                       <ul style={AUTOCOMPLETE_STYLE}>
//                         {filterTitleSuggestions.length === 0 ? (
//                           <li style={{ padding: 8 }}>No suggestions</li>
//                         ) : (
//                           filterTitleSuggestions.map((s, idx) => (
//                             <li
//                               key={idx}
//                               style={{ padding: 8, cursor: "pointer" }}
//                               onMouseDown={() => {
//                                 setFilters((f) => ({ ...f, title: s }));
//                                 setShowFilterTitleSuggestions(false);
//                                 setTimeout(() => {
//                                   filterTitleRef.current?.blur();
//                                 }, 0);
//                               }}
//                             >
//                               {s}
//                             </li>
//                           ))
//                         )}
//                       </ul>
//                     )}
//                   </Form.Group>

//                   <Form.Group className="mb-3">
//                     <Form.Label>Program Type</Form.Label>
//                     <Form.Select
//                       name="types"
//                       value={filters.types}
//                       onChange={(e) =>
//                         setFilters((prev) => ({
//                           ...prev,
//                           // normalize to lowercase canonical value immediately
//                           types: e.target.value ? String(e.target.value).trim().toLowerCase() : "",
//                         }))
//                       }
//                     >
//                       <option value="">All</option>
//                       <option value="masters">Masters</option>
//                       <option value="phd">Phd</option>
//                       <option value="bachelors">Bachelors</option>
//                     </Form.Select>
//                   </Form.Group>

//                   <Form.Group className="mb-3" style={{ position: "relative" }}>
//                     <Form.Label>University</Form.Label>
//                     <Form.Control
//                       ref={filterUniversityRef}
//                       name="university"
//                       value={filters.university}
//                       onChange={handleFilterChange}
//                       onFocus={() => filterUniversitySuggestions.length > 0 && setShowFilterUniversitySuggestions(true)}
//                       onBlur={() => setTimeout(() => setShowFilterUniversitySuggestions(false), 200)}
//                       autoComplete="off"
//                     />
//                     {showFilterUniversitySuggestions && (
//                       <ul style={AUTOCOMPLETE_STYLE}>
//                         {filterUniversitySuggestions.length === 0 ? (
//                           <li style={{ padding: 8 }}>No suggestions</li>
//                         ) : (
//                           filterUniversitySuggestions.map((s, idx) => (
//                             <li
//                               key={idx}
//                               style={{ padding: 8, cursor: "pointer" }}
//                               onMouseDown={() => {
//                                 setFilters((f) => ({ ...f, university: s }));
//                                 setShowFilterUniversitySuggestions(false);
//                                 setTimeout(() => {
//                                   filterUniversityRef.current?.blur();
//                                 }, 0);
//                               }}
//                             >
//                               {s}
//                             </li>
//                           ))
//                         )}
//                       </ul>
//                     )}
//                   </Form.Group>

//                   <Form.Group className="mb-3">
//                     <Form.Label>Country</Form.Label>
//                     <Form.Control placeholder="Search Countries" value={countrySearch} onChange={(e) => setCountrySearch(e.target.value)} style={{ marginBottom: "0.5rem" }} />
//                     <div style={{ maxHeight: 130, overflowY: "auto", border: "1px solid #eee", borderRadius: 4, background: "#fafafa", padding: 6 }}>
//                       {filteredCountries.length === 0 ? (
//                         <div style={{ color: "#a0a0a0", fontSize: 13 }}>No countries found</div>
//                       ) : (
//                         filteredCountries.map((country) => (
//                           <Form.Check key={country} type="checkbox" id={`country-${country}`} label={country} checked={selectedCountries.includes(country)} onChange={() => handleCountryCheckbox(country)} style={{ margin: "2px 0" }} />
//                         ))
//                       )}
//                     </div>
//                   </Form.Group>

//                   <Form.Group className="mb-3">
//                     <Form.Label>Tuition Fee Range</Form.Label>
//                     <div className="d-flex" style={{ gap: "0.5rem" }}>
//                       <Form.Control type="number" name="min_fee" value={filters.min_fee} onChange={handleFilterChange} placeholder="Min" />
//                       <Form.Control type="number" name="max_fee" value={filters.max_fee} onChange={handleFilterChange} placeholder="Max" />
//                     </div>
//                   </Form.Group>

//                   <div className="d-flex justify-content-between mt-4">
//                     <Button variant="outline-danger" onClick={resetFilters} type="button">
//                       Reset
//                     </Button>
//                     <Button type="submit" variant="success">
//                       Apply
//                     </Button>
//                   </div>
//                 </Form>
//               </div>
//             </>
//           )}

//           {loading && (
//             <div className="d-flex flex-column justify-content-center align-items-center py-5">
//               <div className="spinner-border" style={{ color: "#27ae60", width: 50, height: 50 }} role="status" />
//               <div style={{ marginTop: 12, fontFamily: "'Outfit',sans-serif", color: "#27ae60", fontWeight: 600, fontSize: "1.18rem" }}>Loading courses...</div>
//             </div>
//           )}

//           {error && !loading && (
//             <div className="alert alert-danger d-flex align-items-center" role="alert" style={{ borderRadius: "8px", fontFamily: "'Inter', sans-serif" }}>
//               <FaExclamationCircle className="me-2" size={20} />
//               <span>{error}</span>
//             </div>
//           )}
// {!loading && hasLoadedOnce && !error && courses.length === 0 && (

//             <div className="text-center py-5">
//               <FaFileAlt size={64} className="mb-3" style={{ color: "#ddd" }} />
//               <h5 className="text-muted" style={{ fontFamily: "'Inter', sans-serif" }}>
//                 No Courses Available
//               </h5>
//             </div>
//           )}

//           {!loading && !error && courses.length > 0 && (
//             <>
//               <div className="row gy-3 gx-2 gx-md-3">
//                 {courses.map((c) => (
//                   <div key={c._id} className="col-12 col-sm-6 col-lg-4">
//                     <div
//                       className="card h-100 border-0"
//                       style={{
//                         borderRadius: "12px",
//                         boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
//                         overflow: "hidden",
//                         transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
//                         cursor: "pointer",
//                         position: "relative",
//                       }}
//                       onMouseEnter={(e) => {
//                         e.currentTarget.style.transform = "translateY(-8px)";
//                         e.currentTarget.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.15)";
//                       }}
//                       onMouseLeave={(e) => {
//                         e.currentTarget.style.transform = "translateY(0)";
//                         e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.08)";
//                       }}
//                     >
//                       <div style={{ position: "absolute", top: 12, left: 12, right: 60, display: "flex", justifyContent: "space-between", alignItems: "flex-start", zIndex: 9, flexWrap: "wrap", gap: 6 }}>
//                         <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "flex-start", minWidth: 0 }}>
//                           {c.partners && (
//                             <>
//                               <div style={{ fontSize: "0.75rem", color: "#0f6fec", padding: "4px 10px", borderRadius: 999, fontFamily: "'Inter', sans-serif", fontWeight: 600, letterSpacing: "0.03em", border: "1px solid rgba(15, 111, 236, 0.35)", background: "transparent", whiteSpace: "nowrap", width: "fit-content", maxWidth: "100%", overflow: "hidden", textOverflow: "ellipsis" }}>
//                                 <FaAward size={12} style={{ marginRight: 4 }} />
//                                 Partner University
//                               </div>

//                               <div style={{ fontSize: "0.75rem", color: "#047857", padding: "4px 10px", borderRadius: 999, fontFamily: "'Inter', sans-serif", fontWeight: 600, letterSpacing: "0.03em", border: "1px solid rgba(4, 120, 87, 0.35)", background: "rgba(16, 185, 129, 0.06)", whiteSpace: "nowrap", width: "fit-content", maxWidth: "100%", overflow: "hidden", textOverflow: "ellipsis" }}>
//                                 <FaGraduationCap size={12} style={{ marginRight: 4 }} /> Scholarship guaranteed
//                               </div>
//                             </>
//                           )}
//                         </div>

//                         {c.types && (
//                           <div style={{ fontSize: "0.75rem", color: "#111827", background: "rgba(15, 23, 42, 0.04)", padding: "5px 10px", borderRadius: 999, fontFamily: "'Inter', sans-serif", fontWeight: 500, border: "1px solid rgba(148, 163, 184, 0.6)", whiteSpace: "nowrap", maxWidth: "100%", overflow: "hidden", textOverflow: "ellipsis" }}>
//                             <FaUserGraduate size={12} style={{ marginRight: 4 }} /> {c.types}
//                           </div>
//                         )}
//                       </div>

//                       <button
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           toggleWishlist(c._id);
//                         }}
//                         className="btn btn-light rounded-circle position-absolute"
//                         style={{
//                           top: 12,
//                           right: 12,
//                           background: wishlist.has(c._id) ? "rgba(231, 76, 60, 0.1)" : "rgba(255, 255, 255, 0.95)",
//                           border: wishlist.has(c._id) ? "1px solid rgba(231, 76, 60, 0.2)" : "none",
//                           width: "40px",
//                           height: "40px",
//                           boxShadow: wishlist.has(c._id) ? "0 2px 8px rgba(231, 76, 60, 0.15)" : "0 2px 8px rgba(0, 0, 0, 0.1)",
//                           zIndex: 10,
//                         }}
//                         title={wishlist.has(c._id) ? "Remove from wishlist" : "Add to wishlist"}
//                       >
//                         <FaHeart size={20} style={{ color: wishlist.has(c._id) ? "#e74c3c" : "#bdc3c7", transition: "color 0.3s ease", filter: wishlist.has(c._id) ? "drop-shadow(0 1px 2px rgba(231, 76, 60, 0.3))" : "none" }} />
//                       </button>

//                       <div className="card-body d-flex flex-column" style={{ padding: "clamp(16px, 5vw, 24px)", paddingTop: c.partners ? "clamp(100px, 25vw, 120px)" : "clamp(55px, 15vw, 70px)" }}>
//                         <h5 className="fw-bold mb-3" style={{ fontSize: "clamp(1rem, 3vw, 1.2rem)", color: "#1a1a1a", lineHeight: "1.4", fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.3px", wordBreak: "break-word" }}>
//                           {c.title}
//                         </h5>

//                         <div className="mb-3 d-flex flex-wrap align-items-center" style={{ gap: "8px" }}>
//                           <div className="d-flex align-items-center" style={{ gap: "8px", minWidth: 0 }}>
//                             <FaBook size={18} style={{ color: "#111827", flexShrink: 0 }} />
//                             <p style={{ fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)", color: "#1f2937", margin: "0", fontWeight: 500, fontFamily: "'Inter', sans-serif", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
//                               {c.university}
//                             </p>
//                           </div>
//                           {c.country && (
//                             <span style={{ fontSize: "0.75rem", padding: "3px 8px", borderRadius: "999px", background: "rgba(15, 23, 42, 0.04)", color: "#111827", border: "1px solid rgba(148, 163, 184, 0.6)", fontWeight: 500, fontFamily: "'Inter', sans-serif", whiteSpace: "nowrap" }}>
//                               <FaGlobe size={12} style={{ marginRight: 4 }} /> {c.country}
//                             </span>
//                           )}
//                         </div>

//                         <hr style={{ border: "none", borderTop: "1px solid rgba(0, 0, 0, 0.08)", margin: "16px 0" }} />

//                         <div className="d-flex flex-column text-secondary mb-4 mt-auto" style={{ fontSize: "clamp(0.85rem, 2vw, 0.9rem)", gap: "12px", fontFamily: "'Inter', sans-serif" }}>
//                           <span className="d-flex align-items-center flex-wrap">
//                             <FaClock className="me-2" size={14} style={{ color: "#6b7280", flexShrink: 0 }} />
//                             <strong style={{ color: "#1a1a1a" }}>Duration:</strong>
//                             <span className="ms-2" style={{ wordBreak: "break-word" }}>{c.duration}</span>
//                           </span>
//                           <span className="d-flex align-items-center flex-wrap">
//                             <FaMoneyBillWave className="me-2" size={14} style={{ color: "#6b7280", flexShrink: 0 }} />
//                             <strong style={{ color: "#1a1a1a" }}>Tuition Fee:</strong>
//                             <span className="ms-2" style={{ wordBreak: "break-word" }}>{formatINR(c.tuition_fee)} (approx)</span>
//                           </span>
//                         </div>

//                         <button
//                           className="btn w-100"
//                           style={{
//                             borderRadius: "8px",
//                             backgroundColor: "#27ae60",
//                             color: "#fff",
//                             border: "none",
//                             fontWeight: "600",
//                             padding: "clamp(10px, 2vw, 12px) 16px",
//                             fontSize: "clamp(0.85rem, 2vw, 0.95rem)",
//                             transition: "all 0.3s ease",
//                             fontFamily: "'Outfit', sans-serif",
//                             cursor: "pointer",
//                           }}
//                           onMouseEnter={(e) => {
//                             e.currentTarget.style.backgroundColor = "#229954";
//                             e.currentTarget.style.transform = "translateY(-2px)";
//                             e.currentTarget.style.boxShadow = "0 4px 12px rgba(39, 174, 96, 0.3)";
//                           }}
//                           onMouseLeave={(e) => {
//                             e.currentTarget.style.backgroundColor = "#27ae60";
//                             e.currentTarget.style.transform = "translateY(0)";
//                             e.currentTarget.style.boxShadow = "none";
//                           }}
//                        onClick={() => {
//   const token = localStorage.getItem("token");

//   if (!token) {
//     navigate("/sign-up", {
//       state: { from: `/course-details/${c._id}` },
//     });
//     return;
//   }

//   navigate(`/course-details/${c._id}`);
// }}

//                         >
//                           View Details
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="d-flex justify-content-center align-items-center gap-3 my-4">
//                 <Button variant="outline-success" onClick={() => setPage(page - 1)} disabled={page <= 1}>
//                   Previous
//                 </Button>
//                 <span>
//                   Page {page} of {totalPages}
//                 </span>
//                 <Button variant="outline-success" onClick={() => setPage(page + 1)} disabled={page >= totalPages}>
//                   Next
//                 </Button>
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//       <FooterTwo />
//     </Wrapper>
//   );
// };

// export default Courses;
// Courses.tsx

import React, { useEffect, useRef, useState, FC } from "react";
import InnerHeader from "../layouts/headers/InnerHeader";
import Wrapper from "../layouts/Wrapper";
import FooterTwo from "../layouts/footers/FooterTwo";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import {
  FaBook,
  FaClock,
  FaMoneyBillWave,
  FaFileAlt,
  FaExclamationCircle,
  FaHeart,
  FaFilter,
} from "react-icons/fa";
import { FaAward, FaGraduationCap, FaGlobe, FaUserGraduate } from "react-icons/fa";
import { Button, Form, ButtonGroup } from "react-bootstrap";
import useCourseSearch from "./SearchAndFilter";

const getApiBaseUrl = () => {
  if (typeof window !== "undefined") {
    const hostname = window.location.hostname;
    if (hostname === "mystudyx.io" || hostname === "www.mystudyx.io") return "/api";
    if (hostname === "168.231.103.88") return "http://168.231.103.88:3000/api";
    if (hostname === "localhost" || hostname === "127.0.0.1") return "http://localhost:3000/api";
    return "/api";
  }
  return "http://localhost:3000/api";
};
const API_BASE = getApiBaseUrl();

interface Course {
  _id: string;
  title: string;
  university: string;
  country: string;
  tuition_fee: string;
  duration: string;
  partners: boolean;
  types?: string; // "Bachelors" | "Masters" | "Phd"
  rank?: string;

}
interface ApiResponse {
  data: Course[];
  message?: string;
  success: boolean;
  page?: number;
  pages?: number;
  count?: number;
  total?: number;
}

const AUTOCOMPLETE_STYLE: React.CSSProperties = {
  position: "absolute",
  left: 0,
  right: 0,
  top: "100%",
  background: "white",
  border: "1px solid #ccc",
  maxHeight: 180,
  overflowY: "auto",
  margin: 0,
  padding: 0,
  listStyleType: "none",
  zIndex: 1500,
  borderRadius: "0 0 4px 4px",
};



const uniqById = (arr: Course[] = []) => {
  const seen = new Set<string>();
  const out: Course[] = [];
  for (const it of arr) {
    if (!it || !it._id) continue;
    if (!seen.has(it._id)) {
      seen.add(it._id);
      out.push(it);
    }
  }
  return out;
};

const TYPE_OPTIONS = ["Bachelors", "Masters", "Phd"] as const;

const Courses: FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false);

  // Filter box open/close
  const [showFilterBox, setShowFilterBox] = useState<boolean>(false);

  // small filter validation message
  const [filterError, setFilterError] = useState<string>("");

  // Country filter (typed + applied)
  const [countryInput, setCountryInput] = useState<string>("");
  const [appliedCountry, setAppliedCountry] = useState<string>("");
  const [countrySuggestions, setCountrySuggestions] = useState<string[]>([]);
  const [showCountrySuggestions, setShowCountrySuggestions] = useState<boolean>(false);
  const countryDebounce = useRef<ReturnType<typeof setTimeout> | null>(null);
  const countryInputRef = useRef<HTMLInputElement | null>(null);

  // University filter (typed + applied)
  const [universityInput, setUniversityInput] = useState<string>("");
  const [appliedUniversity, setAppliedUniversity] = useState<string>("");
  const [universitySuggestions, setUniversitySuggestions] = useState<string[]>([]);
  const [showUniversitySuggestions, setShowUniversitySuggestions] = useState<boolean>(false);
  const universityDebounce = useRef<ReturnType<typeof setTimeout> | null>(null);
  const universityInputRef = useRef<HTMLInputElement | null>(null);
const [isRendering, setIsRendering] = useState(true);
  // ✅ Type filter (top-right)
  const [appliedType, setAppliedType] = useState<string>("");
  const [scholarshipOnly, setScholarshipOnly] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const {
    searchInput,
    setSearchInput,
    queryKeyword,
    suggestions,
    showSuggestions,
    setShowSuggestions,
    searchInputRef,
    handleSearchSubmit,
    handleSuggestionClick,
    handleClearSearch,
  } = useCourseSearch({
    API_BASE,
    locationSearch: location.search,
    appliedCountry,
    appliedType,
    onSearchApplied: () => setPage(1),
  });

  // Country autocomplete
  useEffect(() => {
    const typed = countryInput.trim();
    const applied = appliedCountry.trim();

    if (!typed || typed === applied) {
      setCountrySuggestions([]);
      setShowCountrySuggestions(false);
      return;
    }

    if (countryDebounce.current) clearTimeout(countryDebounce.current);

    countryDebounce.current = setTimeout(async () => {
      try {
        const qs = new URLSearchParams();
        qs.set("suggest", "country");
        qs.set("q", typed);

        const url = `${API_BASE}/search_and_filter_courses?${qs.toString()}`;
        const res = await axios.get<{ success: boolean; data: string[] }>(url);

        if (res.data.success) {
          setCountrySuggestions(res.data.data || []);
          setShowCountrySuggestions(true);
        } else {
          setCountrySuggestions([]);
          setShowCountrySuggestions(false);
        }
      } catch {
        setCountrySuggestions([]);
        setShowCountrySuggestions(false);
      }
    }, 250);

    return () => {
      if (countryDebounce.current) clearTimeout(countryDebounce.current);
    };
  }, [API_BASE, countryInput, appliedCountry]);

  // University autocomplete (+ country from appliedCountry OR typed countryInput)
  useEffect(() => {
    const typed = universityInput.trim();
    const applied = appliedUniversity.trim();

    if (!typed || typed === applied) {
      setUniversitySuggestions([]);
      setShowUniversitySuggestions(false);
      return;
    }

    if (universityDebounce.current) clearTimeout(universityDebounce.current);

    universityDebounce.current = setTimeout(async () => {
      try {
        const qs = new URLSearchParams();
        qs.set("suggest", "university");
        qs.set("q", typed);

        const countryForUniSuggest = appliedCountry.trim() || countryInput.trim();
        if (countryForUniSuggest) qs.set("country", countryForUniSuggest);

        const url = `${API_BASE}/search_and_filter_courses?${qs.toString()}`;
        const res = await axios.get<{ success: boolean; data: string[] }>(url);

        if (res.data.success) {
          setUniversitySuggestions(res.data.data || []);
          setShowUniversitySuggestions(true);
        } else {
          setUniversitySuggestions([]);
          setShowUniversitySuggestions(false);
        }
      } catch {
        setUniversitySuggestions([]);
        setShowUniversitySuggestions(false);
      }
    }, 250);

    return () => {
      if (universityDebounce.current) clearTimeout(universityDebounce.current);
    };
  }, [API_BASE, universityInput, appliedUniversity, appliedCountry, countryInput]);

  const applyCountry = (val?: string) => {
    const v = String(val ?? countryInput).trim();

    setFilterError("");
    setAppliedCountry(v);
    setCountryInput(v);
    setPage(1);
    setShowCountrySuggestions(false);
    setCountrySuggestions([]);

    // when country changes, clear university
    setAppliedUniversity("");
    setUniversityInput("");
    setUniversitySuggestions([]);
    setShowUniversitySuggestions(false);
  };

  const applyUniversity = (val?: string) => {
    const v = String(val ?? universityInput).trim();
    setFilterError("");

    setAppliedUniversity(v);
    setUniversityInput(v);
    setPage(1);
    setShowUniversitySuggestions(false);
    setUniversitySuggestions([]);
  };

  // Apply button: validate university only
  const applyAllFilters = async () => {
    setFilterError("");

    const c = (countryInput.trim() || appliedCountry.trim()).trim();
    const u = universityInput.trim();

    if (c && u) {
      try {
        const qs = new URLSearchParams();
        qs.set("suggest", "university");
        qs.set("q", u);
        qs.set("country", c);

        const url = `${API_BASE}/search_and_filter_courses?${qs.toString()}`;
        const res = await axios.get<{ success: boolean; data: string[] }>(url);

        const list = res.data?.data || [];
        const ok = list.some((x) => String(x).toLowerCase() === u.toLowerCase());

        if (!ok) {
          setFilterError(`"${u}" is not available in ${c}. Please pick a university from suggestions.`);
          return;
        }
      } catch {
        setFilterError("Unable to validate university. Try again.");
        return;
      }
    }

    applyCountry(c);
    applyUniversity(u);
    setShowFilterBox(false);
  };

  const handleResetAll = () => {
    setFilterError("");
    handleClearSearch();

    setAppliedCountry("");
    setCountryInput("");
    setCountrySuggestions([]);
    setShowCountrySuggestions(false);

    setAppliedUniversity("");
    setUniversityInput("");
    setUniversitySuggestions([]);
    setShowUniversitySuggestions(false);

    setAppliedType("");

    setShowFilterBox(false);
    setError(null);
    setPage(1);
  };

  // Fetch courses
  useEffect(() => {
    const controller = new AbortController();

    const fetchCourses = async () => {
      setLoading(true);
      setError(null);
setIsRendering(true);   // ✅ ADD THIS
      try {
        const params = new URLSearchParams();
        params.set("page", String(page));

        if (appliedCountry.trim()) params.set("country", appliedCountry.trim());
        if (appliedUniversity.trim()) params.set("university", appliedUniversity.trim());
        if (appliedType.trim()) params.set("type", appliedType.trim());
        if (scholarshipOnly) params.set("scholarship", "true");
        if (queryKeyword.trim()) params.set("q", queryKeyword.trim());

        const hasAnySearchOrFilter = Boolean(
          queryKeyword.trim() || appliedCountry.trim() || appliedUniversity.trim() || appliedType.trim()
        );

        const url = hasAnySearchOrFilter
          ? `${API_BASE}/search_and_filter_courses?${params.toString()}`
          : `${API_BASE}/get_all_courses?${params.toString()}`;

        const res = await axios.get<ApiResponse>(url, {
          signal: controller.signal,
          timeout: 10000,
        });

        if (res.data.success) {
          const unique = uniqById(res.data.data || []);

          setCourses(unique);
          setTotalPages(res.data.pages || 1);
         setTimeout(() => {
  setIsRendering(false);   // ✅ wait until UI ready
  setHasLoadedOnce(true);
}, 200);
        } else {
          setCourses([]);
        }
      } catch (err: any) {
        if (err?.code !== "ERR_CANCELED") setError("Failed to load courses.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
    return () => controller.abort();
  }, [page, queryKeyword, appliedCountry, appliedUniversity, appliedType]);

  // Wishlist fetch
  useEffect(() => {
    const fetchWishlist = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;
      try {
        const res = await fetch(`${API_BASE}/displayWishlist`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (data.success && Array.isArray(data.wishlist)) {
          setWishlist(new Set(data.wishlist.map((c: any) => c._id || c)));
        }
      } catch { }
    };

    fetchWishlist();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

const toggleWishlist = async (courseId: string) => {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("You must be logged in to use wishlist.");
    navigate("/sign-up");   // ✅ redirect
    return;
  }

    try {
      if (!wishlist.has(courseId)) {
        const res = await axios.post(
          `${API_BASE}/addToWishlist`,
          { courseId },
          { headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` } }
        );
        if (res.data.success) setWishlist(new Set(res.data.wishlist.map((c: any) => c._id || c)));
      } else {
        const res = await axios.post(
          `${API_BASE}/removeWishlist`,
          { courseId },
          { headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` } }
        );
        if (res.data.success) setWishlist(new Set(res.data.wishlist.map((c: any) => c._id || c)));
      }
    } catch (error) {
      console.error("Wishlist error:", error);
      alert("Network error updating wishlist.");
    }
  };

  const hasAnyActive = Boolean(
    queryKeyword.trim() || appliedCountry.trim() || appliedUniversity.trim() || appliedType.trim()
  );
  // ✅ handle sorting + filtering
const filteredCourses = [...courses].sort((a, b) => {
  if (b.partners !== a.partners) {
    return Number(b.partners) - Number(a.partners);
  }
  return Number(a.rank || 9999) - Number(b.rank || 9999);
});
// ✅ pagination for scholarship mode
const paginatedCourses = filteredCourses;
  return (
    <Wrapper>
      <InnerHeader />

      <div
        className="py-4 py-md-5"
        style={{ background: "linear-gradient(135deg, #f4fbf6 0%, #f9fffb 40%, #f3f9ff 100%)" }}
      >
        <div
          className="container"
          style={{
            maxWidth: 1200,
            background: "#ffffff",
            borderRadius: 18,
            boxShadow: "0 18px 45px rgba(15, 23, 42, 0.10)",
            padding: "24px 20px 32px",
          }}
        >
          {/* Title (left) + Types buttons (top-right) */}
          <div className="mb-3 d-flex flex-column flex-md-row align-items-start gap-3">
            <div>
              <h2
                className="fw-bold mb-1"
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
                  color: "#111827",
                  fontFamily: "'Outfit', sans-serif",
                  letterSpacing: "-0.04em",
                }}
              >
                Explore Courses
              </h2>
              <p
                className="text-muted mb-0"
                style={{
                  fontSize: "clamp(0.9rem, 2vw, 1rem)",
                  fontFamily: "'Inter', sans-serif",
                  color: "#6b7280",
                }}
              >
                Curated programs from leading universities worldwide.
              </p>
            </div>

            {/* ✅ Types on top-right */}
            <div className="ms-md-auto w-100 w-md-auto">
              <div className="d-flex justify-content-md-end justify-content-start">
                <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
                  <ButtonGroup style={{ gap: 10, flexWrap: "wrap" }}>
                    <Button
                      type="button"
                      size="sm"
                      style={{
                        borderRadius: 999,
                        padding: "8px 14px",
                        minWidth: 88,
                        fontWeight: 700,
                        whiteSpace: "nowrap",
                      }}
                      variant={appliedType === "" ? "success" : "outline-success"}
                      onClick={() => {
                        setAppliedType("");
                        setPage(1);
                      }}
                    >
                      All
                    </Button>

                    {TYPE_OPTIONS.map((t) => (
                      <Button
                        key={t}
                        type="button"
                        size="sm"
                        style={{
                          borderRadius: 999,
                          padding: "8px 14px",
                          minWidth: 110,
                          fontWeight: 700,
                          whiteSpace: "nowrap",
                        }}
                        variant={appliedType === t ? "success" : "outline-success"}
                        onClick={() => {
                          setAppliedType(t);
                          setPage(1);
                        }}
                      >
                        {t}
                      </Button>
                    ))}
                  </ButtonGroup>
               {/* ✅ ADD THIS BELOW TYPES */}
<div
  className="mt-4 d-flex align-items-center justify-content-end w-100"
  style={{ gap: 8 }}
>
  <span
    style={{
      fontWeight: 600,
      fontSize: 14,
      lineHeight: "20px",   // 🔥 aligns text properly
    }}
  >
    Scholarship Guaranteed
  </span>

  <Form.Check
    type="switch"
    id="scholarship-switch"
    checked={scholarshipOnly}
    onChange={() => {
      setScholarshipOnly((prev) => !prev);
      setPage(1);
    }}
    style={{
      marginLeft: 6,        // 👉 pushes toggle slightly right
      marginTop: 2,         // 👉 moves toggle slightly DOWN
    }}
  />
</div>
                </div>
              </div>
            </div>
          </div>

          {/* Applied badges row (below header) */}
          {hasAnyActive && (
            <div className="mb-4 d-flex flex-wrap align-items-center gap-2">
              {queryKeyword && (
                <span className="badge rounded-pill bg-success-subtle text-success px-3 py-2">
                  Title: <strong className="ms-1">{queryKeyword}</strong>
                </span>
              )}
              {appliedCountry.trim() && (
                <span className="badge rounded-pill bg-success-subtle text-success px-3 py-2">
                  Country: <strong className="ms-1">{appliedCountry}</strong>
                </span>
              )}
              {appliedUniversity.trim() && (
                <span className="badge rounded-pill bg-success-subtle text-success px-3 py-2">
                  Univ: <strong className="ms-1">{appliedUniversity}</strong>
                </span>
              )}
              {appliedType.trim() && (
                <span className="badge rounded-pill bg-success-subtle text-success px-3 py-2">
                  Type: <strong className="ms-1">{appliedType}</strong>
                </span>
              )}

            </div>
          )}

          {/* Search + Filter + Reset */}
          <form
            onSubmit={handleSearchSubmit}
            className="d-flex flex-column flex-md-row align-items-stretch w-100 mb-2"
            style={{ gap: "0.75rem", position: "relative" }}
          >
            <input
              type="text"
              className="form-control flex-grow-1"
              placeholder="Search by Course Keyword (zoology,computer science,finance)"
              ref={searchInputRef}
              value={searchInput}
              onChange={(e) => {
                const val = e.target.value;
                setSearchInput(val);
                if (!val.trim() && queryKeyword.trim()) handleClearSearch();
              }}
              onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              aria-label="Search courses by title"
              autoComplete="off"
              style={{ minWidth: 0 }}
            />

            <Button type="submit" variant="success" className="px-4 flex-shrink-0" style={{ width: "100%", maxWidth: 180 }}>
              Search
            </Button>

            <Button
              type="button"
              variant="outline-secondary"
              className="px-4 flex-shrink-0"
              style={{ width: "100%", maxWidth: 180, whiteSpace: "nowrap" }}
              onClick={() => setShowFilterBox((s) => !s)}
            >
              <FaFilter style={{ marginRight: 6 }} /> Filter
            </Button>

            <Button
              type="button"
              variant="outline-danger"
              className="px-4 flex-shrink-0"
              style={{ width: "100%", maxWidth: 180, whiteSpace: "nowrap" }}
              onClick={handleResetAll}

              disabled={!hasAnyActive}
              title={!hasAnyActive ? "Nothing to reset" : "Reset all filters"}
            >
              Reset
            </Button>

            {showSuggestions && (
              <ul style={AUTOCOMPLETE_STYLE}>
                {suggestions.length === 0 ? (
                  <li style={{ padding: 8 }}>No suggestions</li>
                ) : (
                  suggestions.map((s, idx) => (
                    <li
                      key={idx}
                      style={{ padding: 8, cursor: "pointer" }}
                      onMouseDown={() => handleSuggestionClick(s)}
                    >
                      {s}
                    </li>
                  ))
                )}
              </ul>
            )}
          </form>

          {/* Filter box: Country + University */}
          {showFilterBox && (
            <div
              className="mb-4"
              style={{
                border: "1px solid rgba(15, 23, 42, 0.10)",
                borderRadius: 10,
                padding: 12,
                background: "#fff",
                maxWidth: 520,
                boxShadow: "0 10px 28px rgba(15, 23, 42, 0.10)",
              }}
            >
              <div className="d-flex align-items-center justify-content-between mb-2" style={{ gap: 10 }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: "#111827" }}>Filters</div>

                <div className="d-flex gap-2">
                  <Button type="button" size="sm" variant="outline-secondary" onClick={applyAllFilters}>
                    Apply
                  </Button>
                </div>
              </div>

              {filterError && (
                <div className="alert alert-warning py-2 mb-3" style={{ borderRadius: 8 }}>
                  {filterError}
                </div>
              )}

              {/* Country */}
              <div className="mb-3">
                <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: "#111827", marginBottom: 6 }}>
                  Country
                </div>

                <div style={{ position: "relative" }}>
                  <Form.Control
                    ref={countryInputRef}
                    placeholder="Type country name..."
                    value={countryInput}
                    onChange={(e) => {
                      const val = e.target.value;
                      setCountryInput(val);
                      setFilterError("");

                      if (!val.trim()) {
                        setAppliedCountry("");

                        setAppliedUniversity("");
                        setUniversityInput("");
                        setUniversitySuggestions([]);
                        setShowUniversitySuggestions(false);

                        setCountrySuggestions([]);
                        setShowCountrySuggestions(false);

                        setPage(1);
                      }
                    }}
                    onFocus={() => countrySuggestions.length > 0 && setShowCountrySuggestions(true)}
                    onBlur={() => setTimeout(() => setShowCountrySuggestions(false), 200)}
                    autoComplete="off"
                  />

                  {showCountrySuggestions && (
                    <ul style={AUTOCOMPLETE_STYLE}>
                      {countrySuggestions.length === 0 ? (
                        <li style={{ padding: 8 }}>No countries</li>
                      ) : (
                        countrySuggestions.map((c, idx) => (
                          <li
                            key={idx}
                            style={{ padding: 8, cursor: "pointer" }}
                            onMouseDown={() => applyCountry(c)}
                          >
                            {c}
                          </li>
                        ))
                      )}
                    </ul>
                  )}
                </div>
              </div>

              {/* University */}
              <div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: "#111827", marginBottom: 6 }}>
                  University
                </div>

                <div style={{ position: "relative" }}>
                  <Form.Control
                    ref={universityInputRef}
                    placeholder="Type university name..."
                    value={universityInput}
                    onChange={(e) => {
                      const val = e.target.value;
                      setUniversityInput(val);
                      setFilterError("");

                      if (!val.trim()) {
                        setAppliedUniversity("");
                        setUniversitySuggestions([]);
                        setShowUniversitySuggestions(false);
                        setPage(1);
                      }
                    }}
                    onFocus={() => universitySuggestions.length > 0 && setShowUniversitySuggestions(true)}
                    onBlur={() => setTimeout(() => setShowUniversitySuggestions(false), 200)}
                    autoComplete="off"
                  />

                  {showUniversitySuggestions && (
                    <ul style={AUTOCOMPLETE_STYLE}>
                      {universitySuggestions.length === 0 ? (
                        <li style={{ padding: 8 }}>No universities</li>
                      ) : (
                        universitySuggestions.map((u, idx) => (
                          <li
                            key={idx}
                            style={{ padding: 8, cursor: "pointer" }}
                            onMouseDown={() => applyUniversity(u)}
                          >
                            {u}
                          </li>
                        ))
                      )}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          )}

{(loading || isRendering) && !error && courses.length === 0 && (
            <div className="d-flex flex-column justify-content-center align-items-center py-5">
              <div className="spinner-border" style={{ color: "#27ae60", width: 50, height: 50 }} role="status" />
              <div
                style={{
                  marginTop: 12,
                  fontFamily: "'Outfit',sans-serif",
                  color: "#27ae60",
                  fontWeight: 600,
                  fontSize: "1.18rem",
                }}
              >
                Loading courses...
              </div>
            </div>
          )}

          {error && !loading && (
            <div
              className="alert alert-danger d-flex align-items-center"
              role="alert"
              style={{ borderRadius: "8px", fontFamily: "'Inter', sans-serif" }}
            >
              <FaExclamationCircle className="me-2" size={20} />
              <span>{error}</span>
            </div>
          )}

   
{!loading && !isRendering && hasLoadedOnce && !error && courses.length === 0 && (
  <div className="text-center py-5">
    <FaFileAlt size={64} className="mb-3" style={{ color: "#ddd" }} />
    <h5 className="text-muted">
      No Courses Available
    </h5>
  </div>
)}

   {!loading && !isRendering && !error && courses.length > 0 && (
            <>
              <div className="row g-3">
            {paginatedCourses.map((c) => (
                  <div key={c._id} className="col-12 col-sm-6 col-lg-4">
                    <div
                      className="card h-100 border-0 shadow-sm position-relative"
                      style={{ borderRadius: 14, overflow: "hidden", cursor: "pointer" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-4px)";
                        e.currentTarget.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.12)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "";
                      }}
                      onClick={() => {
                        const token = localStorage.getItem("token");
                        if (!token) {
                          navigate("/sign-up", { state: { from: `/course-details/${c._id}` } });
                          return;
                        }
                        navigate(`/course-details/${c._id}`);
                      }}
                    >
                      {/* Wishlist button */}
                      <button
                        type="button"
               onClick={(e) => {
  e.stopPropagation();
  toggleWishlist(c._id);
}}
                        className="btn btn-light rounded-circle position-absolute"
                        style={{
                          top: 10,
                          right: 10,
                          width: 40,
                          height: 40,
                          zIndex: 2,
                          background: wishlist.has(c._id)
                            ? "rgba(231, 76, 60, 0.12)"
                            : "rgba(255, 255, 255, 0.95)",
                          border: wishlist.has(c._id)
                            ? "1px solid rgba(231, 76, 60, 0.20)"
                            : "1px solid rgba(0,0,0,0.06)",
                        }}
                        title={wishlist.has(c._id) ? "Remove from wishlist" : "Add to wishlist"}
                      >
                        <FaHeart size={18} style={{ color: wishlist.has(c._id) ? "#e74c3c" : "#bdc3c7" }} />
                      </button>

                      {/* Header badges */}
                      <div className="card-header bg-white border-0 pb-0">
                        <div className="d-flex flex-wrap gap-2 pe-5">
                          {c.partners && (
                            <>
                              <span className="badge rounded-pill text-primary bg-primary-subtle border border-primary-subtle">
                                <FaAward size={12} className="me-1" /> Partner University
                              </span>
                              <span className="badge rounded-pill text-success bg-success-subtle border border-success-subtle">
                                <FaGraduationCap size={12} className="me-1" /> Scholarship guaranteed
                              </span>
                            </>
                          )}

                          {c.types && (
                            <span className="badge rounded-pill text-dark bg-light border">
                              <FaUserGraduate size={12} className="me-1" /> {c.types}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Body */}
                      <div className="card-body pt-3 d-flex flex-column">
                        <h5 className="fw-bold mb-2" style={{ fontFamily: "'Outfit', sans-serif", lineHeight: 1.3 }}>
                          {c.title}
                        </h5>

                        {/* University + Country */}
                        <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
                          <div className="d-flex align-items-center min-w-0 flex-grow-1">
                            <FaBook size={16} className="me-2 flex-shrink-0" style={{ color: "#111827" }} />
                            <span
                              className="text-truncate"
                              style={{ maxWidth: "100%", fontWeight: 600, color: "#1f2937" }}
                            >
                              {c.university}
                            </span>
                          </div>

                          {c.country && (
                            <span className="badge rounded-pill text-dark bg-light border">
                              <FaGlobe size={12} className="me-1" /> {c.country}
                            </span>
                          )}
                        </div>
                       {c.rank &&
  c.rank.toString().trim() !== "" &&
  c.rank.toString().toLowerCase() !== "nil" && (
  <div className="d-flex align-items-start gap-2">
    <FaAward size={14} className="mt-1 flex-shrink-0" style={{ color: "#f59e0b" }} />
    <div className="min-w-0">
      <span
        className="badge rounded-pill"
        style={{
          background: "#fef9c3",
          color: "#854d0e",
          border: "1px solid #fde047",
          fontWeight: 600,
          padding: "5px 10px",
        }}
      >
        QS World Ranking: {c.rank}
      </span>
    </div>
  </div>
)}
                        {/* Meta */}
                        <div className="d-flex flex-column gap-2 text-secondary" style={{ fontSize: "0.92rem" }}>
                          <div className="d-flex align-items-start gap-2">
                            <FaClock size={14} className="mt-1 flex-shrink-0" style={{ color: "#6b7280" }} />
                            <div className="min-w-0">
                              <span className="fw-bold text-dark">Duration:</span>{" "}
                              <span className="text-break">{c.duration}</span>
                            </div>
                          </div>

                          <div className="d-flex align-items-start gap-2">
                            <FaMoneyBillWave size={14} className="mt-1 flex-shrink-0" style={{ color: "#6b7280" }} />
                            <div className="min-w-0">
                              <span className="fw-bold text-dark">Tuition Fee:</span>{" "}
                              <span className="text-break">
                               {c.tuition_fee}/year (approx)
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-auto pt-3">
                          <button
                            type="button"
                            className="btn btn-success w-100"
                            style={{ fontWeight: 700, borderRadius: 10, fontFamily: "'Outfit', sans-serif" }}
                            onClick={(e) => {
                              e.stopPropagation();
                              const token = localStorage.getItem("token");
                              if (!token) {
                                navigate("/sign-up", { state: { from: `/course-details/${c._id}` } });
                                return;
                              }
                              navigate(`/course-details/${c._id}`);
                            }}
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="d-flex justify-content-center align-items-center gap-3 my-4">
                <Button variant="outline-success" onClick={() => setPage(page - 1)} disabled={page <= 1}>
                  Previous
                </Button>
                <span>
            Page {page} of {totalPages}
                </span>
                <Button variant="outline-success" onClick={() => setPage(page + 1)} disabled={page >= totalPages}>
                  Next
                </Button>
              </div>
            </>
          )}
        </div>
      </div>

      <FooterTwo />
    </Wrapper>
  );
};

export default Courses;
