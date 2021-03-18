import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const MyInput = styled.div`
  label {
    margin-bottom: 0;
  }

  input {
    padding: 3px;
    border: none;
    border-bottom: 2px solid #d3d3d3;
    ${(props) =>
      props.change &&
      css`
        border-bottom: 2px solid black;
      `}
    width: 100%;
    height: 20px;
    :focus {
      border-bottom: 2px solid black;
      outline: none;
    }
  }
`;

export default function InputLine(props) {
  const [bottom, setBottom] = useState(false);

  return (
    <>
      <MyInput change={bottom}>
        <label>
          <b>{props.name}</b>
        </label>
        <input type={props.type} onChange={() => setBottom(true)} />
      </MyInput>
    </>
  );
}
