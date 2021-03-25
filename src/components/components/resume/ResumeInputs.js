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
  border: 1px solid silver;
  padding: 0 20px 3px;
  margin: 0 10px 5px 0;

  ${(props) =>
    props.wide &&
    css`
      width: 790px;
    `}
  ${(props) =>
    props.small &&
    css`
      width: 360px;
    `}
  &:focus {
    outline: none;
  }

  @media (max-width: 992px) {
    ${(props) =>
      props.wide &&
      css`
        width: 700px;
      `}
    ${(props) =>
      props.small &&
      css`
        width: 300px;
      `}
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
