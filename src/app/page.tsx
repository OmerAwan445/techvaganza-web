import HomeBanner from "@/components/HomePage/HomeBanner";
import InfoCards from "@/components/HomePage/InfoCards/InfoCards";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <HomeBanner />
      <InfoCards />
    </Box>
  );
}
