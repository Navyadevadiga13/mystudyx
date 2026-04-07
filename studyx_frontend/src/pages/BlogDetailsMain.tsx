import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import BlogDetails from '../components/blogs/blog-details';

const BlogDetailsMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Blog Details'} />
         <BlogDetails />
      </Wrapper>
   );
};

export default BlogDetailsMain;