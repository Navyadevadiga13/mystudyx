import { Link } from "react-router-dom"


const FooterTwo = () => {
   return (
      <footer className="footer-section2 mt-0 fix">
         <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-3 d-xxl-block d-none">
  <img
    src="/assets/img/logo/Mystudy_black.png"
    alt="img"
    style={{ width: "120px", height: "auto" }}
  />
  <br />
  <span style={{ color: "#ffffff", fontSize: "12px" }}>
    Powered by WiZdom Ed 
  </span> 
</div>

               <div className="col-xxl-9">
                  <div className="footer-inner2 px-3 d-flex align-items-center justify-content-between gap-3 flex-wrap">
                     <div className="">
                        <h4 className="white-clr mb-sm-3 mb-2">Head Office: Mangalore </h4>
                        <p className="white-clr mx-252 opacity-75 fz-15">
                      <b></b>
WiZdom Ed., First Floor, Takshila Building, Ballalbag, Mangalore - 575003
                        </p>
                     </div>
                     <div className="">
                        <h4 className="white-clr mb-sm-3 mb-2">Contact Us</h4>
                        <ul className="white-clr d-flex flex-column gap-2 mx-252 fz-15">
                           <li>
                              <Link to="tel:+11002345909" className="d-flex align-items-center text-white gap-2">
                                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                       d="M14 10.9467V13.3041C14 13.6541 13.7294 13.9445 13.3803 13.9691C13.0887 13.9897 12.8509 14 12.6667 14C6.7756 14 2 9.2244 2 3.33333C2 3.14914 2.0103 2.91125 2.0309 2.61967C2.05558 2.27059 2.34596 2 2.69591 2H5.0534C5.22452 2 5.36784 2.12961 5.38502 2.29987C5.40045 2.45271 5.41479 2.57543 5.42805 2.66801C5.5629 3.60981 5.83835 4.50624 6.23247 5.33535C6.29573 5.46843 6.25447 5.62773 6.13457 5.71337L4.6957 6.7412C5.57168 8.7874 7.2126 10.4283 9.2588 11.3043L10.2847 9.86793C10.3715 9.7466 10.5327 9.70487 10.6673 9.7688C11.4964 10.1626 12.3927 10.4377 13.3344 10.5723C13.4264 10.5855 13.5483 10.5997 13.7001 10.615C13.8704 10.6322 14 10.7755 14 10.9467Z"
                                       fill="#2ECC71" />
                                 </svg>
                             91 8169 600 408
                              </Link>
                           </li>
                           <li>
                              <Link to="mailto:hello@wizx.org" className="d-flex align-items-center text-white gap-2">
                                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                       d="M1.49514 4.56945L7.65959 0.872286C7.87072 0.745653 8.13452 0.7457 8.34559 0.872406L14.5048 4.56944C14.6052 4.62969 14.6666 4.73817 14.6666 4.85524V13.3332C14.6666 13.7014 14.3681 13.9999 13.9999 13.9999H1.99992C1.63173 13.9999 1.33325 13.7014 1.33325 13.3332V4.85532C1.33325 4.73821 1.39471 4.62969 1.49514 4.56945ZM12.2303 5.49577L8.04032 9.12182L3.76473 5.49168L2.90177 6.50809L8.04865 10.878L13.1029 6.50399L12.2303 5.49577Z"
                                       fill="#2ECC71" />
                                 </svg>
                             hello@wizx.org
                              </Link>
                           </li>
                        </ul>
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
                  <div
                     className="footer-bottom py-4 d-flex align-items-center justify-content-lg-between justify-content-center flex-wrap gap-3">
                     <ul className="footer-list justify-content-center flex-wrap">
                        <li>
                           <Link to="https://www.wizx.org/" className="fz-15 lh-110 d-flex gap-2 align-items-center opacity-75">
                              About Us <i className="fa-solid fa-arrow-right rot180"></i>
                           </Link>
                        </li>
                        <li>
                           <Link to="/courses" className="fz-15 lh-110 d-flex gap-2 align-items-center opacity-75">
                              Courses <i className="fa-solid fa-arrow-right rot180"></i>
                           </Link>
                        </li>
                        {/* <li>
                           <Link to="/team" className="fz-15 lh-110 d-flex gap-2 align-items-center opacity-75">
                              Team <i className="fa-solid fa-arrow-right rot180"></i>
                           </Link>
                        </li>
                        <li>
                           <Link to="/about" className="fz-15 lh-110 d-flex gap-2 align-items-center opacity-75">
                              Awards <i className="fa-solid fa-arrow-right rot180"></i>
                           </Link>
                        </li> */}
                        <li>
                           <Link to="/contact" className="fz-15 lh-110 d-flex gap-2 align-items-center opacity-75">
                              Contact <i className="fa-solid fa-arrow-right rot180"></i>
                           </Link>
                        </li>
                     </ul>
                     {/* <div className="payment-thumb">
                        <img src="/assets/img/footer/footer-payment.png" alt="img" />
                     </div> */}
                  </div>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default FooterTwo
