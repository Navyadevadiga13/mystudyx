import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { JSX } from 'react';

interface DataType {
   id: number;
   desc: JSX.Element
   name: string;
   designation: string;
}

const testi_data: DataType[] = [
   {
      id: 1,
      desc: (<>Before working with this team, I felt lost. Now I feel confident in my financial roadmap and I’m finally saving consistently I didn’t know where to start with my finances. They made everything simple and actionable saving consistently</>),
      name: "Daniel K.",
      designation: "Senior Executive",
   },
   {
      id: 2,
      desc: (<>Before working with this team, I felt lost. Now I feel confident in my financial roadmap and I’m finally saving consistently I didn’t know where to start with my finances. They made everything simple and actionable saving consistently</>),
      name: "Daniel K.",
      designation: "Senior Executive",
   },
];

const setting = {
   spaceBetween: 30,
   speed: 1500,
   loop: true,
   autoplay: {
      delay: 1000,
      disableOnInteraction: false,
   },
   breakpoints: {
      1399: {
         slidesPerView: 1,
      },
      1199: {
         slidesPerView: 1,
      },
      991: {
         slidesPerView: 1,
      },
      767: {
         slidesPerView: 1,
      },
      575: {
         slidesPerView: 1,
      },
      400: {
         slidesPerView: 1,
      },
   },
   navigation: {
      nextEl: ".array-prev",
      prevEl: ".array-next",
   },
};

const Testimonial = () => {
   return (
      <section className="testimonial-section pb-100 section-bg">
         <div className="testimonial-wrap pt-100">
            <div className="container">
               <div className="row g-lg-5 g-4">
                  <div className="col-lg-4 col-md-5">
                     <div className="thumb w-100 rounded-4 overflow-hidden img-custom-anim-right">
                        <img src="/assets/img/testimonial/testimonail-thumb1.png" alt="img" className="rounded-4 w-100" />
                     </div>
                  </div>
                  <div className="col-lg-8 col-md-7">
                     <Swiper {...setting} modules={[Autoplay, Navigation]} className="swiper testimonial-slider1">
                        {testi_data.map((item) => (
                           <SwiperSlide key={item.id} className="swiper-slide">
                              <div className="testimonial-content">
                                 <img src="/assets/img/testimonial/quote-arrow.png" alt="img"
                                    className="mb-md-4 mb-3 pb-md-2" />
                                 <h3 className="italic text-white mb-lg-5 mb-4">{item.desc}</h3>
                                 <div>
                                    <h4 className="mb-1 text-white">{item.name}</h4>
                                    <span className="text-white">{item.designation}</span>
                                 </div>
                              </div>
                           </SwiperSlide>
                        ))}
                     </Swiper>
                     <div className="d-flex align-items-center gap-3 collapse-area">
                        <img src="/assets/img/testimonial/testimi-collapse.png" alt="img" />
                        <div className="array-button d-flex align-items-center gap-3 mt-4">
                           <button type="button"
                              className="array-prev p-2 rounded-circle w-45 h-45 d-center hover-svg">
                              <svg width="28" height="18" viewBox="0 0 28 18" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                 <path
                                    d="M27.3337 10.3334L27.3338 7.66685H5.77123L11.0375 2.40051L9.15191 0.514893L0.666626 9.00019L9.15191 17.4855L11.0375 15.5998L5.77116 10.3335L27.3337 10.3334Z"
                                    fill="#1C4B42" fillOpacity="0.5" />
                              </svg>
                           </button>
                           <button type="button"
                              className="array-next p-2 rounded-circle w-45 h-45 d-center hover-svg">
                              <svg width="28" height="18" viewBox="0 0 28 18" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                 <path
                                    d="M0.666324 10.3334L0.666138 7.66685H22.2287L16.9624 2.40051L18.848 0.514893L27.3333 9.00019L18.848 17.4855L16.9624 15.5998L22.2288 10.3335L0.666324 10.3334Z"
                                    fill="#1C4B42" />
                              </svg>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Testimonial
