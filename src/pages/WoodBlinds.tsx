import React from 'react';
import BlindsSection from './BlindsSection';
import blinds1 from '../assets/blinds1.webp';
import blinds2 from '../assets/blinds2.webp';
import blinds3 from '../assets/blinds3.jpg';
import blinds4 from '../assets/blinds4.jpg';
import blackBlinds from '../assets/4kTest.webp';
import { makeStyles } from '@mui/styles';
import woodBlinds from '../assets/homePage.jpg';

const useStyles = makeStyles({
  hero: {
    position: 'relative',
    backgroundImage: `url(${woodBlinds})`,
    backgroundSize: 'cover',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});

interface BlindData {
  images: { [key: string]: string };
  text: string;
  description: string;
}

const WoodBlinds: React.FC = () => {
  const classes = useStyles();
  const blindsData: BlindData[] = [
    { 
      images: {
        'Natural': blackBlinds,
        'Mahogany': blinds2,
        'White': blinds3,
      },
      text: 'Venetian Blinds',
      description: 'Elegant and versatile, Venetian blinds offer precise control over light and privacy.'
    },
    { 
      images: {
        'Beige': blackBlinds,
        'Gray': blinds3,
        'Brown': blinds4,
        'Green': blinds3,
        'Blue': blinds4,
        'Pink': blinds1,
      },
      text: 'Roman Blinds',
      description: 'Timeless and sophisticated, Roman blinds add a touch of luxury to any room.'
    },
    { 
      images: {
        'White': blackBlinds,
        'Black': blinds4,
        'Silver': blinds1,
        'Beige': blinds3,
        'Gray': blinds4,
        'Brown': blinds1,
        'Green': blinds3,
        'Blue': blinds4,
        'Pink': blinds1,
      },
      text: 'Vertical Blinds',
      description: 'Modern and practical, vertical blinds are perfect for large windows and sliding glass doors.'
    },
    { 
      images: {
        'Cream': blackBlinds,
        'Navy': blinds1,
        'Green': blinds2,
      },
      text: 'Roller Blinds',
      description: 'Sleek and minimalist, roller blinds offer a clean and contemporary look to any space.'
    },
  ];

  return (
    <div className={classes.hero}>
      <BlindsSection title="Wood Blinds" blindsData={blindsData} />
    </div>
  );
}

export default WoodBlinds;