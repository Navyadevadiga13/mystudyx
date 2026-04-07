


// interface DataType {
//    id: number;
//    title: string;
//    desc: string;
//    price: number;
//    time: string;
//    list: {
//       icon: JSX.Element;
//       title: string
//    }[];
//    active?: string;
// }

// const pricing_data: DataType[] = [
//    {
//       id: 1,
//       title: "Starter Plan",
//       desc: "Basic task & project management",
//       time: "One-time",
//       price: 199,
//       list: [
//          {
//             icon: (<> <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M5.31859 5.47358C6.60166 4.44722 8.22916 3.8335 10 3.8335C11.7708 3.8335 13.3983 4.44722 14.6814 5.47358L15.8926 4.26243L17.0711 5.44094L15.8599 6.65209C16.8863 7.93515 17.5 9.56266 17.5 11.3335C17.5 15.4757 14.1422 18.8335 10 18.8335C5.85787 18.8335 2.5 15.4757 2.5 11.3335C2.5 9.56266 3.11373 7.93515 4.14008 6.65209L2.92893 5.44094L4.10744 4.26243L5.31859 5.47358ZM10.8333 10.5002V6.74616L6.66667 12.1668H9.16667V15.9168L13.3333 10.5002H10.8333ZM6.66667 1.3335H13.3333V3.00016H6.66667V1.3335Z" fill="white" fillOpacity="0.5" /> </svg></>),
//             title: "1 Strategy Session",
//          },
//          {
//             icon: (<><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1.86911 6.21182L9.57467 1.59036C9.83858 1.43207 10.1683 1.43212 10.4322 1.59051L18.1312 6.2118C18.2567 6.28711 18.3334 6.42272 18.3334 6.56905V17.1665C18.3334 17.6268 17.9603 17.9999 17.5001 17.9999H2.50008C2.03985 17.9999 1.66675 17.6268 1.66675 17.1665V6.56915C1.66675 6.42276 1.74356 6.28712 1.86911 6.21182ZM15.2881 7.36972L10.0506 11.9023L4.7061 7.3646L3.6274 8.63511L10.061 14.0974L16.3787 8.62998L15.2881 7.36972Z" fill="white" fillOpacity="0.5" /> </svg></>),
//             title: "Email Support",
//          },
//          {
//             icon: (<><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M6.66675 2.1665V18.8332H3.33341V15.4998H1.66675V13.8332H3.33341V11.3332H1.66675V9.6665H3.33341V7.1665H1.66675V5.49984H3.33341V2.1665H6.66675ZM16.6708 2.1665C17.5891 2.1665 18.3334 2.91501 18.3334 3.8255V17.1742C18.3334 18.0904 17.5896 18.8332 16.6708 18.8332H8.33342V2.1665H16.6708Z" fill="white" fillOpacity="0.5" /> </svg></>),
//             title: "Budget Planning",
//          },
//       ]
//    },
//    {
//       id: 2,
//       title: "Growth Plan",
//       desc: "Advanced features integrations",
//       time: "One-time",
//       price: 299,
//       active: "priicng-growth2 theme-bg2",
//       list: [
//          {
//             icon: (<><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1.66675 18.8335C1.66675 15.1516 4.65151 12.1668 8.33341 12.1668C12.0153 12.1668 15.0001 15.1516 15.0001 18.8335H1.66675ZM8.33341 11.3335C5.57091 11.3335 3.33341 9.096 3.33341 6.3335C3.33341 3.571 5.57091 1.3335 8.33341 1.3335C11.0959 1.3335 13.3334 3.571 13.3334 6.3335C13.3334 9.096 11.0959 11.3335 8.33341 11.3335ZM14.4691 13.1945C17.0402 13.8516 18.9733 16.1031 19.1531 18.8335H16.6667C16.6667 16.6587 15.8336 14.6784 14.4691 13.1945ZM12.7835 11.2976C14.1441 10.077 15.0001 8.30522 15.0001 6.3335C15.0001 5.15238 14.6929 4.043 14.1542 3.08089C16.0628 3.4618 17.5001 5.1457 17.5001 7.16683C17.5001 9.46891 15.6355 11.3335 13.3334 11.3335C13.147 11.3335 12.9634 11.3212 12.7835 11.2976Z" fill="#064635" /> </svg></>),
//             title: "Custom Pricing",
//          },
//          {
//             icon: (<> <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M14.1707 13.8356H15.8373V3.83561H7.50398V5.50228H14.1707V13.8356ZM14.1707 15.5023V18.0015C14.1707 18.4622 13.7957 18.8356 13.3316 18.8356H3.34303C2.87965 18.8356 2.50415 18.4651 2.50415 18.0015L2.50632 6.33634C2.50641 5.8757 2.88135 5.50228 3.34533 5.50228H5.83732V3.00228C5.83732 2.54204 6.21042 2.16895 6.67065 2.16895H16.6707C17.1309 2.16895 17.504 2.54204 17.504 3.00228V14.6689C17.504 15.1292 17.1309 15.5023 16.6707 15.5023H14.1707ZM5.83732 13.8356V15.5023H7.50398V16.3356H9.17067V15.5023H9.58733C10.7379 15.5023 11.6707 14.5695 11.6707 13.4189C11.6707 12.2684 10.7379 11.3356 9.58733 11.3356H7.08732C6.8572 11.3356 6.67065 11.149 6.67065 10.9189C6.67065 10.6889 6.8572 10.5023 7.08732 10.5023H10.8373V8.8356H9.17067V8.00228H7.50398V8.8356H7.08732C5.93673 8.8356 5.00398 9.76835 5.00398 10.9189C5.00398 12.0695 5.93673 13.0023 7.08732 13.0023H9.58733C9.81742 13.0023 10.004 13.1889 10.004 13.4189C10.004 13.649 9.81742 13.8356 9.58733 13.8356H5.83732Z" fill="#064635" /> </svg></>),
//             title: "KPI Dashboards",
//          },
//          {
//             icon: (<><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M17.5 8.88583V3.83333C17.5 3.3731 17.1269 3 16.6667 3H15.8333C14.1845 4.64887 11.0856 5.57273 9.16667 6.01068V14.9893C11.0856 15.4273 14.1845 16.3512 15.8333 18H16.6667C17.1269 18 17.5 17.6269 17.5 17.1667V12.1142C18.2188 11.9292 18.75 11.2766 18.75 10.5C18.75 9.72342 18.2188 9.07083 17.5 8.88583ZM4.16667 6.33333C3.24619 6.33333 2.5 7.07953 2.5 8V13C2.5 13.9205 3.24619 14.6667 4.16667 14.6667H5L5.83333 18.8333H7.5V6.33333H4.16667Z" fill="#064635" /> </svg></>),
//             title: "Full Email + Call Support",
//          },
//       ]
//    },
//    {
//       id: 3,
//       title: "Enterprise Plan",
//       desc: "Custom solutions for large teams",
//       time: "month",
//       price: 499,
//       list: [
//          {
//             icon: (<><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M5.31859 5.47358C6.60166 4.44722 8.22916 3.8335 10 3.8335C11.7708 3.8335 13.3983 4.44722 14.6814 5.47358L15.8926 4.26243L17.0711 5.44094L15.8599 6.65209C16.8863 7.93515 17.5 9.56266 17.5 11.3335C17.5 15.4757 14.1422 18.8335 10 18.8335C5.85787 18.8335 2.5 15.4757 2.5 11.3335C2.5 9.56266 3.11373 7.93515 4.14008 6.65209L2.92893 5.44094L4.10744 4.26243L5.31859 5.47358ZM10.8333 10.5002V6.74616L6.66667 12.1668H9.16667V15.9168L13.3333 10.5002H10.8333ZM6.66667 1.3335H13.3333V3.00016H6.66667V1.3335Z" fill="white" fillOpacity="0.5" /> </svg></>),
//             title: "Custom Pricing",
//          },
//          {
//             icon: (<><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1.86911 6.21182L9.57467 1.59036C9.83858 1.43207 10.1683 1.43212 10.4322 1.59051L18.1312 6.2118C18.2567 6.28711 18.3334 6.42272 18.3334 6.56905V17.1665C18.3334 17.6268 17.9603 17.9999 17.5001 17.9999H2.50008C2.03985 17.9999 1.66675 17.6268 1.66675 17.1665V6.56915C1.66675 6.42276 1.74356 6.28712 1.86911 6.21182ZM15.2881 7.36972L10.0506 11.9023L4.7061 7.3646L3.6274 8.63511L10.061 14.0974L16.3787 8.62998L15.2881 7.36972Z" fill="white" fillOpacity="0.5" /> </svg></>),
//             title: "KPI Dashboards",
//          },
//          {
//             icon: (<><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M6.66675 2.1665V18.8332H3.33341V15.4998H1.66675V13.8332H3.33341V11.3332H1.66675V9.6665H3.33341V7.1665H1.66675V5.49984H3.33341V2.1665H6.66675ZM16.6708 2.1665C17.5891 2.1665 18.3334 2.91501 18.3334 3.8255V17.1742C18.3334 18.0904 17.5896 18.8332 16.6708 18.8332H8.33342V2.1665H16.6708Z" fill="white" fillOpacity="0.5" /> </svg></>),
//             title: "Full Email + Call Support",
//          },
//       ]
//    }
// ];

const Pricing = () => {
   // return (
   //    <section className="pricing-section2 fix theme-bg4 rounded-3 m-3 pt-100 pb-100">
   //       <div className="container">
   //          <div className="row g-lg-4 g-3 align-items-end justify-content-between mb-40">
   //             <div className="col-lg-7 col-md-7">
   //                <div className="section-header">
   //                   <span
   //                      className="text-uppercase text-white border-white border letter-1 rounded-5 fw-600 d-inline-block py-0 mb-3 px-3">Pricing</span>
   //                   <h2 className="text-white fw-bold wow fadeInUp" data-wow-delay=".3s">
   //                      Flexible Coaching <br /> Packages
   //                      <span className="fw-300">to Fit Your Journey</span>
   //                   </h2>
   //                </div>
   //             </div>
   //             <div className="col-lg-5 col-md-5">
   //                <div className="wow fadeInUp" data-wow-delay=".4s">
   //                   <p className="text-white opacity-75">
   //                      We understand that every journey is unique. That’s why we offer tailored coaching packages
   //                      designed to fit your personal
   //                      goals and needs.
   //                   </p>
   //                </div>
   //             </div>
   //          </div>
   //          <div className="row g-4">
   //             {pricing_data.map((item) => (
   //                <div key={item.id} className="col-md-6 col-lg-4">
   //                   <div className={`pricing-plan-items pricing-plan-items2 rounded-3 ${item.active} wow fadeInUp`} data-wow-delay=".2s">
   //                      <div className="mb-xl-4 mb-3">
   //                         <h4 className="mb-1 text-white">{item.title}</h4>
   //                         <p className="opacity-75 text-white">{item.desc}</p>
   //                      </div>
   //                      <div className="d-flex align-items-end gap-2 mb-lg-4 mb-3">
   //                         <h2 className="theme-clr4 fw-800 text-white">${item.price}</h2>
   //                         <span className="fz-15 opacity-75 italic text-white">/{item.time}</span>
   //                      </div>
   //                      <Link to="/courses" className="theme-btn mb-40 style-white w-100 d-center px-4">
   //                         Get Started Today
   //                         <i className="fa-solid fa-arrow-right d-center fz-17"></i>
   //                      </Link>
   //                      <ul className="pt-lg-5 pt-4 d-flex flex-column gap-3">
   //                         {item.list.map((list, i) => (
   //                            <li key={i} className="d-flex align-items-center gap-xl-3 gap-2 text-white fz-15">
   //                               {list.icon}
   //                               {list.title}
   //                            </li>
   //                         ))}
   //                      </ul>
   //                      {item.active && <img src="/assets/img/element/popular-badge.png" alt="img" className="popular-badge" />}
   //                   </div>
   //                </div>
   //             ))}
   //          </div>
   //       </div>
   //    </section >
   // )
}

export default Pricing
