import { Link } from "react-router-dom"
import team_data from "../../../../data/TeamData"

const TeamArea = () => {
   return (
      <section className="teams-section section-bg pt-100 pb-100">
         <div className="container">
            <div className="row justify-content-between g-sm-4 g-3 align-items-end mb-40">
               <div className="col-lg-6 col-md-7">
                  <div className="section-header">
                     <div className="d-flex align-items-center gap-2 theme-clr fw-600 mb-2">
                        <img src="/assets/img/icon/section-step1.png" alt="img" /> Our Team
                     </div>
                     <h2 className="theme-clr4 fw-bold wow fadeInUp" data-wow-delay=".3s">
                        Your Financial Success
                        <span className="fw-300">Starts With the Right People</span>
                     </h2>
                  </div>
               </div>
               <div className="col-lg-5 col-md-5">
                  <div className=" wow fadeInUp" data-wow-delay=".4s">
                     We're a team of dedicated experts committed to your success. With experience, love and passion, we work together to
                     support your goals every step of the way.
                  </div>
               </div>
            </div>
            <div className="row g-4">
               {team_data.map((item) => (
                  <div key={item.id} className="col-sm-6 col-lg-4 col-xl-3">
                     <div className="team-items bg-white hover-translate8 px-xxl-6 px-xxl-4 px-sm-3 px-3 section-bg rounded-4">
                        <div className="thumb w-100 overflow-hidden">
                           <img src={item.thumb} alt="img" className="w-100 rounded-bottom-3" />
                        </div>
                        <div className="content d-flex align-items-end gap-3 justify-content-between">
                           <div>
                              <h5 className="mb-0 wow fadeInUp" data-wow-delay=".3s">
                                 <Link to="/team-details" className="theme-clr4 lh-110 fw-600">
                                    {item.name}
                                 </Link>
                              </h5>
                              <span className="fz-14 d-block theme-clr4 fw-500 mb-1">{item.designation}</span>
                           </div>
                           <Link to="/team-details"
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

export default TeamArea
