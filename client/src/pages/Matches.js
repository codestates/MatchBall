import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import MatchInfo from "../components/MatchInfo";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Matches({ data }) {
  return (
    <>
      <Nav />
      <div className="entire-matches">
        {data.map((match) => {
          return <MatchInfo key={match.id} match={match} />;
        })}
      </div>
      <Footer />
    </>
  );
}

export default Matches;
