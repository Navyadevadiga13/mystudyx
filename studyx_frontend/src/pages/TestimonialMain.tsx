import Testimonial from "../components/pages/testimonial"
import SEO from "../components/SEO"
import Wrapper from "../layouts/Wrapper"

const TestimonialMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Testimonial'} />
         <Testimonial />
      </Wrapper>
   )
}

export default TestimonialMain
