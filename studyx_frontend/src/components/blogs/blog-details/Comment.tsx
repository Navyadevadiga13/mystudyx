
const Comment = () => {
   return (
      <>
         <h3 className="mb-md-4 mb-3 theme-clr4">3 comments</h3>
         <div className="d-flex gap-xl-4 gap-lg-3 gap-2 flex-sm-nowrap flex-wrap border-bottom pb-4 mb-4">
            <img width="80" height="80" src="/assets/img/blog/replay1.png" alt="img" className="rounded-circle" />
            <div>
               <h4 className="theme-clr4 mb-0">Brittni Lando</h4>
               <span className="theme-clr4 fz-12 mb-lg-3 mb-2">16 Apr 2025 AT 12:15 AM</span>
               <p className="theme-clr4 mb-sm--2 mb-1">A wonderful serenity has taken possession of my entire
                  soul, like these sweet mornings of spring which I enjoy with my
                  whole heart. I am alone, and feel the charm</p>
               <button type="button" className="theme-clr fw-800 fz-12 text-uppercase">Reply</button>
            </div>
         </div>
         <div
            className="d-flex gap-xl-4 gap-lg-3 ms-lg-5 gap-2 flex-sm-nowrap flex-wrap border-bottom pb-4 mb-4">
            <img width="80" height="80" src="/assets/img/blog/replay2.png" alt="img" className="rounded-circle" />
            <div>
               <h4 className="theme-clr4 mb-0">Annabel Rohan</h4>
               <span className="theme-clr4 fz-12 mb-lg-3 mb-2">16 Apr 2025 AT 12:15 AM</span>
               <p className="theme-clr4 mb-sm--2 mb-1">A wonderful serenity has taken possession of my entire
                  soul, like these
                  sweet mornings of spring which I enjoy with my
                  whole heart. I am alone, and feel the charm</p>
               <button type="button" className="theme-clr fw-800 fz-12 text-uppercase">Reply</button>
            </div>
         </div>
         <div className="d-flex gap-xl-4 gap-lg-3 gap-2 flex-sm-nowrap flex-wrap">
            <img width="80" height="80" src="/assets/img/blog/replay3.png" alt="img" className="rounded-circle" />
            <div>
               <h4 className="theme-clr4 mb-0">Phyllis Godley</h4>
               <span className="theme-clr4 fz-12 mb-lg-3 mb-2">16 Apr 2025 AT 12:15 AM</span>
               <p className="theme-clr4 mb-sm--2 mb-1">A wonderful serenity has taken possession of my entire
                  soul, like these
                  sweet mornings of spring which I enjoy with my
                  whole heart. I am alone, and feel the charm</p>
               <button type="button" className="theme-clr fw-800 fz-12 text-uppercase">Reply</button>
            </div>
         </div>
      </>
   )
}

export default Comment
