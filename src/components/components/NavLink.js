import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import * as PropTypes from 'prop-types';
// 메인이 아닐경우 밑줄 x
// props => to:string main:bool
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #707070;
  font-size: 13px;
  position: relative;
  margin-right: 60px;
  margin-left: 38px;
  letter-spacing: 0.15em;
  ${(props) =>
    props.main &&
    css`
      color: white;
    `}
  &:hover {
    text-decoration: none;
    color: white;
  }
  @media (max-width: 768px) {
    ${(props) =>
      !props.main &&
      css`
        display: none;
      `}
    ${(props) =>
      props.main &&
      css`
        margin: 0 0 0 0;
      `}
  }

  ${(props) =>
    !props.main &&
    css`
      &:before {
        content: '';
        width: 100%;
        position: absolute;
        height: 2px;
        left: 0;
        bottom: -5px;
        background-color: #707070;
        transform: scaleX(0);
        transition: all 300ms ease-in-out 0s;
      }

      &:hover:before {
        transform: scaleX(1);
      }
    `}

  ${(props) =>
    props.main &&
    css`
      font-family: 'Quicksand', sans-serif;
      font-weight: bold;
      font-size: 18px;
    `}
`;

export default function NavLink(props) {
  return (
    <StyledLink to={props.to} main={props.main}>
      {props.children}
    </StyledLink>
  );
}

NavLink.defaultProps = {
  to: '/',
  main: null,
};

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  main: PropTypes.string,
};
