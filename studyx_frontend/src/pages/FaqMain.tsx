import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import Faq from '../components/pages/faq';

const FaqMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Faq'} />
         <Faq />
      </Wrapper>
   );
};

export default FaqMain;