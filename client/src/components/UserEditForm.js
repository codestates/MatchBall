import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import UserInfoEditPage from "../pages/UserInfoEditPage";

const Section = styled.section`
  position: relative;
  /* background: red; */
  /* min-height: 100%; */
`;

const Inner = styled.div`
  max-width: 980px;
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;
  /* background: blue; */
`;

const Subject = styled.div`
  /* position: absolute;
  top: 100px;
  left: 50%; */
  /* left: 50%;
  transform: translate(-50%, 50%); */
  /* transform: translate(50%, 50%); */
  text-align: center;
  color: #767676;
  max-width: 220px;
  margin: 0 auto;
  margin-top: 30px;
  font-size: 32px;
`;

const TodoTemplateBlock = styled.div`
  width: 512px;
  height: 768px;

  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

  margin-top: 30px;
  margin-bottom: 42px;
  display: flex;
  flex-direction: column;
  min-height: 100%;
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
  &:disabled {
    background: #ffffff;
  }
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
  &:hover {
    opacity: 0.5;
    text-decoration: underline;
  }
  &:active {
    opacity: 1;
  }
`;

function UserEditForm({ disabled, userInfo, setUserInfo }) {
  const [signInfo, setSignInfo] = useState({
    password: "",
    nickname: "",
    mobile: "",
    level: "",
    team: "",
    user_id: userInfo.id,
  });

  const [pwdCheckText, setPwdCheckText] = useState("");
  const [pwdCheckConfirmText, setPwdCheckConfirmText] = useState("");

  const handleInputValue = (key) => (e) => {
    setSignInfo({ ...signInfo, [key]: e.target.value });
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
    axios
      .patch(`${process.env.REACT_APP_API_URL}/mypage/edit`, signInfo)
      .then((res) => {
        alert(JSON.stringify(res.data.message));
        setUserInfo({
          ...userInfo,
          level: signInfo.level,
          mobile: signInfo.mobile,
          nickname: signInfo.nickname,
          team: signInfo.team,
        });
      });
  };

  return (
    <Section>
      <Inner>
        <Subject>회원 정보 수정</Subject>
        <TodoTemplateBlock>
          <RowGroup>
            <Title>이메일</Title>
            {disabled ? (
              <Box
                type="email"
                id="email"
                title="email"
                maxlength="30"
                class="int"
                value={userInfo.email}
                disabled
              ></Box>
            ) : (
              <Box
                type="email"
                id="email"
                title="email"
                maxlength="30"
                class="int"
                placeholder="이메일"
              ></Box>
            )}
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
              id="password"
              title="password"
              maxlength="20"
              class="int"
              placeholder="비밀번호확인"
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
                <Opt selected="true">없음</Opt>
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
            <Link to="/signin">
              <ClickBtn onClick={signInfoPost}>수정하기</ClickBtn>
            </Link>
          </RowGroup>
        </TodoTemplateBlock>
      </Inner>
    </Section>
  );
}

export default UserEditForm;
