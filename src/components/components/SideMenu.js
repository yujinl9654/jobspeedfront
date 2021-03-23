import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { DropdownButton, Dropdown } from 'react-bootstrap';

const MyButton = styled.div`
  border: #707070;
  height: 50px;
  text-align: center;
  padding-top: 10px;
`;

function SelectItem(eventKey) {
  console.log(eventKey);
}

export default function SideMenu(props) {
  return (
    <div
      style={{
        width: '180px',
        border: '1px solid silver',
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
        <Dropdown>
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            style={{
              width: '100%',
              backgroundColor: 'white',
              color: 'black',
              border: 'none',
            }}
          >
            보관함
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">채용공고</Dropdown.Item>
            <Dropdown.Item href="#/action-2">게시글</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
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
