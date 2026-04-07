import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import Blog from '../components/blogs/blog';

const BlogMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Blog '} />
         <Blog />
      </Wrapper>
   );
};

export default BlogMain;