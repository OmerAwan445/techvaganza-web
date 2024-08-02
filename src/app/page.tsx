import FeaturesInsight from "@/components/HomePage/Insights/Insights";
import HomeBanner from "@/components/HomePage/HomeBanner";
import InfoCards from "@/components/HomePage/InfoCards/InfoCards";
import { Box } from "@mui/material";
import Insights from "../components/HomePage/Insights/Insights";
import StatsSection from "../components/HomePage/StatsContent/StatsSection";
import ServicesSection from "@/components/HomePage/ServicesSection/ServicesSection";

export default function Home() {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <HomeBanner />
      <InfoCards />
      <FeaturesInsight />
      <StatsSection />
      <ServicesSection />
    </Box>
  );
}
