import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid, Dialog, DialogContent, DialogTitle, IconButton, Button } from '@mui/material';
import { Close } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import blinds1 from '../assets/blinds1.webp';
import blinds2 from '../assets/blinds2.webp';
import blinds3 from '../assets/blinds3.jpg';
import blinds4 from '../assets/blinds4.jpg';
import blinds5 from '../assets/blinds2.jpg';
import blinds6 from '../assets/blinds6.jpg';
import blinds7 from '../assets/blinds7.jpg';
import blinds8 from '../assets/blinds8.jpg';
import blinds9 from '../assets/blinds9.jpg';
import blinds10 from '../assets/blinds10.jpg';
import blinds11 from '../assets/blinds11.jpg';
import blinds12 from '../assets/blinds12.jpg';
import blinds13 from '../assets/blinds13.jpg';
import blinds14 from '../assets/blinds14.jpg';
import blinds15 from '../assets/blinds15.jpg';
import blinds16 from '../assets/blinds16.jpg';

const useStyles = makeStyles(() => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  container: {
    paddingLeft: '5%',
    paddingTop: '2.5%',
    paddingBottom: '2.5%', // Adjust the padding as needed
    backgroundColor: '#F6F3E7', // Tan background color
    minHeight: '100vh', // Ensure full height of the page
  },
  dialogImage: {
    width: '100%',
    height: '250px',
  },
  dialogContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    margin: '10px !important',
    width: '200px',
    fontSize: 'medium',
  },
}));

const BlindsInstallations: React.FC = () => {
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

  // Array of objects containing image and text information
  const blindsData = [
    { image: blinds1, text: 'Venetian Blinds', description: 'Elegant and versatile, Venetian blinds offer precise control over light and privacy.' },
    { image: blinds2, text: 'Roman Blinds', description: 'Timeless and sophisticated, Roman blinds add a touch of luxury to any room.' },
    { image: blinds3, text: 'Vertical Blinds', description: 'Modern and practical, vertical blinds are perfect for large windows and sliding glass doors.' },
    { image: blinds4, text: 'Roller Blinds', description: 'Sleek and minimalist, roller blinds offer a clean and contemporary look to any space.' },
    { image: blinds5, text: 'Pleated Blinds', description: 'These blinds feature crisp, pleated fabric that concertinas as they are raised.' },
    { image: blinds6, text: 'Cellular (Honeycomb) Blinds', description: 'Known for their energy efficiency, cellular blinds have a unique honeycomb design that traps air.' },
    { image: blinds7, text: 'Panel Blinds', description: 'Designed for large windows or as room dividers, panel blinds consist of wide fabric panels.' },
    { image: blinds8, text: 'Sheer Blinds', description: 'Sheer blinds combine the functionality of blinds with the softness of sheer fabric.' },
    { image: blinds9, text: 'Bamboo/Woven Wood Blinds', description: 'Made from natural materials like bamboo, grasses, or reeds, these blinds add warmth.' },
    { image: blinds10, text: 'Motorized Blinds', description: 'Offering convenience and sophistication, motorized blinds can be operated remotely.' },
    { image: blinds11, text: 'Aluminum Blinds', description: 'Durable and easy to maintain, aluminum blinds are ideal for high-traffic areas like kitchens.' },
    { image: blinds12, text: 'Skylight Blinds', description: 'Specifically designed for skylights, these blinds provide light control.' },
    { image: blinds13, text: 'Layered/Twin Blinds', description: 'These innovative blinds combine two layers of fabric with alternating sheer and opaque panels.' },
    { image: blinds14, text: 'Day/Night Blinds', description: ' Offering dual functionality, day/night blinds feature alternating translucent.' },
    { image: blinds15, text: 'Faux Wood Blinds', description: ' Mimicking the appearance of real wood, faux wood blinds are made from durable PVC.' },
    { image: blinds16, text: 'Cordless Blinds', description: ' Prioritizing safety and ease of use, cordless blinds eliminate dangling cords..' },
  ];

  return (
    <div className={classes.container}>
      <Typography variant="h4" gutterBottom>Blinds Gallery</Typography>
      <Grid container spacing={3}>
        {blindsData.map((blind, index) => (
          <Grid key={index} item xs={12} sm={6} md={3}>
            <Card className={classes.card}>
              <CardActionArea onClick={() => handleCardClick(blind.image, blind.text, blind.description)}>
                <CardMedia
                  className={classes.media}
                  image={blind.image}
                  title={blind.text}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                    {blind.text}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {blind.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Dialog for expanded view */}
      <Dialog open={open} onClose={handleClose} maxWidth="xs">
        <DialogTitle>
          {selectedText}
          <IconButton aria-label="close" onClick={handleClose} sx={{ position: 'absolute', right: 8, top: 8 }}>
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <img src={selectedImage} alt="Expanded Image" className={classes.dialogImage} />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
                      {selectedDescription}
              </Typography>
            </CardContent>
          <Button color="inherit" component={Link} to="/booking" className={classes.button} style={{ color: 'black', backgroundColor: "#e0ccb1" }}>Book Appointment</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default BlindsInstallations;
