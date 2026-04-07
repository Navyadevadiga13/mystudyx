import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import Team from '../components/pages/teams/team';

const TeamMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Team'} />
         <Team />
      </Wrapper>
   );
};

export default TeamMain;