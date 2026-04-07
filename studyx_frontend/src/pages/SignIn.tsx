import {  useState } from "react";
import InnerHeader from "../layouts/headers/InnerHeader";
import Wrapper from "../layouts/Wrapper";

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
const API_URL = `${API_BASE}/signin`;

const bgImg = "/assets/img/team/SignUp.png";


const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);


const [showPassword, setShowPassword] = useState(false);

  // Google Login Integration
  // Google Login Integration



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      setLoading(false);

      if (!data.success) {
        setError(data.message || "Signin failed");
      } else if (data.token) {
        localStorage.setItem("token", data.token);
        window.location.href = "/courses";
      }
    } catch {
      setLoading(false);
      setError("Network error");
    }
  };

  return (
    <Wrapper>
      <InnerHeader title="" />
      {/* Background overlay for glass effect */}
      <div
        className="d-flex align-items-center justify-content-center"
        style={{
          background: `url(${bgImg}) center center / cover no-repeat fixed`,
          minHeight: "100vh",
          width: "100vw",
          position: "fixed",
          left: 0,
          top: 0,
          zIndex: 0,
        }}
      />
      {/* Responsive glassy card positioned a little up */}
      <div
        className="container d-flex flex-column align-items-center mt-7"
        style={{
          minHeight: "100vh",
          zIndex: 1,
          position: "relative",
          marginTop: "90px"
        }}
      >
        <div className="col-12 col-sm-9 col-md-7 col-lg-5 col-xl-4">
          <div
            className="card shadow border-0 p-4"
            style={{
              background: "rgba(255,255,255,0.35)",
              backdropFilter: "blur(22px)",
              WebkitBackdropFilter: "blur(22px)",
              borderRadius: 18,
              boxShadow: "0 8px 32px rgba(31, 38, 135, 0.22)",
              border: "1.5px solid rgba(255,255,255,0.23)",
            }}
          >
            <h3 className="mb-3 text-center">Sign In to Your Account</h3>
            <form onSubmit={handleSubmit} autoComplete="off">
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
                  autoFocus
                />
              </div>
         <div className="mb-3">
  <label className="form-label">Password</label>
  <div className="input-group">
    <input
      type={showPassword ? "text" : "password"}
      name="password"
      className="form-control"
      placeholder="Enter your password"
      value={form.password}
      onChange={handleChange}
      required
    />
    <button
      type="button"
      className="btn btn-outline-secondary"
      onClick={() => setShowPassword(!showPassword)}
    >
      <i className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
    </button>
  </div>
</div>
              {error && <div className="alert alert-danger py-2">{error}</div>}
              <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                {loading ? "Signing in..." : "Sign In"}
              </button>
            </form>
          
         
            <div className="text-center text-black-50 mt-3" style={{ fontSize: ".97rem" }}>
              Don't have an account?
              <a href="/sign-up" style={{ color: "#164863", marginLeft: 6, textDecoration: "underline" }}>
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SignIn;
