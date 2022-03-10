import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";

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
  height: 712px;

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
  display: flex;
  position: relative;
  width: 160px;
  /* border: 1px solid black; */
  left: 45%;
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
  width: 110px;
  height: 22px;
  align-items: left;
  font-size: 19px;

  & + & {
    margin-top: 10px;
  }
`;

const EditBtn = styled.button`
  cursor: pointer;
  display: block;
  width: 100px;
  height: 30px;
  font-size: 15px;
  margin-right: 10px;
  background: #000;
  color: #ffffff;
  border: 1px solid #000;
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

const DelBtn = styled.button`
  cursor: pointer;
  display: block;
  width: 100px;
  height: 30px;
  font-size: 15px;
  background: #ffffff;
  color: #000;
  border: 1px solid #aaa;
  &:hover {
    background: #aaa;
    text-decoration: underline;
    color: #ffffff;
  }
  &:active {
    background: #ffffff;
    text-decoration: none;
    color: #000;
  }
`;

function RegisterDetailsPage({ myTextData }) {
  return (
    <>
      <Section>
        <Subject>작성내역</Subject>
        <GlobalStyle />
        <Inner>
          <MatchesBlock>
            {myTextData.map((match) => {
              return (
                <Box>
                  <Region>{match.region}</Region>
                  <FlexBox>
                    <Block>
                      <Span>{match.matchdate.slice(0, 10)}</Span>
                      <Span>{match.matchdate.slice(11, 16)}</Span>
                    </Block>
                    <Block>
                      <Span>{match.sitename}</Span>
                      <Span>{match.user.level}</Span>
                    </Block>
                    <Block>
                      <Span>{match.user.team}</Span>
                    </Block>
                    <RiBlock>
                      <EditBtn>수정</EditBtn>
                      <DelBtn>취소</DelBtn>
                    </RiBlock>
                  </FlexBox>
                </Box>
              );
            })}
          </MatchesBlock>
        </Inner>
      </Section>
    </>
  );
}

export default RegisterDetailsPage;
