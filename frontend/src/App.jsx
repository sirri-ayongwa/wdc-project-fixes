import ButtonGradient from "./assets/svg/ButtonGradient";
// import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route, useLocation, useNavigate, Navigate } from "react-router-dom";
import HomePage from "./pages/home";
import NotfoundPage from "./pages/notfound";

import SignInProfessional from "./pages/signinProfessional";
import SignUpProfessional from "./pages/signupProfessional";
import SignUpLocal from "./pages/signupLocal";
import SignInLocal from "./pages/signinLocal";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AdminPage from "./pages/admin";
import ProfilePage from "./pages/profile";
// import BlogsPage from "./pages/blogs";
import SingleBlogDisplay from "./pages/blog";
import AboutPage from "./pages/about";
import Roster from "./pages/roster";
import RosterDetails from "./pages/roster-details";
// import ServicesPage from "./pages/services";
import ContactPage from "./pages/contact";
import DonorsPage from "./pages/donors";
import VisionPage from "./pages/vision";
import OurValuePage from "./pages/value";
import MissionPage from "./pages/mission";
import ProjectsPage from "./pages/project";
import WhatWeOfferPage from "./pages/offer";
// import Testing from "./pages/recordPage.jsx";
import EagleProject from "./pages/project/eagle";
import { useEffect, useState } from "react";
// import TeamPage from "./components/team.jsx";
import PartnersPage from "./components/partner";
import MembershipPage from './pages/membership/index.jsx'
import ImpactPage from './pages/impact/index.jsx'
import ProfileForm from "./pages/profileForm";
import UpdateProfile from "./pages/updateProfile";
import TypePage from "./pages/typePage";
import ProfileEnterprisePage from "./pages/ProfileEnterprisePage";
import ChatBotComponent from "./components/chatbot";
import LoaderAnimation from "./components/loading";
import NewFooter from "./components/newFooter.jsx";
import NewsLetterPage from "./pages/newletter/index.jsx";
import CareerPage from "./pages/career/index.jsx";
import DemoPage from "./pages/demo/index.jsx";
import CaseDetail from "./components/CaseDetail.jsx";
import PrivacyPolicyPage from "./pages/privacyPolicy/index.jsx";
import TermsAndConditionPage from "./pages/termsCondition/index.jsx";
import WhatWeDo from "./pages/solution/index.jsx";
import Products from "./pages/product/index.jsx";
import News from "./pages/news/index.jsx";
import Events from "./pages/events/index.jsx";
import CookieConsent from "./components/CookieConsent.jsx";
import Story from './pages/story/index.jsx'
import Africa from './pages/where_we_work/africa/index.jsx'
import PartnerWithUs from './pages/partnerWithUs/index.jsx';
import AcademyPage from "./pages/academy/index.jsx";

import NewsDetail from "./components/NewsDetail.jsx";
import EventsDetail from "./components/EventsDetail.jsx";

import ProductDetail from "./components/ProductDetail.jsx";
import Cookies from "js-cookie";
import Training from "./pages/trainings/index.jsx";
import Individuals from "./pages/individuals/index.jsx";
import Organizations from "./pages/organizations/index.jsx";
import InPerson from "./pages/inperson/index.jsx";
import Moocs from "./pages/moocs/index.jsx";
import Webinars from "./pages/webinars/index.jsx";

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const is404Page = location.pathname === "/404" || location.pathname === "/not-found";

  if (loading) {
    return <LoaderAnimation />;
  }

  // Render different layouts based on the current route
  return (
    <>
      {is404Page ? (
        // 404 page layout - standalone without header/footer
        <Routes>
          <Route path="/404" element={<NotfoundPage />} />
          <Route path="/not-found" element={<NotfoundPage />} />
        </Routes>
      ) : (
        // Regular page layout with header and footer
        <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />

        <Routes>
     
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/roster" element={<Roster />} />
          <Route exact path="/roster-details" element={<RosterDetails />} />
          <Route path="/signinProfessional" element={(Cookies.get("email")) || (Cookies.get("phoneNumber")) ? navigate("/") : <SignInProfessional />} />
          <Route path="/signupProfessional" element={(Cookies.get("email")) || (Cookies.get("phoneNumber")) ? navigate("/") : <SignUpProfessional />} />
          <Route path="/signupLocal" element={(Cookies.get("phoneNumber")) || (Cookies.get("email")) ? navigate("/") : <SignUpLocal />} />
          <Route path="/signinLocal" element={(Cookies.get("phoneNumber")) || (Cookies.get("email")) ? navigate("/") : <SignInLocal />} />

          <Route
            path="/profile/individual/complete/:id"
            element={<ProfileForm />}
          />
          <Route
            path="/profile/enterprise/complete/:id"
            element={<ProfileEnterprisePage />}
          />
          <Route
            path="/profile/npo/complete/:id"
            element={<ProfileEnterprisePage />}
          />
          <Route path="/profile/type/:id" element={<TypePage />} />
          <Route path="/profile/update/:id" element={<UpdateProfile />} />
          {/* <Route path="/ms73700841.txt" element={<Testing />} /> */}

          <Route path="/solution" element={<WhatWeDo />} />
          <Route path="/global-products" element={<Products />} />

          {/* <Route exact path="/blogs2" element={<BlogsPage />} /> */}
          <Route path="/blog/:id" element={<SingleBlogDisplay />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route path="/about/what-we-offer" element={<WhatWeOfferPage />} />
          <Route path="/about/story" element={<Story />} />
          <Route path="/about/vision" element={<VisionPage />} />
          <Route path="/about/values" element={<OurValuePage />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/about/mission" element={<MissionPage />} />
          {/* <Route path="/about/team" element={<TeamPage />} /> */}
          <Route path="/about/partner-with-us" element={<PartnerWithUs />} />
          <Route path="/where-we-work/africa" element={<Africa />} />
          <Route path="/careers" element={<CareerPage />} />
          <Route path="/newsletter" element={<NewsLetterPage />} />
          <Route path="/request-demo" element={<DemoPage />} />
          {/* <Route path="/services" element={<ServicesPage />} /> */}
          <Route path="/donate" element={<DonorsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/eagle" element={<EagleProject />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about/partners" element={<PartnersPage />} />
          <Route path="/terms-conditions" element={<TermsAndConditionPage />} />
          <Route path="/policy" element={<PrivacyPolicyPage />} />
          <Route path="/membership" element={<MembershipPage />} />


          <Route path="/News" element={<News />} />
          <Route path="/Events" element={<Events />} />

          <Route
            path="/management/wdc/worddisastercenter/admin"
            element={<AdminPage />}
          />
          <Route path="/profile" element={<ProfilePage />} />

          {/* Dynamic route for cases */}
          <Route path="/cases/:caseName" element={<CaseDetail />} />
          <Route path="*" element={<NotfoundPage />} />

          <Route path="/News/:newsName" element={<NewsDetail />} />
          <Route path="/global-products/:productName" element={<ProductDetail />} />
          <Route path="/Events/:eventsName" element={<EventsDetail />} />

          < Route path="/academy" element={<AcademyPage />} />
          <Route path="/academy/training" element={<Training />} />
          <Route path="/academy/training/individuals" element={<Individuals />} />
          <Route path="/academy/training/organizations" element={<Organizations />} />
          <Route path="/academy/training/in-person" element={<InPerson />} />
          <Route path="/academy/training/moocs" element={<Moocs />} />
          <Route path="/academy/training/webinars" element={<Webinars />} /> 
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
        <ToastContainer />
          <NewFooter />
          <ButtonGradient />
          <CookieConsent />
          <ChatBotComponent />
        </div>
      )}
    </>
  );
};

export default App;