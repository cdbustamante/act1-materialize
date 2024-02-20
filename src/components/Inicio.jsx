import React from "react";
import { Row, Col, Card } from "materialize-css";

const Inicio = () => {
  return (
    <div>
      <Row>
        <Col s={12} m={6}>
          <Card>
            <div className="card-image">
              <img src="tu-imagen.jpg" alt="Tu nombre" />
            </div>
            <div className="card-content">
              <p>
                Hola, soy <strong>Tu nombre</strong>. Soy un desarrollador web con
                experiencia en... (describir tus habilidades).
              </p>
            </div>
          </Card>
        </Col>
        <Col s={12} m={6}>
          <p>
            (Descripción de tu experiencia profesional y tus objetivos).
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Inicio;
