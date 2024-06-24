// src/components/Footer.tsx
import React from 'react';
import { Typography, Grid, Box, Divider } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <div>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h5" gutterBottom>Contact Information</Typography>
            <Typography variant="body1">Total Blinds Installations</Typography>
            <Typography variant="body1">123 Main Street</Typography>
            <Typography variant="body1">City, State 12345</Typography>
            <Typography variant="body1">Phone: (123) 456-7890</Typography>
            <Typography variant="body1">Email: info@totalblinds.com</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h5" gutterBottom>Business Hours</Typography>
            <Typography variant="body1">Monday - Friday: 9:00 AM - 5:00 PM</Typography>
            <Typography variant="body1">Saturday: 10:00 AM - 3:00 PM</Typography>
            <Typography variant="body1">Sunday: Closed</Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
