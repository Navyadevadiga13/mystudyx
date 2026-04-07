import { Link } from "react-router-dom"
import faq_data from "../../../data/FaqData"
import { useEffect, useState } from "react";

interface DataType {
   id: number;
   page: string
   title: string;
   desc: string;
   showAnswer: boolean;
};

const Faq = () => {

   const [faqData, setFaqData] = useState<DataType[]>([]);

   useEffect(() => {
      const updatedData = faq_data.map((item) =>
         item.id === 1 ? { ...item, showAnswer: true } : { ...item, showAnswer: false }
      );
      setFaqData(updatedData);
   }, []);

   const toggleAnswer = (faqId: number) => {
      setFaqData((prevFaqData) => {
         return prevFaqData.map((faq) => {
            if (faqId === 1) {
               return faq.id === 1
                  ? { ...faq, showAnswer: !faq.showAnswer }
                  : { ...faq, showAnswer: false };
            }

            if (faq.id === faqId) {
               return { ...faq, showAnswer: !faq.showAnswer };
            }

            return { ...faq, showAnswer: false };
         });
      });
   };


   return (
      <section className="faqs-section section-bg pt-100 pb-100">
         <div className="container">
            <div className="row g-lg-4 g-md-3 g-3 align-items-end mb-40">
               <div className="col-lg-6 col-md-7">
                  <div className="section-header">
                     <div className="d-flex align-items-center gap-2 theme-clr fw-600 mb-2">
                        <img src="/assets/img/icon/section-step1.png" alt="img" /> FAQ
                     </div>
                     <h2 className="theme-clr4 fw-bold wow fadeInUp" data-wow-delay=".3s">
                        Answers to Common
                        <span className="fw-300">Questions of our Services</span>
                     </h2>
                  </div>
               </div>
               <div className="col-lg-6 col-md-5">
                  <div className="text-md-end wow fadeInUp" data-wow-delay=".4s">
                     <Link to="/faqs" className="theme-btn style1 pe-20">
                        <i
                           className="fa-solid fa-arrow-right w-36 h-36 bg-white rounded-circle d-center fz-14 theme-clr4"></i>
                        Check All Questions
                     </Link>
                  </div>
               </div>
            </div>
            <div className="row g-4">
               <div className="col-lg-7">
                  <div className="accordion accordion-style1" id="accordionExample">
                     {faqData.filter((items) => items.page === "home_1").map((item) => (
                        <div key={item.id} className="accordion-item wow fadeInUp" data-wow-delay=".2s">
                           <h2 className="accordion-header">
                              <button className={`accordion-button ${item.showAnswer ? "" : "collapsed"}`} type="button" onClick={() => toggleAnswer(item.id)} >
                                 {item.id}. {item.title}
                                 <span className="cus-icon"><i className="fa-solid fa-chevron-down"></i></span>
                              </button>
                           </h2>
                           <div id="collapseOne" className={`accordion-collapse collapse  ${item.showAnswer ? "show" : ""}`} >
                              <div className="accordion-body pt-0 pb-4">
                                 <p className="lh-md theme-clr4">
                                    {item.desc}
                                 </p>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="col-lg-5">
                  <div className="faq-content_wrap theme-bg rounded-3 wow fadeInUp" data-wow-delay=".4s">
                     <div className="d-flex gap-2 pb-100 mb-2">
                        <h3 className="theme-clr4 max-300">
                           Still have questions? Don’t worries we have answers!
                        </h3>
                        <img src="/assets/img/icon/message-icon.png" alt="img" className="w-48 h-48 ml-auto" />
                     </div>
                     <p className="fz-15 lh-md theme-clr4 mb-lg-4 mb-3">
                        We’re here to help. If you didn’t find the answer you were looking for, feel free to reach
                        out to our team. We’ll make
                        sure you get the clarity you need to move forward with confidence.
                     </p>
                     <Link to="/faqs" className="theme-btn style1 pe-20">
                        <i
                           className="fa-solid fa-arrow-right w-36 h-36 bg-white rounded-circle d-center fz-14 theme-clr4"></i>
                        Check All Questions
                     </Link>
                     <img src="/assets/img/element/faq-element.png" alt="img" className="faq-shape1" />
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Faq
