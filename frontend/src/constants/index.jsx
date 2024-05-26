import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

import Volcano from "../assets/volcano.png";
import Tornado from "../assets/tornado.png";
import Wave from "../assets/wave.png";
import Mud from "../assets/mud.png";
import Floods from "../assets/floods.png";
import Fire from "../assets/fire.png";
import Earthquake from "../assets/earthquake.png";
import desert from "../assets/desert.png";
import Flooding from "../assets/floooding.png";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "/",
  },
  {
    id: "1",
    title: "Blogs",
    url: "/blogs",
  },
  {
    id: "2",
    title: "About",
    url: "/about",
  },
  {
    id: "3",
    title: "Services",
    url: "/services",
  },
  {
    id: "4",
    title: "Sign up",
    url: "/signup",
    onlyMobile: true,
    notconnected: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "/signin",
    onlyMobile: true,
    notconnected: true,
  },
  {
    id: "6",
    title: "Profile",
    url: "/profile",
    onlyMobile: true,
    onlyConnected: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = ["Detection System", "Real-Time Alerts"];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "The GDMAS software platform monitors various types of disasters \
  worldwide including earthquakes, tsunamis, hurricanes, floods, \
  wildfires, and industrial accidents. It aggregate data from multiple \
  sources such as satellite imagery, weather stations, seismic \
  sensors, and social media feeds to provide real-time alerts and \
  advanced analytics.";

export const collabContent = [
  {
    id: "0",
    title: "Real-Time Alerts and Analytics",
    text: "With the GDMAS system, stakeholders receive real-time alerts and access to advanced analytics.\
     This allows them to stay informed about ongoing disasters and make data-driven decisions to mitigate risks and respond effectively.",
  },
  {
    id: "1",
    title: "Comprehensive Data Sources",
    text: "The GDMAS platform leverages a wide range of data sources, including satellite imagery\
    weather stations, seismic sensors, social media feeds, and other relevant sources. By aggregating and \
    analyzing this data, it provides comprehensive insights into disaster events and their potential impact",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Volcano",
    icon: Volcano,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Tornado",
    icon: Tornado,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Rain",
    icon: Floods,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Floods",
    icon: Flooding,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Fire",
    icon: Fire,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Wave",
    icon: Wave,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Landslide",
    icon: Mud,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Detection System",
    text: "Aggregate data from multiple sources to detect and predict natural man-made disasters.",
    backgroundUrl: "assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Real-Time Alerts",
    text: "Notifies stakeholders of potential disasters as they are detected, enabling immediate response.",
    backgroundUrl: "assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
