// components/ServicesSection.js
"use client";
import { Box, Container, Grid } from "@mui/material";
import ServiceCard from "./ServiceCard";
import homepageContent from "@/content/homepage";

const ServicesSection = () => {
  return (
    <Box sx={{ paddingBottom: 20, paddingX: 2 }}>
      <Grid container spacing={0} alignItems="center">
        {homepageContent.servicesData.map((content, index) => (
          <Container  key= {index} maxWidth="md">
            <ServiceCard
            key={index}
            icon={content.icon}
            title={content.title}
            description={content.description}
            />
          </Container>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesSection;
