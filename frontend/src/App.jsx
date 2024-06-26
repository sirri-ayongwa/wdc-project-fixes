import ButtonGradient from "./assets/svg/ButtonGradient";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/home";
import NotfoundPage from "./pages/notfound";
import SignIn from "./pages/signin";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import SignUp from "./pages/signup";
import AdminPage from "./pages/admin";
import ProfilePage from "./pages/profile";
import BlogsPage from "./pages/blogs";
import SingleBlogDisplay from "./pages/blog";
import AboutPage from "./pages/about";
import ServicesPage from "./pages/services";
import ContactPage from "./pages/contact";
import DonorsPage from "./pages/donors";
import VisionPage from "./pages/vision";
import OurValuePage from "./pages/value";
import MissionPage from "./pages/mission";
import ProjectsPage from "./pages/project";
import WhatWeOfferPage from "./pages/offer";
import EagleProject from "./pages/project/eagle";
import { useEffect } from "react";
import TeamPage from "./components/team";
import EventsPage from "./components/events";
import PartnersPage from "./components/partner";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />

        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/:id" element={<SingleBlogDisplay />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route path="/about/what-we-offer" element={<WhatWeOfferPage />} />

          <Route path="/about/vision" element={<VisionPage />} />
          <Route path="/about/values" element={<OurValuePage />} />
          <Route path="/about/mission" element={<MissionPage />} />
          <Route path="/about/team" element={<TeamPage />} />

          <Route path="/services" element={<ServicesPage />} />
          <Route path="/donate" element={<DonorsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/eagle" element={<EagleProject />} />
          <Route path="/events" element={<EventsPage />} />

          <Route path="/contact" element={<ContactPage />} />
          <Route path="/partners" element={<PartnersPage />} />

          <Route
            path="/management/wdc/worddisastercenter/admin"
            element={<AdminPage />}
          />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<NotfoundPage />} />
        </Routes>
        <ToastContainer />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
