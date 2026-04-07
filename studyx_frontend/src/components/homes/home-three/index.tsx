import FooterThree from "../../../layouts/footers/FooterThree"
import HeaderThree from "../../../layouts/headers/HeaderThree"
import Banner from "./Banner"
import Blog from "./Blog"
import Feature from "./Feature"
import Pricing from "./Pricing"
import Service from "./Service"
import StartArea from "./StartArea"
import Testimonial from "./Testimonial"
import WorkArea from "./WorkArea"

const HomeThree = () => {
   return (
      <>
         <HeaderThree />
         <Banner />
         <div className="fix">
            <Service />
            <WorkArea />
            <Feature />
            <StartArea />
            <Testimonial />
            <Pricing />
         </div>
         <Blog />
         <FooterThree />
      </>
   )
}

export default HomeThree
