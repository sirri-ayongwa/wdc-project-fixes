import React from "react";
import Anne from "../assets/team/anne.jpg";
import Anselme from "../assets/team/AnselmeKonan.jpg";
import Aparna from "../assets/team/Aparna Srivastava.jpg";
import Ayuba from "../assets/team/AyubaAbubakar.jpg";
import Boaz from "../assets/team/boaz muliri.jpg";
import bujumbura from "../assets/team/bujumbura.jpg";
import choice from "../assets/team/choice.jpg";
import davidk from "../assets/team/DavidKabanga.jpg";
import davidmulume from "../assets/team/davidmulume.jpg";
import doddy from "../assets/team/DoddyMatabaro.jpg";
import isaac from "../assets/team/isaac.jpg";
import james from "../assets/team/james.jpg";
import jane from "../assets/team/Jane.jpg";
import josephb from "../assets/team/joseph.jpg";
import kibwe from "../assets/team/kibwe.jpg";
import ledoux from "../assets/team/LedouxMedi.jpg";
import marc from "../assets/team/marc.jpg";
import maria from "../assets/team/MariaKohutova.jpg";
import marie from "../assets/team/marie.jpg";
import oluwan from "../assets/team/Oluwandosin.jpg";
import Rolande from "../assets/team/RolandeNamegabe.jpg";
import Ruth from "../assets/team/Ruth.jpg";
import samchen from "../assets/team/samchen.jpg";
import scott from "../assets/team/scottwalker.jpg";
import zainab from "../assets/team/Zainab.jpg";
import zeinab from "../assets/team/zeinab.jpg";
import sapiens from "../assets/team/sapiens.jpg";

function TeamPage() {
  const team_data = [
    {
      location: "Austria",
      title: "",
      bio: "",
      email: "",
      socials: [],
      name: "Sapiens Ndatabaye",
      image: sapiens,
    },
    {
      location: "USA",
      title: "",
      bio: "",
      email: "",
      socials: [],
      name: "Rolande Namegabe",
      image: Rolande,
    },
    {
      location: "Qatar",
      title: "",
      bio: "",
      email: "",
      socials: [],
      name: "Zainab Akhtar",
      image: zainab,
    },
    {
      location: "Canada",
      title: "",
      bio: "",
      email: "",
      socials: [],
      name: "Choice Ufuoma Okoro",
      image: choice,
    },
    {
      location: "Kenya",
      title: "",
      bio: "",
      email: "",
      socials: [],
      name: "James Mbogo",
      image: james,
    },
    {
      location: "DRC",
      title: "",
      bio: "",
      email: "",
      socials: [],
      name: "David Kabanga",
      image: davidk,
    },
    {
      location: "DRC",
      title: "",
      bio: "",
      email: "",
      socials: [],
      name: "Joseph Bakulikira",
      image: josephb,
    },
    {
      location: "Egypt",
      title: "",
      bio: "",
      email: "",
      socials: [],
      name: "David Mulume",
      image: davidmulume,
    },
    {
      location: "Kenya",
      title: "",
      bio: "",
      email: "",
      socials: [],
      name: "Anne Nduku",
      image: Anne,
    },
    {
      location: "Ivory Coast",
      title: "",
      bio: "",
      email: "",
      socials: [],
      name: "Anselme Konan",
      image: Anselme,
    },
    {
      location: "Ghana",
      title: "",
      bio: "",
      email: "",
      socials: [],
      name: "Ayuba Abubakar",
      image: Ayuba,
    },
    {
      location: "DRC",
      title: "",
      bio: "",
      email: "",
      socials: [],
      name: "Boaz",
      image: Boaz,
    },
    {
      location: "Burundi",
      title: "",
      bio: "",
      email: "",
      socials: [],
      name: "Shanice",
      image: bujumbura,
    },
    {
      location: "DRC",
      title: "",
      bio: "",
      email: "",
      socials: [],
      name: "Doddy Matabaro",
      image: doddy,
    },
    {
      location: "DRC",
      title: "",
      bio: "",
      email: "",
      socials: [],
      name: "Isaac Ntabala",
      image: isaac,
    },
    {
      location: "Uganda",
      title: "",
      bio: "",
      email: "",
      socials: [],
      name: "Jane",
      image: jane,
    },
    {
      location: "DRC",
      title: "",
      bio: "",
      email: "",
      socials: [],
      name: "John kibwe",
      image: kibwe,
    },
    {
      location: "DRC",
      title: "",
      bio: "",
      email: "",
      socials: [],
      name: "Ledoux Medi",
      image: ledoux,
    },
    {
      location: "DRC",
      title: "",
      bio: "",
      email: "",
      socials: [],
      name: "Marc Kalembu",
      image: marc,
    },
    {
      location: "Germany",
      title: "",
      bio: "",
      email: "",
      socials: [],
      name: "Maria",
      image: maria,
    },
    {
      location: "Kenya",
      title: "",
      bio: "",
      email: "",
      socials: [],
      name: "Mary",
      image: marie,
    },
    {
      location: "USA",
      title: "",
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
      name: "Ruth",
      image: Ruth,
    },
    {
      location: "Ghana",
      title: "",
      bio: "",
      email: "",
      socials: [],
      name: "Samche Ellen",
      image: samchen,
    },
  ];
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
          {team_data.map((member, index) => {
            return (
              <div key={`${index + 1}-team`}>
                <div className="flex justify-center">
                  <img
                    className="object-cover w-24 h-24 rounded-full shadow"
                    src={member?.image}
                    alt="Person"
                  />
                </div>
                <div className="flex flex-col justify-center mt-2">
                  <p className="text-lg font-bold text-center text-gray-500">
                    {member?.name}
                  </p>
                  {/* <p className="mb-4 text-xs text-gray-800">{member?.title}</p> */}
                  {/* <p className="text-sm tracking-wide text-gray-800">
                  {member?.about}
                </p> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TeamPage;
