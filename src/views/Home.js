import React from 'react';
// import Notification from '../components/Notification';
import Header from '../components/Header';
import Highlights from '../components/Highlights';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="Home">
      {/* <Notification /> */}
      <Header />
      <Highlights />
      <Footer />
    </div>
  )
}
