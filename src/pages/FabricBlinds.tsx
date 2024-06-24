import React from 'react';
import BlindsSection from './BlindsSection';
import blinds9 from '../assets/blinds9.jpg';
import blinds10 from '../assets/blinds10.jpg';
import blinds11 from '../assets/blinds11.jpg';
import blinds12 from '../assets/blinds12.jpg';

const FabricBlinds: React.FC = () => {
  const blindsData = [
    { image: blinds9, text: 'Bamboo Wood Blinds', description: 'Made from natural materials like bamboo, grasses, or reeds, these blinds add warmth.' },
    { image: blinds10, text: 'Motorized Blinds', description: 'Offering convenience and sophistication, motorized blinds can be operated remotely.' },
    { image: blinds11, text: 'Aluminum Blinds', description: 'Durable and easy to maintain, aluminum blinds are ideal for high-traffic areas like kitchens.' },
    { image: blinds12, text: 'Skylight Blinds', description: 'Specifically designed for skylights, these blinds provide light control.' },
  ];

  return (
    <BlindsSection title="Fabric Blinds" blindsData={blindsData} />
  );
}

export default FabricBlinds;
