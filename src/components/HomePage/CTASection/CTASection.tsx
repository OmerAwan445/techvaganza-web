// components/CTASection.tsx
"use client";
import SlideWrapper from "@/components/Wrapper/SlideWrapper";
import homepageContent from "@/content/homepage";
import { Box, Button, Typography } from "@mui/material";

const CTASection = () => {
  const CTASectionData = homepageContent.CTASectionData;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 4,
        textAlign: "center",
      }}
    >
      <SlideWrapper>
        <Typography variant="h3" sx={{ mb: 2, fontWeight: "bold" }}>
          {CTASectionData.title}
        </Typography>
        <Typography variant="h6" color="textSecondary" sx={{ mb: 4 }}>
          {CTASectionData.description}
        </Typography>
        <Button variant="contained" color="primary" size="large">
          {CTASectionData.buttonText}
        </Button>
      </SlideWrapper>
    </Box>
  );
};

export default CTASection;
