// src/App.js
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './NavbarStyles.css';
// import Navigation from './components/Navigation';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';


function CustomNavigationBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="d-flex justify-content-between">
        <Container className="custom-nav-left">
          <Navbar.Brand href="/home">Max Beales</Navbar.Brand>
          <Nav className="me-auto">
           {/* <Nav.Link href="/home"></Nav.Link> */}
            <Nav.Link href="/about">About me</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
        <div className="mr-3">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="icon-margin">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="icon-margin">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </Navbar>
      <br />
    </>
  );
}





function App() {
  return (
      <Router>
          <div className="App">
              <CustomNavigationBar />
              <Routes>
                <Route path="/home" element={<Home />} />

                  <Route path="/about" element={<AboutMe />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
              </Routes>
          </div>
      </Router>
  );
}



// export default ColorSchemesExample;
export default App;

