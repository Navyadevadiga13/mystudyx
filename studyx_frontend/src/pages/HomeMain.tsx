import Wrapper from '../layouts/Wrapper';
import HomeOne from '../components/homes/home-two';
import SEO from '../components/SEO';

const HomeMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={' '} />
         <HomeOne />
      </Wrapper>
   );
};

export default HomeMain;