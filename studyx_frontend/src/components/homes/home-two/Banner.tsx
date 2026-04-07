// import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";

// const brands: string[] = [
//   "/assets/img/banner/sponsor1.png",
//   "/assets/img/banner/sponsor2.png",
//   "/assets/img/banner/sponsor3.png",
//   "/assets/img/banner/sponsor4.png",
//   "/assets/img/banner/sponsor5.png",
//   "/assets/img/banner/sponsor3.png",
// ];

// const setting = {
//   spaceBetween: 30,
//   speed: 1500,
//   loop: true,
//   autoplay: {
//     delay: 1000,
//     disableOnInteraction: false,
//   },
//   breakpoints: {
//     1199: {
//       slidesPerView: 5,
//     },
//     767: {
//       slidesPerView: 5,
//     },
//     575: {
//       slidesPerView: 4,
//     },
//     0: {
//       slidesPerView: 2,
//     },
//   },
// };

// const Banner = () => {
//   return (
//     <div
//       className="banner-section position-relative fix style2"
//       style={{ marginTop: "50px" }} // push banner down
//     >
//       <div className="container position-relative">
//         <div className="banner-content2">
//           <h1
//             className="mb-4 pb-2 text-white wow fadeInDown"
//             data-wow-delay=".2s"
//           >
//             Explore Courses Across <br />
//             <span className="fw-300"> Top Universities</span>
//           </h1>
//           <Link
//             to="/courses"
//             className="theme-btn style3 pe-20 wow fadeInDown"
//             data-wow-delay=".3s"
//           >
//             <i className="fa-solid fa-arrow-right w-36 h-36 bg-white rounded-circle d-center fz-14 theme-clr4"></i>
//             Get Started Today
//           </Link>
//         </div>

//         {/* collapse-thumb2 image removed */}
//       </div>

//       <div className="sponsor-section style1">
//         <div className="container">
//           <div className="row g-2">
//             <div className="col-lg-10">
//               <Swiper
//                 {...setting}
//                 modules={[Autoplay]}
//                 className="sponsor-wrapper swiper"
//               >
//                 {brands.map((i) => (
//                   <SwiperSlide key={i} className="swiper-slide">
//                     {/* <div className="sponsor-item">
//                       <img src={i} alt="img" />
//                     </div> */}
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Button } from "react-bootstrap";

const brands: string[] = [
  "/assets/img/banner/sponsor1.png",
  "/assets/img/banner/sponsor2.png",
  "/assets/img/banner/sponsor3.png",
  "/assets/img/banner/sponsor4.png",
  "/assets/img/banner/sponsor5.png",
];

const setting = {
  spaceBetween: 30,
  speed: 1500,
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  breakpoints: {
    1199: { slidesPerView: 5 },
    767: { slidesPerView: 5 },
    575: { slidesPerView: 4 },
    0: { slidesPerView: 2 },
  },
};

const Banner = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!search.trim()) return;
    navigate(`/courses?search=${encodeURIComponent(search.trim())}`);
  };

  return (
    <div
      className="banner-section position-relative fix style2"
      style={{ marginTop: "50px" }}
    >
      <div className="container position-relative">
        <div className="banner-content2">
          <h1 className="mb-4 pb-2 text-white">
            Explore Courses Across <br />
            <span className="fw-300"> Top Universities</span>
          </h1>

          {/* 🔍 SEARCH BAR (REPLACES GET STARTED TODAY) */}
   <form
  onSubmit={handleSearch}
  className="d-flex align-items-center bg-white rounded-pill shadow w-100"
  style={{ maxWidth: 650, padding: "6px" }}
>
  <input
    type="text"
    className="form-control border-0 shadow-none flex-grow-1"
    placeholder="Search by course title "
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    autoComplete="off"
    style={{
      borderRadius: "999px",
      paddingLeft: "clamp(12px, 3vw, 18px)",
      paddingRight: "clamp(8px, 2vw, 12px)",
      fontSize: "clamp(0.85rem, 2.5vw, 1rem)",
    }}
  />

  <Button
    type="submit"
    variant="success"
    className="rounded-pill"
    style={{
      fontWeight: 600,
      padding: "clamp(6px, 2vw, 10px) clamp(14px, 4vw, 28px)",
      fontSize: "clamp(0.8rem, 2.5vw, 0.95rem)",
      whiteSpace: "nowrap",
    }}
  >
    Search
  </Button>
</form>


        </div>
      </div>

      {/* Sponsors */}
      <div className="sponsor-section style1">
        <div className="container">
          <Swiper {...setting} modules={[Autoplay]}>
            {brands.map((img) => (
              <SwiperSlide key={img} />
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;
