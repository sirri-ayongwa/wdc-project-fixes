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
      <div className="m-2">
        <div className="flex justify-center">
          <Heading title="Our Catalogue" />
        </div>
        <div
          style={{
            position: "relative",
            paddingTop: "max(60%,326px)",
            height: "0",
            width: "100%",
          }}
        >
          <iframe
            allow="clipboard-write"
            sandbox="allow-top-navigation allow-top-navigation-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups allow-modals allow-popups-to-escape-sandbox allow-forms"
            allowFullScreen={true}
            style={{
              position: "absolute",
              border: "none",
              width: "100%",
              height: "100%",
              left: "0",
              right: "0",
              top: "0",
              bottom: "0",
            }}
            src="https://e.issuu.com/embed.html?d=wdc_008_bleu_format&u=sapiensndat"
          ></iframe>
        </div>
      </div>
      <Collaboration />

      {/* <Services /> */}
      <Blogs isHome={false} />
      <ContactForm />
      {/* <Pricing /> */}
      {/* <Pricing />
      <Roadmap /> */}
    </>
  );
};

export default HomePage;
