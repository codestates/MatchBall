import React from "react";
import styled from "styled-components";

const RegionSelect = styled.select`
  position: absolute;
  top: -8.8%;
  left: 4%;
  font-size: 15px;
  background-color: #ffffff;
  width: 72px;
  height: 40px;
  border: 1px solid rgba(0, 0, 0, 0.3);
`;

function RegionForm(props) {
  return (
    <RegionSelect>
      <optgroup label="서울">
        <option defaultValue="지역선택">지역선택</option>
        <option>도봉</option>
        <option>강북</option>
        <option>성북</option>
        <option>동대문</option>
        <option>종로</option>
        <option>마포</option>
        <option>용산</option>
        <option>강동</option>
        <option>송파</option>
        <option>강남</option>
        <option>구로</option>
        <option>영등포</option>
        <option>강서</option>
      </optgroup>
      <optgroup label="경기">
        <option>수원</option>
        <option>용인</option>
        <option>화성</option>
        <option>의정부</option>
        <option>양주</option>
        <option>과천</option>
        <option>구리</option>
        <option>남양주</option>
        <option>하남</option>
        <option>인천</option>
        <option>부천</option>
        <option>고양</option>
        <option>파주</option>
        <option>성남</option>
        <option>시흥</option>
        <option>안산</option>
      </optgroup>
    </RegionSelect>
  );
}

export default RegionForm;
