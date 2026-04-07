import { Link } from "react-router-dom";

const Deserve = () => {
  return (
    <section className="deserve-create-section mb-0 rounded-end-0 rounded-start-0 overflow-hidden position-relative">
      <div className="container">
        <div className="deserve-content text-center">
          <div className="section-header">
            <h2
              className="theme-clr4 text-white mb-40 fw-bold wow fadeInUp"
              data-wow-delay=".3s"
            >
              Ready to start
              <span className="fw-300"> your global journey?</span>
            </h2>
            <Link to="/contact" className="theme-btn text-start bg-white style3 pe-20">
              <i className="fa-solid fa-arrow-right w-36 h-36 theme-bg2 rounded-circle d-center fz-14 theme-clr4" />
              Schedule Your Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deserve;
