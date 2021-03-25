import React, { useState } from 'react';
import {
  StyledButton,
  StyledHeaderDiv,
  StyledLeftLayout,
  TagBody,
} from '../components/Styled';
import Tags from '../components/Tags';
import Post from '../components/Post';
import SideMenu from '../components/SideMenu';

export default function LikeList(props) {
  const [tags] = useState([
    { name: 'backEnd', id: 0, selected: false },
    { name: 'frontEnd', id: 1, selected: false },
    { name: 'machineLearning', id: 2, selected: false },
    { name: 'infra', id: 3, selected: false },
  ]);

  const dummy = () => {
    const dummyArr = [];

    for (let i = 0; i < 10; i++) {
      dummyArr.push({
        title: i + '번 제목',
        fav: i % 2 === 1,
        writer: i + '번 작성자',
        date: '2020-01-01',
        tags: ['backend', 'frontend'],
      });
    }
    return dummyArr;
  };

  const [dummyPost] = useState(dummy);

  const mapPost = dummyPost.map((post) => (
    <Post
      tags={post.tags}
      title={post.title}
      writer={post.writer}
      date={post.date}
      fav={post.fav}
      key={post.title}
    ></Post>
  ));

  return (
    <>
      <div className={'container'} style={{ marginTop: '100px' }}>
        <StyledHeaderDiv>
          <h1>찜목록</h1>
          <StyledButton last bottom>
            수정
          </StyledButton>
        </StyledHeaderDiv>
        <div
          className={'row justify-content-center'}
          style={{ marginTop: '-30px' }}
        >
          <StyledLeftLayout className={'col-12 col-lg-3 text-left'}>
            <SideMenu />
          </StyledLeftLayout>

          <div className={'col-12 col-lg-9'}>
            <div
              className={'text-right'}
              style={{
                position: 'relative',
                height: '60px',
              }}
            ></div>
            {mapPost}
          </div>
        </div>
      </div>
    </>
  );
}
