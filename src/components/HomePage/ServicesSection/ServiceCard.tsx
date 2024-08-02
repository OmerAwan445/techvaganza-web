// components/ServiceCard.js
"use client";
import React, { useState } from "react";
import { Box, Typography, Slider } from "@mui/material";
import { motion } from "framer-motion";

const ServiceCard = ({ title, description, icon: Icon }: ServiceCardProps) => {
  const [sliderValue, setSliderValue] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setSliderValue(100)}
      onMouseLeave={() => setSliderValue(0)}
      style={{ flex: "1 1 100%", boxSizing: "border-box" }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          backgroundColor: "background.default",
          padding: 4,
          borderRadius: 0,
          borderBottom: "2px solid",
          borderColor: "divider",
          position: "relative",
          transition: "background-color 0.3s ease-in-out",
          "&:hover": {
            backgroundColor: "background.paper",
          },
        }}
      >
        <Box sx={{ fontSize: 40 }}>
          <Icon />
        </Box>
        <Box>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "primary.main" }}
          >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            height: "2px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            opacity: sliderValue,
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          <Slider
            value={sliderValue}
            sx={{
              width: "100%",
              color: "primary.main",
              "& .MuiSlider-thumb": {
                display: "none",
              },
              "& .MuiSlider-rail": {
                opacity: 0,
              },
              "& .MuiSlider-track": {
                transition: "width 0.5s ease-in-out",
              },
            }}
          />
        </Box>
      </Box>
    </motion.div>
  );
};

export default ServiceCard;
