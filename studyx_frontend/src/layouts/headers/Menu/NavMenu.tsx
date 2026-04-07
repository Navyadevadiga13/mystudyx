/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "react-router-dom";
import menu_data from "../../../data/MenuData";
import { useEffect, useState } from "react";
const getAuthStatus = () => {
  const token = localStorage.getItem("token");
  return token !== null && token !== "null" && token !== "undefined" && token !== "";
};

const NavMenu = () => {
const [isLoggedIn, setIsLoggedIn] = useState(getAuthStatus());

  const [navClick, setNavClick] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navClick]);

 useEffect(() => {
  const handleStorage = () => {
    setIsLoggedIn(getAuthStatus());
  };

  window.addEventListener("storage", handleStorage);
  return () => window.removeEventListener("storage", handleStorage);
}, []);


  const ulStyle: React.CSSProperties = {
    margin: 0,
    padding: 0,
    display: "flex",
    alignItems: "center",
    gap: "24px",
    marginTop: "-5px",
    marginBottom: "-1px",
  };

  const liStyle: React.CSSProperties = {
    listStyle: "none",
    backgroundColor: "rgba(0,0,0,0.08)",
    borderRadius: 999,
    padding: "4px 12px",
    display: "flex",
    alignItems: "center",
  };

  const linkStyle: React.CSSProperties = {
    padding: "4px 0",
    lineHeight: 1.2,
    fontSize: "15px",
    textDecoration: "none",
  };

  return (
    <>
      <style>
        {`
          .nav-link-custom,
          .nav-link-custom:visited,
          .nav-link-custom:hover,
          .nav-link-custom:focus {
            color: #000 !important;
            background-color: transparent !important;
          }
        `}
      </style>

      <ul style={ulStyle}>
        {menu_data.map((menu) => {
          // Sign Up -> My Profile when logged in
          if (menu.title === "Sign Up") {
            if (isLoggedIn) {
              return (
                <li key="profile" style={liStyle}>
                  <Link
                    to="/my-profile"
                    onClick={() => setNavClick(!navClick)}
                    className="nav-link-custom"
                    style={linkStyle}
                  >
                    <i className="fa fa-user-circle" style={{ marginRight: 6 }} />
                    My Profile
                  </Link>
                </li>
              );
            }

            return (
              <li key={menu.id} style={liStyle}>
                <Link
                  to={menu.link}
                  onClick={() => setNavClick(!navClick)}
                  className="nav-link-custom"
                  style={linkStyle}
                >
                  {menu.title}
                </Link>
              </li>
            );
          }

          // all other menu items
          return (
            <li key={menu.id} style={liStyle}>
              <Link
                to={menu.link}
                onClick={() => setNavClick(!navClick)}
                className="nav-link-custom"
                style={linkStyle}
              >
                {menu.title}
              </Link>
              {menu.has_dropdown && menu.sub_menus && (
                <ul className="submenu" style={{ marginTop: 8, padding: 0 }}>
                  {menu.sub_menus.map((sub_m, i) => (
                    <li
                      key={i}
                      style={{
                        listStyle: "none",
                        marginTop: 4,
                        backgroundColor: "rgba(0,0,0,0.10)",
                        borderRadius: 999,
                        padding: "4px 10px",
                      }}
                    >
                      <Link
                        to={sub_m.link}
                        onClick={() => setNavClick(!navClick)}
                        className="nav-link-custom"
                        style={linkStyle}
                      >
                        {sub_m.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}

        {/* Wishlist heart only when logged in */}
        {isLoggedIn && (
          <li
            style={{
              listStyle: "none",
              padding: 0,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Link
              to="/wishlist"
              onClick={() => setNavClick(!navClick)}
              className="nav-link-custom"
              style={{ ...linkStyle, display: "flex", alignItems: "center" }}
            >
              <span
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  border: "1.5px solid #000",
                  backgroundColor: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i className="fa fa-heart" style={{ fontSize: 13, color: "#000" }} />
              </span>
            </Link>
          </li>
        )}
      </ul>
    </>
  );
};

export default NavMenu;
