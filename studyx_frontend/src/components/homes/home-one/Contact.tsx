import HomeContactForm from "../../forms/HomeContactForm"

const Contact = () => {
   return (
      <section className="contact-section section-bg pt-100 pb-100">
         <div className="container">
            <div className="row g-0">
               <div className="col-lg-6">
                  <div className="contact-thumb1 w-100 h-100 img-custom-anim-right">
                     <img src="/assets/img/contact/contact-thumb1.png" alt="img" className="rounded-4 w-100" />
                     {/* <div className="cont d-flex justify-content-between align-items-center gap-xxl-5 gap-xl-4 gap-3 wow fadeInUp"
                        data-wow-delay=".4s">
                        <div className="">
                           <span className="fz-14 theme-clr4 d-block">Phone Number</span>
                           <h6 className="theme-clr4">+91 8169 600 408</h6>
                        </div>
                        <div className="">
                           <span className="fz-14 theme-clr4 d-block">Email Address</span>
                           <h6 className="theme-clr4">hello@wizx.org</h6>
                        </div>
                     </div> */}
                  </div>
               </div>
               <div className="col-lg-6">
                  <HomeContactForm />
               </div>
            </div>
         </div>
      </section>
   )
}

export default Contact
