// src/App.js
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './NavbarStyles.css';


function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="d-flex justify-content-between">
        <Container className="d-flex">
          <Navbar.Brand href="#home">Max Beales</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">About me</Nav.Link>
            <Nav.Link href="#features">Projects</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Container>
        <div className="mr-3">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="mr-2">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
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
        [ <ColorSchemesExample />,
        <div><p>ddd</p></div>]
    );
}








// export default ColorSchemesExample;
export default App;

