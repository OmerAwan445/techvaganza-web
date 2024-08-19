import homepageContent from "@/content/homepage";
import { Box, Button, Container, Typography } from "@mui/material";
import { FlipWords } from "../ui/flip-words";

const HomeBanner = () => {
  const { changingText, staticText, description } = homepageContent.banner;

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
            display: "block",
            mb: 2,
          }}
        >
          {staticText}
          <FlipWords words={changingText} className="text-[#66fcf1]" />
        </Typography>

        <Typography
          variant="h5"
          sx={{
            position: "relative",
            display: "inline-block",
            fontWeight: "500",
            color: "background.lightAshGrey",
            fontSize: "1.25rem",
          }}
        >
          {description}
        </Typography>
        <Box>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 4, marginRight: 2 }}
          >
            Schedule Free Strategy Call
          </Button>
          <Button
            sx={{
              mt: 4,
              position: "relative",
              display: "inline-block",
              color: "secondary.main",
              ":hover": {
                bgcolor: "secondary.main",
                color: "background.lightAshGrey",
              },
            }}
            variant="outlined"
            color="secondary"
            size="large"
          >
            See our Work
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeBanner;
