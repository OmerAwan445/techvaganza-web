import { Box, Button, Typography } from "@mui/material";
const GifSection = () => (
  <Box
    sx={{
      position: "relative",
      height: "60vh",
      width: "100%",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Box
      component="video"
      src="/images/GifVideo/1.mp4" // Replace with your video URL
      autoPlay
      loop
      muted
      playsInline
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: 1,
      }}
    />
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        zIndex: 2,
      }}
    />

    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        zIndex: 3,
      }}
    >
      <Typography variant="h2" sx={{ color: "primary.main", mb: 2 }}>
        Your next starts right here
      </Typography>
      <Button variant="contained" color="primary" size="large">
        JOIN US
      </Button>
    </Box>
  </Box>
);

export default GifSection;
