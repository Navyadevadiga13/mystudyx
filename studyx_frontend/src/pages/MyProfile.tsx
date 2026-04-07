import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InnerHeader from "../layouts/headers/InnerHeader";
import Wrapper from "../layouts/Wrapper";
import FooterTwo from "../layouts/footers/FooterTwo";
import { FaPen, FaBook, FaClock, FaMoneyBillWave, FaHeart } from "react-icons/fa";
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
interface CourseInfo {
  _id: string;
  title: string;
  university?: string;
  country?: string;
  tuition_fee?: string;
  duration?: string;
  image?: string;
}

interface StudentInfo {
  name: string;
  email: string;
  phone?: string;
  dob?: string;
  googleId?: string;
  profilePic?: string;
  interestedCountries?: string[];
  interestedCourses?: string[];
  interestedIntake?: string[];
  wishlist: CourseInfo[];
}

const MyProfile = () => {
  const [student, setStudent] = useState<StudentInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [editValues, setEditValues] = useState({
    name: "",
    phone: "",
    dob: "",
    profilePic: "",
    interestedCountries: "",
    interestedCourses: "",
    interestedIntake: "",
  });

  const totalWishlist = student?.wishlist.length || 0;
  const totalPages = Math.ceil(totalWishlist / pageSize);
  const startIdx = (page - 1) * pageSize;
  const endIdx = startIdx + pageSize;
  const paginatedWishlist = student?.wishlist.slice(startIdx, endIdx) || [];

  useEffect(() => {
    fetch(`${API_BASE}/get_profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.student) {
          setStudent(data.student);
        } else {
          setError(data.message || "Could not fetch your profile.");
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Network error loading profile.");
        setLoading(false);
      });
  }, []);

  const handleEditProfile = () => {
    setIsEditing(true);
    setEditValues({
      name: student?.name || "",
      phone: student?.phone || "",
      dob: student?.dob ? student.dob.slice(0, 10) : "",
      profilePic: student?.profilePic || "",
      interestedCountries: (student?.interestedCountries || []).join(", "),
      interestedCourses: (student?.interestedCourses || []).join(", "),
      interestedIntake: (student?.interestedIntake || []).join(", "),
    });
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const updated = {
      ...editValues,
      interestedCountries: editValues.interestedCountries
        .split(",")
        .map((v) => v.trim())
        .filter(Boolean),
      interestedCourses: editValues.interestedCourses
        .split(",")
        .map((v) => v.trim())
        .filter(Boolean),
      interestedIntake: editValues.interestedIntake
        .split(",")
        .map((v) => v.trim())
        .filter(Boolean),
    };

    try {
      const res = await fetch(`${API_BASE}/edit_profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
        },
        body: JSON.stringify(updated),
      });
      const data = await res.json();
      if (data.success) {
        setStudent(data.student);
        setIsEditing(false);
      } else {
        alert(data.message || "Failed to update profile.");
      }
    } catch {
      alert("Network error updating profile.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/sign-in");
  };

  const handleRemove = async (courseId: string) => {
    try {
      const res = await fetch(`${API_BASE}/removeWishlist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
        },
        body: JSON.stringify({ courseId }),
      });
      const data = await res.json();
      if (data.success) {
        setStudent((prev) =>
          prev ? { ...prev, wishlist: prev.wishlist.filter((c) => c._id !== courseId) } : prev
        );
      } else {
        alert(data.message || "Failed to remove course.");
      }
    } catch {
      alert("Network error while removing from wishlist.");
    }
  };

  return (
    <Wrapper>
      <InnerHeader title="" />
      <div
        className="container my-5"
        style={{
          maxWidth: 1200,
          borderRadius: 20,
          padding: "28px 32px",
          background: "linear-gradient(135deg, #f4fbf6 0%, #f9fffb 40%, #f3f9ff 100%)",
          border: "1px solid rgba(39, 174, 96, 0.10)",
        }}
      >
        {loading ? (
          <div className="text-center my-5">Loading...</div>
        ) : error ? (
          <div className="alert alert-danger my-4">{error}</div>
        ) : !student ? (
          <div className="text-center my-5">Profile not found.</div>
        ) : (
          <div className="d-flex flex-column flex-md-row gap-4">
            {/* Sidebar */}
            <aside style={{ minWidth: 0, width: "100%", maxWidth: 320 }}>
              {/* Profile block */}
              <div
                className="bg-white rounded shadow-sm text-center mb-4 p-0"
                style={{
                  boxShadow: "0 4px 16px rgba(60,47,123,.10)",
                  borderRadius: 16,
                  border: "1.5px solid #f4f2fb",
                  padding: "32px 0 20px 0",
                  position: "relative",
                }}
              >
                <div style={{ position: "relative", display: "inline-block" }}>
                  {student.profilePic ? (
                    <img
                      src={student.profilePic}
                      alt="Profile"
                      style={{ width: 88, height: 88, borderRadius: "50%", objectFit: "cover" }}
                    />
                  ) : (
                    <i className="fa fa-user-circle" style={{ fontSize: 88, color: "#bbb" }} />
                  )}
                  <button
                    className="btn btn-light rounded-circle shadow position-absolute"
                    style={{
                      right: -4,
                      bottom: -2,
                      width: 32,
                      height: 32,
                      padding: 0,
                      border: "1.5px solid #e1e1e1",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    title="Edit Profile"
                    onClick={handleEditProfile}
                    type="button"
                  >
                    <FaPen size={14} style={{ color: "#229954" }} />
                  </button>
                </div>
                {isEditing ? (
                  <form
                    onSubmit={handleEditSubmit}
                    className="mt-3 d-flex flex-column gap-2 align-items-center px-3"
                    autoComplete="off"
                  >
                    <input
                      className="form-control form-control-sm"
                      name="name"
                      value={editValues.name}
                      onChange={handleEditChange}
                      placeholder="Name"
                      required
                    />
                    <input
                      className="form-control form-control-sm"
                      name="phone"
                      value={editValues.phone}
                      onChange={handleEditChange}
                      placeholder="Phone"
                    />
                    <input
                      className="form-control form-control-sm"
                      name="dob"
                      type="date"
                      value={editValues.dob}
                      onChange={handleEditChange}
                      placeholder="DOB"
                      style={{ maxWidth: "85%" }}
                    />
                    <input
                      className="form-control form-control-sm"
                      name="interestedCountries"
                      value={editValues.interestedCountries}
                      onChange={handleEditChange}
                      placeholder="Countries (comma separated)"
                    />
                    <input
                      className="form-control form-control-sm"
                      name="interestedCourses"
                      value={editValues.interestedCourses}
                      onChange={handleEditChange}
                      placeholder="Courses Interested"
                    />
                    <input
                      className="form-control form-control-sm"
                      name="interestedIntake"
                      value={editValues.interestedIntake}
                      onChange={handleEditChange}
                      placeholder="e.g., Fall 2025, Spring 2026"
                    />
                    <div className="d-flex gap-2 mt-2">
                      <button type="submit" className="btn btn-success btn-sm">
                        Save
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => setIsEditing(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                ) : (
                  <>
                    <h5 className="mt-4 mb-1" style={{ fontWeight: 600, color: "#292954" }}>
                      {student.name}
                    </h5>
                    <span className="text-muted" style={{ fontSize: "1rem" }}>
                      {student.email}
                    </span>
                  </>
                )}
              </div>

              {/* Personal Info card */}
              <div
                className="card py-3 px-4 mb-2 shadow-sm"
                style={{
                  borderRadius: 14,
                  border: "1.5px solid #f3f1fa",
                  background: "#faf8ff",
                }}
              >
                <h6
                  className="mb-3"
                  style={{
                    fontWeight: 700,
                    fontSize: "1.08rem",
                    letterSpacing: "0.01em",
                    color: "#27ae60",
                  }}
                >
                  Personal Information
                </h6>

                <div style={{ marginBottom: 10 }}>
                  <span className="fw-bold text-secondary" style={{ width: 86, display: "inline-block" }}>
                    Phone:
                  </span>
                  <span>{student.phone || <span className="text-muted">Not provided</span>}</span>
                </div>
                <div style={{ marginBottom: 10 }}>
                  <span className="fw-bold text-secondary" style={{ width: 86, display: "inline-block" }}>
                    DOB:
                  </span>
                  <span>
                    {student.dob ? (
                      new Date(student.dob).toLocaleDateString()
                    ) : (
                      <span className="text-muted">Not provided</span>
                    )}
                  </span>
                </div>
                <div style={{ marginBottom: 10 }}>
                  <span className="fw-bold text-secondary" style={{ width: 86, display: "inline-block" }}>
                    Countries:
                  </span>
                  <span>
                    {student.interestedCountries && student.interestedCountries.length > 0 ? (
                      student.interestedCountries.join(", ")
                    ) : (
                      <span className="text-muted">Not provided</span>
                    )}
                  </span>
                </div>
                <div style={{ marginBottom: 10 }}>
                  <span className="fw-bold text-secondary" style={{ width: 86, display: "inline-block" }}>
                    Courses:
                  </span>
                  <span>
                    {student.interestedCourses && student.interestedCourses.length > 0 ? (
                      student.interestedCourses.join(", ")
                    ) : (
                      <span className="text-muted">Not provided</span>
                    )}
                  </span>
                </div>
                <div style={{ marginBottom: 10 }}>
                  <span className="fw-bold text-secondary" style={{ width: 86, display: "inline-block" }}>
                    Intake(s):
                  </span>
                  <span>
                    {student.interestedIntake && student.interestedIntake.length > 0 ? (
                      student.interestedIntake.join(", ")
                    ) : (
                      <span className="text-muted">Not provided</span>
                    )}
                  </span>
                </div>
                <button
                  className="btn btn-outline-danger w-100"
                  style={{ borderRadius: 8, fontWeight: 500 }}
                  onClick={handleLogout}
                >
                  <i className="fa fa-sign-out me-2" /> Logout
                </button>
              </div>
            </aside>

            {/* Main content */}
            <main style={{ flexGrow: 1 }}>
              <div className="card shadow-sm p-4" style={{ borderRadius: 14 }}>
                <h4 className="mb-3" style={{ fontWeight: 600 }}>
                  My Wishlist ({student.wishlist.length})
                </h4>
                {student.wishlist.length === 0 ? (
                  <div className="text-muted my-3">Your wishlist is empty.</div>
                ) : (
                  <div className="row g-4">
                    {paginatedWishlist.map((course: any) => (
                      <div key={course._id} className="col-12 col-md-6">
                        <div
                          className="card h-100 border-0 shadow-sm"
                          style={{
                            borderRadius: "12px",
                            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                            position: "relative",
                          }}
                        >
                          <button
                            onClick={() => handleRemove(course._id)}
                            className="btn btn-light rounded-circle position-absolute"
                            style={{
                              top: 12,
                              right: 12,
                              background: "#ffeaea",
                              border: "1px solid #f5c6cb",
                              width: "40px",
                              height: "40px",
                              zIndex: 10,
                            }}
                          >
                            <FaHeart size={20} style={{ color: "#e74c3c" }} />
                          </button>

                          <div
                            style={{
                              position: "absolute",
                              top: "12px",
                              left: "12px",
                              fontSize: "0.75rem",
                              color: "#27ae60",
                              background: "rgba(39, 174, 96, 0.12)",
                              padding: "5px 10px",
                              borderRadius: "6px",
                              fontFamily: "'Inter', sans-serif",
                              fontWeight: 600,
                              zIndex: 10,
                              border: "1px solid rgba(39, 174, 96, 0.2)",
                            }}
                          >
                            🌍 {course.country}
                          </div>

                          {course.image && (
                            <img
                              src={course.image}
                              className="card-img-top"
                              alt={course.title}
                              style={{ borderRadius: "12px 12px 0 0" }}
                            />
                          )}

                          <div
                            className="card-body d-flex flex-column"
                            style={{
                              padding: "clamp(16px, 5vw, 24px)",
                              paddingTop: "clamp(60px, 6vw, 8px)",
                            }}
                          >
                            <h5
                              className="fw-bold mb-3"
                              style={{
                                fontSize: "clamp(1rem, 3vw, 1.2rem)",
                                color: "#1a1a1a",
                                fontFamily: "'Outfit', sans-serif",
                              }}
                            >
                              {course.title}
                            </h5>

                            <div
                              className="mb-3 d-flex align-items-center"
                              style={{ gap: "8px" }}
                            >
                              <FaBook size={18} style={{ color: "#111827" }} />
                              <p
                                style={{
                                  fontSize: "clamp(1rem, 2.5vw, 1.1rem)",
                                  color: "#1a1a1a",
                                  margin: 0,
                                  fontWeight: 500,
                                  fontFamily: "'Inter', sans-serif",
                                }}
                              >
                                {course.university}
                              </p>
                            </div>

                            <hr
                              style={{
                                border: "none",
                                borderTop: "1px solid rgba(0, 0, 0, 0.08)",
                                margin: "16px 0",
                              }}
                            />

                            <div
                              className="d-flex flex-column text-secondary mb-4 mt-auto"
                              style={{
                                fontSize: "clamp(0.85rem, 2vw, 0.9rem)",
                                gap: "12px",
                                fontFamily: "'Inter', sans-serif",
                              }}
                            >
                              <span className="d-flex align-items-center">
                                <FaClock
                                  className="me-2"
                                  size={14}
                                  style={{ color: "#6b7280", flexShrink: 0 }}
                                />
                                <strong style={{ color: "#1a1a1a" }}>Duration:</strong>
                                <span className="ms-2">{course.duration}</span>
                              </span>
                              <span className="d-flex align-items-center">
                                <FaMoneyBillWave
                                  className="me-2"
                                  size={14}
                                  style={{ color: "#6b7280", flexShrink: 0 }}
                                />
                                <strong style={{ color: "#1a1a1a" }}>Tuition Fee:</strong>
                                <span className="ms-2">{course.tuition_fee}</span>
                              </span>
                            </div>

                            <button
                              className="btn w-100"
                              style={{
                                borderRadius: "8px",
                                backgroundColor: "#27ae60",
                                color: "#fff",
                                border: "none",
                                fontWeight: "600",
                                padding: "clamp(10px, 2vw, 12px) 16px",
                                fontSize: "clamp(0.85rem, 2vw, 0.95rem)",
                                fontFamily: "'Outfit', sans-serif",
                                cursor: "pointer",
                              }}
                              onClick={() => navigate(`/course-details/${course._id}`)}
                            >
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

              </div>
              <div className="d-flex justify-content-center align-items-center gap-3 my-4">
                <button
                  className="btn btn-outline-success"
                  disabled={page === 1}
                  onClick={() => setPage(page - 1)}
                >
                  Previous
                </button>
                <span>
                  Page {page} of {totalPages}
                </span>
                <button
                  className="btn btn-outline-success"
                  disabled={page === totalPages || totalPages === 0}
                  onClick={() => setPage(page + 1)}
                >
                  Next
                </button>
              </div>
            </main>
          </div>
        )}
      </div>
      <FooterTwo />
    </Wrapper>
  );
};

export default MyProfile;
