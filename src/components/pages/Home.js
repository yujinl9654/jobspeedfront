import React from 'react';
import styled from 'styled-components';
import TitleCards from './home/TitleCards';
import AnnounceCard from './home/AnnounceCard';
import Banner from '../components/Banner';

const Container = styled.div`
  background-color: #d3d3d3;
  padding-top: 40px;
`;

export default function Home(props) {
  return (
    <Container>
      <div className="container">
        <Banner></Banner>
        {/* 타이틀*/}
        <TitleCards></TitleCards>
        {/* 공고*/}
        <AnnounceCard></AnnounceCard>
      </div>
    </Container>
  );
}
