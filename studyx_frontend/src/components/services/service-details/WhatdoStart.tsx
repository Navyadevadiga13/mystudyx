import { Link } from "react-router-dom"

const WhatdoStart = () => {
   return (
      <section className="whatdow-section section-bg pt-100 pb-100">
         <div className="container">
            <div className="row g-lg-4 g-md-3 g-2 align-items-lg-end mb-40">
               <div className="col-lg-7 col-md-7">
                  <div className="section-header">
                     <h2 className="theme-clr4 fw-bold wow fadeInUp" data-wow-delay=".3s">
                        Unlock Your Financial <br /> Potential
                        <span className="fw-300">with Expert <br /> Wealth Planning</span>
                     </h2>
                  </div>
               </div>
               <div className="col-lg-5 col-md-5">
                  <div className="wow fadeInUp" data-wow-delay=".4s">
                     <p className="theme-clr4 mb-lg-4 mb-3">
                        Strategic coaching and tailored wealth planning to help you achieve financial security, independence, and peace of mind
                     </p>
                     <Link to="services" className="theme-btn style1 pe-20">
                        <i className="fa-solid fa-arrow-right w-36 h-36 bg-white rounded-circle d-center fz-14 theme-clr4"></i>
                        Book Your Free Consultation
                     </Link>
                  </div>
               </div>
            </div>
            <div className="row g-xxl-5 g-lg-4 align-items-center g-md-3 g-3">
               <div className="col-lg-6">
                  <img src="/assets/img/about/financial-corporate.png" alt="img" className="w-100 rounded-4" />
               </div>
               <div className="col-lg-6">
                  <div className="wow fadeInUp" data-wow-delay=".4s">
                     <h5 className="mb-3">What Is Wealth Planning?</h5>
                     <p className="theme-clr4 mb-lg-3 mb-2">
                        Wealth planning isn’t just about managing your money; it’s about creating a clear and actionable roadmap to financial
                        freedom. At Finovo, we help you define your financial goals, invest wisely, and create a strategy to ensure long-term
                        success.
                     </p>
                     <p className="theme-clr4 mb-lg-4 mb-3">
                        Whether you're building your wealth from scratch or looking to optimize your current portfolio, we provide expert
                        guidance that aligns with your unique needs and goals.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default WhatdoStart
