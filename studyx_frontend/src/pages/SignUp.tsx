import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InnerHeader from "../layouts/headers/InnerHeader";
import Wrapper from "../layouts/Wrapper";
import { Link } from "react-router-dom";

const getApiBaseUrl = () => {
  if (typeof window !== "undefined") {
    const hostname = window.location.hostname;

    // production: mystudyx.io via Nginx proxy
    if (hostname === "mystudyx.io" || hostname === "www.mystudyx.io") {
      return "/api";
    }

    // direct IP access (optional)
    if (hostname === "168.231.103.88") {
      return "http://168.231.103.88:3000/api";
    }

    // local development
    if (hostname === "localhost" || hostname === "127.0.0.1") {
      return "http://localhost:3000/api";
    }

    // default fallback
    return "/api";
  }
  return "http://localhost:3000/api";
};

const API_BASE = getApiBaseUrl();
const SignUp = () => {

  const navigate = useNavigate();

  // -- Main Form State
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    dob: "",
    studyPreference: "Study in India",
  });

  const [step, setStep] = useState<1 | 2>(1);
  const [error, setError] = useState<React.ReactNode>(null);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [signupStep, setSignupStep] = useState<"manual" | "done">("manual");



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(null);

  };

  const handleStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
if (!form.email || !form.password || !form.confirmPassword) {
  setError("All fields are required.");
  return;
}
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    setStep(2);
  };

  const handleStep2 = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!form.name || !form.phone || !form.dob) {
      setError("Name, phone, and DOB are required.");
      return;
    }
    if (!/^\d{10,}$/.test(form.phone)) {
      setError("Phone must be at least 10 digits.");
      return;
    }
    if (isNaN(new Date(form.dob).getTime())) {
      setError("Please select a valid date of birth.");
      return;
    }
    try {
      const response = await fetch(`${API_BASE}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (!data.success) {
        if (data.message && data.message.includes("User with this email already exists")) {
          setError(
            <>
              {data.message}.&nbsp;
              <button
                className="btn btn-link p-0 align-baseline"
                style={{
                  color: "#164863",
                  fontWeight: 600,
                  textDecoration: "underline",
                  fontSize: "inherit"
                }}
                onClick={() => navigate("/sign-in")}
                type="button"
              >
                Login here
              </button>
            </>
          );
        } else {
          setError(data.message || "Signup failed.");
        }
      } else {

        setSignupStep("done");
        setForm({ name: "", email: "", password: "", confirmPassword: "", phone: "", dob: "" , studyPreference: "Study in India"});
        setTimeout(() => navigate("/sign-in"), 1500);
      }
    } catch {
      setError("Signup failed due to network/server error.");
    }
  };

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
        <div className="col-12 col-sm-9 col-md-7 col-lg-5 col-xl-4">
          <div
            className="card shadow border-0"
            style={{
              background: "rgba(255,255,255,0.35)",
              backdropFilter: "blur(22px)",
              WebkitBackdropFilter: "blur(22px)",
              borderRadius: 18,
              boxShadow: "0 8px 32px rgba(31, 38, 135, 0.22)",
              border: "1.5px solid rgba(255,255,255,0.23)",
            }}
          >
            <div className="card-body p-4">
              <h3 className="mb-3 text-center">Create your account</h3>
              {signupStep === "manual" && (
                <>
                  {step === 1 && (
                    <form className="mb-0" onSubmit={handleStep1} autoComplete="off">
                      <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Enter your email"
                          value={form.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <div className="input-group">
                          <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            className="form-control"
                            placeholder="Enter password"
                            value={form.password}
                            onChange={handleChange}
                            required
                          />
                          <button
                            type="button"
                            tabIndex={-1}
                            className="btn btn-outline-secondary"
                            onClick={() => setShowPassword((v) => !v)}
                            aria-label={showPassword ? "Hide password" : "Show password"}
                          >
                            <i className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                          </button>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Confirm Password</label>
                        <div className="input-group">
                          <input
                            type={showConfirm ? "text" : "password"}
                            name="confirmPassword"
                            className="form-control"
                            placeholder="Re-enter password"
                            value={form.confirmPassword}
                            onChange={handleChange}
                            required
                          />
                          <button
                            type="button"
                            tabIndex={-1}
                            className="btn btn-outline-secondary"
                            onClick={() => setShowConfirm((v) => !v)}
                            aria-label={showConfirm ? "Hide password" : "Show password"}
                          >
                            <i className={`fa ${showConfirm ? "fa-eye-slash" : "fa-eye"}`}></i>
                          </button>
                        </div>
                      </div>
                      {error && <div className="alert alert-danger py-2">{error}</div>}
                      <div className="d-flex justify-content-end mt-2">
                        <button
                          type="submit"
                          className="btn btn-link px-2"
                          style={{
                            textDecoration: 'none',
                            fontWeight: 600,
                            color: '#164863',
                          }}
                        >
                          Next &rarr;
                        </button>
                      </div>
                    </form>
                  )}
                  <div className="text-center text-black-50 mt-3" style={{ fontSize: ".97rem" }}>
                    Already have an account?
                    <a href="/sign-in" style={{ color: "#164863", marginLeft: 6, textDecoration: "underline" }}>Sign in</a>
                  </div>
                  {step === 2 && (
                    <form className="mb-0" onSubmit={handleStep2} autoComplete="off">
                      <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Enter your name"
                          value={form.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
  <label className="form-label">Study Preference</label>
  <select
    name="studyPreference"
    className="form-select"
    value={form.studyPreference}
    onChange={(e) =>
      setForm({ ...form, studyPreference: e.target.value })
    }
    required
  >
    <option value="">Select preference</option>
    <option value="Study in India">Study in India</option>
    <option value="Study Abroad">Study Abroad</option>
    <option value="Both">Both</option>
    <option value="Work">Work</option>
  </select>
</div>
                      <div className="mb-3">
                        <label className="form-label">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          className="form-control"
                          placeholder="Enter your phone number"
                          value={form.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Date of Birth</label>
                        <input
                          type="date"
                          name="dob"
                          className="form-control"
                          value={form.dob}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="mb-2" style={{ fontSize: ".97rem", color: "#184766" }}>
                        By joining MyStudyX I agree to{' '}
                        <Link
                          to="/terms"
                          style={{ color: "#198754", textDecoration: "underline" }}
                          className="text-decoration-underline"
                        >
                          Terms and Conditions
                        </Link>
                        {' '}and{' '}
                        <Link
                          to="/privacy"
                          style={{ color: "#198754", textDecoration: "underline" }}
                          className="text-decoration-underline"
                        >
                          Privacy Policy
                        </Link>
                      </div>

                      {error && <div className="alert alert-danger py-2">{error}</div>}
                      <button type="submit" className="btn btn-primary w-100 mt-2">
                        Create Acoount
                      </button>
                      <button
                        type="button"
                        className="btn btn-link w-100 mt-2"
                        onClick={() => setStep(1)}
                      >
                        &laquo; Back
                      </button>
                    </form>
                  )}
      
             

                </>
              )}
              {signupStep === "done" && (
                <div className="text-center">
                  <div className="alert alert-success mt-3">
                    Signup successful! You can now <a href="/sign-in" className="fw-bold">login</a>.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SignUp;


