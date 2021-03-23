import React from 'react';
import styled from 'styled-components';
import {
  StyledButton,
  StyledHeaderDiv,
  StyledLeftLayout,
} from '../components/Styled';
import SideMenu from '../components/SideMenu';
import ProfileContents from '../components/Profile/ProfileContents';

const ProfileImg = styled.div`
  text-align: center;
  line-height: 200px;
`;

export default function Resume() {
  return (
    <>
      {' '}
      <div className="container text-left">
        <StyledHeaderDiv style={{ position: 'relative' }}>
          <h1>이력서</h1>
          <StyledButton last bottom>
            수정
          </StyledButton>
        </StyledHeaderDiv>
        <div style={{ marginTop: '100px' }}>
          <div className="row justify-content-center">
            <StyledLeftLayout className={'col-12 col-lg-3 text-left'}>
              <SideMenu />
            </StyledLeftLayout>
            <div className={'col-12 col-lg-9'}></div>
          </div>
        </div>
      </div>
    </>
  );
}
