// HomePage.js
import React from "react";
import { useEffect, useState } from "react";
import "./Home.css";
import { Container, Row, Col } from "react-bootstrap";
import bg from "../images/bg.png";

function HomePage() {
  const CLIENT_ID = "1b2eb1337b2649deb46755b406fb1f87";
  const REDIRECT_URI = "http://localhost:3000/userAuth";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
      setToken(token);
    }
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  return (
    <div className="Home" style={{ position: "relative", overflow: "hidden" }}>
      <img
        src={bg}
        alt="Background"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.4,
        }}
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
                fontSize: "40px",
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

              {!token ? (
                <div style={{ marginTop: "15vh", textAlign: "center" }}>
                  <a
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
                    href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&show_dialog=true`}
                  >
                    CONNECT SPOTIFY
                  </a>
                </div>
              ) : (
                <button onClick={logout}>Log out</button>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
