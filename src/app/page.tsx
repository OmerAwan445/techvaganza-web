import CTASection from "@/components/HomePage/CTASection/CTASection";
import GifSection from "@/components/HomePage/GifSection/GifSection";
import HomeBanner from "@/components/HomePage/HomeBanner";
import InfoCards from "@/components/HomePage/InfoCards/InfoCards";
import FeaturesInsight from "@/components/HomePage/Insights/Insights";
import ServicesSection from "@/components/HomePage/ServicesSection/ServicesSection";
import { Box, Typography } from "@mui/material";
import StatsSection from "../components/HomePage/StatsContent/StatsSection";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <HomeBanner />
      {/* <InfoCards /> */}
      <FeaturesInsight />
      {/* <ServicesSection /> */}
      <StatsSection />
      <GifSection />
      {/* <CTASection /> */}
    </Box>
  );
}
