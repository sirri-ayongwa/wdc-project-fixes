import WDCLogo from "../../assets/images/wdclogobg.png";
import GHTCLogo from "../../assets/images/GHTC.jpeg";
import banner from "../../assets/images/workshop_banner.jpg";
import burundi from "../../assets/images/burundi.png";
import { LocalLaundryService } from "@mui/icons-material";

export const impact = {
  "Completed": [
    {
      country: "Democratic Republic of Congo",
      banner: banner,
      ProjectTitle: "Michael: Global Disaster Monitoring and Alert System Implementation",
      description: "The World Disaster Center (WDC) successfully executed a one-month pilot disaster management program in Kinshasa, the capital of the Democratic Republic of Congo (DRC). Conducted in collaboration with the Global Hub of Technology in Congo (GHTC), the initiative aimed to empower local communities, humanitarian organizations, and partners to strengthen disaster preparedness through the use of Michael, WDC’s innovative, real-time disaster monitoring and alert solution.",
      images :[
        WDCLogo,
        GHTCLogo
      ],
      CoveragePeriod: "19 December 2024 - 19 January 2025",
      ProjectLeaderOrganization: "World Disaster Center (WDC)",
      LocalImplementationOrganization: "Global Hub of Technology in Congo (GHTC)",
      ContactPerson:[
        {
          name: "Sapiens Ndatabaye",
          email: "sndatabaye@worlddisastercenter.org",
        },
        {
          name: "Ormiel Maganga",
          email: "magnamwenge@gmail.com",
        },
      ]
    }
  ],
  "In Progress": [
    { 
      country: "Burundi",
      banner: burundi,
      ProjectTitle: "Michael: Global Disaster Monitoring and Alert System Implementation",
      description: "The World Disaster Center (WDC) is currently on the ground in Burundi to execute a one-month pilot program in one of Africa’s most disaster-prone countries. This mission is dedicated to empowering local communities, humanitarian organizations, and key partners by enhancing disaster preparedness and response. At the heart of this initiative is Michael, WDC’s real-time disaster monitoring and alert platform, designed to provide early warnings, improve coordination, and mitigate the impact of crises before they escalate.",
      images :[
        WDCLogo,
      ],
      CoveragePeriod: "3 February 2025 - 3 March 2025",
      ProjectLeaderOrganization: "World Disaster Center (WDC)",
      LocalImplementationOrganization: null,
      ContactPerson:[
        {
          name: "Rolande Namegabe",
          email: "rnamegabe@worlddisastercenter.org",
        },
        {
          name: "Sheila Ndamama",
          email: "sndamama@worlddisastercenter.org",
        },
      ]

    }
  ],
  "Upcoming": [
    {
      country: "Madagascar",
      status: "Upcoming",
    },
    {
      country: "Haiti",
    }
  ]
};