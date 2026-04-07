import FooterTwo from "../../layouts/footers/FooterTwo"
import InnerHeader from "../../layouts/headers/InnerHeader"
import BreadCrumb from "../common/BreadCrumb"
import ContactHome from "../homes/home-one/Contact"
import ContactInfo from "./ContactInfo"
// import ContactInfoTwo from "./ContactInfoTwo"

const Contact = () => {
   return (
      <>
         <InnerHeader />
         <BreadCrumb title="Contact" />
         <ContactInfo />
         <ContactHome />
         {/* <ContactInfoTwo /> */}
         <FooterTwo />
      </>
   )
}

export default Contact
