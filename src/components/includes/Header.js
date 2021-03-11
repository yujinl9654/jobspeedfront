import React from 'react';
import { Justify, PersonCircle, Search } from 'react-bootstrap-icons';
import styled from 'styled-components';
import NavLink from '../components/NavLink';
import NavDrop from '../components/NavDrop';
import NavSearch from '../components/NavSearch';
import NavMenu from '../components/NavMenu';

// 네비바스타일
const NavBar = styled.div`
  height: 60px;
  padding-top: 20px;
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

export default function Header(props) {
  return (
    <>
      <NavBar className="container-fluid">
        <NavLink to="/">COMMUNITY</NavLink>
        <NavLink to="/" main="true">
          LOGO
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
      </NavBar>
    </>
  );
}
