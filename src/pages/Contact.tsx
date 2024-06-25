import React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography, Grid, Box, Divider, IconButton } from '@mui/material';
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
    paddingBottom: '2.5%', // Adjust the padding as needed
    minHeight: '100vh', // Ensure full height of the page
    backgroundColor: "#000000",
    position: 'relative',
    backgroundImage: `url(${contacts})`,
    backgroundSize: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  overlay: {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    paddingTop: '2.5%',
    paddingBottom: '2.5%',
    width: '100%',
    minHeight: '100vh', // Ensure it covers the full viewport height on mobile
    backgroundColor: 'rgba(0, 0, 0, .92)',
    zIndex: 0,
  },
  employeeImage: {
    width: '200px',
    height: '300px',
    marginBottom: '10px',
  },
  section: {
    marginBottom: '20px', // Adjust the spacing between sections as needed
  },
}));

const Contact: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.overlay}>
        <Grid container spacing={2} className={classes.section}>
          <Grid item xs={12}>
            <Typography variant="h1" gutterBottom>Total Blinds Team</Typography>
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
        <Grid container spacing={2} className={classes.section}>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h5" gutterBottom>Contact Information</Typography>
              <Typography variant="body1">Total Blinds Installation</Typography>
              <Typography variant="body1">123 Main Street</Typography>
              <Typography variant="body1">City, State 12345</Typography>
              <Typography variant="body1">Phone: (123) 456-7890</Typography>
              <Typography variant="body1">Email: totalblindinstallations@gmail.com</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h5" gutterBottom>Business Hours</Typography>
              <Typography variant="body1">Monday - Friday: 9:00 AM - 5:00 PM</Typography>
              <Typography variant="body1">Saturday: 10:00 AM - 3:00 PM</Typography>
              <Typography variant="body1">Sunday: Closed</Typography>
            </Box>
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
