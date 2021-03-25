import React from 'react';
import styled, { css } from 'styled-components';
import Button from './Button';
import Sns from './Sns';
import InputLine from './InputLine';

const Forget = styled.p`
  font-size: 13px;
  text-decoration: none;
  color: #d3d3d3;
  float: right;
  margin-bottom: 5px;

  :hover {
    color: black;
  }
`;

const LogForm = styled.form`
  ${(props) =>
    props.fade &&
    css`
      opacity: 0;
      animation: fadeLog 500ms;
      animation-fill-mode: forwards;
    `}

  @keyframes fadeLog {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0px);
    }
  }

  .buttons {
    margin-top: 15px;

    Button {
      @media (max-width: 768px) {
        background-color: #f5df4d;
        border: 2px solid #f5df4d;
        color: white;
      }
    }
  }
`;

const CanButton = styled.div`
  @media (max-width: 768px) {
    display: block;
    margin-top: 10px;
    Button {
      background-color: white;
      border: 2px solid black;
      color: black;
    }
  }
  display: none;
`;

export default function Login(props) {
  return (
    <>
      <LogForm fade={props.fade}>
        <div className="login">
          <InputLine name="EMAIL" type="text" />
          <Forget>Forgot password?</Forget>
          <br />
          <InputLine name="PASSWORD" type="password" />
        </div>

        <div>
          <input type="checkbox" style={{ marginTop: '20px' }} /> Remember me
          <div className="buttons">
            <Button type="submit" name="LOG IN" />
          </div>
          <CanButton>
            <Button
              type="button"
              name="CANCEL"
              onClick={() => props.setClose(false)}
            />
          </CanButton>
        </div>
        <Sns setSns={props.setSns} />
      </LogForm>
    </>
  );
}
