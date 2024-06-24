import React from 'react';
import BlindsSection from './BlindsSection';
import blinds5 from '../assets/blinds2.jpg';
import blinds6 from '../assets/blinds6.jpg';
import blinds7 from '../assets/blinds7.jpg';
import blinds8 from '../assets/blinds8.jpg';

const FauxWoodBlinds: React.FC = () => {
  const blindsData = [
    { image: blinds5, text: 'Pleated Blinds', description: 'These blinds feature crisp, pleated fabric that concertinas as they are raised.' },
    { image: blinds6, text: 'Cellular Blinds', description: 'Known for their energy efficiency, cellular blinds have a unique honeycomb design that traps air.' },
    { image: blinds7, text: 'Panel Blinds', description: 'Designed for large windows or as room dividers, panel blinds consist of wide fabric panels.' },
    { image: blinds8, text: 'Sheer Blinds', description: 'Sheer blinds combine the functionality of blinds with the softness of sheer fabric.' },
  ];

  return (
    <BlindsSection title="Faux Wood Blinds" blindsData={blindsData} />
  );
}

export default FauxWoodBlinds;
