import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, useMediaQuery, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Slide from '@mui/material/Slide';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    width: '100%', // Ensure the card takes full width of the grid item
    marginBottom: '20px', // Add some margin between cards
  },
  media: {
    height: 140,
  },
  content: {
    color: '#ecc982', // Text color for card content
  },
  gridItem: {
    display: 'flex',
    justifyContent: 'center', // Center the card horizontally
    alignItems: 'center', // Center the card vertically if needed
  },
});

interface BlindsCardProps {
  image: string;
  text: string;
  description: string;
  onClick: () => void;
  index: number; // Add index prop to control individual slide delay
}

const BlindsCard: React.FC<BlindsCardProps> = ({ image, text, description, onClick, index }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)'); // Media query for mobile devices

  return (
    <Slide
      direction={isMobile ? "up" : "left"}
      in={true}
      mountOnEnter
      unmountOnExit
      timeout={index * 250}
    >
      <Grid item xs={12} sm={6} md={10} className={classes.gridItem}>
        <Card className={classes.card}>
          <CardActionArea onClick={onClick}>
            <CardMedia
              className={classes.media}
              image={image}
              title={text}
            />
            <CardContent className={classes.content}>
              <Typography gutterBottom variant="h5" component="h2">
                {text}
              </Typography>
              <Typography variant="body2" component="p">
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Slide>
  );
}

export default BlindsCard;
