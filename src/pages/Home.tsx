import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Typography, Container } from '@mui/material';
import homePage from '../assets/homePage.jpg';

const useStyles = makeStyles({
  '@global': {
    'html, body': {
      overflow: 'auto', // Enable scrolling
      height: '100%',
      margin: 0,
      padding: 0,
    },
    '#root': {
      height: '100%',
    },
  },
  hero: {
    position: 'relative',
    backgroundImage: `url(${homePage})`,
    backgroundSize: 'cover',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '20px',
  },
  contentContainer: {
    position: 'relative',
    zIndex: 1,
  },
  overlay: {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, .92)',
    zIndex: 0,
  },
  animatedText: {
    opacity: 0,
    animation: '$fadeInUp 1.0s ease-out forwards',
    animationDelay: '0.5s',
  },
  '@keyframes fadeInUp': {
    '0%': {
      opacity: 0,
      transform: 'translateY(150px)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
});

const Home: React.FC = () => {
  const classes = useStyles();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setAnimate(true);
  }, []);

  return (
    <div className={classes.hero}>
      <div className={classes.overlay} />
      <Container maxWidth="md" className={classes.contentContainer}>
        <Typography
          variant="h1"
          component="h2"
          gutterBottom
          className={animate ? classes.animatedText : ''}
        >
          Welcome to
        </Typography>
        <Typography
          variant="h1"
          component="h2"
          gutterBottom
          className={animate ? classes.animatedText : ''}
        >
          LUX BLINDS
        </Typography>
      </Container>
    </div>
  );
}

export default Home;
