import FooterTwo from "../../../../layouts/footers/FooterTwo"
import InnerHeader from "../../../../layouts/headers/InnerHeader"
import BreadCrumb from "../../../common/BreadCrumb"
import TeamDetailsArea from "./TeamDetailsArea"

const TeamDetails = () => {
  return (
    <>
      <InnerHeader />
      <BreadCrumb title="James Carter" />
      <TeamDetailsArea />
      <FooterTwo />
    </>
  )
}

export default TeamDetails
