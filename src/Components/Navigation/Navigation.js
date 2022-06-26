import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import brand from '../../images/anik_logo.png';
import DarkMode from "../DarkMode/DarkMode";

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
    <div id="topBar">
      <Navbar className={shownavbar ? 'active py-2' : 'py-2'} fixed="top" collapseOnSelect expand="lg"  variant="dark">
        <Container>
          <Navbar.Brand as={HashLink} to="/home">
            <img
              alt="logo"
              src={brand}
              className="d-inline-block align-top"
            />
            {/* <strong className="fs-4">Anik Nath</strong> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto text-center mt-md-2">
              <Nav.Link className="text-white hoverMe fw-bold ms-lg-3" as={HashLink} to="/home">Home</Nav.Link>
              {/* <Nav.Link className="text-white hoverMe fw-bold ms-lg-3" as={HashLink} to="/about">About</Nav.Link> */}
              <Nav.Link className="text-white hoverMe fw-bold ms-lg-3" as={HashLink} to="/projects">Projects</Nav.Link>
              {/* <Nav.Link className="text-white hoverMe fw-bold ms-lg-3" as={HashLink} to="/review">Testimonials</Nav.Link> */}
              <Nav.Link className="text-white hoverMe fw-bold ms-lg-3" as={HashLink} to="/blogs">Blogs</Nav.Link>
              <Nav.Link className="text-white hoverMe fw-bold ms-lg-3" as={HashLink} to="/contact">Contact</Nav.Link>
              <DarkMode></DarkMode>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </div>
  );
};

export default Navigation;
