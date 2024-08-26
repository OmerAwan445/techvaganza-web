"use client";

import { Box, Container, Typography } from "@mui/material";
import EventCard from "@/components/HomePage/Insights/EventCard";
import homepageContent from "@/content/homepage";
import { SwiperSlide } from "swiper/react";
import FreeModeSlider from "@/components/commons/Sliders/FreeModeSlider";
import SlideWrapper from "@/components/Wrapper/SlideWrapper";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const ServicesSection: React.FC<ServicesSectionProps> = ({
  heading,
  services,
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        height: "700px",
      }}
    >
      {/* Background Gradient Animation */}
      {/* <BackgroundGradientAnimation containerClassName="absolute inset-0 z-0" /> */}
      <Box
        sx={{
          position: "relative",
          // zIndex: 1,
          mb: 3,
          py: 7,
        }}
      >
        <Container maxWidth="xl">
          <SlideWrapper>
            <Typography
              variant="h3"
              align="center"
              color="primary.main"
              sx={{ fontWeight: 600 }}
            >
              {heading}
            </Typography>
            <Box className="h-full">
              <FreeModeSlider>
                {services.map((service) => (
                  <SwiperSlide key={service.title}>
                    <EventCard {...service} />
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

export default ServicesSection;
