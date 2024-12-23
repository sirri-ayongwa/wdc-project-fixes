import React from "react";
import "./style.css";
import Button from "../../components/Button";
import Section from "../../components/Section";
import TagLine from "../../components/Tagline";
import Heading from "../../components/Heading";

function NotfoundPage() {
  return (
    <Section>
      <Heading
      title="Page not found"
      tag="404"
      className="text-center text-3xl font-bold"

      crosses
    />
    <div className="container min-h-full">
      <div className="flex justify-center">
        <Button href="/" className='text-2xl p-4' white>Home</Button>
      </div>
    </div>
    </Section>
  );
}

export default NotfoundPage;
