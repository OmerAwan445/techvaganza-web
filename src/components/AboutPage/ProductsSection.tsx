"use client";

import { Box, Container, Typography } from "@mui/material";
import EventCard from "@/components/HomePage/Insights/EventCard";
import { SwiperSlide } from "swiper/react";
import FreeModeSlider from "@/components/commons/Sliders/FreeModeSlider";
import SlideWrapper from "@/components/Wrapper/SlideWrapper";

const ProductsSection: React.FC<ProductsSectionProps> = ({
  heading,
  products,
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        height: "700px",
      }}
    >
      <Box
        sx={{
          position: "relative",
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
                {products.map((product) => (
                  <SwiperSlide key={product.title}>
                    <EventCard {...product} />
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

export default ProductsSection;
