import React from 'react';
import './Newsletter.css';

export default function Newsletter({ hideNews, setHideNews, ...props }) {
  return (
    <div className="NewsContainer">
      <div className={"Newsletter" + (hideNews ? " NewsHidden" : "")}>
        <button className="NewsClose" onClick={() => setHideNews(true)}>
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
