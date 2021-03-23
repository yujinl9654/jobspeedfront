import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Modal from './Modal/Modal';

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

const DropList = styled.li`
  margin-bottom: 20px;
`;

const DropLink = styled(Link)`
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

const Background = styled.div`
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

  useEffect(() => {
    addEventListener('click', clickHandler, true);
    return () => {
      removeEventListener('click', clickHandler, true);
    };
  });

  const [visible, setVisible] = useState(false);
  const [login, setLogin] = useState(true);

  return (
    <div className="container-fluid">
      {visible && <Modal login={login} setVisible={setVisible} />}
      {visible && <Background onClick={() => setVisible(false)} />}
      <NavMenuBody ref={MenuRef}>
        <NavMenuHeader onClick={() => toggleHandler()}>
          {props.children}
        </NavMenuHeader>
        <NavMenuContent toggle={toggle}>
          <DropUl>
            <DropList>
              <DropLink to="/community" onClick={() => toggleHandler()}>
                COMMUNITY
              </DropLink>
            </DropList>
            <DropList>
              <DropLink to="/recruit" onClick={() => toggleHandler()}>
                RECRUITMENT
              </DropLink>
            </DropList>
            <hr className="solid" style={{ margin: '10px' }}></hr>
            <DropList>
              <DropLink
                to="/"
                onClick={() => {
                  // toggleHandler();
                  setVisible(true);
                  setLogin(true);
                }}
              >
                LOGIN
              </DropLink>
            </DropList>
            <DropList>
              <DropLink
                to="/"
                onClick={() => {
                  // toggleHandler();
                  setVisible(true);
                  setLogin(false);
                }}
              >
                SIGN UP
              </DropLink>
            </DropList>
          </DropUl>
        </NavMenuContent>
      </NavMenuBody>
    </div>
  );
}
