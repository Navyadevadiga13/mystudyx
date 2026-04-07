import FooterTwo from "../../layouts/footers/FooterTwo"
import InnerHeader from "../../layouts/headers/InnerHeader"
import BreadCrumb from "../common/BreadCrumb"
import Contact from "../homes/home-one/Contact"
import Choose from "./Choose"
import Financial from "./Financial"
import Solution from "./Solution"

const About = () => {
  return (
    <>
      <InnerHeader />
      <BreadCrumb title="About Us" />
      <Financial />
      <Choose />
      <Solution />
      <Contact />
      <FooterTwo />
    </>
  )
}

export default About
