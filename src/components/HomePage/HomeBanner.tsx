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
        width: "99vw",
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
          {staticText}
          <FlipWords words={changingText} className="text-purple-400" />
        </Typography>

        <Typography
          variant="h5"
          sx={{
            position: "relative",
            display: "inline-block",
            fontWeight: "500",
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
          <Button
            sx={{
              position: "relative",
              display: "inline-block",
              color: "secondary.main",
              ":hover": {
                bgcolor: "secondary.main",
                color: "background.lightGrey",
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
