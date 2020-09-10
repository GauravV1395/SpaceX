import React from "react";
import { Jumbotron, Container } from "reactstrap";

const MainHeader = (props) => {
  return (
    <div style={props.style} className={props.className}>
      <Jumbotron fluid>
        <Container fluid>
          <h1
            className="display-3"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {props.text}
          </h1>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default MainHeader;
