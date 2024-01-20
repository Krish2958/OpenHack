import React from 'react';
import './Timeline.css';

const Timeline = () => {
  return (
    <div className="timeline">
      <div className="container left-container">
        <div className="text-box">
          <h2>Pre-Registeration-Time</h2>
          <small>9:00 AM 24/02/2024</small>
          <p>Hello World</p>
          <span className="left-container-arrow"></span>
        </div>
      </div>
      <div className="container right-container">
        <div className="text-box">
          <h2>Orientation</h2>
          <small>9:30-11:30 AM 24/02/2024</small>
          <p>Hello World</p>
          <span className="right-container-arrow"></span>
        </div>
      </div>
      <div className="container left-container">
        <div className="text-box">
          <h2>Coding session #1</h2>
          <small>11:30 - 2:00 24/02/2024</small>
          <p>Hello World</p>
          <span className="left-container-arrow"></span>
        </div>
      </div>
      <div className="container right-container">
        <div className="text-box">
          <h2>Registeration</h2>
          <small>9:15 18/02/2024</small>
          <p>Hello World</p>
          <span className="right-container-arrow"></span>
        </div>
      </div>
      <div className="container left-container">
        <div className="text-box">
          <h2>Registeration</h2>
          <small>9:15 18/02/2024</small>
          <p>Hello World</p>
          <span className="left-container-arrow"></span>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
