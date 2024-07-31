import HomeBanner from "@/components/HomePage/HomeBanner";
import InfoCards from "@/components/HomePage/InfoCards/InfoCards";
import Content from "@/content/homepage";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <HomeBanner />
      <InfoCards />
      <Typography variant="h1">{Content.title}</Typography>
      <Typography variant="body1">{Content.description}</Typography>
    </Box>
  );
}
