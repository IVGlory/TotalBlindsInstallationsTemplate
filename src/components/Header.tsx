// src/components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <h1>AC Repair Company</h1>
      <nav>
        <ul>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
