import React from 'react';
import AppointmentBooking from '../GoogleCalendarScheduling';
import bookingImage from '../assets/ac-repair-image4.jpg';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  container: {
    position: 'relative',
    width: '100%', // Adjust the padding as needed
    height: '25vh', // Ensure full height of the page
  },
}));
const Booking: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img src={bookingImage} alt="Booking Image" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
        <AppointmentBooking />
    </div>
  );
}

export default Booking;
