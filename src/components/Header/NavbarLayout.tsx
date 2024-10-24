import React from "react";
import CustomNavbar from "./CustomNavbar";
import TopBar from "./TopBar";
import { AppBar, Box } from "@mui/material";
import Footer from "../Footer/Footer";

const NavbarLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box className="flex flex-col min-h-screen" fontFamily={"inherit"}>
      <AppBar sx={{ bgcolor: "white" }} position="sticky">
        <TopBar />
        <CustomNavbar />
      </AppBar>
      <Box className="flex-grow flex">{children}</Box>
      <footer>
        <Footer />
      </footer>
    </Box>
  );
};

export default NavbarLayout;
