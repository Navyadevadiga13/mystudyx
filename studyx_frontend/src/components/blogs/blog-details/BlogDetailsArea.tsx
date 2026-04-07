import Comment from "./Comment"
import BlogForm from "../../forms/BlogForm"

const BlogDetailsArea = () => {
   return (
      <section className="blog-details-section section-bg pt-100 pb-100">
         <div className="container">
            <div className="row g-sm-4 g-3 justify-content-center align-items-end">
               <div className="col-lg-9">
                  <div className="blog-details-thumb rounded-4 w-100 mb-40 position-relative wow fadeInUp"
                     data-wow-delay=".4s">
                     <img src="/assets/img/blog/blog-details-big1.png" alt="img" className="w-100 rounded-4" />
                     <div className="social-icon blog-details-social d-flex align-items-center">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                           <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                           <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                           <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                           <i className="fa-brands fa-pinterest-p"></i>
                        </a>
                     </div>
                  </div>
                  <h3 className="theme-clr4 mb-3 fz-36 wow fadeInUp" data-wow-delay=".2s">5 financial planning mistakes
                     small business owners must to avoid</h3>
                  <div className="d-flex align-items-center gap-3 fz-14 mb-40 wow fadeInUp" data-wow-delay=".4s">
                     <span className="fw-600 theme-clr4">Danial</span> / 01 May 2025
                  </div>
                  <p className="theme-clr4 mb-xl-3 mb-2 wow fadeInUp" data-wow-delay=".6s">
                     While the lovely valley teems with vapour around me, and the meridian sun strikes the upper
                     surface of the impenetrable
                     foliage of my trees
                  </p>
                  <p className="theme-clr4 mb-40 wow fadeInUp" data-wow-delay=".5s">
                     A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring
                     which I enjoy with my
                     whole heart. I am alone, and feel the charm of existence in this spot, which was created for the
                     bliss of souls like
                     mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil
                     existence, that I neglect my
                     talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel
                     that I never was a
                     greater artist than now. When, while the lovely valley teems with vapour around me, and the
                     meridian sun strikes the
                     upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the
                     inner sanctuary, I
                     throw myself down among the tall grass by the trickling stream; and, as I lie close to the
                     earth, a thousand unknown
                     plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow
                     familiar with the
                     countless indescribable forms of the insects and flies, then I feel the presence of the
                     Almighty, who formed us in his
                     own image, and the breath
                  </p>
                  <div className="mb-lg-5 mb-4 quote-box d-flex gap-xxl-4 gap-xl-3 gap-2 wow fadeInUp"
                     data-wow-delay=".3s">
                     <img width="70" height="50" src="/assets/img/blog/quoe-blog.png" alt="img" />
                     <div>
                        <h3 className="italic fw-500 mb-sm-2 mb-1">A wonderful serenity has taken possession of my
                           entire soul, like these sweet mornings of spring which</h3>
                        <span className="theme-clr4"> - Jhon danial</span>
                     </div>
                  </div>
                  <div className="d-flex align-items-center gap-xl-4 gap-sm-3 gap-2 mb-lg-5 mb-4">
                     <div className="w-100">
                        <img src="/assets/img/blog/blog-details-middle1.png" alt="img"
                           className="rounded-4 w-100 wow fadeInDown" data-wow-delay=".4s" />
                     </div>
                     <div className="w-100">
                        <img src="/assets/img/blog/blog-details-middle2.png" alt="img"
                           className="rounded-4 w-100 wow fadeInDown" data-wow-delay=".6s" />
                     </div>
                  </div>
                  <div className="d-flex post-viewer align-items-center justify-content-between flex-md-nowrap flex-wrap gap-3 mb-lg-5 mb-4">
                     <div>
                        <span className="text-uppercase theme-clr4 fz-12 d-block">Previous post</span>
                        <h5 className="theme-clr4">Describable forms of the insects</h5>
                     </div>
                     <div className="text-md-end">
                        <span className="text-uppercase theme-clr4 fz-12 d-block">Next post</span>
                        <h5 className="theme-clr4">Noticed by me when hear buzz</h5>
                     </div>
                  </div>
                  <Comment />
                  <div className="contact-content1 leave-comment mt-lg-5 mt-4">
                     <div className="section-header mb-xxl-4 mb-4 pb-lg-2">
                        <h3 className="theme-clr4 fw-bold wow fadeInUp">
                           Leave a comment
                        </h3>
                     </div>
                     <BlogForm />
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default BlogDetailsArea
