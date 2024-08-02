"use client";
import React from "react";
import { Box, Typography, Divider, Grid, Link } from "@mui/material";
import { motion } from "framer-motion";
import homepageContent from "@/content/homepage";

const StatsSection = () => {
  return (
    <Box sx={{ padding: 20 }}>
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h4" color="text.primary" gutterBottom>
              {homepageContent.statsContentMainTitle}
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              {homepageContent.statsContentDescription}
            </Typography>
            <Link
              href="#"
              color="primary"
              underline="hover"
              sx={{ fontSize: "1rem", fontWeight: "bold" }}
            >
              LEARN MORE →
            </Link>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6} sx={{ position: "relative" }}>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ position: "relative", paddingLeft: "20px" }}
          >
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                position: "absolute",
                left: 0,
                top: 10,
                bottom: 0,
                bgcolor: "text.primary",
                width: "2px",
              }}
            />
            <Grid container spacing={4} sx={{ marginLeft: "20px" }}>
              {homepageContent.stats.map((stat, index) => (
                <Grid item xs={6} key={index}>
                  <Typography variant="h3" color="text.primary">
                    {stat.number}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {stat.text}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Grid>
      </Grid>
      <Box sx={{ textAlign: "center", marginTop: 8, padding: 8 }}>
        <Typography variant="h3" color="text.primary">
          {homepageContent.statsContentBottomHeading}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatsSection;
