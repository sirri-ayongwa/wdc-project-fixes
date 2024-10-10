import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";
import { useWorld } from "../context";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";

const Blogs = ({ isHome = true }) => {
  const { posts } = useWorld();

  return (
    <Section className="overflow-hidden" id="roadmap">
      <div className="container md:pb-10">
        <Heading
          tag="World Disaster center Solutions"
          title="Coming Soon. Stay Tuned."
        />

      
        
      </div>
    </Section>
  );
};

export default Blogs;
