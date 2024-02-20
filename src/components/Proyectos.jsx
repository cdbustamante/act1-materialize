import React from "react";
import { Row, Col, Card } from "materialize-css";

const Proyectos = () => {
  const proyectos = [
    {
      titulo: "Proyecto 1",
      descripcion: "Descripción del proyecto 1",
      imagen: "imagen-proyecto-1.jpg",
      enlace: "enlace-proyecto-1",
    },
    {
      titulo: "Proyecto 2",
      descripcion: "Descripción del proyecto 2",
      imagen: "imagen-proyecto-2.jpg",
      enlace: "enlace-proyecto-2",
    },
  ];

  return (
    <div>
      <h2>Mis proyectos</h2>
      <Row>
        {proyectos.map((proyecto) => (
          <Col s={12} m={4} key={proyecto.titulo}>
            <Card>
              <div className="card-image">
                <img src={proyecto.imagen} alt={proyecto.titulo} />
              </div>
              <div className="card-content">
                <span className="card-title">{proyecto.titulo}</span>
                <p>{proyecto.descripcion}</p>
              </div>
              <div className="card-action">
                <a href={proyecto.enlace}>Ver más</a>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Proyectos;
