import { Link } from "react-router-dom";
import faq_data from "../../../data/FaqData";
import { useEffect, useState } from "react";

interface DataType {
  id: number;
  page: string;
  title: string;
  desc: string;
  showAnswer: boolean;
}

const Faq = () => {
  const [faqData, setFaqData] = useState<DataType[]>([]);

  useEffect(() => {
    const updatedData = faq_data.map((item) =>
      item.id === 1 ? { ...item, showAnswer: true } : { ...item, showAnswer: false }
    );
    setFaqData(updatedData);
  }, []);

  const toggleAnswer = (faqId: number) => {
    setFaqData((prevFaqData) =>
      prevFaqData.map((faq) => {
        if (faqId === 1) {
          return faq.id === 1
            ? { ...faq, showAnswer: !faq.showAnswer }
            : { ...faq, showAnswer: false };
        }
        if (faq.id === faqId) {
          return { ...faq, showAnswer: !faq.showAnswer };
        }
        return { ...faq, showAnswer: false };
      })
    );
  };

  return (
    <section className="faq-section02 fix section-bg pt-100 pb-100">
      <div className="container">
        <div className="row g-4 align-items-start">
          {/* Left content */}
          <div className="col-lg-5">
            <div className="faq-content2">
              <div className="section-title">
                <span className="text-uppercase theme-clr4 theme4-border rounded-5 fw-600 d-inline-block py-0 mb-3 px-3">
                  FAQ
                </span>
                <h2
                  className="theme-clr4 mb-2 mb-md-3 fw-bold"
                  style={{ fontSize: "clamp(1.7rem, 3vw, 2.2rem)", lineHeight: 1.25 }}
                >
                  Frequently Asked Questions
                  <span className="fw-300 d-block">About Studying Abroad</span>
                </h2>
                <p
                  className="mb-3 mb-md-4"
                  style={{ fontSize: "0.95rem", color: "#4b5563" }}
                >
                  Studying abroad can be a transformative journey, but it comes with many
                  questions and decisions. These FAQs cover choosing courses, admissions,
                  student life, and career opportunities so you can move forward with
                  confidence.
                </p>
                <h5 className="mb-2 mb-md-3" style={{ fontWeight: 600, color: "#111827" }}>
                  Still have questions?
                  <br />
                  We&apos;re here to help you.
                </h5>
                <Link
                  to="/contact"
                  className="theme-btn style3 pe-20 mt-1"
                  data-wow-delay=".4s"
                >
                  <i className="fa-solid fa-arrow-right w-36 h-36 bg-white rounded-circle d-center fz-14 theme-clr4" />
                  Contact Us Now
                </Link>
              </div>
            </div>
          </div>

          {/* Right accordion */}
         {/* Right accordion */}
<div className="col-lg-7 d-flex justify-content-center">
  <div
    className="accordion accordion-style1 accordion-style2"
    id="faqAccordion"
    style={{ width: "100%", maxWidth: "720px" }}
  >
    {faqData
      .filter((items) => items.page === "home_1")
      .map((item) => (
        <div key={item.id} className="accordion-item mb-2 mb-md-3">
          <h2 className="accordion-header" id={`heading-${item.id}`}>
            <button
              className={`accordion-button d-flex justify-content-between align-items-center ${
                item.showAnswer ? "" : "collapsed"
              }`}
              type="button"
              aria-expanded={item.showAnswer}
              aria-controls={`collapse-${item.id}`}
              onClick={() => toggleAnswer(item.id)}
            >
              <span>
                {item.id}. {item.title}
              </span>
              <span className="cus-icon ms-2">
                <i className="fa-solid fa-chevron-down" />
              </span>
            </button>
          </h2>
          <div
            id={`collapse-${item.id}`}
            className={`accordion-collapse collapse ${
              item.showAnswer ? "show" : ""
            }`}
            aria-labelledby={`heading-${item.id}`}
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body pt-2 pb-3 pb-md-4">
              <p className="mb-0" style={{ lineHeight: 1.6, color: "#374151" }}>
                {item.desc}
              </p>
            </div>
          </div>
        </div>
      ))}
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default Faq;
