import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  StyledButton,
  StyledHeaderDiv,
  StyledLeftLayout,
  TextAreaCombine,
} from '../components/Styled';
import SideMenu from '../components/SideMenu';
import ResumeInputs from '../components/resume/ResumeInputs';
import Tags from '../components/Tags';

const ResumeTitle = styled.div`
  margin-bottom: 15px;
  font-size: 25px;
`;

const Warning = styled.span`
  margin-left: 20px;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: -1px;
  @media (max-width: 992px) {
    font-size: 10px;
  }
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
  @media (max-width: 992px) {
    margin: 0;
  }
`;

const MyEducation = styled.div`
  font-size: 15px;
  margin-bottom: 10px;
  font-weight: bold;
`;

const EducationItems = styled.div`
  padding-left: 30px;
`;

const CareerItems = styled.div`
  padding-left: 30px;
`;

export default function Resume(props) {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const [tags] = useState([
    { name: '#C', id: 0, selected: false },
    { name: '#C++', id: 1, selected: false },
    { name: '#JAVA', id: 2, selected: false },
    { name: '#Python', id: 3, selected: false },
  ]);

  return (
    <form>
      <div className="container text-left">
        <StyledHeaderDiv padding style={{ position: 'relative' }}>
          <div className={'container row justify-content-end'}>
            <div
              className={'col-md-9 col-8'}
              style={{ marginTop: '14px', paddingTop: '5px' }}
            >
              <h5>이력서</h5>
            </div>
            <div className={'col-md-3 col-4 text-right'}>
              <StyledButton wide>수정</StyledButton>
            </div>
          </div>
        </StyledHeaderDiv>
        <div style={{ marginTop: '100px' }}>
          <div
            className="row justify-content-center"
            style={{
              border: '1px solid black',
            }}
          >
            <StyledLeftLayout className={'col-12 col-lg-2 text-left'}>
              <SideMenu />
            </StyledLeftLayout>
            <div
              className={'col-12 col-lg-10'}
              style={{
                border: '1px solid black',
              }}
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
                <div className={'col-12 col-md-4'}>
                  {/* 이름 */}
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
                  marginBottom: '30px',
                }}
              >
                <ResumeInputs wide name={'주소'} />
                <ResumeInputs wide name={'SNS'} />
              </div>
              <div
                style={{
                  marginBottom: '30px',
                }}
              >
                <ResumeTitle>
                  학력
                  <Warning>
                    <span
                      style={{
                        fontSize: '17px',
                      }}
                    >
                      +
                    </span>
                    &nbsp;&nbsp;버튼을 누르면 추가할 수 있습니다.
                  </Warning>
                </ResumeTitle>
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
              <div
                style={{
                  marginBottom: '30px',
                }}
              >
                <ResumeTitle>
                  경력{' '}
                  <Warning>
                    <span
                      style={{
                        fontSize: '17px',
                      }}
                    >
                      +
                    </span>
                    &nbsp;&nbsp;버튼을 누르면 추가할 수 있습니다.
                  </Warning>
                </ResumeTitle>
                <CareerItems>
                  <ResumeInputs name={'회사명'} />
                  <ResumeInputs name={'직무'} />
                  <ResumeInputs small name={'기간'} />
                </CareerItems>
                <CareerItems>
                  <ResumeInputs name={'회사명'} />
                  <ResumeInputs name={'직무'} />
                  <ResumeInputs small name={'기간'} />
                </CareerItems>
              </div>
              <div
                style={{
                  marginBottom: '10px',
                }}
              >
                <ResumeTitle>
                  자기소개
                  <Warning>자유양식으로 500자 이내로 작성해주세요</Warning>
                </ResumeTitle>
                <TextAreaCombine cols="96" rows="10"></TextAreaCombine>
              </div>
              <div>
                <ResumeTitle>
                  Skill <Warning>자신있는 언어를 선택해주세요</Warning>
                </ResumeTitle>
                <Tags tagList={tags}>Language</Tags>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
