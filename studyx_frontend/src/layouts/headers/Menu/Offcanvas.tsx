import { Link } from "react-router-dom"
import MobileMenu from "./MobileMenu";

interface MobileSidebarProps {
  offCanvas: boolean;
  setOffCanvas: (offCanvas: boolean) => void;
}

const Offcanvas = ({ offCanvas, setOffCanvas }: MobileSidebarProps) => {
  return (
    <>
      <div className="fix-area">
        <div className={`offcanvas__info ${offCanvas ? "info-open" : ""}`}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content" style={{ position: 'relative' }}>
              {/* Absolutely positioned close button */}
              <button
                className="offcanvas__close-btn"
                onClick={() => setOffCanvas(false)}
                aria-label="Close menu"
                type="button"
                tabIndex={0}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
              <div className="offcanvas__top mb-4 d-flex justify-content-between align-items-center" style={{ paddingRight: "3rem" }}>
                <div className="offcanvas__logo">
              {/* <Link to="/">
  <img
    src="/assets/img/logo/MyStudyX_logo.png"
    alt="logo-img"
    style={{ width: "100px", height: "auto" }}  // adjust px value as you like
  />
</Link> */}

                </div>
              </div>
              <div className="mobile-menu fix mb-3"></div>
              <div className="mobile-menu fix mb-3 mean-container">
                <div className="mean-bar">
                  <nav className="mean-nav">
                    <MobileMenu />
                  </nav>
                </div>
              </div>
              <div className="offcanvas__contact">
                <h4 className="n900-clr">Contact Info</h4>
                <ul className="d-grid gap-2 mb-5">
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <Link target="_blank" to="/">
                        WiZdom Ed., First Floor, Takshila Building, Ballalbag, Mangalore - 575003
                      </Link>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <Link to="mailto:info@example.com">
                        <span className="mailto:info@example.com">hello@wizx.org</span>
                      </Link>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-clock"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <Link target="_blank" to="/">Mon-friday, 10:30am -06:00pm</Link>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <Link to="tel:+11002345909">91 8169 600 408</Link>
                    </div>
                  </li>
                </ul>
                <div className="header-button mt-4">
                  <Link to="/contact" className="theme-btn p2-bg d-center gap-2 text-center">
                    <span>
                      Get A Quote
                      <span className="ani-arrow">
                        <i className="fa-solid fa-arrow-right-long"></i>
                      </span>
                    </span>
                  </Link>
                </div>
                <div className="">
                  <h4 className="white-clr mb-sm-3 mb-2">Social Links</h4>
                  <div className="socal-icon style1 justify-content-sm-end justify-content-center">
                    <a href="https://www.facebook.com/share/1BLG8uru6c/" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="https://www.instagram.com/wizdom.ed?igsh=MXJtZGhucWppbTJyNg==" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/wizx/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="https://www.youtube.com/@wizdomed2090" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => setOffCanvas(false)}
        className={`offcanvas__overlay ${offCanvas ? "overlay-open" : ""}`}
      ></div>
    </>
  );
};

export default Offcanvas;
