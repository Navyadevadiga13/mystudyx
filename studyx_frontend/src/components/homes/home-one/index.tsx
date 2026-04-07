import FooterTwo from "../../../layouts/footers/FooterTwo"
import HeaderOne from "../../../layouts/headers/HeaderOne"
import Banner from "./Banner"
import Blog from "./Blog"
import Choose from "./Choose"
import Contact from "./Contact"
import Faq from "./Faq"
import Industries from "./Industries"
import Pricing from "./Pricing"
import Service from "./Service"
import Team from "./Team"
import Testimonial from "./Testimonial"

const HomeOne = () => {
   return (
      <>
         <HeaderOne />
         <Banner />
         <Choose />
         <Service />
         <Testimonial />
         <Team />
         <Industries />
         <Pricing />
         <Faq />
         <Blog />
         <Contact />
         <FooterTwo />
      </>
   )
}

export default HomeOne
