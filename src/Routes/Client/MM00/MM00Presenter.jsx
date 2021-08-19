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
import { Link } from "react-router-dom";

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
        height={width < 700 ? `1200px` : `1115px`}
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
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM00%2FPro%20s%20Choice_PRO%20HOME.svg?alt=media&token=b4b80b86-dab4-4215-a918-721c7d930abd`}
              />
              <Image
                width={`186px`}
                margin={`0 0 15px`}
                display={width < 700 ? `flex` : `none`}
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM00%2FPro%20s%20Choice_M_PRO%20HOME.svg?alt=media&token=781adf05-3723-4d3b-a12d-1f4cab8d50c4`}
              />
              {/* web */}
              <Text
                fontSize={`18px`}
                fontWeight={`700`}
                color={Theme.white_C}
                display={width < 700 ? `none` : `flex`}
                margin={`10px 0 0`}
              >
                {width < 700
                  ? `A cyber security system that can be used safely on numerous devices`
                  : `The ability to manage everything with ONE key.`}
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
                <Link to="/lock/611910452c1dfdde5b57cd5e">
                  <Button dr={`row`}>
                    <Wrapper
                      width={`auto`}
                      fontWeight={`700`}
                      margin={`0 10px 2px 0`}
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
                    <RiArrowRightSLine
                      fontSize={`25px`}
                      color={Theme.white_C}
                    />
                  </Button>
                </Link>
              </Wrapper>
              {/* mobile */}
              <Text
                display={width < 700 ? `flex` : `none`}
                color={Theme.white_C}
                fontSize={`20px`}
                lineHeight={`1.4`}
                fontWeight={`700`}
              >
                The ability to manage
              </Text>

              <Text
                display={width < 700 ? `flex` : `none`}
                color={Theme.white_C}
                fontWeight={`700`}
                fontSize={`20px`}
                lineHeight={`1.4`}
              >
                everything with ONE key.
              </Text>

              <Text
                display={width < 700 ? `flex` : `none`}
                color={Theme.greyTheme6_C}
                fontSize={`20px`}
                lineHeight={`1.4`}
                fontWeight={`700`}
              >
                A cyber security system that can be used safely on numerous
                devices
              </Text>
              <Text
                display={width < 700 ? `flex` : `none`}
                color={Theme.greyTheme6_C}
                fontSize={`20px`}
                lineHeight={`1.4`}
                fontWeight={`700`}
              >
                with confidential key patterns. SMARTKEEPER is the physical
              </Text>
              <Text
                display={width < 700 ? `flex` : `none`}
                color={Theme.greyTheme6_C}
                fontSize={`20px`}
                lineHeight={`1.4`}
                fontWeight={`700`}
              >
                cybersecurity
              </Text>
              <Text
                display={width < 700 ? `flex` : `none`}
                color={Theme.greyTheme6_C}
                fontSize={`20px`}
                lineHeight={`1.4`}
                fontWeight={`700`}
              >
                system chosen by leaders and professionals of 3,000+
              </Text>
              <Text
                display={width < 700 ? `flex` : `none`}
                color={Theme.greyTheme6_C}
                fontSize={`20px`}
                lineHeight={`1.4`}
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
                <Link to="/lock/611910452c1dfdde5b57cd5f">
                  <Button dr={`row`} margin={`0 0 0 3px`}>
                    <Wrapper
                      width={`auto`}
                      fontWeight={`700`}
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
                    <RiArrowRightSLine
                      fontSize={`14px`}
                      color={Theme.white_C}
                    />
                  </Button>
                </Link>
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
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM00%2FEven%20the%20smallest%20path_PRO%20HOME.svg?alt=media&token=976f3e7c-734e-4f87-bde0-3ad98d5c2d80`}
              />

              <Image
                margin={`0 0 10px`}
                display={width < 700 ? `flex` : `none`}
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM00%2FEven%20the%20smallest%20path_M_PRO%20HOME.svg?alt=media&token=d73ac903-bede-4220-8662-963c6fb3fcd4`}
              />
              {/* web */}
              <Text
                fontSize={width < 700 ? `18px` : `20px`}
                fontWeight={`700`}
                color={Theme.white_C}
              >
                Exclusive to SMARTKEEPER
              </Text>
              <Text
                display={width < 700 ? `none` : `flex`}
                color={Theme.greyTheme6_C}
                fontSize={`18px`}
                fontWeight={`700`}
              >
                The key that controls locks for
              </Text>
              <Text
                display={width < 700 ? `none` : `flex`}
                color={Theme.greyTheme6_C}
                fontSize={`18px`}
                fontWeight={`700`}
              >
                USB-C, Mini &#38; Micro Ports
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
                <Link to="/lock/611910452c1dfdde5b57cd5f">
                  <Button dr={`row`} margin={`0 0 5px 10px`}>
                    <Wrapper
                      width={`auto`}
                      fontWeight={`700`}
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
                    <RiArrowRightSLine
                      fontSize={`25px`}
                      color={Theme.white_C}
                    />
                  </Button>
                </Link>
              </Wrapper>
              {/* mobile */}

              <Text
                display={width < 700 ? `flex` : `none`}
                color={Theme.greyTheme6_C}
                fontSize={`18px`}
                fontWeight={`700`}
              >
                The key that controls locks
              </Text>
              <Text
                display={width < 700 ? `flex` : `none`}
                color={Theme.greyTheme6_C}
                fontSize={`18px`}
                fontWeight={`700`}
              >
                for USB-C, Mini &#38; Micro Ports .
              </Text>

              <Wrapper
                dr={`row`}
                ju={`flex-end`}
                margin={`10px 0 0`}
                display={width < 700 ? `flex` : `none`}
              >
                <Link to="/lock/611910452c1dfdde5b57cd5f">
                  <Button dr={`row`} margin={`0 0 5px 10px`}>
                    <Wrapper
                      width={`auto`}
                      fontWeight={`700`}
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
                    <RiArrowRightSLine
                      fontSize={`25px`}
                      color={Theme.white_C}
                    />
                  </Button>
                </Link>
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
            <Wrapper al={`flex-start`} margin={`0 0 10px`}>
              <CommonSubTitle
                lineHeight={`1.2`}
                margin={`0`}
                fontSize={width < 700 ? `30px` : `40px`}
                fontWeight={`900`}
              >
                {width < 700
                  ? `Starting point of`
                  : `Starting point of Port Security,`}
              </CommonSubTitle>

              {/* mobile */}
              <CommonSubTitle
                display={width < 700 ? `flex` : `none`}
                lineHeight={`1.2`}
                margin={`0`}
                fontSize={width < 700 ? `30px` : `40px`}
                fontWeight={`900`}
              >
                Port Security,
              </CommonSubTitle>

              <CommonSubTitle
                lineHeight={`1.2`}
                margin={`0`}
                fontSize={width < 700 ? `30px` : `40px`}
                fontWeight={`900`}
              >
                {width < 700 ? `End it with` : `End it with Physical Security.`}
              </CommonSubTitle>
              {/* mobile */}
              <CommonSubTitle
                fontWeight={`900`}
                lineHeight={`1.2`}
                margin={`0`}
                fontSize={width < 700 ? `30px` : `40px`}
                display={width < 700 ? `flex` : `none`}
              >
                Physical Security.
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
              textAlign={width < 700 ? `right` : `center`}
            >
              The essential combination of network security
            </Text>

            <Wrapper
              al={`flex-end`}
              margin={`10px 0 20px`}
              display={width < 700 ? `none` : `flex`}
            >
              <CommonSubTitle
                lineHeight={`1.2`}
                margin={`0`}
                fontSize={`40px`}
                fontWeight={`900`}
              >
                Network &#38; Intranet :
              </CommonSubTitle>
              <CommonSubTitle
                lineHeight={`1.2`}
                margin={`0`}
                fontSize={`40px`}
                fontWeight={`900`}
              >
                Pathway to all assets within
              </CommonSubTitle>
            </Wrapper>
            <Wrapper
              al={`flex-end`}
              margin={`0 0 10px`}
              display={width < 700 ? `flex` : `none`}
            >
              <CommonSubTitle
                lineHeight={`1.2`}
                margin={`0`}
                fontSize={`30px`}
                fontWeight={`900`}
              >
                Network &#38; Intranet :
              </CommonSubTitle>
              <CommonSubTitle
                lineHeight={`1.2`}
                margin={`0`}
                fontSize={`30px`}
                fontWeight={`900`}
              >
                Pathway
              </CommonSubTitle>
              <CommonSubTitle
                lineHeight={`1.2`}
                margin={`0`}
                fontSize={`30px`}
                fontWeight={`900`}
              >
                to all assets within
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
      {/* */}
      <Wrapper
        margin={`10px 0`}
        height={width < 700 ? `300px` : `370px`}
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
          <Wrapper
            al={width < 700 ? `flex-end` : `flex-start`}
            padding={width < 700 ? `0 30px 0` : `0`}
          >
            <Text
              fontSize={`25px`}
              color={Theme.white_C}
              display={width < 700 ? `none` : `flex`}
            >
              Examples of SMARTKEEPER PRO Application
            </Text>

            <Text
              display={width < 700 ? `flex` : `none`}
              fontSize={width < 700 ? `18px` : `25px`}
              color={Theme.white_C}
              textAlign={width < 700 ? `right` : `center`}
            >
              Examples of
            </Text>
            <Text
              display={width < 700 ? `flex` : `none`}
              fontSize={width < 700 ? `18px` : `25px`}
              color={Theme.white_C}
              textAlign={width < 700 ? `right` : `center`}
            >
              SMARTKEEPER PRO Application
            </Text>

            <Wrapper
              al={width < 700 ? `flex-end` : `flex-start`}
              margin={width < 700 ? `0 0 10px` : `10px 0 20px`}
            >
              <CommonSubTitle
                lineHeight={`1.2`}
                margin={`0`}
                fontSize={width < 700 ? `30px` : `40px`}
                fontWeight={`900`}
              >
                Making the most of
              </CommonSubTitle>
              <CommonSubTitle
                lineHeight={`1.2`}
                margin={`0`}
                fontSize={width < 700 ? `30px` : `40px`}
                fontWeight={`900`}
              >
                {width < 700 ? `physical` : `physical cybersecurity`}
              </CommonSubTitle>
              <CommonSubTitle
                lineHeight={`1.2`}
                margin={`0`}
                fontSize={width < 700 ? `30px` : `40px`}
                display={width < 700 ? `flex` : `none`}
                fontWeight={`900`}
              >
                cybersecurity
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
      <Wrapper bgColor={`rgb(0, 0, 0)`}>
        <Wrapper
          height={width < 700 ? `900px` : `1200px`}
          isRelative={true}
          attachment={`initial`}
          bgImg={
            width < 700
              ? `url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM00%2FMM00-bgImg-M.jpeg?alt=media&token=6acffea7-9ca1-4521-a024-2fdbf83cf10c")`
              : `url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM16_modify%2FGLOBAL_SMARTKEEPER-POR-ALL-set_Large.jpg?alt=media&token=474cf650-f4cb-4fc4-9b01-71f0885bea80")`
          }
          bgSize={width < 700 && `100%`}
          bgPosition={width < 700 ? `0 100px` : `bottom`}
        >
          {/* <Wrapper
            display={width < 700 ? `flex` : `none`}
            bgColor={`rgb(0, 0, 0)`}
            isAbsolute={true}
            height={`100%`}
            top={`0`}
            left={`0`}
            zIndex={`-1`}
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
                margin={width < 700 ? `20px 0` : `0 0 10px`}
              >
                <CommonSubTitle
                  lineHeight={`1.2`}
                  margin={`0`}
                  fontSize={width < 700 ? `24px` : `48px`}
                >
                  Security &#38; Convenience
                </CommonSubTitle>
                <CommonSubTitle
                  lineHeight={`1.2`}
                  margin={`0`}
                  fontSize={width < 700 ? `24px` : `48px`}
                >
                  Two Birds with One Stone
                </CommonSubTitle>
              </Wrapper>
              {/* web */}
              <Wrapper
                al={`flex-start`}
                display={width < 700 ? `none` : `flex`}
              >
                <Text
                  fontSize={`24px`}
                  lineHeight={`34px`}
                  color={Theme.white_C}
                  fontWeight={`300`}
                >
                  The ability to control approximately 40 locking devices with
                  one
                </Text>
                <Text
                  fontSize={`24px`}
                  lineHeight={`34px`}
                  color={Theme.white_C}
                  fontWeight={`300`}
                >
                  Universal Lock Key is a convenience that is offered only with
                  SMARTKEEPER PRO.
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
                  For enhanced security, SMARTKEEPER PRO uses various patterns
                  of
                </Text>
                <Text
                  fontSize={`24px`}
                  lineHeight={`34px`}
                  color={Theme.white_C}
                  fontWeight={`300`}
                >
                  Universal Lock Keys that are managed confidentially to open
                  the locking devices.
                </Text>

                <Text
                  fontSize={`24px`}
                  lineHeight={`34px`}
                  color={Theme.white_C}
                  fontWeight={`300`}
                >
                  All products are sold exclusively to verified companies only
                  through B2B sales.
                </Text>
                <Text
                  fontSize={`24px`}
                  lineHeight={`34px`}
                  color={Theme.white_C}
                  fontWeight={`300`}
                  margin={`21px 0 0`}
                >
                  Come &#38; experience SMARTKEEPER, the new era of Physical
                  Cybersecurity.
                </Text>
              </Wrapper>
              {/* mobile */}
              <Wrapper
                display={width < 700 ? `flex` : `none`}
                al={`flex-start`}
              >
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.white_C}
                >
                  The ability to control
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.white_C}
                >
                  approximately 30 locking devices
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.white_C}
                >
                  with one universal key is
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.white_C}
                >
                  a convenience that is offered only
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.white_C}
                >
                  with SMARTKEEPER PRO.
                </Text>
              </Wrapper>

              <Wrapper
                display={width < 700 ? `flex` : `none`}
                al={`flex-start`}
                margin={`20px 0 0`}
              >
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.white_C}
                >
                  For enhanced security,
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.white_C}
                >
                  SMARTKEEPER PRO uses various
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.white_C}
                >
                  patterns of Universal Lock Keys
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.white_C}
                >
                  that are managed confidentially
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.white_C}
                >
                  to open the locking devices.
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.white_C}
                >
                  All products are sold exclusively
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.white_C}
                >
                  to verified companies only
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.white_C}
                >
                  through B2B sales.
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.white_C}
                  margin={`21px 0 0`}
                >
                  Come &#38; experience
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.white_C}
                >
                  SMARTKEEPER, the new era
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.white_C}
                >
                  of physical cybersecurity.
                </Text>
              </Wrapper>
            </Wrapper>
          </RsWrapper>
        </Wrapper>
      </Wrapper>
      <Popup />
    </WholeWrapper>
  );
};

export default withResizeDetector(MM00Presenter);
