import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

interface DataType {
   id: number;
   date: string;
   title: string;
   desc: string;
}

const solution_data: DataType[] = [
   {
      id: 1,
      date: "Since 1999",
      title: "The Vision Begins",
      desc: "We laid our foundation with a strong commitment to empowering clients with strategic financial insights.",
   },
   {
      id: 2,
      date: "2000 - 2008",
      title: "Laying Strong Foundations",
      desc: "Expanded our team and portfolio, working with a range of SMBs and scaling new industry partnerships.",
   },
   {
      id: 3,
      date: "2009 - 2012",
      title: "Recognized for Excellence",
      desc: "Recognized for innovation in client strategy and awarded by key industry bodies for excellence.",
   },
   {
      id: 4,
      date: "2013 - 2016",
      title: "Expanding Our Global Reach",
      desc: "Opened new offices, launched digital initiatives, and grew to serve enterprise clients globally.",
   },
   {
      id: 5,
      date: "2000 - 2008",
      title: "Laying Strong Foundations",
      desc: "Expanded our team and portfolio, working with a range of SMBs and scaling new industry partnerships.",
   },
];

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
         spaceBetween: 20,
      },
      767: {
         slidesPerView: 3,
         spaceBetween: 16,
      },
      500: {
         slidesPerView: 2,
         spaceBetween: 14,
      },
      0: {
         slidesPerView: 1,
         spaceBetween: 12,
      },
   },
   navigation: {
      nextEl: ".array-prev",
      prevEl: ".array-next",
   },
};

const Solution = () => {
   return (
      <section className="step-solution section-bg pt-100 fix">
         <div className="container cstom-container">
            <div className="step-thumb-big rounded-4">
               <img src="/assets/img/about/step-thumb.png" alt="img" className="w-100 rounded-4" />
            </div>
            <div className="step-wrapper-inner overflow-hidden rounded-4 pt-100 pb-100">
               <div className="container">
                  <Swiper {...setting} modules={[Autoplay, Navigation]} className="swiper step-wrapper-slide">
                     {solution_data.map((item) => (
                        <SwiperSlide key={item.id} className="swiper-slide">
                           <div className="step-items h-100">
                              <div className="text-center">
                                 <span className="step-date text-center d-inline-block mb-4">{item.date}</span>
                              </div>
                              <span className="step-dot d-block mb-4"></span>
                              <div className="box h-100">
                                 <h5 className="text-white mb-xl-3 mb-3">{item.title}</h5>
                                 <p className="text-white opacity-75">
                                    {item.desc}
                                 </p>
                              </div>
                           </div>
                        </SwiperSlide>
                     ))}
                     <div className="array-button d-flex justify-content-between z-3 position-absolute start-0 w-100 align-items-center gap-3 mt-4" style={{ top: "18px" }}>
                        <button type="button" className="array-prev p-2 rounded-circle w-45 h-45 d-center bg-white hover-translate8">
                           <i className="fa-solid fa-arrow-left"></i>
                        </button>
                        <button type="button" className="array-next p-2 rounded-circle w-45 h-45 d-center bg-white hover-translate8">
                           <i className="fa-solid fa-arrow-right"></i>
                        </button>
                     </div>
                  </Swiper>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Solution
