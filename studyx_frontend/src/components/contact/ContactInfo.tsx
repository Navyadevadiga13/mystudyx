

const ContactInfo = () => {
  return (
    <section className="contact-mail-section section-bg pt-100 pb-4">
      <div className="container">
        <div className="row justify-content-center g-lg-4 g-md-3 g-2 align-items-end mb-40">
          <div className="col-lg-7 col-md-7">
            <div className="section-header text-center">
              <h2 className="theme-clr4 fw-bold wow fadeInUp" data-wow-delay=".3s">
                Let’s
                <span className="fw-300"> Start <br /> the Conversation!</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row g-3">
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="contact-mail-items text-center bg-white rounded shadow-sm h-100 p-3 mb-3">
              <div className="theme-bg d-center rounded-circle mx-auto mb-2" style={{ width: 56, height: 56 }}>
                {/* PHONE SVG */}
                <svg width="24" height="24" viewBox="0 0 19 18" fill="none">
                  <path d="M18.667 13.42V16.9561C18.667 17.4811 18.2611 17.9167 17.7375 17.9537C17.3001 17.9846 16.9433 18 16.667 18C7.83039 18 0.666992 10.8366 0.666992 2C0.666992 1.72371 0.682442 1.36687 0.713342 0.9295C0.750362 0.40588 1.18593 0 1.71085 0H5.24709C5.50377 0 5.71875 0.19442 5.74452 0.4498C5.76766 0.67907 5.78917 0.86314 5.80906 1.00202C6.01134 2.41472 6.42452 3.75936 7.01569 5.00303C7.11058 5.20265 7.0487 5.44159 6.86884 5.57006L4.71054 7.1118C6.02451 10.1811 8.48589 12.6425 11.5552 13.9565L13.0941 11.8019C13.2242 11.6199 13.466 11.5573 13.668 11.6532C14.9116 12.2439 16.2561 12.6566 17.6686 12.8584C17.8066 12.8782 17.9895 12.8995 18.2172 12.9225C18.4726 12.9483 18.667 13.1633 18.667 13.42Z" fill="#1C4B42" />
                </svg>
              </div>
              <span className="theme-clr4 d-block mb-1">Phone Number</span>
              <h5 className="mb-0 mt-2">
                <a href="tel:+918169600408" className="fw-bold theme-clr4 d-block" style={{ wordBreak: 'break-all' }}>
                  +91 8169 600 408
                </a>
              </h5>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="contact-mail-items text-center bg-white rounded shadow-sm h-100 p-3 mb-3">
              <div className="theme-bg d-center rounded-circle mx-auto mb-2" style={{ width: 56, height: 56 }}>
                {/* EMAIL SVG */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M2.24283 6.8543L11.4895 1.30855C11.8062 1.1186 12.2019 1.11867 12.5185 1.30873L21.7573 6.85428C21.9079 6.94465 22 7.10738 22 7.28298V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V7.2831C2 7.10743 2.09218 6.94466 2.24283 6.8543ZM18.3456 8.24378L12.0606 13.6829L5.64722 8.23764L4.35278 9.76225L12.0731 16.3171L19.6544 9.7561L18.3456 8.24378Z" fill="#1C4B42" />
                </svg>
              </div>
              <span className="theme-clr4 d-block mb-1">Email address</span>
              <h5 className="mb-0 mt-2">
                <a href="mailto:hello@wizx.org" className="fw-bold theme-clr4 d-block" style={{ wordBreak: 'break-all' }}>
                  hello@wizx.org
                </a>
              </h5>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="contact-mail-items text-center bg-white rounded shadow-sm h-100 p-3 mb-3">
              <div className="theme-bg d-center rounded-circle mx-auto mb-2" style={{ width: 56, height: 56 }}>
                {/* TIME SVG */}
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none">
                  <path d="M7.33398 1V3H3.33398C2.7817 3 2.33398 3.44772 2.33398 4V20C2.33398 20.5523 2.7817 21 3.33398 21H11.0886C9.9907 19.6304 9.33398 17.8919 9.33398 16C9.33398 11.5817 12.9157 8 17.334 8C19.2259 8 20.9644 8.65672 22.334 9.75463V4C22.334 3.44772 21.8863 3 21.334 3H17.334V1H15.334V3H9.33398V1H7.33398ZM23.334 16C23.334 19.3137 20.6477 22 17.334 22C14.0203 22 11.334 19.3137 11.334 16C11.334 12.6863 14.0203 10 17.334 10C20.6477 10 23.334 12.6863 23.334 16ZM16.334 12V16.4142L18.6269 18.7071L20.0411 17.2929L18.334 15.5858V12H16.334Z" fill="#1C4B42" />
                </svg>
              </div>
              <span className="theme-clr4 d-block mb-1">Working hours</span>
              <h5 className="mb-0 mt-2">
                <span className="fw-bold theme-clr4 d-block">
                  10:30 AM – 5:30 PM
                </span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
