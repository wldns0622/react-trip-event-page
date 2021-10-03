import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import dotenv from 'dotenv';
import axios from 'axios';
import fakeData from '../fakeData';

import Post from '../components/Post';

import '../assets/styles/home.scss';

import JEJU_LOGO from '../assets/images/Jeju.png';
import STONE_IMG from '../assets/images/돌하르방.png';
import JEJU_JIDO from '../assets/images/제주지도.png';
dotenv.config();

const Header = styled.header`
  width: 416px;
  background-color: #fef8ea;
  img {
    margin-top: 18px;
  }
`;

const Container = styled.div`
  padding: 32px 48px 0 48px;
  text-align: center;
  .logo {
    font-family: $mainFont;
    font-weight: bold;
    text-align: left;
    color: #23672a;
  }
`;

const Home = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    setPost([...fakeData.locations]);
    // axios.get(`${process.env.REACT_APP_MOCK_SERVER}/trips`).then((res) => {
    //   console.log(res);
    //   setPost([...res.data]);
    // });
  }, []);

  return (
    <>
      <Header>
        <Container>
          <p className="logo">COTRIP</p>
          <div class="title-container">
            <h1>인생제주</h1>
            <p>쉬고 싶으면? 제주!인생 사진도? 제주!</p>
            <img src={JEJU_LOGO} alt="" width="125px" />
          </div>
        </Container>
        <img src={STONE_IMG} alt="돌하르방" />
      </Header>

      <main>
        <section>
          <h2>제주 쉬기좋은 지역별 안내</h2>
          <p>
            <img src={JEJU_JIDO} alt="제주도 지도" />
          </p>
          <ul>
            {post?.map((post) => {
              return <Post key={post.id + post.title} post={post} />;
            })}
          </ul>
        </section>
        <section>
          <h2># 내가 원하는 제주 여행은?</h2>
          <nav>
            <ul>
              <li>#자연#힐링</li>
              <li>#활동#재미</li>
              <li>#가족#아이</li>
            </ul>
          </nav>
          <ul></ul>
        </section>
      </main>
    </>
  );
};

export default Home;
