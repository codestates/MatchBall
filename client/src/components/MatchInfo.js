import React from "react";
import styled, { createGlobalStyle } from "styled-components";

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
  left: 55%;
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
  width: 110px;
  height: 22px;
  align-items: left;
  font-size: 19px;

  & + & {
    margin-top: 10px;
  }
`;

export default function MatchInfo({ match }) {
  let recruit = match.is_matched === false ? "모집중" : "모집완료";
  return (
    <Section>
      <GlobalStyle />
      <Inner>
        <MatchesBlock>
          <Box>
            <Region>{match.region}</Region>
            <FlexBox>
              <Block>
                <Span>{match.matchdate}</Span>
                <Span>{match.matchdate}</Span>
              </Block>
              <Block>
                <Span>{match.sitename}</Span>
                <Span>{match.level}</Span>
              </Block>
              <Block>
                <Span>{match.team}</Span>
              </Block>
              <RiBlock>
                <Span>{recruit}</Span>
              </RiBlock>
            </FlexBox>
          </Box>
        </MatchesBlock>
      </Inner>
    </Section>
  );
}
