import React from 'react';
import { StyledButton } from '../components/Styled';

export default function RecruitmentDetail(props) {
  return (
    <>
      <div
        className={'container'}
        style={{
          padding: '50px 0px 0px',
          textAlign: 'left',
        }}
      >
        {/* 제목 지원 찜하기 */}
        <div
          className={'row'}
          style={{
            borderBottom: '1px solid #7c7c7c',
            padding: '20px',
            position: 'sticky',
            top: '0',
          }}
        >
          <div className={'col-8'}>
            <h1>더미제목</h1>
          </div>
          <div className={'col-3'}>
            <StyledButton mid hcenter bottom>
              지원
            </StyledButton>
          </div>
          <div className={'col-1'}>
            <StyledButton bottom last white>
              찜하기
            </StyledButton>
          </div>
        </div>
        {/* 제목 end*/}
        {/* 본문*/}
        <div className={'row'}>
          <div className={'col-7'}>
            {/* 요약정보*/}
            <div
              className={'row'}
              style={{
                display: 'block',
                borderBottom: '1px solid #7c7c7c',
                padding: '14px',
              }}
            >
              <p>요약</p>
              <p>직무 : 백엔드 프론트엔드</p>
              <p>고용형태 : 정규직</p>
              <p>경력 : 경력무관</p>
              <p>회사규모 : 100명</p>
              <p>주요서비스 : 앱개발</p>
              <p>채용기간 : 상시채용</p>
            </div>
            {/* 업무소개*/}
            <div className={'row'} style={{ padding: '14px' }}>
              안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
              안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
              안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
              안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
              안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
              안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
              안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
              안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
              안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
              안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
              안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
              안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
            </div>
          </div>
          {/* 요약 end*/}
          {/* 채팅컴포넌트*/}
          <div className={'col-5'} style={{ padding: '15px 5px 0px' }}>
            <div
              style={{
                width: '100%',
                height: '650px',
                backgroundColor: '#7c7c7c',
              }}
            >
              채팅
            </div>
          </div>
        </div>
        <StyledButton hcenter wide>
          지원
        </StyledButton>
        {/* 본문end*/}
      </div>
    </>
  );
}
