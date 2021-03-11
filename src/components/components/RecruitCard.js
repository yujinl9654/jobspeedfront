import React from 'react';
import styled from 'styled-components';
import * as PropTypes from 'prop-types';

const AnnounceBody = styled.div`
  position: relative;
  padding: 40px 100px;
`;

const AnnounceTitle = styled.h5`
  text-align: left;
  font-weight: bolder;
`;

const AnnounceJob = styled.div`
  text-align: left;
`;

const AnnounceDate = styled.div`
  position: absolute;
  right: 100px;
  top: 40px;
`;

const AnnounceTags = styled.ul`
  list-style: none;
  padding: 0px;
`;

const AnnounceTageList = styled.li`
  text-align: left;
  display: inline;
  float: left;
  margin-right: 10px;
`;

export default function RecruitCard(props) {
  const AnnounceTag = props.tags.map((tags) => {
    return (
      <AnnounceTags>
        <AnnounceTageList>{tags}</AnnounceTageList>
      </AnnounceTags>
    );
  });

  return (
    <AnnounceBody>
      <AnnounceTitle>{props.title}</AnnounceTitle>
      <AnnounceJob>{props.job}</AnnounceJob>
      <AnnounceDate className="text-muted">{props.date}</AnnounceDate>
      <div>{AnnounceTag}</div>
    </AnnounceBody>
  );
}

RecruitCard.defaultProps = {
  title: 'default title',
  job: 'default job',
  date: '1999.01.01~until filled',
  tags: ['c++', 'java', 'python'],
};

RecruitCard.propTyoes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.string,
  height: PropTypes.array,
};
