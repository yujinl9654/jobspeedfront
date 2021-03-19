import React from 'react';
import styled from 'styled-components';
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
  .buttons {
    margin-top: 10px;
  }
`;

const CanButton = styled.div`
  @media (max-width: 768px) {
    text-align: center;
    display: block;
    margin-top: 10px;
  }
  display: none;
`;

export default function Login(props) {
  return (
    <>
      <LogForm>
        <div className="login">
          <InputLine name="EMAIL" type="text" />
          <Forget>Forgot password?</Forget>
          <br />
          <InputLine name="PASSWORD" type="password" />
        </div>

        <div className="buttons">
          <div>
            <input type="checkbox" /> Remember me
          </div>
          <div style={{ marginTop: '15px' }}>
            <Button type="submit" name="LOG IN" />
          </div>
          <CanButton>
            <Button name="CANCEL" />
          </CanButton>
        </div>
        <Sns />
      </LogForm>
    </>
  );
}
