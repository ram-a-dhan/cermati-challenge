import React, { useState, useEffect } from 'react';
import './Newsletter.css';

export default function Newsletter({ hideNews, setHideNews, ...props }) {
  const [scrollPos, setScrollPos] = useState(0);
  const [docHeight, setDocHeight] = useState(0);

  useEffect(() => {
    const handleDocHeight = (event) => {
      setDocHeight(getDocHeight);
    };
    window.addEventListener('load', handleDocHeight);

    const handleScrollPos = (event) => {
      // setScrollPos(event.target.documentElement.scrollTop);
      setScrollPos(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScrollPos);
    return () => {
      window.removeEventListener('load', handleDocHeight);
      window.removeEventListener('scroll', handleScrollPos);
    }
  }, [scrollPos, docHeight]);

  const getDocHeight = () => {
    setDocHeight(Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    ))
  }

  const handleHideNews = () => {
    document.querySelector('.Newsletter').classList.toggle('NewsSlideDown');
  };
  
  return (
    <div className="NewsContainer">
      {/* <div className={"Newsletter" + (hideNews ? " NewsHidden" : "")}> */}
      <div className="Newsletter">
        {/* <button className="NewsClose" onClick={() => setHideNews(true)}> */}
        <button className="NewsClose" onClick={() => handleHideNews()}>
          &times;
        </button>
        <h2>
          Get latest updates in web technologies {scrollPos}/{docHeight}
        </h2>
        <p>
          I write articles related to web technologies, such as design trends, 
          development tools, UI/UX case studies and reviews, and more. 
          Sign up to my newsletter to get them all.
        </p>
        <form className="NewsForm" onSubmit={(event) => event.preventDefault()}>
          <input type="text" placeholder="Email address" />
          <button type="submit">Count me in!</button>
        </form>
      </div>
    </div>
  )
}
