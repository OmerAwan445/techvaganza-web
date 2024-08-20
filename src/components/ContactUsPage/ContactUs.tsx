import React from 'react';
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Container,
} from '@mui/material';
import contactUsContent from '@/content/contactUsPage';

const ContactUs = () => {

    const { formTitle, address, formDesc, getinTouchDesc, email, phone} = contactUsContent;

  return (
    <Container>
      <Box sx={{ p: 5, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Get in Touch
            </Typography>
            <Typography variant="body1" paragraph>
             {getinTouchDesc}
            </Typography>
            <Box mt={3}>
              <Typography variant="subtitle1">
                We are here:
              </Typography>
              <Typography variant="body2" color="text.primary">
                {address}
              </Typography>
            </Box>
            <Box mt={2}>
              <Typography variant="subtitle1">
                Phone us:
              </Typography>
              <Typography variant="body2" color="text.primary">
                {phone}
              </Typography>
            </Box>
            <Box mt={2}>
              <Typography variant="subtitle1">
                Mail us:
              </Typography>
              <Typography variant="body2" color="text.primary">
                {email}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box component="form" noValidate autoComplete="off">
              <Typography variant="h5" gutterBottom>
                We would like to hear from you
              </Typography>
              <Typography variant="body2" color="text.primary" paragraph>
                {formDesc}
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    required
                    fullWidth
                    label="Name"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    fullWidth
                    label="Surname"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    fullWidth
                    label="Email"
                    variant="outlined"
                    type="email"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    fullWidth
                    label="Phone Number"
                    variant="outlined"
                    type="tel"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Service Needed"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                  />
                </Grid>
              </Grid>
              <Box mt={3}>
                <Button variant="contained" color="primary" size="large">
                  Register
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ContactUs;
