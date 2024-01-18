import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Assets } from './assets';
import { ContactUs } from './pages/ContactUs';

const App = () => {
  return (
      <Container>
        <div className='coming-soon'>
          <video autoPlay loop muted className='coming-soon__brand-logo'>
            <source src={Assets.OpenHackWebM} type="video/webm" />
            <source src={Assets.OpenHackMp4} type="video/mp4" />
            Oops! The OpenHack 2024 logo video couldn't be loaded. Stay tuned for exciting updates!
            </video>
        <h1 className='coming-soon__year'>2024</h1>
        <h3 className='coming-soon__text'>Coming Soon</h3>
        </div>
      </Container>
  );
};

export default App;
