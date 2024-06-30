import React from 'react';
import { InlineWidget } from 'react-calendly';

interface BookingState {
  mountType: string;
  lightControl: string;
  selectedColor: string;
  selectedText: string;
}

interface GoogleCalendarSchedulingProps {
  bookingState?: BookingState;
}

const GoogleCalendarScheduling: React.FC<GoogleCalendarSchedulingProps> = ({ bookingState }) => {

  const mountTypeMap: Map<string, string> = new Map();
  mountTypeMap.set("Inside Mount", "1");
  mountTypeMap.set("Outside Mount", "2");

  const lightControlMap: Map<string, string> = new Map();
  lightControlMap.set("Light Filtering", "1");
  lightControlMap.set("Room Darkening", "2");
  lightControlMap.set("Blackout", "3");

  let mount = "";
  let light = "";
  if(isDefined(bookingState)){
    mount =  mountTypeMap.get(bookingState.mountType.split(' ')
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' '))!;
    light =  lightControlMap.get(bookingState.lightControl.split(' ')
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' '))!;
    console.log("bookingState?.mountType: " + mount)
  console.log("bookingState?.lightControl: " + light)
  }
  
  return (
    <div>
      <InlineWidget
        url="https://calendly.com/totalblindinstallations/lux-blind-consultation"
        styles={{ height: '850px', width: "100%" }}
        pageSettings={{
          backgroundColor: '#000000',
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: '#ecc982',
          textColor: '#ecc982'
        }}
        prefill={{
          customAnswers: {
            a5: bookingState?.selectedText || '',
            a6: bookingState?.selectedColor || '',
            a7: mount,
            a8: light,
          },
          date: new Date(Date.now() + 86400000)
        }}
      />
    </div>
  );
};

function isDefined<T>(value: T | undefined | null): value is T {
  return value !== undefined && value !== null;
}
export default GoogleCalendarScheduling;