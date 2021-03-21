import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MyButton = styled.div`
  border: #707070;
  height: 50px;
  text-align: center;
  padding-top: 10px;
`;

export default function SideMenu(props) {
  return (
    <div
      style={{
        width: '180px',
        border: '1px solid black',
        borderRadius: '27px',
      }}
    >
      <MyButton>
        <Link
          to={'./로그인'}
          style={{ color: 'black', textDecoration: 'none' }}
        >
          login
        </Link>
      </MyButton>
      <MyButton>
        <Link
          to={'./이력서'}
          style={{ color: 'black', textDecoration: 'none' }}
        >
          이력서
        </Link>
      </MyButton>
      <MyButton>
        <Link
          to={'./보관함'}
          style={{ color: 'black', textDecoration: 'none' }}
        >
          보관함
        </Link>
      </MyButton>
      <MyButton>
        <Link
          to={'./로그아웃'}
          style={{ color: 'black', textDecoration: 'none' }}
        >
          logout
        </Link>
      </MyButton>
    </div>
  );
}
