import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import MatchInfo from "../components/MatchInfo";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

// const MatchesBody = styled.div`
//   font-size: 22px;
//   margin: 20px 100px;
// `;

// const MatchesFilter = styled.div`
//   display: flex;
//   margin: 10px;
// `;

// const MatchesFilterLeft = styled.div`
//   flex-grow: 1;
// `;

// const WriteButton = styled.button`
//   justify-content: flex-end;
// `;

function Matches({ data }) {
  return (
    <>
      <Nav />
      {/* <MatchInfo></MatchInfo> */}
      {/* <MatchesBody>
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
            return <MatchInfo key={match.id} match={match} />;
          })}
        </div>
      </MatchesBody> */}
      <MatchInfo />
      <Footer />
    </>
  );
}

export default Matches;
