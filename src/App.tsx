// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, RouteProps } from 'react-router-dom';
import { Routes } from 'react-router';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import './App.css';
import Booking from './pages/Booking';
import BlindsInstallations from './pages/BlindsInstallations';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/TotalBlindsInstallationsTemplate" Component={Home} />
          <Route path="/services" Component={Services} />
          <Route path="/ContactInfo" Component={Contact} />
          <Route path="/booking" Component={Booking} />
          <Route path="/BlindsInstallation" Component={BlindsInstallations} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
