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
      <CustomNavbar />
      <Container>
        <Routes>
          <Route path="/schedule" component={Schedule} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/sponsor" component={Sponsor} />
          <Route path="/registration" component={Registration} />
          <Route path="/faq" component={FAQ} />
          <Route path="/rules" component={Rules} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
