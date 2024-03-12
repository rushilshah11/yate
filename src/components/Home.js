// HomePage.js
import React from "react";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";
import bg from "../images/bg.png";

function HomePage() {
  return (
    <div className="App" style={{ position: "relative", overflow: "hidden" }}>
      <img
        src={bg}
        alt="Background"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <Container
        style={{ position: "absolute", top: 40, left: 0, right: 0, bottom: 0 }}
      >
        <Row>
          <Col>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                color: "white",
                textTransform: "uppercase",
                fontFamily: "Druk Wide Bold",
                fontSize: "20px",
                marginTop: "17.5vh",
              }}
            >
              <span>
                All
                <span style={{ color: "#FF8F1C" }}> Natural</span>
                <br />
              </span>
              <span>
                All
                <span style={{ color: "#93C90F" }}> Night</span>
              </span>
              <div style={{ marginTop: "15vh", textAlign: "center" }}>
                <button
                  style={{
                    background: "#93C90F",
                    borderRadius: "5.38px",
                    padding: "10px 20px",
                    color: "black",
                    fontFamily: "Pitch Sans",
                    fontSize: "16px",
                    fontWeight: "500",
                    cursor: "pointer",
                    border: "none",
                    outline: "none",
                  }}
                >
                  CONNECT SPOTIFY
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
