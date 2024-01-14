import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import {Schedule, ContactUs, Rules, Sponsor, FAQ, Registration } from './pages';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Logo } from './assets';

const App = () => {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/rules" element={<Rules />} />
        </Routes>
        <div className='coming-soon'>
        <img alt='OpenHack' className='coming-soon__brand-logo' src={Logo.OpenHack}></img>
        <h1 className='coming-soon__year'>2024</h1>
        <h3 className='coming-soon__text'>Coming Soon</h3>
        </div>
      </Container>
    </Router>
  );
};

export default App;
