import ChatBot, { Button } from "react-chatbotify";
// import { flow } from "../chatbot/flow";
import { ChatRounded } from "@mui/icons-material";
import Chat from "../assets/chatbot/chat.png";
import Bot from "../assets/chatbot/robot.png";
import Assistant from "../assets/chatbot/technical-support.png";
import { useState } from "react";

const questions = {
  "What is GDMAS?":
    "GDMAS stands for Global Disaster Monitoring and Alert System. It integrates satellite imagery and weather station data to detect and predict natural and man-made disasters.",
  "What types of disasters does GDMAS monitor?":
    "GDMAS monitors various types of disasters, including earthquakes, tsunamis, hurricanes, floods, wildfires, industrial accidents, ...",
  "How can I become a stakeholder in GDMAS?":
    "You can join us as a stakeholder by visiting our website and filling out the “Become a stakeholder” form. This will keep you informed and ahead of potential disasters.",
  "How does GDMAS provide real-time alerts?":
    "GDMAS aggregates data from multiple sources such as satellite imagery, weather stations, seismic sensors, and social media feeds to provide real-time alerts and advanced analytics",
  "Is GDMAS accessible to the public?":
    "Yes, GDMAS provides public access to real-time disaster alerts and historical data. You can explore our interactive maps and sign in or sign to our platform to stay updated.",
  "How accurate are GDMAS predictions?":
    "GDMAS predictions are based on scientific models and historical data. While we strive for accuracy, unforeseen factors can impact the precision of our alerts.",
  "Can I embed GDMAS alerts on my website?": "This feature is coming soon.",
  more: "To learn more about World Disaster Center, visit the about page on our website !",
};

const ChatBotComponent = () => {
  const [form, setForm] = useState({});
  const formStyle = {
    marginTop: 10,
    marginLeft: 20,
    border: "1px solid #491d8d",
    padding: 10,
    borderRadius: 5,
    maxWidth: 300,
  };

  const flow = {
    start: {
      message: "Hello! Welcome to world disaster center, How can i help you?",
      //   chatDisabled: true,
      options: [
        "What is GDMAS?",
        "What types of disasters does GDMAS monitor?",
        "How can i join the World Disaster Center?",
        "How can I become a stakeholder in GDMAS?",
        "How does GDMAS provide real-time alerts?",
        "Is GDMAS accessible to the public?",
        "How accurate are GDMAS predictions?",
        "Can I embed GDMAS alerts on my website?",
        "more",
      ],
      function: (params) => setForm({ ...form, name: params.userInput }),
      path: "give_response",
    },
    frequently_asked: {
      message: "here are some frequently asked questions",
      //   chatDisabled: true,
      options: [
        "How does GDMAS provide real-time alerts?",
        "Is GDMAS accessible to the public?",
        "How accurate are GDMAS predictions?",
        "Can I embed GDMAS alerts on my website?",
      ],
      function: (params) => setForm({ ...form, name: params.userInput }),
      path: "give_response",
    },
    give_response: {
      message: (params) => `${questions[params.userInput]}`,
      function: (params) => setForm({ ...form, age: params.userInput }),
      path: "finish",
    },
    finish: {
      message:
        "To learn more about World Disaster Center, visit the about page on our website !",
      chatDisabled: true,
      function: (params) =>
        setForm({ ...form, pet_ownership: params.userInput }),
    },
  };

  const settings = {
    isOpen: false,
    general: {
      primaryColor: "#000c2e",
      secondaryColor: "#141d4b",
      fontFamily: "Arial, sans-serif",
      embedded: false,
    },
    audio: {
      disabled: true,
    },
    chatHistory: {
      storageKey: "chatbot_assistant_history_wdc",
    },
    chatButton: {
      icon: Chat,
    },
    botBubble: {
      showAvatar: true,
      avatar: Bot,
      simStream: true,
      streamSpeed: 80,
    },
    header: {
      title: "WDC Assistant Bot",
      avatar: Assistant,
      buttons: [Button.CLOSE_CHAT_BUTTON],
    },
    notification: {
      volume: 0,
      showCount: false,
    },
    footer: {
      buttons: [Button.FILE_ATTACHMENT_BUTTON, Button.EMOJI_PICKER_BUTTON],
      text: "World Disaster Center Assistant",
    },
    tooltip: {
      text: "How can I assist you today?",
      mode: "START",
    },
    // other sections
  };

  // styles here
  const styles = {
    headerStyle: {
      background: "#000522",
      color: "#ffffff",
      padding: "10px",
    },
    chatWindowStyle: {
      backgroundColor: "#f2f2f2",
    },
    chatButtonStyle: {
      //   background: "transparent",
      //   display: "flex",
      //   objectFit: "contain",
      //   overflow: "auto",
    },
    // ...other styles
  };
  return <ChatBot flow={flow} styles={styles} settings={settings} />;
};

export default ChatBotComponent;
