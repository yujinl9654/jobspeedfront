import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Sns from './Sns';
import InputLine from './InputLine';

export const LogForm = styled.form`
  .buttons {
    margin-top: 25px;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }
`;

export default function Login(props) {
  return (
    <>
      <LogForm>
        <div className="login">
          <InputLine name="EMAIL" type="text" />
          {/* <StyledLink to={'/'}>Forget password?</StyledLink>*/}
          <br />
          <InputLine name="PASSWORD" type="password" />
        </div>

        <div className="buttons">
          <div>
            <input type="checkbox" /> Remember me
          </div>
          <Button type="submit" name="SIGN IN" />
        </div>

        <Sns />
      </LogForm>
    </>
  );
}
