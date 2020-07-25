import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <>
      <div className="Logo">
        <img src="./y-logo-white.png" alt="Y Logo" />
      </div>
      <div className="Header" style={HeaderBg}>
        <h1>Hello! I'm <span>Muhammad Ramadhan</span></h1>
        <h2>Consult, Design, and <span>Develop Websites</span></h2>
        <div className="h3"><span>Have something great in mind?</span> <span>Feel free to contact me.</span> <br /><span>I'll help you make it happen.</span></div>
        <button>LET'S MAKE CONTACT</button>
      </div>
    </>
  )
}

const HeaderBg = {
  backgroundImage: 'url(./work-desk__dustin-lee.jpg)',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  boxShadow: 'inset 0 0 0 2000px rgba(0, 74, 177, 0.5)',
};