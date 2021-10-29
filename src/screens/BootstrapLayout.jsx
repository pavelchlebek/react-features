import * as React from 'react';

import {
  Col,
  Container,
  Row,
} from 'react-bootstrap';

export const BootstrapLayout = () => {
  // const theme = React.useContext(ThemeContext)
  return (
    <>
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
      {/* <div>{theme.darkTheme ? "Dark Theme" : "Light Theme"}</div>
      <button onClick={() => theme.toggleTheme()}>Toggle Theme</button> */}
    </>
  )
}
