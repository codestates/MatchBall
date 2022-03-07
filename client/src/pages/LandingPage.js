import React from "react";
import styled from "styled-components";
import imgA from "../img/baseball.jpeg";
import { Link } from "react-router-dom";

const Visul = styled.section`
  height: 100vh;
  background-image: url(${imgA});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  ::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
  }
`;

const Inner = styled.div`
  max-width: 980px;
  margin: 0 auto;
  padding: 160px 0;
`;

const SummaryTitle = styled.div`
  color: #fff;
  font-size: 54px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.25), 0 1px, 25px rgba(0, 0, 0, 0.75);
`;

const Button = styled.button`
  color: #fff;
  background-color: rgba(0, 0, 0, 0);
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
  position: absolute;
  cursor: pointer;
  top: 50%;
  left: 50%;
  font-size: 40px;
  transform: translate(-50%, 50%);
  border: 0;
  outline: 0;

  /* margin: 0 auto; */
`;

function LandingPage() {
  return (
    <div>
      <Visul>
        <Inner>
          <SummaryTitle>나랑 같이 캐치볼 할래?</SummaryTitle>
          <Link to="/signin">
            <Button>시작하기</Button>
          </Link>
        </Inner>
      </Visul>
    </div>
  );
}

export default LandingPage;
