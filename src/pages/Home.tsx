import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Typography, Container } from '@mui/material';
import homePage from '../assets/homePage.jpg';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  '@global': {
    'html, body': {
      overflow: 'hidden',
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
  },
  contentContainer: {
    position: 'relative',
    paddingBottom: '100px',
    zIndex: 1,
  },
  overlay: {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, .85)',
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
  subtitle: {
    marginBottom: '22px !important',
  },
  exploreLink: {
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 0.3s',
    marginTop: '20px',
    display: 'inline-block',
  },
  containerHover: {
    '&:hover $exploreLink': {
      textDecoration: 'underline',
    },
  },
  exploreLinkText: {
    transition: 'transform 0.3s',
    display: 'inline-block',
    '$containerHover:hover &': {
      transform: 'scale(1.05)',
      textDecoration: 'underline',
    },
  },
});

const Home: React.FC = () => {
  const classes = useStyles();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    window.scrollTo(0, 0);
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);


  return (
    <div className={classes.hero}>
      <div className={classes.overlay} />
      <Container maxWidth="md" className={`${classes.contentContainer} ${classes.containerHover}`}>
        <Typography
          variant="h1"
          component="h1"
          gutterBottom
          className={animate ? classes.animatedText : ''}
        >
          WELCOME TO LUX BLINDS
        </Typography>
        <Typography
          variant="h2"
          component="h2"
          className={`${classes.subtitle} ${animate ? classes.animatedText : ''}`}
        >
          Illuminate With Elegance
        </Typography>
        <Typography
          variant="body1"
          className={`${classes.subtitle} ${animate ? classes.animatedText : ''}`}
        >
         We specialize in providing and installing high-quality blinds, shades, and shutters to transform your home or office.
         With our expert craftsmanship and extensive selection, we help you create the perfect ambiance for any room.
        </Typography>
        <Typography 
          variant="h2"
          component={Link}
          to="/Catalog"
          className={`${classes.exploreLink} ${animate ? classes.animatedText : ''}`}
        >
          <span className={classes.exploreLinkText}>Explore Our Collection</span>
        </Typography>
      </Container>
    </div>
  );
}

export default Home;