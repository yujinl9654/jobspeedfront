import React from 'react';
import styled, { css } from 'styled-components';
// 버튼 컬러로 노란색 흰색 지정가능
const StyledButtonInside = styled.div`
  color: #7c7c7c;
  background-color: #f5df4d;
  border: 1px solid #f5df4d;
  border-radius: 5px;
  display: inline-block;
  padding: 5px 10px 5px;
  font-weight: bold;
  width: 100px;
  text-align: center;
  letter-spacing: 2px;
  margin: 10px;
  ${(props) =>
    props.top &&
    css`
      position: absolute;
      top: 0px;
    `}
  ${(props) =>
    props.bottom &&
    css`
      position: absolute;
      bottom: 0px;
    `}
  ${(props) =>
    props.vcenter &&
    css`
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    `}
  ${(props) =>
    props.hcenter &&
    css`
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    `}
  ${(props) =>
    props.last &&
    css`
      position: absolute;
      right: 0;
    `}
  
  &:hover {
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
    `}
  ${(props) =>
    props.wide &&
    css`
      width: 200px;
    `}
`;

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
  >
    {children}
  </StyledButtonInside>
);
// 흰색버튼 노란버튼과 중복존재

export default function Styled(props) {
  return <></>;
}
