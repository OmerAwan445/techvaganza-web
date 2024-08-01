import { FaPencilRuler, FaLightbulb, FaTools } from "react-icons/fa";
import StatsContent from "../components/HomePage/StatsContent/StatsSection";

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
};

export default homepageContent;
