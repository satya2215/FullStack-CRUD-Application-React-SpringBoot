import React from 'react'
import NavBar from "react-bootstrap/Navbar"
import { Link } from 'react-router-dom';
import './Header.css'
import { Container, Nav } from 'react-bootstrap';

export default function Header() {
  return (
    <div>
     <NavBar >
        <Container>
          <NavBar.Brand to="/"><strong>Employee Management System</strong></NavBar.Brand>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" className="nav-link">Employees</Nav.Link>
            <Nav.Link as={Link} to="/employee" className="nav-link">Post Employee</Nav.Link>
          </Nav>
        </Container>

     </NavBar>

    </div>
  )
}
