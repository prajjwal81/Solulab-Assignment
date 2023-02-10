import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Sidenav from "./Components/Sidenav";
import MiddleDiv from "./Components/middleDiv";
import RightDiv from "./Components/RightDiv";

function App() {
  return (
    <div>
      <Container
        style={{
          height: "100vh",
          maxWidth: "1800px",
          padding: "0",
        }}
      >
        <Row>
          <Col
            lg={1}
            style={{ height: "100vh", margin: "0 auto", padding: "0 auto" }}
          >
            <Sidenav />
          </Col>
          <Col lg={3}>
            <MiddleDiv />
          </Col>
          <Col lg={8}>
            <RightDiv />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
