import FooterTwo from "../../../layouts/footers/FooterTwo"
import InnerHeader from "../../../layouts/headers/InnerHeader"
import BreadCrumb from "../../common/BreadCrumb"
import Contact from "../../homes/home-one/Contact"
import Faq from "../../homes/home-one/Faq"
import PricingArea from "./PricingArea"

const Pricing = () => {
  return (
    <>
      <InnerHeader />
      <BreadCrumb title="Pricing" />
      <PricingArea />
      <Faq />
      <Contact />
      <FooterTwo />
    </>
  )
}

export default Pricing
