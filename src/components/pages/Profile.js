import React, { useState } from 'react';
import styled from 'styled-components';
import {
  StyledButton,
  StyledHeaderDiv,
  StyledLeftLayout,
} from '../components/Styled';
import SideMenu from '../components/SideMenu';
import ProfileContents from '../components/ProfileContents';

const ProfileImg = styled.div`
  text-align: center;
  line-height: 200px;
`;

const styles = {
  img: {
    width: '200px',
    height: '200px',
    border: '1px solid black',
    borderRadius: '50%',
    margin: '0 auto',
  },
};

export default function Profile(props) {
  return (
    <>
      <div className="container text-left">
        <StyledHeaderDiv style={{ position: 'relative' }}>
          <h1>계정 관리</h1>
          <StyledButton last bottom mid>
            변경 사항 저장
          </StyledButton>
        </StyledHeaderDiv>
        <div style={{ marginTop: '100px' }}>
          <div className="row justify-content-center">
            <StyledLeftLayout className={'col-12 col-lg-3 text-left'}>
              <SideMenu />
            </StyledLeftLayout>
            <div className={'col-12 col-lg-9'}>
              <ProfileImg>
                <img
                  src="http://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                  style={styles.img}
                />
              </ProfileImg>
              <ProfileContents />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
