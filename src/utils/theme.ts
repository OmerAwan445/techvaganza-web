"use client";
import { poppins } from "@/utils/fontfamily";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypeBackground {
    black: string;
    peachDark: string;
    peachLight: string;
    light: string;
    dark: string
  }
}


const theme = createTheme({
  palette: {
    primary: {
      main: '#5680E9', // Deep Blue
      light: '#8DA6F2', // Lighter version of Deep Blue
      dark: '#2C59B2', // Darker version of Deep Blue
    },
    secondary: {
      main: '#8860D0', // Vibrant Purple
      light: '#B18AE7', // Lighter version of Purple
      dark: '#5D3A9E', // Darker version of Purple
    },
    background: {
      default: '#5AB9EA', // Vibrant Light Blue
      light: '#84CEEB', // Lighter Vibrant Blue
      dark: '#3A83A8', // Darker version of Light Blue
    },
    text: {
      primary: '#4e4a8b', // Soft Blue-Gray for primary text
      secondary: '#EEEEEE', // Light Gray for secondary text
    },
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
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
        fontSize: "0.8375rem", // Adjust font size for large screens
      },
      "@media (max-width:900px)": {
        fontSize: "0.8rem", // Adjust font size for medium screens
      },
      "@media (max-width:600px)": {
        fontSize: "0.7125rem", // Adjust font size for small screens
      },
    },
  },
  components: {
    // Add component overrides if needed
  },
});

export default theme;
