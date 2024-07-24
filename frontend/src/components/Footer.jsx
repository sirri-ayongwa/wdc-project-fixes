import React from "react";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex justify-center ">
        <div>
          <h3 className="text-color-1 text-center">Our addresses</h3>
          <ul>
            <li className="text-gray-400">
              <b>New York</b> 1660 Madison Avenue apt 6B, New York, NY, 10029
            </li>
            <li className="text-gray-400">
              <b>Austria</b> 5020, Wolf-Dietrich Strabe 31, Salzburg, Salzburg
            </li>
          </ul>
        </div>
      </div>
      <br />
      <br />
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <div className="flex justify-center">
          <a href="mailto:office@worlddisastercenter.org">
            office@worlddisastercenter.org
          </a>
        </div>
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
