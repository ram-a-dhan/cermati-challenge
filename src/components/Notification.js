import React from 'react';
import './Notification.css';

export default function Notification() {
  return (
    <div className="Notification">
      <div className="NotifBox">
        <p>
          By accessing and using this website, 
          you acknowledge that you have read and 
          understand our Cookie Policy, Privacy Policy, 
          and our Terms of Service.
        </p>
        <button>
          Got it
        </button>
      </div>
    </div>
  )
}
