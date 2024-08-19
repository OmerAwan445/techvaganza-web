"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import EventCard from "./EventCard";
import homepageContent from "@/content/homepage";
import { SwiperSlide } from "swiper/react";
import FreeModeSlider from "@/components/commons/Sliders/FreeModeSlider";
import SlideWrapper from "@/components/Wrapper/SlideWrapper";

const Insights = () => {
  const insights = homepageContent.insights;

  return (
    <Box
      sx={{
        mb: 3,
        py: 7,
        background: "linear-gradient(180deg, #2C2F3A 0%, #3C4050 100%)",
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
              <Grid item key={el.title} xs={12} sm={6} md={4} lg={4}>
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
  );
};

export default Insights;
