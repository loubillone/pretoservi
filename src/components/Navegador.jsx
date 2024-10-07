import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../css/navegador.css";
import logoPetro from "../assets/img/home/logoPetro.png";
import { Link, NavLink } from "react-router-dom";

const Navegador = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded); // Cambia el estado del menú
  const handleLinkClick = () => setExpanded(false); // Cierra el menú al hacer clic en un enlace

  return (
    <div className="sticky-top">
      <Navbar
        expanded={expanded}
        expand="lg"
        className="bg-body-tertiary"
        sticky="top"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <div className="container-img-home">
              <img src={logoPetro} alt="logo petroservi" className="img-nav" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleToggle}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto nav-container-items">
              <Nav.Link
                as={NavLink}
                to="/"
                className="nav-items"
                onClick={handleLinkClick}
              >
                Inicio
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/sobreNosotros"
                className="nav-items"
                onClick={handleLinkClick}
              >
                Sobre Nosotros
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/empresasMineras"
                className="nav-items"
                onClick={handleLinkClick}
              >
                Empresas Mineras
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/galeria"
                className="nav-items"
                onClick={handleLinkClick}
              >
                Galeria
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/contacto"
                className="nav-items"
                onClick={handleLinkClick}
              >
                Contacto
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navegador;
