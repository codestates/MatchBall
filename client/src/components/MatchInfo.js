import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Box = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  padding: 10px 110px 10px 14px;
  box-sizing: border-box;
  cursor: pointer;
  /* &:hover {
    background: rgba(0, 0, 0, 0.3);
  } */
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
    margin-left: 60px;
  }
`;

const RiBlock = styled.div`
  position: relative;
  width: 90px;
  /* border: 1px solid black; */
  left: 40%;
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
  width: 180px;
  height: 22px;
  align-items: left;
  font-size: 19px;

  & + & {
    margin-top: 10px;
  }
`;

export default function MatchInfo({ match, onClick }) {
  let recruit = match.is_matched === false ? "모집중" : "모집완료";
  let front = match.matchdate.slice(0, 10);
  let rear = match.matchdate.slice(11, 16);
  return (
    <Box>
      <Region>{match.region}</Region>
      <FlexBox>
        <Block>
          <Span>{front}</Span>
          <Span>{rear}</Span>
        </Block>
        <Block>
          <Span>{match.sitename}</Span>
          <Span>{match.user.level}</Span>
        </Block>
        <Block>
          <Span>{match.user.team}</Span>
        </Block>
        <RiBlock>
          <Link to="/matches/detail">
            <Span onClick={onClick}>{recruit}</Span>
          </Link>
        </RiBlock>
      </FlexBox>
    </Box>
  );
}
