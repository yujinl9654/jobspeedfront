import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import Sns from './Sns';
import InputLine from './InputLine';
import { postMember } from '../../data/Data';

const SignForm = styled.form`
  Button {
    margin-top: 15px;
  }

  input {
    margin-bottom: 10px;
    margin-right: 5px;
  }
`;

const SignInput = styled(InputLine)``;

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
      <SignForm onSubmit={submitHandle}>
        <div>
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
          <SignInput
            name="NAME"
            value={form.name}
            type="text"
            handleChange={(value) => {
              setForm({ ...form, name: value });
            }}
          />
          <input type="checkbox" />
          Accept all conditions
          <Button type="submit" name="SING UP" />
        </div>
        <Sns />
      </SignForm>
    </>
  );
}
