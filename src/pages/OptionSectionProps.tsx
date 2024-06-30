import { Box, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles(() => ({
    optionButton: {
      borderRadius: '20px !important',
    },
  }));

interface OptionSectionProps {
  title: string;
  options: string[];
  selectedOption: string | null;
  onSelect: (option: string) => void;
  infoText: string;
}

const OptionSection: React.FC<OptionSectionProps> = ({ title, options, selectedOption, onSelect, infoText }) => {
  const classes = useStyles();
  return (
    <Box sx={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {options.map((option) => (
        <Button
          key={option}
          variant={selectedOption === option ? 'contained' : 'outlined'}
          onClick={() => onSelect(option)}
          className={classes.optionButton}
          sx={{ 
            flex: { xs: '1 0 40%', sm: '0 1 auto' },  // Adjust button width based on screen size
            margin: '5px !important',
            color: '#ecc982',
            backgroundColor: selectedOption === option ? '#000000' : 'transparent',
            borderColor: '#ecc982',
            '&:hover': {
              backgroundColor: 'rgba(236, 201, 130, 0.25)',
            }
          }}
        >
          {option}
        </Button>
      ))}
    </Box>
  );
};

export default OptionSection;
