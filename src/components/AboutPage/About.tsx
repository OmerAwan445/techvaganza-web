import React from "react";
import HeroSection from "@/components/AboutPage/HeroSection";
import WhoWeAreSection from "@/components/AboutPage/WhoWeAreSection";
import ServicesSection from "@/components/AboutPage/ServicesSection";
import ProductsSection from "@/components/AboutPage/ProductsSection";
import WhyChooseUsSection from "@/components/AboutPage/WhyChooseUsSection";
import CallToActionSection from "@/components/AboutPage/AboutCTASection";
import { aboutContent } from "@/content/aboutPage";
import { Box } from "@mui/material";

const AboutPage = () => {
  const {
    title,
    intro,
    whoWeAre,
    services,
    products,
    whyChooseUs,
    callToAction,
  } = aboutContent;

  return (
    <Box sx={{ width: "100vw" }}>
      <HeroSection title={title} intro={intro} />
      <WhoWeAreSection
        heading={whoWeAre.heading}
        description={whoWeAre.description}
      />
      <ServicesSection heading={services.heading} services={services.list} />
      <ProductsSection heading={products.heading} products={products.list} />
      <WhyChooseUsSection
        heading={whyChooseUs.heading}
        description={whyChooseUs.description}
      />
      <CallToActionSection callToAction={callToAction} />
    </Box>
  );
};

export default AboutPage;
