const BlogForm = () => {

   return (
      <div className="row g-4">
         <div className="col-md-6">
            <div className="form__grp">
               <input className="form-control w-100" type="text" placeholder="Full Name *" />
            </div>
         </div>
         <div className="col-md-6">
            <div className="form__grp">
               <input className="form-control w-100" type="email" placeholder="Full Email *" />
            </div>
         </div>
         <div className="col-md-12">
            <div className="form__grp">
               <textarea className="form-control w-100" name="#" placeholder="Your comment *"
                  rows={4}></textarea>
            </div>
         </div>
         <div className="col-md-12">
            <div className="form-check d-flex align-content-center gap-2">
               <input className="form-check-input" type="checkbox" value="" id="checkDefault" />
               <label className="form-check-label theme-clr4 fz-14" htmlFor="checkDefault">
                  Save my name and email in this browser for the next time I comment.
               </label>
            </div>
         </div>
         <div className="col-md-6">
            <div className="form__grp wow fadeInUp" data-wow-delay=".3s">
               <button type="button" className="theme-btn style1 pe-20">
                  <i
                     className="fa-solid fa-arrow-right w-36 h-36 bg-white rounded-circle d-center fz-14 theme-clr4"></i>
                  Submit your message
               </button>
            </div>
         </div>
      </div>
   )
}

export default BlogForm
