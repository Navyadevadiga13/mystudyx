import FooterTwo from "../../../layouts/footers/FooterTwo"
import InnerHeader from "../../../layouts/headers/InnerHeader"
import BreadCrumb from "../../common/BreadCrumb"
import FaqArea from "./FaqArea"

const Faq = () => {
   return (
      <>
         <InnerHeader />
         <BreadCrumb title="FAQ" />
         <FaqArea />
         <FooterTwo />
      </>
   )
}

export default Faq
