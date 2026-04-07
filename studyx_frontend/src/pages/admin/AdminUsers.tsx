import React, { useEffect, useState } from "react";
import AdminSidebar from "./AdminSidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert, Button } from "react-bootstrap";

const getApiBaseUrl = () => {
  if (typeof window !== "undefined") {
    const hostname = window.location.hostname;

    if (hostname === "localhost" || hostname === "127.0.0.1") {
      return "http://localhost:3000/api";
    }
    return "/api";
  }
  return "/api";
};

const API_BASE = getApiBaseUrl();

type User = {
  _id: string;
  name?: string;
  email?: string;
  phone?: string;
  studyPreference?: string;
  created_at?: string;
};

const AdminUsers: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // ✅ pagination state
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchUsers = async (pageNumber = 1) => {
    try {
      setLoading(true);

      const token = localStorage.getItem("adminToken");

      const res = await fetch(
        `${API_BASE}/get_all_users?page=${pageNumber}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to fetch users");
      }

      setUsers(data.data || []);
      setTotalPages(data.totalPages || 1);
      setPage(data.currentPage || 1);
    } catch (err: any) {
      setError(err.message || "Error fetching users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  const safe = (val?: string) =>
    val && val.trim() !== "" ? val : "-";

  return (
    <div className="d-flex min-vh-100 bg-dark text-white">
      
      {/* Sidebar */}
      <div style={{ width: "250px", flexShrink: 0 }}>
        <AdminSidebar />
      </div>

      {/* Main Content */}
      <main
        className="flex-grow-1 p-4 ms-3"
        style={{ overflowX: "auto" }}
      >
        <h2 className="mb-4">Users</h2>

        {error && <Alert variant="danger">{error}</Alert>}

        <div className="table-responsive">
          <table className="table table-dark table-hover w-100">
            <thead>
              <tr>
                <th style={{ minWidth: "160px" }}>Name</th>
                <th style={{ minWidth: "220px" }}>Email</th>
                <th style={{ minWidth: "140px" }}>Phone</th>
                <th style={{ minWidth: "180px" }}>Study Preference</th>
                <th style={{ minWidth: "180px" }}>Created</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={5} className="text-center">
                    Loading users...
                  </td>
                </tr>
              ) : users.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center">
                    No users found
                  </td>
                </tr>
              ) : (
                users.map((u) => (
                  <tr key={u._id}>
                    <td>{safe(u.name)}</td>
                    <td>{safe(u.email)}</td>
                    <td>{safe(u.phone)}</td>
                    <td>{safe(u.studyPreference)}</td>
                    <td>{safe(u.created_at)}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* ✅ Pagination Controls */}
        <div className="d-flex justify-content-center align-items-center mt-3 gap-3">
          <Button
            variant="light"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            ⬅ Prev
          </Button>

          <span>
            Page {page} of {totalPages}
          </span>

          <Button
            variant="light"
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
          >
            Next ➡
          </Button>
        </div>
      </main>
    </div>
  );
};

export default AdminUsers;