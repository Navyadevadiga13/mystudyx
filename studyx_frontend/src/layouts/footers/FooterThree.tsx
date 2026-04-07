import { Link } from "react-router-dom"

const FooterThree = () => {

   return (
      <>
         <footer className="footer-section3 pt-100 fix">
            <div className="container pt-xl-5">
               <div className="deserve-content text-center pb-100 mb-lg-4">
                  <div className="section-header">
                     <h2 className="black-clr mb-40 fw-bold wow fadeInUp" data-wow-delay=".3s">
                        Ready to unlock the power <br /> of AI for your business?
                     </h2>
                     <Link to="/contact" className="theme-btn gap-2 text-nowrap style-black px-4">
                        Request a Demo
                        <i className="fa-solid fa-arrow-right fz-14" style={{ transform: 'rotate(-40deg)' }}></i>
                     </Link>
                  </div>
               </div>
               <div className="border-bottom pb-5 pt-xl-5">
                  <div className="row g-4 justify-content-between">
                     <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="text-sm-start text-center">
                           <div className="footer-logo mb-4 mx-sm-0 mx-auto">
                              {/* <img src="/assets/img/logo/MyStudyX_logo.png" alt="img" /> */}
                           </div>
                           <p className="lh-110 fz-14 black-clr">&copy;2025 WiZdom Ed. All rights reserved.</p>
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="socal-icon social-style3 justify-content-sm-end justify-content-center">
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
               <div className="footer-middle border-bottom">
                  <div className="container">
                     <div className="row g-4 justify-content-between">
                        <div className="col-lg-6 col-md-7">
                           <div className="footer-single-widget">
                              <h4 className="black-clr mb-sm-3 mb-2">Newsletter Signup</h4>
                              <div className="search-widget flex-sm-nowrap flex-wrap gap-sm-1 gap-2">
                                 <input type="email" className="E9ECF3-bg rounded-5 max-300 border-0 px-4 h-48"
                                    placeholder="Type your Email address" />
                                 <Link to="/contact" className="theme-btn gap-2 text-nowrap style-black px-4">Sign
                                    Up<i className="fa-solid fa-arrow-right"></i></Link>
                              </div>
                           </div>
                        </div>
                        <div className="col-lg-3 col-md-5 col-sm-6">
                           <h4 className="black-clr mb-sm-3 mb-2">Address</h4>
                           <p className="black-clr mx-252 fz-15">123 Madison Avenue, Suite 600 New York, NY 10016, USA</p>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                           <h4 className="black-clr mb-sm-3 mb-2">Contact</h4>
                           <div className="d-flex flex-column gap-0">
                              <div className="d-flex align-items-center gap-2 black-clr fw-400">
                                 Email: <Link to="mailto:support@example.com" className="fw-600">support@company.com</Link>
                              </div>
                              <div className="d-flex align-items-center gap-2 black-clr fw-400">
                                 Phone: <Link to="tel:+11002345909" className="fw-600">(123) 456-7890</Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div
                  className="footer-bottom py-4 d-flex align-items-center justify-content-lg-between justify-content-center flex-wrap gap-3">
                  <ul className="footer-list justify-content-center flex-wrap">
                     <li>
                        <Link to="https://www.wizx.org/" className="fz-15 lh-110 d-flex gap-2 align-items-center text-black fw-500">
                           About Us <i className="fa-solid fa-arrow-right rot180"></i>
                        </Link>
                     </li>
                     <li>
                        <Link to="/services" className="fz-15 lh-110 d-flex gap-2 align-items-center text-black fw-500">
                           Our services <i className="fa-solid fa-arrow-right rot180"></i>
                        </Link>
                     </li>
                     <li>
                        <Link to="/team" className="fz-15 lh-110 d-flex gap-2 align-items-center text-black fw-500">
                           Team <i className="fa-solid fa-arrow-right rot180"></i>
                        </Link>
                     </li>
                     <li>
                        <Link to="/about" className="fz-15 lh-110 d-flex gap-2 align-items-center text-black fw-500">
                           Awards <i className="fa-solid fa-arrow-right rot180"></i>
                        </Link>
                     </li>
                     <li>
                        <Link to="/contact" className="fz-15 lh-110 d-flex gap-2 align-items-center text-black fw-500">
                           Contact <i className="fa-solid fa-arrow-right rot180"></i>
                        </Link>
                     </li>
                  </ul>
                  <div className="payment-thumb">
                     <img src="/assets/img/footer/payment-badge3.png" alt="img" />
                  </div>
               </div>
            </div>
         </footer>
      </>
   )
}

export default FooterThree
