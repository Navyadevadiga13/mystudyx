import { Link } from "react-router-dom"
import case_data from "../../../data/CaseStudiesData"

const CaseStudiesArea = () => {
   return (
      <section className="blog-section section-bg pt-100 pb-100">
         <div className="container">
            <div className="row g-sm-4 g-3 justify-content-between align-items-end mb-40">
               <div className="col-lg-6 col-md-7">
                  <div className="section-header">
                     <div className="d-flex align-items-center gap-2 theme-clr fw-600 mb-2">
                        <img src="/assets/img/icon/section-step1.png" alt="img" /> Cases
                     </div>
                     <h2 className="theme-clr4 fw-bold wow fadeInUp" data-wow-delay=".3s">
                        Transformational Success Stories:
                        <span className="fw-300">Real Results from Our Life Coaching Clients!</span>
                     </h2>
                  </div>
               </div>
               <div className="col-lg56 col-md-5">
                  <div className="wow fadeInUp" data-wow-delay=".4s">
                     <p>
                        At Finovo, we’ve helped countless individuals overcome obstacles, achieve their goals, and create lasting change.
                        Explore these inspiring success stories to see how our coaching services can empower you to reach your full potential.
                     </p>
                  </div>
               </div>
            </div>
            <div className="row g-4">
               {case_data.map((item) => (
                  <div key={item.id} className="col-md-6 col-lg-4">
                     <div className="team-items bg-white hover-translate8 px-xxl-6 px-xl-4 px-3 section-bg rounded-4">
                        <div className="thumb w-100 overflow-hidden">
                           <img src={item.thumb} alt="img" className="w-100 rounded-bottom-3" />
                        </div>
                        <div className="content d-flex align-items-end gap-3 justify-content-between">
                           <div>
                              <span className="fz-14 theme4-border rounded-5 py-1 px-3 d-inline-block theme-clr4 fw-500 mb-3">{item.tag}</span>
                              <h5 className="max-270 wow fadeInUp" data-wow-delay=".3s">
                                 <Link to="/case-details" className="theme-clr4 lh-110 fw-600">
                                    {item.title}
                                 </Link>
                              </h5>
                           </div>
                           <Link to="/case-details"
                              className="theme-clr4 border hover-theme1 min-w-48 w-48 h-48 white-bg rounded-circle d-center d-xl-block d-none fs-five">
                              <i className="fa-solid fa-arrow-right"></i>
                           </Link>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default CaseStudiesArea
