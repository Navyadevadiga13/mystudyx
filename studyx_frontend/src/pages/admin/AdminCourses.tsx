import React, { useEffect, useRef, useState } from "react";
import AdminSidebar from "./AdminSidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Alert } from "react-bootstrap";
import { FaDownload, FaTrashAlt } from "react-icons/fa";
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
const mainGreen = "#16a34a"; // match sidebar green
const darkSlate = "#232f3e"; // match sidebar background
const white = "#ffffff";
const subtleBorder = "rgba(255,255,255,0.06)";

type Course = {
  _id?: string;
  title?: string;
  university?: string;
  country?: string;
  tuition_fee?: string;
  duration?: string;
  credits?: string;
  official_website?: string;
  about?: string;
  programme_structure?: string;
  academic_requirements?: string;
  english_requirements?: string;
  other_requirements?: string;
  partners?: boolean;
  types?: string;
  createdAt?: string;
  updatedAt?: string;
  [key: string]: any;
};

const defaultForm = {
  title: "",
  university: "",
  country: "",
  tuition_fee: "",
  duration: "",
  credits: "",
  official_website: "",
  about: "",
  programme_structure: "",
  academic_requirements: "",
  english_requirements: "",
  other_requirements: "",
  partners: false,
  types: "Bachelors",
  rank: "", // default matches schema
};

type UploadedFile = {
  filename: string;
  uploadedAt: string;
  coursesCount: number;
  _id: string;
};

const AdminCourses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);


  // View modal
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [showViewModal, setShowViewModal] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  // Add modal + form
  const [showAddModal, setShowAddModal] = useState(false);
  const [form, setForm] = useState<typeof defaultForm>(defaultForm);
  const [saving, setSaving] = useState(false);

  // Alert state
  const [alert, setAlert] = useState<{ variant: "success" | "danger"; text: string } | null>(null);
  const alertTimerRef = useRef<number | null>(null);

  // Bulk upload input ref
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [bulkUploading, setBulkUploading] = useState(false);
  const [showBulkDownloadModal, setShowBulkDownloadModal] = useState(false);
  const openBulkDownloadModal = () => setShowBulkDownloadModal(true);
  const closeBulkDownloadModal = () => setShowBulkDownloadModal(false);

  // Clear alert timer helper
  const clearAlertTimer = () => {
    if (alertTimerRef.current) {
      window.clearTimeout(alertTimerRef.current);
      alertTimerRef.current = null;
    }
  };

  const fetchUploadedFiles = async () => {
    try {
      const token = localStorage.getItem("adminToken");
      const res = await fetch(`${API_BASE}/get_uploaded_files`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setUploadedFiles(data.files || []);
      }
    } catch (error) {
      // Optional: handle error
    }
  };

  const fetchCourses = async (pageToFetch: number = 1) => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem("adminToken");
      if (!token) {
        setError("Unauthorized: admin token missing. Please login as admin.");
        setCourses([]);
        setLoading(false);
        return;
      }

      const res = await fetch(`${API_BASE}/get_courses?page=${pageToFetch}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 401) {
        const body = await res.json().catch(() => ({}));
        setError(body?.message || "Unauthorized: invalid or expired token.");
        setCourses([]);
        setLoading(false);
        return;
      }

      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Failed to fetch courses");

      setCourses(Array.isArray(data.data) ? data.data : []);
      setPage(data.page || 1);
      setTotalPages(data.pages || 1);
    } catch (err: any) {
      setError(err?.message || "Error fetching courses");
      setCourses([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUploadedFiles();
    return () => clearAlertTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchCourses(page);
    return () => clearAlertTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);


  const openView = (course: Course) => {
    setSelectedCourse(course);
    setShowViewModal(true);
  };

  const closeView = () => {
    setShowViewModal(false);
    setTimeout(() => setSelectedCourse(null), 150);
  };

  const openAdd = () => {
    setForm(defaultForm);
    clearAlertTimer();
    setAlert(null);
    setShowAddModal(true);
  };

  const closeAdd = () => {
    setShowAddModal(false);
    setTimeout(() => setForm(defaultForm), 150);
  };

const handleFormChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  const { name, value, type, checked } = e.target as HTMLInputElement;
  setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
};

  const showBootstrapAlert = (variant: "success" | "danger", text: string, ms = 4000) => {
    clearAlertTimer();
    setAlert({ variant, text });
    alertTimerRef.current = window.setTimeout(() => {
      setAlert(null);
      alertTimerRef.current = null;
    }, ms);
  };

  const handleAddSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    clearAlertTimer();
    setAlert(null);
    try {
      const token = localStorage.getItem("adminToken");
      if (!token) throw new Error("Admin token missing.");

      const res = await fetch(`${API_BASE}/add_course`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Failed to add course");

      const created: Course | undefined = data?.data;
      if (created) {
        setCourses((prev) => [created, ...prev]);
      } else {
        await fetchCourses();
      }

      showBootstrapAlert("success", "Course added successfully.", 3500);
      closeAdd();
    } catch (err: any) {
      showBootstrapAlert("danger", err?.message || "Error adding course", 5000);
    } finally {
      setSaving(false);
    }
  };

  // Bulk upload handlers
  const triggerBulkUpload = () => {
    clearAlertTimer();
    setAlert(null);
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const handleBulkFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setBulkUploading(true);
    clearAlertTimer();
    setAlert(null);

    // Basic client-side validation (extension)
    const allowedExt = /\.(xls|xlsx)$/i.test(file.name);
    if (!allowedExt) {
      showBootstrapAlert("danger", "Please upload an Excel file (.xls or .xlsx).", 5000);
      setBulkUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    try {
      const token = localStorage.getItem("adminToken");
      if (!token) throw new Error("Admin token missing.");

      const formData = new FormData();
      formData.append("file", file);

      // POST to your server endpoint that handles bulk uploads
      const res = await fetch(`${API_BASE}/bulk_upload_courses`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        } as any,
        body: formData,
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.message || "Bulk upload failed");

      const createdList: Course[] | undefined = Array.isArray(data?.data) ? data.data : undefined;

      if (createdList && createdList.length) {
        setCourses((prev) => [...createdList, ...prev]);
        await fetchUploadedFiles(); // <--- add this line
        showBootstrapAlert("success", `Bulk upload successful — ${createdList.length} courses added.`, 5000);
      } else if (typeof data?.count === "number") {
        await fetchCourses();
        await fetchUploadedFiles(); // <--- add this line
        showBootstrapAlert("success", `${data.count} course(s) uploaded successfully.`, 5000);
      } else {
        await fetchCourses();
        await fetchUploadedFiles(); // <--- add this line
        showBootstrapAlert("success", data?.message || "Bulk upload successful.", 4500);
      }

    } catch (err: any) {
      showBootstrapAlert("danger", err?.message || "Error during bulk upload", 7000);
    } finally {
      setBulkUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const handleDeleteBulkFile = async (filename: string) => {
    clearAlertTimer();
    setAlert(null);
    const token = localStorage.getItem("adminToken");
    try {
      const res = await fetch(
`${API_BASE}/delete_bulk_upload/${encodeURIComponent(filename)}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      if (res.ok) {
        showBootstrapAlert("success", "Deleted bulk upload successfully.");
        setTimeout(() => {
          window.location.reload();
        }, 1000); // 1 second delay so user reads message
      }
      else {
        showBootstrapAlert("danger", data.message || "Delete failed.");
      }
    } catch (error: any) {
      showBootstrapAlert("danger", error.message || "Delete error.");
    }
  };


  return (
    <div
      className="d-flex min-vh-100"
      style={{
        background: darkSlate,
        color: white,
        fontFamily: `'Poppins', sans-serif`,
      }}
    >
      <style>{`
        :root { --topbar-h: 56px; --sidebar-w: 280px; }
        nav.navbar, .topbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: var(--topbar-h);
          z-index: 1100;
        }
        @media (min-width: 768px) {
          aside.d-none.d-md-flex {
            position: fixed;
            top: var(--topbar-h);
            left: 0;
            width: var(--sidebar-w);
            height: calc(100vh - var(--topbar-h));
            overflow-y: auto;
            z-index: 1030;
          }
        }
        .admin-main { margin-left: 0; padding-top: calc(var(--topbar-h) + 12px); }
        @media (min-width: 768px) {
          .admin-main { margin-left: var(--sidebar-w); padding-top: calc(var(--topbar-h) + 20px); }
        }
        .admin-header { position: relative; z-index: 5; }
        .courses-card { margin-top: 20px; border-radius: 12px; overflow: hidden; }
        .desktop-table { display: none; }
        @media (min-width: 768px) {
          .desktop-table { display: block; }
          .mobile-list { display: none; }
        }
        .mobile-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid ${subtleBorder};
          padding: 12px;
          border-radius: 8px;
          margin-bottom: 10px;
        }
        @media (max-width: 575.98px) {
          .table th, .table td { font-size: 0.85rem; padding: 0.45rem; }
          .courses-card { margin-top: 12px; }
        }
        @media (max-width: 767.98px) {
          .offcanvas-backdrop { z-index: 1040; }
          .offcanvas { z-index: 1050; }
        }
      `}</style>

      <AdminSidebar />

      <main
        className="flex-grow-1 p-4 admin-main"
        style={{
          minHeight: "100vh",
          overflow: "auto",
        }}
      >
        {/* Header & Actions */}
        <div className="admin-header bg-dark rounded shadow p-3 mb-4 mt-3">
          <div className="row align-items-center g-3">
            <div className="col-12 col-md-auto mb-2 mb-md-0">
              <h1 className="h3 fw-bold text-white mb-1">Courses</h1>
              <div className="text-secondary small">Manage and review course listings</div>
            </div>
            <div className="col-12 d-md-none" />
            <div className="col-12 col-md d-flex flex-wrap gap-2 justify-content-md-end align-items-center">
              <Button
                onClick={openAdd}
                disabled={saving || bulkUploading}
                className="btn btn-success fw-bold rounded px-3 py-2"
              >
                + Add Course
              </Button>
              <Button
                onClick={openBulkDownloadModal}
                disabled={bulkUploading}
                variant="outline-light"
                className="btn px-3 py-2"
              >
                Excel Files
              </Button>
              <Button
                onClick={triggerBulkUpload}
                disabled={saving || bulkUploading}
                variant="outline-light"
                className="btn px-3 py-2"
              >
                {bulkUploading ? "Uploading…" : "Bulk Upload"}
              </Button>
              <input
                ref={fileInputRef}
                type="file"
                accept=".xls,.xlsx,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                style={{ display: "none" }}
                onChange={handleBulkFileChange}
              />
            </div>
          </div>
        </div>

        {/* Alerts */}
        {alert && (
          <Alert
            variant={alert.variant === "success" ? "success" : "danger"}
            onClose={() => {
              clearAlertTimer();
              setAlert(null);
            }}
            dismissible
          >
            {alert.text}
          </Alert>
        )}

        {error && (
          <Alert variant="danger" onClose={() => setError(null)} dismissible>
            {error}
          </Alert>
        )}

        {/* Courses Card */}
        <div
          className="courses-card"
          style={{
            border: `1px solid ${subtleBorder}`,
            background: "linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.02))",
            padding: 12,
          }}
        >
          {/* Desktop Table */}
          <div className="desktop-table">
            <div className="table-responsive" style={{ paddingTop: 6 }}>
              <table
                className="table table-dark table-hover"
                style={{ color: white, marginBottom: 0 }}
              >
                <thead>
                  <tr style={{ borderBottom: `1px solid ${subtleBorder}` }}>
                    <th style={{ color: "rgba(255,255,255,0.85)" }}>Title</th>
                    <th style={{ color: "rgba(255,255,255,0.85)" }}>University</th>
                    <th style={{ color: "rgba(255,255,255,0.85)" }}>Program Type</th>
<th style={{ color: "rgba(255,255,255,0.85)" }}>Rank</th>
                    <th style={{ color: "rgba(255,255,255,0.85)" }}>Country</th>
                    <th style={{ color: "rgba(255,255,255,0.85)" }}>Tuition</th>
                    <th style={{ color: "rgba(255,255,255,0.85)" }}>Duration</th>
                    <th style={{ color: "rgba(255,255,255,0.85)" }}>Credits</th>
                    <th style={{ color: "rgba(255,255,255,0.85)" }}>Website</th>
                    <th style={{ color: "rgba(255,255,255,0.85)" }}>Partners</th>
                    <th style={{ color: "rgba(255,255,255,0.85)" }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td
                        colSpan={9}
                        className="text-center py-4"
                        style={{ color: "rgba(255,255,255,0.75)" }}
                      >
                        Loading courses…
                      </td>
                    </tr>
                  ) : courses.length === 0 ? (
                    <tr>
                      <td
                        colSpan={9}
                        className="text-center py-4"
                        style={{ color: "rgba(255,255,255,0.75)" }}
                      >
                        {error ? "No data due to error." : "No courses found."}
                      </td>
                    </tr>
                  ) : (
                    courses.map((c) => (
                      <tr
                        key={c._id}
                        style={{ transition: "background 0.15s ease" }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.background = "rgba(255,255,255,0.02)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.background = "transparent")
                        }
                      >
                        <td style={{ color: "rgba(255,255,255,0.92)" }}>{c.title || "-"}</td>
                        <td style={{ color: "rgba(255,255,255,0.88)" }}>
                          {c.university || "-"}
                        </td>
                        <td style={{ color: "rgba(255,255,255,0.85)" }}>
                          {c.types || "-"}
                        </td>
<td style={{ color: "rgba(255,255,255,0.85)" }}>
  {c.rank || "-"}
</td>
                        <td style={{ color: "rgba(255,255,255,0.85)" }}>{c.country || "-"}</td>
                        <td style={{ color: "rgba(255,255,255,0.85)" }}>{c.tuition_fee || "-"}</td>
                        <td style={{ color: "rgba(255,255,255,0.85)" }}>{c.duration || "-"}</td>
                        <td style={{ color: "rgba(255,255,255,0.85)" }}>{c.credits || "-"}</td>
                        <td>
                          {c.official_website ? (
                            <a
                              href={c.official_website}
                              target="_blank"
                              rel="noreferrer"
                              style={{ color: mainGreen, textDecoration: "underline" }}
                            >
                              Visit
                            </a>
                          ) : (
                            <span style={{ color: "rgba(255,255,255,0.75)" }}>-</span>
                          )}
                        </td>
                        <td>
                          <span
                            style={{
                              background: c.partners
                                ? "rgba(22,163,74,0.14)"
                                : "rgba(255,255,255,0.04)",
                              color: c.partners ? mainGreen : "rgba(255,255,255,0.85)",
                              padding: "4px 10px",
                              borderRadius: 999,
                              fontSize: 13,
                              border: `1px solid ${c.partners ? mainGreen + "33" : "transparent"
                                }`,
                            }}
                          >
                            {c.partners ? "Yes" : "No"}
                          </span>
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <Button
                              variant="outline-light"
                              size="sm"
                              onClick={() => openView(c)}
                              style={{
                                color: "rgba(255,255,255,0.95)",
                                border: `1px solid ${subtleBorder}`,
                                background: "transparent",
                                padding: "6px 10px",
                                borderRadius: 8,
                              }}
                            >
                              View
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center gap-3 mt-3">
            <Button variant="outline-light" onClick={() => setPage(page - 1)} disabled={page <= 1}>
              Previous
            </Button>
            <div>Page {page} of {totalPages}</div>
            <Button variant="outline-light" onClick={() => setPage(page + 1)} disabled={page >= totalPages}>
              Next
            </Button>
          </div>

          {/* MOBILE: stacked cards (visible on small screens) */}
          <div className="mobile-list">
            {loading ? (
              <div style={{ color: "rgba(255,255,255,0.75)", padding: 12 }}>
                Loading courses…
              </div>
            ) : courses.length === 0 ? (
              <div style={{ color: "rgba(255,255,255,0.75)", padding: 12 }}>
                {error ? "No data due to error." : "No courses found."}
              </div>
            ) : (
              courses.map((c) => (
                <div key={c._id} className="mobile-card">
                  <div className="d-flex justify-content-between align-items-start gap-3">
                    <div style={{ flex: 1 }}>
                      <div
                        style={{ fontWeight: 700, color: "rgba(255,255,255,0.95)" }}
                      >
                        {c.title || "-"}
                      </div>
                  <div style={{ color: "rgba(255,255,255,0.8)", marginTop: 6 }}>
  {c.university || "-"}
</div>

{c.types && (
  <div style={{ marginTop: 4 }}>
    <span
      style={{
        fontSize: 11,
        padding: "2px 8px",
        borderRadius: 999,
        background: "rgba(16, 185, 129, 0.12)",
        color: "#6ee7b7",
        border: "1px solid rgba(16, 185, 129, 0.4)",
      }}
    >
      {c.types}
    </span>
  </div>
)}

<div
  style={{
    color: "rgba(255,255,255,0.75)",
    marginTop: 6,
    fontSize: 13,
  }}
>
  {c.country ? c.country + " • " : ""}
  {c.duration ? c.duration + " • " : ""}
  {c.tuition_fee || ""}
</div>

                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      <Button
                        variant="outline-light"
                        size="sm"
                        onClick={() => openView(c)}
                        style={{
                          color: "rgba(255,255,255,0.95)",
                          border: `1px solid ${subtleBorder}`,
                          background: "transparent",
                          padding: "6px 10px",
                          borderRadius: 8,
                          whiteSpace: "nowrap",
                        }}
                      >
                        View
                      </Button>
                      {c.official_website && (
                        <a
                          href={c.official_website}
                          target="_blank"
                          rel="noreferrer"
                          style={{ color: mainGreen, textDecoration: "underline", textAlign: "right", fontSize: 13 }}
                        >
                          Visit
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Add Course Modal - fullscreen on small screens */}
        <Modal show={showAddModal} onHide={closeAdd} size="lg" centered fullscreen="md-down">
          <Modal.Header closeButton className="bg-dark">
            <Modal.Title style={{ color: mainGreen }}>Add Course</Modal.Title>
          </Modal.Header>
          <form onSubmit={handleAddSubmit}>
            <Modal.Body style={{ background: darkSlate, color: white }}>
              <div className="row g-3">
                <div className="col-12 col-md-6">
                  <label className="form-label" style={{ color: white }}>Title</label>
                  <input name="title" value={form.title} onChange={handleFormChange} className="form-control" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label" style={{ color: white }}>University</label>
                  <input name="university" value={form.university} onChange={handleFormChange} className="form-control" />
                </div>
                <div className="col-12 col-md-4">
                  <label className="form-label" style={{ color: white }}>Country</label>
                  <input name="country" value={form.country} onChange={handleFormChange} className="form-control" />
                </div>
                <div className="col-12 col-md-4">
                  <label className="form-label" style={{ color: white }}>Tuition fee</label>
                  <input name="tuition_fee" value={form.tuition_fee} onChange={handleFormChange} className="form-control" />
                </div>
                <div className="col-12 col-md-4">
                  <label className="form-label" style={{ color: white }}>Duration</label>
                  <input name="duration" value={form.duration} onChange={handleFormChange} className="form-control" />
                </div>
                <div className="col-12 col-md-4">
  <label className="form-label" style={{ color: white }}>Program Type</label>
  <select
    name="types"
    value={form.types}
    onChange={handleFormChange}
    className="form-control"
  >
    <option value="Bachelors">Bachelors</option>
    <option value="Masters">Masters</option>
    <option value="Phd">Phd</option>
  </select>
</div>
                <div className="col-12 col-md-4">
  <label className="form-label" style={{ color: white }}>Rank</label>
  <input
    name="rank"
    value={form.rank || ""}
    onChange={handleFormChange}
    className="form-control"
    placeholder="e.g. 1, Top 50, QS 120"
  />
</div>
                <div className="col-12">
                  <label className="form-label" style={{ color: white }}>About</label>
                  <textarea name="about" value={form.about} onChange={handleFormChange} className="form-control" rows={3} />
                </div>
                <div className="col-12">
                  <label className="form-label" style={{ color: white }}>Programme structure</label>
                  <textarea name="programme_structure" value={form.programme_structure} onChange={handleFormChange} className="form-control" rows={2} />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label" style={{ color: white }}>Academic requirements</label>
                  <textarea name="academic_requirements" value={form.academic_requirements} onChange={handleFormChange} className="form-control" rows={2} />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label" style={{ color: white }}>English requirements</label>
                  <textarea name="english_requirements" value={form.english_requirements} onChange={handleFormChange} className="form-control" rows={2} />
                </div>
                <div className="col-12">
                  <label className="form-label" style={{ color: white }}>Official website</label>
                  <input name="official_website" value={form.official_website} onChange={handleFormChange} className="form-control" />
                </div>
                <div className="col-12 d-flex align-items-center">
                  <div className="form-check me-3">
                    <input className="form-check-input" type="checkbox" name="partners" checked={form.partners} onChange={handleFormChange} id="partnersCheck" />
                    <label className="form-check-label" htmlFor="partnersCheck" style={{ color: white }}>Partners</label>
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer style={{ background: darkSlate }}>
              <Button variant="outline-secondary" onClick={closeAdd}>Cancel</Button>
              <Button
                className="bg-success text-white border-0"
                type="submit"
                disabled={saving}
              >
                {saving ? "Saving…" : "Save course"}
              </Button>

            </Modal.Footer>
          </form>
        </Modal>

        {/* Bulk Download Modal with Delete icon */}
        <Modal show={showBulkDownloadModal} onHide={closeBulkDownloadModal} centered>
          <Modal.Header closeButton className="bg-dark text-white">
            <Modal.Title>Bulk Downloads — Uploaded Excel Files</Modal.Title>
          </Modal.Header>

          <Modal.Body className="bg-dark text-white">
            {uploadedFiles.length === 0 ? (
              <p className="text-muted fst-italic">No uploaded files available.</p>
            ) : (
              <ul className="list-group bg-dark border-secondary">
                {uploadedFiles.map((file) => (
                  <li
                    key={file.filename}
                    className="list-group-item d-flex justify-content-between align-items-center bg-dark border-secondary text-white"
                    style={{ minWidth: 0 }}
                  >
                    <span style={{ wordBreak: "break-all" }}>{file.filename}</span>
                    <div className="d-flex align-items-center gap-2">
                      <Button
                        size="sm"
                        variant="outline-light"
                        onClick={() => window.open(`${API_BASE}/uploads/${file.filename}`, "_blank")}
                        aria-label="Download"
                        title="Download"
                      >
                        <FaDownload size={18} />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline-danger"
                        onClick={() => handleDeleteBulkFile(file.filename)}
                        aria-label="Delete"
                        title="Delete"
                      >
                        <FaTrashAlt size={16} />
                      </Button>
                    </div>
                  </li>
                ))}

              </ul>
            )}
          </Modal.Body>

          <Modal.Footer className="bg-dark">
            <Button variant="outline-light" onClick={closeBulkDownloadModal}>Close</Button>
          </Modal.Footer>
        </Modal>

        {/* View Details Modal */}
        <Modal show={showViewModal} onHide={closeView} size="lg" scrollable centered fullscreen="md-down">
          <Modal.Header closeButton style={{ background: darkSlate }}>
            <Modal.Title style={{ color: mainGreen }}>Course details</Modal.Title>
          </Modal.Header>

          <Modal.Body style={{ background: darkSlate, color: white }}>
            {!selectedCourse ? (
              <div className="text-center py-4" style={{ color: white }}>No course selected</div>
            ) : (
              <div className="container-fluid">
                <div className="row gx-3 gy-3">
                  {Object.entries(selectedCourse).map(([key, value]) => {
                    if (key === "_id" || key === "createdAt" || key === "updatedAt" || typeof value === "undefined") return null;

                    return (
                      <div className="col-12" key={key}>
                        <div
                          style={{
                            background: "rgba(255,255,255,0.02)",
                            borderRadius: 7,
                            padding: "12px 18px",
                            marginBottom: 8,
                            border: `1px solid ${subtleBorder}`,
                          }}
                        >
                          <strong style={{ color: mainGreen, textTransform: "capitalize", marginRight: 10 }}>
                            {key.replace(/_/g, " ")}:
                          </strong>
                          <span style={{ color: white, whiteSpace: "pre-wrap" }}>
                            {typeof value === "boolean" ? (value ? "Yes" : "No") : value || "-"}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </Modal.Body>


          <Modal.Footer style={{ background: darkSlate }}>
            <Button variant="outline-secondary" onClick={closeView}>Close</Button>
          </Modal.Footer>
        </Modal>
      </main>
    </div>
  );
};

export default AdminCourses;
