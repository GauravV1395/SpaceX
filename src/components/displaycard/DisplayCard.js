import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1em;
`;

const Primary = styled.div`
  max-width: 650px;
  width: 630px;
  margin: 0 auto;
  font-family: "Sen", sans-serif;
`;

const Block = styled.div`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 20px;
  border: 2px solid darkgray;
  margin: 0 1em;
  padding: 20px;
  margin-bottom: 3vh;
  margin-top: 1vh;
  transition: 0.5s all ease-out;
  &:hover {
    border: 2px solid #4caf50;
  }
`;

const DisplayCard = (props) => {
  return (
    <Wrap>
      <Primary>
        <Block>{props.children}</Block>
      </Primary>
    </Wrap>
  );
};

export default DisplayCard;
