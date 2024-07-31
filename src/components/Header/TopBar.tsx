import React from 'react';
import { Box, Typography, IconButton, Link, Container } from '@mui/material';
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import headerContent from '@/content/header';


const TopBar = () => {
  const { title, email, phoneNum, facebook, twitter, youtube } = headerContent.topbar;

  return (
    <Box
      sx={{
        display: { xs: "none", md: "block" },
        bgcolor: 'secondary.main',
        height: '40px',
        color: '#fff',
      }}
    >
      <Container sx={{
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }} maxWidth="xl">

          <Typography variant='body1' color="inherit">
            {title}
          </Typography>
        <Box sx={{ flexGrow:0.4 ,display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
          <Box sx={{ height: 100,
                  backgroundImage: 'url(/images/divider.svg)',
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: 'right center',
                  backgroundAttachment: 'scroll',
                  backgroundSize: 'auto',
                  display: 'flex', alignItems: 'center', pr: 4 }}>
            <FaPhone style={{ marginRight: 8 }} />

            <Typography variant='body2'>{phoneNum}</Typography>
          </Box>
          <Box sx={{
                  height: 100,
                  backgroundImage: 'url(/images/divider.svg)',
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: 'right center',
                  backgroundAttachment: 'scroll',
                  backgroundSize: 'auto',
                  display: 'flex', alignItems: 'center', pr: 4
            }}>
            <FaEnvelope style={{ marginRight: 8 }} />
            <Typography variant='body2'>{email}</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant='caption' sx={{ mr: 2 }}>Follow</Typography>
            <IconButton href={facebook} color="inherit" size="medium">
              <FaFacebook />
            </IconButton>
            <IconButton href={twitter} color="inherit" size="medium">
              <FaTwitter />
            </IconButton>
            <IconButton href={youtube} color="inherit" size="medium">
              <FaYoutube />
            </IconButton>
          </Box>
        </Box>
      </Container>

    </Box>
  );
};

export default TopBar;