import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Typography } from '@mui/material';
import BlindsCard from './BlindsCard';
import BlindsDialog from './BlindsDialog';

const useStyles = makeStyles(() => ({
  container: {
    paddingLeft: '5%',
    paddingTop: '2.5%',
    paddingBottom: '2.5%',
    backgroundColor: 'rgba(0,0,0,.92)',
    minHeight: '100vh',
  },
}));

interface BlindsSectionProps {
  title: string;
  blindsData: Array<{
    images: { [key: string]: string };
    text: string;
    description: string;
  }>;
}

const BlindsSection: React.FC<BlindsSectionProps> = ({ title, blindsData }) => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<{ [key: string]: string }>({});
  const [selectedText, setSelectedText] = useState<string>('');
  const [selectedDescription, setSelectedDescription] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');

  const handleCardClick = (images: { [key: string]: string }, text: string, description: string, currentColor: string) => {
    setSelectedImage(images);
    setSelectedText(text);
    setSelectedDescription(description);
    setSelectedColor(currentColor);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.container}>
      <Typography variant="h1" gutterBottom>{title}</Typography>
      <Grid container spacing={3}>
        {blindsData.map((blind, index) => (
          <Grid key={index} item xs={12} sm={6} md={3}>
            <BlindsCard
              images={blind.images}
              text={blind.text}
              description={blind.description}
              onClick={(currentColor) => handleCardClick(blind.images, blind.text, blind.description, currentColor)} 
              index={index}
              onColorChange={setSelectedColor}
            />
          </Grid>
        ))}
      </Grid>
      <BlindsDialog
        open={open}
        onClose={handleClose}
        images={selectedImage}
        selectedText={selectedText}
        selectedDescription={selectedDescription}
        initialColor={selectedColor}
      />
    </div>
  );
}

export default BlindsSection;