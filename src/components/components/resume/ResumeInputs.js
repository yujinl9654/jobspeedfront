import React from 'react';
import styled, { css } from 'styled-components';

const ResumeItems = styled.div`
  margin-bottom: 5px;
`;

const ResumeTitles = styled.div`
  margin-bottom: 5px;
`;

const InputTextResume = styled.input`
  width: 200px;
  height: 35px;
  border-radius: 27px;
  margin-bottom: 5px;
  border: 1px solid silver;
  padding: 0 20px 3px;

  ${(props) =>
    props.wide &&
    css`
      width: 100%;
    `}
  ${(props) =>
    props.small &&
    css`
      width: 380px;
    `}
  &:focus {
    outline: none;
  }
`;

const Wrapper = styled.div`
  display: inline-block;
  ${(props) =>
    props.wide &&
    css`
      display: block;
      padding-left: 30px;
      padding-right: 70px;
    `}
`;

export default function ResumeInputs({ wide, name, small }) {
  return (
    <Wrapper wide={wide}>
      <ResumeItems>
        <ResumeTitles>&nbsp;{name}</ResumeTitles>
        <InputTextResume wide={wide} small={small} type="text" />
      </ResumeItems>
    </Wrapper>
  );
}
