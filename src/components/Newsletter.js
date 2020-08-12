import React, { useEffect } from 'react';
import useScrollListener from '../hooks/useScrollListener';
import './Newsletter.css';

export default function Newsletter() {
  const { scrollPos, docHeight } = useScrollListener();

  useEffect(() => {
    // if scroll position reaches 1/3 page total height and
    // if the time limit in localstorage exceeds current time
    // newsletter box will show up again
    if (
      scrollPos + Math.round(window.innerHeight / 2) >= Math.round(docHeight / 3) &&
      ((!localStorage.hideNewsUntil || new Date(localStorage.hideNewsUntil)) < new Date())
    ) {
      localStorage.removeItem('hideNewsUntil');
      document.querySelector('.Newsletter').classList.remove('NewsSlideDown');
    }
  }, [scrollPos, docHeight]);

  useEffect(() => {
    document.querySelector('.Newsletter').classList.add('NewsSlideDown');
  }, [])

  const handleHideNews = () => {
    // for hiding newsletter box when closed and
    // adding 30-minute time limit until newsletter box shows up again
    const now = new Date();
    const time = now.getTime();
    const expireTime = time + (1000 * 60 * 10);
    now.setTime(expireTime);
    localStorage.setItem('hideNewsUntil', now);
    document.querySelector('.Newsletter').classList.add('NewsSlideDown');
  };
  
  return (
    <div className="NewsContainer">
      <div className="Newsletter NewsSlideDown">
        <button className="NewsClose" onClick={() => handleHideNews()}>
          &times;
        </button>
        <h2>
          Get latest updates in web technologies
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
