import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

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

const TemplateBlock = styled.div`
  width: 512px;
  height: 768px;

  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: white;
  border-radius: 16px;
  /* box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2); */

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

  margin-top: 30px;
  margin-bottom: 42px;
  display: flex;
  flex-direction: column;
  height: 335px;
  min-height: 100%;
`;

const RowGroup = styled.div`
  font-family: Dotum, "돋움", Helvetica, sans-serif;
  font-size: 12px;
  min-width: 220px;
  max-width: 50%;
  margin: 0 auto;
`;

const Box = styled.button`
  text-align: left;
  display: block;
  font-size: 14px;
  position: relative;
  width: 100%;
  height: 51px;
  border: solid 1px #dadada;
  padding: 10px 110px 10px 14px;
  box-sizing: border-box;
  background: #ffffff;
  &:hover {
    text-decoration: underline;
  }
  &:active {
    text-decoration: none;
  }
  & + & {
    margin-top: 20px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  & + & {
    margin-top: 20px;
  }
`;

const Div = styled.div`
  margin-top: 20px;
`;

function MyPage({ handleLogout, getMyText }) {
  return (
    <>
      <Section>
        <Inner>
          <Subject>마이페이지</Subject>
          <TemplateBlock>
            <StyledLink to="/mypage/edit">
              <Box>회원정보수정</Box>
            </StyledLink>
            <StyledLink to="/mypage/orders">
              <Box>신청내역</Box>
            </StyledLink>
            <StyledLink to="/mypage/matches">
              <Box onClick={getMyText}>작성한 글</Box>
            </StyledLink>
            <Div>
              <Box onClick={handleLogout}>로그아웃</Box>
            </Div>
            <Div>
              <Box>회원탈퇴</Box>
            </Div>
          </TemplateBlock>
        </Inner>
      </Section>
    </>
  );
}

export default MyPage;
