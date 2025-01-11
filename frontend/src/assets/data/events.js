import SAPIENS from '../../assets/images/events/sapiens_wdc.jpeg'
import ESRI from '../../assets/images/events/esri_wdc.png'
import DMULUME from '../../assets/images/events/conference_david.jpeg'
import cifrrica from '../../assets/images/events/CIFRRICA.jpeg'
import workshop from '../../assets/images/events/linkedin_workshop_2.png'
import drc_workshop from '../../assets/images/events/workshop.jpg'

export const eventItems = []


export const eventItemsSpecial = [
  {
    title: "Esri Developer & Technology Summit",
    image: ESRI, 
    description: "WDC’s Co-Founder and CEO to present Michael at ESRI's Summit in March 2025.",
    link: "",

    doc:[
      {
        "type": "header",
        "content" : "Date: March 11–14, 2025"
      },
      {
        "type": "header",
        "content" : "Location: Palm Springs, California, USA"
      },
      {
        "type": "paragraph",
        "content" : "Join us at the Esri Developer & Technology Summit, where WDC’s Co-Founder and CEO will present an inspiring keynote on the life-saving potential of Geo-AI technology in disaster management.        "
      },
      {
        "type": "link",
        "href" : "https://www.esri.com/en-us/about/events/devtech/overview",
        "content" : "Learn more about the Esri Developer & Technology Summit"
      },
      {
        "type" : "image",
        "src" : SAPIENS,
        "alt" : "Image",
        "caption" : "",
      },

      {
        "type": "paragraph",
        "content" : "At the World Disaster Center, we believe that disasters don’t have to devastate. Our revolutionary Michael app harnesses the power of data from multiple sources, AI and human intelligence to predict and prevent disasters with unprecedented precision, saving lives and protecting communities worldwide. "
      },
      {
        "type": "quote",
        "content": "Don’t miss this chance to hear about WDC’s journey in advancing technology for global resilience and how the Michael app is shaping the future of disaster response. "
      },
    ]
    

  },
  {
    title: "Climate Change Resilience in Africa",
    image: cifrrica, 
    description: "WDC’s Head of Research, Analysis and Digitial Innovation, David Mulume, will present Michael at CIFRRICA in February 2025.",
    link: "",

    doc:[
      {
        "type": "header",
        "content" : "Date: February 24–26, 2025"
      },
      {
        "type": "header",
        "content" : "Bibliotheca Alexandrina and Senghor University, Alexandria, Egypt"
      },
      {
        "type": "paragraph",
        "content" : "Discover how WDC’s cutting-edge disaster monitoring and alert system, Michael, leverages AI, location data, and satellite imagery to provide real-time alerts and enhance climate resilience across Africa. By integrating local participatory data, Michael empowers communities with predictive insights and faster response times to mitigate the impact of climate-related disasters. "
      },
      {
        "type": "link",
        "href" : "https://www.usenghor-francophonie.org/cifrrica/",
        "content" : "Learn more about CIFRRiCA 2025."
      },
      {
        "type" : "image",
        "src" : DMULUME,
        "alt" : "Image",
        "caption" : "",
      },
      {
        "type": "quote",
        "content": "Don’t miss this chance to hear about WDC’s journey in advancing technology for climate global resilience."
      },
    ]
  },
  {
    title: "Workshop on Disaster Resilience in Kinshasa",
    image: drc_workshop, 
    description: "World Disaster Center in collaboration with GHTC (Global Hub of Technology in Congo) to hold a workshop on 23rd December 2024, to collaborate with key stakeholders and contribute to an initiative aimed at stopping the impacts of disasters in DRC.",
    link: "",

    doc:[
      {
        "type": "header",
        "content" : "Date: December 23, 2024 & Time: 8:30 AM - 16:30 PM GMT+1"
      },
      {
        "type": "header",
        "content" : "Location: COTEX Concession No. 63, Avenue Colonel Mondjiba, Kinshasa, Congo "
      },
      {
        "type": "paragraph",
        "content" : "The World Disaster Center (WDC), in partnership with the Global Hub of Technology in Congo (GHTC), will unveils its groundbreaking pilot project, Mickaeli, live from Kinshasa. "
      },

      {
        "type" : "image",
        "src" : workshop,
        "alt" : "Image",
        "caption" : "",
      },
      {
        "type": "paragraph",
        "content" : "Event Highlights:"
      },
      {
        "type": "list",
        "items": [
          "In-depth discussions on disaster trends and challenges in the DRC.",
          "A live demonstration of Mickaeli's capabilities and tailored solutions.",
          "Collaborative sessions with key stakeholders to explore partnership opportunities.",
          "Recognition of local disaster management initiatives.",
        ]
      },
      {
        "type": "quote",
        "content": "Be part of the movement to revolutionize disaster prevention and resilience in the DRC!"
      },
    ]
    

  }
]