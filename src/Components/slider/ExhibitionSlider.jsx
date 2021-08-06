import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "rs-swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Controller,
  Thumbs,
  Autoplay,
} from "rs-swiper";
import { Image, RsWrapper, Text, Wrapper } from "../CommonComponents";
import { withResizeDetector } from "react-resize-detector";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "rs-swiper/swiper-bundle.min.css";
import styled from "styled-components";
import Theme from "../../Styles/Theme";

const ImageBox = styled(Image)`
  width: 100%;
  height: 500px;
  mix-blend-mode: luminosity;
  object-fit: none;
  cursor: pointer;

  @media (max-width: 700px) {
    width: 100%;
    height: 150px;
  }

  &:hover {
    mix-blend-mode: normal;
  }
`;

// install Swiper's Thumbs component
SwiperCore.use([Navigation, Pagination, Controller, Thumbs, Autoplay]);

const Container = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;

  .swiper-button-prev {
    @media (max-width: 700px) {
      left: 0 !important;
    }
  }

  .swiper-button-next {
    @media (max-width: 700px) {
      right: 0 !important;
    }
  }

  .swiper-button-next:after {
    color: ${Theme.white_C};

    @media (max-width: 700px) {
      font-size: 20px;
    }
  }

  .swiper-button-prev:after {
    color: ${Theme.white_C};
    @media (max-width: 700px) {
      font-size: 20px;
    }
  }

  .small .swiper-container {
    overflow: hidden !important;
    width: 100%;

    @media (max-width: 700px) {
      width: 375px !important;
    }
  }

  .small .swiper-slide {
    margin: 30px 0 0;
  }

  .swiper-slide {
    position: relative;
    text-align: center;

    /* &:before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      /* background-color: rgba(0, 0, 0, 0.5);
    } */
  }

  .swiper-slide-active:before,
  .small .swiper-slide:before {
    background-color: transparent;
  }

  .swiper-container {
    /* width: 900px; */
    overflow: inherit !important;

    @media (max-width: 700px) {
      width: 300px;

      overflow: hidden !important;
    }
  }

  .swiper-pagination {
    bottom: 0;
    padding-bottom: 10px;
  }

  .swiper-wrapper {
    padding-inline-start: 0;
  }

  @media (max-width: 700px) {
    .small {
      display: none;
    }
  }
`;

const ExhibitionSlider = ({
  width,
  //
  setPopup,
  setExhibition,
  setDetailExhibition,
  //
  eDatum,
}) => {
  // store thumbs swiper instance

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Container height={width < 700 ? `270px` : `1000px`}>
      <Swiper
        loop
        spaceBetween={width < 700 ? 5 : 10}
        slidesPerView={width < 700 ? 2 : 5}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        <Wrapper isRelative={true}>
          <Wrapper
            ref={prevRef}
            width={`auto`}
            isAbsolute={true}
            bottom={`50%`}
            left={`-30px`}
            display={width < 700 ? `flex` : `none`}
            zIndex={`8999999`}
          >
            <Image
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM15%2F%E1%84%8C%E1%85%A1%E1%84%85%E1%85%AD%E1%84%89%E1%85%B5%E1%86%AF-icon-2.png?alt=media&token=8feef21a-dafb-45a1-bdc3-70a2acc1f0b1`}
              width={`20px`}
            />
          </Wrapper>
          {eDatum &&
            eDatum.map((data, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <Wrapper
                    isRelative={true}
                    onClick={() => {
                      setPopup("전시회");
                      setExhibition(eDatum);
                      setDetailExhibition(data.files);
                    }}
                    bgColor={Theme.white_C}
                    width={`99%`}
                  >
                    <ImageBox src={data.thumbnailPath} alt={`Slide 0`} />
                    <Text
                      isAbsolute={true}
                      fontSize={width < 700 ? `14px` : `20px`}
                      bottom={width < 700 ? `8px` : `15px`}
                      left={width < 700 ? `14px` : `15px`}
                    >
                      {data.title}
                    </Text>
                  </Wrapper>
                </SwiperSlide>
              );
            })}
          <Wrapper
            ref={nextRef}
            width={`auto`}
            isAbsolute={true}
            bottom={`50%`}
            left={`-30px`}
            display={width < 700 ? `flex` : `none`}
            zIndex={`8999999`}
          >
            <Image
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM15%2F%E1%84%8C%E1%85%A1%E1%84%85%E1%85%AD%E1%84%89%E1%85%B5%E1%86%AF-icon-3.png?alt=media&token=7aa0d881-d244-45d5-8fa1-cde03169d9a2`}
              width={`20px`}
            />
          </Wrapper>
        </Wrapper>

        <Wrapper dr={`row`} ju={`flex-end`} margin={`50px 0 0`}>
          <Wrapper ref={prevRef} width={`auto`}>
            <AiOutlineLeft size={25} />
          </Wrapper>

          <Wrapper ref={nextRef} width={`auto`}>
            <AiOutlineRight size={25} />
          </Wrapper>
        </Wrapper>

        {/* <Wrapper
          dr={`row`}
          ju={`flex-end`}
          margin={`50px 0 0`}
          display={width < 700 ? `flex` : `none`}
        >
          <Wrapper ref={prevRef} width={`auto`}>
            <AiOutlineLeft size={25} />
          </Wrapper>

          <Wrapper ref={nextRef} width={`auto`}>
            <AiOutlineRight size={25} />
          </Wrapper>
        </Wrapper> */}
      </Swiper>
    </Container>
  );
};

export default withResizeDetector(ExhibitionSlider);
