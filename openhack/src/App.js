import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Home, Schedule, ContactUs, FAQ, Sponsors, Registration } from './pages';
import { CustomNavbar } from './components/CustomNavbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer';

const App = () => {
  return (
      <>
        <Router>
          <CustomNavbar />
          <Container>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/contact-us" element={<ContactUs />} />
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
