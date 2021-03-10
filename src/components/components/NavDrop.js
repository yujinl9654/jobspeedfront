import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { Spinner } from 'react-bootstrap';

const NavDropBody = styled.div`
  position: absolute;
  display: inline;
  right: 15px;
  @media (max-width: 990px) {
    display: none;
  }
`;

const NavDropHeader = styled.span``;

const NavDropContent = styled.div`
  background-color: white;
  z-index: 1;
  position: absolute;
  border: grey solid 1px;
  top: 55px;
  right: -30px;
  width: 150px;
  border-radius: 15px;
  display: ${(props) => props.toggle};
`;

const DropList = styled.li``;

const DropLink = styled(Link)`
  color: black;

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

export default function NavDrop(props) {
  const [toggle, setToggle] = useState('none');
  const DropRef = useRef();
  const toggleHandler = () => {
    setToggle(toggle === 'none' ? 'block' : 'none');
  };
  const clickHandler = (e) => {
    console.log(DropRef.current);
    if (toggle === 'block' && !DropRef.current.contains(e.target))
      setToggle('none');
  };

  useEffect(() => {
    addEventListener('click', clickHandler, true);
    return () => {
      removeEventListener('click', clickHandler, true);
    };
  });

  return (
    <NavDropBody ref={DropRef}>
      <NavDropHeader onClick={() => toggleHandler()}>
        {props.children}
      </NavDropHeader>
      <NavDropContent toggle={toggle}>
        {/* <Spinner animation="border" />*/}
        <DropUl>
          <DropList>
            <DropLink to="/">Login</DropLink>
          </DropList>
          <hr className="solid" style={{ margin: '10px' }}></hr>
          <DropList>
            <DropLink to="/">Sign Up</DropLink>
          </DropList>
        </DropUl>
      </NavDropContent>
    </NavDropBody>
  );
}
