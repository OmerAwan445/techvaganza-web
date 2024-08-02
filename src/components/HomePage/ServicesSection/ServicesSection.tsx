// components/ServicesSection.js
"use client";
import { Box, Grid } from "@mui/material";
import ServiceCard from "./ServiceCard";
import homepageContent from "@/content/homepage";

const ServicesSection = () => {
  return (
    <Box sx={{ paddingBottom: 20, paddingX: 2 }}>
      <Grid container spacing={0} alignItems="center">
        {homepageContent.servicesData.map((content, index) => (
          <Grid item xs={12} md={6} key={index} sx={{ paddingX: 1 }}>
            <ServiceCard
              key={index}
              icon={content.icon}
              title={content.title}
              description={content.description}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesSection;
