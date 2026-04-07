
import InnerHeader from "../layouts/headers/InnerHeader";
import Wrapper from "../layouts/Wrapper";

const Terms = () => {
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
              <h2 className="mb-4 text-center text-dark fw-bold">Terms and Conditions</h2>
              
              <div className="terms-content" style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#333" }}>
                <p className="mb-4">
                  <strong>Last Updated:</strong> December 3, 2025
                </p>

                <h5 className="mt-4 mb-3 fw-semibold" style={{ color: "#164863" }}>1. Acceptance of Terms</h5>
                <p className="mb-4">
                  By accessing and using MyStudyX (the "Service"), you accept and agree to be bound by 
                  the terms and provision of this agreement. Your access to and use of the Service is 
                  conditioned upon your acceptance of and compliance with these Terms.
                </p>

                <h5 className="mt-4 mb-3 fw-semibold" style={{ color: "#164863" }}>2. Use of Service</h5>
                <p className="mb-3">You may use the Service only for lawful purposes and in accordance with these Terms.</p>
                <ul className="mb-4 ps-4" style={{ fontSize: "0.93rem" }}>
                  <li>You agree not to reproduce, duplicate, copy, sell, trade, or resell the Service.</li>
                  <li>You agree not to engage in any activity that interferes with or disrupts the Service.</li>
                  <li>You must not use the Service in any way that could damage, disable, overburden, or impair it.</li>
                </ul>

                <h5 className="mt-4 mb-3 fw-semibold" style={{ color: "#164863" }}>3. User Accounts</h5>
                <p className="mb-4">
                  You may need to create an account to use certain features. You agree to keep your 
                  account information accurate and up-to-date. You are responsible for maintaining 
                  the confidentiality of your account credentials.
                </p>

                <h5 className="mt-4 mb-3 fw-semibold" style={{ color: "#164863" }}>4. Intellectual Property</h5>
                <p className="mb-4">
                  The Service and its original content (excluding User Content), features, and 
                  functionality are and will remain the exclusive property of MyStudyX and its licensors.
                </p>

                <h5 className="mt-4 mb-3 fw-semibold" style={{ color: "#164863" }}>5. User Content</h5>
                <p className="mb-3">
                  You retain ownership of any content you submit, post, or display on the Service. 
                  By submitting content, you grant MyStudyX a worldwide, non-exclusive, royalty-free 
                  license to use that content.
                </p>

                <h5 className="mt-4 mb-3 fw-semibold" style={{ color: "#164863" }}>6. Termination</h5>
                <p className="mb-4">
                  We may terminate or suspend your account and access to the Service immediately, 
                  without prior notice, for any reason including violation of these Terms.
                </p>

                <h5 className="mt-4 mb-3 fw-semibold" style={{ color: "#164863" }}>7. Limitation of Liability</h5>
                <p className="mb-4">
                  In no event shall MyStudyX be liable for any indirect, incidental, special, 
                  consequential, or punitive damages arising out of or relating to your use of the Service.
                </p>

                <h5 className="mt-4 mb-3 fw-semibold" style={{ color: "#164863" }}>8. Governing Law</h5>
                <p className="mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of India.
                </p>

                <h5 className="mt-4 mb-3 fw-semibold" style={{ color: "#164863" }}>9. Changes to Terms</h5>
                <p className="mb-0">
                  We reserve the right to modify or replace these Terms at any time. If changes are 
                  significant, we will notify you. Continued use of the Service after changes constitutes 
                  acceptance of the new Terms.
                </p>
              </div>

              <div className="d-flex flex-column gap-3 mt-5 pt-4 border-top">
                <a 
                  href="/privacy" 
                  className="btn btn-outline-primary w-100"
                  style={{ borderRadius: "12px" }}
                >
                  Privacy Policy
                </a>
                <button 
                  className="btn btn-primary w-100"
                  style={{ borderRadius: "12px" }}
                  onClick={() => window.history.back()}
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

export default Terms;
