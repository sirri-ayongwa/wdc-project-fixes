import ButtonGradient from "../../assets/svg/ButtonGradient";
import Benefits from "../../components/Benefits";
import Collaboration from "../../components/Collaboration";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Heading from "../../components/Heading";
import Hero from "../../components/Hero";
import Pricing from "../../components/Pricing";
import Roadmap from "../../components/Roadmap";
import Services from "../../components/Services";
import Blogs from "../../components/blogs";
import ContactForm from "../../components/contactForm";
import VideoSection from "../../components/videosection";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Benefits />
      <VideoSection />

      <Collaboration />

      {/* <Services /> */}
      {/* <Blogs isHome={false} /> */}
      <ContactForm />
      {/* <Pricing /> */}
      {/* <Pricing />
      <Roadmap /> */}
    </>
  );
};

export default HomePage;
