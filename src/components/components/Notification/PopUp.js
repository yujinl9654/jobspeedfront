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
  color: ${(props) => props.color};
  background-color: ${(props) => props.backColor};
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 10px;
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

export default function PopUp({ type, text }) {
  const typeArr = {
    warn: {
      backColor: 'red',
      color: 'white',
      text: '오류가 발생하였습니다',
    },
    post: {
      backColor: '#f5df4d',
      color: '#7c7c7c',
      text: '게시글이 등록되었습니다',
    },
    sign: {
      backColor: 'green',
      color: 'white',
      text: '이메일을 확인해주세요',
    },
    default: {
      backColor: '#f5df4d',
      color: '#7c7c7c',
      text,
    },
  };

  return (
    <>
      <Alert color={typeArr[type].color} backColor={typeArr[type].backColor}>
        <p>{typeArr[type].text}</p> <CheckMark />
      </Alert>
    </>
  );
}
