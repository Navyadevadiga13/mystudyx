import { JSX } from "react";
import { Link } from "react-router-dom";

interface DataType {
  id: number;
  thumb: string;
  icon: string;
  title: JSX.Element;
  desc: string;
}

const service_data: DataType[] = [
  {
    id: 1,
    icon: "/assets/img/service/service-icon1.png",
    thumb: "/assets/img/service/service-thumb1.png",
    title: <>Application<br />Guidance</>,
    desc: "End‑to‑end support for university applications.",
  },
  {
    id: 2,
    icon: "/assets/img/service/service-icon2.png",
    thumb: "/assets/img/service/service-thumb2.png",
    title: <>Course &<br />University Shortlisting</>,
    desc: "Personalized options based on your profile.",
  },
  {
    id: 3,
    icon: "/assets/img/service/service-icon3.png",
    thumb: "/assets/img/service/service-thumb3.png",
    title: <>Scholarship &<br />Funding Advice</>,
    desc: "Explore scholarships and financial planning.",
  },
  {
    id: 4,
    icon: "/assets/img/service/service-icon4.png",
    thumb: "/assets/img/service/service-thumb4.png",
    title: <>Visa &<br />Pre‑Departure Support</>,
    desc: "Smooth transition from offer to onboarding.",
  },
];

const Service = () => {
  return (
    <section className="service-section section-bg pt-100 pb-100">
      <div className="container">
        {/* Header row */}
        <div className="row g-3 align-items-center mb-4 mb-md-5">
          <div className="col-lg-7 col-md-8">
            <div className="section-header">
              <div className="d-flex align-items-center gap-2 theme-clr fw-600 mb-2">
                <img src="/assets/img/icon/section-step1.png" alt="Steps icon" />
                Our Services
              </div>
              <h2
                className="fw-bold theme-clr4 mb-0"
                style={{ fontSize: "clamp(1.7rem, 3vw, 2.1rem)", lineHeight: 1.3 }}
              >
                Tailored support
                <span className="fw-300">
                  {" "}
                  to help you achieve your international education goals
                </span>
              </h2>
            </div>
          </div>
          <div className="col-lg-5 col-md-4">
            <div className="text-md-end mt-2 mt-md-0">
              <Link to="/services" className="theme-btn style1 pe-20">
                <i className="fa-solid fa-arrow-right w-36 h-36 bg-white rounded-circle d-center fz-14 theme-clr4" />
                Check All Services
              </Link>
            </div>
          </div>
        </div>

        {/* Cards grid */}
        <div className="row g-4">
          {service_data.map((item) => (
            <div key={item.id} className="col-12 col-sm-6 col-lg-4 col-xl-3">
              <div
                className="team-items service-items1 hover-translate8 rounded-4 h-100 d-flex flex-column"
                style={{
                  background: "#ffffff",
                  boxShadow: "0 6px 20px rgba(15,23,42,0.06)",
                  overflow: "hidden",
                }}
              >
                {/* Top content */}
                <div
                  className="content d-flex align-items-start justify-content-between gap-3 px-3 px-xl-4 pt-3 pt-xl-4"
                  style={{ minHeight: 110 }}
                >
                  <div className="pe-1">
                    <h5 className="mb-1 mb-sm-2">
                      <Link to="/services-details" className="theme-clr4 lh-110 fw-600">
                        {item.title}
                      </Link>
                    </h5>
                    <span
                      className="d-block fw-400"
                      style={{
                        fontSize: "0.9rem",
                        color: "#6b7280",
                      }}
                    >
                      {item.desc}
                    </span>
                  </div>
                  <Link
                    to="/services-details"
                    className="theme-clr4 border hover-theme1 min-w-48 w-48 h-48 white-bg rounded-circle d-center d-none d-xl-flex fs-five"
                    aria-label="View service details"
                  >
                    <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>

                {/* Image */}
                <div className="thumb w-100 overflow-hidden position-relative mt-3">
                  <img
                    src={item.thumb}
                    className="w-100"
                    alt="Service visual"
                    style={{ display: "block", objectFit: "cover" }}
                  />
                  <img
                    src={item.icon}
                    alt="Service icon"
                    className="service-icon position-absolute bottom-0 start-0 m-3"
                    style={{
                      width: 48,
                      height: 48,
                      objectFit: "contain",
                    }}
                  />
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
