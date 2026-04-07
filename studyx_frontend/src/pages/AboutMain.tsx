import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import About from '../components/about';

const AboutMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'About'} />
         <About />
      </Wrapper>
   );
};

export default AboutMain;