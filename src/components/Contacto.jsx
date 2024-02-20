import React from "react";
import { Row, Col, Input, Button } from "materialize-css";

const Contacto = () => {
  return (
    <div>
      <h2>Contacto</h2>
      <Row>
        <Col s={12} m={6}>
          <Input label="Nombre" type="text" />
        </Col>
        <Col s={12} m={6}>
          <Input label="Correo electrónico" type="email" />
        </Col>
        <Col s={12}>
          <Input label="Mensaje" type="textarea" />
        </Col>
        <Col s={12}>
          <Button>Enviar mensaje</Button>
        </Col>
      </Row>
    </div>
  );
};

export default Contacto;
