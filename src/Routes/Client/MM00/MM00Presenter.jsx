import React, { useEffect, useState } from "react";
import withSplitting from "../../../Lib/withSplitting";
import {
  WholeWrapper,
  Wrapper,
  RsWrapper,
  Text,
  Image,
  CommonSubTitle,
  SpanText,
} from "../../../Components/CommonComponents";
import styled from "styled-components";
import useTitle from "@4leaf.ysh/use-title";
import { withResizeDetector } from "react-resize-detector";
import Theme from "../../../Styles/Theme";
import { RiArrowRightSLine } from "react-icons/ri";

const Button = styled(Wrapper)`
  width: auto;
  color: ${Theme.white_C};
  position: relative;
  cursor: pointer;

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

  @media (max-width: 700px) {
    padding: 0;
  }
`;

const MoveImage = styled(Image)`
  transition: all 1s;

  position: absolute;
  top: ${(props) => props.top};
  top: ${(props) => props.right};
  transform: ${(props) => props.transform};
`;

const Popup = withSplitting(() =>
  import("../../../Components/popup/Popup.jsx")
);

const MM00Presenter = ({
  width,
  documentRef,

  //
  moveLinkHandler,
  mobileBannerData,
  mainBannerData,
}) => {
  useTitle(`${process.env["HOMEPAGE_NAME"]}`);

  const [lockpinMargin, setLockpinMargin] = useState(100);

  const [pageY, setPageY] = useState(0);
  const [top1, setTop1] = useState(0);
  const [top2, setTop2] = useState(0);

  const handleScroll = () => {
    const { pageYOffset } = window;

    if (pageY > pageYOffset) {
      if (top1 + 50 > 0) {
        setTop1(0);
      } else {
        setTop1(top1 + 50);
      }

      if (top2 - 50 < 0) {
        setTimeout(() => {
          setTop2(0);
        }, 100);
      } else {
        setTimeout(() => {
          setTop2(top2 - 50);
        }, 100);
      }

      // setLockpinMargin(lockpinMargin + 50);
    } else {
      if (top1 - 30 < -100) {
        setTop1(-100);
      } else {
        setTop1(top1 - 30);
      }

      if (top2 + 50 > 100) {
        setTimeout(() => {
          setTop2(100);
        }, 100);
      } else {
        setTimeout(() => {
          setTop2(top2 + 50);
        }, 100);
      }

      // setLockpinMargin(lockpinMargin - 50);
    }
    setPageY(pageYOffset);
  };

  useEffect(() => {
    documentRef.current.addEventListener("scroll", handleScroll);
    return () =>
      documentRef.current.removeEventListener("scroll", handleScroll);
  }, [pageY]);

  useEffect(() => {
    setTimeout(() => {
      setLockpinMargin(210);
    }, 1000);
  }, []);

  return (
    <WholeWrapper bgColor={Theme.greyTheme3_C}>
      <Wrapper
        width={`100%`}
        height={width < 700 ? `1100px` : `1115px`}
        bgImg={`url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM00%2FMAIN_BACKGROUND_1.png?alt=media&token=68067aff-5329-467d-8f68-baddc84c0d8a")`}
        overflow={`hidden`}
      >
        <RsWrapper isRelative={true}>
          {/* <Wrapper isAbsolute={true} top={`134px`} left={`0`} width={`90%`}>
            <Image
              display={width < 700 ? `none` : `flex`}
              margin={`0 0 43px`}
              width={`100%`}
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM00%2FSMARTKEEPER-PRO_PRO_Home.png?alt=media&token=33eb0674-52f6-4398-a799-b35038d74695`}
            />
          </Wrapper> */}
          <Wrapper>
            <MoveImage
              width={width < 700 ? `450px` : `600px`}
              top={`${top1}px`}
              margin={
                width < 700
                  ? `${lockpinMargin}px 0 -300px 0`
                  : `${lockpinMargin}px 0 -300px 0px`
              }
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM00%2FMAIN_IMAGE_1.png?alt=media&token=9bcfe0b7-65d5-4890-a94a-8849f14d5424`}
            />
            <MoveImage
              zIndex={`-20`}
              bottom={`${top2}px`}
              left={`42%`}
              width={width < 700 ? `250px` : `280px`}
              margin={
                width < 700
                  ? `${lockpinMargin}px 0 0 -100px`
                  : `${lockpinMargin}px 0 0px`
              }
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM00%2FMAIN_IMAGE_2.png?alt=media&token=6399def0-15c6-48ca-b136-b5647db12722`}
            />
          </Wrapper>
          <Wrapper
            height={`100%`}
            isAbsolute={true}
            top={width < 700 ? `50px` : `404px`}
            left={`0`}
            al={`flex-start`}
            ju={`flex-start`}
            padding={width < 700 ? `50px 35px 0` : `0`}
          >
            {/* <Text
              display={width < 700 ? `flex` : `none`}
              fontWeight={`700`}
              color={`rgba(255,255,255,0.04)`}
              fontSize={`30px`}
              isGotham={true}
            >
              SMARTKEEPER PRO
            </Text> */}

            <Wrapper al={`flex-start`}>
              {/* <CommonSubTitle
                display={width < 700 ? `none` : `flex`}
                lineHeight={`1.0`}
                fontWeight={`400`}
                fontSize={`60px`}
                margin={`0 0 5px`}
                isGotham={true}
              >
                Pro's Choice
              </CommonSubTitle> */}
              <Image
                width={`380px`}
                display={width < 700 ? `none` : `flex`}
                margin={`0 0 5px`}
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM00%2FPro-s-Choice_PRO_Home.png?alt=media&token=cde46dfb-8f47-4d7c-927a-9b52d5490ca1`}
              />
              <Image
                width={`50%`}
                margin={`0 0 10px`}
                display={width < 700 ? `flex` : `none`}
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM00%2FPro-s-Choice_M.png?alt=media&token=63b1bca5-2fa4-41fc-820b-11a213880eaa`}
              />
              {/* web */}
              <Text
                fontSize={`18px`}
                fontWeight={`700`}
                color={Theme.white_C}
                display={width < 700 ? `none` : `flex`}
              >
                The ability to manage everything with ONE key.
              </Text>

              <Text
                color={Theme.greyTheme6_C}
                display={width < 700 ? `none` : `flex`}
                fontSize={`18px`}
                fontWeight={`700`}
              >
                A cyber security system that can be used safely on numerous
                devices
              </Text>
              <Text
                color={Theme.greyTheme6_C}
                display={width < 700 ? `none` : `flex`}
                fontSize={`18px`}
                fontWeight={`700`}
              >
                with confidential key patterns. SMARTKEEPER is the physical
                cybersecurity
              </Text>
              <Text
                color={Theme.greyTheme6_C}
                display={width < 700 ? `none` : `flex`}
                fontSize={`18px`}
                fontWeight={`700`}
              >
                system chosen by leaders and professionals of 3,000+ sites
                worldwide from
              </Text>
              <Text
                color={Theme.greyTheme6_C}
                display={width < 700 ? `none` : `flex`}
                fontSize={`18px`}
                fontWeight={`700`}
              >
                a wide range of industries.
              </Text>

              <Wrapper
                dr={`row`}
                ju={`flex-start`}
                margin={`10px 0 0`}
                display={width < 700 ? `none` : `flex`}
              >
                {/* <Image
                  width={`15%`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM00%2FUniversal-Lock-Key_PRO_Home.png?alt=media&token=85a4bf88-cbac-4f42-8422-8559830602da`}
                /> */}
                <Button dr={`row`}>
                  <Wrapper
                    width={`auto`}
                    fontWeight={`bold`}
                    margin={`0 10px 0 0`}
                  >
                    Universal Lock Key
                  </Wrapper>
                  <Text
                    fontSize={`16px`}
                    fontWeight={`700`}
                    color={Theme.white_C}
                  >
                    Learn more
                  </Text>
                  <RiArrowRightSLine fontSize={`25px`} color={Theme.white_C} />
                </Button>
              </Wrapper>
              {/* mobile */}
              <Text
                display={width < 700 ? `flex` : `none`}
                color={Theme.white_C}
                fontSize={`18px`}
                fontWeight={`700`}
              >
                The ability to manage everything
              </Text>

              <Text
                display={width < 700 ? `flex` : `none`}
                color={Theme.white_C}
                fontWeight={`700`}
                fontSize={`18px`}
              >
                with ONE key.
              </Text>

              <Text
                display={width < 700 ? `flex` : `none`}
                color={Theme.greyTheme6_C}
                fontSize={`17px`}
                fontWeight={`700`}
              >
                A cyber security system that can be used safely on numerous
                devices
              </Text>
              <Text
                display={width < 700 ? `flex` : `none`}
                color={Theme.greyTheme6_C}
                fontSize={`17px`}
                fontWeight={`700`}
              >
                with confidential key patterns. SMARTKEEPER is the physical
              </Text>
              <Text
                display={width < 700 ? `flex` : `none`}
                color={Theme.greyTheme6_C}
                fontSize={`17px`}
                fontWeight={`700`}
              >
                cybersecuri system chosen by leaders and professionals of 3,000+
              </Text>
              <Text
                display={width < 700 ? `flex` : `none`}
                color={Theme.greyTheme6_C}
                fontSize={`17px`}
                fontWeight={`700`}
              >
                sites worldwide fro a wide range of industries.
              </Text>

              <Wrapper
                dr={`row`}
                ju={`flex-start`}
                margin={`10px 0 0`}
                display={width < 700 ? `flex` : `none`}
              >
                {/* <Image
                  width={`40%`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM00%2FUniversal-Lock-Key_PRO_Home.png?alt=media&token=85a4bf88-cbac-4f42-8422-8559830602da`}
                /> */}
                <Button dr={`row`} margin={`0 0 0 3px`}>
                  <Wrapper
                    width={`auto`}
                    fontWeight={`bold`}
                    margin={`0 10px 0 0`}
                  >
                    Lock Key Mini
                  </Wrapper>
                  <Text
                    fontSize={`16px`}
                    fontWeight={`700`}
                    color={Theme.white_C}
                  >
                    Learn more
                  </Text>
                  <RiArrowRightSLine fontSize={`14px`} color={Theme.white_C} />
                </Button>
              </Wrapper>
            </Wrapper>
            {/*  */}
            <Wrapper
              margin={width < 700 ? `300px 0 0` : `150px 0 0`}
              al={`flex-end`}
            >
              <Image
                display={width < 700 ? `none` : `flex`}
                width={`45%`}
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM00%2FEven-the-smallest-path_PRO_Home.png?alt=media&token=8877e45d-f966-4493-b65c-3f9bafb30d3e`}
              />

              <Image
                margin={`0 0 10px`}
                display={width < 700 ? `flex` : `none`}
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM00%2FEven-the-smallest-path_M.png?alt=media&token=bae88425-d00a-48de-8ca1-96afd338b71b`}
              />
              {/* web */}
              <Text
                fontSize={width < 700 ? `18px` : `20px`}
                fontWeight={`700`}
                color={Theme.white_C}
              >
                데이터가 움직이는 통로라면 어디든지.
              </Text>
              <Text
                display={width < 700 ? `none` : `flex`}
                color={Theme.greyTheme6_C}
                fontSize={`18px`}
                fontWeight={`700`}
              >
                USB-C, Mini, Micro 포트의 잠금장치까지
              </Text>
              <Text
                display={width < 700 ? `none` : `flex`}
                color={Theme.greyTheme6_C}
                fontSize={`18px`}
                fontWeight={`700`}
              >
                통제할 수 있는 스마트키퍼만의 전용 키.
              </Text>

              <Wrapper
                dr={`row`}
                ju={`flex-end`}
                margin={`10px 0 0`}
                display={width < 700 ? `none` : `flex`}
              >
                {/* <Image
                  width={`10%`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM00%2FLock-Key-Mini_PRO_Home.png?alt=media&token=224ce403-4753-40d6-8cdb-3831e8ddf1dc`}
                /> */}

                <Button dr={`row`} margin={`0 0 5px 10px`}>
                  <Wrapper
                    width={`auto`}
                    fontWeight={`bold`}
                    margin={`0 10px 0 0`}
                  >
                    Lock Key Mini
                  </Wrapper>
                  <Text
                    fontSize={`16px`}
                    fontWeight={`700`}
                    color={Theme.white_C}
                  >
                    Learn more
                  </Text>
                  <RiArrowRightSLine fontSize={`25px`} color={Theme.white_C} />
                </Button>
              </Wrapper>
              {/* mobile */}
              <Text
                display={width < 700 ? `flex` : `none`}
                color={Theme.greyTheme6_C}
                fontSize={`18px`}
                fontWeight={`700`}
              >
                USB-C, Mini, Micro 포트의
              </Text>
              <Text
                display={width < 700 ? `flex` : `none`}
                color={Theme.greyTheme6_C}
                fontSize={`18px`}
                fontWeight={`700`}
              >
                잠금장치까지 통제할 수 있는
              </Text>
              <Text
                display={width < 700 ? `flex` : `none`}
                color={Theme.greyTheme6_C}
                fontSize={`18px`}
                fontWeight={`700`}
              >
                스마트키퍼만의 전용 키.
              </Text>

              <Wrapper
                dr={`row`}
                ju={`flex-end`}
                margin={`10px 0 0`}
                display={width < 700 ? `flex` : `none`}
              >
                <Image
                  width={`30%`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM00%2FLock-Key-Mini_PRO_Home.png?alt=media&token=224ce403-4753-40d6-8cdb-3831e8ddf1dc`}
                />
                <Button dr={`row`} margin={`0 0 0 5px`}>
                  <Text
                    fontSize={`14px`}
                    fontWeight={`700`}
                    color={Theme.white_C}
                  >
                    Learn more
                  </Text>
                  <RiArrowRightSLine fontSize={`14px`} color={Theme.white_C} />
                </Button>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </RsWrapper>
      </Wrapper>
      {/*  */}
      <Wrapper
        margin={`10px 0`}
        height={width < 700 ? `300px` : `370px`}
        isRelative={true}
        attachment={`initial`}
        bgImg={`url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM00%2FMAIN_BACKGROUND_2.png?alt=media&token=f7cc04a1-3de7-483f-b974-089af2230c61")`}
      >
        <Wrapper
          bgColor={`rgba(0,0,0,0.7)`}
          isAbsolute={true}
          height={`100%`}
          top={`0`}
          left={`0`}
        ></Wrapper>

        <RsWrapper>
          <Wrapper
            al={`flex-start`}
            ju={width < 700 ? `flex-start` : `center`}
            height={`100%`}
            padding={width < 700 ? `40px 30px 0` : `0`}
          >
            <Text
              fontSize={width < 700 ? `18px` : `25px`}
              color={Theme.white_C}
            >
              USB Port Security
            </Text>
            <Wrapper
              al={`flex-start`}
              margin={width < 700 ? `10px 0 20px` : `20px 0`}
            >
              <CommonSubTitle
                lineHeight={`1.2`}
                margin={`0`}
                fontSize={width < 700 ? `30px` : `40px`}
              >
                Starting point of Port Security,
              </CommonSubTitle>
              <CommonSubTitle
                lineHeight={`1.2`}
                margin={`0`}
                fontSize={width < 700 ? `30px` : `40px`}
              >
                End it with Physical Security.
              </CommonSubTitle>
            </Wrapper>
            <Button dr={`row`}>
              <Text
                fontSize={width < 700 ? `14px` : `16px`}
                fontWeight={`700`}
                color={Theme.white_C}
                onClick={() => moveLinkHandler(`/security`)}
              >
                Learn more
              </Text>
              <RiArrowRightSLine
                fontSize={width < 700 ? `14px` : `25px`}
                color={Theme.white_C}
              />
            </Button>
          </Wrapper>
        </RsWrapper>
      </Wrapper>
      {/*  */}
      <Wrapper
        height={width < 700 ? `300px` : `370px`}
        attachment={`initial`}
        bgImg={`url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM00%2FMAIN_BACKGROUND_3.png?alt=media&token=c41f423c-e0c9-4aea-b237-40d7d105e2b3")`}
      >
        <RsWrapper>
          <Wrapper
            al={`flex-end`}
            ju={width < 700 ? `flex-start` : `center`}
            height={`100%`}
            padding={width < 700 ? `40px 30px 0` : `0`}
          >
            <Text
              fontSize={width < 700 ? `18px` : `25px`}
              color={Theme.white_C}
            >
              The essential combination of network security
            </Text>

            <Wrapper
              al={`flex-end`}
              margin={`20px 0`}
              display={width < 700 ? `none` : `flex`}
            >
              <CommonSubTitle lineHeight={`1.2`} margin={`0`} fontSize={`40px`}>
                Network &#38; Intranet :
              </CommonSubTitle>
              <CommonSubTitle lineHeight={`1.2`} margin={`0`} fontSize={`40px`}>
                Pathway to all assets within
              </CommonSubTitle>
            </Wrapper>
            <Wrapper
              al={`flex-end`}
              margin={`10px 0 20px`}
              display={width < 700 ? `flex` : `none`}
            >
              <CommonSubTitle lineHeight={`1.2`} margin={`0`} fontSize={`30px`}>
                Network &#38; Intranet :
              </CommonSubTitle>
              <CommonSubTitle lineHeight={`1.2`} margin={`0`} fontSize={`30px`}>
                Pathway to all
              </CommonSubTitle>
              <CommonSubTitle lineHeight={`1.2`} margin={`0`} fontSize={`30px`}>
                assets within
              </CommonSubTitle>
            </Wrapper>

            <Button dr={`row`}>
              <Text
                fontSize={width < 700 ? `14px` : `16px`}
                fontWeight={`700`}
                color={Theme.white_C}
                onClick={() => moveLinkHandler(`/network`)}
              >
                Learn more
              </Text>
              <RiArrowRightSLine
                fontSize={width < 700 ? `14px` : `25px`}
                color={Theme.white_C}
              />
            </Button>
          </Wrapper>
        </RsWrapper>
      </Wrapper>
      {/*  */}
      <Wrapper
        display={width < 700 ? `none` : `flex`}
        margin={`10px 0`}
        height={`370px`}
        isRelative={true}
        attachment={`initial`}
        bgImg={`url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM00%2FMAIN_BACKGROUND_4.png?alt=media&token=4e6a7c82-310b-436f-86fc-ab1187aeff1a")`}
      >
        <Wrapper
          bgColor={`rgba(0,0,0,0.7)`}
          isAbsolute={true}
          height={`100%`}
          top={`0`}
          left={`0`}
        ></Wrapper>

        <RsWrapper>
          <Wrapper al={`flex-start`}>
            <Text fontSize={`25px`} color={Theme.white_C}>
              Examples of SMARTKEEPER PRO Application
            </Text>
            <Wrapper al={`flex-start`} margin={`20px 0`}>
              <CommonSubTitle lineHeight={`1.2`} margin={`0`} fontSize={`40px`}>
                Making the most of
              </CommonSubTitle>
              <CommonSubTitle lineHeight={`1.2`} margin={`0`} fontSize={`40px`}>
                physical cybersecurity
              </CommonSubTitle>
            </Wrapper>
            <Button dr={`row`}>
              <Text
                fontSize={`16px`}
                fontWeight={`700`}
                color={Theme.white_C}
                onClick={() => moveLinkHandler(`/example`)}
              >
                Learn more
              </Text>
              <RiArrowRightSLine fontSize={`25px`} color={Theme.white_C} />
            </Button>
          </Wrapper>
        </RsWrapper>
      </Wrapper>
      {/*  */}
      <Wrapper
        height={width < 700 ? `700px` : `1200px`}
        isRelative={true}
        attachment={`initial`}
        bgImg={
          width < 700
            ? `url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM00%2FMM00-bgImg-M.jpeg?alt=media&token=6acffea7-9ca1-4521-a024-2fdbf83cf10c")`
            : `url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM00%2FMAIN_BACKGROUND_5.png?alt=media&token=3deeeeed-e761-409a-9c1f-8880078ada83")`
        }
        bgPosition={width < 700 ? `0 -100px` : ``}
      >
        {/* <Wrapper
          display={width < 700 ? `none` : `flex`}
          bgColor={`rgba(0,0,0,0.7)`}
          isAbsolute={true}
          height={`100%`}
          top={`0`}
          left={`0`}
        ></Wrapper> */}

        <RsWrapper>
          <Wrapper
            al={`flex-start`}
            ju={`flex-start`}
            margin={width < 700 ? `50px 0 0` : `150px 0 0`}
            height={`100%`}
            padding={width < 700 ? `0 30px` : `0`}
          >
            <Text
              fontSize={width < 700 ? `18px` : `25px`}
              color={Theme.white_C}
            >
              Advantages of SMARTKEEPER PRO
            </Text>

            <Wrapper
              al={`flex-start`}
              margin={width < 700 ? `0 0 10px` : `10px 0`}
            >
              <CommonSubTitle
                lineHeight={`1.2`}
                margin={`0`}
                fontSize={width < 700 ? `30px` : `48px`}
              >
                Secure but convenient.
              </CommonSubTitle>
              {/* <CommonSubTitle
                lineHeight={`1.2`}
                margin={`0`}
                fontSize={width < 700 ? `30px` : `48px`}
              >
                두마리 토끼 모두.
              </CommonSubTitle> */}
            </Wrapper>
            {/* web */}
            <Wrapper al={`flex-start`} display={width < 700 ? `none` : `flex`}>
              <Text
                fontSize={`24px`}
                lineHeight={`34px`}
                color={Theme.white_C}
                fontWeight={`300`}
              >
                The convenience of managing more than 40 locks with
              </Text>
              <Text
                fontSize={`24px`}
                lineHeight={`34px`}
                color={Theme.white_C}
                fontWeight={`300`}
              >
                single key is only possible with SMARTKEEPER PRO.
              </Text>
            </Wrapper>

            <Wrapper
              al={`flex-start`}
              margin={`20px 0 0`}
              display={width < 700 ? `none` : `flex`}
            >
              <Text
                fontSize={`24px`}
                lineHeight={`34px`}
                color={Theme.white_C}
                fontWeight={`300`}
              >
                In addition,
              </Text>
              <Text
                fontSize={`24px`}
                lineHeight={`34px`}
                color={Theme.white_C}
                fontWeight={`300`}
              >
                with hundreds of patterns of the key, superior security and
                strict
              </Text>
              <Text
                fontSize={`24px`}
                lineHeight={`34px`}
                color={Theme.white_C}
                fontWeight={`300`}
              >
                sales policy of the key through B2B non-distribution sales and
                end-user
              </Text>
              <Text
                fontSize={`24px`}
                lineHeight={`34px`}
                color={Theme.white_C}
                fontWeight={`300`}
              >
                verification process ensures the security.
              </Text>
              <Text
                fontSize={`24px`}
                lineHeight={`34px`}
                color={Theme.white_C}
                fontWeight={`300`}
                margin={`21px 0 0`}
              >
                Now experience a new Physical Cybersecurity Solution.
              </Text>
            </Wrapper>
            {/* mobile */}
            <Wrapper display={width < 700 ? `flex` : `none`} al={`flex-start`}>
              <Text fontSize={`18px`} fontWeight={`300`} color={Theme.white_C}>
                The convenience of managing more than 40 locks with
              </Text>
              <Text fontSize={`18px`} fontWeight={`300`} color={Theme.white_C}>
                single key is only possible with SMARTKEEPER PRO.
              </Text>
            </Wrapper>

            <Wrapper
              display={width < 700 ? `flex` : `none`}
              al={`flex-start`}
              margin={`10px 0 0`}
            >
              <Text fontSize={`18px`} fontWeight={`300`} color={Theme.white_C}>
                In addition,
              </Text>
              <Text fontSize={`18px`} fontWeight={`300`} color={Theme.white_C}>
                with hundreds of patterns of the key, superior security and
                strict
              </Text>
              <Text fontSize={`18px`} fontWeight={`300`} color={Theme.white_C}>
                sales policy of the key through B2B non-distribution sales and
                end-user
              </Text>
              <Text fontSize={`18px`} fontWeight={`300`} color={Theme.white_C}>
                verification process ensures the security.
              </Text>
              <Text
                fontSize={`18px`}
                fontWeight={`300`}
                color={Theme.white_C}
                margin={`21px 0 0`}
              >
                Now experience a new Physical Cybersecurity Solution.
              </Text>
            </Wrapper>
          </Wrapper>
        </RsWrapper>
      </Wrapper>
      <Popup />
    </WholeWrapper>
  );
};

export default withResizeDetector(MM00Presenter);
