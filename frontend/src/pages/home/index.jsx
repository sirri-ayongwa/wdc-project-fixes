import React, { useState } from "react";
import { Helmet } from "react-helmet";
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
    // // State to manage the active section
    const [activeSection, setActiveSection] = useState("News");

    // Function to switch between sections
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
                {/* Add Helmet for title and meta tags */}
                <Helmet>
                <title>World Disaster Center</title>
                <meta
                    name="description"
                    content="We are on a mission to End Disaster Impacts globally."
                />
                <meta
                    name="keywords"
                    content="World Disaster Center, disaster news, global crises, disaster resources, emergency preparedness, disaster preperadness, disaster response, disasters"
                />
                <meta name="author" content="World Disaster Center" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="World Disaster Center" />
                <meta
                    property="og:description"
                    content="END DISASTER IMPACTS"
                />
                <meta property="og:url" content="https://www.worlddisastercenter.org" />
                <meta property="og:type" content="website" />
            </Helmet>

    {/* <TopHero/> */}
      <Hero />
      {/* <Slideshow /> */}
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

      {/* <NewsGrid/> */}

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

      {/* <Events /> */}
      {/* <Collaboration /> */}
      {/* <Services /> */}
      {/* <Blogs isHome={false} /> */}
      {/* <NewsLetter2 /> */}
      {/* <Pricing /> */}
      {/* <Pricing />
      <Roadmap /> */}
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
    left: "100px", // Adjust this value to move it closer to the center
    top: "50%",
    transform: "translateY(-50%)",
  },
  rightArrow: {
    right: "100px", // Adjust this value to move it closer to the center
    top: "50%",
    transform: "translateY(-50%)",
  },

};

export default HomePage;
