import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

const ResisterFormBlock = styled.div`
  width: 700px;
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
  & + & {
    margin-left: 20px;
  }
`;

const TextMessage = styled.textarea`
  resize: none;
  display: block;
  position: relative;
  width: 100%;
  height: 60%;
  border: solid 1px #dadada;
  padding: 10px 110px 10px 14px;
  box-sizing: border-box;
  margin-right: 20px;
`;

function ResisterForm(props) {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <ResisterFormBlock>
        <RowGroup>
          <Title>닉네임</Title>
          <Box
            type="text"
            id="nickname"
            title="nickname"
            maxlength="10"
            class="int"
            placeholder="닉네임"
            disabled="true"
          ></Box>
          <Title>일정</Title>
          <SimilarFunction>
            <Box type="date" name="startday"></Box>
            <Box type="time" name="birthtime"></Box>
          </SimilarFunction>
          <Title>지역</Title>
          <Box></Box>

          <SimilarFunction>
            <TitleAndBox>
              <Title>실력</Title>
              <Box type="text" id="level" disabled="true"></Box>
            </TitleAndBox>
            <TitleAndBox>
              <Title>좋아하는 팀</Title>
              <Box type="text" id="Team" disabled="true"></Box>
            </TitleAndBox>
          </SimilarFunction>
          <Title>내용</Title>
          <TextMessage
            autoCapitalize="false"
            placeholder="글 내용을 입력해주세요(인사, 준비물 등)"
          ></TextMessage>
        </RowGroup>
      </ResisterFormBlock>
      ;
    </>
  );
}

export default ResisterForm;
