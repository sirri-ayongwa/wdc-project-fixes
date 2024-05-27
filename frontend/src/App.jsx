import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import NotfoundPage from "./pages/notfound";
import SignIn from "./pages/signin";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import SignUp from "./pages/signup";
import AdminPage from "./pages/admin";
import ProfilePage from "./pages/profile";
import AdminDashboard from "./pages/admin/dashboard";
import BlogsPage from "./pages/blogs";
import SingleBlogDisplay from "./pages/blog";
import AboutPage from "./pages/about";
import ContactForm from "./components/contactForm";
import ServicesPage from "./pages/services";
import { ContactPage } from "@mui/icons-material";

const App = () => {
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
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />

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
