import React, { useState } from "react";
import "./style.css";
import Section from "./Section";

function NewsLetter2() {
  const [email, setEmail] = useState("");
  return (
      <Section crosses>
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4 animate-fade-in">Stay Updated</h2>
          <p className="text-gray-400 mb-8 animate-fade-in">Subscribe to our newsletter and get the latest updates on WDC news, events, and insights. Be part of the change!</p>
          <form 
            action="https://worlddisastercenter.us22.list-manage.com/subscribe/post?u=c90ad2e6157e6eac27328c681&amp;id=a73ca4362c&amp;f_id=0044d6e1f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            target="_blank"
            className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-slide-up">
            <input type="email" placeholder="Enter your email" className="py-3 px-6 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 w-full sm:w-80" />
            <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-500 animate-fade-in">We respect your privacy. Unsubscribe anytime.</p>
        </div>
      </Section>
  );
}

export default NewsLetter2;
