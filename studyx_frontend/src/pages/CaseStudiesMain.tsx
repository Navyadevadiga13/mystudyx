import CaseStudies from "../components/case-studies/case-studies"
import SEO from "../components/SEO"
import Wrapper from "../layouts/Wrapper"

const CaseStudiesMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Case Studies'} />
         <CaseStudies />
      </Wrapper>
   )
}

export default CaseStudiesMain
