import ButtonGradient from "../../assets/svg/ButtonGradient";
import Benefits from "../../components/Benefits";
import CaseStudies from "../../components/CaseStudies";
import Collaboration from "../../components/Collaboration";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Heading from "../../components/Heading";
import Hero from "../../components/Hero";
import NewsGrid from "../../components/NewsGrid";
import Pricing from "../../components/Pricing";
import Roadmap from "../../components/Roadmap";
import Services from "../../components/Services";
import Blogs from "../../components/blogs";
import ContactForm from "../../components/contactForm";
import NewsLetter2 from "../../components/newsletter2";
import VideoSection from "../../components/videosection";
import TopHero from "../../components/TopHero";
import Slideshow from "../../components/Slideshow";
const HomePage = () => {
  return (
    <>
    {/* <TopHero/> */}
      <Hero />
      {/* <Slideshow /> */}
      <VideoSection />
      <Benefits />
      <CaseStudies />
      <NewsGrid/>
      {/* <Collaboration /> */}
      {/* <Services /> */}
      {/* <Blogs isHome={false} /> */}
      <NewsLetter2 />
      {/* <Pricing /> */}
      {/* <Pricing />
      <Roadmap /> */}
    </>
  );
};

export default HomePage;
