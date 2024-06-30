import { Box, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
    optionButton: {
    //   margin: '5px !important',
      borderRadius: '20px !important',
    //   transition: 'all 0.2s ease-in-out',
    //   '&:hover': {
    //     transform: 'translateY(-2px)',
    //     boxShadow: '0 4px 8px rgba(236, 201, 130, 0.25)',
    //   },
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
              flex: { xs: '1 0 40%', sm: '0 1 auto' },
              margin: '5px !important',
              color:'#ecc982',
              backgroundColor: selectedOption === option ? '#000000' : 'transparent',
              borderColor: '#ecc982',
              '&:hover': {
                backgroundColor:'rgba(236, 201, 130, 0.25)',
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
