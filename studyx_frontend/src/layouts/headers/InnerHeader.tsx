import NavMenu from "./Menu/NavMenu";
import { useState } from "react";
import Offcanvas from "./Menu/Offcanvas";
import HeaderSearch from "./Menu/HeaderSearch";
import UseSticky from "../../hooks/UseSticky";
import { Link } from "react-router-dom";

// Add this interface
interface InnerHeaderProps {
  title?: string;
}

const InnerHeader = ({ title }: InnerHeaderProps) => {
  const { sticky } = UseSticky();
  const [offCanvas, setOffCanvas] = useState<boolean>(false);
  const [isSearch, setIsSearch] = useState<boolean>(false);

  return (
    <>
      <header
        id="header-sticky"
        className={`header-section section-bg border-0 style1 position-relative w-100 ${
          sticky ? "sticky" : ""
        }`}
      >
        <div className="container">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="header-left">
                <div className="logo">
                <Link to="/">
  <img
    src="/assets/img/logo/MyStudyX_logo.png"
    alt="logo-img"
    style={{ width: "100px", height: "auto" }}  // adjust px value as you like
  />
</Link>

                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="mean__menu-wrapper d-none d-lg-block">
                  <div className="main-menu">
                    <nav id="mobile-menu">
                      <NavMenu />
                    </nav>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-3">
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
                <Link
                  to="/contact"
                  className="theme-btn text-nowrap style-white pe-20"
                >
                  <i className="fa-solid fa-arrow-right w-36 h-36 bg-white theme4-border rounded-circle d-center fz-14 theme-clr4"></i>
                  Contact Us
                </Link>
                <div className="d-flex align-items-center gap-3"></div>
                <div className="header__hamburger my-auto d-xl-none d-block">
                  <div
                    className="sidebar__toggle"
                    onClick={() => setOffCanvas(true)}
                    style={{ cursor: "pointer" }}
                  >
                    <img src="/assets/img/icon/bars.png" alt="icon" />
                  </div>
                </div>
              </div>
            </div>
            {/* Renders the title if provided, center-aligned */}
            {title && (
              <div className="w-100 d-flex justify-content-center align-items-center" style={{ margin: "24px 0" }}>
                <h1 className="fw-bold mb-0">{title}</h1>
              </div>
            )}
          </div>
        </div>
      </header>
      <Offcanvas offCanvas={offCanvas} setOffCanvas={setOffCanvas} />
      <HeaderSearch isSearch={isSearch} setIsSearch={setIsSearch} />
    </>
  );
};

export default InnerHeader;
