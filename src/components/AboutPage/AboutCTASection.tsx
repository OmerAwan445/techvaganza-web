import { Box, Container, Typography, Button } from "@mui/material";

const CallToActionSection: React.FC<CallToActionSectionProps> = ({
  callToAction,
}) => {
  return (
    <Box
      sx={{
        textAlign: "center",
        my: { xs: 6, md: 8 }, // Responsive vertical margin
        px: 2, // Padding on smaller screens
        borderRadius: 2, // Rounded corners for visual appeal
        py: { xs: 4, md: 6 }, // Responsive vertical padding
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600, // Increased font weight for emphasis
            mb: 3,
            color: "primary.main", // Ensure text color stands out
            fontSize: { xs: "1.25rem", md: "1.5rem" }, // Responsive font size
            lineHeight: 1.4, // Improve readability
            textTransform: "uppercase", // Optional: makes the text stand out
          }}
        >
          {callToAction}
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          href="/contact-us"
          sx={{
            textTransform: "none", // Ensure button text is not uppercase
            px: 4, // Horizontal padding
            py: 1.5, // Vertical padding
            fontWeight: 500, // Button font weight
          }}
        >
          Contact Us
        </Button>
      </Container>
    </Box>
  );
};

export default CallToActionSection;
