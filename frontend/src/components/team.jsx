import React, { useState } from "react";
import Anne from "../assets/team/anne.png";
import Anselme from "../assets/team/AnselmeKonan.png";
import Ayuba from "../assets/team/AyubaAbubakar.png";
import Boaz from "../assets/team/boaz muliri.png";
import choice from "../assets/team/choice.png";
import davidk from "../assets/team/DavidKabanga.png";
import davidmulume from "../assets/team/davidmulume.png";
import doddy from "../assets/team/DoddyMatabaro.png";
import isaac from "../assets/team/isaac.png";
import james from "../assets/team/james.png";
import jane from "../assets/team/Jane.png";
import josephb from "../assets/team/joseph.png";
import kibwe from "../assets/team/kibwe.png";
import ledoux from "../assets/team/LedouxMedi.png";
import marie from "../assets/team/marie.png";
import oluwan from "../assets/team/Oluwandosin.png";
import Rolande from "../assets/team/RolandeNamegabe.png";
import Ruth from "../assets/team/Ruth.png";
import samchen from "../assets/team/samchen.png";
import zainab from "../assets/team/Zainab.png";
import sapiens from "../assets/team/sapiens.png";
import WDCLogo from "../assets/images/wdclogobg.png";

function TeamPage() {
  const founders = [
    {
      location: "Austria",
      title: "Founder",
      bio: "",
      email: "",
      socials: [],
      name: "Sapiens Ndatabaye",
      image: sapiens,
    },
    {
      location: "USA",
      title: "Founder",
      bio: "",
      email: "",
      socials: [],
      name: "Rolande Namegabe",
      image: Rolande,
    },
    {
      location: "Qatar",
      title: "Founder",
      bio: "",
      email: "",
      socials: [],
      name: "Zainab Akhtar",
      image: zainab,
    },
  ];
  const ClevelExecutives = [
    {
      location: "Canada",
      title: "Chief Executif Officer",
      bio: "",
      email: "",
      socials: [],
      name: "Choice Ufuoma Okoro",
      image: choice,
    },
    {
      location: "Kenya",
      title: "Chief Information Officer",
      bio: "",
      email: "",
      socials: [],
      name: "James Mbogo",
      image: james,
    },
    {
      location: "DRC",
      title: "Chief Technical Officer",
      bio: "",
      email: "",
      socials: [],
      name: "David Kabanga",
      image: davidk,
    },
  ];

  const TeamLeads = [
    {
      location: "DRC",
      title: "Head of Information System",
      bio: "",
      email: "",
      socials: [],
      name: "Joseph Bakulikira",
      image: josephb,
    },
    {
      location: "DRC",
      title: "Head of Policy and Strategy",
      bio: "",
      email: "",
      socials: [],
      name: "Anne Nduku",
      image: Anne,
    },
    {
      location: "Egypt",
      title: "Head of Research Analysis and Digital Innovation",
      bio: "",
      email: "",
      socials: [],
      name: "David Mulume",
      image: davidmulume,
    },
  ];

  const interns = [
    {
      location: "",
      title: "Forecast Intern",
      bio: "",
      email: "",
      socials: [],
      name: "Gagana Md",
      image: WDCLogo,
    },
  ];

  const staffs = [
    {
      location: "Ivory Coast",
      title: "Data Analyst",
      bio: "",
      email: "",
      socials: [],
      name: "Anselme Konan",
      image: Anselme,
    },
    {
      location: "Ghana",
      title: "Assessment Specialist/Project Manager",
      bio: "",
      email: "",
      socials: [],
      name: "Ayuba Abubakar",
      image: Ayuba,
    },
    {
      location: "DRC",
      title: "GIS Analyst",
      bio: "",
      email: "",
      socials: [],
      name: "Boaz Muliri",
      image: Boaz,
    },
    {
      location: "DRC",
      title: "GIS Analyst",
      bio: "",
      email: "",
      socials: [],
      name: "Danny Kikwaya",
      image: WDCLogo,
    },
    {
      location: "DRC",
      title: "Full Stack dev",
      bio: "",
      email: "",
      socials: [],
      name: "Doddy Matabaro",
      image: doddy,
    },
    {
      location: "DRC",
      title: "UX Designer and Marketing Officer",
      bio: "",
      email: "",
      socials: [],
      name: "John kibwe",
      image: kibwe,
    },

    {
      location: "Ghana",
      title: "Communication and Social Media Specialist",
      bio: "",
      email: "",
      socials: [],
      name: "Ellen Samche",
      image: samchen,
    },
    {
      location: "DRC",
      title: "Data Scientist",
      bio: "",
      email: "",
      socials: [],
      name: "Le Doux Medi",
      image: ledoux,
    },
    {
      location: "",
      title: "IT and Cyber Security Officer",
      bio: "",
      email: "",
      socials: [],
      name: "Elvis Matara",
      image: WDCLogo,
    },
    {
      location: "",
      title: "Finance & HR Officer",
      bio: "",
      email: "",
      socials: [],
      name: "Francine Nabintu",
      image: WDCLogo,
    },
    {
      location: "DRC",
      title: "GIS Analyst",
      bio: "",
      email: "",
      socials: [],
      name: "Isaac Ntabala",
      image: isaac,
    },
    {
      location: "DRC",
      title: "AI specialist",
      bio: "",
      email: "",
      socials: [],
      name: "Joseph Kaniki",
      image: WDCLogo,
    },

    // {
    //   location: "Burundi",
    //   title: "",
    //   bio: "",
    //   email: "",
    //   socials: [],
    //   name: "Shanice",
    //   image: bujumbura,
    // },
    // {
    //   location: "Germany",
    //   title: "",
    //   bio: "",
    //   email: "",
    //   socials: [],
    //   name: "Maria",
    //   image: maria,
    // },
    {
      location: "Kenya",
      title: "Geospacial Analyst",
      bio: "",
      email: "",
      socials: [],
      name: "Mary Muthee",
      image: marie,
    },
    {
      location: "USA",
      title: "Visualization specialist",
      bio: "",
      email: "",
      socials: [],
      name: "Oluwandosin",
      image: oluwan,
    },
    {
      location: "Kenya",
      title: "",
      bio: "",
      email: "",
      socials: [],
      name: "Ruth Ndegwa",
      image: Ruth,
    },
    {
      location: "",
      title: "Chief Advocacy Officer",
      bio: "",
      email: "",
      socials: [],
      name: "Lilla Albert",
      image: WDCLogo,
    },
    {
      location: "Italy",
      title: "Information management",
      bio: "",
      email: "",
      socials: [],
      name: "Lorenzo Libertini",
      image: WDCLogo,
    },
    {
      location: "",
      title: "Forecast Intern",
      bio: "",
      email: "",
      socials: [],
      name: "Man Ho Wong",
      image: WDCLogo,
    },
    {
      location: "",
      title: "Geospacial Analyst",
      bio: "",
      email: "",
      socials: [],
      name: "Muchio Ndera",
      image: WDCLogo,
    },
    {
      location: "",
      title: "GIS",
      bio: "",
      email: "",
      socials: [],
      name: "Nakato Jane Hope",
      image: jane,
    },
    {
      location: "",
      title: "Forecast Analyst",
      bio: "",
      email: "",
      socials: [],
      name: "Narayan Adhikari",
      image: WDCLogo,
    },
    {
      location: "",
      title: "UI and UX designer",
      bio: "",
      email: "",
      socials: [],
      name: "Norbert Balisha",
      image: WDCLogo,
    },
    {
      location: "",
      title: "AI Team Lead",
      bio: "",
      email: "",
      socials: [],
      name: "Seraphin Baributsa",
      image: WDCLogo,
    },
    {
      location: "",
      title: "Communication specialist",
      bio: "",
      email: "",
      socials: [],
      name: "Yacinthe Keiza",
      image: WDCLogo,
    },
  ];

  const team_data = {
    founders: founders,
    clevelexecutives: ClevelExecutives,
    "team leads": TeamLeads,
    interns: interns,
    staff: staffs,
  };

  const [teamkey, setTeamKey] = useState("founders");

  return (
    <div>
      <br />
      <section className="bg-white dark:bg-n-8">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            Meet Our Team
          </h1>

          <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
            At World Disaster Center, our team is the heart and soul of our
            mission. We are a diverse group of dedicated professionals, united
            by our passion for making a positive impact in the world. Each
            member brings unique skills and experiences that drive our
            initiatives forward.
          </p>

          <div className="flex items-center justify-center">
            <div className="flex items-center p-1 border border-blue-600 dark:border-blue-400 rounded-xl">
              <button
                onClick={() => {
                  setTeamKey("founders");
                }}
                className={`px-4 py-2 text-sm font-medium md:py-3  rounded-xl md:px-12 capitalize ${
                  teamkey === "founders"
                    ? "bg-blue-600 text-white"
                    : " transition-colors duration-300 md:py-3 text-blue-600 dark:text-blue-400 dark:hover:text-white focus:outline-none hover:bg-blue-600 hover:text-white"
                }`}
              >
                Founders
              </button>
              <button
                onClick={() => {
                  setTeamKey("clevelexecutives");
                }}
                className={`px-4 py-2 text-sm font-medium md:py-3  rounded-xl md:px-12 capitalize ${
                  teamkey === "clevelexecutives"
                    ? "bg-blue-600 text-white"
                    : " transition-colors duration-300 md:py-3 text-blue-600 dark:text-blue-400 dark:hover:text-white focus:outline-none hover:bg-blue-600 hover:text-white"
                }`}
              >
                Executives
              </button>
              <button
                onClick={() => {
                  setTeamKey("team leads");
                }}
                className={`px-4 py-2 text-sm font-medium md:py-3  rounded-xl md:px-12 capitalize ${
                  teamkey === "team leads"
                    ? "bg-blue-600 text-white"
                    : "transition-colors duration-300 md:py-3 text-blue-600 dark:text-blue-400 dark:hover:text-white focus:outline-none hover:bg-blue-600 hover:text-white"
                }`}
              >
                Team Lead
              </button>
              <button
                onClick={() => {
                  setTeamKey("staff");
                }}
                className={`px-4 py-2 text-sm font-medium md:py-3  rounded-xl md:px-12 capitalize ${
                  teamkey === "staff"
                    ? "bg-blue-600 text-white"
                    : "transition-colors duration-300 md:py-3 text-blue-600 dark:text-blue-400 dark:hover:text-white focus:outline-none hover:bg-blue-600 hover:text-white"
                }`}
              >
                Staff
              </button>
              <button
                onClick={() => {
                  setTeamKey("interns");
                }}
                className={`px-4 py-2 text-sm font-medium md:py-3  rounded-xl md:px-12 capitalize ${
                  teamkey === "interns"
                    ? "bg-blue-600 text-white"
                    : "transition-colors duration-300 md:py-3 text-blue-600 dark:text-blue-400 dark:hover:text-white focus:outline-none hover:bg-blue-600 hover:text-white"
                }`}
              >
                Interns
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
            {team_data[teamkey].map((member, index) => {
              return (
                <div
                  key={`${index}-member`}
                  className="flex flex-col items-center"
                >
                  <div className="" style={{ background: "#ffffffaa" }}>
                    <img
                      className="object-cover w-full rounded-xl aspect-square"
                      src={member?.image}
                      alt={member.name}
                      style={{ height: "200px", aspectRation: "4:3" }}
                    />
                  </div>
                  <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                    {member.name}
                  </h1>

                  <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">
                    {member?.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default TeamPage;
