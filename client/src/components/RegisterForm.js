import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import axios from "axios";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

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
  text-align: center;
  color: #767676;
  max-width: 220px;
  margin: 0 auto;
  margin-top: 30px;
  font-size: 32px;
`;
const RegisterFormBlock = styled.div`
  width: 700px;
  height: 768px;

  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

  margin-top: 30px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

const RowGroup = styled.div`
  font-family: Dotum, "돋움", Helvetica, sans-serif;
  font-size: 12px;
  min-width: 600px;
  max-width: 50%;
  margin: 0 auto;
`;

const Title = styled.h3`
  margin: 19px 0 8px;
  font-size: 14px;
  font-weight: 700;
`;

// (일정, 시간), (실력, 좋아하는 팀) 한 줄에 두개 정렬 시키기 위해
const SimilarFunction = styled.div`
  display: flex;
`;

// (실력 - 타이틀, 박스), (좋아하는 팀 - 타이틀, 박스)
const TitleAndBox = styled.div`
  display: block;
  & + & {
    margin-left: 20px;
  }
  width: 100%;
`;

const Box = styled.input`
  display: block;
  position: relative;
  width: 100%;
  height: 51px;
  border: solid 1px #dadada;
  padding: 10px 110px 10px 14px;
  box-sizing: border-box;
  /* margin-right: 20px; */
  &:disabled {
    background: #ffffff;
  }
  & + & {
    margin-left: 20px;
  }
`;

const TextMessage = styled.textarea`
  resize: none;
  display: block;
  position: relative;
  width: 100%;
  height: 30%;
  border: solid 1px #dadada;
  padding: 10px 110px 10px 14px;
  box-sizing: border-box;
  margin-right: 20px;
`;

const BtnBlock = styled.div`
  display: flex;
`;

const ClickBtn = styled.button`
  width: 70px;
  color: #eee;
  background: #000;
  border: 1px solid #000;
  position: absolute;
  left: 44%;
  bottom: 5%;
  transform: translate(-50%, 50%);
  text-align: center;
  /* float: left; */
  &:hover {
    opacity: 0.5;
    text-decoration: underline;
  }
  &:active {
    opacity: 1;
  }
`;

const DelBtn = styled.button`
  width: 70px;
  color: #000;
  background: #ffffff;
  border: 1px solid #000;
  position: absolute;
  left: 56%;
  bottom: 5%;
  transform: translate(-50%, 50%);
  text-align: center;
  /* float: right; */
  &:hover {
    opacity: 0.5;
    text-decoration: underline;
  }
  &:active {
    opacity: 1;
  }
`;

function RegisterForm({ title, click, userInfo, isAuthenticated }) {
  const [createMatchInfo, setCreateMatchInfo] = useState({
    region: "",
    region_Detail: "",
    sitename: "",
    matchdate: "",
    message: "",
    is_matched: "false",
    email: userInfo.email,
    user_id: userInfo.id,
  });

  const handleInputValue = (key) => (e) => {
    setCreateMatchInfo({ ...createMatchInfo, [key]: e.target.value });
  };

  const RegisterPost = () => {
    console.log(createMatchInfo);
    axios
      .post(`${process.env.REACT_APP_API_URL}/matches/new`, createMatchInfo)
      .then((res) => {
        alert(JSON.stringify(res.data.message));
        isAuthenticated();
      });
  };

  // TODO: Date, time을 합쳐서 matchdate로 만들어야 함
  return (
    <Section>
      <Inner>
        <GlobalStyle></GlobalStyle>
        <Subject>{title}</Subject>
        <RegisterFormBlock>
          <RowGroup>
            <Title>닉네임</Title>
            <Box
              type="text"
              id="nickname"
              title="nickname"
              maxlength="10"
              class="int"
              value={userInfo.nickname}
              disabled
            ></Box>
            <Title>일정</Title>
            <Box
              type="datetime-local"
              onChange={handleInputValue("matchdate")}
            ></Box>

            <SimilarFunction>
              <TitleAndBox>
                <Title>지역</Title>
                <Box
                  type="text"
                  onChange={handleInputValue("region")}
                  placeholder="ex: 서울, 경기"
                ></Box>
              </TitleAndBox>
              <TitleAndBox>
                <Title>상세주소</Title>
                <Box
                  type="text"
                  onChange={handleInputValue("region_Detail")}
                  placeholder="ex: OO구 OO동"
                ></Box>
              </TitleAndBox>
            </SimilarFunction>
            <Title>장소명</Title>
            <Box
              type="text"
              onChange={handleInputValue("sitename")}
              placeholder="ex: OO운동장, OO공원"
            ></Box>

            <SimilarFunction>
              <TitleAndBox>
                <Title>실력</Title>
                <Box
                  type="text"
                  id="level"
                  value={userInfo.level}
                  disabled
                ></Box>
              </TitleAndBox>
              <TitleAndBox>
                <Title>좋아하는 팀</Title>
                <Box type="text" id="Team" value={userInfo.team} disabled></Box>
              </TitleAndBox>
            </SimilarFunction>
            <Title>내용</Title>
            <TextMessage
              autoCapitalize="false"
              placeholder="글 내용을 입력해주세요(인사, 준비물 등)"
              onChange={handleInputValue("message")}
            ></TextMessage>
            <BtnBlock>
              <ClickBtn onClick={RegisterPost}>{click}</ClickBtn>
              <DelBtn>취소</DelBtn>
            </BtnBlock>
          </RowGroup>
        </RegisterFormBlock>
      </Inner>
    </Section>
  );
}

export default RegisterForm;
