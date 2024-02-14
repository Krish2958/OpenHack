import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Home, Schedule, ContactUs, FAQ, Sponsors, Registration, Rules } from './pages';
import { CustomNavbar } from './components/CustomNavbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import { inject } from '@vercel/analytics';

const App = () => {
  inject();
  return (
      <>
        <Router>
          <CustomNavbar />
          <Container>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/registration" element={<Registration />} />
          </Routes>
          </Container>
        </Router>
        <Footer />
      </>
  );
};

export default App;
