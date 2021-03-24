import React, { useEffect, useRef, useState } from 'react';
import { Justify, PersonCircle, Search } from 'react-bootstrap-icons';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { v4 } from 'uuid';
// import NavLink from '../components/NavLink';
import NavDrop from '../components/NavDrop';
import NavSearch from '../components/NavSearch';
import NavMenu from '../components/NavMenu';
import PopUp from '../components/Notification/PopUp';
import MapLink from '../data/mapLink';

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
  const [popArr, setPopArr] = useState([]);
  const user = useSelector((state) => state.user);
  const ref = useRef(0);
  const mapPop = popArr.map((pop) => (
    <PopUp key={pop.id} type={pop.type} text={pop.text}></PopUp>
  ));
  const addPop = (pop) => {
    console.log('add');
    setPopArr((prev) => {
      ref.current = v4();
      return prev.concat([{ type: pop.type, id: pop.id }]);
    });
    setTimeout(() => {
      setPopArr((prev) => {
        prev.shift();
        console.log('delete');
        return prev;
      });
    }, 3500);
    console.log(ref.current);
  };

  useEffect(() => {
    if (user.signUpDone) addPop({ type: 'sign', id: v4() });
  }, [user]);

  return (
    <>
      <NavBar className="container-fluid">
        <MapLink></MapLink>
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
        <PopUpBox>{mapPop}</PopUpBox>
      </NavBar>
    </>
  );
}
