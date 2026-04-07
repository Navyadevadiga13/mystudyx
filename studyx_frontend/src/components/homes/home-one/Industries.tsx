import { Link } from "react-router-dom";

const industry_list: string[] = ["Startups & Entrepreneurs", "Finance & Insurance", "Healthcare & Medical Services", "Construction & Infrastructure", "Hospitality & Travel", "Education & EdTech",];

const Industries = () => {
   return (
      <section className="industries-section section-bg pt-100 pb-100">
         <div className="container">
            <div className="row g-4 justify-content-between">
               <div className="col-xl-6 col-lg-6">
                  <img src="/assets/img/element/graph-area.png" alt="img" className="w-100" />
               </div>
               <div className="col-xl-5 col-lg-6">
                  <div className="industries-content">
                     <div className="boxex">
                        <div className="section-header mb-3">
                           <div className="d-flex align-items-center gap-2 theme-clr fw-600 mb-2">
                              Industries
                           </div>
                           <h3 className="theme-clr4 fw-bold wow fadeInUp" data-wow-delay=".3s">
                              We’ve Helped Businesses Rebuild and Thrive
                           </h3>
                        </div>
                        <ul>
                           {industry_list.map((list, i) => (
                              <li key={i} className="d-flex py-2 align-items-center fw-600 theme-clr4 justify-content-between gap-2 flex-sm-nowrap flex-wrap py-1 wow fadeInUp"
                                 data-wow-delay=".2s">
                                 {list}
                                 <Link to="/about"
                                    className="theme-clr4 border hover-theme1 min-w-40 w-40 h-40 white-bg rounded-circle d-center d-xl-block d-none fs-five">
                                    <i className="fa-solid fa-arrow-right"></i>
                                 </Link>
                              </li>
                           ))}
                        </ul>
                     </div>
                     <img src="/assets/img/element/industry-links.png" alt="img" className="industries-shape" />
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Industries
