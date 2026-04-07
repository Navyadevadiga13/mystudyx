import FooterTwo from "../../../../layouts/footers/FooterTwo"
import InnerHeader from "../../../../layouts/headers/InnerHeader"
import BreadCrumb from "../../../common/BreadCrumb"
import TeamArea from "./TeamArea"

const Team = () => {
   return (
      <>
         <InnerHeader />
         <BreadCrumb title="Team" />
         <TeamArea />
         <FooterTwo />
      </>
   )
}

export default Team
