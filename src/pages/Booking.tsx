import React, { useEffect } from 'react';
import AppointmentBooking from '../GoogleCalendarScheduling';
import { makeStyles } from '@mui/styles';
import homePage from '../assets/homePage.jpg';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles({
  '@global': {
    'html, body': {
      overflow: 'hidden', // Disable scrolling globally for the home page
    },
  },
  container: {
    position: 'relative',
    backgroundImage: `url(${homePage})`,
    backgroundSize: 'cover',
    paddingLeft: '5%',
    minHeight: 'calc(100vh)', // Assuming the navbar height is 64px
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
    height: '100%', // Ensure it covers the full container height
    backgroundColor: 'rgba(0, 0, 0, .92)',
    zIndex: 0,
  },
});

const Booking: React.FC = () => {
  const classes = useStyles();
  const location = useLocation();
  const bookingState = location.state as {
    mountType: string;
    lightControl: string;
    selectedColor: string;
    selectedText: string;
  } | undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.overlay}>
        <AppointmentBooking bookingState={bookingState} />
      </div>
    </div>
  );
}

export default Booking;
