"use client";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypeBackground {
    black: string;
    peachDark: string;
    peachLight: string;
    lightAshGrey: string;
  }
}

/* Blue, Green Red. Pink */

const theme = createTheme({
  palette: {
    primary: {
      main: "#374785", // Deep Blue
      light: "#3B82F6", // Sky Blue
      dark: "#1E40AF", // Navy Blue
    },
    secondary: {
      main: "#86c232", // Emerald Green
      light: "#6EE7B7", // Mint Green
      dark: "#065F46", // Forest Green
    },
    background: {
      default: "#6C757D", // Darker Ash Grey Main
      lightAshGrey: "#ADB5BD", // Ash Grey Light
      black: "#000000",
    },
    text: {
      primary: "#222831", // Dark Charcoal for primary text
      secondary: "#EEEEEE", // Light Grey for secondary text
    },
  },
  typography: {
    h1: {
      fontSize: "6rem", // Default font size for h1
      "@media (max-width:1200px)": {
        fontSize: "4.5rem", // Adjust font size for large screens
      },
      "@media (max-width:900px)": {
        fontSize: "3.75rem", // Adjust font size for medium screens
      },
      "@media (max-width:600px)": {
        fontSize: "3rem", // Adjust font size for small screens
      },
    },
    h2: {
      fontSize: "3.75rem", // Default font size for h2
      "@media (max-width:1200px)": {
        fontSize: "3rem", // Adjust font size for large screens
      },
      "@media (max-width:900px)": {
        fontSize: "2.5rem", // Adjust font size for medium screens
      },
      "@media (max-width:600px)": {
        fontSize: "2.125rem", // Adjust font size for small screens
      },
    },
    h3: {
      fontSize: "3rem", // Default font size for h3
      "@media (max-width:1200px)": {
        fontSize: "2.5rem", // Adjust font size for large screens
      },
      "@media (max-width:900px)": {
        fontSize: "2.125rem", // Adjust font size for medium screens
      },
      "@media (max-width:600px)": {
        fontSize: "1.75rem", // Adjust font size for small screens
      },
    },
    h4: {
      fontSize: "2.125rem", // Default font size for h4
      "@media (max-width:1200px)": {
        fontSize: "1.75rem", // Adjust font size for large screens
      },
      "@media (max-width:900px)": {
        fontSize: "1.5rem", // Adjust font size for medium screens
      },
      "@media (max-width:600px)": {
        fontSize: "1.25rem", // Adjust font size for small screens
      },
    },
    h5: {
      fontSize: "1.5rem", // Default font size for h5
      "@media (max-width:1200px)": {
        fontSize: "1.375rem", // Adjust font size for large screens
      },
      "@media (max-width:900px)": {
        fontSize: "1.25rem", // Adjust font size for medium screens
      },
      "@media (max-width:600px)": {
        fontSize: "1rem", // Adjust font size for small screens
      },
    },
    h6: {
      fontSize: "1.25rem", // Default font size for h6
      "@media (max-width:1200px)": {
        fontSize: "1.125rem", // Adjust font size for large screens
      },
      "@media (max-width:900px)": {
        fontSize: "1rem", // Adjust font size for medium screens
      },
      "@media (max-width:600px)": {
        fontSize: "0.875rem", // Adjust font size for small screens
      },
    },
    body1: {
      fontSize: "1rem", // Default font size for body1 (paragraphs)
      "@media (max-width:1200px)": {
        fontSize: "0.9375rem", // Adjust font size for large screens
      },
      "@media (max-width:900px)": {
        fontSize: "0.875rem", // Adjust font size for medium screens
      },
      "@media (max-width:600px)": {
        fontSize: "0.8125rem", // Adjust font size for small screens
      },
    },
  },
  components: {
    // Add component overrides if needed
  },
});

export default theme;
