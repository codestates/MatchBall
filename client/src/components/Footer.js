import React from "react";
import styled from "styled-components";

const Bottom = styled.footer`
  position: relative;
  background: #ffffff;
`;

const Inner = styled.div`
  padding: 50px 0;
  border-top: 1px solid #eee;
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
      <Inner>
        <Text>2022 MatchBall</Text>
      </Inner>
    </Bottom>
  );
}

export default Footer;
