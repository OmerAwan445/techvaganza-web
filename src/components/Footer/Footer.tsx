import * as React from 'react';
import { Box, Grid, Link, Typography, Container, IconButton } from '@mui/material';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

// Replace these with your own social media URLs
const socialMediaLinks = {
  facebook: '#',
  twitter: '#',
  instagram: '#',
};

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        color: 'text.secondary',
        py: 3,
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth={false}>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Tech Vaganza
            </Typography>
            {/* Add your logo component or image here */}
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" fontWeight={550} color="text.primary" gutterBottom>
              PRODUCT
            </Typography>
            <Link href="#" sx={{ ':hover' : { color: 'background.paper'}}} color="background.lightGrey" display="block">Features</Link>
            <Link href="#" sx={{ ':hover' : { color: 'background.paper'}}} color="background.lightGrey" display="block">Integrations</Link>
            <Link href="#" sx={{ ':hover' : { color: 'background.paper'}}} color="background.lightGrey" display="block">Pricing</Link>
            <Link href="#" sx={{ ':hover' : { color: 'background.paper'}}} color="background.lightGrey" display="block">FAQ</Link>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" fontWeight={550} color="text.primary" gutterBottom>
              COMPANY
            </Typography>
            <Link href="#" sx={{ ':hover' : { color: 'background.paper'}}} color="background.lightGrey" display="block">About Us</Link>
            <Link href="#" sx={{ ':hover' : { color: 'background.paper'}}} color="background.lightGrey" display="block">Careers</Link>
            <Link href="#" sx={{ ':hover' : { color: 'background.paper'}}} color="background.lightGrey" display="block">Privacy Policy</Link>
            <Link href="#" sx={{ ':hover' : { color: 'background.paper'}}} color="background.lightGrey" display="block">Terms of Service</Link>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" fontWeight={550} color="text.primary" gutterBottom>
              DEVELOPERS
            </Typography>
            <Link href="#" sx={{ ':hover' : { color: 'background.paper'}}} color="background.lightGrey" display="block">Public API</Link>
            <Link href="#" sx={{ ':hover' : { color: 'background.paper'}}} color="background.lightGrey" display="block">Documentation</Link>
            <Link href="#" sx={{ ':hover' : { color: 'background.paper'}}} color="background.lightGrey" display="block">Guides</Link>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" fontWeight={550} color="text.primary" gutterBottom>
              SOCIAL MEDIA
            </Typography>
            <IconButton aria-label="Facebook" sx={{ ':hover' : { color: 'background.lightGrey'}}} color="inherit" component="a" href={socialMediaLinks.facebook}>
              <FaFacebook />
            </IconButton>
            <IconButton aria-label="Twitter" sx={{ ':hover' : { color: 'background.lightGrey'}}} color="inherit" component="a" href={socialMediaLinks.twitter}>
              <FaTwitter />
            </IconButton>
            <IconButton aria-label="Instagram" sx={{ ':hover' : { color: 'background.lightGrey'}}} color="inherit" component="a" href={socialMediaLinks.instagram}>
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