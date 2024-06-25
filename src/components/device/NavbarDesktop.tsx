import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation(); // Get the current location
  const [productsAnchorEl, setProductsAnchorEl] = useState<null | HTMLElement>(null);

  const handleProductsMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setProductsAnchorEl(event.currentTarget);
  };

  const handleProductsMenuClose = () => {
    setProductsAnchorEl(null);
  };

  return (
    <AppBar position="sticky">
      <Toolbar style={{ minHeight: 60 }}>
        {/*Todo: addlogo
        <Box sx={{ mr: 2 }}>
          <img src={logoImage} alt="Logo" style={{ height: 40 }} />
        </Box>*/}
        <Typography component="div" style={{ flexGrow: 1 }} align="left">
        </Typography>
        <Button
          color="inherit"
          component={Link}
          to="/TotalBlindsInstallationsTemplate"
          style={{ backgroundColor: location.pathname === '/TotalBlindsInstallationsTemplate' ? "rgba(236,201,130,0.25)" : "#000000" }}
        >
          Home
        </Button>

        {/* Services Dropdown */}
        <Button
          color="inherit"
          onClick={handleProductsMenuOpen}
          style={{ backgroundColor: location.pathname === '/WoodBlinds' ||
            location.pathname === '/FauxWoodBlinds' || 
            location.pathname === '/FabricBlinds' ||
            location.pathname === '/MotorizedBlinds'
            ? "rgba(236,201,130,0.25)" : "#000000" }}
        >
          Products
        </Button>
        <Menu
          anchorEl={productsAnchorEl}
          open={Boolean(productsAnchorEl)}
          onClose={handleProductsMenuClose}
          disableScrollLock // Disable scroll lock
        >
          <MenuItem onClick={handleProductsMenuClose} component={Link} to="/WoodBlinds">Wood Blinds</MenuItem>
          <MenuItem onClick={handleProductsMenuClose} component={Link} to="/FauxWoodBlinds">Faux Wood Blinds</MenuItem>
          <MenuItem onClick={handleProductsMenuClose} component={Link} to="/FabricBlinds">Fabric Blinds</MenuItem>
          <MenuItem onClick={handleProductsMenuClose} component={Link} to="/MotorizedBlinds">Motorized Blinds</MenuItem>
        </Menu>

        {/* Contact Dropdown */}
        <Button
          color="inherit"
          component={Link}
          to="ContactInfo"
          style={{ backgroundColor: location.pathname === '/ContactInfo' ? "rgba(236,201,130,0.25)" : "#000000" }}
        >
          Contact
        </Button>

        <Button
          color="inherit"
          component={Link}
          to="/Booking"
          style={{ backgroundColor: location.pathname === '/Booking' ? "rgba(236,201,130,0.25)" : "#000000" }}
        >
          Book Appointment
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
