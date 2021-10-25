import * as React from 'react';

import {
  Col,
  Container,
  Row,
} from 'react-bootstrap';

export const BootstrapLayout = ({ props }) => {
  return (
    <Container>
      <Row>
        <Col md>
          <div style={{ borderStyle: "solid" }}>First col</div>
        </Col>
        <Col md>
          <div style={{ borderStyle: "solid" }}>Second col</div>
        </Col>
        <Col md>
          <div style={{ borderStyle: "solid" }}>Third col</div>
        </Col>
        <Col md>
          <div style={{ borderStyle: "solid" }}>Fourth col</div>
        </Col>
        <Col md>
          <div style={{ borderStyle: "solid" }}>Fourth col</div>
        </Col>
        <Col md>
          <div style={{ borderStyle: "solid" }}>Fourth col</div>
        </Col>
        <Col md>
          <div style={{ borderStyle: "solid" }}>Fourth col</div>
        </Col>
      </Row>
    </Container>
  )
}
