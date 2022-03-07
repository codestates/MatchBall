import React from "react";
import styled from "styled-components";
import logo from "../img/logo_size.jpg";
import { MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = styled.header`
  border-bottom: 1px solid rgba(0, 0, 0, 0.75);
  /* box-shadow: X Y BLUR SPREAD COLOR; */
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.75);
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

function Nav() {
  return (
    <Header>
      <Inner>
        <MenuGroup>
          <Logo>
            <Link to="/">
              <LogoImg href="#">MatchBall</LogoImg>
            </Link>
          </Logo>
        </MenuGroup>
        <SignGroup>
          <UserName>권순일님</UserName>
          <Link to="/mypage">
            <User href="#">
              <MdAccountCircle size={50} color="#190707" />
            </User>
          </Link>
        </SignGroup>
      </Inner>
    </Header>
  );
}

export default Nav;
