import React from "react";
import styled from "styled-components";

const DL = styled.dl`
  display: flex;
  margin: 10px;
`;

const DT = styled.dt`
  margin: 3px;
`;
const HR = styled.hr`
  margin: 0px;
`;
const MatchInfoBody = styled.div`
  display: flex;
`;

const MatchInfoText = styled.div`
  flex-grow: 1;
`;

export default function MatchInfo({ match }) {
  return (
    <MatchInfoBody>
      {/* <div className="MatchInfo-time">{match.matchdate}</div>
      <div className="MatchInfo-region">{match.region}</div>
      <div className="MatchInfo-sitename">{match.sitename}</div>
      <div className="MatchInfo-level">{match.level}</div>
      <div className="MatchInfo-teamlogo">{match.team}</div>
      <div className="MatchInfo-nickname">{match.nickname}</div>
      <div className="MatchInfo-recruit">{match.recruit}</div> */}
      <MatchInfoText>
        <div>{match.matchdate}</div>
        <DL>
          <DT>{match.region}</DT>
          <DT>{match.sitename}</DT>
          <DT>{match.level}</DT>
        </DL>
        <DL>
          <DT>{match.team}</DT>
          <DT>{match.nickname}</DT>
        </DL>
        <HR />
      </MatchInfoText>
      <button>{match.recruit}</button>
    </MatchInfoBody>
  );
}
