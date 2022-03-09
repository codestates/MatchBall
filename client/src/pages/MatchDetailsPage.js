import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

const Section = styled.section`
  position: relative;
  min-height: 100%;
  font-family: NotoSansKR, sans-serif;
`;

const Inner = styled.div`
  max-width: 980px;
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;
`;

const Subject = styled.div`
  text-align: center;
  color: #767676;
  max-width: 220px;
  margin: 0 auto;
  margin-top: 30px;
  font-size: 32px;
`;

const MatchesBlock = styled.div`
  width: 900px;
  min-height: 100%;

  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: white;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

  margin-top: 30px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

const Box = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  border: solid 1px #dadada;
  padding: 10px 110px 10px 14px;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    background: #e6e6e6;
  }
`;
const FlexBox = styled.div`
  display: flex;
  margin-top: 5px;
`;
const Block = styled.div`
  position: relative;
  width: 112px;
  /* border: 1px solid black; */
  & + & {
    margin-left: 10px;
  }
`;

const RiBlock = styled.div`
  position: relative;
  width: 90px;
  /* border: 1px solid black; */
  left: 50%;
  font-weight: 700;
`;

const Region = styled.span`
  /* position: absolute; */
  font-size: 20px;
  font-weight: 700;
  width: 10%;
  height: 22px;
  margin-bottom: 15px;
  /* border: 1px solid #000; */
`;
const Span = styled.span`
  display: block;
  width: 120px;
  height: 22px;
  align-items: left;
  font-size: 19px;

  & + & {
    margin-top: 10px;
  }
`;

const ClickBtn = styled.button`
  display: block;
  width: 100px;
  height: 30px;
  font-size: 15px;
  background: #000;
  color: #ffffff;
  border: 1px solid #000;
  cursor: pointer;
  &:hover {
    background: #ffffff;
    text-decoration: underline;
    color: #000;
  }
  &:active {
    background: #000;
    text-decoration: none;
    color: #ffffff;
  }
`;

function MatchDetailsPage(props) {
  return (
    <>
      <Nav />
      <Section>
        <Subject>신청내역</Subject>
        <GlobalStyle />

        <Inner>
          <MatchesBlock>
            <Box>
              <Region>용산</Region>
              <FlexBox>
                <Block>
                  <Span>22.03.08</Span>
                  <Span>13:30</Span>
                </Block>
                <Block>
                  <Span>용산공원</Span>
                  <Span>초급자</Span>
                </Block>
                <Block>
                  <Span>KIA 타이거즈</Span>
                  <Span>010-xxxx-xxxx</Span>
                </Block>
                <RiBlock>
                  <ClickBtn>신청취소</ClickBtn>
                </RiBlock>
              </FlexBox>
            </Box>
            <Box>
              <Region>용산</Region>
              <FlexBox>
                <Block>
                  <Span>22.03.08</Span>
                  <Span>13:30</Span>
                </Block>
                <Block>
                  <Span>용산공원</Span>
                  <Span>초급자</Span>
                </Block>
                <Block>
                  <Span>KIA 타이거즈</Span>
                </Block>
                <RiBlock>
                  <ClickBtn>취소하기</ClickBtn>
                </RiBlock>
              </FlexBox>
            </Box>
            <Box>
              <Region>용산</Region>
              <FlexBox>
                <Block>
                  <Span>22.03.08</Span>
                  <Span>13:30</Span>
                </Block>
                <Block>
                  <Span>용산공원</Span>
                  <Span>초급자</Span>
                </Block>
                <Block>
                  <Span>KIA 타이거즈</Span>
                </Block>
                <RiBlock>
                  <ClickBtn>취소하기</ClickBtn>
                </RiBlock>
              </FlexBox>
            </Box>
            <Box>
              <Region>용산</Region>
              <FlexBox>
                <Block>
                  <Span>22.03.08</Span>
                  <Span>13:30</Span>
                </Block>
                <Block>
                  <Span>용산공원</Span>
                  <Span>초급자</Span>
                </Block>
                <Block>
                  <Span>KIA 타이거즈</Span>
                </Block>
                <RiBlock>
                  <ClickBtn>취소하기</ClickBtn>
                </RiBlock>
              </FlexBox>
            </Box>
            <Box>
              <Region>용산</Region>
              <FlexBox>
                <Block>
                  <Span>22.03.08</Span>
                  <Span>13:30</Span>
                </Block>
                <Block>
                  <Span>용산공원</Span>
                  <Span>초급자</Span>
                </Block>
                <Block>
                  <Span>KIA 타이거즈</Span>
                </Block>
                <RiBlock>
                  <ClickBtn>취소하기</ClickBtn>
                </RiBlock>
              </FlexBox>
            </Box>
          </MatchesBlock>
        </Inner>
      </Section>
      <Footer />
    </>
  );
}

export default MatchDetailsPage;
