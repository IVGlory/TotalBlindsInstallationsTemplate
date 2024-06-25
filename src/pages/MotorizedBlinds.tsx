import React from 'react';
import BlindsSection from './BlindsSection';
import blinds13 from '../assets/blinds13.jpg';
import blinds14 from '../assets/blinds14.jpg';
import blinds15 from '../assets/blinds15.jpg';
import blinds16 from '../assets/blinds1.webp';
import { makeStyles } from '@mui/styles';
import motorBlinds from '../assets/homePage.jpg';

const useStyles = makeStyles({
  hero: {
    position: 'relative',
    backgroundImage: `url(${motorBlinds})`,
    backgroundSize: 'cover',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});

const MotorizedBlinds: React.FC = () => {
  const classes = useStyles();
  const blindsData = [
    { image: blinds13, text: 'Smart Blinds', description: 'Smart blinds can be controlled via your smartphone or voice commands, adding convenience to your home.' },
    { image: blinds14, text: 'Remote Control Blinds', description: 'Operate your blinds with the touch of a button, perfect for hard-to-reach windows.' },
    { image: blinds15, text: 'Automated Blinds', description: 'Set schedules for your blinds to open and close automatically, improving energy efficiency.' },
    { image: blinds16, text: 'Wireless Blinds', description: 'Wireless blinds offer a clean look with no cords, and can be controlled remotely.' },
  ];

  return (
    <div className={classes.hero}>
      <BlindsSection title="Motor Blinds" blindsData={blindsData} />
    </div>
  );
}

export default MotorizedBlinds;
