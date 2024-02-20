import React from "react";
import { Navbar, NavItem } from "materialize-css";

const Navbar = () => {
  return (
    <Navbar brand="Tu nombre">
      <NavItem href="#">Inicio</NavItem>
      <NavItem href="#">Proyectos</NavItem>
      <NavItem href="#">Contacto</NavItem>
    </Navbar>
  );
};

export default Navbar;
