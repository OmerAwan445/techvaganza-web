import { Box, Container, Grid, Typography } from "@mui/material";

const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({
  heading,
  description,
}) => {
  return (
    <Container
      sx={{
        my: 15,
        px: 2,
        textAlign: "center",
        position: "relative",
      }}
    >
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography
            variant="h2"
            color="primary.main"
            gutterBottom
            sx={{
              fontWeight: 600,
              maxWidth: 700,
              mx: "auto",
            }}
          >
            {heading}
          </Typography>
          <Typography
            variant="body1"
            color="text.primary"
            paragraph
            sx={{
              maxWidth: 700,
              mx: "auto",
              mb: 6,
            }}
          >
            {description}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ position: "relative", display: { xs: "none", md: "block" } }}
        >
          <Box
            sx={{
              backgroundImage: "url('/images/about/WhyChooseUs-1.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "300px",
              width: "80%",
              borderRadius: 2,
              position: "absolute",
              top: "50%",
              right: "0",
              transform: "translateY(-50%) rotate(-5deg)", // Center vertically and rotate slightly
              zIndex: 1,
            }}
          />
          <Box
            sx={{
              backgroundImage: "url('/images/about/WhyChooseUs-2.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "300px",
              width: "80%",
              borderRadius: 2,
              position: "absolute",
              top: "50%",
              right: "0",
              transform: "translateY(-50%) rotate(5deg) translateX(20px)", // Center vertically and rotate slightly
              zIndex: 2,
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default WhyChooseUsSection;
