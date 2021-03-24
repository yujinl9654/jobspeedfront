import React from 'react';
import {
  MyImage,
  ProfileImg,
  StyledButton,
  StyledHeaderDiv,
  StyledLeftLayout,
} from '../components/Styled';
import SideMenu from '../components/SideMenu';
import ProfileContents from '../components/Profile/ProfileContents';

export default function Profile() {
  return (
    <form>
      <div className="container text-left">
        <StyledHeaderDiv style={{ position: 'relative' }}>
          <h1>계정 관리</h1>
          <StyledButton last bottom mid>
            변경 사항 저장
          </StyledButton>
        </StyledHeaderDiv>
        <div style={{ marginTop: '100px' }}>
          <div className="row justify-content-center">
            <StyledLeftLayout className={'col-12 col-lg-2 text-left'}>
              <SideMenu />
            </StyledLeftLayout>
            <div className={'col-12 col-lg-10'} style={{ paddingLeft: '60px' }}>
              <ProfileImg>
                <MyImage
                  src="http://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                  alt="profile"
                />
              </ProfileImg>
              <ProfileContents />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
