import { Link } from "react-router-dom"
import financial_data from "../../data/FinancialData"

const Financial = () => {
   return (
      <section className="financial-section section-bg pt-100 pb-100">
         <div className="container">
            <div className="row g-lg-4 g-md-3 g-2 align-items-end mb-40">
               <div className="col-lg-7 col-md-7">
                  <div className="section-header">
                     <h2 className="theme-clr4 fw-bold wow fadeInUp" data-wow-delay=".3s">
                        Empowering Your Financial Journey
                        <span className="fw-300">with Clarity and Confidence</span>
                     </h2>
                  </div>
               </div>
               <div className="col-lg-5 col-md-5">
                  <div className="wow fadeInUp" data-wow-delay=".4s">
                     <p className="theme-clr4 mb-lg-4 mb-3">
                        We’re a team of expert consultants committed to helping businesses and individuals make
                        smarter financial decisions with
                        tailored strategies and trusted guidance
                     </p>
                     <Link to="/services" className="theme-btn style1 pe-20">
                        <i
                           className="fa-solid fa-arrow-right w-36 h-36 bg-white rounded-circle d-center fz-14 theme-clr4"></i>
                        Free Consultation
                     </Link>
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

export default Financial
