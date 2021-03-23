import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MapLinkUser, MapMenu } from '../data/mapLink';

const NavMenuBody = styled.div`
  display: none;
  left: 0px;
  top: 20px;
  @media (max-width: 1200px) {
    position: absolute;
    display: flex;
  }
`;

const NavMenuHeader = styled.div`
  color: #707070;
  margin-left: 20px;
  &:hover {
    color: white;
  }
`;

const NavMenuContent = styled.div`
  position: fixed;
  width: 100%;
  top: 40px;
  padding-top: 10px;
  background-color: #333333;
  z-index: 2;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  display: ${(props) => props.toggle};
  border-bottom: black solid 1px;
`;

export const MenuList = styled.li`
  margin-bottom: 20px;
`;

export const MenuLink = styled(Link)`
  letter-spacing: 0.15em;
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

export default function NavMenu(props) {
  const [toggle, setToggle] = useState('none');
  const MenuRef = useRef();
  const toggleHandler = () => {
    setToggle(toggle === 'none' ? 'block' : 'none');
  };
  const clickHandler = (e) => {
    if (toggle === 'block' && !MenuRef.current.contains(e.target))
      setToggle('none');
  };
  const mapProps = [
    {
      title: 'COMMUNITY',
      onClick: () => {
        toggleHandler();
      },
    },
    {
      title: 'RECRUITMENT',
      onClick: () => {
        toggleHandler();
      },
    },
  ];
  const mapPropsUser = [
    {
      title: 'Login',
      onClick: () => {
        toggleHandler();
      },
    },
    {
      title: 'Sign Up',
      onClick: () => {
        toggleHandler();
      },
    },
  ];

  useEffect(() => {
    addEventListener('click', clickHandler, true);
    return () => {
      removeEventListener('click', clickHandler, true);
    };
  });
  return (
    <div className="container-fluid">
      <NavMenuBody ref={MenuRef}>
        <NavMenuHeader onClick={() => toggleHandler()}>
          {props.children}
        </NavMenuHeader>
        <NavMenuContent toggle={toggle}>
          <DropUl>
            <MapMenu change={mapProps}></MapMenu>
            <hr className="solid" style={{ margin: '10px' }}></hr>
            <MapLinkUser change={mapPropsUser}></MapLinkUser>
          </DropUl>
        </NavMenuContent>
      </NavMenuBody>
    </div>
  );
}
