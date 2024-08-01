import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import homepageContent from "@/content/homepage";

const HomeBanner = () => {
  const { title, description } = homepageContent.banner;
  return (
    <Box
      sx={{
        height: "60vh",
        backgroundImage: "url(/images/homepage-banner.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
        width: "100vw",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      />
      <Container>
        <Typography
          variant="h1"
          sx={{
            fontSize: "3rem",
            fontWeight: "bold",
            position: "relative",
            color: "#fff",
            display: "inline-block",
            /*  '&::after': {
              content: '""',
              position: 'absolute',
              left: 0,
              bottom: '-10px',
              width: '100%',
              height: '4px',
              backgroundColor: '#6A1B9A',
            }, */
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            marginTop: "20px",
            color: "background.lightGrey",
            fontSize: "1.25rem",
          }}
        >
          {description}
        </Typography>
        <Box mt={4}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ marginRight: 2 }}
          >
            Schedule Free Strategy Call
          </Button>
          <Button variant="outlined" color="primary" size="large">
            See our Work
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeBanner;
