import React from "react";
import styled from "styled-components";

const Bottom = styled.footer`
  background: #eee;
  position: relative;
  transform: translateY(-100%);
  padding: 15px 0;
  border-top: 1px solid black;
  display: flex;
`;

const Text = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  color: #767676;
`;

function Footer(props) {
  return (
    <Bottom>
      <Text>2022 MatchBall</Text>
    </Bottom>
  );
}

export default Footer;
