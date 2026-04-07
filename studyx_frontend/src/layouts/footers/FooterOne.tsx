import { Link } from "react-router-dom"

const FooterTwo = () => {

   return (
      <>
         <footer className="footer-section fix">
            <div className="footer-widget-wrapper mb-80">
               <div className="footer-header">
                  <div className="container">
                     <div className="row g-4">
                        <div className="col-lg-4 col-md-4 col-sm-6">
                           <div className="text-sm-start text-center">
                              <div className="footer-logo mb-4 mx-sm-0 mx-auto">
                                 {/* <img src="/assets/img/logo/Mystudy_black.png" alt="img" /> */}
                              </div>
                              <p className="lh-110 fz-14 text-white">&copy; 2025 WiZdom Ed. All rights reserved.</p>
                           </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 d-md-block d-none">
                           <div className="mx-auto text-center">
                              <img src="/assets/img/footer/foote-ele.png" alt="img" className="footer-ele1" />
                           </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                           <div className="socal-icon style1 justify-content-sm-end justify-content-center">
                              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                 <i className="fa-brands fa-facebook-f"></i>
                              </a>
                              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                 <i className="fa-brands fa-twitter"></i>
                              </a>
                              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                 <i className="fa-brands fa-linkedin-in"></i>
                              </a>
                              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                                 <i className="fa-brands fa-pinterest-p"></i>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="footer-middle">
                  <div className="container">
                     <div className="row g-4 justify-content-between">
                        <div className="col-lg-6 col-md-7">
                           {/* <div className="footer-single-widget">
                              <h6 className="text-white fw-500 mb-3">Subscribe for the latest event updates</h6>
                              <div className="search-widget flex-sm-nowrap flex-wrap gap-sm-0 gap-2">
                                 <input type="email" className="bg-white rounded-5 max-300 border-0 px-4 h-48"
                                    placeholder="Type your Email address" />
                                 <Link to="/contact" className="theme-btn px-4 style2 text-dark text-nowrap">Sign Up<i
                                    className="fa-solid fa-arrow-right"></i></Link>
                              </div>
                           </div> */}
                        </div>
                        <div className="col-lg-3 col-md-5 col-sm-6">
                           <h4 className="white-clr mb-sm-3 mb-2">Head Office: Mangalore</h4>
                           <p className="white-clr mx-252 opacity-75 fz-15">
WiZdom Ed., First Floor, Takshila Building, Ballalbag, Mangalore - 575003</p>
                        </div>
                        {/* <div className="col-lg-3 col-md-6 col-sm-6">
                           <h4 className="white-clr mb-sm-3 mb-2">London Office</h4>
                           <p className="white-clr mx-252 opacity-75 fz-15">45 King’s Road, 3rd Floor Chelsea, London SW3
                              5EP, UK</p>
                        </div> */}
                     </div>
                  </div>
               </div>
               <div className="footer-bottom">
                  <div className="container">
                     <ul className="footer-list justify-content-center flex-wrap">
                        <li>
                           <Link to="https://www.wizx.org/" className="fz-15 lh-110 d-flex gap-2 align-items-center">
                              About Us <i className="fa-solid fa-arrow-right rot180"></i>
                           </Link>
                        </li>
                        <li>
                           <Link to="/services" className="fz-15 lh-110 d-flex gap-2 align-items-center">
                              Our services <i className="fa-solid fa-arrow-right rot180"></i>
                           </Link>
                        </li>
                        <li>
                           <Link to="/team" className="fz-15 lh-110 d-flex gap-2 align-items-center">
                              Team <i className="fa-solid fa-arrow-right rot180"></i>
                           </Link>
                        </li>
                        <li>
                           <Link to="/about" className="fz-15 lh-110 d-flex gap-2 align-items-center">
                              Awards <i className="fa-solid fa-arrow-right rot180"></i>
                           </Link>
                        </li>
                        <li>
                           <Link to="/contact" className="fz-15 lh-110 d-flex gap-2 align-items-center">
                              Contact <i className="fa-solid fa-arrow-right rot180"></i>
                           </Link>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </footer>
      </>
   )
}

export default FooterTwo
