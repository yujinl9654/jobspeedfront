import * as PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { CaretDownFill, X } from 'react-bootstrap-icons';
// import Line from './Line';

const TagBody = styled.div`
  position: relative;
  background-color: ${(props) => (!props.tagType ? '#f5df4d' : 'white')};
  ${(props) =>
    props.tagType &&
    css`
      border: #7c7c7c 1px solid;
    `};
  ${(props) =>
    !props.tagType &&
    css`
      color: #7c7c7c;
    `};
  padding: 7px 30px 0px;
  border-radius: 5px;
  //min-width: 125px;
  height: 38px;
  font-size: 15px;
  user-select: none;
  cursor: pointer;
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 10px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 13px;
    height: 28px;
    padding: 5px 25px 0px;
  }
`;
const TagText = styled.div`
  margin: auto;
`;

const TagDrop = styled.div`
  position: absolute;
  border-radius: 5px;
  top: 50px;
  left: 0px;
  background-color: white;
  //min-width: 125px;
  padding: 10px 30px 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
  font-weight: bold;
  text-align: left;
`;

const StyledCaretDownFill = styled(CaretDownFill)`
  position: absolute;
  right: 5px;
  top: 12px;
  @media (max-width: 768px) {
    top: 8px;
  }
`;

const StyledX = styled(X)`
  position: absolute;
  right: 9px;
  top: 11px;
  @media (max-width: 768px) {
    top: 8px;
  }
`;

const TagsInDrop = styled.div`
  margin-bottom: 4px;
`;

export default function Tags({ tagList, children }) {
  const [show, setShow] = useState(false);
  const [update, setUpdate] = useState(0);
  const dropRef = useRef();
  const ClickHandler = (e) => {
    if (dropRef.current) {
      if (show && !dropRef.current.contains(e.target)) setShow(false);
    }
  };

  useEffect(() => {
    addEventListener('click', ClickHandler, true);
    return () => {
      removeEventListener('click', ClickHandler, true);
    };
  });

  const TagToMap = tagList
    .filter((tags) => tags.selected)
    .map((tags) => {
      return (
        <TagBody
          key={tags.id}
          onClick={() => {
            tags.selected = false;
            setUpdate(update + 1);
          }}
        >
          <TagText>{tags.name}</TagText>
          <StyledX></StyledX>
        </TagBody>
      );
    });

  const TagToDrop = tagList
    .filter((tags) => !tags.selected)
    .map((tags) => {
      return (
        <span key={tags.id}>
          <TagsInDrop
            onClick={() => {
              tags.selected = true;
              setUpdate(update + 1);
            }}
          >
            {tags.name}
          </TagsInDrop>
          {/* {tags !== tagList[tagList.length - 1] && <Line />}*/}
        </span>
      );
    });

  return (
    <>
      <TagBody
        tagType
        onClick={() => {
          setShow(show !== true);
        }}
        ref={dropRef}
      >
        <TagText>{children}</TagText>
        <StyledCaretDownFill />
        {show && <TagDrop>{TagToDrop}</TagDrop>}
      </TagBody>
      {TagToMap}
    </>
  );
}

Tags.propTypes = {
  tagList: PropTypes.array,
};
