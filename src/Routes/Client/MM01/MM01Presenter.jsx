import React, { useEffect, useState } from "react";
import withSplitting from "../../../Lib/withSplitting";
import {
  RsWrapper,
  WholeWrapper,
  Wrapper,
  Image,
  Text,
  ATag,
  SpanText,
} from "../../../Components/CommonComponents";
import styled from "styled-components";
import { withResizeDetector } from "react-resize-detector";
import useTitle from "@4leaf.ysh/use-title";
import Theme from "../../../Styles/Theme";
import { RiArrowRightSLine } from "react-icons/ri";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
import { useRef } from "react";

const Gotham = styled(SpanText)`
  font-family: "Gotham", sans-serif;
  font-weight: 500;
  letter-spacing: ${(props) => props.letterSpacing};
  margin: ${(props) => props.margin};
`;

const Title = styled.h1`
  font-size: ${(props) => props.fontSize || `47px`};
  font-weight: 700;
  color: ${(props) => props.theme.white_C};
  line-height: 1.3;
  display: ${(props) => props.display};
  opacity: ${(props) => props.opacity};

  @media (max-width: 900px) {
    font-size: ${(props) => props.fontSize || `27px`};
  }
`;

const SubTitle = styled.h2`
  font-size: 28px;
  font-weight: 900;
  color: ${(props) => props.theme.white_C};
  display: ${(props) => props.display};
  line-height: 1.3;

  @media (max-width: 900px) {
    font-size: 17px;
  }
`;

const Button = styled(Wrapper)`
  width: auto;
  padding: 0 0 5px;
  color: ${Theme.white_C};
  position: relative;
  cursor: pointer;
  font-weight: 300;

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 2px;
    background-color: ${Theme.white_C};
    transition: 0.5s;
  }

  &:hover:before {
    width: 100%;
  }

  @media (max-width: 900px) {
    font-size: 14px;
  }
`;

const TempImage = styled(Image)`
  position: ${(props) => (props) => props.position};

  z-index: ${(props) => props.zIndex};
  opacity: ${(props) => props.opacity};

  transform: ${(props) => props.transform};
  ${(props) => props.top};

  transition: all 0s;

  @media (max-width: 900px) {
    top: 95px;
    transform: translateY(0);
    position: fixed;
  }
`;

const MM01Presenter = ({
  width,
  //
  tab1Ref,
  tab2Ref,
  tab3Ref,
  tab4Ref,
  tab5Ref,
  documentRef,
  check1Ref,
  check2Ref,
  check3Ref,
  check4Ref,
}) => {
  useTitle(`SMARTKEEPER? | ${process.env["HOMEPAGE_NAME"]}`);

  const value = [
    "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM01%2Fimage-1.png?alt=media&token=d8746dbb-dbc5-4b2f-b00e-42ea76ceb0c0",
    "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM01%2Fimage-2.png?alt=media&token=1356cc8e-9667-4c1e-b3b2-18656e19cab4",
    "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM01%2Fimage-3.png?alt=media&token=25d90f96-712b-40a8-b82a-6ea87dc81149",
    "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM01%2Fimage-4.png?alt=media&token=20961643-5f65-4d11-8f4f-e132d31fb1f3",
    "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM01%2Fimage-5.png?alt=media&token=529b1a87-7997-4840-9f2e-06583579442c",
  ];

  const heightRef = useRef();

  const [pageY, setPageY] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(1);
  const [isEnd, setIsEnd] = useState(true);
  const [height, setHeight] = useState(0);
  const [isFinish, setIsFinish] = useState(true);

  const [isCheck1, setIsCheck1] = useState(false);
  const [isCheck2, setIsCheck2] = useState(false);
  const [isCheck3, setIsCheck3] = useState(false);
  const [isCheck4, setIsCheck4] = useState(false);

  const handleScroll = () => {
    const { pageYOffset } = window;

    if (tab1Ref.current.offsetHeight * 4 >= pageYOffset) {
      setIsEnd(true);

      let currentOffset;

      let tempOffset = tab1Ref.current.offsetHeight * 5;
      let tempOffset1 = tab1Ref.current.offsetHeight * 1;
      let tempOffset2 = tab1Ref.current.offsetHeight * 2;
      let tempOffset3 = tab1Ref.current.offsetHeight * 3;
      let tempOffset4 = tab1Ref.current.offsetHeight * 5;

      let check1Top = check1Ref.current.offsetTop;
      let check2Top = check2Ref.current.offsetTop;
      let check3Top = check3Ref.current.offsetTop;
      let check4Top = check4Ref.current.offsetTop;

      if (currentImage === 0) {
        currentOffset = (tempOffset / 5) * 1;
      }
      if (currentImage === 1) {
        currentOffset = (tempOffset / 5) * 2;
      }
      if (currentImage === 2) {
        currentOffset = (tempOffset / 5) * 3;
      }
      if (currentImage === 3) {
        currentOffset = (tempOffset / 5) * 4;
      }
      if (currentImage === 4) {
        currentOffset = (tempOffset / 5) * 5;
      }

      // console.log(
      //   (tempOffset / 5) * 1,
      //   (tempOffset / 5) * 2,
      //   (tempOffset / 5) * 3,
      //   (tempOffset / 5) * 4,
      //   (tempOffset / 5) * 5
      // );

      let tempFade = (currentOffset - pageYOffset) / (tempOffset / 5);

      if (currentOffset - pageYOffset <= 0 && currentImage !== 4) {
        setCurrentImage(currentImage + 1);
        // tempFade = 1;
      }

      if (pageYOffset <= (tempOffset / 5) * currentImage - 1) {
        setCurrentImage(currentImage - 1);
        // tempFade = 0;
      }

      setPageY(pageYOffset);
      setFade(tempFade);
    } else {
      setIsEnd(false);
      setIsFinish(false);
    }
  };

  const wheelEvent = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const { pageYOffset } = window;

    let tempOffset = tab1Ref.current.offsetHeight * 5;
    let tempOffset1 = tab1Ref.current.offsetHeight * 1;
    let tempOffset2 = tab1Ref.current.offsetHeight * 2;
    let tempOffset3 = tab1Ref.current.offsetHeight * 3;
    let tempOffset4 = tab1Ref.current.offsetHeight * 4;

    if (!isCheck1 && tempOffset1 < pageYOffset) {
      setTimeout(() => {
        setIsCheck1(true);
      }, 1000);
      return;
    }

    if (!isCheck2 && tempOffset2 < pageYOffset) {
      setTimeout(() => {
        $("#app").off("scroll touchmove mousewheel");
        setIsCheck2(true);
      }, 1000);
      return;
    }

    if (!isCheck3 && tempOffset3 < pageYOffset) {
      setTimeout(() => {
        $("#app").off("scroll touchmove mousewheel");
        setIsCheck3(true);
      }, 1000);
      return;
    }

    if (!isCheck4 && tempOffset4 < pageYOffset) {
      setTimeout(() => {
        $("#app").off("scroll touchmove mousewheel");
        setIsCheck4(true);
      }, 1000);
      return;
    }

    const value = isFinish ? 50 : 50;

    console.log(window.scrollY - value);

    if (e.wheelDeltaY > 0) {
      window.scrollTo(0, window.scrollY - value);
    } else {
      window.scrollTo(0, window.scrollY + value);
    }
  };

  useEffect(() => {
    documentRef.current.addEventListener("scroll", handleScroll);
    window.addEventListener("wheel", wheelEvent, {
      passive: false,
    });

    return () => {
      documentRef.current.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", wheelEvent, {
        passive: false,
      });
    };
  }, [pageY, isCheck1, isCheck2, isCheck3, isCheck4]);

  useEffect(() => {
    scroll.scrollTo(0);

    setHeight(heightRef.current.offsetHeight);
  }, []);

  return (
    <ParallaxProvider>
      <WholeWrapper bgColor={Theme.blackTheme2_C}>
        <RsWrapper isRelative={true}>
          <Wrapper dr={`row`}>
            <Wrapper
              height={width < 700 ? `auto` : `500vh`}
              width={width < 900 ? `100%` : `50%`}
              ju={width < 900 && `flex-start`}
              isRelative={true}
            >
              {isEnd && (
                <TempImage
                  width={width < 900 ? `302px` : `615px`}
                  height={width < 900 ? `302px` : `615px`}
                  zIndex={10}
                  opacity={1}
                  // top={pageY + 120}
                  src={value[currentImage]}
                  position={isEnd ? `fixed` : `absolute`}
                  top={isEnd ? `top: 50%` : `bottom: 150px`}
                  transform={isEnd ? `translateY(-50%)` : `translateY(0)`}
                />
              )}

              <TempImage
                width={width < 900 ? `302px` : `615px`}
                height={width < 900 ? `302px` : `615px`}
                zIndex={1}
                opacity={1}
                position={isEnd ? `fixed` : `absolute`}
                top={isEnd ? `top: 50%` : `bottom: 150px`}
                transform={isEnd ? `translateY(-50%)` : `translateY(0)`}
                src={
                  isEnd
                    ? value[currentImage === 4 ? 4 : currentImage + 1]
                    : value[4]
                }
              />
            </Wrapper>
            <Wrapper
              ref={heightRef}
              width={width < 900 ? `100%` : `50%`}
              al={`flex-start`}
              ju={`flex-start`}
            >
              <Wrapper
                height={`100vh`}
                padding={width < 900 ? `0 36px` : `0 0 0 65px`}
                ref={tab1Ref}
                al={`flex-start`}
                ju={width < 900 && `flex-end`}
              >
                <Wrapper
                  al={`flex-start`}
                  height={width < 700 ? `auto` : `615px`}
                  ju={`flex-start`}
                >
                  <Title>The gap of security</Title>
                  <Title>Insecure status of us.</Title>
                  <Wrapper
                    width={`20px`}
                    height={`2px`}
                    bgColor={width < 900 ? `transparent` : Theme.white_C}
                    margin={width < 900 ? `20px 0 0` : `50px 0`}
                  ></Wrapper>

                  <Text
                    fontSize={`25px`}
                    lineHeight={`35px`}
                    fontWeight={`300`}
                    color={Theme.greyTheme7_C}
                    display={width < 900 ? `none` : `flex`}
                  >
                    Malware is like a cold.
                  </Text>
                  <Text
                    fontSize={`25px`}
                    lineHeight={`35px`}
                    fontWeight={`300`}
                    color={Theme.greyTheme7_C}
                    display={width < 900 ? `none` : `flex`}
                  >
                    Despite vaccination,
                  </Text>
                  <Text
                    fontSize={`25px`}
                    lineHeight={`35px`}
                    fontWeight={`300`}
                    color={Theme.greyTheme7_C}
                    display={width < 900 ? `none` : `flex`}
                  >
                    If there is a tiny gap in the body’s immune
                  </Text>
                  <Text
                    fontSize={`25px`}
                    lineHeight={`35px`}
                    fontWeight={`300`}
                    color={Theme.greyTheme7_C}
                    display={width < 900 ? `none` : `flex`}
                    margin={`0 0 40px`}
                  >
                    system, it easily penetrates.
                  </Text>
                  <Text
                    fontSize={`18px`}
                    fontWeight={`300`}
                    color={Theme.greyTheme7_C}
                    display={width < 900 ? `flex` : `none`}
                  >
                    Malware is like a cold.
                  </Text>
                  <Text
                    fontSize={`18px`}
                    fontWeight={`300`}
                    color={Theme.greyTheme7_C}
                    display={width < 900 ? `flex` : `none`}
                  >
                    Despite vaccination,
                  </Text>
                  <Text
                    fontSize={`18px`}
                    fontWeight={`300`}
                    color={Theme.greyTheme7_C}
                    display={width < 900 ? `flex` : `none`}
                  >
                    If there is a tiny gap in the body’s
                  </Text>
                  <Text
                    fontSize={`18px`}
                    fontWeight={`300`}
                    color={Theme.greyTheme7_C}
                    display={width < 900 ? `flex` : `none`}
                    margin={width < 700 ? `0 0 20px` : `0 0 40px`}
                  >
                    immune system, it easily penetrates.
                  </Text>
                  <Text
                    fontSize={`25px`}
                    lineHeight={`35px`}
                    fontWeight={`300`}
                    color={Theme.greyTheme7_C}
                    display={width < 900 ? `none` : `flex`}
                  >
                    An easy way to protect our body is to first block
                  </Text>
                  <Text
                    fontSize={`25px`}
                    lineHeight={`35px`}
                    fontWeight={`300`}
                    color={Theme.greyTheme7_C}
                    display={width < 900 ? `none` : `flex`}
                  >
                    the penetration route of the virus like a mask.
                  </Text>
                  <Text
                    fontSize={`18px`}
                    fontWeight={`300`}
                    color={Theme.greyTheme7_C}
                    display={width < 900 ? `flex` : `none`}
                  >
                    An easy way to protect our body is
                  </Text>
                  <Text
                    fontSize={`18px`}
                    fontWeight={`300`}
                    color={Theme.greyTheme7_C}
                    display={width < 900 ? `flex` : `none`}
                  >
                    to first block the penetration
                  </Text>
                  <Text
                    fontSize={`18px`}
                    fontWeight={`300`}
                    color={Theme.greyTheme7_C}
                    display={width < 900 ? `flex` : `none`}
                  >
                    route of the virus like a mask.
                  </Text>
                  {/* <Text
                    fontSize={`18px`}
                    fontWeight={`300`}
                    color={Theme.greyTheme7_C}
                  >
                    unattended means that there is a lapse in security.
                  </Text> */}
                </Wrapper>
              </Wrapper>
              {/*  */}
              <Wrapper
                height={`100vh`}
                padding={width < 900 ? `0 36px` : `0 0 0 50px`}
                ref={tab2Ref}
                al={`flex-start`}
              >
                <Wrapper
                  al={`flex-start`}
                  height={width < 700 ? `auto` : `615px`}
                  ju={`flex-start`}
                >
                  <Text
                    fontSize={width < 700 ? `16px` : `30px`}
                    color={Theme.greyTheme7_C}
                  >
                    Then,
                  </Text>
                  <Text
                    fontSize={width < 700 ? `16px` : `30px`}
                    color={Theme.greyTheme7_C}
                  >
                    How is our computing environment?
                  </Text>
                  <Wrapper
                    ref={check1Ref}
                    ju={`flex-start`}
                    fontSize={`34px`}
                    color={Theme.white_C}
                    dr={`row`}
                  >
                    Are you
                    <Text fontWeight={`900`} fontSize={`40px`} margin={`0 5px`}>
                      securely
                    </Text>
                    managing it?
                  </Wrapper>
                </Wrapper>
              </Wrapper>
              {/*  */}
              <Wrapper
                height={`100vh`}
                padding={width < 900 ? `0 36px` : `0 0 0 50px`}
                ref={tab3Ref}
                al={`flex-start`}
              >
                <Wrapper
                  al={`flex-start`}
                  height={width < 700 ? `auto` : `615px`}
                  ju={`flex-start`}
                >
                  <Title fontSize={width < 900 && `30px`} ref={check4Ref}>
                    A great security,
                  </Title>
                  <Text
                    fontSize={width < 700 ? `20px` : `30px`}
                    fontWeight={`900`}
                    color={Theme.white_C}
                    lineHeight={`1.3`}
                    margin={`15px 0 0`}
                  >
                    is also physically
                  </Text>
                  <Text
                    fontSize={width < 700 ? `20px` : `30px`}
                    fontWeight={`900`}
                    color={Theme.white_C}
                    lineHeight={`1.3`}
                    margin={`0 0 20px`}
                  >
                    blocking vulnerabilities.
                  </Text>

                  <Text
                    fontSize={`22px`}
                    lineHeight={`35px`}
                    fontWeight={`300`}
                    color={Theme.greyTheme7_C}
                    display={width < 900 ? `none` : `flex`}
                  >
                    No matter how much spam you block,
                  </Text>
                  <Text
                    fontSize={`22px`}
                    lineHeight={`35px`}
                    fontWeight={`300`}
                    color={Theme.greyTheme7_C}
                    display={width < 900 ? `none` : `flex`}
                  >
                    even if the intrusion through the network is blocked
                  </Text>
                  <Text
                    fontSize={`22px`}
                    lineHeight={`35px`}
                    fontWeight={`300`}
                    color={Theme.greyTheme7_C}
                    display={width < 900 ? `none` : `flex`}
                  >
                    by security software, sometimes a virus easily break
                  </Text>
                  <Text
                    fontSize={`22px`}
                    lineHeight={`35px`}
                    fontWeight={`300`}
                    color={Theme.greyTheme7_C}
                    display={width < 900 ? `none` : `flex`}
                  >
                    into the system.
                  </Text>
                  <Text
                    fontSize={`22px`}
                    lineHeight={`35px`}
                    fontWeight={`300`}
                    color={Theme.greyTheme7_C}
                    display={width < 900 ? `none` : `flex`}
                    margin={`0 0 40px`}
                  >
                    Maybe right through your employees.
                  </Text>

                  <Text
                    fontSize={`18px`}
                    fontWeight={`300`}
                    color={Theme.greyTheme7_C}
                    display={width < 900 ? `flex` : `none`}
                  >
                    No matter how much spam you block,
                  </Text>
                  <Text
                    fontSize={`18px`}
                    fontWeight={`300`}
                    color={Theme.greyTheme7_C}
                    display={width < 900 ? `flex` : `none`}
                  >
                    even if the intrusion through the
                  </Text>
                  <Text
                    fontSize={`18px`}
                    fontWeight={`300`}
                    color={Theme.greyTheme7_C}
                    display={width < 900 ? `flex` : `none`}
                  >
                    network is blocked by security software, sometimes a virus
                    easily
                  </Text>
                  <Text
                    fontSize={`18px`}
                    fontWeight={`300`}
                    color={Theme.greyTheme7_C}
                    display={width < 900 ? `flex` : `none`}
                  >
                    break into the system.
                  </Text>
                  <Text
                    fontSize={`18px`}
                    fontWeight={`300`}
                    color={Theme.greyTheme7_C}
                    display={width < 900 ? `flex` : `none`}
                    margin={width < 700 ? `0 0 20px` : `0 0 40px`}
                  >
                    Maybe right through your employees.
                  </Text>
                  {/* <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                  margin={`0 0 40px`}
                >
                  즉, 물리적 행동을 못하게 제재하는 것.
                </Text> */}
                  <Text
                    fontSize={width < 700 ? `18px` : `22px`}
                    lineHeight={`35px`}
                    fontWeight={`300`}
                    color={Theme.greyTheme7_C}
                  >
                    Even unintentionally,
                  </Text>
                  <Text
                    fontSize={width < 700 ? `18px` : `22px`}
                    lineHeight={`35px`}
                    fontWeight={`300`}
                    color={Theme.greyTheme7_C}
                    display={width < 700 ? `contents` : `block`}
                  >
                    the personal devices of infected employees spread
                  </Text>
                  <Text
                    fontSize={width < 700 ? `18px` : `22px`}
                    lineHeight={`35px`}
                    fontWeight={`300`}
                    color={Theme.greyTheme7_C}
                    display={width < 700 ? `contents` : `block`}
                  >
                    the virus to and from the company’s ports, infecting
                  </Text>
                  <Text
                    fontSize={width < 700 ? `18px` : `22px`}
                    lineHeight={`35px`}
                    fontWeight={`300`}
                    color={Theme.greyTheme7_C}
                    display={width < 700 ? `contents` : `block`}
                  >
                    the entire company.
                  </Text>
                </Wrapper>
              </Wrapper>
              {/*  */}
              <Wrapper
                height={`100vh`}
                padding={width < 900 ? `0 36px` : `0 0 0 50px`}
                ref={tab4Ref}
                al={`flex-start`}
              >
                <Wrapper
                  al={`flex-start`}
                  height={width < 700 ? `auto` : `615px`}
                  ju={`flex-start`}
                >
                  <Title fontSize={width < 900 && `30px`} ref={check2Ref}>
                    The most effective
                  </Title>
                  <Title fontSize={width < 900 && `30px`}>security.</Title>

                  <Wrapper
                    width={`20px`}
                    height={`2px`}
                    bgColor={width < 900 ? `transparent` : Theme.white_C}
                    margin={width < 900 ? `20px 0 0` : `50px 0`}
                  ></Wrapper>

                  <Text
                    fontSize={`25px`}
                    lineHeight={`35px`}
                    fontWeight={`300`}
                    color={Theme.greyTheme7_C}
                    display={width < 900 ? `none` : `flex`}
                  >
                    Just like blocking the entrance with a double
                  </Text>
                  <Text
                    fontSize={`25px`}
                    lineHeight={`35px`}
                    fontWeight={`300`}
                    color={Theme.greyTheme7_C}
                    display={width < 900 ? `none` : `flex`}
                  >
                    or triple security gate, now the route of data is
                  </Text>
                  <Text
                    fontSize={`25px`}
                    lineHeight={`35px`}
                    fontWeight={`300`}
                    color={Theme.greyTheme7_C}
                    display={width < 900 ? `none` : `flex`}
                  >
                    necessary to be secured. Security incidents
                  </Text>
                  <Text
                    fontSize={`25px`}
                    lineHeight={`35px`}
                    fontWeight={`300`}
                    color={Theme.greyTheme7_C}
                    display={width < 900 ? `none` : `flex`}
                  >
                    proves the necessity, unfortunately.
                  </Text>

                  <Text
                    fontSize={`18px`}
                    fontWeight={`300`}
                    color={Theme.greyTheme7_C}
                    display={width < 900 ? `flex` : `none`}
                  >
                    Just like blocking the entrance with a double
                  </Text>
                  <Text
                    fontSize={`18px`}
                    fontWeight={`300`}
                    color={Theme.greyTheme7_C}
                    display={width < 900 ? `flex` : `none`}
                  >
                    or triple security gate, now the route of data is
                  </Text>
                  <Text
                    fontSize={`18px`}
                    fontWeight={`300`}
                    color={Theme.greyTheme7_C}
                    display={width < 900 ? `flex` : `none`}
                  >
                    necessary to be secured. Security incidents
                  </Text>
                  <Text
                    fontSize={`18px`}
                    fontWeight={`300`}
                    color={Theme.greyTheme7_C}
                    display={width < 900 ? `flex` : `none`}
                    margin={width < 700 ? `0 0 20px` : `0 0 40px`}
                  >
                    proves the necessity, unfortunately.
                  </Text>
                  <Link to="/malware">
                    <Wrapper
                      dr={`row`}
                      ju={`flex-start`}
                      margin={`20px 0 40px`}
                      color={Theme.white_C}
                    >
                      <Text
                        fontWeight={`700`}
                        height={width < 700 ? `auto` : `20px`}
                        lineHeight={`1`}
                        fontSize={width < 700 && `10px`}
                      >
                        See examples of malware intrusion and data leakage
                      </Text>
                      <RiArrowRightSLine size={20} />
                    </Wrapper>
                  </Link>

                  <Text
                    fontSize={width < 700 ? `18px` : `25px`}
                    lineHeight={`35px`}
                    fontWeight={`300`}
                    color={Theme.greyTheme7_C}
                    display={width < 700 ? `contents` : `block`}
                  >
                    SMARTKEEPER completely blocks physical
                  </Text>
                  <Text
                    fontSize={width < 700 ? `18px` : `25px`}
                    lineHeight={`35px`}
                    fontWeight={`300`}
                    color={Theme.greyTheme7_C}
                    display={width < 700 ? `contents` : `block`}
                  >
                    routes of all data. Make a physical layer of
                  </Text>
                  <Text
                    fontSize={width < 700 ? `18px` : `25px`}
                    lineHeight={`35px`}
                    fontWeight={`300`}
                    color={Theme.greyTheme7_C}
                    display={width < 700 ? `contents` : `block`}
                  >
                    security for your company.
                  </Text>
                </Wrapper>
              </Wrapper>
              {/*  */}
              <Wrapper
                height={`100vh`}
                padding={width < 900 ? `0 36px` : `0 0 0 50px`}
                ref={tab5Ref}
                al={`flex-start`}
              >
                <Wrapper
                  al={`flex-start`}
                  height={width < 700 ? `auto` : `615px`}
                  ju={`flex-start`}
                >
                  <Title fontSize={width < 900 && `23px`} ref={check3Ref}>
                    PHYSICAL SECURITY,
                  </Title>
                  <Title fontSize={width < 900 ? `20px` : `34px`}>
                    Now is essential, not a choice.
                  </Title>

                  <Wrapper
                    width={`20px`}
                    height={`2px`}
                    bgColor={width < 900 ? `transparent` : Theme.white_C}
                    margin={width < 900 ? `20px 0 0` : `50px 0`}
                  ></Wrapper>

                  <Text
                    fontSize={width < 700 ? `18px` : `25px`}
                    lineHeight={`35px`}
                    fontWeight={`300`}
                    color={Theme.greyTheme7_C}
                  >
                    Hyperconnected era.
                  </Text>
                  <Text
                    fontSize={width < 700 ? `18px` : `25px`}
                    lineHeight={`35px`}
                    fontWeight={`300`}
                    color={Theme.greyTheme7_C}
                    display={width < 700 ? `contents` : `block`}
                  >
                    Even weak one path can lead to access to
                  </Text>
                  <Text
                    fontSize={width < 700 ? `18px` : `25px`}
                    lineHeight={`35px`}
                    fontWeight={`300`}
                    color={Theme.greyTheme7_C}
                    display={width < 700 ? `contents` : `block`}
                  >
                    a network of all information.
                  </Text>

                  <Text
                    fontSize={width < 700 ? `18px` : `25px`}
                    lineHeight={`35px`}
                    fontWeight={`300`}
                    color={Theme.greyTheme7_C}
                    display={width < 700 ? `contents` : `block`}
                  >
                    Block access to all data as well as USB and
                  </Text>
                  <Text
                    fontSize={width < 700 ? `18px` : `25px`}
                    lineHeight={`35px`}
                    fontWeight={`300`}
                    color={Theme.greyTheme7_C}
                    display={width < 700 ? `contents` : `block`}
                  >
                    network to increase the level of security.
                  </Text>
                  <Text
                    fontSize={width < 700 ? `18px` : `25px`}
                    lineHeight={`35px`}
                    fontWeight={`300`}
                    color={Theme.greyTheme7_C}
                    display={width < 700 ? `contents` : `block`}
                  >
                    Physical vulnerability, which cannot be
                  </Text>
                  <Text
                    fontSize={width < 700 ? `18px` : `25px`}
                    lineHeight={`35px`}
                    fontWeight={`300`}
                    color={Theme.greyTheme7_C}
                    display={width < 700 ? `contents` : `block`}
                  >
                    overlooked.
                  </Text>
                  {/* 
                  <Text
                    fontSize={`18px`}
                    fontWeight={`300`}
                    color={Theme.greyTheme7_C}
                    display={width < 900 ? `flex` : `none`}
                  >
                    is now an asset… Physically block
                  </Text>
                  <Text
                    fontSize={`18px`}
                    fontWeight={`300`}
                    color={Theme.greyTheme7_C}
                    display={width < 900 ? `flex` : `none`}
                  >
                    open ports with SMARTKEEPER
                  </Text>
                  <Text
                    fontSize={`18px`}
                    fontWeight={`300`}
                    color={Theme.greyTheme7_C}
                    display={width < 900 ? `flex` : `none`}
                  >
                    to protect your valuable assets
                  </Text>
                  <Text
                    fontSize={`18px`}
                    fontWeight={`300`}
                    color={Theme.greyTheme7_C}
                    display={width < 900 ? `flex` : `none`}
                  >
                    from industry espionage and
                  </Text>
                  <Text
                    fontSize={`18px`}
                    fontWeight={`300`}
                    color={Theme.greyTheme7_C}
                    display={width < 900 ? `flex` : `none`}
                  >
                    ever-evolving malware.
                  </Text> */}

                  <Link to="/usb">
                    <Wrapper
                      dr={`row`}
                      ju={`flex-start`}
                      margin={`20px 0 0px`}
                      color={Theme.white_C}
                    >
                      <Text
                        fontWeight={`700`}
                        height={`20px`}
                        lineHeight={`1`}
                        fontSize={width < 700 && `10px`}
                      >
                        See SMARTKEEPER PRO products
                      </Text>
                      <RiArrowRightSLine size={20} />
                    </Wrapper>
                  </Link>
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </RsWrapper>

        <Wrapper
          bgColor={Theme.white_C}
          isRelative={true}
          // padding={width < 900 ? `0` : `150px 0 0`}
          height={width < 800 ? `auto` : `100vh`}
        >
          <RsWrapper dr={`row`} height={`100%`}>
            <Wrapper
              // isAbsolute={width < 900 ? false : true}
              // top={width < 900 ? `100px` : `150px`}
              // left={width < 900 ? `36px` : `0`}
              width={width < 800 ? `100%` : `52%`}
              height={`100%`}
            >
              <Wrapper
                height={`100%`}
                ju={`space-around`}
                padding={width < 900 && `100px 36px 50px`}
              >
                <Wrapper al={`flex-start`}>
                  {/* <Wrapper
                    width={`auto`}
                    fontSize={width < 900 ? `21px` : `40px`}
                    isGotham={true}
                                  fontWeight={`700`}

                  >
                    SMARTKEEPER
                  </Wrapper> */}
                  <Image
                    alt="smartkeeper"
                    src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Fmodify%2FSMARTKEEPER_%E1%84%89%E1%85%B3%E1%84%86%E1%85%A1%E1%84%90%E1%85%B3%E1%84%8F%E1%85%B5%E1%84%91%E1%85%A5%E1%84%85%E1%85%A1%E1%86%AB.svg?alt=media&token=e3021d23-3de3-44f5-b34f-f47235f02d5b`}
                    width={width < 800 ? `164px` : `235px`}
                    height={width < 800 && `15px`}
                    margin={width < 800 ? `0 0 20px` : `0 0 5px`}
                  />
                  <Wrapper
                    width={`auto`}
                    fontSize={width < 900 ? `28px` : `45px`}
                    fontWeight={`900`}
                    lineHeight={`1.3`}
                    display={width < 900 ? `none` : `flex`}
                  >
                    Sustainable cybersecurity
                  </Wrapper>
                  <Wrapper
                    width={`auto`}
                    fontSize={width < 900 ? `28px` : `45px`}
                    fontWeight={`900`}
                    lineHeight={`1.3`}
                    display={width < 900 ? `none` : `flex`}
                  >
                    system with one physical
                  </Wrapper>
                  <Wrapper
                    width={`auto`}
                    fontSize={width < 900 ? `28px` : `45px`}
                    fontWeight={`900`}
                    lineHeight={`1.3`}
                    display={width < 900 ? `flex` : `none`}
                  >
                    Sustainable
                  </Wrapper>
                  <Wrapper
                    width={`auto`}
                    fontSize={width < 900 ? `28px` : `45px`}
                    fontWeight={`900`}
                    lineHeight={`1.3`}
                    display={width < 900 ? `flex` : `none`}
                  >
                    cybersecurity system with one physical
                  </Wrapper>
                  <Wrapper
                    width={`auto`}
                    fontSize={width < 900 ? `28px` : `45px`}
                    fontWeight={`900`}
                    lineHeight={`1.3`}
                  >
                    application
                  </Wrapper>
                  <Wrapper
                    width={`auto`}
                    dr={`row`}
                    fontSize={width < 900 ? `18px` : `22px`}
                    fontWeight={`500`}
                    display={width < 900 ? `none` : `flex`}
                    margin={`10px 0 0`}
                  >
                    SMARTKEEPER physically blocks the input/output
                  </Wrapper>
                  <Wrapper
                    width={`auto`}
                    dr={`row`}
                    fontSize={width < 900 ? `18px` : `22px`}
                    fontWeight={`500`}
                    lineHeight={`1.5`}
                    display={width < 900 ? `none` : `flex`}
                  >
                    ports of computers and network devices to prevent
                  </Wrapper>
                  <Wrapper
                    width={`auto`}
                    dr={`row`}
                    fontSize={width < 900 ? `18px` : `22px`}
                    fontWeight={`500`}
                    lineHeight={`1.5`}
                    display={width < 900 ? `none` : `flex`}
                  >
                    unauthorized use.
                  </Wrapper>
                  <Wrapper
                    width={`auto`}
                    dr={`row`}
                    fontSize={width < 900 ? `18px` : `22px`}
                    fontWeight={`500`}
                    lineHeight={`1.5`}
                    margin={`20px 0 0`}
                    display={width < 900 ? `none` : `flex`}
                  >
                    Secure USB, SD Card, RJ45 Ports and more with
                  </Wrapper>
                  <Wrapper
                    width={`auto`}
                    dr={`row`}
                    fontSize={width < 900 ? `18px` : `22px`}
                    fontWeight={`500`}
                    lineHeight={`1.5`}
                    display={width < 900 ? `none` : `flex`}
                  >
                    SMARTKEEPER.
                  </Wrapper>
                </Wrapper>
                <Wrapper
                  al={`flex-start`}
                  display={width < 900 ? `none` : `flex`}
                >
                  <Wrapper
                    width={`auto`}
                    lineHeight={`1.3`}
                    fontSize={`30px`}
                    fontWeight={`900`}
                  >
                    Physical Cybersecurity,
                  </Wrapper>
                  <Wrapper
                    width={`auto`}
                    lineHeight={`1.3`}
                    fontSize={`30px`}
                    fontWeight={`900`}
                  >
                    Simple but effective economical solution!
                  </Wrapper>
                </Wrapper>
              </Wrapper>
            </Wrapper>

            <Image
              width={width < 900 ? `100%` : `48%`}
              isAbsolute={width < 900 && `true`}
              top={width < 900 && `218px`}
              right={width < 900 && `0px`}
              zIndex={width < 900 && `-1`}
              height={width < 900 ? `auto` : `100vh`}
              alt="computer"
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM01%2Fbackground-image-1.png?alt=media&token=7af3f0fd-4dab-47f6-aaf2-3fdf14acc6c6`}
            />

            <Wrapper
              al={`flex-start`}
              display={width < 900 ? `flex` : `none`}
              padding={width < 900 && `40px 36px`}
              margin={`420px 0 0`}
              color={`rgb(36, 36, 36)`}
              bgColor={Theme.lightGrey_C}
              isRelative={true}
            >
              <Wrapper
                isAbsolute={true}
                top={`-150px`}
                left={`0`}
                height={`150px`}
              >
                <Image
                  height={`100%`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2FMM01%2F%E1%84%89%E1%85%A1%E1%84%80%E1%85%A1%E1%86%A8%E1%84%92%E1%85%A7%E1%86%BC%20657.png?alt=media&token=fbe1579f-ab54-4346-a904-fedddee9d0e8`}
                />
              </Wrapper>
              <Wrapper
                width={`auto`}
                dr={`row`}
                fontSize={`18px`}
                fontWeight={`500`}
              >
                SMARTKEEPER physically blocks
              </Wrapper>
              <Wrapper
                width={`auto`}
                dr={`row`}
                fontSize={`18px`}
                fontWeight={`500`}
                lineHeight={`1.5`}
              >
                the input/output ports of
              </Wrapper>
              <Wrapper
                width={`auto`}
                dr={`row`}
                fontSize={`18px`}
                fontWeight={`500`}
                lineHeight={`1.5`}
              >
                computers and network devices
              </Wrapper>
              <Wrapper
                width={`auto`}
                dr={`row`}
                fontSize={`18px`}
                fontWeight={`500`}
                lineHeight={`1.5`}
              >
                to prevent unauthorized use.
              </Wrapper>
              <Wrapper
                width={`auto`}
                dr={`row`}
                fontSize={`18px`}
                fontWeight={`500`}
                lineHeight={`1.5`}
                margin={`25px 0 0`}
              >
                Secure USB, SD Card, RJ45 Ports
              </Wrapper>
              <Wrapper
                width={`auto`}
                dr={`row`}
                fontSize={`18px`}
                fontWeight={`500`}
                lineHeight={`1.5`}
              >
                and more with SMARTKEEPER.
              </Wrapper>
            </Wrapper>
          </RsWrapper>
        </Wrapper>

        <Wrapper
          bgColor={Theme.lightGrey_C}
          padding={width < 900 ? `0 36px` : `30px 0 160px`}
        >
          <Wrapper
            al={`flex-start`}
            display={width < 900 ? `flex` : `none`}
            margin={`0 0 50px`}
          >
            <Wrapper
              width={`auto`}
              lineHeight={`1.3`}
              fontSize={`20px`}
              fontWeight={`700`}
            >
              Physical Cybersecurity,
            </Wrapper>
            <Wrapper
              width={`auto`}
              lineHeight={`1.3`}
              fontSize={`20px`}
              fontWeight={`700`}
            >
              Simple but effective
            </Wrapper>
            <Wrapper
              width={`auto`}
              lineHeight={`1.3`}
              fontSize={`20px`}
              fontWeight={`700`}
            >
              economical solution!
            </Wrapper>
          </Wrapper>
          <RsWrapper>
            <Wrapper dr={`row`} ju={`space-between`}>
              <Wrapper
                width={width < 900 ? `302px` : `calc(100% / 2 - 5px)`}
                height={`auto`}
                padding={width < 900 ? `35px 0px 35px 20px` : `30px 50px`}
                margin={`0 0 10px`}
                isRelative={true}
                attachment={`initial`}
                bgImg={`url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM01%2F%E1%84%87%E1%85%A2%E1%84%82%E1%85%A5_USB%20%E1%84%91%E1%85%A9%E1%84%90%E1%85%B3%E1%84%8B%E1%85%B4%20%E1%84%87%E1%85%A9%E1%84%8B%E1%85%A1%E1%86%AB-1.jpg?alt=media&token=8a5d48dc-6496-46f4-9ada-0762f57e8966")`}
              >
                {/* <Wrapper
                  bgColor={`rgba(0,0,0,0.7)`}
                  isAbsolute={true}
                  height={`100%`}
                  top={`0`}
                  left={`0`}
                ></Wrapper> */}

                <Wrapper al={`flex-start`} height={`100%`} ju={`flex-start`}>
                  <Text
                    fontSize={width < 900 ? `12px` : `18px`}
                    fontWeight={`300`}
                    color={Theme.white_C}
                  >
                    USB Port Security
                  </Text>
                  <Wrapper al={`flex-start`}>
                    <SubTitle>Starting point of Port Security,</SubTitle>
                    <SubTitle>End it with Physical Security.</SubTitle>
                  </Wrapper>
                  <Link to="/security">
                    <Button
                      dr={`row`}
                      margin={width < 700 ? `10px 0 0` : `20px 0 0`}
                    >
                      <Text
                        fontWeight={width < 700 ? `700` : `500`}
                        color={Theme.white_C}
                      >
                        Learn more
                      </Text>
                      <RiArrowRightSLine
                        fontSize={`20px`}
                        color={Theme.white_C}
                      />
                    </Button>
                  </Link>
                </Wrapper>
              </Wrapper>

              <Wrapper
                width={width < 900 ? `302px` : `calc(100% / 2 - 5px)`}
                height={`auto`}
                padding={width < 900 ? `35px 0px 35px 20px` : `30px 50px`}
                margin={`0 0 10px`}
                isRelative={true}
                attachment={`initial`}
                bgImg={`url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM01%2F%E1%84%87%E1%85%A2%E1%84%82%E1%85%A5_%E1%84%82%E1%85%A6%E1%84%90%E1%85%B3%E1%84%8B%E1%85%AF%E1%84%8F%E1%85%B3%20%E1%84%87%E1%85%A9%E1%84%8B%E1%85%A1%E1%86%AB%E1%84%8B%E1%85%B4%20%E1%84%91%E1%85%B5%E1%86%AF%E1%84%89%E1%85%AE%20%E1%84%8C%E1%85%A9%E1%84%92%E1%85%A1%E1%86%B8-1.jpg?alt=media&token=f36f0f3e-da0f-4b74-98e1-3b3dec193f90")`}
              >
                {/* <Wrapper
                  bgColor={`linear-gradient(rgba(0,0,0,0.6), rgba(84, 84, 84, 0.67))`}
                  isAbsolute={true}
                  height={`100%`}
                  top={`0`}
                  left={`0`}
                ></Wrapper> */}

                <Wrapper al={`flex-start`} height={`100%`} ju={`flex-start`}>
                  <Text
                    fontSize={width < 900 ? `12px` : `18px`}
                    fontWeight={`300`}
                    color={Theme.white_C}
                  >
                    The essential combination of network security
                  </Text>
                  <Wrapper al={`flex-start`}>
                    <SubTitle>Network &#38; Intranet :</SubTitle>
                    <SubTitle>Pathway to all assets within</SubTitle>
                  </Wrapper>
                  <Link to="/network">
                    <Button
                      dr={`row`}
                      margin={width < 700 ? `10px 0 0` : `20px 0 0`}
                    >
                      <Text
                        fontWeight={width < 700 ? `700` : `500`}
                        color={Theme.white_C}
                      >
                        Learn more
                      </Text>
                      <RiArrowRightSLine
                        fontSize={`20px`}
                        color={Theme.white_C}
                      />
                    </Button>
                  </Link>
                </Wrapper>
              </Wrapper>

              <Wrapper
                width={width < 900 ? `302px` : `calc(100% / 2 - 5px)`}
                height={width < 900 ? `auto` : `164px`}
                padding={width < 900 ? `20px 0px 20px 20px` : `0 50px`}
                margin={`0 0 10px`}
                isRelative={true}
                attachment={`initial`}
                bgImg={`url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM01%2F%E1%84%87%E1%85%A2%E1%84%82%E1%85%A5_ESS.jpg?alt=media&token=675f4a59-3f93-4510-84d5-7aca832e3265")`}
              >
                {/* <Wrapper
                  bgColor={`rgba(0, 98, 176, 0.7)`}
                  isAbsolute={true}
                  height={`100%`}
                  top={`0`}
                  left={`0`}
                ></Wrapper> */}

                <Wrapper al={`flex-start`} height={`100%`}>
                  {/* <Wrapper
                    al={`flex-start`}
                    fontSize={width < 900 ? `26px` : `30px`}
                    fontWeight={`500`}
                    color={Theme.white_C}
                    isGotham={true}
                  >
                    ESSENTIAL
                  </Wrapper> */}
                  <Image
                    alt="ess"
                    src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM01%2FESSENTIAL_%E1%84%89%E1%85%B3%E1%84%86%E1%85%A1%E1%84%90%E1%85%B3%E1%84%8F%E1%85%B5%E1%84%91%E1%85%A5%E1%84%85%E1%85%A1%E1%86%AB.svg?alt=media&token=d951addf-29e7-4ac0-9f03-95b82bed8605`}
                    width={`174px`}
                    height={`22px`}
                  />
                  <Wrapper
                    al={`flex-start`}
                    fontSize={`14px`}
                    fontWeight={`500`}
                    margin={`5px 0`}
                    color={Theme.white_C}
                  >
                    Ready for Distribution
                  </Wrapper>
                  <Wrapper al={width < 900 ? `flex-start` : `flex-end`}>
                    <ATag
                      width={`auto`}
                      href={`http://smartkeeperessential.com/#/basic`}
                    >
                      <Button
                        dr={`row`}
                        margin={width < 700 ? `10px 0 0` : `0`}
                      >
                        <Text
                          fontWeight={width < 700 ? `700` : `500`}
                          color={Theme.white_C}
                        >
                          Go
                        </Text>
                        <RiArrowRightSLine
                          fontSize={`20px`}
                          color={Theme.white_C}
                        />
                      </Button>
                    </ATag>
                  </Wrapper>
                </Wrapper>
              </Wrapper>

              <Wrapper
                width={width < 900 ? `302px` : `calc(100% / 2 - 5px)`}
                height={width < 900 ? `auto` : `164px`}
                padding={width < 900 ? `20px 0px 20px 20px` : `0 50px`}
                margin={`0 0 10px`}
                isRelative={true}
                attachment={`initial`}
                bgImg={`url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM01%2F%E1%84%87%E1%85%A2%E1%84%82%E1%85%A5_PRO.jpg?alt=media&token=3af4fa39-39b6-40f1-ab4c-9b5aa06723f9")`}
              >
                {/* <Wrapper
                  bgColor={`rgba(16, 16, 16, 0.45)`}
                  isAbsolute={true}
                  height={`100%`}
                  top={`0`}
                  left={`0`}
                ></Wrapper> */}

                <Wrapper al={`flex-start`} height={`100%`}>
                  <Image
                    width={width < 700 ? `58px` : `67px`}
                    src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM01%2FPRO_%E1%84%89%E1%85%B3%E1%84%86%E1%85%A1%E1%84%90%E1%85%B3%E1%84%8F%E1%85%B5%E1%84%91%E1%85%A5%E1%84%85%E1%85%A1%E1%86%AB.svg?alt=media&token=f98e4044-3d42-4b29-95c4-363dc5836188`}
                  />
                  {/* <Wrapper
                    al={`flex-start`}
                    fontSize={width < 900 ? `26px` : `30px`}
                    fontWeight={`500`}
                    color={Theme.white_C}
                    isGotham={true}
                  >
                    PRO
                  </Wrapper> */}
                  <Wrapper
                    al={`flex-start`}
                    fontSize={`14px`}
                    fontWeight={`500`}
                    margin={`5px 0`}
                    color={Theme.white_C}
                  >
                    For Corporate Use
                  </Wrapper>
                  <Wrapper al={width < 900 ? `flex-start` : `flex-end`}>
                    <Link to="/usb">
                      <Button
                        dr={`row`}
                        margin={width < 700 ? `10px 0 0` : `0`}
                      >
                        <Text
                          fontWeight={width < 700 ? `700` : `500`}
                          color={Theme.white_C}
                        >
                          Go
                        </Text>
                        <RiArrowRightSLine
                          fontSize={`20px`}
                          color={Theme.white_C}
                        />
                      </Button>
                    </Link>
                  </Wrapper>
                </Wrapper>
              </Wrapper>

              <Wrapper
                height={width < 900 ? `auto` : `555px`}
                padding={width < 900 ? `35px 0px 35px 20px` : `80px 50px`}
                isRelative={true}
                attachment={`initial`}
                bgPosition={width < 900 && `80%`}
                bgImg={`url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM01%2F%E1%84%87%E1%85%A2%E1%84%82%E1%85%A5_%E1%84%8B%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3.jpg?alt=media&token=d4533b5d-e70f-456c-9886-164ddb70f0e4")`}
                margin={`0 0 50px`}
              >
                <Wrapper al={`flex-start`} height={`100%`}>
                  <Wrapper
                    al={`flex-start`}
                    margin={width < 900 ? `0 0 20px` : `0 0 10px`}
                  >
                    <SubTitle
                      fontSize={`40px`}
                      display={width < 900 ? `none` : `flex`}
                    >
                      Malware intrusion, data breach,
                    </SubTitle>
                    <SubTitle
                      fontSize={`40px`}
                      display={width < 900 ? `none` : `flex`}
                    >
                      no one can be trusted…
                    </SubTitle>
                    <SubTitle
                      fontSize={`40px`}
                      display={width < 900 ? `flex` : `none`}
                    >
                      Malware intrusion,
                    </SubTitle>
                    <SubTitle
                      fontSize={`40px`}
                      display={width < 900 ? `flex` : `none`}
                    >
                      data breach,
                    </SubTitle>
                    <SubTitle
                      fontSize={`40px`}
                      display={width < 900 ? `flex` : `none`}
                    >
                      no one can be trusted…
                    </SubTitle>
                  </Wrapper>
                  <Wrapper
                    al={`flex-start`}
                    fontSize={`18px`}
                    fontWeight={`300`}
                    lineHeight={`1.5`}
                    color={Theme.white_C}
                    display={width < 900 ? `none` : `flex`}
                  >
                    We live in a hyperconnected age, where everyone and
                    everything is connected. With big data, the
                  </Wrapper>
                  <Wrapper
                    al={`flex-start`}
                    fontSize={`18px`}
                    fontWeight={`300`}
                    lineHeight={`1.5`}
                    color={Theme.white_C}
                    display={width < 900 ? `none` : `flex`}
                  >
                    number of data and interconnected devices that companies
                    need to manage is growing
                  </Wrapper>
                  <Wrapper
                    al={`flex-start`}
                    fontSize={`18px`}
                    fontWeight={`300`}
                    lineHeight={`1.5`}
                    color={Theme.white_C}
                    display={width < 900 ? `none` : `flex`}
                  >
                    exponentially. As a result, security vulnerabilities are
                    always on the rise. This is because access to
                  </Wrapper>
                  <Wrapper
                    al={`flex-start`}
                    fontSize={`18px`}
                    fontWeight={`300`}
                    lineHeight={`1.5`}
                    color={Theme.white_C}
                    display={width < 900 ? `none` : `flex`}
                  >
                    all connected systems can be gained even if only one device
                    is accessed. If one PC is infected with
                  </Wrapper>
                  <Wrapper
                    al={`flex-start`}
                    fontSize={`18px`}
                    fontWeight={`300`}
                    lineHeight={`1.5`}
                    color={Theme.white_C}
                    display={width < 900 ? `none` : `flex`}
                    margin={`0 0 50px`}
                  >
                    malware, it is only a matter of time before it spreads
                    throughout the network.
                  </Wrapper>
                  <Link to="/malware">
                    <Button dr={`row`}>
                      <Text
                        fontWeight={width < 700 ? `700` : `500`}
                        color={Theme.white_C}
                      >
                        Learn more
                      </Text>
                      <RiArrowRightSLine
                        fontSize={`18px`}
                        color={Theme.white_C}
                      />
                    </Button>
                  </Link>
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </RsWrapper>
        </Wrapper>
      </WholeWrapper>
    </ParallaxProvider>
  );
};

export default withResizeDetector(MM01Presenter);
