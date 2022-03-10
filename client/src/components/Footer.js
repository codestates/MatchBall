import React from "react";
import styled from "styled-components";

const Bottom = styled.footer`
  position: absolute;
  height: 60px;
  width: 100%;
  padding: 0 25px;
  line-height: 60px;
  color: #8a8c8f;
  border-top: 1px solid #dee5e7;
  background-color: #f2f2f2;
`;

const Text = styled.div`
  position: absolute;
  right: 50%;
`;

function Footer(props) {
  return (
    <Bottom>
      <Text>MatchBall</Text>
    </Bottom>
  );
}

export default Footer;
