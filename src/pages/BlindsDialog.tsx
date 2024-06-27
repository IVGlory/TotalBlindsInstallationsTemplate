import React from 'react';
import { makeStyles } from '@mui/styles';
import { Dialog, DialogContent, DialogTitle, IconButton, Typography, Button, CardContent, Slide, SlideProps } from '@mui/material';
import { Close } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
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

interface BlindsDialogProps {
  open: boolean;
  onClose: () => void;
  selectedImage: string;
  selectedText: string;
  selectedDescription: string;
}

const Transition = React.forwardRef(function Transition(
  props: SlideProps & { children: React.ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="down" ref={ref} {...props} timeout={600} />;
});

const BlindsDialog: React.FC<BlindsDialogProps> = ({ open, onClose, selectedImage, selectedText, selectedDescription }) => {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      TransitionComponent={Transition}
    >
      <DialogTitle>
        {selectedText}
        <IconButton aria-label="close" onClick={onClose} sx={{color: '#ecc982', position: 'absolute', right: 8, top: 8 }}>
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <img src={selectedImage} alt="Expanded Image" className={classes.dialogImage} />
        <CardContent>
          <Typography variant="body2" component="p">
            {selectedDescription}
          </Typography>
        </CardContent>
        <Button color="inherit" component={Link} to="/Booking" className={classes.button}>Book Appointment</Button>
      </DialogContent>
    </Dialog>
  );
}

export default BlindsDialog;
