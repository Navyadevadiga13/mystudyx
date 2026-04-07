
import { useNavigate } from "react-router-dom";
import InnerHeader from "../layouts/headers/InnerHeader";
import Wrapper from "../layouts/Wrapper";

const Privacy = () => {
  const navigate = useNavigate();
  const bgImg = "/assets/img/team/SignUp.png";

  return (
    <Wrapper>
      <InnerHeader title="" />
      {/* Glass Overlay Background */}
      <div
        className="min-vh-100 d-flex align-items-center justify-content-center"
        style={{
          background: `url(${bgImg}) center center / cover no-repeat fixed`,
          minHeight: "100vh",
          width: "100vw",
          position: "fixed",
          zIndex: 0,
          left: 0,
          top: 0,
        }}
      />
      <div
        className="container d-flex flex-column align-items-center justify-content-start mt-5"
        style={{
          minHeight: "100vh",
          zIndex: 1,
          position: "relative",
        }}
      >
        <div className="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-6">
          <div
            className="card shadow border-0"
            style={{
              background: "rgba(255,255,255,0.35)",
              backdropFilter: "blur(22px)",
              WebkitBackdropFilter: "blur(22px)",
              borderRadius: 18,
              boxShadow: "0 8px 32px rgba(31, 38, 135, 0.22)",
              border: "1.5px solid rgba(255,255,255,0.23)",
              maxHeight: "80vh",
              overflowY: "auto",
            }}
          >
            <div className="card-body p-4 p-md-5">
              <h2 className="mb-4 text-center text-dark fw-bold">Privacy Policy</h2>
              
              <div className="privacy-content" style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#333" }}>
                <p className="mb-4">
                  <strong>Last Updated:</strong> December 3, 2025
                </p>

                <h5 className="mt-4 mb-3 fw-semibold" style={{ color: "#164863" }}>1. Information We Collect</h5>
                <p className="mb-3">
                  We collect information you provide directly, such as name, email, phone number, and date of birth during signup.
                </p>
                <p className="mb-4">
                  We also collect usage data, device information, and browsing activity to improve our service.
                </p>

                <h5 className="mt-4 mb-3 fw-semibold" style={{ color: "#164863" }}>2. Data Sources & University Partnerships</h5>
                <p className="mb-3">
                  <strong>Important Notice:</strong> The educational data, course listings, and institutional information displayed on MyStudyX is researched and collected from <strong>various public sources</strong> and our <strong>partner universities</strong>. This includes:
                </p>
                <ul className="mb-4 ps-4" style={{ fontSize: "0.93rem" }}>
                  <li>Public university websites and official portals</li>
                  <li>Partner university data feeds and APIs</li>
                  <li>Government education databases</li>
                  <li>Third-party educational research platforms</li>
                  <li>Our own proprietary research and data aggregation</li>
                </ul>
                <p className="mb-4">
                  We strive for accuracy but cannot guarantee 100% completeness of all data from external sources.
                </p>

                <h5 className="mt-4 mb-3 fw-semibold" style={{ color: "#164863" }}>3. How We Use Your Information</h5>
                <ul className="mb-4 ps-4" style={{ fontSize: "0.93rem" }}>
                  <li>To create and manage your account</li>
                  <li>To provide personalized course recommendations</li>
                  <li>To communicate important updates and opportunities</li>
                  <li>To improve our platform and services</li>
                  <li>For analytics and research purposes</li>
                </ul>

                <h5 className="mt-4 mb-3 fw-semibold" style={{ color: "#164863" }}>4. Data Sharing</h5>
                <p className="mb-3">
                  We share your personal information with:
                </p>
                <ul className="mb-4 ps-4" style={{ fontSize: "0.93rem" }}>
                  <li>Partner universities for application processing (with your consent)</li>
                  <li>Service providers who help us operate the platform</li>
                  <li>Legal authorities when required by law</li>
                </ul>

                <h5 className="mt-4 mb-3 fw-semibold" style={{ color: "#164863" }}>5. Cookies & Tracking</h5>
                <p className="mb-4">
                  We use cookies and similar technologies to enhance your experience, analyze usage, and deliver personalized content. You can manage cookie preferences through your browser settings.
                </p>

                <h5 className="mt-4 mb-3 fw-semibold" style={{ color: "#164863" }}>6. Your Rights</h5>
                <p className="mb-4">
                  You have the right to access, update, delete, or export your personal data. Contact us at <strong>hello@wizx.org</strong> to exercise these rights.
                </p>

                <h5 className="mt-4 mb-3 fw-semibold" style={{ color: "#164863" }}>7. Data Security</h5>
                <p className="mb-4">
                  We implement industry-standard security measures to protect your data. However, no online transmission is completely secure.
                </p>

                <h5 className="mt-4 mb-3 fw-semibold" style={{ color: "#164863" }}>8. Children's Privacy</h5>
                <p className="mb-4">
                  Our service is not intended for children under 13. We do not knowingly collect personal information from children under this age.
                </p>

                <h5 className="mt-4 mb-3 fw-semibold" style={{ color: "#164863" }}>9. Changes to This Policy</h5>
                <p className="mb-0">
                  We may update this Privacy Policy periodically. Significant changes will be communicated through email or platform notifications.
                </p>
              </div>

              <div className="d-flex flex-column gap-3 mt-5 pt-4 border-top">
                <a 
                  href="/terms" 
                  className="btn btn-outline-primary w-100"
                  style={{ borderRadius: "12px" }}
                >
                  Terms and Conditions
                </a>
                <button 
                  className="btn btn-primary w-100"
                  style={{ borderRadius: "12px" }}
                  onClick={() => navigate("/sign-up")}
                >
                  Back to Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Privacy;
