import { JSX, useState } from "react";
import VideoPopup from "../../../modals/VideoPopup";

interface DataType {
  id: number;
  icon: JSX.Element;
  title: string;
  desc: string;
  class?: string;
}

const work_data: DataType[] = [
  {
    id: 1,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13.0049 16.9408V19.0026H18.0049V21.0026H6.00488V19.0026H11.0049V16.9408C7.05857 16.4487 4.00488 13.0823 4.00488 9.00269V3.00269H20.0049V9.00269C20.0049 13.0823 16.9512 16.4487 13.0049 16.9408ZM1.00488 5.00269H3.00488V9.00269H1.00488V5.00269ZM21.0049 5.00269H23.0049V9.00269H21.0049V5.00269Z"
          fill="#2ECC71"
        />
      </svg>
    ),
    title: "Global Course Access",
    desc: "See all international programs in one place.",
  },
  {
    id: 2,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3.78307 2.82598L12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598ZM12 13.5L14.9389 15.0451L14.3776 11.7725L16.7553 9.45492L13.4695 8.97746L12 6L10.5305 8.97746L7.24472 9.45492L9.62236 11.7725L9.06107 15.0451L12 13.5Z"
          fill="#2ECC71"
        />
      </svg>
    ),
    title: "Easy Comparison",
    desc: "Compare courses quickly with side‑by‑side details.",
    class: "ms-xxl-5",
  },
  {
    id: 3,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M19 13C20.0929 13 21.1175 13.2922 22 13.8027V6C22 5.44772 21.5523 5 21 5H12.4142L10.4142 3H3C2.44772 3 2 3.44772 2 4V20C2 20.5523 2.44772 21 3 21H13.3414C13.1203 20.3744 13 19.7013 13 19C13 15.6863 15.6863 13 19 13ZM15.4645 18.4647L19 22.0002L23.9497 17.0505L22.5355 15.6362L19 19.1718L16.8787 17.0505L15.4645 18.4647Z"
          fill="#2ECC71"
        />
      </svg>
    ),
    title: "Personalized Support",
    desc: "Get expert guidance based on your profile.",
  },
  {
    id: 4,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M19.2914 5.99994H20.0002C20.5525 5.99994 21.0002 6.44766 21.0002 6.99994V13.9999C21.0002 14.5522 20.5525 14.9999 20.0002 14.9999H18.0002L13.8319 9.16427C13.3345 8.46797 12.4493 8.16522 11.6297 8.41109L9.14444 9.15668C8.43971 9.3681 7.6758 9.17551 7.15553 8.65524L6.86277 8.36247C6.41655 7.91626 6.49011 7.17336 7.01517 6.82332L12.4162 3.22262C13.0752 2.78333 13.9312 2.77422 14.5994 3.1994L18.7546 5.8436C18.915 5.94571 19.1013 5.99994 19.2914 5.99994ZM5.02708 14.2947L3.41132 15.7085C2.93991 16.1209 2.95945 16.8603 3.45201 17.2474L8.59277 21.2865C9.07284 21.6637 9.77592 21.5264 10.0788 20.9963L10.7827 19.7645C11.2127 19.012 11.1091 18.0682 10.5261 17.4269L7.82397 14.4545C7.09091 13.6481 5.84722 13.5771 5.02708 14.2947ZM7.04557 5H3C2.44772 5 2 5.44772 2 6V13.5158C2 13.9242 2.12475 14.3173 2.35019 14.6464C2.3741 14.6238 2.39856 14.6015 2.42357 14.5796L4.03933 13.1658C5.47457 11.91 7.65103 12.0343 8.93388 13.4455L11.6361 16.4179C12.6563 17.5401 12.8376 19.1918 12.0851 20.5087L11.4308 21.6538C11.9937 21.8671 12.635 21.819 13.169 21.4986L17.5782 18.8531C18.0786 18.5528 18.2166 17.8896 17.8776 17.4146L12.6109 10.0361C12.4865 9.86205 12.2652 9.78636 12.0603 9.84783L9.57505 10.5934C8.34176 10.9634 7.00492 10.6264 6.09446 9.7159L5.80169 9.42313C4.68615 8.30759 4.87005 6.45035 6.18271 5.57524L7.04557 5Z"
          fill="#2ECC71"
        />
      </svg>
    ),
    title: "Visa Assistance",
    desc: "Support with visa applications and documentation.",
    class: "ms-xxl-5",
  },
];

const WorkArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="work-section fix section-bg pt-100 pb-100">
        <div className="container">
          <div className="row g-4 justify-content-between align-items-start">
            {/* Left: Copy + image */}
            <div className="col-lg-6">
              <div className="section-header mb-3 mb-md-4">
                <span className="text-uppercase theme-clr4 theme4-border rounded-5 fw-600 d-inline-block py-0 mb-3 px-3">
                  Why choose MyStudyX
                </span>
                <h2
                  className="theme-clr4 fw-800 mb-2 mb-lg-3 fw-bold"
                  style={{ fontSize: "clamp(1.7rem, 3vw, 2.2rem)", lineHeight: 1.3 }}
                >
                  A Holistic Approach{" "}
                  <span className="fw-300 d-block">
                    focused entirely on your academic and career growth
                  </span>
                </h2>
                <p className="mb-0">
                  Choosing the right course is a big decision. MyStudyX brings together
                  courses from universities abroad so you can search, compare, and choose
                  international programs that match your academic and career goals.
                </p>
              </div>

              <div className="nano-project-image position-relative w-100 mt-3 mt-md-4">
                <img
                  src="/assets/img/about/about-thumb2.png"
                  alt="Students exploring study options"
                  className="rounded-3 w-100 img-fluid"
                  style={{ objectFit: "cover" }}
                />
                <div className="video d-center rounded-circle position-absolute">
                  <button
                    type="button"
                    onClick={() =>
                      window.open("https://www.youtube.com/@wizdomed2090", "_blank")
                    }
                    style={{ cursor: "pointer", border: "none", background: "transparent" }}
                    className="video-btn video-popup"
                    aria-label="Open YouTube channel"
                  >
                    <svg
                      width="26"
                      height="31"
                      viewBox="0 0 26 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M25.7461 2.28906L2.84277 14.5781L23.9609 29.0273V11.208H25.4502V30.832H23.9609V30.8311L1.36523 15.3711L0.661133 14.0586L25.042 0.976562L25.7461 2.28906Z"
                        fill="#234345"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Feature list */}
            <div className="col-lg-6">
              <div
                className="work-wrapper d-flex flex-column"
                style={{ gap: "0.6rem" }} // tighter vertical spacing
              >
                {work_data.map((item) => (
                  <div
                    key={item.id}
                    className={`work-list-item rounded-3 bg-white d-flex flex-column flex-sm-row align-items-start gap-3 p-3 p-md-4 shadow-sm ${item.class || ""}`}
                    data-wow-delay=".2s"
                    style={{
                      border: "1px solid rgba(148,163,184,0.2)",
                    }}
                  >
                    <div
                      className="icon rounded-circle d-center flex-shrink-0"
                      style={{
                        width: 52,
                        height: 52,
                        background: "rgba(46, 204, 113, 0.08)",
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="mb-1">
                        <span className="theme-clr4 fw-600">{item.title}</span>
                      </h4>
                      <p
                        className="mb-0"
                        style={{ fontSize: "0.95rem", color: "#4b5563" }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId="eEzD-Y97ges"
      />
    </>
  );
};

export default WorkArea;
