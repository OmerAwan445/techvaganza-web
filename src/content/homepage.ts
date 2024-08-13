import { FaPencilRuler, FaLightbulb, FaTools } from "react-icons/fa";
import {
  AiOutlineCloud,
  AiOutlineGlobal,
  AiOutlineMobile,
} from "react-icons/ai";
import { BiBrain } from "react-icons/bi";
import { GiCog, GiNetworkBars } from "react-icons/gi";
import { MdOutlineBugReport, MdOutlineSecurity } from "react-icons/md";

const homepageContent = {
  // Banner
  title: "Welcome to the Tech Vaganza",
  description: "This is a simple website for our software house",
  banner: {
    staticText: "Be the",
    changingText: ["market leader", "software developer", "best"],
    description:
      "Access passionate and experienced software engineers with skillsets in 10+ technologies, in your timezone.",
  },
  // InfoCards
  infoCardsTitle: "Our Process",
  infoCardsDescription: "We follow these steps to deliver the best software.",
  infoCards: [
    {
      icon: FaPencilRuler,
      title: "We design the best solution for your software.",
      description:
        "In our designs, we take care of every aspect of UI/UX to create the best design solution for your software.",
    },
    {
      icon: FaLightbulb,
      title: "We convert your idea into reality.",
      description:
        "We take your idea and our expert developers and designers team convert it into reality.",
    },
    {
      icon: FaTools,
      title: "We build the best software.",
      description:
        "Our expert developers go through every scenario and delivered the best product.",
    },
  ],

  // Feature Insights
  insights: [
    {
      category: "EVENT",
      title: "Shaping new frontiers in banking at TCF 2024",
      imageUrl: "/images/event cards/1.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "14th to 16th May 2024",
      location: "Dublin",
    },
    {
      category: "EVENT",
      title: "Shaping new frontiers in banking at TCF 2024",
      imageUrl: "/images/event cards/1.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "14th to 16th May 2024",
      location: "Dublin",
    },
    {
      category: "NEWSROOM",
      title:
        "Systems Limited graced with 3 accolades at IT & ITES Export Awards 2024 by PSEB",
      imageUrl: "/images/event cards/1.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      category: "NEWSROOM",
      title:
        "Systems Limited graced with 3 accolades at IT & ITES Export Awards 2024 by PSEB",
      imageUrl: "/images/event cards/1.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ],

  // StatsContent
  statsContentMainTitle: "Translating technology into a positive impact",
  statsContentDescription:
    "Our approach allows us to deliver exceptional experiences that drive growth and success for all stakeholders. Let’s rise to new heights with the power of digital transformation.",
  stats: [
    {
      number: "47+",
      text: "Years of continual excellence",
    },
    {
      number: "7000+",
      text: "Change makers driving revolution",
    },
    {
      number: "16+",
      text: "Countries with our presence and clientele",
    },
    {
      number: "618+",
      text: "Active clients across the globe",
    },
  ],
  statsContentBottomHeading:
    "We rethink business growth for you through our collective experience with strategic partner ecosystem.",

  // Services Data

  servicesData: [
    {
      title: "Web Development",
      description:
        "Deliver high-quality web development, design and functionality tailored for your business.",
      icon: AiOutlineGlobal,
    },
    {
      title: "Digital Transformation",
      description:
        "Digitize, automate and accelerate your business operations through digital transformation.",
      icon: GiCog,
    },
    {
      title: "Generative AI",
      description:
        "Harness Generative AI and new technologies to innovate, automate, and stay ahead of the competition.",
      icon: BiBrain,
    },
    {
      title: "Mobile App Development",
      description:
        "Make your mobile app stand out from the crowd with Devsinc's Android and iOS development.",
      icon: AiOutlineMobile,
    },
    {
      title: "Custom Development",
      description:
        "Get custom software perfectly built for your business to boost productivity and efficiency.",
      icon: GiNetworkBars,
    },
    {
      title: "Cybersecurity Solutions",
      description:
        "Keep your digital assets safe and protect your business from threats with our cybersecurity solutions.",
      icon: MdOutlineSecurity,
    },
    {
      title: "Dynamics 365 ERP",
      description:
        "Drive efficiency and growth with tailored and custom Microsoft Dynamics 365 solutions.",
      icon: AiOutlineCloud,
    },
    {
      title: "QA Testing & Automation",
      description:
        "Improve your software's reliability with our comprehensive QA testing services.",
      icon: MdOutlineBugReport,
    },
  ],
  // CTA Section Data
  CTASectionData: {
    title: "How can we help you?",
    description:
      "Are you ready to push boundaries and explore new frontiers of innovation?",
    buttonText: "LET'S WORK TOGETHER",
  },
};

export default homepageContent;
