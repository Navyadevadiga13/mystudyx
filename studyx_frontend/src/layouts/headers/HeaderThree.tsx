import NavMenu from "./Menu/NavMenu"
import { Link } from "react-router-dom"
import { useState } from "react";
import Offcanvas from "./Menu/Offcanvas";
import HeaderSearch from "./Menu/HeaderSearch";
import UseSticky from "../../hooks/UseSticky";

const HeaderThree = () => {

   const { sticky } = UseSticky();
   const [offCanvas, setOffCanvas] = useState<boolean>(false);
   const [isSearch, setIsSearch] = useState<boolean>(false);

   return (
      <>
         <header id="header-sticky" className={`header-section style1 style3 w-100 ${sticky ? "sticky" : ""}`}>
            <div className="container">
               <div className="mega-menu-wrapper">
                  <div className="header-main">
                     <div className="header-left">
                        <div className="logo">
                           <Link to="/" className="header-logo">
                              <img src="/assets/img/logo/MyStudyX_logo.png" alt="logo-img" />
                           </Link>
                        </div>
                     </div>
                     <div className="header-right d-flex justify-content-end align-items-center">
                        <div className="mean__menu-wrapper d-none d-xl-block">
                           <div className="main-menu">
                              <nav id="mobile-menu">
                                 <NavMenu />
                              </nav>
                           </div>
                        </div>
                        <div className="d-flex align-items-center gap-3">
                           <a onClick={() => setIsSearch(true)} style={{ cursor: "pointer" }}
                              className="search-trigger d-xl-none d-flex search-icon theme-clr4 hover-svg w-48 h-48 white-bg rounded-circle align-items-center justify-content-center d-xl-none d-block">
                              <i className="fa-solid fa-magnifying-glass black"></i>
                           </a>
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

                        </div>
                     </div>

                     <div className="header-hamburger-inner d-xl-flex align-items-center d-none">
                        <div className="dropdown">
                           <button className="fw-600 d-flex align-items-center gap-2 black-clr" type="button"
                              data-bs-toggle="dropdown" aria-expanded="false">
                              <span className="w-36 h-36 d-center rounded-circle shadow-lg bg-white ">
                                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                       d="M11.9989 17C15.6613 17 18.8639 18.5751 20.606 20.9247L18.764 21.796C17.3463 20.1157 14.8463 19 11.9989 19C9.15151 19 6.65155 20.1157 5.23382 21.796L3.39258 20.9238C5.13479 18.5747 8.33699 17 11.9989 17ZM11.9989 2C14.7603 2 16.9989 4.23858 16.9989 7V10C16.9989 12.6888 14.8766 14.8818 12.2158 14.9954L11.9989 15C9.2375 15 6.99893 12.7614 6.99893 10V7C6.99893 4.31125 9.12123 2.11818 11.782 2.00462L11.9989 2ZM11.9989 4C10.4012 4 9.09526 5.24892 9.00402 6.82373L8.99893 7V10C8.99893 11.6569 10.342 13 11.9989 13C13.5966 13 14.9026 11.7511 14.9938 10.1763L14.9989 10V7C14.9989 5.34315 13.6557 4 11.9989 4Z"
                                       fill="#333333" />
                                 </svg>
                              </span>
                              Login
                           </button>
                           <ul className="dropdown-menu">
                              <li><button className="dropdown-item" type="button">Logout</button></li>
                           </ul>
                        </div>
                        <Link to="/contact" className="theme-btn gap-2 text-nowrap style-black px-4">
                           Start Free Trial
                           <i className="fa-solid fa-arrow-right fz-14" style={{ transform: "rotate(-40deg)" }}></i>
                        </Link>
                        <div className="header__hamburger my-auto d-xl-none d-block">
                           <div className="sidebar__toggle" onClick={() => setOffCanvas(true)} style={{ cursor: "pointer" }}>
                              <img src="/assets/img/icon/bars.png" alt="icon" />
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

export default HeaderThree
