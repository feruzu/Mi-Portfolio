import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import { useState } from 'react';

export const NavBar = () => {

  const [expanded, setExpanded] = useState(false);

  
    return (
      <section id='nav-bar'>
        <Navbar expand="lg" className="bg-body-tertiary" expanded={expanded}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => setExpanded(false)} href="#inicio">Inicio</Nav.Link>
              <Nav.Link onClick={() => setExpanded(false)} href="#sobre-mi">Sobre mi</Nav.Link>
              <Nav.Link onClick={() => setExpanded(false)} href="#skills">Skills</Nav.Link>
              <Nav.Link onClick={() => setExpanded(false)} href="#proyectos">Proyectos</Nav.Link>
              <Nav.Link onClick={() => setExpanded(false)} href="#contacto">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </section>
    );
}