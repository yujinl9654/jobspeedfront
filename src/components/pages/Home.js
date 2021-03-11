import React from 'react';
import TitleCards from './home/TitleCards';
import AnnounceCard from './home/AnnounceCard';
import Banner from '../components/Banner';

export default function Home(props) {
  return (
    <div className="container">
      <Banner></Banner>
      {/* 타이틀*/}
      <TitleCards></TitleCards>
      {/* 공고*/}
      <AnnounceCard></AnnounceCard>
    </div>
  );
}
