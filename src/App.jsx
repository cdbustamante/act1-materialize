import React from "react";
import Navbar from "./components/Navbar";
import Inicio from "./components/Inicio";
import Proyectos from "./components/Proyectos";
import Contacto from "./components/Contacto";

function App() {
  return (
    <div>
      <Navbar />
      <Inicio />
      <Proyectos />
      <Contacto />
    </div>
  );
}

export default App;
