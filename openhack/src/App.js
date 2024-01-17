import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Logo } from './assets';
import * as Icon from 'react-bootstrap-icons';

const App = () => {
  return (
      <Container>
        <div className='coming-soon'>
          <video autoPlay loop muted className='coming-soon__brand-logo'>
            <source src={Logo.OpenHackWebM} type="video/webm" />
            <source src={Logo.OpenHackMp4} type="video/mp4" />
            Oops! The OpenHack 2024 logo video couldn't be loaded. Stay tuned for exciting updates!
            </video>
        <h1 className='coming-soon__year'>2024</h1>
        <h3 className='coming-soon__text'>Coming Soon</h3>
        <span className='coming-soon__icon-container'>
        <a href="mailto:info_openhack@mlvti.ac.in" target="_blank" rel="noopener noreferrer">
        <Icon.EnvelopeOpen className='coming-soon__icon' color='#8CE8E5' />
      </a>

      <a href="https://www.instagram.com/openhack2024/" target="_blank" rel="noopener noreferrer">
        <Icon.Instagram className='coming-soon__icon' color='#8CE8E5' />
      </a>
        </span>
        </div>
      </Container>
  );
};

export default App;
