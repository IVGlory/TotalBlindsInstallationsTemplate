import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../../assets/total-blinds-installation-high-resolution-logo-black-transparent.png';

const Navbar: React.FC = () => {
  const location = useLocation(); // Get the current location
  const [servicesAnchorEl, setServicesAnchorEl] = useState<null | HTMLElement>(null);
  const [contactAnchorEl, setContactAnchorEl] = useState<null | HTMLElement>(null);

  const handleServicesMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setServicesAnchorEl(event.currentTarget);
  };

  const handleServicesMenuClose = () => {
    setServicesAnchorEl(null);
  };

  const handleContactMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setContactAnchorEl(event.currentTarget);
  };

  const handleContactMenuClose = () => {
    setContactAnchorEl(null);
  };

  return (
    <AppBar position="sticky" style={{ backgroundColor: '#f2f2f2', color: '#333' }}>
      <Toolbar style={{ minHeight: 48, flexDirection: 'column' }}>
        <Box sx={{ mb: 1 }}>
          <img src={logoImage} alt="Logo" style={{ height: 40 }} />
        </Box>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button color="inherit" component={Link} to="/TotalBlindsInstallationsTemplate" style={{ color: 'black', backgroundColor: location.pathname === '/' ? "#D3D3D3" : "#f2f2f2", margin: '5px' }}>Home</Button>
          <Button color="inherit" onClick={handleServicesMenuOpen} style={{ color: 'black', backgroundColor: location.pathname === '/BlindsInstallation' ? "#D3D3D3" : "#f2f2f2", margin: '5px' }}>Services</Button>
          <Button color="inherit" component={Link} to="/ContactInfo" style={{ color: 'black', margin: '5px' }}>Contact</Button>
          <Button color="inherit" component={Link} to="/booking" style={{ color: 'black', backgroundColor: location.pathname === '/booking' ? "#D3D3D3" : "#f2f2f2", margin: '5px' }}>Book Appointment</Button>
        </div>
        {/* Services Dropdown */}
        <Menu
          anchorEl={servicesAnchorEl}
          open={Boolean(servicesAnchorEl)}
          onClose={handleServicesMenuClose}
        >
          <MenuItem onClick={handleServicesMenuClose} component={Link} to="/BlindsInstallation" style={{ color: 'black' }}>Blinds Installation</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
