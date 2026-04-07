import FooterTwo from "../../../layouts/footers/FooterTwo"
import InnerHeader from "../../../layouts/headers/InnerHeader"
import BreadCrumb from "../../common/BreadCrumb"
import BlogArea from "./BlogArea"

const Blog = () => {
   return (
      <>
         <InnerHeader />
         <BreadCrumb title="Blog" />
         <BlogArea />
         <FooterTwo />
      </>
   )
}

export default Blog
