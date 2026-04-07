import { Link } from "react-router-dom";

interface DataType {
   id: number;
   icon: string;
   count: string;
   title: string;
   desc: string;
}

const work_data: DataType[] = [
   {
      id: 1,
      icon: "/assets/img/icon/w-icon1.png",
      count: "01",
      title: "Discovery",
      desc: "We identify your business challenges and explore how AI can solve them",
   },
   {
      id: 2,
      icon: "/assets/img/icon/w-icon2.png",
      count: "02",
      title: "Training",
      desc: "We gather, clean, and label your data, then train custom ML models",
   },
   {
      id: 3,
      icon: "/assets/img/icon/w-icon3.png",
      count: "03",
      title: "Deployment",
      desc: "We integrate the models into your existing tools, seamlessly",
   },
   {
      id: 4,
      icon: "/assets/img/icon/w-icon4.png",
      count: "04",
      title: "Optimization",
      desc: "We continuously monitor performance and fine-tune models",
   },
]

const WorkArea = () => {
   return (
      <section className="work-section3 position-relative z-1 pt-100 pb-100">
         <img src="/assets/img/element/work-bg3.png" alt="img" className="bg-angel" />
         <div className="container">
            <div className="section-title mb-4 pb-lg-3 text-center">
               <span
                  className="text-uppercase border black-clr letter-1 rounded-5 fw-600 d-inline-block py-0 mb-3 px-3">
                  <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M5.86308 4.41502C4.48743 5.9661 2.92783 8.2035 1.57888 10.9014C1.37305 11.3131 0.872484 11.4799 0.460843 11.2741C0.0491927 11.0683 -0.117666 10.5677 0.0881593 10.1561C1.49783 7.33675 3.13745 4.97643 4.61619 3.30913C5.35425 2.47695 6.06642 1.80135 6.70408 1.32609C7.02267 1.08858 7.33742 0.89005 7.63975 0.747967C7.93275 0.610283 8.2675 0.5 8.61133 0.5C8.79133 0.5 8.98933 0.544583 9.1725 0.6623C9.35275 0.778092 9.46908 0.932708 9.54125 1.07569C9.67217 1.33513 9.68667 1.61228 9.68342 1.79948C9.6765 2.19709 9.57058 2.694 9.43467 3.19979C9.15617 4.23598 8.66617 5.6092 8.17908 6.96475L8.11075 7.15483C7.63925 8.4665 7.17508 9.75775 6.87333 10.7888C6.79208 11.0667 6.7255 11.316 6.6745 11.5345C7.25292 11.0696 7.96508 10.3712 8.72167 9.62783L8.74633 9.60358C9.481 8.88175 10.2582 8.11817 10.9139 7.59392C11.2393 7.33383 11.5902 7.08667 11.9282 6.9435C12.212 6.82317 12.8619 6.62767 13.3673 7.133C13.6876 7.45333 13.7765 7.86983 13.7995 8.18033C13.8236 8.50533 13.7858 8.85558 13.7271 9.18842C13.6096 9.85483 13.3736 10.6325 13.1578 11.3341L13.1232 11.4467C12.9304 12.0728 12.7585 12.6314 12.6605 13.0804C12.8774 12.8627 13.1445 12.518 13.4563 12.0092C13.6967 11.6167 14.2098 11.4934 14.6022 11.7338C14.9946 11.9743 15.1178 12.4873 14.8774 12.8798C14.4249 13.6185 13.9567 14.2185 13.4599 14.591C12.9403 14.9808 12.2601 15.2006 11.5719 14.8565C11.0649 14.6029 10.9498 14.0978 10.9243 13.8183C10.8966 13.516 10.9403 13.1861 10.9983 12.8889C11.1073 12.3287 11.3191 11.6415 11.5192 10.9923L11.5648 10.8441C11.7873 10.1209 11.9894 9.445 12.0857 8.89908C12.0931 8.857 12.0997 8.81683 12.1055 8.77842C12.0581 8.81417 12.0078 8.85325 11.9546 8.89575C11.3731 9.36067 10.6542 10.0657 9.88975 10.8167L9.86508 10.8409C9.1305 11.5627 8.35333 12.3263 7.69758 12.8505C7.37217 13.1107 7.02125 13.3578 6.68333 13.501C6.3995 13.6213 5.74956 13.8168 5.24426 13.3115C4.98692 13.0542 4.921 12.7294 4.89977 12.5318C4.87625 12.3129 4.89084 12.0809 4.91891 11.8626C4.9755 11.4224 5.10779 10.888 5.27379 10.3208C5.59024 9.23933 6.07017 7.90433 6.53425 6.6135L6.61058 6.40117C7.10525 5.02443 7.56833 3.72283 7.82508 2.76728C7.84767 2.68307 7.86817 2.60363 7.8865 2.5289C7.827 2.56968 7.76483 2.61413 7.70008 2.66241C7.18108 3.04923 6.55225 3.63799 5.86308 4.41502Z"
                        fill="#69696A" />
                  </svg>
                  How it works
               </span>
               <h2 className="black-clr fw-bold wow fadeInUp" data-wow-delay=".3s">
                  Get Started in Just <br />
                  4 Simple Steps
               </h2>
            </div>
            <div className="row g-0 position-relative">
               {work_data.map((item) => (
                  <div key={item.id} className="col-lg-3 col-md-6 col-sm-6">
                     <div className="work-items3 text-center h-100 wow fadeInDown" data-wow-delay=".3s">
                        <div className="icon mx-auto bg-white d-center rounded-circle w-64 h-64 mb-4">
                           <img src={item.icon} alt="img" />
                        </div>
                        <h3 className="black-clr italic opacity-50 mb-2">01.</h3>
                        <h5 className="mb-2 wow fadeInUp" data-wow-delay=".3s">
                           <Link to="/contact" className="black-clr fw-600">
                              {item.title}
                           </Link>
                        </h5>
                        <p className="black-clr wow fadeInUp" data-wow-delay=".5s">{item.desc}</p>
                     </div>
                  </div>
               ))}
               <img src="/assets/img/element/wrok-line.png" alt="img" className="worak-line" />
            </div>
            <Link to="/contact" className="theme-btn mt-md-5 mt-4 style4 px-4">
               Start Free Trial
               <i
                  className="fa-solid fa-arrow-right fz-14"
                  style={{ transform: 'rotate(-40deg)' }}
               ></i>
            </Link>
         </div>
      </section>
   )
}

export default WorkArea
