import FooterTwo from "../../../layouts/footers/FooterTwo"
import HeaderTwo from "../../../layouts/headers/HeaderTwo"
import About from "./About"
import Banner from "./Banner"
import Deserve from "./Deserve"
import Faq from "./Faq"
import Service from "./Service"
import Testimonial from "./Testimonial"
import WorkArea from "./WorkArea"

const HomeTwo = () => {
   return (
      <>
         <HeaderTwo />
         <Banner />
         <About />
         <Service />
         <WorkArea />   
         <Testimonial />
         <Faq />
         <Deserve />
         <FooterTwo />
      </>
   )
}

export default HomeTwo
