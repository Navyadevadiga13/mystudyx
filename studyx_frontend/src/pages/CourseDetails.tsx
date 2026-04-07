import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import InnerHeader from "../layouts/headers/InnerHeader";
import Wrapper from "../layouts/Wrapper";
import FooterTwo from "../layouts/footers/FooterTwo";
import axios from "axios";

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
  credits: string;
  official_website: string;
  about: string;
  programme_structure: string;
  academic_requirements: string;
  english_requirements: string;
  other_requirements: string;
  partners?: boolean;
}

const CourseDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

useEffect(() => {
  if (!id) {
    setError("No course id provided.");
    setLoading(false);
    return;
  }

  const token = localStorage.getItem("token");

  // 🚨 NOT LOGGED IN → redirect
 if (!token) {
  navigate("/sign-up", {
    state: { from: `/course-details/${id}` },
    replace: true,
  });
  return;
}


  setLoading(true);

  axios.get(
    `${API_BASE}/get_course_by_id/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
  .then((res) => {
    if (res.data.success) {
      setCourse(res.data.data);
      setError("");
    } else {
      setError(res.data.message || "Course not found.");
    }
  })
  .catch((err) => {
    // 🚨 TOKEN INVALID / EXPIRED
    if (err.response?.status === 401) {
      localStorage.removeItem("token");
      navigate("/sign-up");
    } else {
      setError("Failed to fetch course details.");
    }
  })
  .finally(() => setLoading(false));
}, [id, navigate]);



  const getSafeUrl = (url: string): string => {
    if (!url) return "";
    const cleaned = url.replace(/[\s\u200B-\u200D\uFEFF\xA0]+/g, "");
    if (!cleaned) return "";
    return cleaned.startsWith("http://") || cleaned.startsWith("https://")
      ? cleaned
      : `https://${cleaned}`;
  };

  const safeUrl = course ? getSafeUrl(course.official_website) : "";

  const cardStyle: React.CSSProperties = {
    background: "#fff",
    borderRadius: "1.7rem",
    boxShadow: "0 12px 44px 0 rgba(34,44,90,0.16)",
    padding: "2rem 1.3rem",
    maxWidth: 1150,
    width: "100%",
    zIndex: 1,
    position: "relative",
  };

  useEffect(() => {
    const scrollbarStyles = `
      ::-webkit-scrollbar { width: 10px; background: white; }
      ::-webkit-scrollbar-thumb { background: #f5f5f5; border-radius: 6px; }
    `;
    const styleTag = document.createElement("style");
    styleTag.innerHTML = scrollbarStyles;
    document.body.appendChild(styleTag);
    return () => {
      document.body.removeChild(styleTag);
    };
  }, []);

  if (loading)
    return (
      <Wrapper>
        <InnerHeader />
        <div className="container py-5 text-center">
          <div className="spinner-border text-primary" role="status"></div>
          <div style={{ fontFamily: "Outfit, sans-serif" }}>
            Loading course details...
          </div>
        </div>
        <FooterTwo />
      </Wrapper>
    );

  if (error)
    return (
      <Wrapper>
        <InnerHeader />
        <div
          className="container py-5 text-center text-danger"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          {error}
        </div>
        <FooterTwo />
      </Wrapper>
    );

  if (!course)
    return (
      <Wrapper>
        <InnerHeader />
        <div
          className="container py-5 text-center"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          Course not found.
        </div>
        <FooterTwo />
      </Wrapper>
    );

  return (
    <Wrapper>
      <InnerHeader />

      <div
        className="d-flex justify-content-center align-items-start"
        style={{
          minHeight: "100vh",
          width: "100%",
          position: "relative",
          padding: "1.5rem 0.75rem",
          background:
            "url('https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat",
          overflowX: "hidden",
        }}
      >
        <div className="container" style={cardStyle}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              marginBottom: "0.6rem",
            }}
          >
            <button
              onClick={() => navigate("/courses")}
              className="btn btn-outline-primary"
              style={{
                borderRadius: "2rem",
                padding: "0.44rem 1.6rem 0.44rem 1.3rem",
                fontWeight: 600,
                fontSize: "1.02rem",
                fontFamily: "Outfit, sans-serif",
                boxShadow: "none",
              }}
            >
              &#8592; Go Back
            </button>
          </div>

          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 800,
                fontSize: "2.4rem",
                marginBottom: ".33rem",
                color: "#162148",
                letterSpacing: "-1px",
              }}
            >
              {course.title}
            </h1>
            <p
              style={{
                fontFamily: "Outfit, sans-serif",
                color: "#6b6e77",
                marginBottom: ".8rem",
                fontSize: "1.07rem",
              }}
            >
              {course.university} — {course.country}
            </p>

            {course.partners && (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "1rem",
                  fontFamily: "Outfit, sans-serif",
                }}
              >
                <span
                  style={{
                    fontSize: "0.8rem",
                    padding: "4px 10px",
                    borderRadius: 999,
                    background: "rgba(15, 111, 236, 0.06)",
                    color: "#0f6fec",
                    border: "1px solid rgba(15, 111, 236, 0.35)",
                    fontWeight: 600,
                    letterSpacing: "0.03em",
                  }}
                >
                  🏆 Partner University
                </span>
                <span
                  style={{
                    fontSize: "0.8rem",
                    padding: "4px 10px",
                    borderRadius: 999,
                    background: "rgba(16, 185, 129, 0.06)",
                    color: "#047857",
                    border: "1px solid rgba(4, 120, 87, 0.35)",
                    fontWeight: 600,
                    letterSpacing: "0.03em",
                  }}
                >
                  🎓 Scholarship guaranteed
                </span>
              </div>
            )}

            {safeUrl ? (
              <a
                href={safeUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  background: "#229954",
                  color: "#000",
                  borderRadius: "2rem",
                  padding: "0.7rem 2.3rem",
                  fontWeight: 700,
                  fontSize: "1.13rem",
                  fontFamily: "Outfit, sans-serif",
                  boxShadow: "0 3px 24px 0 rgba(71,129,255,0.13)",
                  border: 0,
                  margin: "0.8rem 0 1.7rem 0",
                  transition: "background .23s",
                  display: "block",
                  width: "fit-content",
                  marginLeft: "auto",
                  marginRight: "auto",
                  cursor: "pointer",
                  textAlign: "center",
                }}
                onMouseOver={(e) => {
                  (e.target as HTMLAnchorElement).style.background =
                    "linear-gradient(91deg, #1e3d75 0%, #4781ff 100%)";
                }}
                onMouseOut={(e) => {
                  (e.target as HTMLAnchorElement).style.background =
                    "linear-gradient(91deg, #4781ff 9%, #174bbb 100%)";
                }}
              >
                Visit Official Website
              </a>
            ) : (
              <button
                style={{
                  borderRadius: "2rem",
                  padding: "0.7rem 2.3rem",
                  fontWeight: 700,
                  fontSize: "1.13rem",
                  fontFamily: "Outfit, sans-serif",
                  background: "#229954",
                  color: "#000",
                  border: 0,
                  boxShadow: "0 3px 24px 0 rgba(120,120,140,0.08)",
                  cursor: "pointer",
                }}
                type="button"
                disabled
              >
                Visit Official Website
              </button>
            )}
          </div>

          <div className="row gx-md-5 gy-4">
            <div className="col-lg-8">
              <section style={{ marginBottom: "2.15rem" }}>
                <h4
                  style={{
                    borderLeft: "4px solid #27ae60",
                    paddingLeft: "1.1rem",
                    fontWeight: 700,
                    color: "#1e2344",
                    marginBottom: "0.6rem",
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  About
                </h4>
                <p
                  className="text-secondary"
                  style={{
                    whiteSpace: "pre-line",
                    fontSize: "1rem",
                    fontFamily: "Outfit, sans-serif",
                    color: "#4b4e67",
                    wordBreak: "break-word",
                  }}
                >
                  {course.about}
                </p>
              </section>

              <section style={{ marginBottom: "2.15rem" }}>
                <h4
                  style={{
                    borderLeft: "4px solid #27ae60",
                    paddingLeft: "1.1rem",
                    fontWeight: 700,
                    color: "#1e2344",
                    marginBottom: "0.6rem",
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  Programme Structure
                </h4>
                <p
                  className="text-secondary"
                  style={{
                    whiteSpace: "pre-line",
                    fontSize: "1rem",
                    fontFamily: "Outfit, sans-serif",
                    color: "#4b4e67",
                    wordBreak: "break-word",
                  }}
                >
                  {course.programme_structure}
                </p>
              </section>

              <section style={{ marginBottom: "2.15rem" }}>
                <h4
                  style={{
                    borderLeft: "4px solid #27ae60",
                    paddingLeft: "1.1rem",
                    fontWeight: 700,
                    color: "#1e2344",
                    marginBottom: "0.6rem",
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  Academic Requirements
                </h4>
                <p
                  className="text-secondary"
                  style={{
                    whiteSpace: "pre-line",
                    fontSize: "1rem",
                    fontFamily: "Outfit, sans-serif",
                    color: "#4b4e67",
                    wordBreak: "break-word",
                  }}
                >
                  {course.academic_requirements}
                </p>
              </section>

              <section style={{ marginBottom: "2.15rem" }}>
                <h4
                  style={{
                    borderLeft: "4px solid #27ae60",
                    paddingLeft: "1.1rem",
                    fontWeight: 700,
                    color: "#1e2344",
                    marginBottom: "0.6rem",
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  English Requirements
                </h4>
                <p
                  className="text-secondary"
                  style={{
                    whiteSpace: "pre-line",
                    fontSize: "1rem",
                    fontFamily: "Outfit, sans-serif",
                    color: "#4b4e67",
                    wordBreak: "break-word",
                  }}
                >
                  {course.english_requirements}
                </p>
              </section>

              <section>
                <h4
                  style={{
                    borderLeft: "4px solid #27ae60",
                    paddingLeft: "1.1rem",
                    fontWeight: 700,
                    color: "#1e2344",
                    marginBottom: "0.6rem",
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  Other Requirements
                </h4>
                <p
                  className="text-secondary"
                  style={{
                    whiteSpace: "pre-line",
                    fontSize: "1rem",
                    fontFamily: "Outfit, sans-serif",
                    color: "#4b4e67",
                    wordBreak: "break-word",
                  }}
                >
                  {course.other_requirements}
                </p>
              </section>
            </div>

            <div className="col-lg-4">
              <div
                style={{
                  background:
                    "linear-gradient(129deg, #f8fafd 90%, #f3f6fa 100%)",
                  borderRadius: "1.4rem",
                  border: "none",
                  boxShadow: "0 1.5px 28px 0 rgba(140,160,240,0.13)",
                  padding: "2rem 1.3rem",
                  marginBottom: "2.4rem",
                }}
              >
                <div className="mb-3">
                  <span
                    style={{
                      fontSize: ".94em",
                      color: "#6a7388",
                      fontWeight: 500,
                      fontFamily: "Outfit, sans-serif",
                    }}
                  >
                    DURATION
                  </span>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: "1.12em",
                      color: "#17346e",
                      fontFamily: "Outfit, sans-serif",
                    }}
                  >
                    {course.duration}
                  </div>
                </div>

                <div className="mb-3">
                  <span
                    style={{
                      fontSize: ".94em",
                      color: "#6a7388",
                      fontWeight: 500,
                      fontFamily: "Outfit, sans-serif",
                    }}
                  >
                    TUITION FEE
                  </span>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: "1.02em",
                      color: "#17346e",
                      fontFamily: "Outfit, sans-serif",
                      wordBreak: "break-word",
                    }}
                  >
                 {course.tuition_fee
  ? `${course.tuition_fee} (approx)`
  : "-"}
                  </div>
                </div>

                <div className="mb-3">
                  <span
                    style={{
                      fontSize: ".94em",
                      color: "#6a7388",
                      fontWeight: 500,
                      fontFamily: "Outfit, sans-serif",
                    }}
                  >
                    CREDITS
                  </span>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: "1.12em",
                      color: "#17346e",
                      fontFamily: "Outfit, sans-serif",
                    }}
                  >
                    {course.credits}
                  </div>
                </div>

                {/* Partner status block kept commented as in your original */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterTwo />
    </Wrapper>
  );
};

export default CourseDetails;
