import React from 'react';
import styled from 'styled-components';
import BannerImg from './img/banner.jpg';

const Jumbo = styled.div`
  padding: 0;
  border-radius: 15px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  margin: 0;
  object-fit: contain;
  border-radius: 15px;
`;

export default function Banner(props) {
  return (
    <Jumbo className="jumbotron">
      {/* <h1 className="display-5">speed jobs</h1>*/}
      <Img src={BannerImg} />
    </Jumbo>
  );
}
