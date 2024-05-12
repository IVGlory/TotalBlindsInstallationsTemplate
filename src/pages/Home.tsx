import React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography, Container } from '@mui/material';
import acRepairImage from '../assets/ac-repair-image3.jpg';
import Contact from './Contact';

const useStyles = makeStyles(() => ({
  hero: {
    backgroundImage: `url(${acRepairImage})`,
    backgroundSize: 'cover',
    minHeight: '100vh', // Cover the entire viewport height
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center', // Center align the text
    padding: '20px', // Add padding for better spacing
  },
  contentContainer: {
    paddingTop: '50px', // Adjust the value as needed to move the text lower
    color: 'black', // Change to white color for the text
  },
}));

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.hero}>
      <Container maxWidth="md" className={classes.contentContainer}>
        <Typography variant="h4" component="h2" gutterBottom>
          Welcome to Total Blinds Installation
        </Typography>
        <Typography variant="body1" component="p">
          We are dedicated to providing fast and reliable Blinds repair services to keep you cool during hot days.
        </Typography>
      </Container>
    </div>
  );
}

export default Home;