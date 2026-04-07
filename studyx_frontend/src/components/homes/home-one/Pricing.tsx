import { Link } from "react-router-dom"
import pricing_data from "../../../data/PricingData"

const Pricing = () => {
   return (
      <section className="pricing-section section-bg">
         <div className="pricing-wrapper1 pt-100 pb-100 px-3 rounded-4">
            <div className="container">
               <div className="row justify-content-center mb-4 pb-lg-2">
                  <div className="col-xl-6">
                     <div className="section-header text-center">
                        <div className="d-flex justify-content-center align-items-center gap-2 theme-clr fw-600 mb-2">
                           <img src="/assets/img/icon/section-step1.png" alt="img" /> Pricing
                        </div>
                        <h2 className="text-white fw-bold wow fadeInUp" data-wow-delay=".3s">
                           Flexible Consulting Packages to Fit
                           <span className="fw-300">Every Stage of Your Business</span>
                        </h2>
                     </div>
                  </div>
               </div>
               <div className="row g-4">
                  {pricing_data.filter((items) => items.page === "home_1").map((item) => (
                     <div key={item.id} className="col-md-6 col-lg-4">
                        <div className={`pricing-plan-items ${item.active} bg-white rounded-3 wow fadeInUp`} data-wow-delay=".5s">
                           <div className="mb-xl-4 mb-3">
                              <h4 className="mb-1 theme-clr4">{item.title}</h4>
                              <p className="opacity-75 theme-clr4">{item.desc}</p>
                           </div>
                           <div className="d-flex align-items-end gap-2 mb-lg-4 mb-3">
                              <h2 className="theme-clr4 fw-800">${item.price}</h2>
                              <span className="fz-15 opacity-75">/{item.time}</span>
                           </div>
                           <Link to="/courses"
                              className="theme-btn w-100 d-center style1 hover-theme1 outline-btn px-4">
                              Get Started Today
                              <i className="fa-solid fa-arrow-right d-center fz-17 theme-clr4"></i>
                           </Link>
                           <ul className="mt-lg-5 mt-4 d-flex flex-column gap-2">
                              {item.list.map((list, i) => (
                                 <li key={i} className="d-flex align-items-center gap-xl-3 gap-2 opacity-75 theme-clr4 fz-15">
                                    <img src={list.icon} alt="img" />
                                    {list.title}
                                 </li>
                              ))}
                           </ul>
                           {item.active && <img src="/assets/img/element/popular-badge.png" alt="img" className="popular-badge"/>}
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   )
}

export default Pricing
