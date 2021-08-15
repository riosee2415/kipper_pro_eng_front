import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "rs-swiper/react";
import SwiperCore from "rs-swiper";
import { Wrapper } from "../CommonComponents";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "rs-swiper/swiper-bundle.min.css";
import styled from "styled-components";
import Theme from "../../Styles/Theme";
import { useEffect } from "react";
import { withResizeDetector } from "react-resize-detector";

const Container = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  height: ${(props) => props.height};

  .swiper-slide {
    position: relative;
    text-align: center;
  }
`;

const ProductImageSlider = ({
  width,
  currentColorImage,
  setCurrentColorImage,
  currentColorImages,
}) => {
  const [slidesPerView, setSlidesPerView] = useState(5);

  useEffect(() => {
    if (width > 900) {
      setSlidesPerView(5);
    } else if (width > 700) {
      setSlidesPerView(4);
    } else {
      setSlidesPerView(5);
    }
  }, [width]);

  return (
    <Container height={width < 390 ? `35px` : `60px`}>
      {currentColorImages &&
        currentColorImage &&
        (currentColorImages.length - 1 >= slidesPerView ? (
          <Swiper loop spaceBetween={10} slidesPerView={slidesPerView}>
            {currentColorImages.map((data) => {
              if (currentColorImage._id === data._id) return;

              return (
                <SwiperSlide key={data._id}>
                  <Wrapper
                    width={width < 390 ? `50px` : `90px`}
                    margin={width < 390 ? `0 14px 0 0` : `0 30px 0 0`}
                    height={width < 390 ? `35px` : `60px`}
                    bgImg={`url('${data.imagePath}')`}
                    attachment={`initial`}
                    cursor={`pointer`}
                    onClick={() => setCurrentColorImage(data)}
                  ></Wrapper>
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : (
          <Wrapper dr={`row`} ju={`flex-start`}>
            {currentColorImages.map((data) => {
              if (currentColorImage._id === data._id) return;

              return (
                <Wrapper
                  key={data._id}
                  width={width < 390 ? `50px` : `90px`}
                  margin={width < 390 ? `0 14px 0 0` : `0 30px 0 0`}
                  height={width < 390 ? `35px` : `60px`}
                  bgImg={`url('${data.imagePath}')`}
                  attachment={`initial`}
                  cursor={`pointer`}
                  onClick={() => setCurrentColorImage(data)}
                ></Wrapper>
              );
            })}
          </Wrapper>
        ))}
    </Container>
  );
};

export default ProductImageSlider;
