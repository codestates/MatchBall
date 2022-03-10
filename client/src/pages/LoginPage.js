import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const Subject = styled.div`
  position: absolute;
  top: auto;
  left: 50%;
  transform: translate(-50%, 50%);
  color: #767676;
  margin-top: 30px;
  font-size: 32px;
`;

const TodoTemplateBlock = styled.div`
  width: 512px;
  height: 712px;

  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: white;
  border-radius: 16px;
  /* box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2); */

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

  margin-top: 96px;
  margin-bottom: 42px;
  display: flex;
  flex-direction: column;
`;

const RowGroup = styled.div`
  font-family: Dotum, "돋움", Helvetica, sans-serif;
  font-size: 12px;
  min-width: 220px;
  max-width: 50%;
  margin: 0 auto;
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

const LoginBtn = styled.button`
  display: block;
  background: #000;
  color: #eee;
  width: 100%;
  height: 51px;
  margin: 19px 0 8px;
  &:hover {
    background: #ffffff;
    text-decoration: underline;
    color: #000;
  }
`;

const JoinBtn = styled.button`
  display: block;
  background: #ffffff;
  border: 1px solid #000;
  width: 100%;
  height: 51px;
  margin: 19px 0 8px;
  text-decoration: none;
  &:hover {
    background: #aaa;
    text-decoration: underline;
  }
`;

function LoginPage({
  title,
  handleResponseSuccess,
  setUserAccessToken,
  setUserInfo,
}) {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  const handleLogin = () => {
    const { email, password } = loginInfo;
    if (!email || !password) {
      setErrorMessage("이메일과 비밀번호를 입력하세요");
    } else {
      axios
        .post(`${process.env.REACT_APP_API_URL}/users/signin`, {
          email,
          password,
        })
        .then((res) => {
          if (res.data.message !== "ok") {
            setErrorMessage("계정 정보가 일치하지 않습니다.");
            return false;
          } else {
            setUserAccessToken(res.data.data.accessToken);
            axios
              .post(
                `${process.env.REACT_APP_API_URL}/users/auth`,
                {
                  accessToken: res.data.data.accessToken,
                },
                {
                  withCredentials: true,
                }
              )
              .then((res) => {
                if (res.data.message !== "ok") {
                  setErrorMessage(
                    "access token이 만료되어 불러올 수 없습니다."
                  );
                  return false;
                } else {
                  setUserInfo(res.data.data);
                  localStorage.setItem(
                    "nickname",
                    res.data.data.userInfo.nickname
                  );
                }
              });
          }
          setErrorMessage("");
          handleResponseSuccess();
        });
    }
  };

  return (
    <>
      <Subject>{title}</Subject>
      <TodoTemplateBlock>
        <RowGroup>
          <Title>이메일</Title>
          <Box
            type="email"
            id="email"
            title="email"
            maxlength="30"
            class="int"
            placeholder="이메일"
            onChange={handleInputValue("email")}
          ></Box>
          <Title>비밀번호</Title>
          <Box
            type="password"
            id="password"
            title="password"
            maxlength="20"
            class="int"
            placeholder="비밀번호"
            onChange={handleInputValue("password")}
          ></Box>

          <div className="alert-box">{errorMessage}</div>

          <LoginBtn onClick={handleLogin}>SIGN IN</LoginBtn>

          <Link to="/signup">
            <JoinBtn>JOIN</JoinBtn>
          </Link>
        </RowGroup>
      </TodoTemplateBlock>
    </>
  );
}

export default LoginPage;
