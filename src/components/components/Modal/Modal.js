import { css } from 'styled-components/dist/styled-components.browser.esm';
import React, { useState } from 'react';
import styled from 'styled-components';
import Login from './Login';
import SignUp from './SignUp';

const MyComponent = styled.div`
  border-radius: 5px;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 50px;
  background-color: white;
  width: 330px;
  height: inherit;
  z-index: 20;
  padding: 40px 45px;
  text-align: left;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  .title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    h3 {
      letter-spacing: 2px;
      font-size: 25px;
      display: inline;
      padding-bottom: 2px;
      border-bottom: 5px solid #d3d3d3;
      :hover {
        border-bottom: 5px solid #f5df4d;
      }
    }
    .log {
      ${(props) =>
        props.login &&
        css`
          border-bottom: 5px solid #f5df4d;
        `}
    }
    .sign {
      ${(props) =>
        !props.login &&
        css`
          border-bottom: 5px solid #f5df4d;
        `}
    }
  }
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

export default function Modal(props) {
  const [login, setLogin] = useState(true);

  return (
    <>
      <MyComponent login={login}>
        <div className="title">
          <h3 className="log" onClick={() => setLogin(true)}>
            LOG IN
          </h3>{' '}
          <h3 className="sign" onClick={() => setLogin(false)}>
            SIGN UP
          </h3>
        </div>
        {login ? <Login /> : <SignUp />}
      </MyComponent>
      <Background onClick={() => props.setVisiable(false)} />
    </>
  );
}
