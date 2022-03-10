import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import MatchInfo from "../components/MatchInfo";
import CalendarModal from "../components/CalendarModal";
import RegionForm from "../components/RegionForm";

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
  background: white;
`;

const MatchesBlock = styled.div`
  width: 900px;
  height: 712px;
  /* min-height: 100%; */

  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  /* background: red; */
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

  margin-top: 90px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

const DateBtn = styled.button`
  display: block;
  background-color: #ffffff;
  text-decoration: none;
  border: 1px solid rgba(0, 0, 0, 0.3);
  width: 72px;
  height: 40px;
  position: absolute;
  top: -20%;
  left: 13%;
  color: #000;
  margin-top: 80px;
  font-size: 15px;
  & + & {
    margin-left: 75%;
  }

  /* border-radius: 30px; */
  cursor: grab;
`;

function Matches({ data }) {
  const [dialog, setDialog] = useState(false);
  const onClick = () => {
    setDialog(true);
  };
  const onConfirm = () => {
    console.log("확인");
    setDialog(false);
  };
  const onCancel = () => {
    console.log("취소");
    setDialog(false);
  };

  return (
    <Section>
      <GlobalStyle />
      <Inner>
        <MatchesBlock>
          <RegionForm />
          <DateBtn onClick={onClick}>전체기간</DateBtn>
          <DateBtn>글쓰기</DateBtn>
          {/* <div className="entire-matches">
            {data.map((match) => {
              return <MatchInfo key={match.id} match={match} />;
            })}
          </div> */}
          <CalendarModal
            onConfirm={onConfirm}
            onCancel={onCancel}
            visible={dialog}
          />
        </MatchesBlock>
      </Inner>
    </Section>
  );
}

export default Matches;
