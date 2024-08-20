"use client";
import SlideWrapper from "@/components/Wrapper/SlideWrapper";
import homepageContent from "@/content/homepage";
import theme from "@/utils/theme";
import {
  Container,
  Divider,
  Grid,
  Link,
  Typography,
  useMediaQuery,
} from "@mui/material";

const StatsSection = () => {
  const isAboveMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Container
      maxWidth="md"
      className={isAboveMd ? "" : "!px-6 md:!px-8"}
      sx={{ my: 15 }}
    >
      <SlideWrapper>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" color="primary.dark" gutterBottom>
              {homepageContent.statsContentMainTitle}
            </Typography>
            <Typography
              variant="body1"
              color="text.primary"
              paragraph
            >
              {homepageContent.statsContentDescription}
            </Typography>
            <Link
              href="/about-us"
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
                left: 10,
                top: 10,
                bottom: 0,
                bgcolor: "text.primary",
                width: "2px",
              }}
            />
            <Grid container spacing={4} sx={{}}>
              {homepageContent.stats.map((stat, index) => (
                <Grid item xs={6} key={index}>
                  <Typography
                    variant="h3"
                    fontWeight={600}
                    color="secondary.main"
                  >
                    {stat.number}
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    {stat.text}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </SlideWrapper>
      <Container
        maxWidth={`${isAboveMd ? "md" : "sm"}`}
        sx={{ textAlign: "center", my: 8 }}
      >
        <Typography variant="h3" fontWeight={400} color="primary.dark">
          {homepageContent.statsContentBottomHeading}
        </Typography>
      </Container>
    </Container>
  );
};

export default StatsSection;
