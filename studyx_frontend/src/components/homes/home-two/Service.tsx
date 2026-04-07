import { JSX } from "react";
import { Link } from "react-router-dom";

interface DataType {
  id: number;
  icon: JSX.Element;
  title: string;
  desc: string;
  link: string;
}

const service_data: DataType[] = [
  {
    id: 1,
    icon: (
      <>
        <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15 6.44434C15 6.70674 14.9832 6.9652 14.9505 7.21871C16.7712 8.24891 18 10.2031 18 12.4443C18 15.758 15.3137 18.4443 12 18.4443C11.2987 18.4443 10.6256 18.324 10 18.1029V21.4443H8V17.8446C7.2499 18.228 6.40022 18.4443 5.5 18.4443C2.46243 18.4443 0 15.9819 0 12.9443C0 11.4917 0.56312 10.1706 1.48297 9.18752C1.87725 10.2675 2.49744 11.2387 3.28576 12.0432L4.71424 10.6434C3.99071 9.90504 3.45705 8.98201 3.1906 7.95122C3.06607 7.46975 3 6.96474 3 6.44434C3 3.13063 5.68629 0.444336 9 0.444336C12.3137 0.444336 15 3.13063 15 6.44434Z"
            fill="#2ECC71"
          />
        </svg>
      </>
    ),
    title: "Skills Course Platform",
    desc: " Explore skill-based courses beyond traditional university offerings,gain practical expertise to succeed in the modern workforce.",
    link: "https://skilledx.io/"
  },
  {
    id: 2,
    icon: (
      <>
        <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4.49816 19.4491H11.5018C10.8432 21.0285 9.5794 22.2923 8 22.9509C6.4206 22.2923 5.15679 21.0285 4.49816 19.4491ZM14 14.2538L16 16.5221V18.4491H0V16.5221L2 14.2538V8.44909C2 4.96584 4.50442 2.00253 8 0.904297C11.4956 2.00253 14 4.96584 14 8.44909V14.2538ZM8 10.4491C9.1046 10.4491 10 9.55368 10 8.44909C10 7.34452 9.1046 6.44909 8 6.44909C6.8954 6.44909 6 7.34452 6 8.44909C6 9.55368 6.8954 10.4491 8 10.4491Z"
            fill="#2ECC71"
          />
        </svg>
      </>
    ),
    title: "Study Abroad Guidance",
    desc: "Get expert help with shortlisting universities, and acing admissions anywhere in the world.",
    link: "https://www.wizx.org/"
  },
  {
    id: 3,
    icon: (
      <>
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11 2.97947C10.4117 2.63913 9.72857 2.44434 9 2.44434C6.79086 2.44434 5 4.2352 5 6.44434V8.21856C4.14895 8.56078 3.45143 9.09219 2.94126 9.79367C2.29239 10.6858 2 11.779 2 12.9443C2 14.5057 2.79529 15.8799 4 16.6863V17.9443C4 20.4296 6.01472 22.4443 8.5 22.4443C9.42507 22.4443 10.285 22.1652 11 21.6865V17.9443C11 16.6113 10.67 15.759 10.1402 15.1851C9.59743 14.5971 8.71622 14.1608 7.3356 13.9307L7.6644 11.9579C8.96602 12.1748 10.1058 12.5816 11 13.2714V2.97947ZM13 2.97947V13.2714C13.8942 12.5816 15.034 12.1748 16.3356 11.9579L16.6644 13.9307C15.2838 14.1608 14.4026 14.5971 13.8598 15.1851C13.33 15.759 13 16.6113 13 17.9443V21.6865C13.715 22.1652 14.5749 22.4443 15.5 22.4443C17.9853 22.4443 20 20.4296 20 17.9443V16.6863C21.2047 15.8799 22 14.5057 22 12.9443C22 11.779 21.7076 10.6858 21.0587 9.79367C20.5486 9.09219 19.8511 8.56078 19 8.21856V6.44434C19 4.2352 17.2091 2.44434 15 2.44434C14.2714 2.44434 13.5883 2.63913 13 2.97947Z"
            fill="#2ECC71"
          />
        </svg>
      </>
    ),
    title: "Scholarship & Visa Assistance",
    desc: "Unlock scholarship opportunities and navigate visa processes with support from seasoned  counselors.",
    link: "https://www.scholarx.io/"
  },
  {
    id: 4,
    icon: (
      <>
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.1213 10.9235C13.7308 10.5329 13.0976 10.5329 12.7071 10.9235L12 11.6306C11.2189 12.4116 9.95259 12.4116 9.17154 11.6306C8.39049 10.8495 8.39049 9.58322 9.17154 8.80217L14.8022 3.17002C16.9061 2.69407 19.2008 3.27509 20.8388 4.91309C23.2582 7.33245 23.3716 11.1845 21.1792 13.7382L19.071 15.8732L14.1213 10.9235ZM3.16113 4.91309C5.33452 2.7397 8.66411 2.42717 11.17 3.9755L7.75732 7.38796C6.19523 8.95006 6.19523 11.4827 7.75732 13.0448C9.27209 14.5595 11.6995 14.6054 13.2695 13.1825L13.4142 13.0448L17.6568 17.2874L13.4142 21.5301C12.6331 22.3111 11.3668 22.3111 10.5858 21.5301L3.16113 14.1054C0.622722 11.567 0.622722 7.45149 3.16113 4.91309Z"
            fill="#2ECC71"
          />
        </svg>
      </>
    ),
    title: "Career & Internship Support",
    desc: "Access global internship databases designed to launch you into your dream job after graduation.",
    link: "https://internx.io/"
  }
];

const Service = () => {
  return (
    <section className="service-section pt-100 pb-100">
      <div className="container">
        <div className="row g-lg-4 g-3 align-items-end justify-content-between mb-40">
          <div className="col-lg-7 col-md-7">
            <div className="section-header">
              <span className="text-uppercase theme-clr4 theme4-border rounded-5 fw-600 d-inline-block py-0 mb-3 px-3">Services</span>
              <h2 className="theme-clr4 fw-bold wow fadeInUp" data-wow-delay=".3s">
                Customized solutions
                <span className="fw-300"> to help you achieve your international education goals</span>
              </h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-5">
            <div className="wow fadeInUp" data-wow-delay=".4s">
              <p className="mb-4">
                No matter where you are in your academic journey, our services are designed to meet your needs and guide you towards your global education goals
              </p>
              <a
                href="https://www.wizx.org/"
                className="theme-btn style3 pe-20 wow fadeIn"
                data-wow-delay=".4s"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-arrow-right w-36 h-36 bg-white rounded-circle d-center fz-14 theme-clr4"></i>
                Check All Services
              </a>
            </div>
          </div>
        </div>
        <div className="row g-4">
          {service_data.map((item) => (
            <div key={item.id} className="col-sm-6 col-lg-4 col-xl-3 d-flex">
             <div
  className="service-items2 section-bg z-1 position-relative d-flex flex-column w-100"
  style={{
    minHeight: "100%",
    borderRadius: "14px",          // was rounded-4 (bigger radius)
    boxShadow: "0 10px 25px rgba(15,23,42,0.04)", // softer, lighter shadow
    border: "1px solid rgba(148,163,184,0.16)",   // optional subtle border
  }}
>

                <img
                  src="/assets/img/element/hover-ele.png"
                  alt="img"
                  className="hover-ele position-absolute bottom-0 z-n1"
                />
                <div className="content d-flex flex-column h-100">
                  <div className="mb-lg-5 mb-4 d-center rounded-circle icons">
                    {item.icon}
                  </div>

                  <h4 className="mb-sm-3 mb-2 wow fadeInUp" data-wow-delay=".3s">
                    {item.link.startsWith("http") ? (
                      <a
                        href={item.link}
                        className="theme-clr4 fw-700 lh-110 fw-600"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.title}
                      </a>
                    ) : (
                      <Link to={item.link} className="theme-clr4 fw-700 lh-110 fw-600">
                        {item.title}
                      </Link>
                    )}
                  </h4>

                  <p className="black-clr mb-3 flex-grow-1">{item.desc}</p>

                  {item.link.startsWith("http") ? (
                    <a
                      href={item.link}
                      className="link-btn d-flex align-items-center gap-3 fw-600 theme-clr4 mt-auto"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn More<i className="fa-solid fa-arrow-right"></i>
                    </a>
                  ) : (
                    <Link
                      to={item.link}
                      className="link-btn d-flex align-items-center gap-3 fw-600 theme-clr4 mt-auto"
                    >
                      Learn More<i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  )}
                </div>
              </div>
            </div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
