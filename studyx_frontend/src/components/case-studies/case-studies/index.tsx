import FooterTwo from "../../../layouts/footers/FooterTwo"
import InnerHeader from "../../../layouts/headers/InnerHeader"
import BreadCrumb from "../../common/BreadCrumb"
import CaseStudiesArea from "./CaseStudiesArea"

const CaseStudies = () => {
   return (
      <>
         <InnerHeader />
         <BreadCrumb title="Case studies" />
         <CaseStudiesArea />
         <FooterTwo />
      </>
   )
}

export default CaseStudies
