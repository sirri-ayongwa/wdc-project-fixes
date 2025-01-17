import React, { useState } from "react";
import { Helmet } from "react-helmet-async"; // Import Helmet from react-helmet-async
import ButtonGradient from "../../assets/svg/ButtonGradient";
import Benefits from "../../components/Benefits";
import Solutions from "../../components/CaseStudies";
import GlobalProducts from "../../components/GlobalProducts";
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
import News from "../news";
import Events from "../events";

const HomePage = () => {
  // State to manage the active section
  const [activeSection, setActiveSection] = useState("News");

  const handleSwitchSection = () => {
    setActiveSection((prevSection) =>
      prevSection === "News" ? "Events" : "News"
    );
  };

  const [solutionsSection, setSolutionsSection] = useState("Solutions");
  const handleSolutionsSwitch = () => {
    setSolutionsSection((prevSection) =>
      prevSection === "Solutions" ? "GlobalProducts" : "Solutions"
    );
  };

  return (
    <>
      {/* Helmet for managing meta tags */}
      <Helmet>
        <title>World Disaster Center | End Disaster Impacts Globally</title>
        <meta
          name="description"
          content="We are on a mission to end disaster impacts globally. Stay informed about disaster preparedness, response, and recovery resources."
        />
        <meta
          name="keywords"
          content="World Disaster Center, disaster news, global crises, disaster resources, emergency preparedness, disaster preparedness, disaster response, disasters"
        />
        <meta name="author" content="World Disaster Center" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="World Disaster Center" />
        <meta
          property="og:description"
          content="We are dedicated to ending disaster impacts globally. Learn more about our mission and resources."
        />
        <meta property="og:url" content="https://www.worlddisastercenter.org" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Page Content */}
      <Hero />
      <VideoSection />
      <Benefits />
      
      <div style={styles.sectionContainer}>
        {solutionsSection === "Solutions" ? <Solutions /> : <GlobalProducts />}

        {/* Left Arrow */}
        <button
          onClick={handleSolutionsSwitch}
          style={{ ...styles.arrowButton, ...styles.leftArrow }}
          onMouseEnter={(e) => (e.target.style.color = "#007BFF")}
          onMouseLeave={(e) => (e.target.style.color = "#333")}
        >
          ←
        </button>

        {/* Right Arrow */}
        <button
          onClick={handleSolutionsSwitch}
          style={{ ...styles.arrowButton, ...styles.rightArrow }}
          onMouseEnter={(e) => (e.target.style.color = "#007BFF")}
          onMouseLeave={(e) => (e.target.style.color = "#333")}
        >
          →
        </button>
      </div>

      <div style={styles.sectionContainer}>
        {activeSection === "News" ? <News /> : <Events />}
        
        {/* Left Arrow */}
        <button
          onClick={() => handleSwitchSection("left")}
          style={{ ...styles.arrowButton, ...styles.leftArrow }}
          onMouseEnter={(e) => (e.target.style.color = "#007BFF")}
          onMouseLeave={(e) => (e.target.style.color = "#333")}
        >
          ←
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => handleSwitchSection("right")}
          style={{ ...styles.arrowButton, ...styles.rightArrow }}
          onMouseEnter={(e) => (e.target.style.color = "#007BFF")}
          onMouseLeave={(e) => (e.target.style.color = "#333")}
        >
          →
        </button>
      </div>
    </>
  );
};

const styles = {
  sectionContainer: {
    position: "relative",
    marginBottom: "30px",
  },
  arrowButton: {
    position: "absolute",
    backgroundColor: "#fff",
    border: "none",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    fontSize: "28px",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#333",
    zIndex: 10,
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  leftArrow: {
    left: "100px",
    top: "50%",
    transform: "translateY(-50%)",
  },
  rightArrow: {
    right: "100px",
    top: "50%",
    transform: "translateY(-50%)",
  },
};

export default HomePage;
