import { Box, Button, Typography } from "@mui/material";
const GifSection = () => (
  <Box
    sx={{
      mb: -1,
      position: "relative",
      height: "60vh",
      width: "100vw",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Box
      component="video"
      src="/images/GifVideo/1.mp4"
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
        background: "rgba(0, 0, 0, 0.4)", 
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
      <Typography variant="h2" fontWeight={400} sx={{ color: "background.default", mb: 2 }}>
        Your next starts right here
      </Typography>
      <Button variant="contained" color="secondary" sx={{ bgColor: "background.light" }} size="large">
        JOIN US
      </Button>
    </Box>
  </Box>
);

export default GifSection;
