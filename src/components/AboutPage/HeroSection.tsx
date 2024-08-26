import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";

const HeroSection: React.FC<HeroSectionProps> = ({ title, intro }) => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        height: { xs: "400px", md: "600px" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "common.white",
        textAlign: "left",
        width: "100vw",
        p: 2,
        backgroundColor: "Background.default",
      }}
    >
      <BackgroundGradientAnimation containerClassName="absolute inset-0 top-0 z-0 :h-[400px] h-[600px]">
        <Grid
          container
          spacing={4}
          sx={{
            position: "relative",
            zIndex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid item xs={12} md={6}>
            <Box sx={{ px: { xs: 3, md: 5 } }}>
              {" "}
              {/* Wrap Typography and Button */}
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  maxWidth: 700,
                  pt: { xs: 3, md: 2 },
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{
                  maxWidth: 700,
                  color: "background.light",
                  mb: 4,
                  pt: { xs: 2, md: 2 },
                  fontWeight: "bold",
                }}
              >
                {intro}
              </Typography>
              <Button
                href="/contact-us"
                variant="contained"
                color="secondary"
                size="large"
                sx={{ mb: 4 }}
              >
                Get Started
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: { xs: "none", md: "block" },
            }}
          >
            <Box
              sx={{
                backgroundImage: "url('/images/about/heroSection.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: { xs: "400px", md: "600px" },
                borderRadius: 2,
              }}
            />
          </Grid>
        </Grid>
      </BackgroundGradientAnimation>
    </Box>
  );
};

export default HeroSection;
