import React from 'react';
import styled from 'styled-components';
import Banner from '../components/Banner';
import RecruitCard from '../components/RecruitCard';

const RecruitContent = styled.div`
  border-radius: 15px;
  background-color: white;
`;

export default function Recruitment(props) {
  const dummy = () => {
    const dummyData = [];

    for (let i = 0; i < 10; i++) {
      dummyData[i] = {};
      dummyData[i].title = i + '번 더미 데이터';
      dummyData[i].job = i + '번 더미 데이터 JOB';
      dummyData[i].date = '1999.01.01~2021.06.01';
      dummyData[i].tag = ['c++', '자바', 'java'];
    }
    return dummyData;
  };

  const dummyOut = dummy().map((temp) => {
    return (
      <>
        <RecruitCard
          title={temp.title}
          date={temp.date}
          job={temp.job}
          tags={temp.tag}
        ></RecruitCard>
        <hr className="solid" style={{ margin: '10px' }}></hr>
      </>
    );
  });

  return (
    <div className="container">
      <Banner></Banner>
      <RecruitContent>{dummyOut}</RecruitContent>
    </div>
  );
}
