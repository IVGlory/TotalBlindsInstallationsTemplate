import React, { useState, useRef, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { 
  Dialog, DialogContent, DialogTitle, IconButton, Typography, Button, 
  CardContent, Slide, SlideProps, Box, Accordion, AccordionSummary, AccordionDetails
} from '@mui/material';
import { Close, ExpandMore } from '@mui/icons-material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import InfoIcon from '@mui/icons-material/Info';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';
import OptionSection from './OptionSectionProps';

const useStyles = makeStyles(() => ({
  dialogImage: {
    width: '100%',
    height: '100%',
    position: 'relative',
    borderRadius: '15px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  dialogContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px !important',
  },
  button: {
    margin: '20px 0 !important',
    width: '200px',
    fontSize: 'medium',
    borderRadius: '25px !important',
    transition: 'all 0.3s ease-in-out !important',
    '&:hover': {
      backgroundColor: 'rgba(236, 201, 130, 0.25)',
    },
  },
  overlayText: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    color: '#ecc982',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '5px 10px',
    borderRadius: '15px',
    fontWeight: 'bold',
  },
  colorSelectorContainer: {
    position: 'relative',
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  colorSelector: {
    display: 'flex',
    overflowX: 'hidden',
    scrollBehavior: 'smooth',
    maxWidth: '90%',
    margin: '0 auto',
    padding: '10px 0',
  },
  colorIcon: {
    width: 40,
    height: 40,
    minWidth: 40,
    margin: '0 8px',
    border: '3px solid #fff',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  scrollButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: '#fff',
    padding: '4px',
    borderRadius: '50%',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
  },
  leftScrollButton: {
    left: 0,
  },
  rightScrollButton: {
    right: 0,
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
    borderRadius: '10px',
    '&.Mui-expanded': {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      '&:hover': {
        backgroundColor: 'rgba(236, 201, 130, 0.25)', // Golden hover background color
        justifyContent: 'center',
      },
    },
  },
  accordionDetails: {
    width: '95%',  // Ensure the accordion details cover the full width
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));


interface BlindsDialogProps {
  open: boolean;
  onClose: () => void;
  images: { [key: string]: string };
  selectedText: string;
  selectedDescription: string;
  initialColor: string;
}

const Transition = React.forwardRef<unknown, SlideProps>(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const BlindsDialog: React.FC<BlindsDialogProps> = ({ 
  open, 
  onClose, 
  images, 
  selectedText, 
  selectedDescription,
  initialColor
}) => {
  const classes = useStyles();
  const [selectedColor, setSelectedColor] = useState(initialColor);
  const [mountType, setMountType] = useState<string | null>(null);
  const [lightControl, setLightControl] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showScrollButtons, setShowScrollButtons] = useState(false);

  useEffect(() => {
    setSelectedColor(initialColor);
  }, [initialColor]);

  const checkScrollable = () => {
    if (scrollContainerRef.current) {
      const { scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowScrollButtons(scrollWidth > clientWidth);
    }
  };

  const handleMountTypeChange = (type: string) => {
    setMountType(type);
  };

  const handleLightControlChange = (control: string) => {
    setLightControl(control);
  };

  useEffect(() => {
    if (open) {
      // Use setTimeout to ensure the dialog content has rendered
      setTimeout(() => {
        checkScrollable();
        setLightControl(null);
        setMountType(null);
      }, 0);
    }
  }, [open]);

  useEffect(() => {
    window.addEventListener('resize', checkScrollable);
    return () => {
      window.removeEventListener('resize', checkScrollable);
    };
  }, []);

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  const handleScroll = (direction: 'left' | 'right', event: React.MouseEvent) => {
    event.stopPropagation();
    if (scrollContainerRef.current) {
      const scrollAmount = 100;
      const newScrollLeft = direction === 'left'
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      scrollContainerRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      TransitionComponent={Transition}
    >
      <DialogTitle>
        <Typography variant="h2">
          {selectedText}
        </Typography>
        <IconButton aria-label="close" onClick={onClose} sx={{color: '#ecc982', position: 'absolute', right: 8, top: 8 }}>
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <div className={classes.dialogImage}>
          <img src={images[selectedColor]} alt="Expanded Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <Typography variant="body2" component="p" className={classes.overlayText}>
            {selectedColor}
          </Typography>
        </div>
        <Box className={classes.colorSelectorContainer}>
          {showScrollButtons && (
            <IconButton
              className={`${classes.scrollButton} ${classes.leftScrollButton}`}
              onClick={(e) => handleScroll('left', e)}
              size="small"
            >
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>
          )}
          <Box className={classes.colorSelector} ref={scrollContainerRef}>
            {Object.entries(images).map(([color, imageUrl]) => (
              <IconButton
                key={color}
                onClick={() => handleColorChange(color)}
                className={classes.colorIcon}
                style={{
                  backgroundImage: `url(${imageUrl})`,
                  backgroundSize: 'cover',
                  border: color === selectedColor ? '3px solid #ecc982' : '3px solid #000000',
                }}
              />
            ))}
          </Box>
          {showScrollButtons && (
            <IconButton
              className={`${classes.scrollButton} ${classes.rightScrollButton}`}
              onClick={(e) => handleScroll('right', e)}
              size="small"
            >
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          )}
        </Box>
        <CardContent>
          <Typography variant="body1" component="p">
            {selectedDescription}
          </Typography>
        </CardContent>
        
        <Accordion className={classes.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            className={classes.accordionSummary}
          >
            <Typography sx={{ fontWeight: 'bold' }}>Mount Type</Typography>
            <Tooltip title="Inside mount fits within the window frame, while outside mount covers the entire window opening." arrow>
              <InfoIcon sx={{ marginLeft: 1, fontSize: 'small', color: '#ecc982', cursor: 'pointer' }} />
            </Tooltip>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetails}>
            <OptionSection
              title="Mount Type"
              options={['Inside Mount', 'Outside Mount']}
              selectedOption={mountType}
              onSelect={handleMountTypeChange}
              infoText=""
            />
          </AccordionDetails>
        </Accordion>

        <Accordion className={classes.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            className={classes.accordionSummary}
          >
            <Typography sx={{ fontWeight: 'bold' }}>Light Control</Typography>
            <Tooltip title="Light filtering allows some light, room darkening blocks most light, and blackout blocks all light." arrow>
              <InfoIcon sx={{ marginLeft: 1, fontSize: 'small', color: '#ecc982', cursor: 'pointer' }} />
            </Tooltip>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetails}>
            <OptionSection
              title="Light Control"
              options={['Light Filtering', 'Room Darkening', 'Blackout']}
              selectedOption={lightControl}
              onSelect={handleLightControlChange}
              infoText=""
            />
          </AccordionDetails>
        </Accordion>
        <Button 
          color="inherit" 
          component={Link} 
          to="/Booking" 
          className={classes.button}
          onClick={(e) => {
            if (!selectedColor || !mountType || !lightControl) {
              e.preventDefault();
              alert('Please select all options before booking.');
            }
          }}
        >
          Book Appointment
        </Button>
      </DialogContent>
    </Dialog>
  );
}

export default BlindsDialog;