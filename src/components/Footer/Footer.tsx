import * as React from 'react';
import { Box, Grid, Link, Typography, Container, IconButton } from '@mui/material';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import homepageContent from '@/content/homepage';
import headerContent from '@/content/header';

// Replace these with your own social media URLs
const socialMediaLinks = {
  facebook: headerContent.topbar.facebook,
  twitter: headerContent.topbar.twitter,
  instagram: headerContent.topbar.instagram,
};

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        color: 'text.secondary',
        // mt: 10,
        py: 3,
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth={false}>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h4" color="text.primary" gutterBottom>
              Techvaganza
            </Typography>
            {/* Add your logo components or image here */}
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" fontWeight={550} color="text.primary" gutterBottom>
              Services
            </Typography>
            <Link href="#" sx={{ ':hover' : { color: 'background.lightAshGrey'}}} color="#ffff" display="block">Web Development</Link>
            <Link href="#" sx={{ ':hover' : { color: 'background.lightAshGrey'}}} color="#ffff" display="block">DevOps</Link>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" fontWeight={550} color="text.primary" gutterBottom>
              Products
            </Typography>
            <Link href="#" sx={{ ':hover' : { color: 'background.lightAshGrey'}}} color="#ffff" display="block">Customized POS</Link>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" fontWeight={550} color="text.primary" gutterBottom>
              COMPANY
            </Typography>
            <Link href="#" sx={{ ':hover' : { color: 'background.lightAshGrey'}}} color="#ffff" display="block">About Us</Link>
            <Link href="#" sx={{ ':hover' : { color: 'background.lightAshGrey'}}} color="#ffff" display="block">Careers</Link>
            <Link href="#" sx={{ ':hover' : { color: 'background.lightAshGrey'}}} color="#ffff" display="block">Privacy Policy</Link>
            <Link href="#" sx={{ ':hover' : { color: 'background.lightAshGrey'}}} color="#ffff" display="block">Terms of Service</Link>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" fontWeight={550} color="text.primary" gutterBottom>
              SOCIAL MEDIA
            </Typography>
            <IconButton aria-label="Facebook" sx={{ ':hover' : { color: 'background.lightAshGrey'}}} color="inherit" component="a" href={socialMediaLinks.facebook}>
              <FaFacebook />
            </IconButton>
            <IconButton aria-label="Twitter" sx={{ ':hover' : { color: 'background.lightAshGrey'}}} color="inherit" component="a" href={socialMediaLinks.twitter}>
              <FaTwitter />
            </IconButton>
            <IconButton aria-label="Instagram" sx={{ ':hover' : { color: 'background.lightAshGrey'}}} color="inherit" component="a" href={socialMediaLinks.instagram}>
              <FaInstagram />
            </IconButton>
          </Grid>
        </Grid>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ pt: 4 }}>
          © 2024 Company Co. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;