import { FaPencilRuler, FaLightbulb, FaTools } from "react-icons/fa";

const homepageContent = {
    title: "Welcome to the Tech Vaganza",
    description: "This is a simple website for our software house",
    banner: {
        staticText: "Be the",
        changingText: ["market leader", "software developer", "best"],
        description: "Access passionate and experienced software engineers with skillsets in 10+ technologies, in your timezone.",
    },
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
};

export default homepageContent;
