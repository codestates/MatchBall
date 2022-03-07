import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import MatchInfo from "../components/MatchInfo";

const MatchesBody = styled.div`
  font-size: 22px;
  margin: 20px 100px;
`;

const MatchesFilter = styled.div`
  display: flex;
  margin: 10px;
`;

const MatchesFilterLeft = styled.div`
  flex-grow: 1;
`;

const WriteButton = styled.button`
  justify-content: flex-end;
`;

function Matches() {
  const [data, setData] = useState([
    {
      matchdate: 202203071600,
      region: "서울",
      sitename: "효창공원",
      level: "초보",
      team: "한화",
      nickname: "ABC",
      recruit: "모집중",
    },
    {
      matchdate: 202203071800,
      region: "경기",
      sitename: "일산공원",
      level: "중수",
      team: "두산",
      nickname: "DEF",
      recruit: "모집중",
    },
  ]);

  return (
    <MatchesBody>
      <center>
        <span>매칭 공고</span>
      </center>
      <MatchesFilter>
        <MatchesFilterLeft>
          <button className="matches-filter-matchdate">날짜별</button>
          <button className="matches-filter-region">지역별</button>
          <button className="matches-filter-level">실력별</button>
        </MatchesFilterLeft>
        <Link to="/matches/new">
          <WriteButton>글쓰기</WriteButton>
        </Link>
      </MatchesFilter>
      <div className="entire-matches">
        {data.map((match) => {
          return <MatchInfo match={match} />;
        })}
      </div>
    </MatchesBody>
  );
}

export default Matches;
