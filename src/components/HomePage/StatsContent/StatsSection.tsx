import React from "react";
import { Box, Typography, Divider, Grid, Link } from "@mui/material";
import homepageContent from "@/content/homepage";

const StatsSection = () => {
  return (
    <Box sx={{ padding: 6 }}>
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} md={6}>
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
        </Grid>
        <Grid item xs={12} md={6} sx={{ position: "relative" }}>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              position: "absolute",
              left: "-1px",
              top: 0,
              bottom: 0,
              bgcolor: "text.primary",
              width: "1px",
            }}
          />
          <Grid container spacing={4}>
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
        </Grid>
      </Grid>
      <Box sx={{ textAlign: "center", marginTop: 8 }}>
        <Typography variant="h5" color="text.primary">
          {homepageContent.statsContentBottomHeading}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatsSection;

// Sample homepageContent for reference
