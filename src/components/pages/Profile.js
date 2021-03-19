import React, { useState } from 'react';
import styled from 'styled-components';
import {
  StyledButton,
  StyledHeaderDiv,
  StyledLeftLayout,
} from '../components/Styled';

const MyButton = styled.div`
  border: #707070;
  height: 50px;
  text-align: center;
  padding-top: 10px;
  text-decoration: none;
  color: black;
`;

export default function Profile(props) {
  return (
    <>
      <div className="container text-left">
        <StyledHeaderDiv>
          <h1>계정 관리</h1>
          <StyledButton last bottom mid>
            변경 사항 저장
          </StyledButton>
        </StyledHeaderDiv>
        <div>
          <div className="row justify-content-center">
            <StyledLeftLayout className={'col-12 col-lg-3 text-left'}>
              <div
                style={{
                  width: '180px',
                  border: '1px solid black',
                  borderRadius: '27px',
                }}
              >
                <MyButton>
                  <a href="#" style={{ color: 'black' }}>
                    login
                  </a>
                </MyButton>
                <MyButton>
                  <a href="#" style={{ color: 'black' }}>
                    이력서
                  </a>
                </MyButton>
                <MyButton>
                  <ul style={{ listStyle: 'none' }}>
                    <li>
                      <a href="#" style={{ color: 'black' }}>
                        보관함
                      </a>
                      <ul style={{ listStyle: 'none' }}>
                        <li>
                          <a
                            href="#"
                            style={{
                              color: 'black',
                              fontSize: '14px',
                            }}
                          >
                            채용공고
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            style={{
                              color: 'black',
                              fontSize: '14px',
                            }}
                          >
                            게시글
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </MyButton>
                <MyButton>
                  <a href="#" style={{ color: 'black' }}>
                    logout
                  </a>
                </MyButton>
              </div>
            </StyledLeftLayout>
            <div className={'col-12 col-lg-9'}>
              프로필프로필프로필프로필프로필프로필프로필프로필
              프로필프로필프로필프로필프로필프로필프로필프로필
              프로필프로필프로필프로필프로필프로필프로필프로필
              프로필프로필프로필프로필프로필프로필프로필프로필
              프로필프로필프로필프로필프로필프로필프로필프로필
              프로필프로필프로필프로필프로필프로필프로필프로필
              프로필프로필프로필프로필프로필프로필프로필프로필
              프로필프로필프로필프로필프로필프로필프로필프로필
              프로필프로필프로필프로필프로필프로필프로필프로필
              프로필프로필프로필프로필프로필프로필프로필프로필
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
