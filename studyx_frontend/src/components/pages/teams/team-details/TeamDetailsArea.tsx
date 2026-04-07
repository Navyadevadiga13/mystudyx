import { JSX } from "react";
import { Link } from "react-router-dom";

interface DataType {
   id: number;
   icon: JSX.Element
   title: string;
   desc: string;
}

const work_data: DataType[] = [
   {
      id: 1,
      icon: (<><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
         xmlns="http://www.w3.org/2000/svg">
         <path
            d="M13.0049 16.9408V19.0026H18.0049V21.0026H6.00488V19.0026H11.0049V16.9408C7.05857 16.4487 4.00488 13.0823 4.00488 9.00269V3.00269H20.0049V9.00269C20.0049 13.0823 16.9512 16.4487 13.0049 16.9408ZM1.00488 5.00269H3.00488V9.00269H1.00488V5.00269ZM21.0049 5.00269H23.0049V9.00269H21.0049V5.00269Z"
            fill="#1C4B42" />
      </svg></>),
      title: "Certified Expert Coaching",
      desc: "Work with a professionally certified coach committed to your personal growth success"
   },
   {
      id: 2,
      icon: (<><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
         xmlns="http://www.w3.org/2000/svg">
         <path
            d="M3.78307 2.82598L12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598ZM12 13.5L14.9389 15.0451L14.3776 11.7725L16.7553 9.45492L13.4695 8.97746L12 6L10.5305 8.97746L7.24472 9.45492L9.62236 11.7725L9.06107 15.0451L12 13.5Z"
            fill="#1C4B42" />
      </svg></>),
      title: "Proven Success Stories",
      desc: "Join hundreds who have unlocked their potential, transformed their lives",
   },
   {
      id: 3,
      icon: (<><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
         xmlns="http://www.w3.org/2000/svg">
         <path
            d="M19 13C20.0929 13 21.1175 13.2922 22 13.8027V6C22 5.44772 21.5523 5 21 5H12.4142L10.4142 3H3C2.44772 3 2 3.44772 2 4V20C2 20.5523 2.44772 21 3 21H13.3414C13.1203 20.3744 13 19.7013 13 19C13 15.6863 15.6863 13 19 13ZM15.4645 18.4647L19 22.0002L23.9497 17.0505L22.5355 15.6362L19 19.1718L16.8787 17.0505L15.4645 18.4647Z"
            fill="#1C4B42" />
      </svg></>),
      title: "Customized Action Plans",
      desc: "Get coaching tailored to your unique goals — with clear steps to move you forward with confidence"
   },
   {
      id: 4,
      icon: (<><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
         xmlns="http://www.w3.org/2000/svg">
         <path
            d="M19.2914 5.99994H20.0002C20.5525 5.99994 21.0002 6.44766 21.0002 6.99994V13.9999C21.0002 14.5522 20.5525 14.9999 20.0002 14.9999H18.0002L13.8319 9.16427C13.3345 8.46797 12.4493 8.16522 11.6297 8.41109L9.14444 9.15668C8.43971 9.3681 7.6758 9.17551 7.15553 8.65524L6.86277 8.36247C6.41655 7.91626 6.49011 7.17336 7.01517 6.82332L12.4162 3.22262C13.0752 2.78333 13.9312 2.77422 14.5994 3.1994L18.7546 5.8436C18.915 5.94571 19.1013 5.99994 19.2914 5.99994ZM5.02708 14.2947L3.41132 15.7085C2.93991 16.1209 2.95945 16.8603 3.45201 17.2474L8.59277 21.2865C9.07284 21.6637 9.77592 21.5264 10.0788 20.9963L10.7827 19.7645C11.2127 19.012 11.1091 18.0682 10.5261 17.4269L7.82397 14.4545C7.09091 13.6481 5.84722 13.5771 5.02708 14.2947ZM7.04557 5H3C2.44772 5 2 5.44772 2 6V13.5158C2 13.9242 2.12475 14.3173 2.35019 14.6464C2.3741 14.6238 2.39856 14.6015 2.42357 14.5796L4.03933 13.1658C5.47457 11.91 7.65103 12.0343 8.93388 13.4455L11.6361 16.4179C12.6563 17.5401 12.8376 19.1918 12.0851 20.5087L11.4308 21.6538C11.9937 21.8671 12.635 21.819 13.169 21.4986L17.5782 18.8531C18.0786 18.5528 18.2166 17.8896 17.8776 17.4146L12.6109 10.0361C12.4865 9.86205 12.2652 9.78636 12.0603 9.84783L9.57505 10.5934C8.34176 10.9634 7.00492 10.6264 6.09446 9.7159L5.80169 9.42313C4.68615 8.30759 4.87005 6.45035 6.18271 5.57524L7.04557 5Z"
            fill="#1C4B42" />
      </svg></>),
      title: "Supportive, Judgment-Free Space",
      desc: "Get coaching tailored to your unique goals — with clear steps to move you forward",
   },
];

const TeamDetailsArea = () => {
   return (
      <section className="team-details-section section-bg pt-100 pb-100">
         <div className="container">
            <div className="row g-lg-4 g-md-3 g-2 mb-40">
               <div className="col-lg-5 col-md-5">
                  <div className="team-details-thumb-wrap me-md-5">
                     <div className="thumb rounded-4 mb-xxl-4 mb-3 w-100 wow fadeInRight" data-wow-delay=".4s">
                        <img src="/assets/img/team/team-details-thumb.png" alt="img" className="w-100" />
                     </div>
                     <ul className="d-flex flex-column gap-2 border-bottom pb-lg-4 pb-3 mb-lg-4 mb-3">
                        <li className="d-flex align-items-center gap-2 fw-bold theme-clr4">
                           <span className="w-32 h-32 rounded-circle d-center theme-bg">
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path
                                    d="M14 10.9467V13.3041C14 13.6541 13.7294 13.9445 13.3803 13.9691C13.0887 13.9897 12.8509 14 12.6667 14C6.7756 14 2 9.2244 2 3.33333C2 3.14914 2.0103 2.91125 2.0309 2.61967C2.05558 2.27059 2.34596 2 2.69591 2H5.0534C5.22452 2 5.36784 2.12961 5.38502 2.29987C5.40045 2.45271 5.41479 2.57543 5.42805 2.66801C5.5629 3.60981 5.83835 4.50624 6.23247 5.33535C6.29573 5.46843 6.25447 5.62773 6.13457 5.71337L4.6957 6.7412C5.57168 8.7874 7.2126 10.4283 9.2588 11.3043L10.2847 9.86793C10.3715 9.7466 10.5327 9.70487 10.6673 9.7688C11.4964 10.1626 12.3927 10.4377 13.3344 10.5723C13.4264 10.5855 13.5483 10.5997 13.7001 10.615C13.8704 10.6322 14 10.7755 14 10.9467Z"
                                    fill="#1C4B42" />
                              </svg>
                           </span>
                           +880-123-4567
                        </li>
                        <li className="d-flex align-items-center gap-2 fw-bold theme-clr4">
                           <span className="w-32 h-32 rounded-circle d-center theme-bg">
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path
                                    d="M1.49489 4.56945L7.65934 0.872286C7.87047 0.745653 8.13427 0.7457 8.34534 0.872406L14.5045 4.56944C14.6049 4.62969 14.6663 4.73817 14.6663 4.85524V13.3332C14.6663 13.7014 14.3679 13.9999 13.9997 13.9999H1.99967C1.63149 13.9999 1.33301 13.7014 1.33301 13.3332V4.85532C1.33301 4.73821 1.39446 4.62969 1.49489 4.56945ZM12.2301 5.49577L8.04007 9.12182L3.76449 5.49168L2.90153 6.50809L8.04841 10.878L13.1026 6.50399L12.2301 5.49577Z"
                                    fill="#1C4B42" />
                              </svg>
                           </span>
                           demo@mail.com
                        </li>
                        <li className="d-flex align-items-center gap-2 fw-bold theme-clr4">
                           <span className="w-32 h-32 rounded-circle d-center theme-bg">
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path
                                    d="M12.2427 11.576L8 15.8186L3.75736 11.576C1.41421 9.23284 1.41421 5.43388 3.75736 3.09073C6.10051 0.747587 9.89947 0.747587 12.2427 3.09073C14.5858 5.43388 14.5858 9.23284 12.2427 11.576ZM8 10C9.47273 10 10.6667 8.80611 10.6667 7.33337C10.6667 5.86061 9.47273 4.66671 8 4.66671C6.52724 4.66671 5.33333 5.86061 5.33333 7.33337C5.33333 8.80611 6.52724 10 8 10ZM8 8.66671C7.2636 8.66671 6.66667 8.06977 6.66667 7.33337C6.66667 6.59699 7.2636 6.00004 8 6.00004C8.7364 6.00004 9.33333 6.59699 9.33333 7.33337C9.33333 8.06977 8.7364 8.66671 8 8.66671Z"
                                    fill="#1C4B42" />
                              </svg>
                           </span>
                           150 King Street West, Suite 200, Toronto, ON M5H 1J9
                        </li>
                     </ul>
                     <div className="d-flex align-items-center gap-md-3 gap-2 flex-wrap">
                        <Link to="/team-details" className="theme-btn style1 pe-20">
                           <i className="fa-solid fa-arrow-right w-36 h-36 bg-white rounded-circle d-center fz-14 theme-clr4"></i>
                           Contact with James carter
                        </Link>
                        <Link to="/team-details" className="d-center w-48 h-48 rounded-circle border">
                           <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                 d="M13.8357 17.4936L8.72553 14.7062C8.09289 15.3342 7.22164 15.7222 6.25977 15.7222C4.32677 15.7222 2.75977 14.1552 2.75977 12.2222C2.75977 10.2892 4.32677 8.72217 6.25977 8.72217C7.22158 8.72217 8.09278 9.11013 8.72541 9.7381L13.8357 6.95072C13.786 6.71571 13.7598 6.472 13.7598 6.22217C13.7598 4.28917 15.3268 2.72217 17.2598 2.72217C19.1928 2.72217 20.7598 4.28917 20.7598 6.22217C20.7598 8.15517 19.1928 9.72217 17.2598 9.72217C16.2979 9.72217 15.4267 9.33418 14.7941 8.70616L9.68381 11.4935C9.73359 11.7286 9.75977 11.9723 9.75977 12.2222C9.75977 12.472 9.7336 12.7157 9.68385 12.9507L14.7941 15.7382C15.4268 15.1102 16.298 14.7222 17.2598 14.7222C19.1928 14.7222 20.7598 16.2892 20.7598 18.2222C20.7598 20.1552 19.1928 21.7222 17.2598 21.7222C15.3268 21.7222 13.7598 20.1552 13.7598 18.2222C13.7598 17.9724 13.786 17.7286 13.8357 17.4936Z"
                                 fill="#1C4B42" />
                           </svg>
                        </Link>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6 col-md-7">
                  <div className="wow fadeInUp" data-wow-delay=".4s">
                     <h3 className="theme-clr4 mb-xl-3 mb-sm-2 mb-1">About james carter</h3>
                     <p className="theme-clr4 mb-lg-3 mb-2 wow fadeInDown" data-wow-delay=".2s">
                        With over 10 years of experience in life coaching, james carter specializes in Senior Financial Strategist. Their unique
                        approach combines empathy, actionable strategies, and proven methodologies to guide clients through their personal
                        transformation journey.
                     </p>
                     <p className="theme-clr4 mb-lg-4 mb-3 wow fadeInDown" data-wow-delay=".4s">
                        Having worked with clients from diverse backgrounds, james carter has a deep understanding of the challenges people face
                        and is committed to providing personalized support to help individuals achieve lasting success. Whether you’re looking
                        toSenior Financial Strategist, james is here to help.
                     </p>
                     <h4 className="theme-clr4 mb-lg-3 mb-sm-2 mb-1 wow fadeInDown" data-wow-delay=".5s">
                        james carter’s Coaching Approach
                     </h4>
                     <p className="theme-clr4 mb-lg-4 mb-3 wow fadeInDown" data-wow-delay=".6s">
                        James believes that true transformation happens when individuals are empowered to take control of their own lives. They
                        use a holistic approach that blends practical tools with deep emotional insight, ensuring that every client receives a
                        customized plan that aligns with their unique goals.
                     </p>
                     <h5 className="theme-clr4 mb-xl-3 mb-2">Key Areas of Focus</h5>
                     <ul className="d-grid gap-1 mb-xxl-5 mb-lg-4 mb-3">
                        <li className="d-flex align-items-center gap-2 theme-clr4">
                           <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                 d="M0.682617 9.80076C3.46973 12.8164 6.17207 15.5312 8.76973 18.9648C11.5939 13.3476 14.4846 7.71091 19.2541 1.60662L17.9689 1.01794C13.9416 5.28904 10.8127 9.33201 8.09394 14.1367C6.20332 12.4336 3.14785 10.0234 1.28223 8.78513L0.682617 9.80076Z"
                                 fill="#92C201" />
                           </svg>
                           Empathy & Active Listening
                        </li>
                        <li className="d-flex align-items-center gap-2 theme-clr4">
                           <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                 d="M0.682617 9.80076C3.46973 12.8164 6.17207 15.5312 8.76973 18.9648C11.5939 13.3476 14.4846 7.71091 19.2541 1.60662L17.9689 1.01794C13.9416 5.28904 10.8127 9.33201 8.09394 14.1367C6.20332 12.4336 3.14785 10.0234 1.28223 8.78513L0.682617 9.80076Z"
                                 fill="#92C201" />
                           </svg>
                           Goal Setting & Action Plans
                        </li>
                        <li className="d-flex align-items-center gap-2 theme-clr4">
                           <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                 d="M0.682617 9.80076C3.46973 12.8164 6.17207 15.5312 8.76973 18.9648C11.5939 13.3476 14.4846 7.71091 19.2541 1.60662L17.9689 1.01794C13.9416 5.28904 10.8127 9.33201 8.09394 14.1367C6.20332 12.4336 3.14785 10.0234 1.28223 8.78513L0.682617 9.80076Z"
                                 fill="#92C201" />
                           </svg>
                           Mindset Shifts
                        </li>
                     </ul>
                     <h4 className="theme-clr4 mb-xl-3 mb-sm-2 mb-1">Specialization</h4>
                     <p className="theme-clr4 mb-xl-4 mb-3">
                        James has developed deep expertise in the following areas, helping clients in these niches achieve remarkable success
                     </p>
                     <div className="work-wrapper d-flex flex-column" style={{ maxWidth: "100%" }}>
                        {work_data.map((item) => (
                           <div key={item.id} className="work-list-item rounded-3 bg-white d-flex gap-xl-4 gap-3 wow fadeInUp" data-wow-delay=".2s">
                              <div className="icon absolute-theme-bg rounded-circle d-center">
                                 {item.icon}
                              </div>
                              <div>
                                 <h4 className="mb-2">
                                    <Link to="/team-details" className="theme-clr4 fw-600">{item.title}</Link>
                                 </h4>
                                 <p className="black-clr">{item.desc}</p>
                              </div>
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

export default TeamDetailsArea
