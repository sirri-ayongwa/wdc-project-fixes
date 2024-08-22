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
import Button from "../../components/Button";

function AboutPage() {
  return (
    <div>
      <br />
      <br />
      <WhoWeAre />
      <div className="flex justify-center">
      <Button href="https://issuu.com/worlddisastercenter/docs/wdc_008_bleu_format">
        Read more
      </Button>
      </div>
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
