import moment from "moment";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // css import
import styled from "styled-components";
import "react-calendar/dist/Calendar.css";

const Dot = styled.div`
  width: 300px;
  margin: 0 auto;
`;

function CalendarForm() {
  const [value, onChange] = useState(new Date());

  return (
    <Dot>
      <Calendar onChange={onChange} value={value} />
      {/* <div className="dot">{moment(value).format("YYYY년 MM월 DD일")}</div> */}
    </Dot>
  );
}

export default CalendarForm;
