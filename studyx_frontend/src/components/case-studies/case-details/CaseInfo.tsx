import { JSX } from "react";

interface DataType {
   id: number;
   title: JSX.Element;
   desc: string;
   list_title: string;
   list: string[];
}

const info_data: DataType[] = [
   {
      id: 1,
      title: (<>Facing Stagnation: <small className="fw-500">The Roadblocks to Career Growth</small></>),
      desc: "At the time, Jane felt as though she had reached a career plateau. She was in a job that no longer inspired her and lacked the confidence to explore new opportunities. Jane struggled with a fear of failure, believing that a career change might risk her financial stability. Her biggest challenge was finding the courage to step out of her comfort zone and pursue something that truly excited her.",
      list_title: "Key Challenges",
      list: ["Lack of Direction", "Fear of Change", "Low Confidence",]
   },
   {
      id: 2,
      title: (<>Our Approach: <small className="fw-500">Redefining Jane’s Career Path</small></>),
      desc: "At the time, Jane felt as though she had reached a career plateau. She We began Jane’s coaching journey by focusing on self-discovery. We used various coaching tools to help Jane explore her strengths, values, and passions. Together, we worked through her limiting beliefs and replaced them with a growth mindset. The coaching sessions focused on building Jane’s confidence and clarity about what she truly wanted in her career. We also created a step-by-step action plan to help her take practical steps toward her goals.",
      list_title: "Coaching Steps",
      list: ["Self-Discovery", "Confidence Building", "Goal Clarification", "Action Plan Creation"]
   },
   {
      id: 3,
      title: (<>The Outcome: <small className="fw-500">A Fulfilling Career and Renewed Confidence</small></>),
      desc: "Within six months of starting our coaching sessions, Jane had successfully transitioned into a role that was aligned with her values and passions. Not only did she experience an increase in confidence, but she also found a renewed sense of purpose and satisfaction in her work. Jane took bold steps, such as updating her resume, networking with industry professionals, and applying for roles that matched her true interests. Today, Jane is leading a dynamic team at a startup, feeling more confident and fulfilled than ever before.",
      list_title: "Coaching Steps",
      list: ["Career Transition", "Career Transition", "Confidence Boost",]
   },
];


const CaseInfo = () => {
   return (
      <section className="facing-content-section fix">
         <div className="choose-partner-section pt-100 pb-100">
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-lg-9">
                     <div className="d-flex flex-column gap-xl-4 gap-lg-3 gap-md-2 gap-1">
                        {info_data.map((item) => (
                           <div key={item.id}>
                              <h3 className="theme-clr4 mb-lg-3 mb-2 wow fadeInUp" data-wow-delay=".2s">{item.title}</h3>
                              <p className="theme-clr4 mb-xl-4 mb-3 pb-xl-1 wow fadeInUp" data-wow-delay=".2s">{item.desc}</p>
                              <h4 className="theme-clr4 mb-lg-2 mb-2 wow fadeInUp" data-wow-delay=".4s">{item.list_title}</h4>
                              <ul className="d-grid gap-0 mb-xxl-5 mb-lg-4 mb-3 wow fadeInUp" data-wow-delay=".6s">
                                 {item.list.map((list, i) => (
                                    <li key={i} className="d-flex align-items-center gap-2 theme-clr4">
                                       <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path
                                             d="M0.682617 9.80076C3.46973 12.8164 6.17207 15.5312 8.76973 18.9648C11.5939 13.3476 14.4846 7.71091 19.2541 1.60662L17.9689 1.01794C13.9416 5.28904 10.8127 9.33201 8.09394 14.1367C6.20332 12.4336 3.14785 10.0234 1.28223 8.78513L0.682617 9.80076Z"
                                             fill="#92C201" />
                                       </svg>
                                       {list}
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default CaseInfo
