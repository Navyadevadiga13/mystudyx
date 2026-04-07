import { Link } from "react-router-dom"
import financial_data from "../../../data/FinancialData"

const WhatdoStart = () => {
   return (
      <section className="whatdow-section section-bg pt-100 pb-100">
         <div className="container">
            <div className="row g-lg-4 g-md-3 g-2 mb-40">
               <div className="col-lg-6">
                  <div className="section-header">
                     <div className="d-flex align-items-center gap-2 theme-clr fw-600 mb-lg-3 m-3">
                        <img src="/assets/img/icon/section-step1.png" alt="img" /> What we do
                     </div>
                     <h2 className="theme-clr4 fw-bold wow fadeInUp" data-wow-delay=".3s">
                        Empowering You to Live Your Best Life & <br />
                        <span className="fw-300">Achieve Lasting Personal Transformation</span>
                     </h2>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="wow fadeInUp" data-wow-delay=".4s">
                     <p className="theme-clr4 mb-lg-3 mb-2">
                        At Finovo, we believe that true transformation starts with clarity and action. Our coaching services are designed to
                        provide personalized support, actionable strategies, and empowering tools to help you unlock your potential
                     </p>
                     <p className="theme-clr4 mb-lg-4 mb-3">
                        Whether you’re looking to improve your career, relationships, or personal growth, we’re here to guide you every step of
                        the way.
                     </p>
                     <h5 className="theme-clr4 mb-xl-2 mb-1">Key Areas We Focus On</h5>
                     <div className="row g-lg-3 g-1">
                        <div className="col-lg-6 col-md-6">
                           <ul className="d-grid gap-1">
                              <li className="d-flex align-items-center gap-2 theme-clr4">
                                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                       d="M0.682617 9.80076C3.46973 12.8164 6.17207 15.5312 8.76973 18.9648C11.5939 13.3476 14.4846 7.71091 19.2541 1.60662L17.9689 1.01794C13.9416 5.28904 10.8127 9.33201 8.09394 14.1367C6.20332 12.4336 3.14785 10.0234 1.28223 8.78513L0.682617 9.80076Z"
                                       fill="#92C201" />
                                 </svg>
                                 Personal Growth & Mindset Mastery
                              </li>
                              <li className="d-flex align-items-center gap-2 theme-clr4">
                                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                       d="M0.682617 9.80076C3.46973 12.8164 6.17207 15.5312 8.76973 18.9648C11.5939 13.3476 14.4846 7.71091 19.2541 1.60662L17.9689 1.01794C13.9416 5.28904 10.8127 9.33201 8.09394 14.1367C6.20332 12.4336 3.14785 10.0234 1.28223 8.78513L0.682617 9.80076Z"
                                       fill="#92C201" />
                                 </svg>
                                 Relationship Transformation
                              </li>
                              <li className="d-flex align-items-center gap-2 theme-clr4">
                                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                       d="M0.682617 9.80076C3.46973 12.8164 6.17207 15.5312 8.76973 18.9648C11.5939 13.3476 14.4846 7.71091 19.2541 1.60662L17.9689 1.01794C13.9416 5.28904 10.8127 9.33201 8.09394 14.1367C6.20332 12.4336 3.14785 10.0234 1.28223 8.78513L0.682617 9.80076Z"
                                       fill="#92C201" />
                                 </svg>
                                 Health & Wellness Coaching
                              </li>
                           </ul>
                        </div>
                        <div className="col-lg-6 col-md-6">
                           <ul className="d-grid gap-1">
                              <li className="d-flex align-items-center gap-2 theme-clr4">
                                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                       d="M0.682617 9.80076C3.46973 12.8164 6.17207 15.5312 8.76973 18.9648C11.5939 13.3476 14.4846 7.71091 19.2541 1.60662L17.9689 1.01794C13.9416 5.28904 10.8127 9.33201 8.09394 14.1367C6.20332 12.4336 3.14785 10.0234 1.28223 8.78513L0.682617 9.80076Z"
                                       fill="#92C201" />
                                 </svg>
                                 Career Development & Success
                              </li>
                              <li className="d-flex align-items-center gap-2 theme-clr4">
                                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                       d="M0.682617 9.80076C3.46973 12.8164 6.17207 15.5312 8.76973 18.9648C11.5939 13.3476 14.4846 7.71091 19.2541 1.60662L17.9689 1.01794C13.9416 5.28904 10.8127 9.33201 8.09394 14.1367C6.20332 12.4336 3.14785 10.0234 1.28223 8.78513L0.682617 9.80076Z"
                                       fill="#92C201" />
                                 </svg>
                                 Goal Setting & Achievement
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row g-4">
               {financial_data.map((item) => (
                  <div key={item.id} className="col-md-6 col-lg-4">
                     <div className="team-items service-items1 financial-items px-xxl-6 px-xxl-4 px-sm-3 px-3 section-bg rounded-4">
                        <div className="content d-xl-flex d-grid align-items-start gap-xl-3 gap-2 justify-content-between">
                           <div>
                              <span className="d-block theme-clr fw-600 mb-2">Our Mission</span>
                              <h5 className="mb-sm-3 mb-2 wow fadeInUp" data-wow-delay=".3s">
                                 <Link to="/services-details" className="theme-clr4 lh-110 fw-600">
                                    {item.title}
                                 </Link>
                              </h5>
                              <span className="fz-14 d-block theme-clr4 fw-500 mb-1">{item.desc}</span>
                           </div>
                           <Link to="/services-details"
                              className="theme-clr4 icon theme-bg  w-54 h-54 white-bg rounded-circle d-center d-xl-block d-none fs-five">
                              <img src={item.icon} alt="img" />
                           </Link>
                        </div>
                        <div className="thumb w-100 overflow-hidden position-relative">
                           <img src={item.thumb} alt="img" className="w-100 rounded-bottom-3" />
                        </div>
                        <div
                           className="team-items service-items1 financial-items financial-subbox px-xxl-6 px-xxl-4 px-sm-3 px-3 section-bg rounded-4">
                           <div className="thumb w-100 overflow-hidden position-relative">
                              <img src={item.thumb} alt="img"
                                 className="w-100 rounded-bottom-3" />
                           </div>
                           <div
                              className="content d-xl-flex d-grid align-items-start gap-xl-3 gap-2 justify-content-between">
                              <div>
                                 <span className="d-block theme-clr fw-600 mb-2">{item.sub_title}</span>
                                 <h5 className="mb-sm-3 mb-2 wow fadeInUp" data-wow-delay=".3s">
                                    <Link to="/services-details" className="theme-clr4 lh-110 fw-600">
                                       {item.title}
                                    </Link>
                                 </h5>
                                 <span className="fz-14 d-block theme-clr4 fw-500 mb-1">{item.desc}</span>
                              </div>
                              <Link to="/services-details"
                                 className="theme-clr4 icon theme-bg  w-54 h-54 white-bg rounded-circle d-center d-xl-block d-none fs-five">
                                 <img src={item.icon} alt="img" />
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default WhatdoStart
