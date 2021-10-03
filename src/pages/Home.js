import React from 'react';
import styled from 'styled-components';

import '../assets/styles/home.scss';

import JEJU_LOGO from '../assets/images/Jeju.png';
import STONE_IMG from '../assets/images/돌하르방.png';

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
    </>
  );
};

export default Home;
