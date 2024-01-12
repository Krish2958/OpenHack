import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { CustomNavbar } from './components';
import {Schedule, ContactUs, Rules, Sponsor, FAQ, Registration } from './pages';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <Router>
      <CustomNavbar className='custom-navbar' />
      <Container>
        <Routes>
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/rules" element={<Rules />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
