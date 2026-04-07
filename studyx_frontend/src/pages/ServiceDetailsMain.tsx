import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import ServiceDetails from '../components/services/service-details';

const ServiceDetailsMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Service Details'} />
         <ServiceDetails />
      </Wrapper>
   );
};

export default ServiceDetailsMain;