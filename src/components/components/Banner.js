import React from 'react';
import styled from 'styled-components';
import BannerImg from './img/img.png';

const Jumbo = styled.div`
  left: -1px;
  top: 0;
  padding: 0;
`;

const Img = styled.img`
  width: 101%;
  height: 100%;
  margin: 0;
  object-fit: contain;
`;

export default function Banner(props) {
  return (
    <div className="container-fluid" style={{ padding: 0, marginTop: '59px' }}>
      <Jumbo className="jumbotron">
        {/* <h1 className="display-5">speed jobs</h1>*/}
        <Img src={BannerImg} />
      </Jumbo>
    </div>
  );
}
