import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import {Schedule, ContactUs, Rules, Sponsor, FAQ, Registration } from './pages';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Logo } from './assets';
import CustomNavbar from './components/CustomNavbar';

const App = () => {
  return (
    <Container>
    <Router>
      
        <Routes>
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/rules" element={<Rules />} />
        </Routes>
    </Router>
    </Container>
  );
};

export default App;
