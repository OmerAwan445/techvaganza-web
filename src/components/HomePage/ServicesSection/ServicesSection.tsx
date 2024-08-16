"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import ServiceCard from "./ServiceCard";
import homepageContent from "@/content/homepage";

const ServicesSection = () => {
  return (
    <Container maxWidth="lg" sx={{ my: 10, }}>
   <Typography align="center" mb={4} variant="h2">Our Service</Typography>
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
</Container> 
  );
};

{/* <Container maxWidth="lg" sx={{ my: 10, }}>
   <Typography align="center" mb={4} variant="h2">Our Service</Typography>
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
</Container> */}
export default ServicesSection;
