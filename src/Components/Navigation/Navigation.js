import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import brand from '../../images/brand.png';


const Navigation = () => {
    const [shownavbar,setNavbar] = useState(false);

    const changeBackground = () =>{
        if(window.scrollY >= 40){
            setNavbar(true)
        }
        else{
            setNavbar(false);
        }
    }
    window.addEventListener('scroll',changeBackground);
  return (
    <div>
      <Navbar className={shownavbar ? 'active py-3' : 'py-3'} fixed="top" collapseOnSelect expand="lg" bg="" variant="dark">
        <Container>
          <Navbar.Brand as={HashLink} to="/home">
            <img
              alt=""
              src={brand}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            <strong>Anik</strong> Nath
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto text-center">
              <Nav.Link className="text-white hoverMe" as={HashLink} to="/home">Home</Nav.Link>
              <Nav.Link className="text-white hoverMe" as={HashLink} to="/about">About</Nav.Link>
              <Nav.Link className="text-white hoverMe" as={HashLink} to="/projects">Projects</Nav.Link>
              <Nav.Link className="text-white hoverMe" as={HashLink} to="/contact">Contact</Nav.Link>
              <Nav.Link className="text-white hoverMe" as={HashLink} to="/blogs">Blogs</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </div>
  );
};

export default Navigation;
