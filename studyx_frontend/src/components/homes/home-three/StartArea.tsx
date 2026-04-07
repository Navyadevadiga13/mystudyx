import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import blog_data from "../../../data/BlogData"

const setting = {
   speed: 1500,
   loop: true,
   autoplay: {
      delay: 1000,
      disableOnInteraction: false,
   },
   breakpoints: {
      1199: {
         slidesPerView: 4,
      },
      767: {
         slidesPerView: 3,
      },
      500: {
         slidesPerView: 2,
      },
      0: {
         slidesPerView: 1,
      },
   },
};

const StartArea = () => {
   return (
      <section className="insight-section bg-white z-1 fix pt-100">
         <Swiper {...setting} modules={[Autoplay]} className="swiper insight-Wrapper">
            {blog_data.filter((items) => items.page === "home_3_1").map((item) => (
               <SwiperSlide key={item.id} className="swiper-slide">
                  <div className="team-items insight-items3 rounded-4">
                     <Link to="/case-details" className="thumb d-block w-100 overflow-hidden">
                        <img src={item.thumb} alt="img" className="w-100 rounded-3" />
                     </Link>
                     <div className="content pt-4 pb-2 px-2 d-flex align-items-end gap-3 justify-content-between">
                        <div>
                           <div className="d-flex gap-1 align-items-center flex-wrap mb-3">
                              <span className="fz-14 badge-cus theme-clr4 theme4-border py-1 px-3 rounded-5 fw-500">{item.tag}</span>
                           </div>
                           <h4 className="max-270 wow fadeInUp" data-wow-delay=".4s">
                              <Link to="/case-details" className="theme-clr4 lh-110 fw-600">
                                 {item.title}
                              </Link>
                           </h4>
                        </div>
                        <Link to="/case-details"
                           className="theme-clr4 border hover-theme1 min-w-48 w-48 h-48 rounded-circle d-center d-block fs-five">
                           <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                     </div>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
      </section>
   )
}

export default StartArea
