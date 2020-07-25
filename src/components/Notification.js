import React, { useState } from 'react';
import './Notification.css';

export default function Notification() {
  const [hideNotif, setHideNotif] = useState(false);

  return (
    <div className={"Notification" + (hideNotif ? " NotifHidden" : "")}>
      <div className="NotifBox">
        <p>
          By accessing and using this website, you acknowledge that you have read and understand our
          {/* eslint-disable-next-line */}
          &nbsp;<a href="">Cookie Policy</a>, <a href="">Privacy Policy</a>, and our <a href="">Terms of Service</a>.
        </p>
        <button onClick={() => setHideNotif(true)}>
          Got it
        </button>
      </div>
    </div>
  )
}
