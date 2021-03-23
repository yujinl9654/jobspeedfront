import React from 'react';
import styled from 'styled-components';
import { Check } from 'react-bootstrap-icons';

const Alert = styled.div`
  @media (max-width: 500px) {
    width: 100%;
    height: 45px;
    font-size: 15px;
  }
  height: 50px;
  width: 250px;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5df4d;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  animation: Bye 500ms linear 3s;
  animation-fill-mode: forwards;

  p {
    margin: 0;
  }

  @keyframes Bye {
    from {
      opacity: 1;
      visibility: visible;
    }
    to {
      opacity: 0;
      visibility: collapse;
    }
  }
`;

const CheckMark = styled(Check)`
  display: inline;
  width: 25px;
  height: 25px;
`;

export default function PopUp(props) {
  return (
    <>
      <Alert>
        <p>게시글이 등록되었습니다.</p> <CheckMark />
      </Alert>
    </>
  );
}
