import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import HomeThree from '../components/homes/home-three';

const HomeThreeMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Home Three'} />
         <HomeThree />
      </Wrapper>
   );
};

export default HomeThreeMain;