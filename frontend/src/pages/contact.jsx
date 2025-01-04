import React from "react";
import ContactForm from "../components/contactForm";
import Section from "../components/Section";
import Heading from "../components/Heading";
function ContactPage() {
  return (
    <>
          
    <Section crosses>
        <div className="container">
            <Heading
                title="Contact Us"
                text={`We would love to hear from you! Whether you're interested in collaborating with the World Disaster Center, have questions about our work, or wish to share feedback on our website, please don’t hesitate to get in touch with us through phone, email, or the form below.`}
                tag="World Disaster Center"
                className="mb-8"
                crosses
            />
<ContactForm />
        </div>
    </Section>
    </>     
)
}

export default ContactPage;
