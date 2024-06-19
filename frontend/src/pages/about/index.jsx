import React from "react";
import Services from "../../components/Services";
import Benefits from "../../components/Benefits";
import Collaboration from "../../components/Collaboration";
import QNA from "../../components/qna";
import HowWeWork from "../../components/howwework";
import WhoWeAre from "../../components/WhoWeAre";
import OurMission from "../../components/OurMission";
import OurVision from "../../components/OurVision";
import OurValues from "../../components/ourValues";

function AboutPage() {
  return (
    <div>
      <br />
      <br />
      <WhoWeAre />
      <OurMission/>
      <OurVision/>
      <OurValues/>
      <QNA/>
      <HowWeWork />
      <Services />
      <Benefits />
      <Collaboration />
    </div>
  );
}

export default AboutPage;
