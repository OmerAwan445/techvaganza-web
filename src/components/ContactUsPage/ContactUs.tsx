import contactUsContent from '@/content/contactUsPage';
import {
  Box,
  Grid,
  Typography
} from '@mui/material';
import ContactUsForm from './ContactUsForm';

const ContactUs = () => {

    const { address, getinTouchDesc, email, phone} = contactUsContent;

  return (
        <Grid maxWidth={"xl"} container spacing={2} justifyContent={"center"} py={8} px={0} mx={"auto"}>
          <Grid item xs={12} md={5} lg={6}>
            <Typography variant="h4" gutterBottom>
              Get in Touch
            </Typography>
            <Typography variant="body1" className='' paragraph>
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

          <Grid item xs={12} md={7} lg={6} sx={{mt: { 'xs': 5, 'md': 0 }, p: {'xs': "0 !important", 'sm': "2 !important" }}}>
          <ContactUsForm />
          </Grid>
        </Grid>
  );
};

export default ContactUs;
