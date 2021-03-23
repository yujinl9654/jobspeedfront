import React, { useRef, useState } from 'react';
import { Justify, PersonCircle, Search } from 'react-bootstrap-icons';
import styled from 'styled-components';
import NavLink from '../components/NavLink';
import NavDrop from '../components/NavDrop';
import NavSearch from '../components/NavSearch';
import NavMenu from '../components/NavMenu';
import PopUp from '../components/Notification/PopUp';

// 네비바스타일
const NavBar = styled.div`
  position: fixed;
  top: 0px;
  height: 60px;
  padding: 15px 0px 0px 0px;
  background-color: #333333;
  z-index: 2;
  margin: 0px;
`;

const RightContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 20px;
  right: 8px;
  & > * {
    margin: 0px 10px 2px;
  }
`;

const PopUpBox = styled.div`
  @media (max-width: 500px) {
    width: 80%;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
  }
  position: fixed;
  right: 35px;
  bottom: 30px;
`;

export default function Header(props) {
  return (
    <>
      <NavBar className="container-fluid">
        <NavLink to="/community">COMMUNITY</NavLink>
        <NavLink to="/" main="true">
          SPEEDJOBS
        </NavLink>
        <NavLink to="/recruit">RECRUITMENT</NavLink>
        <NavSearch>
          <Search></Search>
        </NavSearch>
        <NavMenu>
          <Justify></Justify>
        </NavMenu>
        <RightContainer>
          <NavDrop>
            <PersonCircle></PersonCircle>
          </NavDrop>
        </RightContainer>
        <PopUpBox>
          <PopUp />
        </PopUpBox>
      </NavBar>
    </>
  );
}
