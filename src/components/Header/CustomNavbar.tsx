"use client";

import LOGO from "@/assets/Logo/Techvaganza_Site_Logo.jpeg";
import headerContent from "@/content/header";
import { Divider, Drawer, Stack, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";

function CustomNavbar() {
  const { pages } = headerContent.appBar;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const path = usePathname();
  const theme = useTheme();
  
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setDrawerOpen(open);
    };

  return (
    <Box
      sx={{
        height: "65px",
        width: "100%",
        background: "linear-gradient(45deg, #5680E9, #8860D0, #5AB9EA)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-around" }}>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, }}>
            <IconButton
              size="large"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              color="inherit"
              >
              <BiMenu />
            </IconButton>

              {/* Drawer Navbar */}
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
              sx={{
                "& .MuiDrawer-paper": {
                  width: "250px",
                  background: "linear-gradient(45deg, #5AB9EA, #8860D0, #5680E9)" ,
                },
              }}
            >
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
                color={"white"}
              >
                <Typography variant="h6" sx={{ py: 2, textAlign: "center", backgroundColor: "primary.dark" }}>
                  Menu
                </Typography>
                <Divider />
                <Stack direction="column">
                  {pages.map((page) => {
                    const href = `/${
                      page === "Home"
                        ? ""
                        : page.toLowerCase().replace(" ", "-")
                    }`;
                    const isActive = path === href;

                    return (
                        <Link style={{ backgroundColor: isActive ? theme.palette.primary.light :'inherit'}} className={` p-2 text-center w-full border-b border-gray-400` } key={page} href={href} passHref>
                        <Button
                          color="inherit"
                          onClick={toggleDrawer(false)}
                        >
                          {page}
                        </Button>
                      </Link>
                    );
                  })}
                </Stack>
              </Box>
            </Drawer>
          </Box>

          {/* Logo */}
          <Box sx={{ flexGrow: 1, alignItems: "center" }}>
            <Image src={LOGO} alt="Techvaganza Logo" width={200} height={250} />
          </Box>

          <Box
            sx={{
              flexGrow: 0.4,
              alignItems: "center",
              display: { xs: "none", md: "flex" },
            }}
          >
            <Container fixed>
              <Stack
                direction={{ sm: "row" }}
                divider={
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{
                      backgroundColor: "white",
                      height: "25px",
                      margin: "auto 0",
                    }}
                  />
                }
                justifyContent={"space-between"}
              >
                {pages.map((page) => (
                  <Link
                    key={page}
                    href={`/${
                      page === "Home"
                        ? ""
                        : page.toLowerCase().replace(" ", "-")
                    }`}
                  >
                    <Typography
                      className={`relative py-2 text-white hover:text-gray-300 transition-all duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-200 hover:after:scale-x-100 hover:border-white`}
                    >
                      {page}
                    </Typography>
                  </Link>
                ))}
              </Stack>
            </Container>
          </Box>
        </Toolbar>
      </Container>
    </Box>
  );
}

export default CustomNavbar;
