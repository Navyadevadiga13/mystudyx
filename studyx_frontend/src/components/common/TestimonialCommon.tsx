import { JSX } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

interface DataType {
   id: number;
   desc: JSX.Element;
   img: string;
   name: string;
   designation: string;
}

const testi_data: DataType[] = [
   {
      id: 1,
      desc: (<>This tool has completely changed how we manage projects! Everything is streamlined</>),
      img: "/assets/img/testimonial/joned.png",
      name: "Jane D.",
      designation: "Project Manager",
   },
   {
      id: 2,
      desc: (<>This tool has completely changed how we manage projects! Everything is streamlined</>),
      img: "/assets/img/testimonial/markr.png",
      name: "Mark R",
      designation: "CEO of Featured",
   },
   {
      id: 3,
      desc: (<>This tool has completely changed how we manage projects! Everything is streamlined</>),
      img: "/assets/img/testimonial/joned.png",
      name: "Jane D.",
      designation: "Project Manager",
   },
   {
      id: 4,
      desc: (<>This tool has completely changed how we manage projects! Everything is streamlined</>),
      img: "/assets/img/testimonial/markr.png",
      name: "Mark R",
      designation: "CEO of Featured",
   },
];

const setting = {
   speed: 1500,
   loop: true,
   breakpoints: {
      1199: {
         slidesPerView: 3,
      },
      767: {
         slidesPerView: 2,
      },
      600: {
         slidesPerView: 2,
      },
      0: {
         slidesPerView: 1,
      },
   },
};

const TestimonialCommon = () => {
   return (

      <Swiper {...setting} className="swiper testimonial-Wrapper3">
         {testi_data.map((item) => (
            <SwiperSlide key={item.id} className="swiper-slide">
               <div className="testimonial-items3 h-100">
                  <p className="mb-lg-4 mb-3">{item.desc}</p>
                  <div className="ratting mb-4 border-bottom d-flex align-items-center gap-1">
                     <i className="fa-solid fa-star"></i>
                     <i className="fa-solid fa-star"></i>
                     <i className="fa-solid fa-star"></i>
                     <i className="fa-solid fa-star"></i>
                     <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                     <div className="d-flex align-items-center gap-3">
                        <img src={item.img} alt="img" className="rounded-circle" />
                        <div>
                           <h6 className="mb-1 black-clr">{item.name}</h6>
                           <span className="d-block black-clr fz-14">{item.designation}</span>
                        </div>
                     </div>
                     <img src="/assets/img/testimonial/quote3.png" alt="img" className="quote3" />
                  </div>
               </div>
            </SwiperSlide>
         ))}
      </Swiper>
   )
}

export default TestimonialCommon
