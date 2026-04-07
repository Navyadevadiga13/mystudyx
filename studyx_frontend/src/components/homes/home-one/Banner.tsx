import { useState } from "react";
import { Link } from "react-router-dom"
import VideoPopup from "../../../modals/VideoPopup";

const Banner = () => {

   const [isVideoOpen, setIsVideoOpen] = useState(false);

   return (
      <>
         <div className="banner-section style1">
            <div className="container position-relative">
               <div className="banner-content">
                  <h1>
                     Finance Made <br />
                     <span className="fw-normal">Simple & Strategic</span>
                  </h1>
               </div>
               <div className="hero-1-video mt-md-0 mt-4">
                  <div
                     className="d-flex justify-content-center justify-content-md-start align-items-center gap-xl-4 gap-3 mb-xxl-4 mb-3">
                     <a onClick={() => setIsVideoOpen(true)} style={{ cursor: "pointer" }}
                        className="video-popup rounded-circle d-center fz-20 theme-clr4 w-64 h-64 border bg-white rounded">
                        <i className="fa-solid fa-play"></i>
                     </a>
                     <span className="theme-clr4 fz-15 italic lh-110 fw-600 d-block">Check <br /> Intro Video</span>
                  </div>
                  <Link to="/pricing-plan" className="theme-btn style1 pe-20">
                     <i className="fa-solid fa-arrow-right w-36 h-36 bg-white rounded-circle d-center fz-14 theme-clr4"></i>
                     Free Consultation
                  </Link>
               </div>
               <div className="hero-thumb1">
                  <img src="/assets/img/banner/hero-thumb1.png" alt="img" />
               </div>
               <div className="hero-right-card position-absolute">
                  <img src="/assets/img/banner/right-card.png" alt="img" className="thumb-big" />
                  <img src="/assets/img/banner/groth.png" alt="img" className="groth-card" />
                  <Link to="/" className="w-60 h-60 hover-svg bg-white rounded-circle d-center">
                     <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_16_2193)">
                           <path
                              d="M11.6699 21.821L11.7996 21.821C13.9445 18.9709 16.6612 16.1736 19.2531 13.9747L19.1485 13.8449C16.505 15.544 14.389 17.6371 11.8525 20.0932C11.8789 13.5301 12.1661 5.10823 12.4281 0.192561L11.0414 0.192561C11.3034 5.10944 11.617 13.5301 11.6422 20.0956C9.13212 17.7152 6.98609 15.5704 4.31978 13.8473L4.21524 13.9771C6.83109 16.0931 9.52504 18.9709 11.6699 21.821Z"
                              fill="#1C4B42" />
                        </g>
                        <defs>
                           <clipPath id="clip0_16_2193">
                              <rect width="21.6285" height="21.6285" fill="white"
                                 transform="translate(22.5488 21.8212) rotate(-180)" />
                           </clipPath>
                        </defs>
                     </svg>
                  </Link>
               </div>
               <img src="/assets/img/banner/percentage-card.png" alt="img" className="percentage-card" />
            </div>
         </div>
         <VideoPopup
            isVideoOpen={isVideoOpen}
            setIsVideoOpen={setIsVideoOpen}
            videoId="eEzD-Y97ges"
         />
      </>
   )
}

export default Banner
