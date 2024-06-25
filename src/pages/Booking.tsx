import React from 'react';
import AppointmentBooking from '../GoogleCalendarScheduling';
import { makeStyles } from '@mui/styles';
import homePage from '../assets/homePage.jpg';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles(() => ({
  container: {
    position: 'relative',
    backgroundImage: `url(${homePage})`,
    backgroundSize: 'cover',
    paddingLeft: '5%',
    paddingTop: '2.5%',
    paddingBottom: '2.5%', // Adjust the padding as needed
    minHeight: '100vh',
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
  }
}));

const Booking: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.overlay}>
        <Typography variant="h1">Manage Bookings</Typography>
        <AppointmentBooking />
      </div>
    </div>
  );
}

export default Booking;
