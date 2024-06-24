import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Menu, MenuItem, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation(); // Get the current location
  const [ProductsAnchorEl, setProductsAnchorEl] = useState<null | HTMLElement>(null);


  const handleProductsMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setProductsAnchorEl(event.currentTarget);
  };

  const handleProductsMenuClose = () => {
    setProductsAnchorEl(null);
  };


  return (
    <AppBar position="sticky">
      <Toolbar style={{paddingTop: 5, minHeight: 60, flexDirection: 'column'}}>
        {/*Todo: addlogo
        <Box sx={{ mb: 1 }}>
          <img src={logoImage} alt="Logo" style={{ height: 40 }} />
        </Box> */}
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button color="inherit" component={Link} to="/TotalBlindsInstallationsTemplate" style={{backgroundColor: location.pathname === '/TotalBlindsInstallationsTemplate' ? "rgba(236,201,130,0.25)" : "#000000", margin: '5px' }}>Home</Button>
          <Button color="inherit" onClick={handleProductsMenuOpen} style={{margin: '5px' , backgroundColor: location.pathname === '/WoodBlinds' || location.pathname === '/FauxWoodBlinds' || location.pathname === '/FabricBlinds' || location.pathname === '/MotorizedBlinds'? "rgba(236,201,130,0.25)" : "#000000" }}>Products</Button>
          <Button color="inherit" component={Link} to="/ContactInfo" style={{margin: '5px' }}>Contact</Button>
          <Button color="inherit" component={Link} to="/Booking" style={{backgroundColor: location.pathname === '/booking' ? "rgba(236,201,130,0.25)" : "#000000", margin: '5px' }}>Book Appointment</Button>
        </div>
        {/* Services Dropdown */}
        <Menu
          anchorEl={ProductsAnchorEl}
          open={Boolean(ProductsAnchorEl)}
          onClose={handleProductsMenuClose}
        >
          <MenuItem onClick={handleProductsMenuClose} component={Link} to="/WoodBlinds" >Wood Blinds</MenuItem>
          <MenuItem onClick={handleProductsMenuClose} component={Link} to="/FauxWoodBlinds">Faux Wood Blinds</MenuItem>
          <MenuItem onClick={handleProductsMenuClose} component={Link} to="/FabricBlinds" >Fabric Blinds</MenuItem>
          <MenuItem onClick={handleProductsMenuClose} component={Link} to="/MotorizedBlinds" >Motorized Blinds</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
