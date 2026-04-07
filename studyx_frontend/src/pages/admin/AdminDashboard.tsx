import React from "react";
import AdminSidebar from "./AdminSidebar";
import "bootstrap/dist/css/bootstrap.min.css";

// Main accent color (for shadow/accent effect if needed)
const techBlue = "#2563eb";

const AdminDashboard: React.FC = () => {
  return (
    <div
      className="d-flex vh-100 bg-dark"
      style={{ fontFamily: `"Segoe UI", Tahoma, Geneva, Verdana, sans-serif` }}
    >
      <AdminSidebar />
      <main
        className="flex-grow-1 d-flex justify-content-center align-items-center"
        style={{
          background: "linear-gradient(135deg, #18191b 80%, #232f3e 100%)",
          minHeight: "100vh",
        }}
      >
        <h1
          className="fw-bold text-white display-2 text-center"
          style={{
            textShadow: `0 2px 14px #111, 0 0 8px ${techBlue}`,
            letterSpacing: "2px",
          }}
        >
          Welcome, Admin
        </h1>
      </main>
    </div>
  );
};

export default AdminDashboard;
