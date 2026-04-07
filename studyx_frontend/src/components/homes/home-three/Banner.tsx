import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const brands: string[] = [
   "/assets/img/testimonial/sponsor-gray1.png",
   "/assets/img/testimonial/sponsor-gray2.png",
   "/assets/img/testimonial/sponsor-gray3.png",
   "/assets/img/testimonial/sponsor-gray4.png",
   "/assets/img/testimonial/sponsor-gray5.png",
   "/assets/img/testimonial/sponsor-gray3.png",
]

const setting = {
   spaceBetween: 30,
   speed: 1500,
   loop: true,
   autoplay: {
      delay: 1000,
      disableOnInteraction: false,
   },
   breakpoints: {
      1199: {
         slidesPerView: 5,
      },
      767: {
         slidesPerView: 5,
      },
      575: {
         slidesPerView: 4,
      },
      0: {
         slidesPerView: 2,
      },
   },
};

const Banner = () => {
   return (
      <div className="banner-section fix style3">
         <div className="container position-relative">
            <div className="banner-content3">
               <h1 className="mb-3 black-clr wow fadeInUp" data-wow-delay=".3s">
                  AI Solutions <br />
                  for Business Growth
               </h1>
               <p className="mb-4 wow fadeInUp" data-wow-delay=".5s">
                  We help companies deploy machine learning models,
                  and extract insights from data
               </p>
               <Link to="/contact" className="theme-btn style4 px-4">
                  See How It Works
                  <i className="fa-solid fa-arrow-right fz-14" style={{ transform: 'rotate(-40deg)' }}></i>
               </Link>
            </div>
            <div className="hero-thumb3 position-relative">
               <img src="/assets/img/banner/hero-thumb3.png" alt="img" className="w-100" />
               <img src="/assets/img/banner/hero-groth-left.png" alt="img" className="groth-left position-absolute" />
               <img src="/assets/img/banner/hero-groth-right.png" alt="img" className="groth-right position-absolute" />
               <span className="fz-14 text-uppercase fw-800 theme-clr4 text-end position-absolute text-modified">
                  Modified <br />
                  Sidebar
               </span>
               <span className="fz-14 text-uppercase fw-800 theme-clr4 position-absolute text-start text-improved">
                  Improved <br />
                  user functionality
               </span>
            </div>
         </div>
         <div className="sponsor-section3 position-relative">
            <div className="container">
               <div className="row g-4 justify-content-between">
                  <div className="col-lg-4">
                     <div className="d-flex gap-xxl-4 gap-xl-3 gap-2">
                        <img width="72" height="72" src="/assets/img/banner/alex.png" alt="img"
                           className="rounded-circle" />
                        <div>
                           <p className="italic mb-2 black-clr">Their ML model reduced our customer churn by 27% in 3
                              months — incredible results.</p>
                           <span className="black-clr">— Samantha R., Head of Product, FinCore AI</span>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-7">
                     <Swiper {...setting} modules={[Autoplay]} className="sponsor-wrapper swiper">
                        {brands.map((brand, i) => (
                           <SwiperSlide key={i} className="swiper-slide">
                              <div className="sponsor-item">
                                 <img src={brand} alt="img" />
                              </div>
                           </SwiperSlide>
                        ))}
                     </Swiper>
                  </div>
               </div>
            </div>
            <img src="/assets/img/banner/hero-shadow.png" alt="img" className="hero-shadow" />
         </div>
      </div>
   )
}

export default Banner
