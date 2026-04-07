import CaseDetails from "../components/case-studies/case-details"
import SEO from "../components/SEO"
import Wrapper from "../layouts/Wrapper"

const CaseDetailsMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Case Details'} />
         <CaseDetails />
      </Wrapper>
   )
}

export default CaseDetailsMain
