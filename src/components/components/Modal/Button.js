import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import styled from 'styled-components';

const MyButton = styled.button`
  border: 2px solid black;
  border-radius: 5px;
  background-color: white;
  color: black;
  padding: 5px 20px;
  font-size: 16px;
  cursor: pointer;

  :hover {
    border: 2px solid #f5df4d;
    background-color: #f5df4d;
    color: white;
  }
`;

export default function Button(props) {
  return (
    <>
      <MyButton onClick={props.click}>
        <b>{props.name}</b>
      </MyButton>
    </>
  );
}
