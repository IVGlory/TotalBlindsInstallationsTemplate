import { makeStyles } from '@mui/styles';
import { 
  Typography, Container, Grid, Paper, Box,
  Accordion, AccordionDetails, AccordionSummary
} from '@mui/material';
import { ExpandMore} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import homePage from '../assets/homePage.jpg';

// Import images for each blind type
import woodBlindsImage from '../assets/4kBlackBlinds.webp';
import fauxWoodBlindsImage from '../assets/4kBlackBlinds.webp';
import fabricBlindsImage from '../assets/4kBlackBlinds.webp';
import motorizedBlindsImage from '../assets/4kBlackBlinds.webp';

const useStyles = makeStyles(() => ({
  hero: { 
    position: 'relative',
    backgroundImage: `url(${homePage})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    textAlign: 'center',
    paddingTop: '80px',
    paddingBottom: '80px',
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
  contentContainer: {
    width: "100% !important",
    maxWidth: '100% !important',
    position: 'relative',
    zIndex: 1,
  },
  title: {
    marginBottom: '40px !important',
  },
  blindSection: {
    marginBottom: '60px',
    position: 'relative',
  },
  expandButton: {
    marginTop: '16px',
    color: '#ecc982',
  },
  imageContainer: {
    position: 'relative',
    display: 'flex',
    height: '50vh',
  },
  blindImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '8px',
    border: '2px solid #000000 !important',
  },
  colorIconsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: '10px',
    height: '100%',
    width: '40px',
  },
  colorIconsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    overflowY: 'auto',
    overflowX: 'hidden', // Add this line to disable horizontal scrolling
    height: '100%',
    '&::-webkit-scrollbar': {
      width: '6px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#ecc982',
      borderRadius: '3px',
    },
    
  },
  colorIcon: {
    width: 30,
    height: 30,
    minWidth: 30,
    margin: '4px 0',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  accordion: {
    width: '100%',  // Ensure the accordion covers the full width
    padding: '0px',
    borderRadius: '10px !important',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.0) !important',
    '&:before': {
      display: 'none',
    },
  },
  accordionSummary: {
    width: '100%',  // Ensure the accordion summary covers the full width
    padding: "0px !important",
    borderRadius: '10px',
    '&.Mui-expanded': {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
    '&:hover': {
      backgroundColor: 'rgba(236, 201, 130, 0.25)', // Golden hover background color
      justifyContent: 'center',
    },
  },
  accordionDetails: {
    width: '95%',  // Ensure the accordion details cover the full width
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
  },
  detailSection:{
    textAlign: "left"
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: '20px',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  blindTitle: {
    marginBottom: '0px !important',
    textAlign: 'left',
    transition: 'all 0.3s ease',
  },
  sectionContainer: {
    marginBottom: '80px',
    '&:hover $titleContainer': {
      transform: 'translateX(20px)',
    },
    '&:hover $blindTitle': {
      color: '#ecc982',
      textDecoration: 'underline'
    },
  },
  exploreButton: {
    color: '#ecc982',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateX(5px)',
      '& .MuiSvgIcon-root': {
        transform: 'rotate(-45deg)',
      },
    },
  },
  arrowIcon: {
    transition: 'all 0.3s ease',
    marginLeft: '5px',
  },
}));

interface BlindData {
  title: string;
  image: string;
  description: string;
  route: string;
}

const blindsData: BlindData[] = [
  {
    title: 'Wood Blinds',
    image: woodBlindsImage,
    description: 'Classic and elegant, our wood blinds bring warmth and natural beauty to any room.',
    route: '/WoodBlinds',
  },
  {
    title: 'Faux Wood Blinds',
    image: fauxWoodBlindsImage,
    description: 'Get the look of real wood with added durability and moisture resistance.',
    route: '/FauxWoodBlinds',
  },
  {
    title: 'Fabric Blinds',
    image: fabricBlindsImage,
    description: 'Soft and versatile, fabric blinds offer endless possibilities for style and light control.',
    route: '/FabricBlinds',
  },
  {
    title: 'Motorized Blinds',
    image: motorizedBlindsImage,
    description: 'Experience the convenience of automated blinds with our cutting-edge motorized options.',
    route: '/MotorizedBlinds',
  },
];

const Catalog: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleTitleClick = (route: string) => {
    navigate(route);
  };

  return (
    <div className={classes.hero}>
      <div className={classes.overlay} />
      <Container className={classes.contentContainer}>
        {blindsData.map((blind, index) => (
          <Box 
            key={index} 
            className={classes.sectionContainer}
          >
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <div className={classes.imageContainer}>
                  <Paper elevation={3} style={{backgroundColor:"#000000", width: '100%', height: '100%'}}>
                    <img 
                      src={blind.image} 
                      alt={blind.title} 
                      className={classes.blindImage} 
                    />
                  </Paper>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div 
                  className={classes.titleContainer}
                  onClick={() => handleTitleClick(blind.route)}
                >
                  <Typography variant="h2" component="h2" className={classes.blindTitle}>
                    {blind.title}
                  </Typography>
                </div>
                <Typography variant="body1" component="p" className={classes.detailSection} style={{paddingBottom: "25px"}}>
                  {blind.description}
                </Typography>

                <Accordion className={classes.accordion}>
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    className={classes.accordionSummary}
                  >
                    <Typography sx={{ fontWeight: 'bold' }}>Key Features & Enhancements</Typography>
                  </AccordionSummary>
                  <AccordionDetails className={classes.accordionDetails}>
                    <Typography variant="body1" component="p" className = {classes.detailSection}>
                      {blind.description}
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion className={classes.accordion}>
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    className={classes.accordionSummary}
                  >
                    <Typography sx={{ fontWeight: 'bold' }}>Control Options</Typography>
                  </AccordionSummary>
                  <AccordionDetails className={classes.accordionDetails}>
                    <Typography variant="body1" component="p" className = {classes.detailSection}>
                      {blind.description}
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion className={classes.accordion}>
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    className={classes.accordionSummary}
                  >
                    <Typography sx={{ fontWeight: 'bold' }}>Specialty Shapes</Typography>
                  </AccordionSummary>
                  <AccordionDetails className={classes.accordionDetails}>
                    <Typography variant="body1" component="p" className = {classes.detailSection}>
                      {blind.description}
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion className={classes.accordion}>
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    className={classes.accordionSummary}
                  >
                    <Typography sx={{ fontWeight: 'bold' }}>Pricing Details</Typography>
                  </AccordionSummary>
                  <AccordionDetails className={classes.accordionDetails}>
                    <Typography variant="body1" component="p" className = {classes.detailSection}>
                      {blind.description}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Container>
    </div>
  );
}

export default Catalog;