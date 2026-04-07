import { JSX } from "react";
import { Link } from "react-router-dom";

interface DataType {
   id: number;
   title: string;
   desc: string;
   price: number;
   time: string;
   list: {
      icon: JSX.Element;
      title: string
   }[];
   active?: string;
}

const pricing_data: DataType[] = [
   {
      id: 1,
      title: "Starter Plan",
      desc: "Basic task & project management",
      time: "One-time",
      price: 199,
      list: [
         {
            icon: (<> <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M5.31859 5.47358C6.60166 4.44722 8.22916 3.8335 10 3.8335C11.7708 3.8335 13.3983 4.44722 14.6814 5.47358L15.8926 4.26243L17.0711 5.44094L15.8599 6.65209C16.8863 7.93515 17.5 9.56266 17.5 11.3335C17.5 15.4757 14.1422 18.8335 10 18.8335C5.85787 18.8335 2.5 15.4757 2.5 11.3335C2.5 9.56266 3.11373 7.93515 4.14008 6.65209L2.92893 5.44094L4.10744 4.26243L5.31859 5.47358ZM10.8333 10.5002V6.74616L6.66667 12.1668H9.16667V15.9168L13.3333 10.5002H10.8333ZM6.66667 1.3335H13.3333V3.00016H6.66667V1.3335Z" fill="white" fillOpacity="0.5" /> </svg></>),
            title: "1 Strategy Session",
         },
         {
            icon: (<><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1.86911 6.21182L9.57467 1.59036C9.83858 1.43207 10.1683 1.43212 10.4322 1.59051L18.1312 6.2118C18.2567 6.28711 18.3334 6.42272 18.3334 6.56905V17.1665C18.3334 17.6268 17.9603 17.9999 17.5001 17.9999H2.50008C2.03985 17.9999 1.66675 17.6268 1.66675 17.1665V6.56915C1.66675 6.42276 1.74356 6.28712 1.86911 6.21182ZM15.2881 7.36972L10.0506 11.9023L4.7061 7.3646L3.6274 8.63511L10.061 14.0974L16.3787 8.62998L15.2881 7.36972Z" fill="white" fillOpacity="0.5" /> </svg></>),
            title: "Email Support",
         },
         {
            icon: (<><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M6.66675 2.1665V18.8332H3.33341V15.4998H1.66675V13.8332H3.33341V11.3332H1.66675V9.6665H3.33341V7.1665H1.66675V5.49984H3.33341V2.1665H6.66675ZM16.6708 2.1665C17.5891 2.1665 18.3334 2.91501 18.3334 3.8255V17.1742C18.3334 18.0904 17.5896 18.8332 16.6708 18.8332H8.33342V2.1665H16.6708Z" fill="white" fillOpacity="0.5" /> </svg></>),
            title: "Budget Planning",
         },
      ]
   },
   {
      id: 2,
      title: "Pro Plan",
      desc: "Advanced features integrations",
      time: "month",
      price: 99,
      active: "growth-items-theme",
      list: [
         {
            icon: (<><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1.6665 18.8335C1.6665 15.1516 4.65127 12.1668 8.33317 12.1668C12.0151 12.1668 14.9998 15.1516 14.9998 18.8335H1.6665ZM8.33317 11.3335C5.57067 11.3335 3.33317 9.096 3.33317 6.3335C3.33317 3.571 5.57067 1.3335 8.33317 1.3335C11.0957 1.3335 13.3332 3.571 13.3332 6.3335C13.3332 9.096 11.0957 11.3335 8.33317 11.3335ZM14.4688 13.1945C17.04 13.8516 18.9731 16.1031 19.1528 18.8335H16.6665C16.6665 16.6587 15.8333 14.6784 14.4688 13.1945ZM12.7833 11.2976C14.1438 10.077 14.9998 8.30522 14.9998 6.3335C14.9998 5.15238 14.6927 4.043 14.1539 3.08089C16.0626 3.4618 17.4998 5.1457 17.4998 7.16683C17.4998 9.46891 15.6353 11.3335 13.3332 11.3335C13.1468 11.3335 12.9632 11.3212 12.7833 11.2976Z" fill="black" fillOpacity="0.5" /></svg></>),
            title: "5 User Licenses",
         },
         {
            icon: (<> <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M2.49984 3H17.4998C17.9601 3 18.3332 3.3731 18.3332 3.83333V17.1667C18.3332 17.6269 17.9601 18 17.4998 18H2.49984C2.0396 18 1.6665 17.6269 1.6665 17.1667V3.83333C1.6665 3.3731 2.0396 3 2.49984 3ZM5.83317 11.3333V14.6667H7.49984V11.3333H5.83317ZM9.1665 6.33333V14.6667H10.8332V6.33333H9.1665ZM12.4998 8.83333V14.6667H14.1665V8.83333H12.4998Z" fill="black" fillOpacity="0.5" /> </svg></>),
            title: "Custom Dashboards",
         },
         {
            icon: (<><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M17.5 8.88583V3.83333C17.5 3.3731 17.1269 3 16.6667 3H15.8333C14.1845 4.64887 11.0856 5.57273 9.16667 6.01068V14.9893C11.0856 15.4272 14.1845 16.3512 15.8333 18H16.6667C17.1269 18 17.5 17.6269 17.5 17.1667V12.1142C18.2188 11.9292 18.75 11.2766 18.75 10.5C18.75 9.72342 18.2188 9.07083 17.5 8.88583ZM4.16667 6.33333C3.24619 6.33333 2.5 7.07952 2.5 8V13C2.5 13.9205 3.24619 14.6667 4.16667 14.6667H5L5.83333 18.8333H7.5V6.33333H4.16667Z" fill="black" fillOpacity="0.5" /> </svg></>),
            title: "Real-Time Reporting",
         },
      ]
   },
   {
      id: 3,
      title: "Enterprise Plan",
      desc: "Custom solutions for large teams",
      time: "One-time",
      price: 149,
      list: [
         {
            icon: (<><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1.6665 18.8335C1.6665 15.1516 4.65127 12.1668 8.33317 12.1668C12.0151 12.1668 14.9998 15.1516 14.9998 18.8335H1.6665ZM8.33317 11.3335C5.57067 11.3335 3.33317 9.096 3.33317 6.3335C3.33317 3.571 5.57067 1.3335 8.33317 1.3335C11.0957 1.3335 13.3332 3.571 13.3332 6.3335C13.3332 9.096 11.0957 11.3335 8.33317 11.3335ZM14.4688 13.1945C17.04 13.8516 18.9731 16.1031 19.1528 18.8335H16.6665C16.6665 16.6587 15.8333 14.6784 14.4688 13.1945ZM12.7833 11.2976C14.1438 10.077 14.9998 8.30522 14.9998 6.3335C14.9998 5.15238 14.6927 4.043 14.1539 3.08089C16.0626 3.4618 17.4998 5.1457 17.4998 7.16683C17.4998 9.46891 15.6353 11.3335 13.3332 11.3335C13.1468 11.3335 12.9632 11.3212 12.7833 11.2976Z" fill="black" fillOpacity="0.5" /></svg></>),
            title: "Unlimited User Licenses",
         },
         {
            icon: (<> <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M2.49984 3H17.4998C17.9601 3 18.3332 3.3731 18.3332 3.83333V17.1667C18.3332 17.6269 17.9601 18 17.4998 18H2.49984C2.0396 18 1.6665 17.6269 1.6665 17.1667V3.83333C1.6665 3.3731 2.0396 3 2.49984 3ZM5.83317 11.3333V14.6667H7.49984V11.3333H5.83317ZM9.1665 6.33333V14.6667H10.8332V6.33333H9.1665ZM12.4998 8.83333V14.6667H14.1665V8.83333H12.4998Z" fill="black" fillOpacity="0.5" /> </svg></>),
            title: "Full Access to All AI Tools",
         },
         {
            icon: (<><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M17.5 8.88583V3.83333C17.5 3.3731 17.1269 3 16.6667 3H15.8333C14.1845 4.64887 11.0856 5.57273 9.16667 6.01068V14.9893C11.0856 15.4272 14.1845 16.3512 15.8333 18H16.6667C17.1269 18 17.5 17.6269 17.5 17.1667V12.1142C18.2188 11.9292 18.75 11.2766 18.75 10.5C18.75 9.72342 18.2188 9.07083 17.5 8.88583ZM4.16667 6.33333C3.24619 6.33333 2.5 7.07952 2.5 8V13C2.5 13.9205 3.24619 14.6667 4.16667 14.6667H5L5.83333 18.8333H7.5V6.33333H4.16667Z" fill="black" fillOpacity="0.5" /> </svg></>),
            title: "24/7 Support (Phone, Email, Chat)",
         },
      ]
   }
];

const PricingArea = () => {
   return (
      <section className="pricing-section section-bg position-relative z-1 pt-100">
         <div className="container">
            <div className="row g-0 justify-content-center">
               <div className="col-lg-6 text-center">
                  <div className="section-header mb-xxl-4 mb-4">
                     <div className="d-flex justify-content-center align-items-center gap-2 theme-clr fw-600 mb-2">
                        <img src="/assets/img/icon/section-step1.png" alt="img" /> Pricing
                     </div>
                     <h2 className="theme-clr4 fw-bold wow fadeInUp">
                        Flexible Consulting Packages to Fit
                        <span className="fw-300">
                           Every Stage of Your Business
                        </span>
                     </h2>
                  </div>
               </div>
            </div>
         </div>
         <div className="container pt-xl-5">
            <div className="row g-4">
               {pricing_data.map((item) => (
                  <div key={item.id} className="col-md-6 col-lg-4">
                     <div className={`pricing-plan-items pricing-plan-items3 rounded-4 ${item.active} wow fadeInUp`} data-wow-delay=".2s">
                        <div className="mb-xl-4 mb-3">
                           <h4 className="mb-1 text-white">{item.title}</h4>
                           <p className="opacity-75 text-white">{item.desc}</p>
                        </div>
                        <div className="d-flex align-items-end gap-2 mb-lg-4 mb-3">
                           <h2 className="theme-clr4 fw-800 text-white">${item.price}</h2>
                           <span className="fz-15 opacity-75 italic text-white">/{item.time}</span>
                        </div>
                        <Link to="/courses" className="theme-btn mb-40 bg-white border w-100 d-center px-4">
                           Get Started Today
                           <i className="fa-solid fa-arrow-right d-center fz-17"></i>
                        </Link>
                        <ul className="pt-lg-4 pt-4 d-flex border-top flex-column gap-3">
                           {item.list.map((list, i) => (
                              <li key={i} className="d-flex pt-2 align-items-center gap-xl-3 gap-2 text-white fz-15">
                                 {list.icon}
                                 {list.title}
                              </li>
                           ))}
                        </ul>
                        {item.active && <img src="/assets/img/element/price-badge-white.png" alt="img" className="popular-badge" />}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default PricingArea
