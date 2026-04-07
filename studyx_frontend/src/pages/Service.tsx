import React, { useEffect, useState } from "react";
import InnerHeader from "../layouts/headers/InnerHeader";
import Wrapper from "../layouts/Wrapper";
import FooterTwo from "../layouts/footers/FooterTwo";
import {
  FaBriefcase,
  FaGraduationCap,
  FaRocket,
  FaGlobe,
  FaExternalLinkAlt,
} from "react-icons/fa";

/* ---------- TYPES ---------- */
interface Platform {
  id: string;
  name: string;
  stat: string;
  stats: string[];
  bestFor: string;
  value: string;
  desc: string;
  highlights: string[];
  url: string;
  icon: React.ReactNode;
  image: string;
}

/* ---------- CONSTANTS ---------- */
const SIDEBAR_WIDTH = 260;
const NAVBAR_HEIGHT = 100;
const GREEN = "#16a34a";
const GREEN_DARK = "#14532d";
const GREEN_LIGHT = "#dcfce7";

/* ---------- DATA ---------- */
const platforms: Platform[] = [
  {
    id: "mystudyx",
    name: "MyStudyX",
    stat: "300,000+ Courses",
    stats: ["Universities", "Degrees", "Study Abroad"],
    bestFor: "Higher Education Planners",
    value: "Make informed academic decisions",
    desc:
      "MyStudyX helps students explore courses, universities and global education pathways with structured comparisons and reliable academic data.",
    highlights: [
      "Compare universities",
      "Explore global destinations",
      "Data-backed decisions",
    ],
    url: "https://mystudyx.io/courses",
    icon: <FaGlobe />,
    image:
      "https://theredpen.in/wp-content/uploads/2023/05/different-nationalities-university-graduates-min-scaled-1.jpg",
  },
  {
    id: "internx",
    name: "InternX",
    stat: "22,000+ Internships",
    stats: ["All Domains", "Verified Companies", "Paid & Remote"],
    bestFor: "Students & Fresh Graduates",
    value: "Gain real industry exposure before graduation",
    desc:
      "InternX connects students with verified internships across technology, business, marketing, finance, HR and design.",
    highlights: [
      "Only verified hiring partners",
      "Paid, remote & on-site roles",
      "Career-ready exposure",
    ],
    url: "https://internx.io",
    icon: <FaBriefcase />,
    image:
      "https://group.mercedes-benz.com/bilder/karriere/studenten/situative-bildwelt/praktikum-w1680xh945-cutout.jpg",
  },
  {
    id: "scholarx",
    name: "ScholarX",
    stat: "3,000+ Scholarships",
    stats: ["Government", "University", "Worldwide"],
    bestFor: "Students Seeking Financial Support",
    value: "Reduce education costs with trusted funding",
    desc:
      "ScholarX provides access to verified government and university scholarships.",
    highlights: [
      "Verified funding sources",
      "Merit & need-based options",
      "Domestic & international coverage",
    ],
    url: "https://scholarx.io",
    icon: <FaGraduationCap />,
    image:
      "https://www.uudoon.in/about/images/scholarships/merit3.jpg",
  },
  {
    id: "skilledx",
    name: "SkilledX",
    stat: "Career Certification Courses",
    stats: ["Structured Learning", "Industry Aligned", "Certified"],
    bestFor: "Students & Working Professionals",
    value: "Build strong foundational and career skills",
    desc:
      "SkilledX offers instructor-designed certification courses.",
    highlights: [
      "Well-structured curriculum",
      "Industry-relevant skills",
      "Recognized certification",
    ],
    url: "https://skilledx.io",
    icon: <FaRocket />,
    image:
      "https://s44783.pcdn.co/in/wp-content/uploads/sites/3/2022/10/Technical-Skills_How-to-Them-Master-in-2022.jpg.optimal.jpg",
  },
];

/* ---------- COMPONENT ---------- */
const Service: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth < 900);
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Wrapper>
      {/* FIXED NAVBAR (COVERS SIDEBAR TOP) */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: NAVBAR_HEIGHT,
          zIndex: 1000,
          background: "#ffffff",
        }}
      >
        <InnerHeader />
      </div>

      <section
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          background: "#f8fafc",
          minHeight: "100vh",
        }}
      >
        {/* SIDEBAR */}
        <aside
          style={{
            position: isMobile ? "relative" : "fixed",
            top: isMobile ? NAVBAR_HEIGHT : 0,
            left: 0,
            width: isMobile ? "100%" : SIDEBAR_WIDTH,
            height: isMobile ? "auto" : "100vh",
            padding: isMobile
              ? "20px"
              : `120px 20px 24px`,
            background: "#ffffff",
            borderRight: !isMobile ? "1px solid #e5e7eb" : undefined,
            display: "flex",
            flexDirection: isMobile ? "row" : "column",
            flexWrap: "wrap",
            gap: 16,
            zIndex: 1,
          }}
        >
          {!isMobile && (
            <div
              style={{
                width: "100%",
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "0.12em",
                color: GREEN_DARK,
                textTransform: "uppercase",
                marginBottom: 24,
              }}
            >
              Our Platforms
            </div>
          )}

          {platforms.map((p) => (
            <div
              key={p.id}
              onClick={() => scrollToSection(p.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "14px 18px",
                borderRadius: 12,
                background: "#f9fafb",
                cursor: "pointer",
                border: "1px solid #eef2f7",
                boxSizing: "border-box",
                width: isMobile ? "48%" : "100%",
              }}
            >
              <span style={{ color: GREEN, fontSize: 18 }}>{p.icon}</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14 }}>{p.name}</div>
                {!isMobile && (
                  <div style={{ fontSize: 12, color: "#6b7280" }}>
                    {p.stat}
                  </div>
                )}
              </div>
            </div>
          ))}
        </aside>

        {/* MAIN CONTENT */}
        <main
          style={{
            marginLeft: isMobile ? 0 : SIDEBAR_WIDTH,
            marginTop: NAVBAR_HEIGHT,
            padding: isMobile ? "24px 16px" : "40px 40px",
            display: "flex",
            flexDirection: "column",
            gap: 60,
            width: "100%",
          }}
        >
          {platforms.map((p) => (
            <section
              key={p.id}
              id={p.id}
              style={{
                maxWidth: 1100,
                margin: "0 auto",
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                gap: 32,
                padding: isMobile ? 20 : 56,
                background: "#ffffff",
                borderRadius: 24,
                border: "1px solid #e5e7eb",
              }}
            >
              {/* IMAGE */}
              <div style={{ position: "relative", borderRadius: 18, overflow: "hidden" }}>
                <img
                  src={p.image}
                  alt={p.name}
                  style={{
                    width: "100%",
                    height: isMobile ? 220 : "100%",
                    objectFit: "cover",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    padding: 16,
                    color: "#ffffff",
                    background:
                      "linear-gradient(180deg,transparent,rgba(0,0,0,.65))",
                    width: "100%",
                  }}
                >
                  <div style={{ fontSize: 12 }}>Best for</div>
                  <div style={{ fontWeight: 700 }}>{p.bestFor}</div>
                  <div style={{ fontSize: 14 }}>{p.value}</div>
                </div>
              </div>

              {/* TEXT */}
              <div>
                <h2 style={{ fontSize: isMobile ? 24 : 36, fontWeight: 900 }}>
                  {p.name}
                </h2>

                <div style={{ color: GREEN, fontWeight: 700, marginBottom: 18 }}>
                  {p.stat}
                </div>

                <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 20 }}>
                  {p.stats.map((s, i) => (
                    <span
                      key={i}
                      style={{
                        background: GREEN_LIGHT,
                        color: GREEN_DARK,
                        padding: "6px 12px",
                        borderRadius: 999,
                        fontSize: 12,
                        fontWeight: 700,
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <p style={{ fontSize: 15, lineHeight: 1.6 }}>{p.desc}</p>

                <ul style={{ listStyle: "none", padding: 0, marginTop: 20 }}>
                  {p.highlights.map((h, i) => (
                    <li key={i} style={{ marginBottom: 8 }}>
                      <span style={{ color: GREEN, marginRight: 8 }}>✔</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => window.open(p.url, "_blank")}
                  style={{
                    marginTop: 24,
                    padding: "12px 24px",
                    background: GREEN,
                    color: "#fff",
                    borderRadius: 12,
                    border: "none",
                    fontWeight: 700,
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  Visit {p.name}
                  <FaExternalLinkAlt size={14} />
                </button>
              </div>
            </section>
          ))}
        </main>
      </section>

      <FooterTwo />
    </Wrapper>
  );
};

export default Service;
