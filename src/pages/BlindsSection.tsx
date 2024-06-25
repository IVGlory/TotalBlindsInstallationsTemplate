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
  blindsData: Array<{ image: string; text: string; description: string }>;
}

const BlindsSection: React.FC<BlindsSectionProps> = ({ title, blindsData }) => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [selectedText, setSelectedText] = useState<string>('');
  const [selectedDescription, setSelectedDescription] = useState<string>('');

  const handleCardClick = (image: string, text: string, description: string) => {
    setSelectedImage(image);
    setSelectedText(text);
    setSelectedDescription(description);
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
              image={blind.image}
              text={blind.text}
              description={blind.description}
              onClick={() => handleCardClick(blind.image, blind.text, blind.description)} 
              index={index}            />
          </Grid>
        ))}
      </Grid>
      <BlindsDialog
        open={open}
        onClose={handleClose}
        selectedImage={selectedImage}
        selectedText={selectedText}
        selectedDescription={selectedDescription}
      />
    </div>
  );
}

export default BlindsSection;
