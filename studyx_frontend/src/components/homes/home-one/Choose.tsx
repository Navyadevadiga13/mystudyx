interface DataType {
   id: number;
   title: string;
   desc: string;
}

const choose_data: DataType[] = [
   {
      id: 1,
      title: "Expert Knowledge",
      desc: "10+ years in financial planning & strategy"
   },
   {
      id: 2,
      title: "Data-Driven Policies",
      desc: "We use analytics to guide every decision"
   },
   {
      id: 3,
      title: "Proven Track Record",
      desc: "Hundreds of clients across the industries"
   },
   {
      id: 4,
      title: "Responsive Support",
      desc: "Quick and honest communication always"
   },
];

const Choose = () => {
   return (
      <section className="choose-section d-center z-1 position-relative section-bg">
         <div className="choose-wrapper-section">
            <img src="/assets/img/service/choose-bg.png" alt="img" />
         </div>
         <div className="container">
            <div className="row g-4">
               <div className="col-lg-6 pt-lg-5 mt-5">
                  <p className="mb-lg-4 mb-4 pb-lg-1">
                     Designed to meet your unique financial needs no matter where you are on your journey designed to
                     meet your unique
                     financial needs no matter where <br /> you are on your journey.
                  </p>
                  <div className="choose-content-wrap d-flex flex-column gap-xxl-4 gap-lg-3 gap-2">
                     {choose_data.map((item) => (
                        <div key={item.id} className="choose-items border rounded-3 d-flex align-items-center gap-xxl-4 gap-md-3 gap-2 wow fadeInUp"
                           data-wow-delay=".2s">
                           <img src="/assets/img/service/choose-icon1.png" alt="img" />
                           <div>
                              <h4 className="theme-clr4 mb-2">{item.title}</h4>
                              <p className="theme-clr4">{item.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="choose-thumb-wrap">
                     <div className="boxes">
                        <div className="section-header mb-4">
                           <div className="d-flex align-items-center gap-2 theme-clr fw-600 mb-2">
                              <img src="/assets/img/icon/section-step1.png" alt="img" /> Why Choose Us
                           </div>
                           <h2 className="theme-clr4 fw-bold wow fadeInUp" data-wow-delay=".4s">
                              Make the Smartest Move
                              <span className="fw-300">for Your Financial Future!</span>
                           </h2>
                        </div>
                        <div className="thumb rounded-3 position-relative w-100 " >
                           <img src="/assets/img/service/why-choose.png" alt="img" className="w-100 rounded-3" />
                           <div className="text-circles">
                              <img src="/assets/img/service/text-circle.png" alt="img" className="circle360" />
                              <img src="/assets/img/service/txt-tumb.png" alt="img"
                                 className="shapee position-absolute top-50 start-50" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section >
   )
}

export default Choose
