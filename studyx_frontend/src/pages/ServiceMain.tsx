import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import Service from '../components/services/service';

const ServiceMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Service'} />
         <Service />
      </Wrapper>
   );
};

export default ServiceMain;