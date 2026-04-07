import { Link } from "react-router-dom"

const CaseDetailsArea = () => {
   return (
      <section className="case-stadies-section section-bg pt-100 pb-100">
         <div className="container">
            <div className="row g-sm-4 g-3 justify-content-between mb-40">
               <div className="col-lg-6 col-md-7">
                  <div className="section-header">
                     <h2 className="theme-clr4 fw-bold wow fadeInUp" data-wow-delay=".3s">
                        Transforming a Stagnant
                        <span className="fw-300">Career into a Path to Success!</span>
                     </h2>
                  </div>
               </div>
               <div className="col-lg-5 col-md-5">
                  <div className="mb-lg-4 mb-3 pb-lg-1 wow fadeInUp" data-wow-delay=".4s">
                     <p>
                        How targeted coaching helped Jane rediscover her passions and build a fulfilling career. We’re a team of expert
                        consultants committed to helping businesses and individuals
                     </p>
                  </div>
                  <Link to="/contact" className="theme-btn style1 pe-20">
                     <i className="fa-solid fa-arrow-right w-36 h-36 bg-white rounded-circle d-center fz-14 theme-clr4"></i>
                     Free Consultation
                  </Link>
               </div>
            </div>
            <div className="row g-4 align-items-lg-center">
               <div className="col-md-6">
                  <div className="case-studies-big-thumb pe-lg-5 w-100 rounded-4 wow fadeInDown" data-wow-delay=".5s">
                     <img src="/assets/img/blog/studies-details-thumb.png" alt="img" className="w-100 rounded-4" />
                  </div>
               </div>
               <div className="col-md-6">
                  <h3 className="theme-clr4 mb-lg-4 mb-md-3 mb-2 wow fadeInUp" data-wow-delay=".2s">Jane’s Story: From Career Stagnation to Professional Fulfillment</h3>
                  <p className="theme-clr4 mb-lg-3 mb-2 wow fadeInUp" data-wow-delay=".4s">Jane came to us feeling stuck in her corporate job, unsure of where her career was heading. For years, she felt
                     unfulfilled and unsure of her next step.</p>
                  <p className="theme-clr4 wow fadeInUp" data-wow-delay=".6s">
                     Although she had gained significant experience, she lacked direction and motivation. Jane knew she needed a change but
                     didn’t know where to start. That’s where our coaching process began. Together, we redefined her career goals, identified
                     her true passions, and crafted a clear, actionable plan to take her career to the next level.
                  </p>
               </div>
            </div>
         </div>
      </section>
   )
}

export default CaseDetailsArea
