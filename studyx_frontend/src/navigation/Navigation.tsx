import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomeMain from '../pages/HomeMain'
import HomeTwoMain from '../pages/HomeTwoMain';
import HomeThree from '../components/homes/home-three';
import BlogMain from '../pages/BlogMain';
import CaseDetailsMain from '../pages/CaseDetailsMain';
import CaseStudiesMain from '../pages/CaseStudiesMain';
import ServiceDetailsMain from '../pages/ServiceDetailsMain';
import ServiceMain from '../pages/ServiceMain';
import AboutMain from '../pages/AboutMain';
import BlogDetailsMain from '../pages/BlogDetailsMain';
import TeamMain from '../pages/TeamMain';
import TeamDetailsMain from '../pages/TeamDetailsMain';
import TestimonialMain from '../pages/TestimonialMain';
import FaqMain from '../pages/FaqMain';
import PricingMain from '../pages/PricingMain';
import ContactMain from '../pages/ContactMain';
import NotFoundMain from '../pages/NotFoundMain';
import AdminLogin from '../pages/admin/AdminLogin';
import AdminDashboard from '../pages/admin/AdminDashboard';
import AdminSidebar from '../pages/admin/AdminSidebar';
import AdminCourses from '../pages/admin/AdminCourses';
import Courses  from '../pages/Courses';
import CourseDetails  from '../pages/CourseDetails';
import SignUp  from '../pages/SignUp';
import SignIn  from '../pages/SignIn';
import MyProfile  from '../pages/MyProfile';
import WishList  from '../pages/WishList';
import Service from '../pages/Service';
import AdminUsers from '../pages/admin/AdminUsers';

import Privacy from '../pages/Privacy';
import Terms from '../pages/Terms';
const AppNavigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/home-two" element={<HomeTwoMain />} />
        <Route path="/home-three" element={<HomeThree />} />
        <Route path="/about" element={<AboutMain />} />
        <Route path="/services" element={<ServiceMain />} />
        <Route path="/services-details" element={<ServiceDetailsMain />} />
        <Route path="/case-studies" element={<CaseStudiesMain />} />
        <Route path="/case-details" element={<CaseDetailsMain />} />
        <Route path="/blog" element={<BlogMain />} />
        <Route path="/blog-details" element={<BlogDetailsMain />} />
        <Route path="/team" element={<TeamMain />} />
        <Route path="/team-details" element={<TeamDetailsMain />} />
        <Route path="/testimonials" element={<TestimonialMain />} />
        <Route path="/faqs" element={<FaqMain />} />
        <Route path="/pricing-plan" element={<PricingMain />} />
        <Route path="/contact" element={<ContactMain />} />
         <Route path="/admin-login" element={<AdminLogin/>}/>
         <Route path="/admin_dashboard" element={<AdminDashboard/>}/>
         <Route path="/admin_sidebar" element={<AdminSidebar/>}/>
         <Route path="/admin_courses" element={<AdminCourses/>}/>
         <Route path="/admin_users" element={<AdminUsers />} />
         <Route path="/courses" element={<Courses/>}/>
         <Route path="/course-details/:id" element={<CourseDetails/>}/>
         <Route path="/sign-up" element={<SignUp/>}/>
         <Route path="/sign-in" element={<SignIn/>}/>
         <Route path="/my-profile" element={<MyProfile/>}/>
         <Route path="/wishlist" element={<WishList/>}/>
         <Route path="/terms" element={<Terms/>}/>
         <Route path="/service" element={<Service/>}/>


         <Route path="/privacy" element={<Privacy/>}/>
        <Route path="*" element={<NotFoundMain />} />
       
      </Routes>
    </Router>
  );
};

export default AppNavigation;
