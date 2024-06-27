import React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography, Grid, Box, Divider, IconButton, Accordion, AccordionSummary, AccordionDetails, useMediaQuery } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import employee1 from '../assets/employee1.jpg';
import employee2 from '../assets/employee2.jpg';
import employee3 from '../assets/employee3.jpg';
import employee4 from '../assets/employee4.jpg';
import contacts from '../assets/homePage.jpg';

const useStyles = makeStyles(() => ({
  container: {
    paddingLeft: '5%',
    paddingTop: '2.5%',
    paddingBottom: '2.5%',
    minHeight: '100vh', // Ensure full height of the viewport
    backgroundColor: "#000000",
    backgroundAttachment: 'fixed',
    position: 'relative',
    backgroundImage: `url(${contacts})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat', // Ensure the background image does not repeat
    backgroundPosition: 'center center', // Center the background image
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  overlay: {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%', // Cover the full height of the container
    backgroundColor: 'rgba(0, 0, 0, .92)',
    zIndex: 0,
  },
  content: {
    position: 'relative',
    zIndex: 1,
    width: '100%',
    height: 'auto', // Adjust height dynamically based on content
  },
  employeeImage: {
    width: '200px',
    height: '300px',
    marginBottom: '10px',
  },
  section: {
    marginBottom: '20px', // Adjust the spacing between sections as needed
  },
  accordion: {
    backgroundColor: 'rgba(0,0,0,0)', // Set background color to black
    padding: '0 5%', // Padding to align with images
  },
  accordionSummary: {
    '& .MuiAccordionSummary-content': {
      justifyContent: 'center',
    },
    '&:hover': {
      backgroundColor: 'rgba(236, 201, 130, 0.25)', // Golden hover background color
      justifyContent: 'center',
    },
  },
  accordionDetails: {
    textAlign: 'left', // Align text to the left for better readability
  },
  faqGrid: {
    marginBottom: '20px',
    paddingLeft: '20%',
    paddingRight: '20%',
  },
}));

const Contact: React.FC = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <div className={classes.container}>
      <div className={classes.overlay}></div>
      <div className={classes.content}>
        <Grid container spacing={2} className={classes.section}>
          <Grid item xs={12}>
            <Typography variant="h1" gutterBottom>FAQ</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={3}>
                <img src={employee1} alt="Employee 1" className={classes.employeeImage} />
                <Typography variant="h2"><strong>John Doe</strong></Typography>
                <Typography variant="body2">Senior Installer</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <img src={employee2} alt="Employee 2" className={classes.employeeImage} />
                <Typography variant="h2"><strong>Jane Smith</strong></Typography>
                <Typography variant="body2">Lead Installer</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <img src={employee3} alt="Employee 3" className={classes.employeeImage} />
                <Typography variant="h2"><strong>Michael Johnson</strong></Typography>
                <Typography variant="body2">Installation Technician</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <img src={employee4} alt="Employee 4" className={classes.employeeImage} />
                <Typography variant="h2"><strong>Emily Davis</strong></Typography>
                <Typography variant="body2">Installation Assistant</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4 }} />
        <Grid container spacing={2} className={classes.faqGrid}>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom>Frequently Asked Questions</Typography>
            <Accordion>
              <AccordionSummary className={classes.accordionSummary}>
                <Typography>What types of blinds do you offer?</Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.accordionDetails}>
                <Typography>We offer a wide range of blinds including roller blinds, Venetian blinds, vertical blinds, and Roman blinds. Each type comes in various materials, colors, and sizes to suit your needs.</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary className={classes.accordionSummary}>
                <Typography>How long does delivery take?</Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.accordionDetails}>
                <Typography>Delivery typically takes between 5-10 business days, depending on your location and the type of blinds ordered. We will provide an estimated delivery date at the time of your order.</Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4 }} />
        <Grid container spacing={2} direction="row" wrap={isMobile ? "wrap" : "nowrap"} className={classes.section}>
          <Grid item xs={12} md={4}>
            <Box>
              <Typography variant="h5" gutterBottom>Contact Information</Typography>
              <Typography variant="body1">Email: totalblindinstallations@gmail.com</Typography>
              <Typography variant="body1">Phone: (123) 456-7890</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box>
              <Typography variant="h5" gutterBottom>Business Hours</Typography>
              <Typography variant="body1">Monday - Friday: 9:00 AM - 5:00 PM</Typography>
              <Typography variant="body1">Saturday: 10:00 AM - 3:00 PM</Typography>
              <Typography variant="body1">Sunday: Closed</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box>
              <Typography variant="h5" gutterBottom>Connect with Us</Typography>
              <IconButton aria-label="Facebook" href="https://www.facebook.com/totalblinds" target="_blank" sx={{ color: '#ecc982' }}>
                <FacebookIcon />
              </IconButton>
              <IconButton aria-label="Twitter" href="https://twitter.com/totalblinds" target="_blank" sx={{ color: '#ecc982' }}>
                <TwitterIcon />
              </IconButton>
              <IconButton aria-label="LinkedIn" href="https://www.linkedin.com/company/totalblinds" target="_blank" sx={{ color: '#ecc982' }}>
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Contact;
