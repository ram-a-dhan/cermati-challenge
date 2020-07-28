import React from 'react';
import './Newsletter.css';

export default function Newsletter({ hideNews, setHideNews, ...props }) {
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
