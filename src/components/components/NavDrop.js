import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Modal from './Modal/Modal';
import { MapDrop } from '../data/mapLink';

const NavDropBody = styled.div`
  position: absolute;
  display: inline;
  right: 15px;
  @media (max-width: 1200px) {
    display: none;
  }
`;

const NavDropHeader = styled.span`
  color: #707070;

  &:hover {
    color: white;
  }
`;

const NavDropContent = styled.div`
  background-color: white;
  z-index: 1;
  position: absolute;
  top: 55px;
  right: -30px;
  width: 150px;
  border-radius: 15px;
  display: ${(props) => props.toggle};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 10px 0px;
`;

export const DropList = styled.li``;

export const DropLink = styled(Link)`
  color: #707070;

  &:hover {
    text-decoration: none;
    color: black;
  }
`;
const DropUl = styled.ul`
  user-select: none;
  padding: 10px;
  list-style: none;
  margin: 0px;
`;

export const Background = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.8;
  z-index: 10;
`;

export default function NavDrop(props) {
  const [toggle, setToggle] = useState('none');
  const DropRef = useRef();
  const toggleHandler = () => {
    setToggle(toggle === 'none' ? 'block' : 'none');
  };
  const clickHandler = (e) => {
    if (toggle === 'block' && !DropRef.current.contains(e.target))
      setToggle('none');
  };

  useEffect(() => {
    addEventListener('click', clickHandler, true);
    return () => {
      removeEventListener('click', clickHandler, true);
    };
  });

  const [visible, setVisible] = useState(false);
  const [login, setLogin] = useState(true);
  const mapProps = [
    {
      title: 'Login',
      onClick: () => {
        setVisible(true);
        setLogin(true);
      },
    },
    {
      title: 'Sign Up',
      onClick: () => {
        setVisible(true);
        setLogin(false);
      },
    },
  ];

  return (
    <NavDropBody ref={DropRef}>
      {visible && <Modal setVisible={setVisible} login={login} />}
      {visible && <Background onClick={() => setVisible(false)} />}
      <NavDropHeader onClick={() => toggleHandler()}>
        {props.children}
      </NavDropHeader>
      <NavDropContent toggle={toggle}>
        {/* <Spinner animation="border" />*/}
        <DropUl>
          <MapDrop change={mapProps}></MapDrop>
        </DropUl>
      </NavDropContent>
    </NavDropBody>
  );
}
