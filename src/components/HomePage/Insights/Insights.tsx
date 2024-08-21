"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import EventCard from "./EventCard";
import homepageContent from "@/content/homepage";
import { SwiperSlide } from "swiper/react";
import FreeModeSlider from "@/components/commons/Sliders/FreeModeSlider";
import SlideWrapper from "@/components/Wrapper/SlideWrapper";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const Insights = () => {
  const insights = homepageContent.insights;

  return (
    <Box
      sx={{
        position: "relative", // Set relative positioning for the container
        overflow: "hidden", // Ensure background doesn't overflow
        height: "700px", // Fixed height for the container
      }}
    >
      {/* Background Gradient Animation */}
      <BackgroundGradientAnimation
        containerClassName="absolute inset-0 z-0" // Position absolutely and cover entire container
      />
      <Box
        sx={{
          position: "relative", // Ensure this is positioned above the background
          zIndex: 1, // Ensure this is above the background gradient
          mb: 3,
          py: 7,
        }}
      >
        <Container>
          <SlideWrapper>
            <Typography
              variant="h3"
              align="center"
              color="white"
              sx={{ fontWeight: 400, marginBottom: 3 }}
            >
              Services & Products
            </Typography>
            <Grid
              sx={{ display: { xs: "none", md: "none", lg: "flex" } }}
              container
              spacing={4}
            >
              {insights.map((el) => (
                <Grid
                  item
                  key={el.title}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={4}
                  sx={{
                    zIndex: 1, // Ensure grid items are above the background
                  }}
                >
                  <EventCard {...el} />
                </Grid>
              ))}
            </Grid>
            <Box sx={{ display: { xs: "block", md: "block", lg: "none" } }}>
              <FreeModeSlider>
                {insights.map((el) => (
                  <SwiperSlide key={el.title}>
                    <EventCard {...el} />
                  </SwiperSlide>
                ))}
              </FreeModeSlider>
            </Box>
          </SlideWrapper>
        </Container>
      </Box>
    </Box>
  );
};

export default Insights;
