import React from 'react';
import Clock from 'react-live-clock';

export default function Calendar() {
  return (
    <Clock format={"dddd, MMMM DD YYYY"} ticking={true} timezone={'	Etc/GMT+9'} />
  )
}