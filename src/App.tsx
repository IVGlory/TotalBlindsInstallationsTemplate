import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
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
            <Route path="/TotalBlindsInstallationsTemplate" element={<Home />} />
            <Route path="/ContactInfo" element={<Contact />} />
            <Route path="/Booking" element={<Booking />} />
            <Route path="/WoodBlinds" element={<WoodBlinds />} />
            <Route path="/FauxWoodBlinds" element={<FauxWoodBlinds />} />
            <Route path="/FabricBlinds" element={<FabricBlinds />} />
            <Route path="/MotorizedBlinds" element={<MotorizedBlinds />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
