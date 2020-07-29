import React, { useState, useEffect } from 'react';
import './Newsletter.css';

export default function Newsletter({ hideNews, setHideNews, ...props }) {
  const [scrollPos, setScrollPos] = useState(0);
  const [docHeight, setDocHeight] = useState(0);

  useEffect(() => {
    const handleDocHeight = () => {
      setDocHeight(getDocHeight);
    };
    window.addEventListener('load', handleDocHeight);
    window.addEventListener('scroll', handleDocHeight);
    window.addEventListener('resize', handleDocHeight);

    const handleScrollPos = () => {
      setScrollPos(Math.round(window.pageYOffset));
    };
    window.addEventListener('load', handleScrollPos);
    window.addEventListener('scroll', handleScrollPos);
    window.addEventListener('resize', handleScrollPos);
    return () => {
      window.removeEventListener('load', handleDocHeight);
      window.removeEventListener('scroll', handleDocHeight);
      window.removeEventListener('resize', handleDocHeight);
      window.removeEventListener('load', handleScrollPos);
      window.removeEventListener('scroll', handleScrollPos);
      window.removeEventListener('resize', handleScrollPos);
    }
  }, [scrollPos, docHeight]);

  useEffect(() => {
    if (scrollPos + Math.round(window.innerHeight / 2) >= Math.round(docHeight / 3)) {
      if (!localStorage.hideNewsUntil || new Date(localStorage.hideNewsUntil) < new Date()) {
        localStorage.removeItem('hideNewsUntil');
        document.querySelector('.Newsletter').classList.remove('NewsSlideDown');
      }
    }
  }, [scrollPos, docHeight]);

  useEffect(() => {
    document.querySelector('.Newsletter').classList.add('NewsSlideDown');
  }, [])

  const getDocHeight = () => {
    setDocHeight(Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    ))
  }

  const handleHideNews = () => {
    const now = new Date();
    const time = now.getTime();
    const expireTime = time + (1000 * 60 * 10);
    now.setTime(expireTime);
    // console.log(now);
    // document.cookie = `hideNewsUntil=${now};expires=${now.toString()};path=/;SameSite=none;Secure`;
    // console.log(document.cookie);
    localStorage.setItem('hideNewsUntil', now);
    // console.log(new Date(localStorage.hideNewsUntil));
    document.querySelector('.Newsletter').classList.add('NewsSlideDown');
  };
  
  return (
    <div className="NewsContainer">
      {/* <div className={"Newsletter" + (hideNews ? " NewsHidden" : "")}> */}
      <div className="Newsletter NewsSlideDown">
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
