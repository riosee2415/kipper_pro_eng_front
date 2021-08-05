import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import { Image, RsWrapper, Wrapper, Text } from "../CommonComponents";
import EditorViewer from "../editor/EditorViewer";
import { useState } from "react";
import Theme from "../../Styles/Theme";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const Container = styled.div`
  width: 100%;
  height: 500px;

  position: relative;

  @media (max-width: 900px) {
    margin-top: 58px;
    height: 500px;
  }

  & .slider1 .slick-slide {
    text-align: center;
    height: 500px;
  }

  & .slider2 {
    height: 100px;
  }

  & .slider2 .slick-slide {
    text-align: center;
  }

  & .slider1 .slick-next,
  & .slider2 .slick-next {
    margin: 0 25px 0 0;
  }

  & .slider1 .slick-prev,
  & .slider2 .slick-prev {
    margin: 0 0 0 25px;
  }

  & .slider1 .slick-prev,
  & .slider1 .slick-next,
  & .slider2 .slick-prev,
  & .slider2 .slick-next {
    z-index: 999;
    color: #eee;
  }

  & .slider1 .slick-prev:before,
  & .slider1 .slick-next:before {
    content: "";
    position: absolute;
    top: 50%;
    width: 15px;
    height: 15px;
    font-size: 30px;
    color: #eee;
    border-top: 4px solid #eee;
  }

  & .slider2 .slick-prev:before,
  & .slider2 .slick-next:before {
    content: "";
    position: absolute;
    top: 50%;
    width: 10px;
    height: 10px;
    font-size: 30px;
    color: #eee;
    margin-top: -5px;
    border-top: 4px solid #eee;
  }

  & .slider2 .slick-prev:before {
    display: block;
    border-left: 4px solid #eee;
    transform: rotate(-45deg);
    left: 10px;
  }

  & .slider2 .slick-next:before {
    display: block;
    border-right: 4px solid #eee;
    transform: rotate(45deg);
    right: 10px;
  }

  & .slider1 .slick-next:before,
  & .slider1 .slick-prev:before {
    display: none;
  }

  & .slider2 .slick-list {
    margin-top: 25px;
  }

  &:hover {
    & .slider1 .slick-prev:before {
      display: block;
      border-left: 4px solid #eee;
      transform: rotate(-45deg);
      left: 10px;
    }
    & .slider1 .slick-next:before {
      display: block;
      border-right: 4px solid #eee;
      transform: rotate(45deg);
      right: 10px;
    }
  }
`;

const Country = styled(Text)`
  color: ${(props) => props.isActive && props.theme.white_C};

  &:hover {
    color: ${(props) => props.theme.white_C};
  }
`;

export default ({ width, exhibition, detailExhibition }) => {
  const [row, setRow] = useState(2);
  const [detail, setDetail] = useState("");
  const [viewData, setViewData] = useState("");
  const [isView, setIsView] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: false,
    autoplaySpeed: 1000,
    arrows: true,
    row,
  };

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: false,
    autoplaySpeed: 4000,
    arrows: true,
    row,
  };
  return (
    <Container>
      {isView === false ? (
        <Slider {...settings} className={`slider1`}>
          {detailExhibition &&
            detailExhibition.map((data, idx) => {
              return (
                <Wrapper height={`500px`} key={idx}>
                  <Image height={`100%`} src={data.filePath} />
                </Wrapper>
              );
            })}
        </Slider>
      ) : (
        <Slider {...settings} className={`slider1`}>
          {detail &&
            detail.map((data, idx) => {
              return (
                <Wrapper height={`500px`} key={idx}>
                  <Image height={`100%`} src={data.filePath} />
                </Wrapper>
              );
            })}
        </Slider>
      )}

      <Slider className={`slider2`} {...settings2}>
        {exhibition &&
          exhibition.map((data, idx) => {
            return (
              <Wrapper
                margin={`50px 0`}
                key={idx}
                onClick={() => {
                  setViewData(data);
                  setDetail(data.files);
                  setIsView(true);
                }}
              >
                <Country
                  color={Theme.greyTheme4_C}
                  isActive={data === viewData}
                  cursor={`pointer`}
                >
                  {data.title}
                </Country>
              </Wrapper>
            );
          })}
      </Slider>
    </Container>
  );
};
