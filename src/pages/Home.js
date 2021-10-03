import React from 'react';
import styled from 'styled-components';

import '../assets/styles/home.scss';

import JEJU_LOGO from '../assets/images/Jeju.png';
import STONE_IMG from '../assets/images/돌하르방.png';
import JEJU_JIDO from '../assets/images/제주지도.png';

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

      <main>
        <section>
          <h2>제주 쉬기좋은 지역별 안내</h2>
          <p>
            <img src={JEJU_JIDO} alt="제주도 지도" />
          </p>
          <ul>
            <li>
              <div></div>
              <div>
                <h2>
                  <span>01.</span> 제주 북동쪽
                </h2>
                <p>
                  다양하게 볼 것이 많은 지역이다. 제주의 산과 바다를 다양하게 만나볼 수 있고
                  두문포항을 통해 우도를 갔다오기에 매력적이다.
                </p>
                <p>추천명소: 비자림, 산궁부리, 다람쉬오룸</p>
              </div>
            </li>
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
