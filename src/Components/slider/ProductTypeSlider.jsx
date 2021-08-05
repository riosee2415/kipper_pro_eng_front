import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import { Image, RsWrapper, Wrapper, Text } from "../CommonComponents";

const Container = styled.div`
  width: 100%;
  height: 35px;
  position: relative;
  overflow: hidden;

  & .slick-slide {
    text-align: center;
  }
  & .slick-next {
    margin: 0 25px 0 0;
  }
  & .slick-prev {
    margin: 0 0 0 25px;
  }
  & .slick-prev,
  & .slick-next {
    z-index: 999;
    color: #eee;
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
    border-top: 4px solid #eee;
    border-right: 4px solid #eee;
    transform: rotate(45deg);
    position: absolute;
    right: 10px;
    top: 50%;
    margin-top: -7px;
  }
  & .slick-prev:before {
    content: "";
    display: block;
    width: 15px;
    height: 15px;
    border-top: 4px solid #eee;
    border-left: 4px solid #eee;
    transform: rotate(-45deg);
    position: absolute;
    left: 10px;
    top: 50%;
    margin-top: -7px;
    @media (max-width: 900px) {
      display: none;
    }
  }
`;

export default ({ width }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 4000,
    arrows: true,
  };

  return (
    <Container>
      <Slider {...settings}>
        <Wrapper>
          <Image
            alt="icon"
            width={`auto`}
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%20398.png?alt=media&token=145c178d-a351-496e-9f34-2d00f16679bb`}
          />
          <Text fontSize={`9px`} fontWeight={`300`}>
            USB
          </Text>
        </Wrapper>

        <Wrapper>
          <Image
            alt="icon"
            width={`auto`}
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%20396.png?alt=media&token=73465992-9401-4cd4-b7d3-20faf3c1efb9`}
          />
          <Text fontSize={`9px`} fontWeight={`300`}>
            USB
          </Text>
        </Wrapper>

        <Wrapper>
          <Image
            alt="icon"
            width={`auto`}
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%20397.png?alt=media&token=5cea9417-934b-4356-91ab-0dce355462ab`}
          />
          <Text fontSize={`9px`} fontWeight={`300`}>
            USB
          </Text>
        </Wrapper>
      </Slider>
    </Container>
  );
};
