import React, { useEffect } from "react";
import styled from "styled-components";
import logo from "../img/logo_size.jpg";
import { MdAccountCircle } from "react-icons/md";

const Header = styled.header`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  /* box-shadow: X Y BLUR SPREAD COLOR; */
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  background: #fff;
`;

const Inner = styled.div`
  max-width: 980px;
  height: 90px;
  margin: 0 auto;
`;

const MenuGroup = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  display: block;
  text-indent: -9999px; /* 대체 텍스트 */
  float: left;
`;

const Logo = styled.div`
  margin-right: 10px;
`;

const LogoImg = styled.a`
  background: url(${logo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 200px;
  height: 90px;
  display: block;
`;

const SignGroup = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  float: right;
`;

const UserName = styled.div`
  margin-right: 10px;
  font-weight: bold;
`;

const User = styled.a`
  &:hover {
    opacity: 0.5;
  }
  &:active {
    opacity: 1;
  }
`;

function Nav({ userInfo }) {
  return (
    <Header>
      <Inner>
        <MenuGroup>
          <Logo>
            <LogoImg href="/">MatchBall</LogoImg>
          </Logo>
        </MenuGroup>
        <SignGroup>
          <UserName>{userInfo.nickname}</UserName>
          <User href="/mypage">
            <MdAccountCircle size={50} color="#190707" />
          </User>
        </SignGroup>
      </Inner>
    </Header>
  );
}

export default Nav;
