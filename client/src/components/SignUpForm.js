import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { useState } from "react";
import { MdFormatListBulleted } from "react-icons/md";
import axios from "axios";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

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
  height: 768px;

  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

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

const Select = styled.select`
  display: block;
  position: relative;
  width: 100%;
  height: 51px;
  border: solid 1px #dadada;
  padding: 10px 110px 10px 14px;
  box-sizing: border-box;
`;

const OptGroup = styled.optgroup``;

const Opt = styled.option``;

const ClickBtn = styled.button`
  color: #eee;
  background: #000;
  border: 1px solid #000;
  position: absolute;
  left: 50%;
  bottom: 5%;
  transform: translate(-50%, 50%);
  text-align: center;
`;

function SignUpForm({ title }) {
  const [signInfo, setSignInfo] = useState({
    email: "",
    password: "",
    nickname: "",
    mobile: "",
    level: "",
    team: "",
  });

  const [emailCheckText, setEmailCheckText] = useState("");
  const [pwdCheckText, setPwdCheckText] = useState("");
  const [pwdCheckConfirmText, setPwdCheckConfirmText] = useState("");

  const post_ok = () => {
    if (
      !signInfo.email ||
      !signInfo.password ||
      !signInfo.nickname ||
      !signInfo.mobile ||
      !signInfo.level ||
      !signInfo.team
    ) {
      return false;
    }
    return true;
  };

  const handleInputValue = (key) => (e) => {
    setSignInfo({ ...signInfo, [key]: e.target.value });
  };

  const checkEmail = (e) => {
    let email = e.target.value;
    let expect_email = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

    if (expect_email.test(email) === false) {
      setEmailCheckText("이메일 형식이 올바르지 않습니다.");
      return false;
    }
    setEmailCheckText("올바른 형식입니다.");
    setSignInfo({ ...signInfo, email: e.target.value });
  };

  const checkPassword = (e) => {
    let pwd = e.target.value;

    if (pwd.length < 8 || pwd.length > 12) {
      setPwdCheckText("비밀번호를 8~12자 사이로 입력하세요.");
      return false;
    } else {
      setPwdCheckText("사용이 가능합니다.");
    }
    setSignInfo({ ...signInfo, password: pwd });
  };

  const isSamePwd = (e) => {
    if (signInfo.password !== "") {
      if (signInfo.password !== e.target.value) {
        setPwdCheckConfirmText("비밀번호가 서로 일치하지 않습니다.");
        return false;
      }
      setPwdCheckConfirmText("서로 일치합니다.");
    }
  };

  const signInfoPost = () => {
    // axios
    //   .post(`${process.env.REACT_APP_API_URL}/users/signup`, signInfo)
    //   .then((res) => {
    //   });
    console.log("hello");
  };

  const warning = () => {
    alert("입력 정보를 다시 확인하세요.");
  };

  return (
    <>
      <GlobalStyle></GlobalStyle>
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
            onChange={checkEmail}
          ></Box>
          <div>{emailCheckText}</div>
          <Title>비밀번호</Title>
          <Box
            type="password"
            id="password"
            title="password"
            maxlength="20"
            class="int"
            placeholder="비밀번호"
            onChange={checkPassword}
          ></Box>
          <div>{pwdCheckText}</div>
          <Title>비밀번호 확인</Title>
          <Box
            type="password"
            id="password_confirm"
            title="password_confirm"
            maxlength="20"
            class="int"
            placeholder="비밀번호 확인"
            onChange={isSamePwd}
          ></Box>
          <div>{pwdCheckConfirmText}</div>
          <Title>닉네임</Title>
          <Box
            type="text"
            id="nickname"
            title="nickname"
            maxlength="10"
            class="int"
            placeholder="닉네임"
            onChange={handleInputValue("nickname")}
          ></Box>
          <Title>mobile</Title>
          <Box
            type="tel"
            id="tel"
            title="tel"
            maxlength="10"
            class="int"
            placeholder="전화번호"
            onChange={handleInputValue("mobile")}
          ></Box>
          <Title>본인실력</Title>
          <Select onChange={handleInputValue("level")}>
            <OptGroup label="실력정도">
              <Opt defaultValue="---선택하세요---">---선택하세요---</Opt>
              <Opt>고급자</Opt>
              <Opt>중급자</Opt>
              <Opt>초급자</Opt>
              <Opt>입문자</Opt>
            </OptGroup>
          </Select>
          <Title>좋아하는 팀</Title>
          <Select onChange={handleInputValue("team")}>
            <OptGroup label="프로야구 팀">
              <Opt defaultValue="없음"></Opt>
              <Opt>KIA 타이거즈</Opt>
              <Opt>두산 베어스</Opt>
              <Opt>롯데 자이언츠</Opt>
              <Opt>삼성 라이온즈</Opt>
              <Opt>SSG 랜더스</Opt>
              <Opt>NC 다이노스</Opt>
              <Opt>LG 트윈스</Opt>
              <Opt>kt wiz</Opt>
              <Opt>키움 히어로즈</Opt>
              <Opt>한화 이글스</Opt>
            </OptGroup>
          </Select>

          {post_ok() ? (
            <Link to="/signin">
              (<ClickBtn onClick={signInfoPost}>회원가입</ClickBtn>)
            </Link>
          ) : (
            <ClickBtn onClick={warning}>회원가입</ClickBtn>
          )}
        </RowGroup>
      </TodoTemplateBlock>
    </>
  );
}

export default SignUpForm;
