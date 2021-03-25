import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Sns from './Sns';
import InputLine from './InputLine';

const SignForm = styled.div`
  Button {
    margin-top: 15px;
  }
  input {
    margin-bottom: 10px;
  }
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
          <Button type="submit" name="SING UP" />
        </div>
        <Sns />
      </SignForm>
    </>
  );
}
