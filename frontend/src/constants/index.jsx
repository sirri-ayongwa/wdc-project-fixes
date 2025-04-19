import {
  benefitIcon1,
  chromecast,
  disc02,
  discordBlack,
  facebook,
  file02,
  homeSmile,
  instagram,
  plusSquare,
  recording01,
  recording03,
  searchMd,
  sliders04,
  telegram,
  twitter,
} from "../assets";

import Volcano from "../assets/volcano.png";
import Tornado from "../assets/tornado.png";
import Wave from "../assets/wave.png";
import Mud from "../assets/mud.png";
import Floods from "../assets/floods.png";
import Fire from "../assets/fire.png";
// import Earthquake from "../assets/earthquake.png";
// import desert from "../assets/desert.png";
import Flooding from "../assets/floooding.png";
import avielon from "../assets/logos/Avielon_logo.png";
import ghtc from "../assets/logos/GHTC_logo.jpeg";
import opendeved from "../assets/logos/opendeved_logo.png";
import rha from "../assets/logos/rha_logo.png";
import equity from "../assets/logos/equity_logo.png";
import codeforafrica from "../assets/logos/codeforafrica_logo.png";
import rapidgrowth from "../assets/logos/rapidgrowth_logo.jpeg";
import orange from "../assets/logos/orange_logo.png";
import kaizenmind from "../assets/logos/kaizenmind_logo.png";
import pui from "../assets/logos/pui_logo.png";
import undp from "../assets/logos/undp_logo.png";
import gcse from "../assets/logos/gsce_logo.png";
import esri from "../assets/logos/esri_logo.png";
import google from "../assets/logos/google_logo.png";
import burohelp from "../assets/logos/burohelp_logo.png";
import canadagovernment from "../assets/logos/govermentofcanada_logo.png";
import ada from "../assets/logos/ada_logo.png";
import esa from "../assets/logos/esa_logo.png";
// import raindrop from '../assets/'
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
    title: "Contact",
    url: "/contact",
  },
  {
    id: "3",
    title: "Sign up",
    url: "/signup",
    onlyMobile: true,
    notconnected: true,
  },
  {
    id: "4",
    title: "Sign in",
    url: "/signin",
    onlyMobile: true,
    notconnected: true,
  },
  {
    id: "5",
    title: "Profile",
    url: "/profile",
    onlyMobile: true,
    onlyConnected: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [];

export const strategicpartner_companyLogos = [canadagovernment, esa, orange, gcse, pui, kaizenmind, burohelp, rapidgrowth];
export const collaborator_companyLogos = [ada, codeforafrica, opendeved];
export const technicalsponsor_companyLogos = [google, esri];
export const implmentationpartner_companyLogos = [undp, rha, ghtc];
export const financialpartner_companyLogos = [equity];
export const technicalpartner_companyLogos = [avielon];

export const brainwaveServices = ["Detection System", "Real-Time Alerts"];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const collabText =
  "The Michael software system monitors various types of disasters \
  worldwide including earthquakes, tsunamis, hurricanes, floods, \
  wildfires, and industrial accidents.";

export const collabContent = [
  {
    id: "0",
    title: "Real-Time Alerts and Analytics",
    text: "With the Michael system, stakeholders receive real-time alerts and access to advanced analytics.\
     This allows them to stay informed about ongoing disasters and make data-driven decisions to mitigate risks and respond effectively.",
  },
  {
    id: "1",
    title: "Comprehensive Data Sources",
    text: "The Michael platform leverages a wide range of data sources, including satellite imagery\
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
    icon: Floods,
    width: 38,
    height: 32,
  },
];

export const roadmap = [];

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
    id: "00",
    title: "Tailored Solutions",
    text: "At WDC, we provide technology-driven solutions designed to strengthen disaster preparedness, optimize crisis response, and empower decision-makers. Our services focus on equipping vulnerable communities with the tools and insights needed to mitigate risks, respond effectively, and recover sustainably.",
    backgroundUrl: "assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: "",
    hyperlink: "",
    comingsoon: false,
    url: "/solution",
  },
  {
    id: "02",
    title: "Global Products",
    text: "WDC's Global Products are designed to strengthen disaster resilience and preparedness globally. By providing actionable insights, connecting resources, and offering comprehensive analyses, they empower communities and organizations to make informed decisions and respond effectively.",
    backgroundUrl: "assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: "",
    hyperlink: "",
    comingsoon: false,
    url: "/global-products",
  },
  {
    id: "03",
    title: "Roster Membership",
    text: "WDC’s roster includes experienced professionals, local experts, partner organizations, private companies, all ready for immediate action in disaster-affected areas. We value the unique contributions of every member, recognizing that a range of perspectives, skills, and local experiences enhance our ability to respond effectively.",
    backgroundUrl: "assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: "",
    hyperlink: "",
    comingsoon: false,
    url: "/membership",
  },
  {
    id: "04",
    title: "Partnerships",
    text: "WDC partners with strategic, technical, and funding collaborators, including financial sponsors and software providers, to bring our solutions to life. Supported by long-term investment partners and in-kind contributions, these collaborations drive sustainable and impactful disaster preparedness, response and recovery innovations.",
    backgroundUrl: "assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: "",
    hyperlink: "",
    comingsoon: true,
    url: "/about/partners",
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

export const dropdownData = [
  {
    title: "Products",
    routings: {
      "Michael": "/products/michael",
      "Lifeline": "/products/lifeline",
      "Tectra": "/products/tectra",
      "Crisis Atlas": "/products/crisis-atlas",
      "Nostradamus": "/products/nostradamus",
      "Risk Matrix": "/products/risk-matrix",
      "Assessment Builder": "/products/assessment-builder",
      "Field Collector": "/products/field-collector",
      "Eagle": "/products/eagle",
      "Argus": "/products/argus",
    },
  },
  {
    title: "Industries",
    routings: {
      "Disaster Risk Reduction & Emergency Management": "/industries/disaster-risk-reduction",
      "Humanitarian Operations & Relief Logistics": "/industries/humanitarian-operations",
      "Climate Change & Environmental Management": "/industries/climate-change",
      "Health & Epidemic Intelligence": "/industries/health-epidemic",
      "Urban Planning & Resilient Cities": "/industries/urban-planning",
      "Water, Sanitation & Hygiene (WASH)": "/industries/wash",
      "Food Security & Nutrition Systems": "/industries/food-security",
      "Energy, Infrastructure & Utilities": "/industries/energy-infrastructure",
      "Finance, Insurance & Risk Modeling": "/industries/finance-insurance",
      "Education, Research & Knowledge Systems": "/industries/education-research",
      "Natural Resource Governance & Mining": "/industries/natural-resources",
      "Transportation & Logistics": "/industries/transportation-logistics",
      "Telecommunications & Digital Infrastructure": "/industries/telecommunications",
      "Governance, Policy & Global Cooperation": "/industries/governance-policy",
      "Defense & Security": "/industries/defense-security",
    },
  },
  {
    title: "Support & Services",
    routings: {
      // Preparedness & Early Warning
      "Real-Time Disaster Monitoring System Deployment": "/services/preparedness/monitoring-deployment",
      "Custom Early Warning Systems": "/services/preparedness/early-warning",
      "Hazard Mapping & Vulnerability Profiling": "/services/preparedness/hazard-mapping",
      "Risk Index Development": "/services/preparedness/risk-index",
      "Offline Early Alert Infrastructure Deployment": "/services/preparedness/offline-alert",
      "Installation of Predictive Dashboards": "/services/preparedness/predictive-dashboards",
      "Community-Based Preparedness Program Design": "/services/preparedness/community-preparedness",
      "Climate Forecasting & Scenario Planning": "/services/preparedness/climate-forecasting",
      // Response & Field Operations
      
      // Training & Capacity Building
      "Access to WDC Academy Courses": "/services/training/academy-courses",
      "Simulation-Based Preparedness Drills": "/services/training/preparedness-drills",
      "On-Demand or In-Country Custom Training Programs": "/services/training/custom-training",
      "Technical Training": "/services/training/technical-training",
      "Emergency Response Certification": "/services/training/response-certification",
      "Integration Workshops": "/services/training/integration-workshops",
      // System Integration & Data Services
      "Custom Dashboard Development": "/services/integration/dashboard-development",
      "Secure System Integration": "/services/integration/system-integration",
      "Real-Time Data Visualization & Analytics": "/services/integration/data-visualization",
      "Automated Donor Reporting Systems": "/services/integration/donor-reporting",
      "APIs for Partner Access": "/services/integration/partner-apis",
      "Offline & Mobile Access Customization": "/services/integration/offline-access",
      "Real-Time Risk Feed Integration": "/services/integration/risk-feed",
  
    },
  },
  {
    title: " Arenas",
    routings: {
      "Crisis Chronicles": "/stories/crisis-chronicles",
      "Impact Diaries": "/stories/impact-diaries",
      "Forecasted Futures": "/stories/forecasted-futures",
      "Visual Atlas": "/stories/visual-atlas",
      "Behind the Systems": "/stories/behind-systems",
      "Ground Zero": "/stories/ground-zero",
      "Disasterpedia": "/stories/disasterpedia",
      "Voices of Resilience": "/stories/voices-resilience",
    },
  },

  {
    title: "About",
    routings: {
      // Column 1: About WDC
      "About the World Disaster Center": "/about/wdc",
      "WDC Programs & Global Missions": "/about/programs",
      "Events & Deployments": "/about/events",
      "Strategic Partners": "/about/partners",
      "Join the Team": "/about/join",
      "Media & Analyst Briefings": "/about/media",
      "Contact Us": "/about/contact",
      "WDC Academy": "/about/academy",
      "Roaster Membership": "/roster",
      
      // Column 2: About Disaster
      "What Is a Disaster?": "/about/disaster",
      "How to End Disaster Impacts?": "/about/end-disaster",
      // Column 3: Commitment to Innovation
      "Artificial Intelligence": "/about/innovation/ai",
      "Satellite & Drone Integration": "/about/innovation/satellite-drone",
      "Blockchain-Enabled Disaster Finance": "/about/innovation/blockchain",
      "Digital Humanitarian Transformation": "/about/innovation/digital-transformation",
    },
  },
];