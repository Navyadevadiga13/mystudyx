// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Navigation } from 'swiper/modules';
// import { JSX } from 'react';

// interface DataType {
//    id: number;
//    desc: JSX.Element
//    name: string;
//    designation: string;
// }

// const testi_data: DataType[] = [
//    {
//       id: 1,
//       desc: (<>Before working with this team, I felt lost. Now I feel confident in my financial roadmap and I’m finally saving consistently I didn’t know where to start with my finances. They made everything simple and actionable saving consistently</>),
//       name: "Daniel K.",
//       designation: "Senior Executive",
//    },
//    {
//       id: 2,
//       desc: (<>Before working with this team, I felt lost. Now I feel confident in my financial roadmap and I’m finally saving consistently I didn’t know where to start with my finances. They made everything simple and actionable saving consistently</>),
//       name: "Daniel K.",
//       designation: "Senior Executive",
//    },
// ];

// const setting = {
//    spaceBetween: 30,
//    speed: 1500,
//    loop: true,
//    autoplay: {
//       delay: 1000,
//       disableOnInteraction: false,
//    },
//    breakpoints: {
//       1399: {
//          slidesPerView: 1,
//       },
//       1199: {
//          slidesPerView: 1,
//       },
//       991: {
//          slidesPerView: 1,
//       },
//       767: {
//          slidesPerView: 1,
//       },
//       575: {
//          slidesPerView: 1,
//       },
//       400: {
//          slidesPerView: 1,
//       },
//    },
//    navigation: {
//       nextEl: ".array-prev",
//       prevEl: ".array-next",
//    },
// };

// const Testimonial = () => {
//    return (
//       <section className="testimonial-section2 fix pb-100 pt-100">
//          <div className="container">
//             <div className="row g-xl-5 g-4">
//                <div className="col-lg-4 col-md-6">
//                   <div className="section-header">
//                      <span
//                         className="text-uppercase letter-1 theme-clr4 theme4-border rounded-5 fw-600 d-inline-block py-0 mb-3 px-3">Testimonials</span>
//                      <h2 className="theme-clr4 fw-800 mb-lg-4 mb-sm-3 mb-2 fw-bold wow fadeInUp" data-wow-delay=".3s">
//                         Life-Changing Journeys,
//                         <span className="fw-300">Told by Our Students</span>
//                      </h2>
//                      <img src="/assets/img/testimonial/quote2.png" alt="img" />
//                   </div>
//                </div>
//                <div className="col-lg-3 col-md-6">
//                   <div className="thumb w-100 rounded-4 overflow-hidden img-custom-anim-right">
//                      <img src="/assets/img/testimonial/testimonial-big1.png" alt="img" className="rounded-4 w-100" />
//                   </div>
//                </div>
//                <div className="col-lg-5 position-relative">
//                   <Swiper {...setting} modules={[Autoplay, Navigation]} className="swiper testimonial-slider1">
//                      {testi_data.map((item) => (
//                         <SwiperSlide key={item.id} className="swiper-slide">
//                            <div className="testimonial-content2 position-relative">
//                               <h4 className="italic fw-400 mb-40">{item.desc}</h4>
//                               <div>
//                                  <h4 className="mb-1 black-clr">{item.name}</h4>
//                                  <span className="black-clr">{item.designation}</span>
//                               </div>
//                            </div>
//                         </SwiperSlide>
//                      ))}
//                   </Swiper>
//                   <div className="array-button d-flex align-items-center gap-3 mt-4 position-absolute">
//                      <button type="button" className="array-prev p-2 rounded-circle w-45 h-45 d-center hover-svg">
//                         <svg width="28" height="18" viewBox="0 0 28 18" fill="none"
//                            xmlns="http://www.w3.org/2000/svg">
//                            <path
//                               d="M27.3337 10.3334L27.3338 7.66685H5.77123L11.0375 2.40051L9.15191 0.514893L0.666626 9.00019L9.15191 17.4855L11.0375 15.5998L5.77116 10.3335L27.3337 10.3334Z"
//                               fill="#1C4B42" fillOpacity="0.5" />
//                         </svg>
//                      </button>
//                      <button type="button" className="array-next p-2 rounded-circle w-45 h-45 d-center hover-svg">
//                         <svg width="28" height="18" viewBox="0 0 28 18" fill="none"
//                            xmlns="http://www.w3.org/2000/svg">
//                            <path
//                               d="M0.666324 10.3334L0.666138 7.66685H22.2287L16.9624 2.40051L18.848 0.514893L27.3333 9.00019L18.848 17.4855L16.9624 15.5998L22.2288 10.3335L0.666324 10.3334Z"
//                               fill="#1C4B42" />
//                         </svg>
//                      </button>
//                   </div>
//                </div>
//             </div>
//          </div>
//       </section>
//    )
// }

// export default Testimonial

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

interface DataType {
  id: number;
  videoId: string;
  name: string;
  designation: string;
}

const testi_data: DataType[] = [
  { id: 1, videoId: "h2L5yOVbagM", name: "Daniel K.", designation: "Senior Executive" },
  { id: 2, videoId: "gkZztDIkFtM", name: "Daniel K.", designation: "Senior Executive" },
  { id: 3, videoId: "jsmziVSa1yA", name: "Daniel K.", designation: "Senior Executive" },
];

const setting = {
  spaceBetween: 30,
  speed: 1500,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    400: { slidesPerView: 1 },
    575: { slidesPerView: 1 },
    767: { slidesPerView: 1 },
    991: { slidesPerView: 1 },
    1199: { slidesPerView: 1 },
    1399: { slidesPerView: 1 },
  },
  navigation: {
    nextEl: ".array-next",
    prevEl: ".array-prev",
  },
};

const Testimonial = () => {
  return (
    <section className="testimonial-section2 fix pb-100 pt-100">
      <div className="container">
        <div className="row g-xl-5 g-4">
          <div className="col-lg-4 col-md-6">
            <div className="section-header">
              <span className="text-uppercase letter-1 theme-clr4 theme4-border rounded-5 fw-600 d-inline-block py-0 mb-3 px-3">
                Testimonials
              </span>
              <h2
                className="theme-clr4 fw-800 mb-lg-4 mb-sm-3 mb-2 fw-bold wow fadeInUp"
                data-wow-delay=".3s"
              >
                Life-Changing Journeys,
                <span className="fw-300"> Told by Our Students</span>
              </h2>
              <img src="/assets/img/testimonial/quote2.png" alt="quote icon" />
            </div>
          </div>

          <div className="col-lg-3 col-md-5 d-flex justify-content-center">
            <div
              className="thumb rounded-4 overflow-hidden img-custom-anim-right"
              style={{ maxWidth: "240px", width: "100%" }}
            >
              <img
                src="/assets/img/testimonial/testimonial-big1.png"
                alt="student portrait"
                className="rounded-4 w-100"
              />
            </div>
          </div>

          <div className="col-lg-5 position-relative">
            <Swiper
              {...setting}
              modules={[Autoplay, Navigation]}
              className="swiper testimonial-slider1"
            >
              {testi_data.map((item) => (
                <SwiperSlide key={item.id} className="swiper-slide">
                  <div
                    className="testimonial-content2 position-relative"
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      window.open(`https://www.youtube.com/watch?v=${item.videoId}`, "_blank")
                    }
                  >
                    <img
                      src={`https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`}
                      alt={`${item.name} testimonial video`}
                      className="rounded-4 w-100"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="array-button d-flex align-items-center gap-3 mt-4 position-absolute">
              <button
                type="button"
                className="array-prev p-2 rounded-circle w-45 h-45 d-center hover-svg"
              >
                <svg
                  width="28"
                  height="18"
                  viewBox="0 0 28 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.3337 10.3334L27.3338 7.66685H5.77123L11.0375 2.40051L9.15191 0.514893L0.666626 9.00019L9.15191 17.4855L11.0375 15.5998L5.77116 10.3335L27.3337 10.3334Z"
                    fill="#1C4B42"
                    fillOpacity="0.5"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="array-next p-2 rounded-circle w-45 h-45 d-center hover-svg"
              >
                <svg
                  width="28"
                  height="18"
                  viewBox="0 0 28 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.666324 10.3334L0.666138 7.66685H22.2287L16.9624 2.40051L18.848 0.514893L27.3333 9.00019L18.848 17.4855L16.9624 15.5998L22.2288 10.3335L0.666324 10.3334Z"
                    fill="#1C4B42"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

