import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Sns from './Sns';
import InputLine from './InputLine';

const SignForm = styled.div`
  input {
    margin-bottom: 10px;
    margin-right: 5px;
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

const SignInput = styled(InputLine)``;

export default function SignUp(props) {
  return (
    <>
      <SignForm>
        <div>
          <SignInput name="EMAIL" type="email" />
          <SignInput name="PASSWORD" type="password" />
          <SignInput name="REPEAT PASSWORD" type="text" />
          <SignInput name="NAME" type="text" />
          <input type="checkbox" />
          Accept all conditions
          <div style={{ marginTop: '10px' }}>
            <Button type="submit" name="SING UP" />
          </div>
          <CanButton>
            <Button name="CANCEL" />
          </CanButton>
        </div>
        <Sns />
      </SignForm>
    </>
  );
}
