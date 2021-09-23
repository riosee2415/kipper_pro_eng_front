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
    font-size: ${(props) => props.fontSize || `14px`};
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
  useTitle(
    `PRO_Global_Completion of USB Security | ${process.env["HOMEPAGE_NAME"]}`
  );

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
      setTimeout(() => {
        setTestTop(0);
        setIsView(1);
      }, 500);

      setScale1(1.2);
    }

    if (pageYOffset >= temp6Height) {
      setScale2(0.9);
    }

    if (pageYOffset > temp3Height && pageYOffset < temp4Height) {
      if (image1Margin + 50 > 200 && pageY < pageYOffset) {
        setImage1Margin(260);
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
            if (value === "13") {
              $("#app").off("scroll touchmove mousewheel");
            }

            return value === "13" ? "12" : value;
          });
        }, [500]);
      }

      if (isStart2 && temp8Height < pageYOffset) {
      }
      setIsStart(false);
    }

    if (pageYOffset > temp5Height - 500 && pageYOffset < temp3Height) {
      if (image2Margin - 50 < -200 && pageY < pageYOffset) {
        setImage2Margin(-200);
      } else if (pageY > pageYOffset && image2Margin + 30 < 50) {
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
          height={width < 700 ? `600px` : `800px`}
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
                fontWeight={`700`}
                color={Theme.greyTheme3_C}
              >
                USB Physical Security
              </Text>
              <Text fontSize={`48px`} fontWeight={`700`} lineHeight={`1.3`}>
                Ideal combination to perfect
              </Text>
              <Text fontSize={`48px`} fontWeight={`700`} lineHeight={`1.3`}>
                the physical security of USB Ports.
              </Text>
            </Wrapper>

            <Wrapper display={width < 700 ? `flex` : `none`} al={`flex-start`}>
              <Text
                fontSize={`16px`}
                fontWeight={`700`}
                color={Theme.greyTheme3_C}
              >
                USB Physical Security
              </Text>
              <Text fontSize={`27px`} lineHeight={`1.2`} fontWeight={`700`}>
                Ideal combination
              </Text>
              <Text fontSize={`27px`} lineHeight={`1.2`} fontWeight={`700`}>
                to perfect
              </Text>
              <Text fontSize={`27px`} lineHeight={`1.2`} fontWeight={`700`}>
                the physical security of USB Ports.
              </Text>
            </Wrapper>

            <Wrapper
              dr={`row`}
              ju={`flex-start`}
              al={width < 700 && `flex-start`}
              padding={width < 700 ? `20px 0 0` : `170px 0 0`}
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
                  margin={width < 700 ? `100px 30px 0 0` : `70px 30px 0 60px`}
                >
                  <Image
                    width={width < 700 ? `136px` : `200px`}
                    alt="usb port lock-font"
                    src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Fmodify%2FUSB%20Port%20Lock_USB%E1%84%87%E1%85%A9%E1%84%8B%E1%85%A1%E1%86%AB%E1%84%8B%E1%85%B4%E1%84%8B%E1%85%AA%E1%86%AB%E1%84%89%E1%85%A5%E1%86%BC.svg?alt=media&token=0b441f0d-6603-47ed-86b0-f163c13a6293`}
                  />
                  <Text
                    fontSize={width < 700 ? `12px` : `18px`}
                    fontWeight={`700`}
                  >
                    (CSK-UL10)
                  </Text>
                  <Link to="/usb/611eb54dc3605319d4babda5">
                    <ArrowIcon>
                      Learn more
                      <FaChevronRight />
                    </ArrowIcon>
                  </Link>
                </Wrapper>
                <Wrapper
                  width={`auto`}
                  isAbsolute={true}
                  bottom={width < 900 ? (width < 700 ? `-34%` : `-7%`) : `-15%`}
                  left={width < 900 ? (width < 700 ? `25%` : `40%`) : `36%`}
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
                padding={width < 700 ? `0 0 0 40px` : `0`}
                al={`flex-start`}
                ju={`flex-start`}
              >
                <Wrapper
                  width={`auto`}
                  height={`100%`}
                  isAbsolute={true}
                  top={width < 1100 ? (width < 700 ? `56%` : `35%`) : `30%`}
                  right={
                    width < 1100
                      ? width < 900
                        ? width < 700
                          ? `-58%`
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
                    src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Fmodify%2FLink%20Lock_USB%E1%84%87%E1%85%A9%E1%84%8B%E1%85%A1%E1%86%AB%E1%84%8B%E1%85%B4%E1%84%8B%E1%85%AA%E1%86%AB%E1%84%89%E1%85%A5%E1%86%BC.svg?alt=media&token=7c2c5264-9d74-47fd-b751-0c0aae7831e5`}
                  />
                  <Text
                    fontSize={width < 900 ? `12px` : `18px`}
                    margin={`5px 0 0`}
                  >
                    (CSK-LK11)
                  </Text>
                  <Link to="/usb/611eb54dc3605319d4babda8">
                    <ArrowIcon>
                      Learn more
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
        padding={width < 900 ? `0 0 30px` : `180px 0`}
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
              margin={width < 700 ? `60px 0 10px` : `0 0 10px`}
              alt="usb port lock-font"
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM17%2FUSB%20Port%20Lock_USB%E1%84%87%E1%85%A9%E1%84%8B%E1%85%A1%E1%86%AB%E1%84%8B%E1%85%B4%E1%84%8B%E1%85%AA%E1%86%AB%E1%84%89%E1%85%A5%E1%86%BC.svg?alt=media&token=b00404ee-2eff-4da2-a7a9-a627772db5da`}
            />
            {/* <Text
              fontSize={width < 900 ? `20px` : `34px`}
              700
              lineHeight={`1.3`}
            >
              USB 포트락
            </Text> */}
            <Text
              fontSize={width < 900 ? `12px` : `25px`}
              fontWeight={`500`}
              color={Theme.greyTheme7_C}
            >
              CSK-UL10
            </Text>

            <Wrapper
              display={width < 900 ? `none` : `flex`}
              al={`flex-start`}
              padding={`40px 0 50px`}
            >
              <Text fontSize={`30px`} fontWeight={`700`}>
                Block unused USB ports with USB Port Locks
              </Text>
              <Text fontSize={`24px`} color={Theme.greyTheme7_C}>
                You would not use any lock or any key
              </Text>
              <Text fontSize={`24px`} color={Theme.greyTheme7_C}>
                for your home’s front door.
              </Text>
              <Text fontSize={`24px`} color={Theme.greyTheme7_C}>
                Why would you use locking devices for your USB ports
              </Text>
              <Text fontSize={`24px`} color={Theme.greyTheme7_C}>
                because they are “cheaper” or “easy” to purchase?
              </Text>
            </Wrapper>
            <Wrapper
              display={width < 900 ? `flex` : `none`}
              al={`flex-start`}
              padding={`120px 0 20px`}
            >
              <Text fontSize={`20px`} fontWeight={`700`}>
                Block unused USB ports
              </Text>
              <Text fontSize={`20px`} fontWeight={`700`}>
                with USB Port Locks
              </Text>
              <Text fontSize={`16px`} color={Theme.greyTheme7_C}>
                You would not use any lock or any
              </Text>
              <Text fontSize={`16px`} color={Theme.greyTheme7_C}>
                key for your home’s front door.
              </Text>
              <Text fontSize={`16px`} color={Theme.greyTheme7_C}>
                Why would you use locking devices for
              </Text>
              <Text fontSize={`16px`} color={Theme.greyTheme7_C}>
                your USB ports because they are “cheaper” or “easy” to purchase?
              </Text>
            </Wrapper>
          </RsWrapper>
        </Wrapper>
      </Wrapper>

      <Wrapper
        bgColor={width < 700 ? `none` : Theme.greyTheme3_C}
        height={width < 700 ? `auto` : `300px`}
      >
        <RsWrapper>
          <Wrapper
            // transform={width < 700 ? `` : `scale(${scale1})`}
            height={width < 700 ? `230px` : `100%`}
            color={Theme.white_C}
            bgSize={width < 700 ? `cover` : ``}
            bgImg={
              width < 700
                ? `url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM17%2FbgImg.png?alt=media&token=6710cec1-200d-45e0-a720-951ae2f5b83d")`
                : ``
            }
            attachment={`initial`}
            // bgPosition={`center 43%`}
            margin={width < 700 ? `-55px 0 0` : `-100px 0 0`}
            isRelative={true}
            ref={temp2Ref}
            transition={`all 1.5s`}
          >
            <Image
              isAbsolute={true}
              top={`0`}
              left={width < 700 ? `10%` : `27%`}
              transform={width < 700 ? `` : `scale(${scale1})`}
              width={width < 700 ? `80%` : `46%`}
              alt="usb"
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM17%2F0.5mm.png?alt=media&token=08dbc3d5-0c4d-491e-8e10-317ab3e00d83`}
            />
            <Wrapper
              display={width < 700 ? `none` : `flex`}
              isAbsolute={true}
              top={`${testTop}%`}
              left={`0`}
            >
              <Text
                fontSize={width < 700 ? `20px` : `29px`}
                lineHeight={`1`}
                opacity={isView}
                fontWeight={`900`}
              >
                Enhanced Security.
              </Text>
              <Text
                fontSize={width < 700 ? `20px` : `29px`}
                margin={`0 0 10px`}
                opacity={isView}
                fontWeight={`900`}
              >
                Exceptionally thin Key Hole.
              </Text>

              <Text
                fontSize={width < 700 ? `18px` : `21px`}
                fontWeight={`400`}
                opacity={isView}
                lineHeight={`1`}
              >
                Tamper-proof key hole, designed to
              </Text>
              <Text
                fontSize={width < 700 ? `18px` : `21px`}
                fontWeight={`400`}
                opacity={isView}
              >
                prevent removal with foreign objects.
              </Text>
            </Wrapper>

            <Wrapper
              display={width < 700 ? `flex` : `none`}
              isAbsolute={true}
              top={`15px`}
              left={`0`}
            >
              <Text fontSize={width < 700 ? `20px` : `29px`} fontWeight={`900`}>
                Enhanced Security.
              </Text>
              <Text
                fontSize={width < 700 ? `20px` : `29px`}
                fontWeight={`900`}
                margin={`0 0 10px`}
              >
                Exceptionally thin Key Hole.
              </Text>
            </Wrapper>

            <Wrapper
              padding={`100px 0 0`}
              display={width < 700 ? `flex` : `none`}
            >
              <Text
                fontSize={width < 700 ? `14px` : `21px`}
                color={Theme.black_C}
                fontWeight={`700`}
              >
                Tamper-proof key hole, designed to
              </Text>
              <Text
                fontSize={width < 700 ? `14px` : `21px`}
                color={Theme.black_C}
                fontWeight={`700`}
              >
                prevent removal with foreign objects.
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
        height={width < 700 ? `600px` : `auto`}
        padding={width < 700 ? `0 0 130px` : `100px 0 150px`}
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
          fontWeight={`700`}
          padding={width < 900 && `0 35px`}
        >
          <Wrapper
            isGotham={true}
            margin={`0 0 15px`}
            width={`auto`}
            dr={`row`}
            al={`flex-end`}
            fontSize={width < 700 ? `24px` : `34px`}
          >
            <Wrapper width={`auto`}>
              <SpanText
                fontSize={width < 700 ? `50px` : `80px`}
                fontWeight={`700`}
              >
                {!isFirst ? (
                  `0`
                ) : (
                  <AnimatedNumber
                    className="500"
                    value={500}
                    formatValue={(value) => value.toFixed(0)}
                    duration={2000}
                  />
                )}
              </SpanText>
            </Wrapper>
            K
          </Wrapper>
          <Text
            fontSize={width < 700 ? `14px` : `20px`}
            color={Theme.darkGrey_C}
          >
            500K units sold annually to various sectors
          </Text>
          {/* <Text
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
          </Text> */}

          <Wrapper
            isGotham={true}
            margin={`80px 0 15px`}
            width={`auto`}
            dr={`row`}
            al={`flex-end`}
            fontSize={width < 700 ? `24px` : `34px`}
          >
            <Wrapper width={`auto`}>
              <SpanText
                fontSize={width < 700 ? `50px` : `80px`}
                fontWeight={`700`}
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
            </Wrapper>
            Years
          </Wrapper>
          <Text
            fontSize={width < 700 ? `14px` : `20px`}
            color={Theme.darkGrey_C}
          >
            SMARTKEEPER’s best selling item for
          </Text>
          <Text
            fontSize={width < 700 ? `14px` : `20px`}
            color={Theme.darkGrey_C}
          >
            10+ years. Proven solution by satisfied
          </Text>
          <Text
            fontSize={width < 700 ? `14px` : `20px`}
            color={Theme.darkGrey_C}
          >
            customers.
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
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM17%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%206538.png?alt=media&token=09afc156-fe95-465e-b3ad-d2f23ca9d5b3`}
            />
          </Wrapper>
        </RsWrapper>

        <Wrapper display={width < 700 ? `flex` : `none`} margin={`-70px 0 0`}>
          <Image
            alt="mobileImg"
            shadow={`2px 2px 7px rgba(3, 4, 2, 0.31)`}
            radius={`30px`}
            width={`85%`}
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM17_mobile%2Fmobile_eng_1.png?alt=media&token=5f8362e8-1700-4306-8ac9-e542424c251f`}
          />
          <Image
            margin={`30px 0`}
            shadow={`2px 2px 7px rgba(3, 4, 2, 0.31)`}
            radius={`30px`}
            alt="mobileImg"
            width={`85%`}
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM17_mobile%2Fmobile_eng_3.png?alt=media&token=e14f26ca-6834-4f1e-ad7c-0da1775a49c3`}
          />
          <Image
            alt="mobileImg"
            width={`85%`}
            shadow={`2px 2px 7px rgba(3, 4, 2, 0.31)`}
            radius={`30px`}
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2FMM17%2F%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%20%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%20706.png?alt=media&token=2dd62ff6-e1f6-427e-b34d-45d9c7807092`}
          />
        </Wrapper>

        <RsWrapper
          display={width < 700 ? `none` : `flex`}
          al={`flex-start`}
          ju={`flex-end`}
          padding={`0 0 50px`}
        >
          <Text fontSize={`30px`} fontWeight={`900`} margin={`0 0 10px`}>
            For any standard USB Port (Type A)
          </Text>
          <Text fontSize={`24px`} color={Theme.greyTheme4_C}>
            Desktop PC (front &#38; rear), Laptop computers, network devices,
            industrial equipment, etc.
          </Text>

          <Text fontSize={`24px`} color={Theme.greyTheme4_C}>
            Easily installed by hand and does not require software or
            electricity.
          </Text>

          {/* <Link to="/usb/611eb54dc3605319d4babda5">
            <ArrowIcon fontWeight={`700`} margin={`10px 0 0`}>
              Learn more about USB Port Lock
              <FaChevronRight />
            </ArrowIcon>
          </Link> */}
        </RsWrapper>
        <RsWrapper
          display={width < 700 ? `flex` : `none`}
          al={`flex-start`}
          padding={`0 35px`}
        >
          <Text fontSize={`18px`} margin={`50px 0 0`}>
            For any standard USB Port (Type A)
          </Text>
          {/* <Text fontSize={`20px`}>어디라도</Text> */}
          <Text
            fontSize={`18px`}
            color={Theme.greyTheme4_C}
            margin={`20px 0 0`}
          >
            Desktop PC (front &#38; rear), Laptop computers, network devices,
          </Text>
          <Text fontSize={`18px`} color={Theme.greyTheme4_C}>
            industrial equipment, etc.
          </Text>
          <Text fontSize={`18px`} color={Theme.greyTheme4_C}>
            Easily installed by hand and does
          </Text>
          <Text fontSize={`18px`} color={Theme.greyTheme4_C}>
            not require software or electricity.
          </Text>

          <ArrowIcon fontWeight={`700`} margin={`10px 0 0`}>
            Learn more about USB Port Lock
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
          <RsWrapper
            al={`flex-start`}
            ju={`flex-start`}
            color={Theme.white_C}
            padding={width < 800 ? `50px 35px 0` : `180px 0 0`}
          >
            <Wrapper width={`auto`} al={`flex-start`}>
              <Image
                width={width < 900 ? `145px` : `338px`}
                alt="link lock-font"
                margin={width < 700 ? `0 0 10px` : `0`}
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Fmodify%2FLink%20Lock_USB%E1%84%87%E1%85%A9%E1%84%8B%E1%85%A1%E1%86%AB%E1%84%8B%E1%85%B4%E1%84%8B%E1%85%AA%E1%86%AB%E1%84%89%E1%85%A5%E1%86%BC.svg?alt=media&token=7c2c5264-9d74-47fd-b751-0c0aae7831e5`}
              />
              {/* <Text
                fontSize={width < 900 ? `20px` : `34px`}
                700
              >
                링크락
              </Text> */}
              <Text
                fontSize={width < 900 ? `14px` : `25px`}
                fontWeight={`500`}
                color={Theme.greyTheme7_C}
              >
                CSK-LK11
              </Text>
              <Wrapper
                al={`flex-start`}
                padding={width < 700 ? `30px 0 0` : `100px 0 0`}
              >
                <Text
                  fontSize={width < 900 ? `20px` : `30px`}
                  fontWeight={`700`}
                >
                  Securing USB Devices
                </Text>
                <Text
                  fontSize={width < 900 ? `15px` : `24px`}
                  color={Theme.greyTheme7_C}
                  display={width < 700 ? `none` : `flex`}
                >
                  Now that open USB ports are secured,
                </Text>
                <Text
                  display={width < 700 ? `none` : `flex`}
                  fontSize={width < 900 ? `15px` : `24px`}
                  color={Theme.greyTheme7_C}
                >
                  what about USB devices that are in use?
                </Text>

                <Text
                  display={width < 700 ? `flex` : `none`}
                  fontSize={width < 900 ? `18px` : `24px`}
                  color={Theme.greyTheme7_C}
                >
                  Now that open USB ports are
                </Text>
                <Text
                  display={width < 700 ? `flex` : `none`}
                  fontSize={width < 900 ? `18px` : `24px`}
                  color={Theme.greyTheme7_C}
                >
                  secured, what about USB devices that are in use?
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
            <Text fontSize={`30px`} fontWeight={`900`}>
              If you can’t secure it,
            </Text>
            <Text fontSize={`30px`} fontWeight={`900`} margin={`0 0 20px`}>
              there is still a lapse in security.
            </Text>
          </Wrapper>

          <Text fontSize={`20px`} color={Theme.darkGrey_C}>
            Link Lock is designed to physically prevent unauthorized
          </Text>
          <Text fontSize={`20px`} color={Theme.darkGrey_C}>
            removal of attached USB devices.
          </Text>
          <Text fontSize={`20px`} color={Theme.darkGrey_C}>
            It can be released only by using the Universal Lock Key of
          </Text>
          <Text fontSize={`20px`} color={Theme.darkGrey_C}>
            the matching pattern.
          </Text>
          <Text fontSize={`20px`} color={Theme.darkGrey_C} fontWeight={`700`}>
            Link and Lock it down!
          </Text>
          {/* <Text fontSize={`20px`} color={Theme.darkGrey_C}>
            사전에 인가한 장치만 사용할 수 있도록 설치하여
          </Text>
          <Text fontSize={`20px`} color={Theme.darkGrey_C} margin={`0 0 20px`}>
            내부의 보안규정을 준수할 수 있도록 도와드립니다.
          </Text> */}

          <Link to="usb/611eb54dc3605319d4babda8">
            <ArrowIcon>
              Learn more about Link Lock
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
                Use with <SpanText fontWeight={`700`}>USB Port Lock</SpanText>
              </Text>
              <Text fontSize={`20px`}>to enhance physical</Text>
              <Text fontSize={`20px`}>cybersecurity. </Text>
              <Link to="/usb/611eb54dc3605319d4babda5">
                <ArrowIcon margin={`22px 0 0`}>
                  Learn more bout USB Port Lock
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
          <Text fontSize={`20px`} fontWeight={`900`}>
            If you can’t secure it,
          </Text>

          <Text fontSize={`20px`} fontWeight={`900`}>
            there is still a lapse
          </Text>
          <Text fontSize={`20px`} fontWeight={`900`} margin={`0 0 50px`}>
            in security.
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
          Link Lock is designed to physically
        </Text>
        <Text fontSize={`18px`} color={Theme.darkGrey_C}>
          prevent unauthorized removal of
        </Text>
        <Text fontSize={`18px`} color={Theme.darkGrey_C} margin={`0 0 35px`}>
          attached USB devices.
        </Text>
        <Text fontSize={`18px`} color={Theme.darkGrey_C}>
          It can be released only by using the
        </Text>
        <Text fontSize={`18px`} color={Theme.darkGrey_C}>
          Universal Lock Key of the matching pattern.
        </Text>
        <Text
          fontSize={`18px`}
          color={Theme.darkGrey_C}
          fontWeight={`700`}
          margin={`0 0 10px`}
        >
          Link and Lock it down!
        </Text>

        <Link to="/usb/611eb54dc3605319d4babda8">
          <ArrowIcon>
            Learn more about Link Lock
            <FaChevronRight />
          </ArrowIcon>
        </Link>
        <Wrapper
          margin={`60px 0 0`}
          dr={`row`}
          border={`3px dotted rgba(98, 98, 101, 0.5)`}
          radius={`30px`}
          padding={`20px 0`}
          al={width < 700 ? `center` : `flex-start`}
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
              Use with <SpanText fontWeight={`700`}>USB Port Lock</SpanText>
            </Text>
            <Text fontSize={`16px`} lineHeight={`1.4`} fontWeight={`400`}>
              to enhance physical
            </Text>
            <Text fontSize={`16px`} lineHeight={`1.4`} fontWeight={`400`}>
              cybersecurity.
            </Text>
            <Link to="/usb/611eb54dc3605319d4babda5">
              <ArrowIcon
                fontSize={width < 700 && `12px`}
                color={Theme.greyTheme4_C}
                margin={`18px 0 0`}
              >
                Learn more bout USB Port Lock
                <FaChevronRight />
              </ArrowIcon>
            </Link>
          </Wrapper>
        </Wrapper>
      </Wrapper>

      <Wrapper
        display={width < 900 ? `none` : `flex`}
        padding={`140px 0`}
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
              width={width < 900 ? `290px` : `585px`}
              alt="svg"
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM17%2FUniversal%20Lock%20Key.svg?alt=media&token=f531658c-f34f-42b1-838b-2cc78e0e14a3`}
            />
          </Wrapper>
          <Wrapper color={Theme.white_C} margin={`300px 0 0`}>
            <Text fontSize={`20px`}>
              As the name suggests, the key is universal.
            </Text>
            <Text fontSize={`20px`} margin={`0 0 50px`}>
              ONE key can manage 40+ SMARTKEEPER products to enhance user
              efficiency.
            </Text>
            <Text fontSize={`20px`}>
              Numerous confidential key patterns are only compatible
            </Text>
            <Text fontSize={`20px`} margin={`0 0 90px`}>
              with products of matching pattern.
            </Text>

            <Link to="/lock/611eb54dc3605319d4babda2">
              <ArrowIcon fontWeight={`700`}>
                Learn more about Universal Lock Key
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
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Fmodify%2FUniversal%20Lock%20Key_USB%E1%84%87%E1%85%A9%E1%84%8B%E1%85%A1%E1%86%AB%E1%84%8B%E1%85%B4%E1%84%8B%E1%85%AA%E1%86%AB%E1%84%89%E1%85%A5%E1%86%BC.svg?alt=media&token=0ce007e4-d5c8-4ac3-8bcf-e6be35ffde08`}
          />
          <Wrapper
            color={Theme.white_C}
            isAbsolute={true}
            bottom={`6%`}
            left={`0`}
            fontSize={`18px`}
          >
            <Text fontWeight={`400`}>As the name suggests,</Text>
            <Text fontWeight={`400`}>the key is universal.</Text>
            <Text fontWeight={`400`}>ONE key can manage 40+</Text>
            <Text fontWeight={`400`}>SMARTKEEPER products to enhance</Text>
            <Text fontWeight={`400`} margin={`0 0 30px`}>
              user efficiency.
            </Text>

            <Text fontWeight={`400`}>Numerous confidential key patterns</Text>
            <Text fontWeight={`400`}>are only compatible with </Text>
            <Text fontWeight={`400`} margin={`0 0 30px`}>
              products of matching pattern.
            </Text>
            <Link to="/lock/611eb54dc3605319d4babda2">
              <ArrowIcon fontWeight={`700`}>
                Learn more about Universal Lock Key
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
