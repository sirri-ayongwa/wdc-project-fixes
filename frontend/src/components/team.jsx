import React, { useState } from "react";
import billy from "../assets/team/billy.png";
import jietong from "../assets/team/jietong.png";
import jane from "../assets/team/jane.png";
import chaitra from "../assets/team/chaitra.png";
import srinivasa from "../assets/team/srinivasa.png";
import ndifanji from "../assets/team/ndifanji.png";
import Anselme from "../assets/team/AnselmeKonan.png";
import Ayuba from "../assets/team/AyubaAbubakar.png";
import davidk from "../assets/team/DavidKabanga.png";
import davidboard from "../assets/team/davidk.png";
import davidmulume from "../assets/team/davidmulume.png";
import ayushi from "../assets/team/ayushi.png";
import grace from "../assets/team/mariegrace.png";
import doddy from "../assets/team/DoddyMatabaro.png";
import isaac from "../assets/team/isaac.png";
import james from "../assets/team/james.png";
// import jane from "../assets/team/Jane.png";
import josephb from "../assets/team/joseph.png";
import kibwe from "../assets/team/kibwe.png";
import ledoux from "../assets/team/LedouxMedi.png";
import maria from "../assets/team/maria.png";
import marie from "../assets/team/marie.png";
import oluwan from "../assets/team/Oluwandosin.png";
import Rolande from "../assets/team/RolandeNamegabe.png";
import Ruth from "../assets/team/Ruth.png";
import zainab from "../assets/team/zainab.png";
import sapiens from "../assets/team/sapiens.png";
import WDCLogo from "../assets/images/wdclogobg.png";
import lilla from "../assets/team/lilla.png";
import manho from "../assets/team/man-ho.png";
import francine from "../assets/team/francine.png";
import norbert from "../assets/team/norbert.png";
import boaz from "../assets/team/boaz.png";
import elvis from "../assets/team/elvis.png";

function TeamPage() {
  const board = [
    {
      location: "Qatar",
      title: "Business Development Manager @ Econet Wireless Zimbabwe",
      bio: "",
      email: "",
      socials: [],
      name: "Albert Mawungwe",
      image: WDCLogo,
    },
    {
      location: "Austria",
      title: "Global Data Supply Strategy and Operations Manager @ HERE Technologies",
      bio: "",
      email: "",
      socials: [],
      name: "Clint Leander",
      image: WDCLogo,
    },
    {
      location: "USA",
      title: "USCIS OFFICER @ United States Department of Homeland Security",
      bio: "",
      email: "",
      socials: [],
      name: "David C. Kangamina",
      image: davidboard,
    },
    {
      location: "Canada",
      title: "Complaints Officer @ Elections Canada",
      bio: "",
      email: "",
      socials: [],
      name: "Doux Kelvin",
      image: WDCLogo,
    },
    // {
    //   location: "USA",
    //   title: "Founder",
    //   bio: "",
    //   email: "",
    //   socials: [],
    //   name: "Gilbert Arrah",
    //   image: WDCLogo,
    // },
    {
      location: "USA",
      title: "Country Director @ Première Urgence International",
      bio: "",
      email: "",
      socials: [],
      name: "Eugide Lalé Mbunda",
      image: WDCLogo,
    },
    {
      location: "USA",
      title: "Policy Aide to the Commissioner of the 1st District @ Hennepin County",
      bio: "",
      email: "",
      socials: [],
      name: "Ingrid Kubisa",
      image: WDCLogo,
    },
    {
      location: "USA",
      title: "Information Management Delegate @ International Federation of Red Cross and Red Crescent Societies - IFRC",
      bio: "",
      email: "",
      socials: [],
      name: "Jean Stephane Dabone",
      image: WDCLogo,
    },
    {
      location: "USA",
      title: "Head of Mission @ Première Urgence Internationale",
      bio: "",
      email: "",
      socials: [],
      name: "Jonathan Itegwa",
      image:WDCLogo,
    },
    {
      location: "USA",
      title: "PhD Research Consultant, Migration & Human Rights @  Erasmus University Rotterdam",
      bio: "",
      email: "",
      socials: [],
      name: "Maria Kohutova",
      image: maria,
    },
    {
      location: "USA",
      title: "Vice Chair Advisory Panel @ Aidsfonds & Policy Manager @ Transform Health",
      bio: "",
      email: "",
      socials: [],
      name: "Ndifandji Namecha",
      image: ndifanji,
    },
    {
      location: "USA",
      title: "Multi-Country Consortium Coordinator & Chief Of Party PARIC_Mali-Burkina Faso @ International Rescue",
      bio: "",
      email: "",
      socials: [],
      name: "Stephen Aksanti",
      image: WDCLogo,
    },
  ];
  const ClevelExecutives = [
    {
      location: "Paris",
      title: "Co-Founder & Chief Executive Officer",
      bio: "",
      email: "",
      socials: [],
      name: "Sapiens Ndatabaye",
      image: sapiens,
    },
    {
      location: "Qatar",
      title: "Co-Founder & Chief Scientific Officer",
      bio: "",
      email: "",
      socials: [],
      name: "Zainab Akhtar",
      image: zainab,
    },
    {
      location: "New York",
      title: "Co-Founder & Chief Communications Officer",
      bio: "",
      email: "",
      socials: [],
      name: "Rolande Namegabe",
      image: Rolande,
    },
    {
      location: "Kenya",
      title: "Chief Information Officer",
      bio: "",
      email: "",
      socials: [],
      name: "James Mbogo",
      image: WDCLogo,
    },
    {
      location: "DRC",
      title: "Chief Technical Officer",
      bio: "",
      email: "",
      socials: [],
      name: "David Kabanga",
      image: WDCLogo,
    },
  ];

  // const TeamLeads = [
  //   {
  //     location: "DRC",
  //     title: "Information System",
  //     bio: "",
  //     email: "",
  //     socials: [],
  //     name: "Joseph Bakulikira",
  //     image: josephb,
  //   },
  //   {
  //     location: "Egypt",
  //     title: "Research Analysis and Digital Innovation",
  //     bio: "",
  //     email: "",
  //     socials: [],
  //     name: "David Mulume",
  //     image: davidmulume,
  //   },
  //   {
  //     location: "Kenya",
  //     title: "Forecast",
  //     bio: "",
  //     email: "",
  //     socials: [],
  //     name: "Ruth Ndegwa",
  //     image: Ruth,
  //   },
  //   {
  //     location: "Germany",
  //     title: "Advocacy",
  //     bio: "",
  //     email: "",
  //     socials: [],
  //     name: "Lilla Albert",
  //     image: lilla,
  //   },
  // ];

  // const interns = [
  //   {
  //     location: "",
  //     title: "Forecast Intern",
  //     bio: "",
  //     email: "",
  //     socials: [],
  //     name: "Gagana Md",
  //     image: WDCLogo,
  //   },
  //   {
  //     location: "",
  //     title: "Forecast Volunteer",
  //     bio: "",
  //     email: "",
  //     socials: [],
  //     name: "Man Ho Wong",
  //     image: manho,
  //   },
  // ];

  const staffs = [
    {
      location: "Ivory Coast",
      title: "Data Scientist",
      bio: "",
      email: "",
      socials: [],
      name: "Billy Libang",
      image: billy,
    },
    {
      location: "Ivory Coast",
      title: "Data Scientist",
      bio: "",
      email: "",
      socials: [],
      name: "Jietong Lee",
      image: jietong,
    },
    {
      location: "Ivory Coast",
      title: "Dashboard Specialist",
      bio: "",
      email: "",
      socials: [],
      name: "Chaitra Venu Kumar",
      image: chaitra,
    },
    {
      location: "Ivory Coast",
      title: "Website Developer",
      bio: "",
      email: "",
      socials: [],
      name: "Srinivasa  Perisetla",
      image: srinivasa,
    },
    {
      location: "Ivory Coast",
      title: "Data Analyst",
      bio: "",
      email: "",
      socials: [],
      name: "Anselme Konan",
      image: WDCLogo,
    },
    {
      location: "Ivory Coast",
      title: "LLM Developer",
      bio: "",
      email: "",
      socials: [],
      name: "Ayushi Bhujade",
      image: ayushi,
    },
    {
      location: "Ivory Coast",
      title: "Full Stack Developer",
      bio: "",
      email: "",
      socials: [],
      name: "Marie Grâce Bahati",
      image: grace,
    },
    {
      location: "DRC",
      title: "Information System",
      bio: "",
      email: "",
      socials: [],
      name: "Joseph Bakulikira",
      image: josephb,
    },
    {
      location: "Egypt",
      title: "Research Analysis and Digital Innovation",
      bio: "",
      email: "",
      socials: [],
      name: "David Mulume",
      image: WDCLogo,
    },
    {
      location: "Kenya",
      title: "Forecast",
      bio: "",
      email: "",
      socials: [],
      name: "Ruth Ndegwa",
      image: Ruth,
    },
    {
      location: "Germany",
      title: "Advocacy",
      bio: "",
      email: "",
      socials: [],
      name: "Lilla Albert",
      image: lilla,
    },
    {
      location: "",
      title: "Forecast Intern",
      bio: "",
      email: "",
      socials: [],
      name: "Gagana Md",
      image: WDCLogo,
    },
    {
      location: "",
      title: "Forecast Volunteer",
      bio: "",
      email: "",
      socials: [],
      name: "Man Ho Wong",
      image: manho,
    },
    {
      location: "Ghana",
      title: "Drones Expert",
      bio: "",
      email: "",
      socials: [],
      name: "Ayuba Abubakar",
      image: WDCLogo,
    },
    {
      location: "DRC",
      title: "GIS Analyst",
      bio: "",
      email: "",
      socials: [],
      name: "Boaz Muliri",
      image: boaz,
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
      title: "Full Stack Developer",
      bio: "",
      email: "",
      socials: [],
      name: "Doddy Matabaro",
      image: doddy,
    },
    {
      location: "DRC",
      title: "UX Designer",
      bio: "",
      email: "",
      socials: [],
      name: "John Kibwe",
      image: kibwe,
    },
    {
      location: "DRC",
      title: "Data Scientist",
      bio: "",
      email: "",
      socials: [],
      name: "Le Doux Medi",
      image: WDCLogo,
    },
    {
      location: "",
      title: "IT and Cyber Security Officer",
      bio: "",
      email: "",
      socials: [],
      name: "Elvis Matara",
      image: elvis,
    },
    {
      location: "",
      title: "HR Officer",
      bio: "",
      email: "",
      socials: [],
      name: "Francine Nabintu",
      image: francine,
    },

    {
      location: "DRC",
      title: "AI Specialist",
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
      location: "USA",
      title: "Visualization Specialist",
      bio: "",
      email: "",
      socials: [],
      name: "Oluwandosin Agbolabori",
      image: WDCLogo,
    },
    {
      location: "Italy",
      title: "Information Management Specialist",
      bio: "",
      email: "",
      socials: [],
      name: "Lorenzo Libertini",
      image: WDCLogo,
    },
    {
      location: "",
      title: "GIS Visualization Expert",
      bio: "",
      email: "",
      socials: [],
      name: "Nakato Jane Hope",
      image: jane,
    },
    {
      location: "",
      title: "Forecast Consultant",
      bio: "",
      email: "",
      socials: [],
      name: "Narayan Adhikari",
      image: WDCLogo,
    },
    {
      location: "",
      title: "UI and UX Designer",
      bio: "",
      email: "",
      socials: [],
      name: "Norbert Balisha",
      image: norbert,
    },
    {
      location: "",
      title: "AI Developer",
      bio: "",
      email: "",
      socials: [],
      name: "Seraphin Baributsa",
      image: WDCLogo,
    },
  ];

  const team_data = {
    clevelexecutives: ClevelExecutives,
    // "team leads": TeamLeads,
    // interns: interns,
    staff: staffs,
    board: board,
  };

  const handleChangeTeamKey = (new_key) => {
    setTeamKey(new_key);
  };

  const [teamkey, setTeamKey] = useState("clevelexecutives");

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
                  handleChangeTeamKey("clevelexecutives");
                }}
                className={`px-4 py-2 text-sm font-medium md:py-3  rounded-xl md:px-12 capitalize ${
                  teamkey === "clevelexecutives"
                    ? "bg-blue-600 text-white"
                    : " transition-colors duration-300 md:py-3 text-blue-600 dark:text-blue-400 dark:hover:text-white focus:outline-none hover:bg-blue-600 hover:text-white"
                }`}
              >
                Executives
              </button>
              {/* <button
                onClick={() => {
                  handleChangeTeamKey("team leads");
                }}
                className={`px-4 py-2 text-sm font-medium md:py-3  rounded-xl md:px-12 capitalize ${
                  teamkey === "team leads"
                    ? "bg-blue-600 text-white"
                    : "transition-colors duration-300 md:py-3 text-blue-600 dark:text-blue-400 dark:hover:text-white focus:outline-none hover:bg-blue-600 hover:text-white"
                }`}
              >
                Team Lead
              </button> */}
              <button
                onClick={() => {
                  handleChangeTeamKey("staff");
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
                  handleChangeTeamKey("board");
                }}
                className={`px-4 py-2 text-sm font-medium md:py-3  rounded-xl md:px-12 capitalize ${
                  teamkey === "board"
                    ? "bg-blue-600 text-white"
                    : " transition-colors duration-300 md:py-3 text-blue-600 dark:text-blue-400 dark:hover:text-white focus:outline-none hover:bg-blue-600 hover:text-white"
                }`}
              >
                board
              </button>
              {/* <button
                onClick={() => {
                  handleChangeTeamKey("interns");
                }}
                className={`px-4 py-2 text-sm font-medium md:py-3  rounded-xl md:px-12 capitalize ${
                  teamkey === "interns"
                    ? "bg-blue-600 text-white"
                    : "transition-colors duration-300 md:py-3 text-blue-600 dark:text-blue-400 dark:hover:text-white focus:outline-none hover:bg-blue-600 hover:text-white"
                }`}
              >
                Interns & Volunteers
              </button> */}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
            {teamkey === "board" &&
              team_data.board.map((member, index) => {
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

            {teamkey === "clevelexecutives" &&
              team_data.clevelexecutives.map((member, index) => {
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

            {/* {teamkey === "team leads" &&
              team_data["team leads"].map((member, index) => {
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
              })} */}

            {teamkey === "staff" &&
              team_data.staff.map((member, index) => {
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

            {/* {teamkey === "interns" &&
              team_data.interns.map((member, index) => {
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
              })} */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default TeamPage;
