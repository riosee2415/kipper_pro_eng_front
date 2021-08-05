import React, { useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import {
  Image,
  RsWrapper,
  Wrapper,
  Text,
  CommonButton,
} from "../CommonComponents";
import EditorViewer from "../editor/EditorViewer";
import { useEffect } from "react";
import Theme from "../../Styles/Theme";

export default ({ width }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 1500,
    slidesToShow: 4.4,
    slidesToScroll: 1,
    // autoplay: true,
    arrows: true,
    pauseOnHover: false,
    autoplaySpeed: 4000,

    responsive: [
      {
        breakpoint: 700, // 화면의 넓이가 600px 이상일 때
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 900, // 화면의 넓이가 320px 이상일 때
        settings: { slidesToShow: 3.5 },
      },
    ],
  };

  const Container = styled.div`
    width: 100%;
    height: 550px;
    margin: 84px 0;
    position: relative;
    overflow: hidden;

    @media (max-width: 900px) {
      margin-top: 58px;
      height: 500px;
    }

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 15%;
      height: 98%;
      z-index: 10;
      background: linear-gradient(to right, rgb(30, 30, 32), rgba(0, 0, 0, 0));

      @media (max-width: 700px) {
        display: none;
      }
    }

    &:after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: 15%;
      height: 98%;
      z-index: 10;
      background: linear-gradient(to left, rgb(30, 30, 32), rgba(0, 0, 0, 0));

      @media (max-width: 700px) {
        display: none;
      }
    }

    & .slick-slide {
      text-align: center;
    }
    & .slick-next {
      right: 240px !important;
      @media (max-width: 700px) {
        right: 36px !important;
      }
    }
    & .slick-prev {
      right: 280px !important;

      @media (max-width: 700px) {
        right: 70px !important;
      }
    }
    & .slick-prev,
    & .slick-next {
      z-index: 999;
      color: #eee;
    }

    & .slick-arrow {
      bottom: -100px !important;
      transition: none !important;
      top: auto !important;
      /* right: 0px !important; */
      left: auto !important;

      @media (max-width: 700px) {
        bottom: -50px !important;
      }
    }
    & .slick-prev:before,
    & .slick-next:before {
      color: #eee;
      font-size: 30px;
    }
    & .slick-next:before {
      content: "";
      display: block;
      width: 15px;
      height: 15px;
      border-top: 2px solid #eee;
      border-right: 2px solid #eee;
      transform: rotate(45deg);
      position: absolute;
      right: 10px;
      margin-top: -7px;
    }
    & .slick-prev:before {
      content: "";
      display: block;
      width: 15px;
      height: 15px;
      border-top: 2px solid #eee;
      border-left: 2px solid #eee;
      transform: rotate(-45deg);
      position: absolute;
      left: 10px;
      margin-top: -7px;
    }
  `;

  const HistoryWrapper = styled(Wrapper)`
    border-top: 2px solid ${(props) => props.theme.white_C};
    margin-top: 30px;
    position: relative;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 26px;
      height: 26px;
      margin-top: -13px;
      background: ${(props) => props.theme.blackTheme1_C};
      border-radius: 100%;
      border: 1px solid ${(props) => props.theme.white_C};

      @media (max-width: 700px) {
        left: 36px;
        width: 16px;
        height: 16px;
        margin-top: -8px;
      }
    }

    &.first:before {
      border: none;
    }

    @media (max-width: 700px) {
      padding-left: 36px;
    }
  `;

  const Title = styled(Wrapper)`
    font-size: 34px;
    font-weight: bold;
    margin: 50px 0 80px;

    @media (max-width: 700px) {
      font-size: 26px;
    }
  `;

  const Desc = styled(Text)`
    font-size: 17px;
    color: ${(props) => props.theme.lightGrey_C};
    line-height: 2;
    font-weight: 300;

    @media (max-width: 700px) {
      font-size: 16px;
    }
  `;

  const slideRef = useRef();

  const [currentState, setCurrentState] = useState(0);

  const goToSlideHandler = (index) => {
    const data = currentState + index;

    console.log(data, slideRef);

    slideRef.current.slickNext();

    setCurrentState(data);
  };

  useEffect(() => {
    slideRef.current.slickGoTo(3);
  }, []);

  return (
    <Container>
      <Slider {...settings} ref={slideRef}>
        {width < 700 ? null : (
          <HistoryWrapper className={`first`}>
            {/* 빈화면 */}
            <Title al={`flex-start`} color={`transparent`}>
              Now - 2018
            </Title>
          </HistoryWrapper>
        )}

        <HistoryWrapper>
          <Title al={`flex-start`}>Now - 2018</Title>
          <Wrapper al={`flex-start`}>
            <Desc>C-Type Lock개발 (총35개 제품 라인업)</Desc>
            <Desc>국내외 총 29건의 특허 및 상표 등록</Desc>
            <Desc>미국/독일외 12개국 수출실적</Desc>
            <Desc>so9001, iso14001 인증</Desc>
            <Desc>대한민국 중소기업 유공자 대통령표창 수상</Desc>
            <Desc>신사옥(R&#38;D Center, 1공장) 준공</Desc>
          </Wrapper>
        </HistoryWrapper>
        <HistoryWrapper>
          <Title al={`flex-start`}>2017-2014</Title>
          <Wrapper al={`flex-start`}>
            <Desc>2015 대한민국 특허기술상 수상</Desc>
            <Desc>2016 우수특허대상 수상 (한국일보, 변리사협회)</Desc>
            <Desc>링크락, 랜케이블락, PC락 등 출시</Desc>
            <Desc>국내외 공공기관 300여개 사이트 도입</Desc>
            <Desc>미국 ISC East 2015등 해외전시 5회참가, 호평</Desc>
            <Desc>미국 조달업체등록</Desc>
            <Desc>50여곳 이상의 언론보도와 보안우수사례 소개</Desc>
          </Wrapper>
        </HistoryWrapper>
        <HistoryWrapper>
          <Title al={`flex-start`}>2013-2010</Title>
          <Wrapper al={`flex-start`}>
            <Desc>USB포트락 개발</Desc>
            <Desc>시스템물리보안연구소’ 설립</Desc>
            <Desc>USB포트락, 키보드/마우스락 개발</Desc>
            <Desc>세계보안엑스포 초청부스로 참가</Desc>
            <Desc>미국 현지법인 설립</Desc>
            <Desc>싱가폴정부 도입적용</Desc>
          </Wrapper>
        </HistoryWrapper>
        <HistoryWrapper>
          <Title al={`flex-start`}>2009-2006</Title>
          <Wrapper al={`flex-start`}>
            <Desc>헤럴드경제 품질경쟁력 우수기업,</Desc>
            <Desc>한국경제 유망아이템 소개</Desc>
            <Desc>美 지니소프트사와 백업소프트</Desc>
            <Desc>디스트리뷰터계약</Desc>
            <Desc>HP Best Partner, HP Solution</Desc>
            <Desc>Center 선정</Desc>
          </Wrapper>
        </HistoryWrapper>
      </Slider>

      {/* <Wrapper dr={`row`} ju={`flex-end`}>
        <CommonButton onClick={() => goToSlideHandler(-1)}>&lt;</CommonButton>
        <CommonButton onClick={() => goToSlideHandler(+1)}>&gt;</CommonButton>
      </Wrapper> */}
    </Container>
  );
};
