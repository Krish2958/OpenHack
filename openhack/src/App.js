import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import  Home  from './pages/Home';
import { CustomNavbar } from './components/CustomNavbar';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
      <Container>
        <Router>
          <CustomNavbar />
        </Router>
        <Home />
      </Container>
  );
};

export default App;
