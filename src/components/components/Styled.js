import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
// 버튼 컬러로 노란색 흰색 지정가능
const StyledButtonInside = styled.div`
  color: #7c7c7c;
  background-color: #f5df4d;
  border: 1px solid #f5df4d;
  border-radius: 5px;
  display: inline-block;
  padding: 5px 10px 5px 12px;
  font-weight: bold;
  width: 100px;
  letter-spacing: 2px;
  text-align: center;
  margin: 10px;
  cursor: pointer;
  user-select: none;
  @media (max-width: 1200px) {
    width: 100px;
    font-size: 13px;
  }
  @media (max-width: 992px) {
    width: 70px;
    font-size: 13px;
  }
  @media (max-width: 576px) {
    width: 60px;
    font-size: 10px;
  }
  ${(props) =>
    props.sm &&
    css`
      width: fit-content;
      font-size: 13px;
    `}
  ${(props) =>
    props.first &&
    css`
      position: absolute;
      left: 0px;
    `}
  ${(props) =>
    props.top &&
    css`
      position: absolute;
      top: 0px;
    `} ${(props) =>
    props.bottom &&
    css`
      position: absolute;
      bottom: 0px;
    `} ${(props) =>
    props.vcenter &&
    css`
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    `} ${(props) =>
    props.hcenter &&
    css`
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    `} ${(props) =>
    props.last &&
    css`
      position: absolute;
      right: 0;
    `} &:hover {
    background-color: #f2d411;
  }
  //흰색일경우
  ${(props) =>
    props.white &&
    css`
      color: #7c7c7c;
      background-color: white;
      border: 1px solid #7c7c7c;
      &:hover {
        color: white;
        background-color: #7c7c7c;
      }
    `}
  ${(props) =>
    props.mid &&
    css`
      width: 150px;
      @media (max-width: 1200px) {
        width: 120px;
      }
      @media (max-width: 992px) {
        width: 100px;
      }
    `}
  
  ${(props) =>
    props.wide &&
    css`
      width: 150px;
      @media (max-width: 1200px) {
        width: 150px;
      }
      @media (max-width: 992px) {
        width: 120px;
      }
      @media (max-width: 576px) {
        width: 100px;
        font-size: 11px;
      }
    `}
`;

// 헤더: 모바일 환경에선 보통 헤더이나 태블릿 pc 환경에서는 sticky 로 동작한다
// fixed 로변경
// Todo 텍스트 수직 중간
export const StyledHeaderDivInside = styled.div`
  //border-bottom: 1px solid #eee;
  padding: 20px 0px 5px 0px;
  background-color: white;
  z-index: 1;
  margin-bottom: 50px;
  position: sticky;
  top: 60px;
  //vertical-align: middle;
  //@media (min-width: 768px) {
  //  position: sticky;
  //  top: 60px;
  //}
  h1 {
    font-size: 20px;
  }
  @media (max-width: 992px) {
    padding: 5px 0px 0px 0px;
  }

  ${(props) =>
    props.padding &&
    css`
      padding: 40px 0px 0px 230px;
      @media (max-width: 992px) {
        padding-left: 0px;
      }
    `}
`;

export const StyledHeaderDiv = ({ children, padding }) => (
  <>
    <StyledHeaderDivInside padding={padding}>
      <div style={{ borderBottom: '1px solid #eee ', paddingBottom: '20px' }}>
        {children}
      </div>
    </StyledHeaderDivInside>
  </>
);

export const StyledButton = ({
  children,
  top,
  bottom,
  vcenter,
  hcenter,
  last,
  white,
  mid,
  wide,
  sm,
  first,
  style,
  onClick,
}) => (
  <StyledButtonInside
    top={top}
    bottom={bottom}
    vcenter={vcenter}
    hcenter={hcenter}
    last={last}
    white={white}
    mid={mid}
    wide={wide}
    sm={sm}
    first={first}
    style={style}
    onClick={onClick}
  >
    {children}
  </StyledButtonInside>
);

// 태그바디

const TagBodyInside = styled.div`
  position: relative;
  //tagType 일경우 드롭다운 박스 색이나옴
  color: #7c7c7c;
  background-color: ${(props) => (!props.tagType ? '#f5df4d' : 'white')};

  ${(props) =>
    props.grey &&
    css`
      background-color: #7c7c7c;
      color: white;
    `}
  ${(props) =>
    props.tagType &&
    css`
      border: #7c7c7c 1px solid;
      color: black;
    `};
  border-radius: 5px;
  //min-width: 125px;
  height: 38px;
  font-size: 15px;
  user-select: none;
  cursor: pointer;
  display: inline-flex;
  flex-direction: row;
  margin-right: 10px;
  margin-bottom: 10px;
  text-align: center;
  vertical-align: middle;
  width: fit-content;
  padding: 0px 13px 0px;
  @media (max-width: 768px) {
    font-size: 13px;
    height: 28px;
  }

  //태그 크기조절 sm
  ${(props) =>
    props.sm &&
    css`
      height: 25px;
      font-size: 13px;
    `}
  ${(props) =>
    props.tagType &&
    css`
      display: flex;
    `}
`;

export const TagText = styled.div`
  margin: auto;
`;

// 찜박스 메인컨텐츠가 컨테이너일경우 left 값 계산
// 공간이 충분하지 않을경우 사라지고 충분할경우 다시 생김
export const StyledLike = styled.div`
  position: fixed;
  top: 260px;
  width: 50px;
  border-radius: 15px;
  height: 100px;
  background-color: white;
  border: grey 1px solid;
  display: none;

  @media (min-width: 576px) {
    display: none;
  }
  @media (min-width: 675px) {
    left: calc((100% - 540px) / 2 - 50px);
    display: block;
  }
  @media (min-width: 768px) {
    display: none;
  }
  @media (min-width: 878px) {
    left: calc((100% - 720px) / 2 - 60px);
    display: block;
  }
  @media (min-width: 992px) {
    display: none;
  }
  @media (min-width: 1100px) {
    left: calc((100% - 960px) / 2 - 60px);
    display: block;
  }
  @media (min-width: 1200px) {
    display: none;
  }

  @media (min-width: 1300px) {
    left: calc((100% - 1140px) / 2 - 70px);
    display: block;
  }
`;
export const TagBody = ({ sm, children, tagType, onClick, grey }) => (
  <TagBodyInside sm={sm} tagType={tagType} onClick={onClick} grey={grey}>
    <TagText>{children}</TagText>
  </TagBodyInside>
);

// 왼쪽레이아웃 작아질경우 오른쪽 보더 선 삭제
const StyledLeftLayoutInside = styled.div`
  border-right: 1px solid #eee;
  //border-right: 1px solid #eee;
  @media (max-width: 992px) {
    border: none;
    display: none;
  }
  ${(props) =>
    props.borderNone &&
    css`
      border: none;
    `}
`;

export const StyledLeftLayout = ({ borderNone, children, className }) => (
  <StyledLeftLayoutInside borderNone={borderNone} className={className}>
    {children}
  </StyledLeftLayoutInside>
);

// Profile Styled
export default function Styled(props) {
  return <></>;
}

// Profile Styled
export const ProfileItems = styled.div`
  margin-bottom: 40px;
`;
export const ProfileTitles = styled.div`
  margin-bottom: 15px;
`;
export const RequiredItems = styled.span`
  color: red;
`;
export const InputText = styled.input`
  width: 100%;
  height: 35px;
  border-radius: 27px;
  margin-bottom: 10px;
  border: 1px solid silver;
  padding: 0 20px 3px;

  &:focus {
    outline: none;
  }
`;
export const TextArea = styled.textarea`
  width: 100%;
  border-radius: 27px;
  border: 1px solid silver;
  resize: none;
  padding: 10px 20px 3px;

  &:focus {
    outline: none;
  }
`;
export const TextAreaLength = styled.input`
  position: relative;
  top: -40px;
  right: 10px;
  width: 45px;
  border: none;
  text-align: right;
  background-color: rgba(0, 0, 0, 0);
  color: silver;

  &:focus {
    outline: none;
  }
`;

export const TextAreaCombine = ({ cols, rows }) => {
  const [textLength, setTextLength] = useState('');
  const [result, setResult] = useState(0);

  function calc() {
    setResult(textLength.length);
  }

  const onChangeHandler = (e) => {
    if (e.target.value.length <= 500) {
      setTextLength(e.target.value);
    } else alert('500자 이내로 작성해주세요');
  };

  return (
    <div className={'container-fluid'} style={{ padding: '0px 58px 0px 30px' }}>
      <TextArea
        id="content"
        cols={cols}
        rows={rows}
        value={textLength}
        onChange={(e) => onChangeHandler(e)}
        onKeyPress={calc}
        onKeyDown={calc}
        onKeyUp={calc}
      ></TextArea>
      <div style={{ textAlign: 'right' }}>
        <TextAreaLength
          id="result"
          type="number"
          value={result}
          readOnly
        ></TextAreaLength>
      </div>
    </div>
  );
};

// SideMenu Styled
export const MyButton = styled.div`
  border: #707070;
  height: 50px;
  text-align: center;
  padding-top: 10px;
`;

export const MyLink = styled(Link)`
  color: #8c8c8c;
  text-decoration: none;

  &:hover {
    color: black;
  }
`;

export const MySideMenu = styled.div`
  position: relative;
  top: -100px;
  width: 150px;
  border: 0.5px solid silver;
  border-radius: 10px;
  padding: 15px 15px;
  z-index: 1;
  @media (max-width: 992px) {
    display: none;
  }
`;

export const MyHr = styled.hr`
  margin: 8px 0px;
`;

// Profile Image
export const ProfileImg = styled.div`
  text-align: center;
  line-height: 200px;
`;
export const MyImage = styled.img`
  width: 200px;
  height: 200px;
  border: 1px solid black;
  border-radius: 50%;
  margin: 0 auto;
`;
export const CenterConatainer = styled.div`
  min-width: 320px;
  max-width: 544px;
  border: 1px solid #d3d3d3;
  border-radius: 15px;
  margin-top: 100px;
`;
export const StyledArticle = styled.div`
  padding-left: 60px;
  @media (max-width: 992px) {
    padding-left: 0px;
  }
`;
