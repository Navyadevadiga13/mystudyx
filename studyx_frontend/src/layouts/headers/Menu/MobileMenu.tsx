/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import menu_data from "../../../data/MenuData";

const MobileMenu = () => {
  const [navTitle, setNavTitle] = useState("");
  const [, setSubNavTitle] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    const handleStorage = () => setIsLoggedIn(!!localStorage.getItem("token"));
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const openMobileMenu = (menu: any) => {
    setNavTitle((prev: any) => (prev === menu ? "" : menu));
    setSubNavTitle("");
  };

  return (
    <ul>
      {menu_data.map((menu) => {
        // same logic as NavMenu: replace Sign Up with My Profile
        if (menu.title === "Sign Up" && isLoggedIn) {
          return (
            <li key="mobile-profile">
              <Link to="/my-profile">
                <i className="fa fa-user-circle" style={{ marginRight: 6 }}></i>
                My Profile
              </Link>
            </li>
          );
        }

        // original rendering for other menu items
        if (menu.mega_menus) {
          return (
            <li
              key={menu.id}
              className={`has-dropdown active menu-thumb ${
                navTitle === menu.title ? "dropdown-opened" : ""
              }`}
            >
              <Link to={menu.link}>{menu.title}</Link>

              <ul
                className="submenu has-homemenu"
                style={{ display: navTitle === menu.title ? "block" : "none" }}
              >
                <li>
                  <div className="homemenu-items">
                    {menu.mega_menus.map((item) => (
                      <div key={item.id} className="homemenu">
                        <div className="homemenu-thumb">
                          <img src={item.thumb} alt="img" />
                          <div className="demo-button">
                            <Link
                              to={item.link}
                              className="theme-btn style4 d-center"
                            >
                              <span>{item.title}</span>
                            </Link>
                          </div>
                        </div>
                        <div className="homemenu-content text-center">
                          <h4 className="homemenu-title">
                            <Link to={item.link}>Home Version 0{item.id}</Link>
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </li>
              </ul>

              {menu.mega_menus && (
                <a
                  className={`mean-expand ${
                    navTitle === menu.title ? "mean-clicked" : ""
                  }`}
                  onClick={() => openMobileMenu(menu.title)}
                  style={{ cursor: "pointer", fontSize: "18px" }}
                >
                  <i className="fal fa-plus"></i>
                </a>
              )}
            </li>
          );
        }

        return (
          <li key={menu.id}>
            <Link to={menu.link}>{menu.title}</Link>

            {menu.has_dropdown && menu.sub_menus && (
              <ul
                className="submenu"
                style={{ display: navTitle === menu.title ? "block" : "none" }}
              >
                {menu.sub_menus.map((sub_m, i) => (
                  <li key={i}>
                    <Link to={sub_m.link}>{sub_m.title}</Link>
                  </li>
                ))}
              </ul>
            )}

            {menu.sub_menus && (
              <a
                className={`mean-expand ${
                  navTitle === menu.title ? "mean-clicked" : ""
                }`}
                onClick={() => openMobileMenu(menu.title)}
                style={{ cursor: "pointer", fontSize: "18px" }}
              >
                <i className="fal fa-plus"></i>
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default MobileMenu;
