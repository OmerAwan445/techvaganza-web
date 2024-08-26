import SlideWrapper from "@/components/Wrapper/SlideWrapper";
import { Box, Container, Grid, Typography } from "@mui/material";

const WhoWeAreSection: React.FC<WhoWeAreSectionProps> = ({
  heading,
  description,
}) => {
  return (
    <Container
      sx={{
        my: { xs: 6, md: 10 }, // Adjust top and bottom margins based on screen size
        px: 2, // Padding for container
        textAlign: "center", // Center align text
      }}
    >
      <SlideWrapper>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12}>
            <Typography
              variant="h2"
              color="primary.main" // Ensure text color is visible
              gutterBottom
              sx={{
                fontWeight: 600,
                maxWidth: { xs: 500, md: 700 }, // Responsive maxWidth
                mx: "auto",
                px: { xs: 2, md: 0 }, // Padding for better spacing on smaller screens
              }}
            >
              {heading}
            </Typography>
            <Typography
              variant="body1"
              color="text.primary" // Ensure text color is readable
              paragraph
              sx={{
                maxWidth: { xs: 500, md: 700 }, // Responsive maxWidth
                mx: "auto",
                mb: 4,
                px: { xs: 2, md: 0 }, // Padding for better spacing on smaller screens
              }}
            >
              {description}
            </Typography>
          </Grid>
        </Grid>
        <Box
          sx={{
            position: "relative",
            height: { xs: "300px", md: "400px" }, // Adjust height based on screen size
            overflow: "hidden",
            mt: 2, // Margin-top for spacing between text and image
          }}
        >
          <Box
            sx={{
              backgroundImage: "url('/images/about/WhoWeAre.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100%",
              width: "100%",
              borderRadius: 2,
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 1,
            }}
          />
        </Box>
      </SlideWrapper>
    </Container>
  );
};

export default WhoWeAreSection;
