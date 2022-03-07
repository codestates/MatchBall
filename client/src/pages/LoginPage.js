import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TodoTemplateBlock = styled.div`
  width: 512px;
  height: 768px;

  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  margin: 19px 0 8px;
  font-size: 14px;
  font-weight: 700;
`;

const Box = styled.input`
  display: block;
  position: relative;
  width: 100%;
  height: 51px;
  border: solid 1px #dadada;
  padding: 10px 110px 10px 14px;
  box-sizing: border-box;
`;

const ClickBtn = styled.button``;

function LoginPage(props) {
  return (
    <>
      <TodoTemplateBlock>
        <Title>이메일</Title>
        <Box
          type="email"
          id="email"
          title="email"
          maxlength="30"
          class="int"
          placeholder="이메일"
        ></Box>
        <Title>비밀번호</Title>
        <Box
          type="password"
          id="password"
          title="password"
          maxlength="20"
          class="int"
          placeholder="비밀번호"
        ></Box>
        <Link to="/matches">
          <ClickBtn>로그인</ClickBtn>
        </Link>
        <Link to="/signup">
          <ClickBtn>회원가입</ClickBtn>
        </Link>
      </TodoTemplateBlock>
    </>
  );
}

export default LoginPage;
