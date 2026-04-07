import NavMenu from "./Menu/NavMenu"
import { useState } from "react";
import Offcanvas from "./Menu/Offcanvas";
import HeaderSearch from "./Menu/HeaderSearch";
import UseSticky from "../../hooks/UseSticky";
import { Link } from "react-router-dom";

const HeaderOne = () => {
   const { sticky } = UseSticky();
   const [offCanvas, setOffCanvas] = useState<boolean>(false);
   const [isSearch, setIsSearch] = useState<boolean>(false);

   return (
      <>

         <header
            id="header-sticky"
            className={`header-section style1 w-100 ${sticky ? "sticky" : ""}`}
            style={{
               height: "40px",
               padding: 0,
               margin: 0,
               display: "flex",
               alignItems: "center",
               backgroundColor: "#fff",
               boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
            }}
         >
            <div className="container" style={{ height: "100%" }}>
               <div className="mega-menu-wrapper" style={{ height: "100%" }}>
                  <div
                     className="header-main"
                     style={{
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: 0,
                        margin: 0,
                     }}
                  >
                     {/* LEFT */}
                     <div className="header-left" style={{ display: "flex", alignItems: "center" }}>
                        <div className="logo">
                           <Link to="/" className="header-logo">
                              <img
                                 src="/assets/img/logo/assets/img/logo/MyStudyX_logo.png"
                                 alt="logo-img"
                                 style={{ height: 24, width: "auto" }}   // much smaller logo
                              />
                           </Link>
                        </div>
                     </div>

                     {/* RIGHT */}
                     <div
                        className="header-right d-flex justify-content-end align-items-center"
                        style={{ height: "100%", gap: "16px" }}
                     >
                        <div
                           className="mean__menu-wrapper d-none d-xl-block"
                           style={{ height: "100%", display: "flex", alignItems: "center" }}
                        >
                           <div className="main-menu">
                              <nav id="mobile-menu" className="main-nav-wrapper">
                                 <NavMenu />
                              </nav>

                           </div>
                        </div>

                        <div className="d-flex align-items-center" style={{ gap: "8px" }}>
                           <div className="header__hamburger d-xl-none d-block my-auto">
                              <div
                                 className="sidebar__toggle"
                                 onClick={() => setOffCanvas(true)}
                                 style={{ cursor: "pointer" }}
                              >
                                 <img
                                    src="/assets/img/icon/bars.png"
                                    alt="icon"
                                    style={{ height: 18, filter: "brightness(0)" }}
                                 />
                              </div>
                           </div>


                           {/* right-side utilities, also compact */}
                           <div
                              className="d-xl-flex align-items-center d-none"
                              style={{ gap: "10px", height: "100%" }}
                           >
                              <Link
                                 to="/contact"
                                 className="theme-btn text-nowrap style-white pe-20"
                                 style={{ padding: "2px 8px", color: "black", fontSize: "13px" }}
                              >
                                 <i
                                    className="fa-solid fa-arrow-right bg-white theme4-border rounded-circle d-center fz-14 theme-clr4"
                                    style={{ width: 22, height: 22, marginRight: 4 }}
                                 />
                                 Contact Us
                              </Link>

                              <a
                                 onClick={() => setIsSearch(true)}
                                 style={{ cursor: "pointer", width: 26, height: 26 }}
                                 className="search-trigger search-icon theme-clr4 hover-svg white-bg rounded-circle d-center d-xl-block d-none fs-five"
                              >
                                 <i className="fa-solid fa-magnifying-glass black" />
                              </a>

                              <div className="d-flex align-items-center" style={{ gap: "6px" }}>
                                 <i
                                    className="fa-solid fa-phone rounded-circle theme-bg4 d-center theme-clr"
                                    style={{ width: 24, height: 24 }}
                                 />
                                 <Link
                                    to="tel:+91 8169 600 408"
                                    className="fw-normal d-xxl-block d-none"
                                    style={{ lineHeight: 1, fontSize: "12px" }}
                                 >
                                    <span className="fw-600 text-nowrap theme-clr4">+91 8169 600 408</span>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>




         <Offcanvas offCanvas={offCanvas} setOffCanvas={setOffCanvas} />
         <HeaderSearch isSearch={isSearch} setIsSearch={setIsSearch} />
      </>
   )
}

export default HeaderOne
