import CTASection from "@/components/HomePage/CTASection/CTASection";
import GifSection from "@/components/HomePage/GifSection/GifSection";
import HomeBanner from "@/components/HomePage/HomeBanner";
import InfoCards from "@/components/HomePage/InfoCards/InfoCards";
import FeaturesInsight from "@/components/HomePage/Insights/Insights";
import ServicesSection from "@/components/HomePage/ServicesSection/ServicesSection";
import { Box } from "@mui/material";
import StatsSection from "../components/HomePage/StatsContent/StatsSection";

export default function Home() {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <HomeBanner />
      <InfoCards />
      <FeaturesInsight />
      <StatsSection />
      {/* <ServicesSection /> */}
      <GifSection />
      {/* <CTASection /> */}
    </Box>
  );
}
