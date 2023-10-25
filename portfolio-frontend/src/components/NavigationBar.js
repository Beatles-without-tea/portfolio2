import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CustomNavigationBar() {
    return (
      <>
        <Navbar bg="dark" data-bs-theme="dark" className="d-flex justify-content-between">
          <Container className="custom-nav-left">
            {/* <Navbar.Brand href="/home">Max Beales</Navbar.Brand> */}
            <Nav className="me-auto">
             {/* <Nav.Link href="/home"></Nav.Link> */}
             <Nav.Link href="/home">Home</Nav.Link>

              {/* <Nav.Link href="/about">About me</Nav.Link> */}
              <Nav.Link href="/projects">Projects</Nav.Link>
              {/* <Nav.Link href="/contact">Contact</Nav.Link> */}
            </Nav>
          </Container>
          <div className="mr-3">
            <a href="https://www.linkedin.com/in/max-beales/" target="_blank" rel="noopener noreferrer" className="icon-margin">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://github.com/Beatles-without-tea" target="_blank" rel="noopener noreferrer" className="icon-margin">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
        </Navbar>
        
      </>
    );
  }
  
export default CustomNavigationBar;
