import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Button from './Button';
import Sns from './Sns';
import InputLine from './InputLine';
import { postMember } from '../../data/Data';

const SignForm = styled.div`
  Button {
    margin-top: 10px;
    @media (max-width: 768px) {
      background-color: #f5df4d;
      border: 2px solid #f5df4d;
      color: white;
    }
  }

  input {
    margin-bottom: 15px;
    margin-right: 5px;
  }

  ${(props) =>
    !props.fade &&
    css`
  opacity: 0;
  animation: fadeSign 500ms;
  animation-fill-mode: forwards;
  @keyframes fadeSign {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0px);
    }
  `}
`;

const SignInput = styled(InputLine)``;

const CanButton = styled.div`
  @media (max-width: 768px) {
    display: block;
    Button {
      background-color: white;
      border: 2px solid black;
      color: black;
    }
  }
  display: none;
`;

export default function SignUp(props) {
  const [form, setForm] = useState({ email: '', password: '', name: '' });
  const [repeat, setRepeat] = useState('');

  const submitHandle = async (e) => {
    e.preventDefault();
    if (repeat !== form.password) alert('비밀번호를 확인해주세요');
    postMember(form)
      .then(() => {
        alert('resolve');
      })
      .catch(() => {
        alert('reject');
      });
  };

  return (
    <>
      <SignForm fade={props.fade}>
        <form onSubmit={submitHandle}>
          <SignInput
            name="NAME"
            value={form.name}
            type="text"
            handleChange={(value) => {
              setForm({ ...form, name: value });
            }}
          />
          <SignInput
            name="EMAIL"
            value={form.email}
            handleChange={(value) => {
              setForm({ ...form, email: value });
            }}
            type="email"
          />
          <SignInput
            name="PASSWORD"
            value={form.password}
            type="password"
            handleChange={(value) => {
              setForm({ ...form, password: value });
            }}
          />
          <SignInput
            name="REPEAT PASSWORD"
            value={repeat}
            handleChange={(value) => {
              setRepeat(value);
              console.log(value === form.password);
            }}
            type="PASSWORD"
          />
          <input type="checkbox" />
          Accept all conditions
          <div>
            <Button type="submit" name="SING UP" />
          </div>
          <CanButton>
            <Button
              type="button"
              name="CANCEL"
              onClick={() => props.setClose(false)}
            />
          </CanButton>
        </form>
        <Sns />
      </SignForm>
    </>
  );
}
