
import Count from "../../common/Count";

const About = () => {
  return (
    <section className="about-section section-bg pt-100 pb-100 fix">
      <div className="container">
        <div className="row g-4 justify-content-between align-items-center">
          {/* Left: Image */}
          <div className="col-lg-5 col-md-6">
            <div className="about-thumb2 position-relative">
              <div className="text-circles d-sm-block d-none">
                <img
                  src="/assets/img/logo/MyStudyX_logo.png"
                  alt="MyStudyX logo"
                  className="circle360"
                />
              </div>
              <div
                className="about-image wow img-custom-anim-right w-100"
                data-wow-duration="1.3s"
                data-wow-delay="0.3s"
              >
                <img
                  src="/assets/img/about/about-thumb2.png"
                  alt="Students abroad"
                  className="img-fluid w-100"
                  style={{ borderRadius: 18, objectFit: "cover" }}
                />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="col-lg-6 col-md-6">
            <div className="about-content">
              {/* Heading + counters */}
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-between mb-4 mb-md-5">
                <div className="flex-grow-1">
                  <div className="section-title">
                    <span className="text-uppercase theme-clr4 theme4-border rounded-5 fw-600 d-inline-block py-0 mb-3 px-3">
                      About us
                    </span>
                    <h2 className="fw-300 mb-0">
                      Empowering you to achieve your
                      <span className="theme-clr4 fw-bold"> academic goals</span>
                    </h2>
                  </div>
                </div>

                <div className="counter-area text-sm-end text-start">
                  <div className="d-flex flex-sm-column flex-row gap-3 gap-sm-4 justify-content-start justify-content-sm-end">
                    <div>
                      <h2 className="fw-300 border-bottom pb-1 mb-1 mb-md-2">
                        <span className="count fw-300">
                          <Count number={300000} />
                        </span>
                        +
                      </h2>
                      <p className="mb-0">University Courses</p>
                    </div>
                    <div>
                      <h2 className="fw-300 border-bottom pb-1 mb-1 mb-md-2">
                        <span className="count fw-300">
                          <Count number={10000} />
                        </span>
                        +
                      </h2>
                      <p className="mb-0">Universities</p>
                    </div>
                    
                    <div>
                      <h2 className="fw-300 border-bottom pb-1 mb-1 mb-md-2">
                        <span className="count fw-300">
                          <Count number={130} />
                        </span>
                        +
                      </h2>
                      <p className="mb-0">Countries</p>
                    </div>
                    
                  </div>
                </div>
              </div>

              {/* Body text + CTA */}
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-between align-items-start align-items-sm-end">
                <div className="flex-grow-1">
                  <p className="mb-2">
                    We guide and support students through every step of the international
                    admission process, from choosing universities to securing visas.
                  </p>
                  <p className="mb-3 mb-lg-4">
                    Let’s build the future you&apos;ve been dreaming of—starting today.
                  </p>

                  <a
                    href="https://www.wizx.org/enquiry"
                    className="theme-btn style3 pe-20"
                    data-wow-delay=".4s"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-solid fa-arrow-right w-36 h-36 bg-white rounded-circle d-center fz-14 theme-clr4"></i>
                    Starting Now
                  </a>
                </div>

                {/* Right-side space (kept for future stats / avatars) */}
                <div className="counter-area d-none d-sm-block" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
