import React, { useState, useRef, useEffect } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, useMediaQuery, Grid, Box, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Slide from '@mui/material/Slide';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    width: '100%',
    marginBottom: '20px',
  },
  media: {
    height: 280, // Increased from 140
    position: 'relative',
    overflow: 'hidden',
  },
  overlayText: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    color: '#ecc982',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '5px',
    borderRadius: '5px',
  },
  content: {
    color: '#ecc982',
  },
  gridItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorSelectorContainer: {
    position: 'relative',
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorSelector: {
    display: 'flex',
    overflowX: 'hidden',
    scrollBehavior: 'smooth',
    maxWidth: '80%',
    margin: '0 auto',
  },
  colorIcon: {
    width: 30,
    height: 30,
    minWidth: 30,
    margin: '0 5px',
    border: '2px solid #000000',
    borderRadius: '50%',
    cursor: 'pointer',
  },
  scrollButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: '#000000',
    padding: '4px',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    display: 'none',
  },
  leftScrollButton: {
    left: 0,
  },
  rightScrollButton: {
    right: 0,
  },
  zoomContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 100,
    height: 100,
    border: '2px solid #000000',
    borderRadius: '5px',
    overflow: 'hidden',
    display: 'none',
    zIndex: 2,
  },
  zoomImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    transformOrigin: '0 0',
  },
});

interface BlindsCardProps {
  images: { [key: string]: string };
  text: string;
  description: string;
  onClick: (currentColor: string) => void;
  index: number;
  onColorChange: (color: string) => void;
}

const BlindsCard: React.FC<BlindsCardProps> = ({ images, text, description, onClick, index, onColorChange }) => {
  const classes = useStyles();
  const [selectedColor, setSelectedColor] = useState(Object.keys(images)[0]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showScrollButtons, setShowScrollButtons] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  const zoomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseEnter = () => !isMobile && setIsHovering(true);
  const handleMouseLeave = () => !isMobile && setIsHovering(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !imageRef.current || !zoomRef.current) return;

    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = (event.clientX - left) / width;
    const y = (event.clientY - top) / height;

    setMousePosition({ x, y });

    const zoomImg = zoomRef.current.querySelector('img') as HTMLImageElement;
    if (zoomImg) {
      const scaleFactor = 4;
      const zoomWidth = 150;
      const zoomHeight = 150;

      zoomImg.style.width = `${width * scaleFactor}px`;
      zoomImg.style.height = `${height * scaleFactor}px`;
      zoomImg.style.transform = `translate(${-x * (width * scaleFactor - zoomWidth)}px, ${-y * (height * scaleFactor - zoomHeight)}px)`;
    }
  };

  useEffect(() => {
    const checkScrollable = () => {
      if (scrollContainerRef.current) {
        const { scrollWidth, clientWidth } = scrollContainerRef.current;
        setShowScrollButtons(scrollWidth > clientWidth);
      }
      window.scrollTo(0, 0);
    };

    checkScrollable();
    window.addEventListener('resize', checkScrollable);

    return () => {
      window.removeEventListener('resize', checkScrollable);
    };
  }, []);

  const handleColorChange = (color: string, event: React.MouseEvent) => {
    event.stopPropagation();
    setSelectedColor(color);
    onColorChange(color);
  };

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 100;
      const newScrollLeft = direction === 'left'
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      scrollContainerRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
    }
  };

  const handleCardClick = () => {
    onClick(selectedColor);
    onColorChange(selectedColor);
  };

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
          <CardActionArea onClick={handleCardClick}>
            <CardMedia
              className={classes.media}
              image={images[selectedColor]}
              title={text}
              ref={imageRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
            >
              <Typography variant="body2" component="p" className={classes.overlayText}>
                {selectedColor}
              </Typography>
              {!isMobile && isHovering && (
                <Box className={classes.zoomContainer} ref={zoomRef} style={{ display: 'block' }}>
                  <img
                    src={images[selectedColor]}
                    alt={text}
                    className={classes.zoomImage}
                  />
                </Box>
              )}
            </CardMedia>
            <Box className={classes.colorSelectorContainer}>
                {showScrollButtons && (
                  <IconButton
                    className={`${classes.scrollButton} ${classes.leftScrollButton}`}
                    onClick={(e) => { e.stopPropagation(); handleScroll('left'); }}
                    size="small"
                    style={{ display: 'contents' }}
                  >
                    <ArrowBackIosNewIcon fontSize="small" style={{ color: '#ecc982' }} />
                  </IconButton>
                )}
                <Box className={classes.colorSelector} ref={scrollContainerRef}>
                  {Object.entries(images).map(([color, imageUrl]) => (
                    <IconButton
                      key={color}
                      onClick={(e) => handleColorChange(color, e)}
                      className={classes.colorIcon}
                      style={{
                        backgroundImage: `url(${imageUrl})`,
                        backgroundSize: 'cover',
                        border: color === selectedColor ? '2px solid #ecc982' : '2px solid #000000',
                      }}
                    />
                  ))}
                </Box>
                {showScrollButtons && (
                  <IconButton
                    className={`${classes.scrollButton} ${classes.rightScrollButton}`}
                    onClick={(e) => { e.stopPropagation(); handleScroll('right'); }}
                    size="small"
                    style={{ display: 'contents' }}
                  >
                    <ArrowForwardIosIcon fontSize="small" style={{ color: '#ecc982' }} />
                  </IconButton>
                )}
              </Box>
            <CardContent className={classes.content}>
              <Typography gutterBottom variant="h2" component="h2">
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