import NavMenu from "./Menu/NavMenu"
import { Link } from "react-router-dom"
import { useState } from "react";
import Offcanvas from "./Menu/Offcanvas";
import HeaderSearch from "./Menu/HeaderSearch";
import UseSticky from "../../hooks/UseSticky";

const HeaderTwo = () => {

   const { sticky } = UseSticky();
   const [offCanvas, setOffCanvas] = useState<boolean>(false);
   const [isSearch, setIsSearch] = useState<boolean>(false);

   return (
      <>
         <header
            id="header-sticky"
            className={`header-section style1 header-white w-100 bg-white ${sticky ? "sticky" : ""}`}
         >

            <div className="container">
               <div className="mega-menu-wrapper">
                  <div className="header-main">
                     <div className="header-left">
                     <div className="logo" style={{ transform: "translateY(-6px)" }}>
  <Link to="/" className="header-logo">
    <img
      src="/assets/img/logo/MyStudyX_logo.png"
      alt="logo-img"
      style={{ width: "100px", height: "auto", maxHeight: "110px" }}
    />
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
                           {/* <a onClick={() => setIsSearch(true)} style={{ cursor: "pointer" }}
                              className="search-trigger d-xl-none d-flex search-icon theme-clr4 hover-svg w-48 h-48 white-bg rounded-circle align-items-center justify-content-center d-xl-none d-block">
                              <i className="fa-solid fa-magnifying-glass black"></i>
                           </a> */}
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

                     <div className="header-hamburger-inner d-xl-flex align-items-center d-none gap-2">
                        {/* <a onClick={() => setIsSearch(true)} style={{ cursor: "pointer" }}
                              className="search-trigger search-icon theme-clr4 hover-svg w-48 h-48 rounded-circle d-center d-xl-block d-none fs-five">
                              <i className="fa-solid fa-magnifying-glass white-clr fz-19"></i>
                           </a> */}
                        {/* <Link to="/contact" className="theme-btn text-nowrap white-blur pe-20">
                           <i
                              className="fa-solid fa-arrow-right w-36 h-36 bg-white theme4-border rounded-circle d-center fz-14 theme-clr4"></i>
                           Check All Services
                        </Link> */}
                       <div className="header__hamburger d-xl-none d-block my-auto">
  <div
    className="sidebar__toggle bars-white"
    onClick={() => setOffCanvas(true)}
    style={{ cursor: "pointer" }}
  >
    <i
      className="fa-solid fa-bars"
      style={{ fontSize: 22, color: "black" }}
    ></i>
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

export default HeaderTwo
