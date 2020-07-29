import React from 'react';
import './Notification.css';

export default function Notification() {
  const handleHideNotif = () => {
    document.querySelector('.Notification').classList.toggle('NotifSlideUp');
  };
  
  return (
    <div className="Notification">
      <div className="NotifBox">
        <p>
          By accessing and using this website, you acknowledge that you have read and understand our
          {/* eslint-disable-next-line */}
          &nbsp;<a href="">Cookie Policy</a>, <a href="">Privacy Policy</a>, and our <a href="">Terms of Service</a>.
        </p>
        <button onClick={() => handleHideNotif()}>
          Got it
        </button>
      </div>
    </div>
  )
}
