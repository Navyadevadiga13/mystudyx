import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Speedometer2, HouseFill, PeopleFill, GearFill, List,BoxArrowRight} from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";

const darkSlate = "#232f3e";
const green = "#16a34a";

const AdminSidebar: React.FC = () => {



  const menuItems = [
    { name: "Dashboard", icon: <Speedometer2 size={22} />, path: "/admin_dashboard" },
    { name: "Courses", icon: <HouseFill size={22} />, path: "/admin_courses" },
    { name: "Users", icon: <PeopleFill size={22} />, path: "/admin_users" },
    { name: "Settings", icon: <GearFill size={22} />, path: "/admin_settings" },
  ];



  // Inline base style for link container
  const baseStyle: React.CSSProperties = {
    cursor: "pointer",
    fontSize: "1.15rem",
    fontWeight: 500,
    color: "#fff",
    transition: "background 0.15s, border 0.15s",
    display: "flex",
    alignItems: "center",
    padding: "0.75rem 1rem",
    borderRadius: "0.375rem",
    textDecoration: "none", // <- remove underline
  };

  const activeStyle: React.CSSProperties = {
    border: `2px solid ${green}`,
    background: green,
    boxShadow: "0 4px 18px 0 rgba(22,163,74,0.18)",
    textDecoration: "none",
  };
const handleLogout = () => {
  localStorage.clear();
  sessionStorage.clear();
  window.location.href = "/admin-login"; // redirect to home or login
};

  return (
    <>
      {/* small CSS to handle hover and ensure no underline anywhere */}
      <style>{`
        .admin-nav .nav-link { text-decoration: none !important; color: #fff !important; }
        .admin-nav .nav-link:hover { background: rgba(22,163,74,0.08); border: 2px solid ${green}; text-decoration: none !important; }
        .admin-nav .nav-link.active { box-shadow: 0 4px 18px 0 rgba(22,163,74,0.18); }
      `}</style>

      {/* Mobile topbar */}
      <nav
        className="d-md-none navbar navbar-dark"
        style={{
          backgroundColor: darkSlate,
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1050,
          paddingLeft: "1rem",
          height: "56px",
          alignItems: "center",
        }}
      >
        <button
          className="btn"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#sidebar"
          aria-controls="sidebar"
          style={{ color: "#fff", background: green }}
        >
          <List size={28} />
        </button>
      </nav>

      {/* Offcanvas for mobile */}
      <div
        className="offcanvas offcanvas-start d-md-none"
        tabIndex={-1}
        id="sidebar"
        aria-labelledby="sidebarLabel"
        style={{ background: darkSlate, width: 280, marginTop: "56px" }}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title text-white" id="sidebarLabel">
            Hello Admin
          </h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>

        <div className="offcanvas-body d-flex flex-column p-0">

  <nav className="nav flex-column gap-2 flex-wrap admin-nav" style={{ minHeight: "60vh" }}>
    {menuItems.map(({ name, icon, path }) => (
      <NavLink
        to={path}
        key={name}
        data-bs-dismiss="offcanvas"
        className="nav-link d-flex align-items-center"
        style={({ isActive }) => ({ ...(baseStyle as object), ...(isActive ? activeStyle : {}) })}
      
      >
        <span className="me-3 text-white flex-shrink-0">{icon}</span>
        <span className="text-truncate">{name}</span>
      </NavLink>
    ))}
  </nav>

  {/* 🔥 Logout Button for Mobile */}
  <button
    onClick={handleLogout}
    className="btn w-100 mt-auto d-flex align-items-center justify-content-center text-white"
    style={{
      background: green,
      padding: "12px",
      borderRadius: 0,
      fontSize: "1.1rem",
      borderTop: `2px solid ${darkSlate}`,
    }}
  >
    <BoxArrowRight size={20} className="me-2" />
    Logout
  </button>
</div>

      </div>

      {/* Desktop sidebar */}
     <aside
  className="d-none d-md-flex flex-column p-3 shadow flex-shrink-0"
  style={{
    width: 280,
    height: "100vh",
    position: "fixed",
    top: 0,
    left: 0,
    overflowY: "auto",
    background: darkSlate,
    borderRight: `2px solid ${green}`,
    zIndex: 1000,
  }}
>

        <h3
          className="pb-3 mb-4 border-bottom fw-bold text-uppercase"
          style={{
            letterSpacing: "1.5px",
            borderColor: "#fff",
            color: "#fff",
          }}
        >
          Hello Admin
        </h3>

        <nav className="nav flex-column gap-2 flex-wrap admin-nav" style={{ minHeight: "60vh" }}>
          {menuItems.map(({ name, icon, path }) => (
            <NavLink
              to={path}
              key={name}
              className="nav-link d-flex align-items-center"
              style={({ isActive }) => ({ ...(baseStyle as object), ...(isActive ? activeStyle : {}) })}
          
            >
              <span className="me-3 text-white flex-shrink-0">{icon}</span>
              <span className="text-truncate">{name}</span>
            </NavLink>
          ))}
        </nav>
        {/* 🔥 Logout Button Desktop */}
<button
  onClick={handleLogout}
  className="btn mt-auto text-white fw-bold d-flex align-items-center justify-content-center"
  style={{
    background: green,
    padding: "12px",
    fontSize: "1.1rem",
    borderRadius: "6px",
    marginTop: "auto",
  }}
>
  <BoxArrowRight size={22} className="me-2" />
  Logout
</button>

      </aside>
    </>
  );
};

export default AdminSidebar;
