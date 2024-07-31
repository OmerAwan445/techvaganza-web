"use client";

import theme from "@/utils/theme";
import { Divider, Drawer, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import headerContent from "@/content/header";


function CustomNavbar() {
  const { pages } = headerContent.appBar;
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  return (
    <Box sx={{ height: "65px", width: "100%", bgcolor: theme.palette.primary.main }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-around"}}>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              <BiMenu />
            </IconButton>
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
              sx={{
                '& .MuiDrawer-paper': {
                  width: '250px',
                  backgroundColor: 'background.default',
                },
              }}
            >
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <Typography variant="h6" sx={{ my: 2, textAlign: 'center' }}>
                  Menu
                </Typography>
                <Divider />
                <Stack
                  direction="column"
                  sx={{ p: 2 }}
                  spacing={2}
                >
                  {pages.map((page) => (
                    <Button
                      color="inherit"
                      key={page}
                      onClick={toggleDrawer(false)}
                      sx={{ width: '100%' }}
                    >
                      {page}
                    </Button>
                  ))}
                </Stack>
              </Box>
            </Drawer>
          </Box>

     {/* Logo */}
          <Box sx={{ flexGrow: 1, alignItems: "center" }}>
            <svg
              version="1.1"
              className="techco_logo_1"
              width="168px"
              height="33px"
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              viewBox="0 0 133.9 26"
              xmlSpace="preserve"
            >
              <style>
                {`
        .st0 { fill: #2b2d32; }
        .st1 { fill: #1eb9d5; }
      `}
              </style>
              <g id="Logo-_x2F_-Techco-_x2F_-Dark-1"><path id="Fill-1" className="st0" d="M27.9 7.4h6.9l-4.4 4.4h-2.5v7.6c0 1.6.7 2.1 2.1 2.1.6 0 1.2-.1 1.5-.1v4.1c-.4.2-1.3.4-2.8.4-3.5 0-5.7-2.1-5.7-5.6V1.2h4.9v6.2z"></path><path id="Fill-3" className="st0" d="M45.2 14.2c-.1-1.8-1.2-3.6-4-3.6-2.5 0-3.9 1.9-4 3.6h8zm4.6 6c-.9 3.1-3.8 5.8-8.2 5.8-5 0-9.3-3.6-9.3-9.7 0-5.8 4.3-9.6 8.9-9.6 5.6 0 8.9 3.6 8.9 9.4 0 .7-.1 1.4-.1 1.5H37c.1 2.4 2.1 4.1 4.6 4.1 2.3 0 3.5-1.1 4.1-2.8l4.1 1.3z"></path><path id="Fill-5" className="st0" d="M56.2 16.3c0 3.3 2.1 5.1 4.6 5.1s3.7-1.7 4.2-3.1l4.3 1.4c-.8 3-3.6 6.1-8.5 6.1-5.3 0-9.5-4.1-9.5-9.6 0-5.6 4.1-9.6 9.4-9.6 4.9 0 7.7 3.1 8.5 6.1l-4.4 1.5c-.4-1.5-1.6-3.1-4-3.1-2.5.1-4.6 1.9-4.6 5.2"></path><path id="Fill-7" className="st0" d="M75.6 26h-4.9V5l4.9-5-.1 9.3c1.2-1.4 3.2-2 4.9-2 4.6 0 6.7 3.2 6.7 7.2V26h-4.9V15.3c0-2-1-3.6-3.3-3.6-2.1 0-3.3 1.6-3.4 3.5V26h.1z"></path><path id="Fill-9" className="st1" d="M92.3 19.2c1.9 0 3.4 1.5 3.4 3.4 0 1.8-1.5 3.4-3.4 3.4-1.8 0-3.3-1.5-3.3-3.4s1.5-3.4 3.3-3.4"></path><path id="Fill-11" className="st0" d="M101.3 16.3c0 3.3 2.1 5.1 4.6 5.1s3.7-1.7 4.2-3.1l4.3 1.4c-.8 3-3.6 6.1-8.5 6.1-5.3 0-9.5-4.1-9.5-9.6 0-5.6 4.1-9.6 9.4-9.6 4.9 0 7.7 3.1 8.5 6.1l-4.4 1.5c-.4-1.5-1.6-3.1-4-3.1-2.5.1-4.6 1.9-4.6 5.2"></path><path id="Fill-13" className="st0" d="M129 16.3c0-3.4-2.2-5.2-4.6-5.2s-4.6 1.7-4.6 5.2c0 3.4 2.2 5.2 4.6 5.2s4.6-1.8 4.6-5.2m4.9 0c0 5.6-4.1 9.6-9.5 9.6s-9.5-4.1-9.5-9.6c0-5.6 4.1-9.6 9.5-9.6s9.5 4 9.5 9.6"></path><path id="Fill-15" className="st1" d="M4.9 1.2L0 6.1h13.3v13.4l4.9-4.9V1.2z"></path></g>
            </svg>
          </Box>

          <Box sx={{ flexGrow: 0.4, alignItems: "center", display: { xs: "none", md: "flex" } }}>
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
                  <Link key={page} href={`/${page === "Home" ? "" : page.toLowerCase().replace(' ', '-')}`} >
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
