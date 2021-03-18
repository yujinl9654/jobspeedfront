import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Modal from '../pages/Modal/Modal';
// import { Spinner } from 'react-bootstrap';

const NavDropBody = styled.div`
  position: absolute;
  display: inline;
  right: 15px;
  @media (max-width: 990px) {
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
`;

const DropList = styled.li``;

const DropLink = styled(Link)`
  color: #707070;

  &:hover {
    text-decoration: none;
    color: white;
  }
`;
const DropUl = styled.ul`
  user-select: none;
  padding: 10px;
  list-style: none;
  margin: 0px;
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

  const [visiable, setVisiable] = useState(false);

  return (
    <NavDropBody ref={DropRef}>
      {visiable ? <Modal setVisiable={setVisiable} /> : ''}
      <NavDropHeader onClick={() => toggleHandler()}>
        {props.children}
      </NavDropHeader>
      <NavDropContent toggle={toggle}>
        {/* <Spinner animation="border" />*/}
        <DropUl>
          <DropList>
            <DropLink to="/" onClick={() => setVisiable(true)}>
              Login
            </DropLink>
          </DropList>
          <hr className="solid" style={{ margin: '10px' }}></hr>
          <DropList>
            <DropLink to="/" onClick={() => setVisiable(true)}>
              Sign Up
            </DropLink>
          </DropList>
        </DropUl>
      </NavDropContent>
    </NavDropBody>
  );
}
