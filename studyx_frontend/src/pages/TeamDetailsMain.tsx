import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import TeamDetails from '../components/pages/teams/team-details';

const TeamDetailsMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Team Details'} />
         <TeamDetails />
      </Wrapper>
   );
};

export default TeamDetailsMain;