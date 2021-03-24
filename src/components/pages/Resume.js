import React from 'react';
import styled from 'styled-components';
import {
  ProfileItems,
  StyledButton,
  StyledHeaderDiv,
  StyledLeftLayout,
  TextArea,
  TextAreaCombine,
  TextAreaLength,
} from '../components/Styled';
import SideMenu from '../components/SideMenu';
import ResumeInputs from '../components/resume/ResumeInputs';

const ResumeTitle = styled.div`
  margin-bottom: 15px;
  font-size: 25px;
`;

const Warning = styled.span`
  margin-left: 20px;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: -1px;
`;

const Private = styled.span`
  margin-top: 10px;
  float: right;
  font-size: 14px;
  font-weight: bold;
`;

const ResumeImg = styled.div`
  display: inline-block;
  border: 1px solid black;
  width: 180px;
  height: 200px;
  text-align: center;
  line-height: 200px;
  margin-top: 12px;
  margin-left: 30px;
`;

const MyEducation = styled.div`
  font-size: 15px;
  margin-bottom: 10px;
  font-weight: bold;
`;

const EducationItems = styled.div`
  padding-left: 30px;
`;

const ResumeTextArea = styled.textarea`
  width: 780px;
  border-radius: 27px;
  border: 1px solid silver;
  resize: none;
  padding: 10px 20px 3px;
  margin-left: 30px;
`;

function calc() {
  document.getElementById('result').value = document.getElementById(
    'content'
  ).value.length;
}

export default function Resume(props) {
  return (
    <form>
      <div className="container text-left">
        <StyledHeaderDiv style={{ position: 'relative' }}>
          <hee1>이력서</hee1>
          <StyledButton last bottom>
            수정
          </StyledButton>
        </StyledHeaderDiv>
        <div style={{ marginTop: '100px' }}>
          <div className="row justify-content-center">
            <StyledLeftLayout className={'col-12 col-lg-2 text-left'}>
              <SideMenu />
            </StyledLeftLayout>
            <div
              className={'col-12 col-lg-10'}
              style={{ paddingLeft: '60px', border: '1px solid black' }}
            >
              <ResumeTitle>
                기본 정보
                <Warning>
                  입력하신 정보는 절대 사용자 동의 없이 외부로 유출, 공개되지
                  않습니다.
                </Warning>
                <Private>비공개</Private>
              </ResumeTitle>
              <div
                className={'row'}
                style={{
                  marginBottom: '10px',
                }}
              >
                <div className={'col-12 col-md-4'}>
                  <ResumeImg>이미지 업로드</ResumeImg>
                </div>
                {/* 이름 */}
                <div className={'col-12 col-md-4'}>
                  <ResumeInputs name={'이름'} />
                  {/* 이메일 */}
                  <ResumeInputs name={'이메일'} />
                  {/* 연락처 */}
                  <ResumeInputs name={'연락처'} />
                </div>
                <div className={'col-12 col-md-4'}>
                  {/* 생년월일 */}
                  <ResumeInputs name={'생년월일'} />
                  {/* 성별 */}
                  <ResumeInputs name={'성별'} />
                </div>
              </div>
              <div
                style={{
                  marginBottom: '20px',
                }}
              >
                <ResumeInputs wide name={'주소'} />
                <ResumeInputs wide name={'SNS'} />
              </div>
              <div
                style={{
                  marginBottom: '10px',
                }}
              >
                <ResumeTitle>학력</ResumeTitle>
                <EducationItems>
                  <MyEducation>고등학교</MyEducation>
                  <ResumeInputs name={'학교명'} />
                  <ResumeInputs name={'문과/이과/예체능'} />
                  <ResumeInputs small name={'기간'} />
                </EducationItems>
                <EducationItems>
                  <MyEducation>대학교</MyEducation>
                  <ResumeInputs name={'학교명'} />
                  <ResumeInputs name={'전공'} />
                  <ResumeInputs small name={'기간'} />
                </EducationItems>
              </div>
              <div style={{ border: '1px solid black' }}>
                <ResumeTitle>자기소개</ResumeTitle>
                {/* <ResumeTextArea*/}
                {/*  id="content"*/}
                {/*  cols="96"*/}
                {/*  rows="3"*/}
                {/*  onKeyDown={calc}*/}
                {/*  onKeyUp={calc}*/}
                {/*  onKeyPress={calc}*/}
                {/* />*/}
                {/* <div style={{ textAlign: 'right' }}>*/}
                {/*  <TextAreaLength*/}
                {/*    id="result"*/}
                {/*    type="number"*/}
                {/*    value="0"*/}
                {/*    readOnly*/}
                {/*  />*/}
                {/* </div>*/}
                <TextAreaCombine cols="96" rows="3"></TextAreaCombine>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
