import GifSection from "@/components/HomePage/GifSection/GifSection";
import HomeBanner from "@/components/HomePage/HomeBanner";
import FeaturesInsight from "@/components/HomePage/Insights/Insights";
import { Box } from "@mui/material";
import StatsSection from "../components/HomePage/StatsContent/StatsSection";

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
