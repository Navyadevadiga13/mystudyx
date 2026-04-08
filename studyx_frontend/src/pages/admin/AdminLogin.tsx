// import React, { useState } from 'react';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// // If using Bootstrap Icons, import: import 'bootstrap-icons/font/bootstrap-icons.css';
// const getApiBaseUrl = () => {
//   if (typeof window !== "undefined") {
//     const hostname = window.location.hostname;

//     // production: mystudyx.io via Nginx proxy
//     if (hostname === "mystudyx.io" || hostname === "www.mystudyx.io") {
//       return "/api";
//     }

//     // direct IP access (optional)
//     if (hostname === "168.231.103.88") {
//       return "http://168.231.103.88:3000/api";
//     }

//     // local development
//     if (hostname === "localhost" || hostname === "127.0.0.1") {
//       return "http://localhost:3000/api";
//     }

//     // default fallback
//     return "/api";
//   }
//   return "http://localhost:3000/api";
// };

// const API_BASE = getApiBaseUrl();
// const AdminLogin: React.FC = () => {
//   const [adminName, setAdminName] = useState('');
//   const [adminPassword, setAdminPassword] = useState('');
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();
//   const mainGreen = '#21b573';

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const response = await axios.post(`${API_BASE}/login_admin`, {
//         admin_name: adminName,
//         admin_password: adminPassword,
//       });
//       if (response.data.success && response.data.token) {
//         localStorage.setItem('adminToken', response.data.token);
//         toast.success('Login successful');
//         navigate('/admin_dashboard');
//       } else {
//         toast.error(response.data.message || 'Login failed');
//       }
//     } catch (error: any) {
//       toast.error(error.response?.data?.message || 'Login error');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div
//       className="min-vh-100 d-flex align-items-center justify-content-center"
//       style={{
//         background: 'linear-gradient(120deg,#23272e 0%, #223a34 100%)',
//         fontFamily: 'Poppins, Segoe UI, sans-serif'
//       }}
//     >
//       <div
//         className="shadow-lg rounded-4 p-4"
//         style={{
//           width: '100%',
//           maxWidth: 400,
//           background: 'rgba(40,40,45,0.92)',
//           backdropFilter: 'blur(16px)',
//           boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.27)',
//           border: '1px solid rgba(255,255,255,0.10)'
//         }}
//       >
//         <div className="text-center mb-4">
//           {/* Decorative key icon with fade-in animation */}
//           <div
//             className="mx-auto mb-3 d-flex align-items-center justify-content-center"
//             style={{ width: 'auto', height: 'auto' }}
//           >
//             <i
//               className="bi bi-key-fill"
//               style={{
//                 fontSize: 32,
//                 color: mainGreen,
//                 opacity: 0.93,
//                 transition: 'opacity 0.3s'
//               }}
//             ></i>
//           </div>
//           <h2 style={{ color: 'white', fontWeight: 700, fontFamily: 'Poppins', letterSpacing: 1 }}>
//             Admin Login
//           </h2>
//           <hr style={{
//             border: 'none',
//             borderTop: `2px solid ${mainGreen}`,
//             width: 40,
//             margin: '12px auto 4px'
//           }} />
//           <div className="text-muted mb-1" style={{ fontSize: 14 }}>
//             Sign in with your credentials
//           </div>
//         </div>
//         <form onSubmit={handleLogin}>
//           <div className="mb-3">
//             <label htmlFor="adminName" className="form-label" style={{ color: '#fff', fontWeight: 600 }}>Username</label>
//             <input
//               type="text"
//               className="form-control"
//               id="adminName"
//               style={{
//                 backgroundColor: '#32343c',
//                 color: '#fff',
//                 fontFamily: 'inherit',
//                 border: '1px solid #444',
//                 borderRadius: 12
//               }}
//               placeholder="Enter your username"
//               value={adminName}
//               onChange={e => setAdminName(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="adminPassword" className="form-label" style={{ color: '#fff', fontWeight: 600 }}>
//               Password
//             </label>
//             <input
//               type="password"
//               className="form-control"
//               id="adminPassword"
//               style={{
//                 backgroundColor: '#32343c',
//                 color: '#fff',
//                 fontFamily: 'inherit',
//                 border: '1px solid #444',
//                 borderRadius: 12
//               }}
//               placeholder="Enter your password"
//               value={adminPassword}
//               onChange={e => setAdminPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-100 btn py-2 fw-semibold"
//             style={{
//               fontSize: 18,
//               borderRadius: 12,
//               background: mainGreen,
//               color: '#232323',
//               letterSpacing: 1,
//               boxShadow: '0 2px 8px rgba(33,181,115,0.2)'
//             }}
//           >
//             {loading ? 'Signing in...' : 'Sign In'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;



import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const getApiBaseUrl = () => {
  if (typeof window !== "undefined") {
    const hostname = window.location.hostname;
    if (hostname === "mystudyx.io" || hostname === "www.mystudyx.io") return "/api";
    if (hostname === "168.231.103.88") return "http://168.231.103.88:3000/api";
    if (hostname === "localhost" || hostname === "127.0.0.1") return "http://localhost:3000/api";
    return "/api";
  }
  return "http://localhost:3000/api";
};

const API_BASE = getApiBaseUrl();

const AdminLogin: React.FC = () => {
  const [adminName, setAdminName] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const navigate = useNavigate();
  const mainGreen = '#21b573';

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${API_BASE}/login_admin`, {
        admin_name: adminName,
        admin_password: adminPassword,
      });
      if (response.data.success && response.data.token) {
        localStorage.setItem('adminToken', response.data.token);
        toast.success('Login successful');
        navigate('/admin_dashboard');
      } else {
        toast.error(response.data.message || 'Login failed');
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Login error');
    } finally {
      setLoading(false);
    }
  };

  // Background Animation
  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
      }
      move() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(33,181,115,0.8)';
        ctx.fill();
      }
    }

    const particles: Particle[] = [];
    for (let i = 0; i < 60; i++) particles.push(new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(33,181,115,${1 - dist / 120})`;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach(p => {
        p.move();
        p.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);

  }, []);

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#1c2025',
      }}
    >
      <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0 }} />

      {/* 🔥 Smaller Login Box */}
      <div
        className="shadow-lg rounded-4 p-3"
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: 320,
          background: 'rgba(25,25,30,0.92)',
          backdropFilter: 'blur(10px)',

          border: '2px solid transparent',
          borderImage: 'linear-gradient(120deg, #21b573, #00f3ff)',
          borderImageSlice: 1,

          boxShadow: '0 0 20px rgba(33,181,115,0.3)'
        }}
      >
        <div className="text-center mb-3">
          <i className="bi bi-key-fill" style={{ fontSize: 24, color: mainGreen }}></i>

          <h3 style={{ color: 'green', fontWeight: 600, marginTop: 10 }}>
            Admin Login
          </h3>

          <hr style={{
            borderTop: `2px solid ${mainGreen}`,
            width: 30,
            margin: '10px auto'
          }} />
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-2">
            <label style={{ color: '#fff', fontSize: 13 }}>Username</label>
            <input
              type="text"
              className="form-control"
              value={adminName}
              onChange={e => setAdminName(e.target.value)}
              style={{ borderRadius: 8, fontSize: 13 }}
              required
            />
          </div>

          <div className="mb-3">
            <label style={{ color: '#fff', fontSize: 13 }}>Password</label>
            <input
              type="password"
              className="form-control"
              value={adminPassword}
              onChange={e => setAdminPassword(e.target.value)}
              style={{ borderRadius: 8, fontSize: 13 }}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-100 btn"
            style={{
              background: mainGreen,
              fontSize: 14,
              padding: '8px',
              borderRadius: 8
            }}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
