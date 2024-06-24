import React, { useState, useEffect } from 'react';
import NavbarMobile from './device/NavbarMobile';
import NavbarDesktop from './device/NavbarDesktop';

const Navbar: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600); // Adjust the threshold as needed
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check on mount

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? <NavbarMobile /> : <NavbarDesktop />}
    </>
  );
}

export default Navbar;
