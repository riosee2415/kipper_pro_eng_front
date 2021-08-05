import React, { useEffect, useState } from "react";
import withSplitting from "../../../Lib/withSplitting";
import {
  WholeWrapper,
  Wrapper,
  Image,
  RsWrapper,
  Text,
  SpanText,
} from "../../../Components/CommonComponents";
import styled from "styled-components";
import { withResizeDetector } from "react-resize-detector";
import useTitle from "@4leaf.ysh/use-title";
import Theme from "../../../Styles/Theme";
import AnimatedNumber from "animated-number-react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ArrowIcon = styled(Text)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 2px;
    background-color: ${Theme.greyTheme4_C};
    transition: 0.5s;
  }

  &:hover:before {
    width: 100%;
  }

  & svg {
    font-size: 16px;
    margin-left: 5px;

    @media (max-width: 700px) {
      font-size: 14px;
    }
  }

  @media (max-width: 700px) {
    font-size: 14px;
  }
`;

const MM17Presenter = ({
  width,
  //
  documentRef,
  tempRef,
  temp2Ref,
  temp3Ref,
  temp4Ref,
  temp5Ref,
  temp6Ref,
  temp7Ref,
  temp8Ref,
  temp9Ref,
  temp10Ref,
}) => {
  useTitle(`USB보안의 완성 | ${process.env["HOMEPAGE_NAME"]}`);

  const [pageY, setPageY] = useState(0);
  const [testTop, setTestTop] = useState(90);
  const [image1Margin, setImage1Margin] = useState(40);
  const [image2Margin, setImage2Margin] = useState(0);
  const [scale1, setScale1] = useState(1.8);
  const [scale2, setScale2] = useState(1.5);
  const [isFirst, setIsFirst] = useState(false);
  const [isView, setIsView] = useState(0);
  const [image, setImage] = useState(`01`);
  const [isStart, setIsStart] = useState(true);
  const [isStart2, setIsStart2] = useState(true);
  const handleScroll = () => {
    const { pageYOffset } = window;

    const tempHeight = tempRef.current.offsetHeight;
    const temp2Height = temp2Ref.current.offsetHeight;
    const temp3Height = temp3Ref.current.offsetTop;
    const temp4Height = temp4Ref.current.offsetTop;
    const temp5Height = temp5Ref.current.offsetTop;
    const temp6Height = temp6Ref.current.offsetTop;
    const temp8Height = temp8Ref.current.offsetTop;

    if (
      pageYOffset > tempHeight &&
      pageYOffset < tempHeight + temp2Height + 200
    ) {
      if (testTop - 15 < 8 && pageY < pageYOffset) {
        setTestTop(10);
        setScale1(1);
      } else if (pageY > pageYOffset && testTop + 15 <= 90) {
        setTestTop(testTop + 15);
        setScale1(scale1 + 0.1);
      } else {
        setTestTop(testTop - 15);
        setScale1(scale1 - 0.1);
      }
    }

    if (pageYOffset >= temp6Height) {
      setScale2(0.9);
    }

    if (pageYOffset > temp3Height && pageYOffset < temp4Height) {
      if (image1Margin + 50 > 200 && pageY < pageYOffset) {
        setImage1Margin(200);
      } else if (pageY > pageYOffset && image1Margin - 50 > -50) {
        setImage1Margin(image1Margin - 50);
      } else if (pageY > pageYOffset && image1Margin - 50 <= -50) {
        setImage1Margin(-50);
      } else {
        setImage1Margin(image1Margin + 50);
      }
    }

    if (
      pageYOffset > temp8Height &&
      pageYOffset < temp4Height &&
      image !== "12"
    ) {
      // const value = (temp5Height - temp8Height) / 12 + 50;

      // let value = parseInt(image) + 1 + "";

      // if (value.length !== 2) {
      //   value = "0" + value;
      // }

      // console.log(value);

      // setImage(value);
      // if (pageYOffset < value + temp8Height - 700) {
      //   setImage(`01`);
      // } else if (pageYOffset < value * 2 + temp8Height - 700) {
      //   setImage(`01`);
      // } else if (pageYOffset < value * 3 + temp8Height - 700) {
      //   setImage(`03`);
      // } else if (pageYOffset < value * 4 + temp8Height - 700) {
      //   setImage(`04`);
      // } else if (pageYOffset < value * 5 + temp8Height - 700) {
      //   setImage(`05`);
      // } else if (pageYOffset < value * 6 + temp8Height - 700) {
      //   setImage(`06`);
      // } else if (pageYOffset < value * 7 + temp8Height - 700) {
      //   setImage(`07`);
      // } else if (pageYOffset < value * 8 + temp8Height - 700) {
      //   setImage(`08`);
      // } else if (pageYOffset < value * 9 + temp8Height - 700) {
      //   setImage(`09`);
      // } else if (pageYOffset < value * 10 + temp8Height - 700) {
      //   setImage(`10`);
      // } else if (pageYOffset < value * 11 + temp8Height - 700) {
      //   setImage(`11`);
      // } else if (pageYOffset < value * 12 + temp8Height - 700) {
      //   setImage(`12`);
      // }

      if (isStart) {
        setInterval(() => {
          setImage((prevState) => {
            let value = parseInt(prevState) + 1 + "";

            if (value.length !== 2) {
              value = "0" + value;
            }
            return value === "13" ? "12" : value;
          });
        }, [500]);
      }

      if (isStart2 && temp8Height < pageYOffset) {
        let scrollingElement = document.scrollingElement || document.body;

        scrollingElement.scrollTop = temp8Height;

        setIsStart2(false);
      }
      setIsStart(false);
    }

    if (testTop < 55) {
      setIsView(1);
    } else {
      setIsView(0);
    }

    if (pageYOffset > temp5Height - 500 && pageYOffset < temp3Height) {
      if (image2Margin - 50 < -250 && pageY < pageYOffset) {
        setImage2Margin(-250);
      } else if (pageY > pageYOffset && image2Margin + 30 < 50) {
        console.log(image2Margin + 30);
        setImage2Margin(image2Margin + 30);
      } else if (pageY > pageYOffset && image2Margin + 30 >= 50) {
        setImage2Margin(50);
      } else {
        setImage2Margin(image2Margin - 50);
      }
    }

    if (pageYOffset > temp8Ref.current.offsetTop) {
      setIsFirst(true);
    }

    setPageY(pageYOffset);
  };

  useEffect(() => {
    documentRef.current.addEventListener("scroll", handleScroll);
    return () =>
      documentRef.current.removeEventListener("scroll", handleScroll);
  }, [pageY]);

  useEffect(() => {});

  return (
    <WholeWrapper>
      <Wrapper
        isRelative={true}
        borderBottom={`10px solid ${Theme.greyTheme4_C}`}
      >
        <Image
          height={width < 700 ? `700px` : `800px`}
          alt="Background-img"
          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM17%2F%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%20%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%20789.png?alt=media&token=a162cac3-b142-4b9c-9f67-6de2e56dec3c`}
        />
        <Wrapper isAbsolute={true} top={`0`} left={`0`}>
          <RsWrapper
            color={Theme.white_C}
            margin={width < 700 ? `100px 0 0` : `200px 0 0`}
            padding={width < 700 && `0 35px`}
            ju={`flex-start`}
          >
            <Wrapper display={width > 700 ? `flex` : `none`} al={`flex-start`}>
              <Text
                fontSize={`25px`}
                fontWeight={`bold`}
                color={Theme.greyTheme3_C}
              >
                USB 물리보안
              </Text>
              <Text fontSize={`48px`} fontWeight={`bold`} lineHeight={`1.3`}>
                USB 포트 물리보안의
              </Text>
              <Text fontSize={`48px`} fontWeight={`bold`} lineHeight={`1.3`}>
                완성도를 높이는 가장 강력한 조합
              </Text>
            </Wrapper>

            <Wrapper display={width < 700 ? `flex` : `none`} al={`flex-start`}>
              <Text
                fontSize={`16px`}
                fontWeight={`bold`}
                color={Theme.greyTheme3_C}
              >
                USB 물리보안
              </Text>
              <Text fontSize={`30px`} fontWeight={`bold`}>
                USB 포트 물리보안의
              </Text>
              <Text fontSize={`30px`} fontWeight={`bold`}>
                완성도를 높이는
              </Text>
              <Text fontSize={`30px`} fontWeight={`bold`}>
                가장 강력한 조합
              </Text>
            </Wrapper>

            <Wrapper
              dr={`row`}
              ju={`flex-start`}
              padding={width < 700 ? `50px 0 0` : `170px 0 0`}
            >
              <Wrapper
                dr={`row`}
                width={`50%`}
                al={`flex-start`}
                ju={`flex-start`}
              >
                <Wrapper
                  width={`auto`}
                  al={`flex-end`}
                  margin={width < 700 ? `120px 30px 0 0` : `70px 30px 0 60px`}
                >
                  <Image
                    width={width < 700 ? `136px` : `200px`}
                    alt="usb port lock-font"
                    src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM17%2FUSB%20Port%20Lock.svg?alt=media&token=664fa82c-56e0-4155-91e0-70beaefdea79`}
                  />
                  <Text
                    fontSize={width < 700 ? `12px` : `18px`}
                    fontWeight={`bold`}
                  >
                    USB 포트락 (CSK-UL10)
                  </Text>
                  <Link to="/usb/6107dd1dbdf08f065ce6cd1e">
                    <ArrowIcon>
                      더 알아보기
                      <FaChevronRight />
                    </ArrowIcon>
                  </Link>
                </Wrapper>
                <Wrapper
                  width={`auto`}
                  isAbsolute={true}
                  bottom={width < 900 ? (width < 700 ? `-32%` : `-7%`) : `-15%`}
                  left={width < 900 ? (width < 700 ? `6%` : `40%`) : `36%`}
                >
                  <Image
                    width={width < 900 ? `70px` : `120px`}
                    alt="usb port lock"
                    margin={width < 700 ? `0` : `0 0 0 -100%`}
                    src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM17%2FUSB%20Port%20Lock.png?alt=media&token=853fa599-c36c-4a30-94ee-15007b72a1ef`}
                  />
                </Wrapper>
              </Wrapper>

              <Wrapper
                width={`50%`}
                padding={width < 700 ? `0 0 0 10px` : `0`}
                al={`flex-start`}
                ju={`flex-start`}
              >
                <Wrapper
                  width={`auto`}
                  height={`100%`}
                  isAbsolute={true}
                  top={width < 1100 ? (width < 700 ? `70%` : `35%`) : `30%`}
                  right={
                    width < 1100
                      ? width < 900
                        ? width < 700
                          ? `-60%`
                          : `-15%`
                        : `-20%`
                      : `5%`
                  }
                >
                  <Image
                    width={
                      width < 1100 ? (width < 900 ? `400px` : `700px`) : `800px`
                    }
                    alt="link lock"
                    margin={width < 700 ? `0` : `0 -35% -20% 0`}
                    src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM17%2FLink%20Lock.png?alt=media&token=139d83ac-4e3d-4186-abef-f65c71173ba6`}
                  />
                </Wrapper>
                <Wrapper
                  width={`auto`}
                  al={`flex-start`}
                  margin={width < 700 ? `0` : `60px 0 0 110px`}
                >
                  <Image
                    width={`110px`}
                    alt="link lock-font"
                    src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM17%2FLink%20Lock.svg?alt=media&token=89f30c83-4d6c-4ebe-9a08-a51db3378520`}
                  />
                  <Text
                    fontSize={width < 900 ? `12px` : `18px`}
                    margin={`5px 0 0`}
                  >
                    링크락 (CSK-LK11)
                  </Text>
                  <Link to="/usb/6107e4e0bdf08f065ce6cd25">
                    <ArrowIcon>
                      더 알아보기
                      <FaChevronRight />
                    </ArrowIcon>
                  </Link>
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </RsWrapper>
        </Wrapper>
      </Wrapper>

      <Wrapper
        ref={tempRef}
        padding={width < 900 ? `100px 0 40px` : `180px 0`}
        height={width < 900 ? `500px` : `100%`}
        attachment={`initial`}
        bgImg={
          width < 900
            ? `url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM17%2Fmobile-image.png?alt=media&token=e8a84f41-b3d8-4aa2-9005-585cb5b3665c")`
            : `url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM17%2F%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%20%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%20678.png?alt=media&token=213ddad9-7b4a-45aa-a69e-0f816df6fffb")`
        }
      >
        {/* <Image
          alt="background-img"
          src={
            width < 900
              ? `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM17%2Fmobile-image.png?alt=media&token=e8a84f41-b3d8-4aa2-9005-585cb5b3665c`
              : `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM17%2F%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%20%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%20678.png?alt=media&token=34dbbf82-c985-486f-8d19-03f3922ccf4d`
          }
        /> */}
        <Wrapper padding={`0 35px`}>
          <RsWrapper al={`flex-start`} color={Theme.white_C}>
            <Image
              width={width < 900 ? `220px` : `500px`}
              margin={`0 0 10px`}
              alt="usb port lock-font"
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM17%2FUSB%20Port%20Lock.svg?alt=media&token=664fa82c-56e0-4155-91e0-70beaefdea79`}
            />
            <Text
              fontSize={width < 900 ? `20px` : `34px`}
              fontWeight={`bold`}
              lineHeight={`1.3`}
            >
              USB 포트락
            </Text>
            <Text
              fontSize={width < 900 ? `12px` : `25px`}
              fontWeight={`500`}
              color={Theme.greyTheme7_C}
            >
              CSK-UL10
            </Text>

            <Wrapper
              display={width > 900 ? `flex` : `none`}
              al={`flex-start`}
              padding={`40px 0 300px`}
            >
              <Text fontSize={`30px`} fontWeight={`bold`}>
                사용하지 않는 포트는 USB 포트락으로 차단.
              </Text>
              <Text fontSize={`24px`} color={Theme.greyTheme7_C}>
                우리 집에 쓸 자물쇠, 열쇠를 아무거나 사용할 수 없듯이,
              </Text>
              <Text fontSize={`24px`} color={Theme.greyTheme7_C}>
                USB 포트 차단 제품을 값이 싸다고, 쉽게 살 수 있다고,
              </Text>
              <Text fontSize={`24px`} color={Theme.greyTheme7_C}>
                아무거나 쓸 순 없겠죠.
              </Text>
            </Wrapper>
            <Wrapper
              display={width < 900 ? `flex` : `none`}
              al={`flex-start`}
              padding={`70px 0 100px`}
            >
              <Text fontSize={`20px`} fontWeight={`bold`}>
                사용하지 않는 포트는
              </Text>
              <Text fontSize={`20px`} fontWeight={`bold`}>
                USB 포트락으로 차단.
              </Text>
              <Text fontSize={`18px`} color={Theme.greyTheme7_C}>
                우리 집에 쓸 자물쇠,
              </Text>
              <Text fontSize={`18px`} color={Theme.greyTheme7_C}>
                열쇠를 아무거나 사용할 수 없듯이,
              </Text>
              <Text fontSize={`18px`} color={Theme.greyTheme7_C}>
                USB 포트 차단 제품을 값이 싸다고,
              </Text>
              <Text fontSize={`18px`} color={Theme.greyTheme7_C}>
                쉽게 살 수 있다고, 아무거나 쓸 순 없겠죠.
              </Text>
            </Wrapper>
          </RsWrapper>
        </Wrapper>
      </Wrapper>

      <Wrapper
        bgColor={width < 700 ? `none` : Theme.greyTheme3_C}
        height={width < 700 ? `auto` : `380px`}
      >
        <RsWrapper>
          <Wrapper
            transform={width < 700 ? `` : `scale(${scale1})`}
            height={width < 700 ? `280px` : `150%`}
            color={Theme.white_C}
            bgSize={width < 700 ? `cover` : `1300px`}
            bgImg={
              width < 700
                ? `url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM17%2FbgImg.png?alt=media&token=6710cec1-200d-45e0-a720-951ae2f5b83d")`
                : `url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM17%2FPRO_Local_USB%20%E1%84%87%E1%85%A9%E1%84%8B%E1%85%A1%E1%86%AB%E1%84%8B%E1%85%B4%20%E1%84%8B%E1%85%AA%E1%86%AB%E1%84%89%E1%85%A5%E1%86%BC_0.3mm.png?alt=media&token=3c950a31-c661-4814-b490-1aa95c1c37fd")`
            }
            attachment={`initial`}
            margin={width < 700 ? `-55px 0 0` : `-150px 0 0`}
            isRelative={true}
            ref={temp2Ref}
          >
            <Wrapper
              display={width < 700 ? `none` : `flex`}
              isAbsolute={true}
              top={`${testTop}%`}
              left={`0`}
            >
              <Text fontSize={width < 700 ? `20px` : `29px`} opacity={isView}>
                보안성의 강화.
              </Text>
              <Text
                fontSize={width < 700 ? `20px` : `29px`}
                margin={`0 0 20px`}
                opacity={isView}
              >
                매우 얇은 키 홀 (Key Hole)
              </Text>

              <Text fontSize={width < 700 ? `18px` : `21px`} opacity={isView}>
                이물질을 이용한 해제 시도가
              </Text>
              <Text fontSize={width < 700 ? `18px` : `21px`} opacity={isView}>
                매우 어려워졌습니다.
              </Text>
            </Wrapper>

            <Wrapper
              display={width < 700 ? `flex` : `none`}
              isAbsolute={true}
              top={`30px`}
              left={`0`}
            >
              <Text fontSize={width < 700 ? `20px` : `29px`}>
                보안성의 강화.
              </Text>
              <Text
                fontSize={width < 700 ? `20px` : `29px`}
                margin={`0 0 10px`}
              >
                매우 얇은 키 홀 (Key Hole)
              </Text>

              <Text fontSize={width < 700 ? `18px` : `21px`} fontWeight={`200`}>
                이물질을 이용한 해제 시도가
              </Text>
              <Text fontSize={width < 700 ? `18px` : `21px`} fontWeight={`200`}>
                매우 어려워졌습니다.
              </Text>
            </Wrapper>
          </Wrapper>
        </RsWrapper>

        {/* <Wrapper
          display={width < 700 ? `flex` : `none`}
          width={`90%`}
          height={`123px`}
          color={Theme.white_C}
          bgImg={`url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM17%2F%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5%2087.png?alt=media&token=1220a3cb-8c60-466e-8348-897ef0be4740")`}
          attachment={`initial`}
          bgSize={`contain`}
          margin={`-20px 0 0`}
          isRelative={true}
          ref={temp2Ref}
        >
          <Wrapper isAbsolute={true} top={`20px`} left={`0`}>
            <Text fontSize={width < 700 ? `20px` : `34px`}>보안성의 강화.</Text>
            <Text fontSize={width < 700 ? `20px` : `34px`} margin={`0 0 10px`}>
              매우 얇은 키 홀 (Key Hole)
            </Text>

            <Text fontSize={width < 700 ? `18px` : `28px`} fontWeight={`200`}>
              이물질을 이용한 해제 시도가
            </Text>
            <Text fontSize={width < 700 ? `18px` : `28px`} fontWeight={`200`}>
              매우 어려워졌습니다.
            </Text>
          </Wrapper>
        </Wrapper> */}
      </Wrapper>

      <Wrapper
        isRelative={true}
        ref={temp8Ref}
        height={width < 700 ? `600px` : `110vh`}
        padding={width < 700 ? `0 0 130px` : `100px 0 200px`}
      >
        <Wrapper
          isAbsolute={true}
          top={width < 700 ? `-30%` : `0`}
          left={`45%`}
          height={`100%`}
          width={`auto`}
        >
          <Image
            width={width < 700 ? `220px` : `490px`}
            alt="background-img"
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FTurn-Image%2FTurn_Step_${image}_turn.jpg?alt=media&token=2fabe1b7-1c35-4f37-b377-9c63551229da`}
          />
        </Wrapper>
        <RsWrapper
          al={`flex-start`}
          ju={width < 700 && `flex-end`}
          fontWeight={`bold`}
          padding={width < 900 && `0 35px`}
        >
          <Text fontSize={width < 700 ? `24px` : `34px`}>
            <SpanText
              fontSize={width < 700 ? `50px` : `80px`}
              fontWeight={`bold`}
            >
              {!isFirst ? (
                `0`
              ) : (
                <AnimatedNumber
                  className="50"
                  value={50}
                  formatValue={(value) => value.toFixed(0)}
                  duration={2000}
                />
              )}
            </SpanText>
            만
          </Text>
          <Text
            fontSize={width < 700 ? `14px` : `20px`}
            color={Theme.darkGrey_C}
          >
            매년 평균 50만 개 이상
          </Text>
          <Text
            fontSize={width < 700 ? `14px` : `20px`}
            color={Theme.darkGrey_C}
          >
            기반시설, 공공기관, 대기업, 중소기업
          </Text>
          <Text
            fontSize={width < 700 ? `14px` : `20px`}
            color={Theme.darkGrey_C}
          >
            등에 적용되고 있습니다.
          </Text>

          <Text fontSize={width < 700 ? `24px` : `34px`}>
            <SpanText
              fontSize={width < 700 ? `50px` : `80px`}
              fontWeight={`bold`}
            >
              {!isFirst ? (
                `0`
              ) : (
                <AnimatedNumber
                  f
                  className="10"
                  value={10}
                  formatValue={(value) => value.toFixed(0)}
                  duration={2000}
                />
              )}
            </SpanText>
            년
          </Text>
          <Text
            fontSize={width < 700 ? `14px` : `20px`}
            color={Theme.darkGrey_C}
          >
            10여년간 꾸준히 사랑을 받고있는 제품이죠.
          </Text>
          <Text
            fontSize={width < 700 ? `14px` : `20px`}
            color={Theme.darkGrey_C}
          >
            중요장비에 적용하여도 문제가 발생하지 않는,
          </Text>
          <Text
            fontSize={width < 700 ? `14px` : `20px`}
            color={Theme.darkGrey_C}
          >
            기존 고객들로부터 안정성이 검증된 제품입니다.
          </Text>
        </RsWrapper>
      </Wrapper>

      <Wrapper
        bgColor={width < 700 ? `rgb(242, 242, 242)` : Theme.greyTheme3_C}
        ref={temp5Ref}
        padding={width < 700 && `0 0 50px`}
        borderBottom={width < 700 && `10px solid rgb(114, 114, 114)`}
        height={width < 700 ? `auto` : `90vh`}
        isRelative={true}
      >
        <RsWrapper isAbsolute={true} top={`${image2Margin}px`} left={0}>
          <Wrapper
            display={width < 700 ? `none` : `flex`}
            // padding={`${100 - image2Margin}px 0 ${image2Margin}px`}
          >
            <Image
              width={`100%`}
              ait="image"
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM17%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%20467.png?alt=media&token=3b9cb6c3-5750-4e47-bc13-b7a3419fae64`}
            />
          </Wrapper>
        </RsWrapper>

        <Wrapper display={width < 700 ? `flex` : `none`} margin={`-70px 0 0`}>
          <Image
            alt="mobileImg"
            shadow={`2px 2px 7px rgba(3, 4, 2, 0.31)`}
            radius={`30px`}
            width={`85%`}
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM17%2Fmobile-01.png?alt=media&token=4c5545fe-548a-45ff-8398-0e95d24307e8`}
          />
          <Image
            margin={`30px 0`}
            shadow={`2px 2px 7px rgba(3, 4, 2, 0.31)`}
            radius={`30px`}
            alt="mobileImg"
            width={`85%`}
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM17%2Fmobile-02.png?alt=media&token=92d8dab2-60e9-401c-9898-11e7f4a7aa2c`}
          />
          <Image
            alt="mobileImg"
            width={`85%`}
            shadow={`2px 2px 7px rgba(3, 4, 2, 0.31)`}
            radius={`30px`}
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM17%2Fmobile-03.png?alt=media&token=9d2d8211-c1c8-4b50-a7d6-c75c24b085be`}
          />
        </Wrapper>

        <RsWrapper
          display={width < 700 ? `none` : `flex`}
          al={`flex-start`}
          ju={`flex-end`}
          padding={`0 0 50px`}
        >
          <Text fontSize={`30px`} fontWeight={`bold`}>
            표준규격 USB 포트(A타입)라면 어디라도
          </Text>
          <Text fontSize={`24px`} color={Theme.greyTheme4_C}>
            데스크탑 전/후면, 노트북, 네트워크 장비, 산업시스템장비 등,
            USB포트가 있는 장비라면
          </Text>

          <Text fontSize={`24px`} color={Theme.greyTheme4_C}>
            누구나 손쉽게 장착이 가능하고, S/W나 전기가 전혀 필요하지 않습니다.
          </Text>

          <Link to="/usb/6107dd1dbdf08f065ce6cd1e">
            <ArrowIcon fontWeight={`bold`} margin={`30px 0 0`}>
              USB 포트락 자세히 보러가기
              <FaChevronRight />
            </ArrowIcon>
          </Link>
        </RsWrapper>
        <RsWrapper
          display={width < 700 ? `flex` : `none`}
          al={`flex-start`}
          padding={`0 35px`}
        >
          <Text fontSize={`20px`} margin={`50px 0 0`}>
            표준규격 USB 포트(A타입)라면
          </Text>
          <Text fontSize={`20px`}>어디라도</Text>
          <Text
            fontSize={`17px`}
            color={Theme.greyTheme4_C}
            margin={`20px 0 0`}
          >
            데스크탑 전/후면, 노트북, 네트워크 장비,
          </Text>
          <Text fontSize={`17px`} color={Theme.greyTheme4_C}>
            산업시스템장비 등, USB포트가 있는 장비
          </Text>
          <Text fontSize={`17px`} color={Theme.greyTheme4_C}>
            라면 누구나 손쉽게 장착이 가능하고,
          </Text>
          <Text
            fontSize={`17px`}
            color={Theme.greyTheme4_C}
            margin={`0 0 30px`}
          >
            S/W나 전기가 전혀 필요하지 않습니다.
          </Text>

          <ArrowIcon fontWeight={`bold`}>
            USB 포트락 자세히 보러가기
            <FaChevronRight />
          </ArrowIcon>
        </RsWrapper>
      </Wrapper>

      <Wrapper
        isRelative={true}
        ref={temp3Ref}
        height={width < 700 ? `550px` : `900px`}
        // attachment={`initial`}
        // bgImg={
        //   width < 700
        //     ? `url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM17%2Fmobile-img02.png?alt=media&token=0c1caedc-c23f-4435-9002-909d3c851006")`
        //     : `url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM17%2FRectangle%201.png?alt=media&token=9e962b01-04f6-409a-a55a-e7273d5067a9")`
        // }
      >
        <Image
          height={`100%`}
          alt="background"
          src={
            width < 700
              ? `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM17%2Fmobile-img02.png?alt=media&token=0c1caedc-c23f-4435-9002-909d3c851006`
              : `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM17%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%206333.png?alt=media&token=dc47d35b-22c3-40a0-ab16-b3d104c2b52b`
          }
        />
        <Wrapper isAbsolute={true} top={`0`} left={`0`} height={`100%`}>
          <RsWrapper al={`flex-start`} color={Theme.white_C}>
            <Wrapper width={`auto`} al={`flex-start`}>
              <Image
                width={width < 900 ? `145px` : `338px`}
                margin={width < 700 ? `0 0 10px` : `0 0 30px`}
                alt="link lock-font"
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM17%2FLink%20Lock.svg?alt=media&token=89f30c83-4d6c-4ebe-9a08-a51db3378520`}
              />
              <Text
                fontSize={width < 900 ? `20px` : `34px`}
                fontWeight={`bold`}
              >
                링크락
              </Text>
              <Text
                fontSize={width < 900 ? `14px` : `25px`}
                fontWeight={`500`}
                color={Theme.greyTheme7_C}
              >
                CSK-LK11
              </Text>
              <Wrapper
                al={`flex-start`}
                padding={width < 700 ? `30px 0 0` : `50px 0 0`}
              >
                <Text
                  fontSize={width < 900 ? `20px` : `30px`}
                  fontWeight={`bold`}
                >
                  USB 기기 보안의 마무리
                </Text>
                <Text
                  fontSize={width < 900 ? `18px` : `24px`}
                  color={Theme.greyTheme7_C}
                >
                  빈 USB 포트는 막았는데,
                </Text>
                <Text
                  display={width < 700 ? `none` : `flex`}
                  fontSize={width < 900 ? `18px` : `24px`}
                  color={Theme.greyTheme7_C}
                >
                  그럼 사용하는 키보드, 마우스 같은
                </Text>
                <Text
                  display={width < 700 ? `none` : `flex`}
                  fontSize={width < 900 ? `18px` : `24px`}
                  color={Theme.greyTheme7_C}
                >
                  USB 기기의 보안은?
                </Text>
                <Text
                  display={width < 700 ? `flex` : `none`}
                  fontSize={width < 900 ? `18px` : `24px`}
                  color={Theme.greyTheme7_C}
                >
                  그럼 사용하는 키보드, 마우스 같은
                </Text>
                <Text
                  display={width < 700 ? `flex` : `none`}
                  fontSize={width < 900 ? `18px` : `24px`}
                  color={Theme.greyTheme7_C}
                >
                  USB 기기의 보안은?
                </Text>
              </Wrapper>
            </Wrapper>
          </RsWrapper>
        </Wrapper>
      </Wrapper>
      {/*  */}
      <Wrapper
        bgColor={Theme.greyTheme3_C}
        height={width < 700 ? `95px` : `155px`}
        ref={temp4Ref}
      >
        <RsWrapper padding={`0 35px`}>
          <Image
            margin={width < 700 ? `0 0 60px 0` : `0 0 ${image1Margin}px  0`}
            alt="image"
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM17%2FHue-Saturation%201.png?alt=media&token=a55d52b7-156b-4b02-bb55-028462d6ab22`}
          />
        </RsWrapper>
      </Wrapper>
      {/*  */}

      <Wrapper
        display={width < 900 ? `none` : `flex`}
        padding={width < 900 ? `100px 0` : `200px 0 300px`}
        borderBottom={`10px solid ${Theme.greyTheme3_C}`}
        attachment={`initial`}
        bgImg={`url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM17%2F%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%20%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%20793.png?alt=media&token=f5dab478-3e13-4e73-980d-afbf5048b640")`}
      >
        <RsWrapper al={`flex-start`}>
          <Wrapper
            al={`flex-start`}
            width={`auto`}
            display={width < 900 ? `none` : `flex`}
          >
            <Text fontSize={`30px`} fontWeight={`bold`}>
              아무리 포트가 막혀있어도 사용 중인 기기를
            </Text>
            <Text fontSize={`30px`} fontWeight={`bold`} margin={`0 0 20px`}>
              통제할 수 없다면, 여전히 보안의 구멍이겠죠.
            </Text>
          </Wrapper>

          <Text fontSize={`20px`} color={Theme.darkGrey_C}>
            링크락은 USB 기기들이 연결된 채로 포트에
          </Text>
          <Text fontSize={`20px`} color={Theme.darkGrey_C}>
            물리적으로 잠금 시킬 수 있고, 동일한 패턴의
          </Text>
          <Text fontSize={`20px`} color={Theme.darkGrey_C}>
            키로만 해제가 되도록 설계하였습니다.
          </Text>
          <Text fontSize={`20px`} color={Theme.darkGrey_C} margin={`0 0 30px`}>
            말 그대로 <SpanText fontWeight={`bold`}>LINK</SpanText> 하면서
            <SpanText fontWeight={`bold`}>LOCK</SpanText>&nbsp; 하는 거죠!
          </Text>
          <Text fontSize={`20px`} color={Theme.darkGrey_C}>
            키보드, 마우스나 USB 허브 등, 보안담당자가
          </Text>
          <Text fontSize={`20px`} color={Theme.darkGrey_C}>
            사전에 인가한 장치만 사용할 수 있도록 설치하여
          </Text>
          <Text fontSize={`20px`} color={Theme.darkGrey_C} margin={`0 0 20px`}>
            내부의 보안규정을 준수할 수 있도록 도와드립니다.
          </Text>

          <Link to="/usb/6107e4e0bdf08f065ce6cd25">
            <ArrowIcon>
              링크락 자세히 보러가기
              <FaChevronRight />
            </ArrowIcon>
          </Link>
          <Wrapper
            margin={`60px 0 0`}
            width={`50%`}
            dr={`row`}
            border={`3px dotted rgba(98, 98, 101, 0.5)`}
            radius={`30px`}
            padding={`30px`}
            ju={`flex-start`}
          >
            <Image
              width={`200px`}
              alt="image"
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM17%2FUSB%E1%84%91%E1%85%A9%E1%84%90%E1%85%B3%E1%84%85%E1%85%A1%E1%86%A8_%E1%84%80%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B7%E1%84%8C%E1%85%A1.png?alt=media&token=e5e40a0c-9923-4d15-a577-b2aeafab9fb3`}
            />
            <Wrapper width={`auto`} padding={`0 0 0 15px`} al={`flex-start`}>
              <Text fontSize={`20px`}>
                <SpanText fontWeight={`bold`}>USB 포트락</SpanText>과 함께
                사용하면
              </Text>
              <Text fontSize={`20px`}>물리 보안의 완성도를</Text>
              <Text fontSize={`20px`}>더욱 높일 수 있습니다.</Text>
              <Link to="/usb/6107dd1dbdf08f065ce6cd1e">
                <ArrowIcon margin={`22px 0 0`}>
                  USB 포트락 자세히 보러가기
                  <FaChevronRight />
                </ArrowIcon>
              </Link>
            </Wrapper>
          </Wrapper>
        </RsWrapper>
      </Wrapper>

      <Wrapper
        display={width < 900 ? `flex` : `none`}
        padding={width < 700 ? `110px 25px` : `110px 35px`}
        attachment={`initial`}
        height={width < 700 ? `300px` : `auto`}
        bgImg={`url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM17%2Fmobile-img03.png?alt=media&token=f00fb782-3193-43f9-a6ae-47edc84e2d5d")`}
      >
        <Wrapper al={`flex-start`}>
          <Text fontSize={`20px`} fontWeight={`bold`}>
            아무리 포트가 막혀있어도
          </Text>
          <Text fontSize={`20px`} fontWeight={`bold`}>
            사용 중인 기기를
          </Text>
          <Text fontSize={`20px`} fontWeight={`bold`}>
            통제할 수 없다면,
          </Text>
          <Text fontSize={`20px`} fontWeight={`bold`} margin={`0 0 50px`}>
            여전히 보안의 구멍이겠죠.
          </Text>
        </Wrapper>
      </Wrapper>
      <Wrapper
        display={width < 900 ? `flex` : `none`}
        bgColor={`rgb(248, 248, 248)`}
        padding={`30px 35px`}
        al={`flex-start`}
      >
        <Text fontSize={`18px`} color={Theme.darkGrey_C}>
          링크락은 USB 기기들이 연결된 채로
        </Text>
        <Text fontSize={`18px`} color={Theme.darkGrey_C}>
          포트에 물리적으로 잠금 시킬 수 있고,
        </Text>
        <Text fontSize={`18px`} color={Theme.darkGrey_C}>
          동일한 패턴의 키로만 해제가 되도록
        </Text>
        <Text fontSize={`18px`} color={Theme.darkGrey_C}>
          설계하였습니다.
        </Text>
        <Text
          fontSize={`18px`}
          color={Theme.darkGrey_C}
          fontWeight={`bold`}
          margin={`0 0 10px`}
        >
          말 그대로 LINK 하면서 LOCK 하는 거죠!
        </Text>
        <Text fontSize={`18px`}>키보드, 마우스나 USB 허브 등,</Text>
        <Text fontSize={`18px`}>보안담당자가 사전에 인가한 장치만 사용</Text>
        <Text fontSize={`18px`}>할 수 있도록 설치하여 내부의 보안규정을</Text>
        <Text fontSize={`18px`} margin={`0 0 20px`}>
          준수할 수 있도록 도와드립니다.
        </Text>
        <Link to="/usb/6107e4e0bdf08f065ce6cd25">
          <ArrowIcon>
            링크락 자세히 보러가기
            <FaChevronRight />
          </ArrowIcon>
        </Link>
        <Wrapper
          margin={`60px 0 0`}
          dr={`row`}
          border={`3px dotted rgba(98, 98, 101, 0.5)`}
          radius={`30px`}
          padding={`20px 0`}
          al={`flex-start`}
        >
          <Wrapper width={`30%`}>
            <Image
              width={`70px`}
              alt="image"
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM17%2FUSB%E1%84%91%E1%85%A9%E1%84%90%E1%85%B3%E1%84%85%E1%85%A1%E1%86%A8_%E1%84%80%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B7%E1%84%8C%E1%85%A1.png?alt=media&token=e5e40a0c-9923-4d15-a577-b2aeafab9fb3`}
            />
          </Wrapper>
          <Wrapper width={`70%`} al={`flex-start`}>
            <Text fontSize={`16px`} lineHeight={`1.4`} fontWeight={`400`}>
              <SpanText fontWeight={`bold`}>USB 포트락</SpanText>과 함께
              사용하면
            </Text>
            <Text fontSize={`16px`} lineHeight={`1.4`} fontWeight={`400`}>
              물리 보안의 완성도를
            </Text>
            <Text fontSize={`16px`} lineHeight={`1.4`} fontWeight={`400`}>
              더욱 높일 수 있습니다.
            </Text>
            <Link to="/usb/6107dd1dbdf08f065ce6cd1e">
              <ArrowIcon color={Theme.greyTheme4_C} margin={`18px 0 0`}>
                USB 포트락 자세히 보러가기
                <FaChevronRight />
              </ArrowIcon>
            </Link>
          </Wrapper>
        </Wrapper>
      </Wrapper>

      <Wrapper
        display={width < 900 ? `none` : `flex`}
        padding={`140px 0 55px`}
        attachment={`initial`}
        bgImg={`url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM17%2Fbg.png?alt=media&token=9316bd80-325b-44b3-8477-4e7990a8e44d")`}
        ref={temp6Ref}
        isRelative={true}
      >
        <Image
          delay={`0.8s`}
          display={width < 900 ? `none` : `flex`}
          isAbsolute={true}
          transform={`scale(${scale2})`}
          top={`27%`}
          left={`12%`}
          width={`80%`}
          alt="image"
          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM17%2FKey.png?alt=media&token=0fbde530-01e3-4667-bad2-d1ef64b41dd1`}
        />
        <RsWrapper ju={`space-between`}>
          <Wrapper>
            <Image
              width={width < 900 ? `290px` : `486px`}
              alt="svg"
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM17%2FUniversal%20Lock%20Key.svg?alt=media&token=f531658c-f34f-42b1-838b-2cc78e0e14a3`}
            />
          </Wrapper>
          <Wrapper color={Theme.white_C} margin={`300px 0 0`}>
            <Text fontSize={`20px`}>
              이름에 걸맞게 Universal (만능) 키이죠.
            </Text>
            <Text fontSize={`20px`} margin={`0 0 50px`}>
              하나의 키로 30여 스마트키퍼 제품을 해제할 수 있어, 사용자의
              편의성을 극대화 하였습니다.
            </Text>
            <Text fontSize={`20px`}>
              또한 패턴(내부구조)을 다양하게 설계하여,
            </Text>
            <Text fontSize={`20px`} margin={`0 0 90px`}>
              패턴이 다르면 잠금장치가 해제되지 않아 보안성도 뛰어나죠.
            </Text>

            <Link to="/lock/6106a4c1284536707ffa20d9">
              <ArrowIcon fontWeight={`bold`}>
                유니버셜 락키 자세히 보러가기
                <FaChevronRight />
              </ArrowIcon>
            </Link>
          </Wrapper>
        </RsWrapper>
      </Wrapper>

      <Wrapper
        display={width < 900 ? `flex` : `none`}
        isRelative={true}
        height={`540px`}
        ju={`flex-start`}
        attachment={`initial`}
        bgImg={`url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM05%2Funiversal%20lock%20key-mobile.png?alt=media&token=f23ecfab-69bf-4d2b-8807-5037964e8a5b")`}
      >
        <Wrapper margin={`40px 0`}>
          <Image
            width={`290px`}
            alt="svg"
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM17%2FUniversal%20Lock%20Key.svg?alt=media&token=f531658c-f34f-42b1-838b-2cc78e0e14a3`}
          />
          <Wrapper
            color={Theme.white_C}
            isAbsolute={true}
            bottom={`6%`}
            left={`0`}
            fontSize={`18px`}
          >
            <Text fontWeight={`400`}>
              이름에 걸맞게 Universal (만능) 키이죠.
            </Text>
            <Text fontWeight={`400`}>하나의 키로 30여 스마트키퍼 제품을</Text>
            <Text fontWeight={`400`}>해제할 수 있어, 사용자의 편의성을</Text>
            <Text fontWeight={`400`} margin={`0 0 30px`}>
              극대화 하였습니다.
            </Text>

            <Text fontWeight={`400`}>
              또한 패턴(내부구조)을 다양하게 설계하여,
            </Text>
            <Text fontWeight={`400`}>패턴이 다르면 잠금장치가 해제되지</Text>
            <Text fontWeight={`400`} margin={`0 0 30px`}>
              않아 보안성도 뛰어나죠.
            </Text>
            <Link to="/lock/6106a4c1284536707ffa20d9">
              <ArrowIcon fontWeight={`bold`}>
                유니버셜 락키 자세히 보러가기
                <FaChevronRight />
              </ArrowIcon>
            </Link>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </WholeWrapper>
  );
};

export default withResizeDetector(MM17Presenter);
