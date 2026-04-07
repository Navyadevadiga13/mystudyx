import React, { useEffect, useState } from "react";
import InnerHeader from "../layouts/headers/InnerHeader";
import Wrapper from "../layouts/Wrapper";
import { useNavigate } from "react-router-dom";
import { FaBook, FaClock, FaMoneyBillWave, FaHeart } from "react-icons/fa";
const getApiBaseUrl = () => {
  if (typeof window !== "undefined") {
    const hostname = window.location.hostname;

    // production: mystudyx.io via Nginx proxy
    if (hostname === "mystudyx.io" || hostname === "www.mystudyx.io") {
      return "/api";
    }

    // direct IP access (optional)
    if (hostname === "168.231.103.88") {
      return "http://168.231.103.88:3000/api";
    }

    // local development
    if (hostname === "localhost" || hostname === "127.0.0.1") {
      return "http://localhost:3000/api";
    }

    // default fallback
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
  image?: string;
}

const Wishlist: React.FC = () => {
  const [wishlist, setWishlist] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const getToken = () => localStorage.getItem("token");

  useEffect(() => {
    const fetchWishlist = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`${API_BASE}/displayWishlist`, {
          headers: { Authorization: "Bearer " + getToken() },
        });
        const data = await res.json();
        if (data.success) {
          setWishlist(data.wishlist);
        } else {
          setError(data.message || "Failed to fetch wishlist.");
        }
      } catch {
        setError("Network error");
      }
      setLoading(false);
    };

    fetchWishlist();
  }, []);

  const handleRemove = async (courseId: string) => {
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/removeWishlist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + getToken(),
        },
        body: JSON.stringify({ courseId }),
      });
      const data = await res.json();
      if (data.success) {
        setWishlist(data.wishlist);
      } else {
        setError(data.message || "Failed to remove course.");
      }
    } catch {
      setError("Network error");
    }
  };

  return (
    <Wrapper>
      <InnerHeader title="" />
      <div className="py-4 py-md-5" style={{ background: "linear-gradient(135deg,#f4fbf6 0%,#f9fffb 40%,#f3f9ff 100%)" }}>
        <div className="container" style={{ maxWidth: 1180, background: "#ffffff", borderRadius: 18, boxShadow: "0 18px 45px rgba(15,23,42,0.08)", padding: "24px 20px 32px" }}>
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3 mb-md-4">
            <div>
              <h2 className="fw-bold mb-1" style={{ fontSize: "clamp(1.8rem,4vw,2.4rem)", color: "#111827", fontFamily: "'Outfit',sans-serif", letterSpacing: "-0.04em" }}>
                Saved Programs
              </h2>
              <p className="mb-0" style={{ fontSize: "0.95rem", color: "#6b7280", fontFamily: "'Inter',sans-serif" }}>
                Your curated list of courses from leading universities worldwide.
              </p>
            </div>
            {wishlist.length > 0 && (
              <span className="mt-3 mt-md-0 px-3 py-1 rounded-pill" style={{ background: "rgba(39,174,96,0.08)", border: "1px solid rgba(39,174,96,0.2)", color: "#14532d", fontSize: "0.85rem", fontFamily: "'Inter',sans-serif" }}>
                {wishlist.length} course{wishlist.length > 1 ? "s" : ""} saved
              </span>
            )}
          </div>

          {loading ? (
            <div className="text-center py-5">Loading wishlist...</div>
          ) : error ? (
            <div className="alert alert-danger">{error}</div>
          ) : wishlist.length === 0 ? (
            <div className="text-center py-5">
              <span className="text-muted">You have not saved any programs yet.</span>
            </div>
          ) : (
            <div className="row g-4">
              {wishlist.map((course) => (
                <div key={course._id} className="col-12 col-sm-6 col-lg-4">
                  <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", position: "relative", overflow: "hidden" }}>
                    <button
                      onClick={() => handleRemove(course._id)}
                      className="btn btn-light rounded-circle position-absolute"
                      style={{ top: 12, right: 12, background: "#ffeaea", border: "1px solid #f5c6cb", width: 40, height: 40, zIndex: 10 }}
                    >
                      <FaHeart size={20} style={{ color: "#e74c3c" }} />
                    </button>

                    <div
                      style={{
                        position: "absolute",
                        top: 12,
                        left: 12,
                        fontSize: "0.75rem",
                        color: "#27ae60",
                        background: "rgba(39,174,96,0.12)",
                        padding: "5px 10px",
                        borderRadius: 6,
                        fontFamily: "'Inter',sans-serif",
                        fontWeight: 600,
                        zIndex: 10,
                        border: "1px solid rgba(39,174,96,0.2)",
                      }}
                    >
                      🌍 {course.country}
                    </div>

                    {course.image && (
                      <img src={course.image} className="card-img-top" alt={course.title} style={{ borderRadius: "12px 12px 0 0", objectFit: "cover", maxHeight: 170 }} />
                    )}

                    <div className="card-body d-flex flex-column" style={{ padding: "clamp(16px,5vw,24px)", paddingTop: "clamp(60px,6vw,8px)" }}>
                      <h5 className="fw-bold mb-3" style={{ fontSize: "clamp(1rem,3vw,1.2rem)", color: "#111827", fontFamily: "'Outfit',sans-serif", letterSpacing: "-0.02em" }}>
                        {course.title}
                      </h5>

                      <div className="mb-3 d-flex align-items-center" style={{ gap: 8 }}>
                        <FaBook size={18} style={{ color: "#111827" }} />
                        <p style={{ fontSize: "clamp(1rem,2.5vw,1.1rem)", color: "#1f2937", margin: 0, fontWeight: 500, fontFamily: "'Inter',sans-serif" }}>
                          {course.university}
                        </p>
                      </div>

                      <hr style={{ border: "none", borderTop: "1px solid rgba(0,0,0,0.06)", margin: "12px 0 14px" }} />

                      <div className="d-flex flex-column text-secondary mb-4 mt-auto" style={{ fontSize: "clamp(0.85rem,2vw,0.9rem)", gap: 10, fontFamily: "'Inter',sans-serif" }}>
                        <span className="d-flex align-items-center">
                          <FaClock className="me-2" size={14} style={{ color: "#6b7280", flexShrink: 0 }} />
                          <strong style={{ color: "#111827" }}>Duration:</strong>
                          <span className="ms-2">{course.duration}</span>
                        </span>
                        <span className="d-flex align-items-center">
                          <FaMoneyBillWave className="me-2" size={14} style={{ color: "#6b7280", flexShrink: 0 }} />
                          <strong style={{ color: "#111827" }}>Tuition fee:</strong>
                          <span className="ms-2">{course.tuition_fee}</span>
                        </span>
                      </div>

                      <button
                        className="btn w-100"
                        style={{
                          borderRadius: 8,
                          backgroundColor: "#27ae60",
                          color: "#fff",
                          border: "none",
                          fontWeight: 600,
                          padding: "clamp(10px,2vw,12px) 16px",
                          fontSize: "clamp(0.85rem,2vw,0.95rem)",
                          fontFamily: "'Outfit',sans-serif",
                          cursor: "pointer",
                          transition: "all 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#229954";
                          e.currentTarget.style.boxShadow = "0 6px 18px rgba(39,174,96,0.3)";
                          e.currentTarget.style.transform = "translateY(-1px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "#27ae60";
                          e.currentTarget.style.boxShadow = "none";
                          e.currentTarget.style.transform = "translateY(0)";
                        }}
                        onClick={() => navigate(`/course-details/${course._id}`)}
                      >
                        View details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Wishlist;
