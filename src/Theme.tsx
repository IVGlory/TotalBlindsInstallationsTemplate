import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
  palette: {
    primary: {
      main: '#000000', // Black color
    },
    secondary: {
      main: '#ecc982', // Light brown color
    },
    text: {
      primary: '#ecc982', // Text color for primary elements
    },
  },
  typography: {
    fontFamily: '"Cinzel-Regular"',
    fontSize: 16, // Default font size
    allVariants: {
      color: '#ecc982', // Set the color for all typography variants
    },
    h1: {
      fontFamily: '"Cinzel Decorative"',
      fontSize: 64,
    },
    h2: {
      fontFamily: '"Cinzel Decorative"',
      fontSize: 32,
    },
    // Add similar entries for h3, h4, etc., if needed
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: 'medium',
          color: '#ecc982', // Text color of the button
          backgroundColor: '#000000', // Background color of the button
          '&:hover': {
            backgroundColor: 'rgba(236, 201, 130, 0.25)', // Background color on hover
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: 'rgba(0, 0, 0, 0.9)', // Transparent black background for the menu
          '& .MuiMenuItem-root:hover': {
            backgroundColor: 'rgba(236, 201, 130, 0.25)', // Golden hover background color
          },
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontFamily: '"Cinzel Decorative"', // Apply the same font family as h2
          fontSize: 32, // Apply the same font size as h2
          color: '#ecc982', // Apply the same color as h2
        },
      },
    },
    MuiCard: { // Add styles for MuiCard component
      styleOverrides: {
        root: {
          backgroundColor: '#1a1a1a', // Dark background color for the card
          color: '#ecc982', // Text color for the card content
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: '#1a1a1a', // Background color of the dialog
        },
      },
    },
  },
});

export default Theme;
