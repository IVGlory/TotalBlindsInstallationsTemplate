import React from 'react';
import { InlineWidget } from 'react-calendly';

const GoogleCalendarScheduling: React.FC = () => {
  return (
    <div >
      <InlineWidget url="https://calendly.com/totalblindinstallations/lux-blind-consultation"
      styles={{ height: '850px', width: "100%" }}
      pageSettings={{
        backgroundColor: '#000000',
        hideEventTypeDetails: false,
        hideLandingPageDetails: false,
        primaryColor: '#ecc982',
        textColor: '#ecc982'
      }}/>
    </div>
  );
};

export default GoogleCalendarScheduling;
