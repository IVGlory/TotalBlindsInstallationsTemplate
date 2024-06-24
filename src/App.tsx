// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, RouteProps } from 'react-router-dom';
import { Routes } from 'react-router';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import './App.css';
import Booking from './pages/Booking';
import WoodBlinds from './pages/WoodBlinds';
import FauxWoodBlinds from './pages/FauxWoodBlinds';
import FabricBlinds from './pages/FabricBlinds';
import MotorizedBlinds from './pages/MotorizedBlinds';
import Theme from './Theme';
import { ThemeProvider } from '@emotion/react';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/TotalBlindsInstallationsTemplate" Component={Home} />
          <Route path="/ContactInfo" Component={Contact} />
          <Route path="/Booking" Component={Booking} />
          <Route path="/WoodBlinds" Component={WoodBlinds} />
          <Route path="/FauxWoodBlinds" Component={FauxWoodBlinds} />
          <Route path="/FabricBlinds" Component={FabricBlinds} />
          <Route path="/MotorizedBlinds" Component={MotorizedBlinds} />
        </Routes>
      </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;
