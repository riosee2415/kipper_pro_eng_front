import React, { useEffect, useState } from "react";
import withSplitting from "../../../Lib/withSplitting";
import {
  WholeWrapper,
  Wrapper,
  Image,
  Text,
  CommonSubTitle2,
  RsWrapper,
  TableWrapper,
} from "../../../Components/CommonComponents";
import styled from "styled-components";
import useTitle from "@4leaf.ysh/use-title";
import { withResizeDetector } from "react-resize-detector";
import Theme from "../../../Styles/Theme";
import { RiArrowRightSLine } from "react-icons/ri";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { translateX } from "../../../Components/AnimationCommon";
import { animateScroll as scroll } from "react-scroll";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import queryString from "query-string";
import { useRef } from "react";

const BoxWrapper = styled(Wrapper)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: rgb(0, 97, 176);
  color: ${(props) => props.theme.white_C};
  align-items: flex-start;
  justify-content: space-between;
  z-index: 10;
  padding: 30px;
  cursor: pointer;
  flex-wrap: nowrap;
  display: none;
  transition: 0.6s;
`;

const Box = styled(Wrapper)`
  width: calc(100% / 4 - 7px);
  height: 367px;
  position: relative;
  background-attachment: initial;
  margin: ${(props) => props.margin || `0 7px 0 0`};
  padding: 50px 0 0 50px;
  align-items: flex-start;
  justify-content: flex-start;

  &:nth-child(4n) {
    margin-right: 0;
  }

  &:hover ${BoxWrapper} {
    display: flex;
    transition: 0.6s;

    @media (max-width: 700px) {
      display: none;
    }
  }

  @media (max-width: 1100px) {
    width: calc(100% / 2 - 7px);
    margin: 0 7px 7px 0;

    &:nth-child(2n) {
      margin-right: 0;
    }
  }

  @media (max-width: 700px) {
    width: calc(100% / 2 - (10px / 2));
    height: 150px;
    margin: 0 10px 10px 0;
    padding: 20px 0 0 20px;

    &:nth-child(2n) {
      margin-right: 0;
    }

    &:hover .mobile {
      display: flex;
      transition: 0.6s;
    }
  }
`;

const Button = styled(Wrapper)`
  width: auto;
  padding: 0 0 5px;
  color: ${Theme.essGrey3_C};
  position: relative;
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 2px;
    background-color: ${Theme.essGrey3_C};
    transition: 0.5s;
  }

  &:hover:before {
    width: 100%;
  }
`;

const AniImage = styled(Image)`
  animation: ${translateX} 2s forwards;
  width: 112%;
`;

const Popup = withSplitting(() =>
  import("../../../Components/popup/Popup.jsx")
);

const Gotham = styled(Wrapper)`
  font-family: "Gotham Book", sans-serif;
`;

const MM19Presenter = ({
  width,
  documentRef,
  tempRef,
  tempRef2,
  //
  location,
  //
}) => {
  useTitle(`SMART KEEPER ESSENTIAL`);

  const referenceRef = useRef();

  useEffect(() => {
    const query = queryString.parse(location.search);

    // referenceRefconsole.log(referenceRef);

    if (query.type === "reference") {
      scroll.scrollTo(referenceRef.current.offsetTop);
    }
  }, [location.search]);

  return (
    <ParallaxProvider>
      <WholeWrapper>
        {/* <MainSlider datum={width < 700 ? mobileBannerData : mainBannerData} /> */}
        <Wrapper
          width={`100%`}
          height={width < 700 ? `580px` : `900px`}
          isRelative={true}
        >
          <Image
            display={width < 700 ? `flex` : `none`}
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2FMM00%2Fmobile-04.png?alt=media&token=bf15ccce-2582-4067-a931-90debcf93aaa`}
          />
          <Wrapper width={`auto`} display={width < 700 ? `none` : `flex`}>
            <Parallax y={[20, -20]} tagOuter="figure">
              <AniImage
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2FMM00%2FHOME_bgImg_1.png?alt=media&token=7b6a4bee-7127-4e6f-a786-dbcfb1129f6b`}
              />
            </Parallax>
          </Wrapper>

          <Wrapper
            isAbsolute={true}
            top={width < 700 ? `30%` : `0`}
            left={`0`}
            height={`100%`}
          >
            <RsWrapper padding={width < 700 && `0 35px 100px`}>
              <Wrapper
                al={`flex-start`}
                ju={`flex-end`}
                padding={width < 700 ? `0 0 100px` : `0 0 145px`}
                height={`100%`}
              >
                {/* <Wrapper
                  color={Theme.essGrey3_C}
                  fontSize={width < 700 ? `22px` : `36px`}
                  dr={`row`}
                  ju={`flex-start`}
                  margin={`0 0 5px`}
                >
                  <Wrapper isGotham={true} width={`auto`}>
                    SMARTKEEPER&nbsp;
                  </Wrapper>
                  <Gotham width={`auto`}>ESSENTIAL</Gotham>
                </Wrapper> */}
                <Image
                  alt="smart"
                  margin={`0 0 5px`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2FMM00%2FSMARTKEEPER_ESSENTIAL_ESSOHOME.svg?alt=media&token=cc2f8234-1996-45a2-a848-f37a2886bd0b`}
                  width={width < 700 ? `305px` : `499px`}
                />
                <CommonSubTitle2
                  display={width < 700 ? `none` : `flex`}
                  shadow={`0 1px ${Theme.blackTheme2_C}`}
                >
                  Now, it should be blocked
                </CommonSubTitle2>
                <CommonSubTitle2
                  margin={`0 0 5px !important`}
                  display={width < 700 ? `flex` : `none`}
                  shadow={`0 1px ${Theme.blackTheme2_C}`}
                >
                  Now, it
                </CommonSubTitle2>
                <CommonSubTitle2
                  display={width < 700 ? `flex` : `none`}
                  shadow={`0 1px ${Theme.blackTheme2_C}`}
                >
                  should be blocked
                </CommonSubTitle2>
                <Wrapper al={`flex-start`}>
                  <Text
                    color={Theme.blackTheme2_C}
                    fontSize={width < 700 ? `19px` : `18px`}
                    fontWeight={`700`}
                    display={width < 700 ? `none` : `flex`}
                  >
                    Physical layer of security for data ports
                  </Text>
                  <Text
                    color={Theme.blackTheme2_C}
                    fontSize={width < 700 ? `19px` : `18px`}
                    fontWeight={`700`}
                    display={width < 700 ? `flex` : `none`}
                  >
                    Physical layer of security
                  </Text>
                  <Text
                    color={Theme.blackTheme2_C}
                    fontSize={width < 700 ? `19px` : `18px`}
                    fontWeight={`700`}
                    display={width < 700 ? `flex` : `none`}
                  >
                    for data ports
                  </Text>
                  <Text
                    display={width < 700 ? `none` : `flex`}
                    color={Theme.greyTheme6_C}
                    fontSize={`18px`}
                    fontWeight={`500`}
                  >
                    SMARTKEEPER ESSENTIAL provides the cost-effective &#38;
                    practical experiences to you.
                  </Text>
                  <Text
                    display={width < 700 ? `none` : `flex`}
                    color={Theme.greyTheme6_C}
                    fontSize={`18px`}
                    fontWeight={`500`}
                  >
                    Once you block it, you will recognize how much it was
                    dangerous before.
                  </Text>
                  <Text
                    display={width < 700 ? `none` : `flex`}
                    color={Theme.greyTheme6_C}
                    fontSize={`18px`}
                    fontWeight={`500`}
                  >
                    Starting from the USB ports, improve the security level of
                    your organization.
                  </Text>

                  <Text
                    display={width < 700 ? `flex` : `none`}
                    color={Theme.greyTheme6_C}
                    fontSize={`14px`}
                    fontWeight={`500`}
                  >
                    SMARTKEEPER ESSENTIAL provides the
                  </Text>
                  <Text
                    display={width < 700 ? `flex` : `none`}
                    color={Theme.greyTheme6_C}
                    fontSize={`14px`}
                    fontWeight={`500`}
                  >
                    cost-effective &#38; practical experiences to you.
                  </Text>
                  <Text
                    display={width < 700 ? `flex` : `none`}
                    color={Theme.greyTheme6_C}
                    fontSize={`14px`}
                    fontWeight={`500`}
                  >
                    Once you block it, you will recognize
                  </Text>
                  <Text
                    display={width < 700 ? `flex` : `none`}
                    color={Theme.greyTheme6_C}
                    fontSize={`14px`}
                    fontWeight={`500`}
                  >
                    how much it was dangerous before.
                  </Text>
                  <Text
                    display={width < 700 ? `flex` : `none`}
                    color={Theme.greyTheme6_C}
                    fontSize={`14px`}
                    fontWeight={`500`}
                  >
                    Starting from the USB ports, improve the security level of
                    your organization.
                  </Text>
                </Wrapper>

                <Link to="/basic/6114d0a2b3595147440ae69a">
                  <Button dr={`row`} margin={`10px 0 0`}>
                    <Text
                      fontSize={width < 700 ? `14px` : `16px`}
                      fontWeight={`600`}
                    >
                      See more about USB PORT LOCK
                    </Text>
                    <RiArrowRightSLine fontSize={`27px`} />
                  </Button>
                </Link>
              </Wrapper>
            </RsWrapper>
          </Wrapper>
        </Wrapper>
        {/*  */}
        <Wrapper height={`10px`} bgColor={Theme.essGrey_C}></Wrapper>
        {/*  */}
        <Wrapper
          width={`100%`}
          height={width < 700 ? `390px` : `800px`}
          bgSize={width < 700 && `105%`}
          attachment={`initial`}
          bgPosition={width < 700 ? `-10px 250px` : `0 100px`}
          bgImg={`url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2FMM00%2FHOME_bgImg_2.png?alt=media&token=f5ec2fb4-f779-4a5e-a860-73fb3a91f6d9")`}
        >
          <RsWrapper>
            <Wrapper
              al={`flex-start`}
              ju={`flex-start`}
              padding={width < 700 ? `80px 35px 0` : `120px 0 0`}
              height={`100%`}
            >
              <CommonSubTitle2 shadow={`0 1px ${Theme.blackTheme2_C}`}>
                사용중인 케이블도
              </CommonSubTitle2>
              <Text
                fontSize={`18px`}
                fontWieght={`500`}
                color={Theme.essGrey2_C}
              >
                모든 것을 하나의 키로 관리하는 능력.
              </Text>
              <Text
                display={width < 700 ? `none` : `flex`}
                fontSize={`18px`}
                fontWieght={`500`}
                color={Theme.essGrey2_C}
              >
                암호화된 키-패턴으로 수많은 장치를 안심하고 사용할 수 있는
                보안장치.
              </Text>

              <Text
                display={width < 700 ? `flex` : `none`}
                fontSize={`18px`}
                fontWieght={`500`}
                color={Theme.essGrey2_C}
              >
                암호화된 키-패턴으로 수많은 장치를
              </Text>
              <Text
                display={width < 700 ? `flex` : `none`}
                fontSize={`18px`}
                fontWieght={`500`}
                color={Theme.essGrey2_C}
              >
                안심하고 사용할 수 있는 보안장치.
              </Text>
              <Link to="/basic/6114d0a2b3595147440ae6a0">
                <Button dr={`row`} margin={`20px 0 0`}>
                  <Text fontSize={`16px`} fontWeight={`600`}>
                    랜케이블락 자세히 보러가기
                  </Text>
                  <RiArrowRightSLine fontSize={`27px`} />
                </Button>
              </Link>
            </Wrapper>
          </RsWrapper>
        </Wrapper>
        {/*  */}
        <Wrapper
          bgColor={Theme.essGrey_C}
          translation={`0s`}
          isRelative={true}
          overflow={`hidden`}
          // ref={tempRef}
        >
          <RsWrapper isRelative={true} height={`100%`}>
            <Fade bottom>
              <Wrapper
                // isAbsolute={true}
                // top={
                //   width < 700
                //     ? `30px`
                //     : `${isFirst ? `0` : width < 700 ? `200` : `400`}px`
                // }
                margin={width < 700 ? `0 0 20px` : `100px 0`}
                radius={`30px`}
                width={width < 700 ? `90%` : `100%`}
                height={width < 700 ? `400px` : `600px`}
                attachment={`initial`}
                bgImg={
                  width < 700
                    ? `url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2FMM00%2Fmobile-02.png?alt=media&token=ef2bb6a1-a190-4b63-a541-1ab1166ef4ec")`
                    : `url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2FMM00%2FHOME_bgImg_3.png?alt=media&token=25d06e43-ea7f-4ea1-b8ee-7016c1acd8ca")`
                }
              >
                <Wrapper
                  al={`flex-start`}
                  ju={width < 700 && `flex-start`}
                  padding={width < 700 ? `40px 20px 0` : `0 50px`}
                  height={`100%`}
                >
                  <Text
                    color={Theme.essGrey3_C}
                    fontSize={width < 700 ? `16px` : `20px`}
                    fontWeight={`500`}
                  >
                    RJ45 Port Lock
                  </Text>
                  <Wrapper
                    dr={`row`}
                    width={`auto`}
                    margin={`0 0 25px`}
                    ju={width < 700 && `flex-start`}
                  >
                    <CommonSubTitle2
                      fontSize={width < 700 ? `30px` : `40px`}
                      margin={`0`}
                    >
                      다양한 컬러의 패턴
                    </CommonSubTitle2>
                    <Image
                      width={`38px`}
                      margin={`0 0 0 15px`}
                      src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2FMM00%2FHOME_ICON.png?alt=media&token=deba963a-50f3-41b0-8597-6f60d21c8f4b`}
                    />
                  </Wrapper>

                  <Text
                    display={width < 700 ? `none` : `flex`}
                    fontSize={`20px`}
                    fontWieght={`500`}
                    color={Theme.greyTheme6_C}
                  >
                    사용하지 않는 Ethernet RJ45 포트를 물리적으로 차단하여
                  </Text>
                  <Text
                    display={width < 700 ? `none` : `flex`}
                    fontSize={`20px`}
                    fontWieght={`500`}
                    color={Theme.greyTheme6_C}
                  >
                    비인가된 기기의 포트접속을 방지합니다.
                  </Text>
                  <Text
                    display={width < 700 ? `flex` : `none`}
                    fontSize={`18px`}
                    fontWieght={`500`}
                    color={Theme.greyTheme6_C}
                  >
                    사용하지 않는 Ethernet RJ45 포트를
                  </Text>
                  <Text
                    display={width < 700 ? `flex` : `none`}
                    fontSize={`18px`}
                    fontWieght={`500`}
                    color={Theme.greyTheme6_C}
                  >
                    물리적으로 차단하여 비인가된 기기의
                  </Text>
                  <Text
                    display={width < 700 ? `flex` : `none`}
                    fontSize={`18px`}
                    fontWieght={`500`}
                    color={Theme.greyTheme6_C}
                  >
                    포트접속을 방지합니다.
                  </Text>

                  <Link to="/basic/6114d0a2b3595147440ae69f">
                    <Button dr={`row`} margin={`20px 0 0`}>
                      <Text fontSize={`16px`} fontWeight={`500`}>
                        랜 포트락 자세히 보러가기
                      </Text>
                      <RiArrowRightSLine fontSize={`17px`} />
                    </Button>
                  </Link>
                </Wrapper>
              </Wrapper>
            </Fade>
            <Fade bottom>
              <Wrapper
                width={width < 700 ? `90%` : `100%`}
                height={width < 700 ? `400px` : `600px`}
                radius={`30px`}
                margin={`0 0 100px`}
                isRelative={true}
              >
                <Image
                  height={width < 700 ? `400px` : `600px`}
                  radius={`30px`}
                  alt="image"
                  src={
                    width < 700
                      ? `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2FMM00%2Fmobile.png?alt=media&token=68aee731-16c1-48b1-b637-0826f2051f33`
                      : `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2FMM00%2FHOME_bgImg_4.png?alt=media&token=ad3045da-aee8-4d0d-84c2-e7e23095423b`
                  }
                />
                <Wrapper
                // radius={`30px`}
                // height={width < 700 ? `400px` : `600px`}
                // attachment={`initial`}
                // bgImg={`url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2FMM00%2FHOME_bgImg_4.png?alt=media&token=ad3045da-aee8-4d0d-84c2-e7e23095423b")`}
                >
                  <Wrapper
                    isAbsolute={true}
                    bottom={width < 700 ? `-20%` : `0`}
                    left={`0`}
                    al={`flex-end`}
                    padding={width < 700 ? `0 20px` : `0 50px`}
                    height={`100%`}
                  >
                    <Text
                      color={Theme.essGrey3_C}
                      fontSize={width < 700 ? `16px` : `20px`}
                      fontWeight={`500`}
                    >
                      Lock Key Basic
                    </Text>
                    <CommonSubTitle2 fontSize={width < 700 ? `30px` : `40px`}>
                      베이직 키 하나로
                    </CommonSubTitle2>

                    <Text
                      display={width < 700 ? `none` : `flex`}
                      fontSize={`20px`}
                      fontWieght={`500`}
                      color={Theme.essGrey2_C}
                    >
                      13종의 스마트키퍼 에센셜 락 장비를 해제할 수 있는 키로,
                    </Text>
                    <Text
                      display={width < 700 ? `none` : `flex`}
                      fontSize={`20px`}
                      fontWieght={`500`}
                      color={Theme.essGrey2_C}
                    >
                      7가지 색상의 키 패턴이 존재합니다.
                    </Text>
                    <Text
                      display={width < 700 ? `flex` : `none`}
                      fontSize={`18px`}
                      fontWieght={`500`}
                      color={Theme.essGrey2_C}
                    >
                      13종의 스마트키퍼 에센셜 락 장비를
                    </Text>
                    <Text
                      display={width < 700 ? `flex` : `none`}
                      fontSize={`18px`}
                      fontWieght={`500`}
                      color={Theme.essGrey2_C}
                    >
                      해제할 수 있는 키로, 7가지 색상의
                    </Text>
                    <Text
                      display={width < 700 ? `flex` : `none`}
                      fontSize={`18px`}
                      fontWieght={`500`}
                      color={Theme.essGrey2_C}
                    >
                      키 패턴이 존재합니다.
                    </Text>

                    <Link to="/lock/6114d0a2b3595147440ae699">
                      <Button
                        dr={`row`}
                        margin={width < 700 ? `10px 0 0` : `20px 0 0`}
                      >
                        <Text fontSize={`16px`} fontWeight={`500`}>
                          베이직 키 자세히 보러가기
                        </Text>
                        <RiArrowRightSLine fontSize={`27px`} />
                      </Button>
                    </Link>
                  </Wrapper>
                </Wrapper>
              </Wrapper>
            </Fade>
          </RsWrapper>
        </Wrapper>
        {/*  */}
        <RsWrapper ref={tempRef2} padding={width < 700 && `0 35px`}>
          <Wrapper
            height={`100%`}
            al={`flex-start`}
            padding={width < 700 ? `57px 0 77px` : `145px 0 200px`}
            ref={referenceRef}
          >
            {/* <Wrapper
              color={Theme.essGrey3_C}
              fontSize={width < 700 ? `12px` : `20px`}
              dr={`row`}
              ju={`flex-start`}
            >
              <Wrapper isGotham={true} width={`auto`}>
                SMARTKEEPER&nbsp;
              </Wrapper>
              <Gotham width={`auto`}>ESSENTIAL</Gotham>
            </Wrapper> */}
            <Image
              alt="smart"
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2FMM00%2FSMARTKEEPER_ESSENTIAL_ESSOHOME.svg?alt=media&token=cc2f8234-1996-45a2-a848-f37a2886bd0b`}
              width={width < 700 ? `166px` : `261px`}
            />
            {/* <Wrapper
              al={`flex-start`}
              isGotham={true}
              fontSize={width < 700 ? `30px` : `56px`}
              color={Theme.essGrey3_C}
              margin={width < 700 ? `10px 0 20px` : `15px 0 20px`}
            >
              Reference
            </Wrapper> */}
            <Image
              margin={width < 700 ? `10px 0 20px` : `15px 0 20px`}
              alt="smart"
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2FMM00%2FReference.svg?alt=media&token=116031e6-2af5-46f1-bcf5-6967b79800af`}
              width={width < 700 ? `150px` : `281px`}
            />
            <Text
              fontSize={width < 700 ? `16px` : `20px`}
              color={Theme.blackTheme_C}
            >
              3천여 개 국내외 주요사이트.
            </Text>
            <Text
              fontSize={width < 700 ? `16px` : `20px`}
              color={Theme.blackTheme_C}
            >
              물리보안을 가장 완벽하게 활용하는 모든 곳.
            </Text>
            {/* <Text
              fontSize={`14px`}
              color={Theme.essGrey2_C}
              fontWeight={`300`}
            >
              * 대상포트를 클릭하면 해당 제품으로 이동합니다.
            </Text> */}

            <Wrapper
              dr={`row`}
              ju={width < 700 ? `space-between` : `flex-start`}
              margin={width < 700 ? `20px 0 0px` : `20px 0 7px`}
            >
              <Box
                isRelative={true}
                bgImg={`url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2FMM00%2FHOME_boxImg_1.png?alt=media&token=e2c3685d-a503-4960-b3d6-3861f3069715")`}
              >
                <Text
                  color={Theme.white_C}
                  fontSize={width < 700 ? `12px` : `30px`}
                  fontWeight={`700`}
                  margin={`0 0 5px`}
                >
                  공유 오피스
                </Text>
                <Text
                  color={Theme.essGrey2_C}
                  fontSize={width < 700 ? `10px` : `16px`}
                >
                  노트북, PC등 장비보호 및
                </Text>
                <Text
                  color={Theme.essGrey2_C}
                  fontSize={width < 700 ? `10px` : `16px`}
                >
                  데이터포트
                </Text>
                {/* 1 */}
                <Wrapper
                  className={`mobile`}
                  display={`none`}
                  isAbsolute={true}
                  top={`0`}
                  left={`0`}
                  zIndex={`10`}
                >
                  <Image
                    alt="mobileImg"
                    src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2FMM00%2F%E1%84%80%E1%85%A9%E1%86%BC%E1%84%8B%E1%85%B2%E1%84%8B%E1%85%A9%E1%84%91%E1%85%B5%E1%84%89%E1%85%B3.png?alt=media&token=5081b6d1-7cb3-42e3-93eb-48bf70c59414`}
                  />
                </Wrapper>
                <BoxWrapper>
                  <Wrapper al={`flex-start`}>
                    <Text fontSize={width < 700 && `10px`}>USB</Text>
                    <Wrapper
                      dr={`row`}
                      ju={`flex-start`}
                      al={`flex-start`}
                      margin={width < 700 ? `5px 0 0` : `10px 0 0`}
                    >
                      <Wrapper
                        width={
                          width < 700
                            ? `calc(100% / 3 - (10px / 3))`
                            : `calc(100% / 3 - (30px / 3))`
                        }
                        margin={width < 700 ? `0 5px 0 0` : `0 15px 0 0`}
                      >
                        <Image
                          width={width < 700 ? `26px` : `47px`}
                          height={`21px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FUSB(USB%20Type-A).svg?alt=media&token=9b5322d5-7af8-4748-875a-9be5643d6f0d`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          USB Type A
                        </Text>
                      </Wrapper>
                      <Wrapper
                        width={
                          width < 700
                            ? `calc(100% / 3 - (10px / 3))`
                            : `calc(100% / 3 - (30px / 3))`
                        }
                        margin={width < 700 ? `0 5px 0 0` : `0 15px 0 0`}
                      >
                        <Image
                          width={width < 700 ? `30px` : `54px`}
                          height={`21px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FUSB-C0D(USB%20Type-C).svg?alt=media&token=8cc76607-cdb9-4174-a0da-a252864a8525`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          USB Type C
                        </Text>
                      </Wrapper>
                      <Wrapper
                        width={
                          width < 700
                            ? `calc(100% / 3 - (10px / 3))`
                            : `calc(100% / 3 - (30px / 3))`
                        }
                      >
                        <Image
                          width={width < 700 ? `35px` : `58px`}
                          height={`21px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FUSB%20Cable(USB%20Type-A%20Connector).svg?alt=media&token=0780c408-a611-4aab-8c7f-f43378a62a60`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          USB Cable
                        </Text>
                      </Wrapper>
                    </Wrapper>
                  </Wrapper>

                  <Wrapper al={`flex-start`}>
                    <Text fontSize={width < 700 && `10px`}>Network</Text>
                    <Wrapper
                      ju={`flex-start`}
                      al={`flex-start`}
                      margin={width < 700 ? `5px 0 0` : `10px 0 0`}
                    >
                      <Wrapper width={`33%`}>
                        <Image
                          width={width < 700 ? `25px` : `33px`}
                          height={`28px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FRJ45(RJ-45%2C%20Ethernet%20RJ-45).svg?alt=media&token=8e0c055e-a235-4d60-a9cb-69b2761512b4`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          RJ45
                        </Text>
                      </Wrapper>
                    </Wrapper>
                  </Wrapper>

                  <Wrapper al={`flex-start`}>
                    <Text fontSize={width < 700 && `10px`}>Other</Text>
                    <Wrapper
                      dr={`row`}
                      ju={`flex-start`}
                      al={`flex-start`}
                      margin={width < 700 ? `5px 0 0` : `10px 0 0`}
                    >
                      <Wrapper
                        width={`calc(100% / 3 - (30px / 3))`}
                        margin={`0 15px 0 0`}
                      >
                        <Image
                          width={`27px`}
                          height={`37px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FSD%20Card.svg?alt=media&token=69cd1d3e-da7e-4bb6-a479-932fef6c8491`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          SD Card
                        </Text>
                      </Wrapper>
                      <Wrapper
                        width={`calc(100% / 3 - (30px / 3))`}
                        margin={`0 15px 0 0`}
                      >
                        <Image
                          width={`47px`}
                          height={`37px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FCF%20Card.svg?alt=media&token=6850bbfc-4cf0-4cff-8f9f-b1607841e628`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          CF Card
                        </Text>
                      </Wrapper>
                      <Wrapper width={`calc(100% / 3 - (30px / 3))`}>
                        <Image
                          width={`42px`}
                          height={`37px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FLaptop.svg?alt=media&token=537395d1-446d-45cc-b4ba-2d3e841f64a4`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          Laptop
                        </Text>
                      </Wrapper>
                    </Wrapper>
                  </Wrapper>
                </BoxWrapper>
                {/* 1 */}
              </Box>
              <Box
                isRelative={true}
                bgImg={`url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2FMM00%2FHOME_boxImg_2.png?alt=media&token=5b721ff6-bd1a-4424-8975-7ea9507d632b")`}
              >
                <Text
                  color={Theme.white_C}
                  fontSize={width < 700 ? `12px` : `30px`}
                  fontWeight={`700`}
                  margin={`0 0 5px`}
                >
                  통신 네트워크
                </Text>
                <Text
                  display={width < 700 ? `none` : `flex`}
                  color={Theme.essGrey2_C}
                  fontSize={`16px`}
                >
                  IDC, 네트워크 서비스 공급자 등
                </Text>
                <Text
                  display={width < 700 ? `none` : `flex`}
                  color={Theme.essGrey2_C}
                  fontSize={`16px`}
                >
                  200여 사이트
                </Text>

                <Text
                  display={width < 700 ? `flex` : `none`}
                  color={Theme.essGrey2_C}
                  fontSize={`10px`}
                >
                  IT, IDC 등의
                </Text>
                <Text
                  display={width < 700 ? `flex` : `none`}
                  color={Theme.essGrey2_C}
                  fontSize={`10px`}
                >
                  통신포트 정보보안
                </Text>
                {/* 2 */}
                <Wrapper
                  className={`mobile`}
                  display={`none`}
                  isAbsolute={true}
                  top={`0`}
                  left={`0`}
                  zIndex={`10`}
                >
                  <Image
                    alt="mobileImg"
                    src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2FMM00%2F%E1%84%90%E1%85%A9%E1%86%BC%E1%84%89%E1%85%B5%E1%86%AB%20%E1%84%82%E1%85%A6%E1%84%90%E1%85%B3%E1%84%8B%E1%85%AF%E1%84%8F%E1%85%B3.png?alt=media&token=55176a7b-2fcc-414f-8a69-29151040c7bc`}
                  />
                </Wrapper>
                <BoxWrapper>
                  <Wrapper al={`flex-start`}>
                    <Text fontSize={width < 700 && `10px`}>USB</Text>
                    <Wrapper
                      dr={`row`}
                      al={`flex-end`}
                      ju={`flex-start`}
                      margin={`10px 0 0`}
                    >
                      <Wrapper
                        width={`calc(100% / 3 - (30px / 3))`}
                        margin={`0 15px 0 0`}
                      >
                        <Image
                          width={`47px`}
                          height={`21px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FUSB(USB%20Type-A).svg?alt=media&token=9b5322d5-7af8-4748-875a-9be5643d6f0d`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          USB Type A
                        </Text>
                      </Wrapper>
                      <Wrapper
                        width={`calc(100% / 3 - (30px / 3))`}
                        margin={`0 15px 0 0`}
                      >
                        <Image
                          width={`58px`}
                          height={`21px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FUSB%20Cable(USB%20Type-A%20Connector).svg?alt=media&token=0780c408-a611-4aab-8c7f-f43378a62a60`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          USB Cable
                        </Text>
                      </Wrapper>
                      <Wrapper width={`calc(100% / 3 - (30px / 3))`}></Wrapper>
                    </Wrapper>
                  </Wrapper>

                  <Wrapper al={`flex-start`}>
                    <Text fontSize={width < 700 && `10px`}>Network</Text>
                    <Wrapper
                      dr={`row`}
                      ju={`flex-start`}
                      al={`flex-start`}
                      margin={`10px 0 0`}
                    >
                      <Wrapper
                        width={`calc(100% / 3 - (30px / 3))`}
                        margin={`0 15px 0 0`}
                      >
                        <Image
                          width={`28px`}
                          height={`32px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FRJ11(RJ-11).svg?alt=media&token=ab88406b-bc4a-4117-9c75-cd41e0bc59c3`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          RJ11
                        </Text>
                      </Wrapper>
                      <Wrapper
                        width={`calc(100% / 3 - (30px / 3))`}
                        margin={`0 15px 0 0`}
                      >
                        <Image
                          width={`32px`}
                          height={`32px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FRJ45(RJ-45%2C%20Ethernet%20RJ-45).svg?alt=media&token=8e0c055e-a235-4d60-a9cb-69b2761512b4`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          RJ45
                        </Text>
                      </Wrapper>
                      <Wrapper width={`calc(100% / 3 - (30px / 3))`}>
                        <Image
                          width={`56px`}
                          height={`32px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FLAN%20Cable(Ethernet%20RJ-45%20Connector).svg?alt=media&token=b58057f1-c372-48a2-822e-24fe74baf30f`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          LAN Cable
                        </Text>
                      </Wrapper>
                    </Wrapper>
                  </Wrapper>

                  <Wrapper al={`flex-start`}>
                    <Text fontSize={width < 700 && `10px`}>Optical Fiber</Text>
                    <Wrapper
                      dr={`row`}
                      ju={`flex-start`}
                      al={`flex-start`}
                      margin={`10px 0 0`}
                    >
                      <Wrapper
                        width={`calc(100% / 3 - (30px / 3))`}
                        margin={`0 15px 0 0`}
                      >
                        <Image
                          width={width < 700 ? `26px` : `37px`}
                          height={width < 700 ? `auto` : `28px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FQSFP%20Transceiver.svg?alt=media&token=b4578725-6f4b-41d9-bc8d-863bbb9727a4`}
                        />
                        <Text fontSize={`10px`} fontWeight={`300`}>
                          QSFP
                        </Text>
                      </Wrapper>
                      <Wrapper
                        width={`calc(100% / 3 - (30px / 3))`}
                        margin={`0 15px 0 0`}
                      >
                        <Image
                          width={width < 700 ? `26px` : `38px`}
                          height={width < 700 ? `auto` : `28px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FSFP%20Port%20(Mini%20GBIC).svg?alt=media&token=3c212117-e976-4f87-ab76-5c7b29f5d07f`}
                        />

                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          SFP Port
                        </Text>
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          (Optical Fiber)
                        </Text>
                      </Wrapper>
                      <Wrapper width={`calc(100% / 3 - (30px / 3))`}>
                        <Image
                          width={width < 700 ? `26px` : `62px`}
                          height={width < 700 ? `auto` : `28px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FGBIC%20Port.svg?alt=media&token=4be6deb9-6079-48fb-8611-d205cc867893`}
                        />

                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          GBIC Port
                        </Text>
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          (Optical Fiber)
                        </Text>
                      </Wrapper>
                    </Wrapper>
                  </Wrapper>
                </BoxWrapper>
                {/* 2 */}
              </Box>
              <Box
                isRelative={true}
                bgImg={`url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2FMM00%2FHOME_boxImg_3.png?alt=media&token=c07986a9-588e-4d4b-be35-1ee6bd8c1f3a")`}
              >
                <Text
                  color={Theme.white_C}
                  fontSize={width < 700 ? `12px` : `30px`}
                  fontWeight={`700`}
                  margin={`0 0 5px`}
                >
                  공공기관
                </Text>
                <Text
                  display={width < 700 ? `none` : `flex`}
                  color={Theme.essGrey2_C}
                  fontSize={width < 700 ? `10px` : `16px`}
                >
                  개인정보 등 민감정보 유출의
                </Text>
                <Text
                  display={width < 700 ? `none` : `flex`}
                  color={Theme.essGrey2_C}
                  fontSize={width < 700 ? `10px` : `16px`}
                >
                  통제 및 보호
                </Text>

                <Text
                  display={width < 700 ? `flex` : `none`}
                  color={Theme.essGrey2_C}
                  fontSize={width < 700 ? `10px` : `16px`}
                >
                  개인정보 등 민감정보
                </Text>
                <Text
                  display={width < 700 ? `flex` : `noe`}
                  color={Theme.essGrey2_C}
                  fontSize={width < 700 ? `10px` : `16px`}
                >
                  유출의 통제 및 보호
                </Text>
                {/* 3 */}
                <Wrapper
                  className={`mobile`}
                  display={`none`}
                  isAbsolute={true}
                  top={`0`}
                  left={`0`}
                  zIndex={`10`}
                >
                  <Image
                    alt="mobileImg"
                    src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2FMM00%2F%E1%84%80%E1%85%A9%E1%86%BC%E1%84%80%E1%85%A9%E1%86%BC%E1%84%80%E1%85%B5%E1%84%80%E1%85%AA%E1%86%AB.png?alt=media&token=e2340c9b-12b7-4f25-9607-fa06ec7e4bc4`}
                  />
                </Wrapper>
                <BoxWrapper>
                  <Wrapper al={`flex-start`}>
                    <Text fontSize={width < 700 && `10px`}>USB</Text>
                    <Wrapper
                      dr={`row`}
                      ju={`flex-start`}
                      al={`flex-start`}
                      margin={width < 700 ? `5px 0 0` : `10px 0 0`}
                    >
                      <Wrapper
                        width={`calc(100% / 3 - (30px / 3))`}
                        margin={`0 15px 0 0`}
                      >
                        <Image
                          width={width < 700 ? `26px` : `47px`}
                          height={`21px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FUSB(USB%20Type-A).svg?alt=media&token=9b5322d5-7af8-4748-875a-9be5643d6f0d`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          USB Type A
                        </Text>
                      </Wrapper>
                      <Wrapper
                        width={`calc(100% / 3 - (30px / 3))`}
                        margin={`0 15px 0 0`}
                      >
                        <Image
                          width={width < 700 ? `30px` : `54px`}
                          height={`21px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FUSB-C0D(USB%20Type-C).svg?alt=media&token=8cc76607-cdb9-4174-a0da-a252864a8525`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          USB Type C
                        </Text>
                      </Wrapper>
                      <Wrapper width={`calc(100% / 3 - (30px / 3))`}>
                        <Image
                          width={width < 700 ? `38px` : `58px`}
                          height={`21px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FUSB%20Cable(USB%20Type-A%20Connector).svg?alt=media&token=0780c408-a611-4aab-8c7f-f43378a62a60`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          USB Cable
                        </Text>
                      </Wrapper>
                    </Wrapper>
                  </Wrapper>

                  <Wrapper al={`flex-start`}>
                    <Text fontSize={width < 700 && `10px`}>
                      Network / Other
                    </Text>
                    <Wrapper
                      dr={`row`}
                      ju={`flex-start`}
                      al={`flex-start`}
                      margin={`10px 0 0`}
                    >
                      <Wrapper
                        width={`calc(100% / 4 - (30px / 4))`}
                        margin={`0 10px 0 0`}
                      >
                        <Image
                          width={`30px`}
                          height={`28px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FRJ45(RJ-45%2C%20Ethernet%20RJ-45).svg?alt=media&token=8e0c055e-a235-4d60-a9cb-69b2761512b4`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          RJ45
                        </Text>
                      </Wrapper>
                      <Wrapper
                        width={`calc(100% / 4 - (30px / 4))`}
                        margin={`0 10px 0 0`}
                      >
                        <Image
                          width={`35px`}
                          height={`28px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FSerial(DB-9%2C%20RS232).svg?alt=media&token=6ddaceed-a378-4037-8907-50168cff8d6f`}
                        />
                        <Text fontSize={`10px`} fontWeight={`300`}>
                          Serial
                        </Text>
                      </Wrapper>
                      <Wrapper
                        width={`calc(100% / 4 - (30px / 4))`}
                        margin={`0 10px 0 0`}
                      >
                        <Image
                          width={`46px`}
                          height={`28px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FDVI0D(DVI-I%20DVI-D).svg?alt=media&token=64b19ec4-4c93-4f3c-bec6-07d1d3abb70c`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          DVI
                        </Text>
                      </Wrapper>
                      <Wrapper width={`calc(100% / 4 - (30px / 4))`}>
                        <Image
                          width={`60px`}
                          height={`28px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FParallel(DB-25).svg?alt=media&token=3ff85c7b-0ce1-4cd1-ac81-7a5a957e1b8a`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          Parallel
                        </Text>
                      </Wrapper>
                    </Wrapper>
                  </Wrapper>

                  <Wrapper al={`flex-start`}>
                    <Text fontSize={width < 700 && `10px`}>Anti-Theft</Text>
                    <Wrapper
                      dr={`row`}
                      ju={`flex-start`}
                      al={`flex-start`}
                      margin={`10px 0 0`}
                    >
                      <Wrapper
                        width={`calc(100% / 3 - (30px / 3))`}
                        margin={`0 15px 0 0`}
                      >
                        <Image
                          width={`43px`}
                          height={`37px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FDesktop.svg?alt=media&token=a7a8de60-9836-41a0-9a08-c1b269cb03e1`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          Desktop
                        </Text>
                      </Wrapper>
                      <Wrapper
                        width={`calc(100% / 3 - (30px / 3))`}
                        margin={`0 15px 0 0`}
                      >
                        <Image
                          width={`42px`}
                          height={`37px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FLaptop.svg?alt=media&token=537395d1-446d-45cc-b4ba-2d3e841f64a4`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          Laptop
                        </Text>
                      </Wrapper>
                      <Wrapper width={`calc(100% / 3 - (30px / 3))`}></Wrapper>
                    </Wrapper>
                  </Wrapper>
                </BoxWrapper>
                {/* 3 */}
              </Box>
              <Box
                isRelative={true}
                bgImg={`url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2FMM00%2FHOME_boxImg_4.png?alt=media&token=b7f2d9ae-b469-440a-b1fa-edd6d43363e2")`}
              >
                <Text
                  color={Theme.white_C}
                  fontSize={width < 700 ? `12px` : `30px`}
                  fontWeight={`700`}
                  margin={`0 0 5px`}
                >
                  교육기관
                </Text>
                <Text
                  color={Theme.essGrey2_C}
                  fontSize={width < 700 ? `10px` : `16px`}
                >
                  초중고, 대학교 등 교육기관
                </Text>
                <Text
                  color={Theme.essGrey2_C}
                  fontSize={width < 700 ? `10px` : `16px`}
                >
                  58개 사이트의 자료보호
                </Text>
                {/* 4 */}
                <Wrapper
                  className={`mobile`}
                  display={`none`}
                  isAbsolute={true}
                  top={`0`}
                  left={`0`}
                  zIndex={`10`}
                >
                  <Image
                    alt="mobileImg"
                    src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2FMM00%2F%E1%84%80%E1%85%AD%E1%84%8B%E1%85%B2%E1%86%A8%E1%84%80%E1%85%B5%E1%84%80%E1%85%AA%E1%86%AB.png?alt=media&token=cf538c67-991a-43e9-a70d-1902db52026c`}
                  />
                </Wrapper>
                <BoxWrapper>
                  <Wrapper al={`flex-start`}>
                    <Text fontSize={width < 700 && `10px`}>USB</Text>
                    <Wrapper
                      dr={`row`}
                      ju={`flex-start`}
                      al={`flex-start`}
                      margin={width < 700 ? `5px 0 0` : `10px 0 0`}
                    >
                      <Wrapper
                        width={`calc(100% / 3 - (30px / 3))`}
                        margin={`0 15px 0 0`}
                      >
                        <Image
                          width={width < 700 ? `26px` : `47px`}
                          height={`21px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FUSB(USB%20Type-A).svg?alt=media&token=9b5322d5-7af8-4748-875a-9be5643d6f0d`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          USB Type A
                        </Text>
                      </Wrapper>
                      <Wrapper
                        width={`calc(100% / 3 - (30px / 3))`}
                        margin={`0 15px 0 0`}
                      >
                        <Image
                          width={width < 700 ? `30px` : `54px`}
                          height={`21px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FUSB-C0D(USB%20Type-C).svg?alt=media&token=8cc76607-cdb9-4174-a0da-a252864a8525`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          USB Type C
                        </Text>
                      </Wrapper>
                      <Wrapper width={`calc(100% / 3 - (30px / 3))`}>
                        <Image
                          width={width < 700 ? `38px` : `58px`}
                          height={`21px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FUSB%20Cable(USB%20Type-A%20Connector).svg?alt=media&token=0780c408-a611-4aab-8c7f-f43378a62a60`}
                        />
                        <Text fontSize={`10px`} fontWeight={`300`}>
                          USB Cable
                        </Text>
                      </Wrapper>
                    </Wrapper>
                  </Wrapper>

                  <Wrapper al={`flex-start`}>
                    <Text fontSize={width < 700 && `10px`}>Network</Text>
                    <Wrapper
                      dr={`row`}
                      ju={`flex-start`}
                      al={`flex-start`}
                      margin={`10px 0 0`}
                    >
                      <Wrapper
                        width={`calc(100% / 3 - (30px / 3))`}
                        margin={`0 15px 0 0`}
                      >
                        <Image
                          width={`33px`}
                          height={`28px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FRJ45(RJ-45%2C%20Ethernet%20RJ-45).svg?alt=media&token=8e0c055e-a235-4d60-a9cb-69b2761512b4`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          RJ45
                        </Text>
                      </Wrapper>
                      <Wrapper
                        width={`calc(100% / 3 - (30px / 3))`}
                        margin={`0 15px 0 0`}
                      >
                        <Image
                          width={`56px`}
                          height={`28px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FLAN%20Cable(Ethernet%20RJ-45%20Connector).svg?alt=media&token=b58057f1-c372-48a2-822e-24fe74baf30f`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          LAN Cable
                        </Text>
                      </Wrapper>
                      <Wrapper width={`calc(100% / 3 - (30px / 3))`}></Wrapper>
                    </Wrapper>
                  </Wrapper>

                  <Wrapper al={`flex-start`}>
                    <Text fontSize={width < 700 && `10px`}>Anti-Theft</Text>
                    <Wrapper
                      dr={`row`}
                      ju={`flex-start`}
                      al={`flex-start`}
                      margin={`10px 0 0`}
                    >
                      <Wrapper
                        width={`calc(100% / 3 - (30px / 3))`}
                        margin={`0 15px 0 0`}
                      >
                        <Image
                          width={`43px`}
                          height={`37px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FDesktop.svg?alt=media&token=a7a8de60-9836-41a0-9a08-c1b269cb03e1`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          Desktop
                        </Text>
                      </Wrapper>
                      <Wrapper
                        width={`calc(100% / 3 - (30px / 3))`}
                        margin={`0 15px 0 0`}
                      >
                        <Image
                          width={`42px`}
                          height={`37px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FLaptop.svg?alt=media&token=537395d1-446d-45cc-b4ba-2d3e841f64a4`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          Laptop
                        </Text>
                      </Wrapper>
                      <Wrapper width={`calc(100% / 3 - (30px / 3))`}></Wrapper>
                    </Wrapper>
                  </Wrapper>
                </BoxWrapper>
                {/* 4 */}
              </Box>
            </Wrapper>
            <Wrapper
              dr={`row`}
              ju={width < 700 ? `space-between` : `flex-start`}
            >
              <Box
                isRelative={true}
                bgImg={`url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2FMM00%2FHOME_boxImg_5.png?alt=media&token=6034dd62-5e91-41dd-9f06-33a1f785b517")`}
              >
                <Text
                  display={width < 700 ? `none` : `flex`}
                  color={Theme.white_C}
                  fontSize={`30px`}
                  fontWeight={`700`}
                >
                  의료시설 및
                </Text>
                <Text
                  display={width < 700 ? `none` : `flex`}
                  color={Theme.white_C}
                  fontSize={`30px`}
                  fontWeight={`700`}
                  margin={`0 0 5px`}
                >
                  연구소
                </Text>
                <Text
                  display={width < 700 ? `flex` : `none`}
                  color={Theme.white_C}
                  fontSize={`12px`}
                  fontWeight={`700`}
                  margin={`0 0 5px`}
                >
                  의료시설 및 연구소
                </Text>
                <Text
                  display={width < 700 ? `none` : `flex`}
                  color={Theme.essGrey2_C}
                  fontSize={`16px`}
                >
                  의료정보, R&#38;D 연구 자료 보호
                </Text>
                <Text
                  display={width < 700 ? `flex` : `none`}
                  color={Theme.essGrey2_C}
                  fontSize={`10px`}
                >
                  의료정보, R&#38;D
                </Text>
                <Text
                  display={width < 700 ? `flex` : `none`}
                  color={Theme.essGrey2_C}
                  fontSize={`10px`}
                >
                  연구 자료 보호
                </Text>
                {/* 5 */}
                <Wrapper
                  className={`mobile`}
                  display={`none`}
                  isAbsolute={true}
                  top={`0`}
                  left={`0`}
                  zIndex={`10`}
                >
                  <Image
                    alt="mobileImg"
                    src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2FMM00%2F%E1%84%8B%E1%85%B4%E1%84%85%E1%85%AD%E1%84%89%E1%85%B5%E1%84%89%E1%85%A5%E1%86%AF.png?alt=media&token=cd2a8801-7a08-40cf-ad31-03aa74a4bbfc`}
                  />
                </Wrapper>
                <BoxWrapper>
                  <Wrapper al={`flex-start`}>
                    <Text fontSize={width < 700 && `10px`}>USB</Text>
                    <Wrapper
                      dr={`row`}
                      ju={`flex-start`}
                      al={`flex-start`}
                      margin={`10px 0 0`}
                    >
                      <Wrapper
                        width={`calc(100% / 3 - (30px / 3))`}
                        margin={`0 15px 0 0`}
                      >
                        <Image
                          width={`47px`}
                          height={`25px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FUSB(USB%20Type-A).svg?alt=media&token=9b5322d5-7af8-4748-875a-9be5643d6f0d`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          USB Type A
                        </Text>
                      </Wrapper>
                      <Wrapper
                        width={`calc(100% / 3 - (30px / 3))`}
                        margin={`0 15px 0 0`}
                      >
                        <Image
                          width={`30px`}
                          height={`25px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FUSB-B(USB%20Type-B).svg?alt=media&token=4c8adb85-1e22-4762-a9e6-a292af53d103`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          USB Type B
                        </Text>
                      </Wrapper>
                      <Wrapper width={`calc(100% / 3 - (30px / 3))`}>
                        <Image
                          width={`58px`}
                          height={`25px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FUSB%20Cable(USB%20Type-A%20Connector).svg?alt=media&token=0780c408-a611-4aab-8c7f-f43378a62a60`}
                        />
                        <Text fontSize={`10px`} fontWeight={`300`}>
                          USB Cable
                        </Text>
                      </Wrapper>
                    </Wrapper>
                  </Wrapper>

                  <Wrapper al={`flex-start`}>
                    <Text fontSize={width < 700 && `10px`}>Network</Text>
                    <Wrapper
                      dr={`row`}
                      ju={`flex-start`}
                      al={`flex-start`}
                      margin={`10px 0 0`}
                    >
                      <Wrapper
                        width={`calc(100% / 4 - (30px / 4))`}
                        margin={`0 10px 0 0`}
                      >
                        <Image
                          width={`33px`}
                          height={`28px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FRJ45(RJ-45%2C%20Ethernet%20RJ-45).svg?alt=media&token=8e0c055e-a235-4d60-a9cb-69b2761512b4`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          RJ45
                        </Text>
                      </Wrapper>
                      <Wrapper
                        width={`calc(100% / 4 - (30px / 4))`}
                        margin={`0 10px 0 0`}
                      >
                        <Image
                          width={`56px`}
                          height={`28px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FLAN%20Cable(Ethernet%20RJ-45%20Connector).svg?alt=media&token=b58057f1-c372-48a2-822e-24fe74baf30f`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          LAN Cable
                        </Text>
                      </Wrapper>
                      <Wrapper
                        width={`calc(100% / 4 - (30px / 4))`}
                        margin={`0 10px 0 0`}
                      >
                        <Image
                          width={`34px`}
                          height={`28px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FRF%20Connector.svg?alt=media&token=e84fbbdc-cd0b-4def-bd53-b07d31e843e0`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          RF
                        </Text>
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          Connector
                        </Text>
                      </Wrapper>
                      <Wrapper width={`calc(100% / 4 - (30px / 4))`}>
                        <Image
                          width={`31px`}
                          height={`28px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2Ffemale%20BNC%20Connector.svg?alt=media&token=c6927666-1570-4ef7-8577-373dfba58fca`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                          letterSpacing={`-0.9px`}
                        >
                          female BNC
                        </Text>
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          Connector
                        </Text>
                      </Wrapper>
                    </Wrapper>
                  </Wrapper>

                  <Wrapper al={`flex-start`}>
                    <Text fontSize={width < 700 && `10px`}>Anti-Theft</Text>
                    <Wrapper
                      dr={`row`}
                      ju={`flex-start`}
                      al={`flex-start`}
                      margin={`10px 0 0`}
                    >
                      <Wrapper
                        width={`calc(100% / 3 - (30px / 3))`}
                        margin={`0 15px 0 0`}
                      >
                        <Image
                          width={`43px`}
                          height={`37px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FDesktop.svg?alt=media&token=a7a8de60-9836-41a0-9a08-c1b269cb03e1`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          Desktop
                        </Text>
                      </Wrapper>
                      <Wrapper
                        width={`calc(100% / 3 - (30px / 3))`}
                        margin={`0 15px 0 0`}
                      >
                        <Image
                          width={`42px`}
                          height={`37px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FLaptop.svg?alt=media&token=537395d1-446d-45cc-b4ba-2d3e841f64a4`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          Laptop
                        </Text>
                      </Wrapper>
                    </Wrapper>
                  </Wrapper>
                </BoxWrapper>
                {/* 5 */}
              </Box>
              <Box
                isRelative={true}
                bgImg={`url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2FMM00%2FHOME_boxImg_6.png?alt=media&token=22009216-88f8-4d11-9be7-2c2e191383de")`}
              >
                <Text
                  color={Theme.white_C}
                  fontSize={width < 700 ? `12px` : `30px`}
                  fontWeight={`700`}
                  margin={`0 0 5px`}
                >
                  금융
                </Text>
                <Text
                  color={Theme.essGrey2_C}
                  fontSize={width < 700 ? `10px` : `16px`}
                >
                  주요 은행, 증권, 생보사 등
                </Text>
                <Text
                  color={Theme.essGrey2_C}
                  fontSize={width < 700 ? `10px` : `16px`}
                >
                  금융자료 보안
                </Text>
                {/* 6 */}
                <Wrapper
                  className={`mobile`}
                  display={`none`}
                  isAbsolute={true}
                  top={`0`}
                  left={`0`}
                  zIndex={`10`}
                >
                  <Image
                    alt="mobileImg"
                    src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2FMM00%2F%E1%84%80%E1%85%B3%E1%86%B7%E1%84%8B%E1%85%B2%E1%86%BC.png?alt=media&token=82d6361b-52ea-4aaf-b530-1e82705faecf`}
                  />
                </Wrapper>
                <BoxWrapper>
                  <Wrapper al={`flex-start`}>
                    <Text fontSize={width < 700 && `10px`}>USB</Text>
                    <Wrapper
                      dr={`row`}
                      ju={`flex-start`}
                      al={`flex-start`}
                      margin={`10px 0 0`}
                    >
                      <Wrapper
                        width={`calc(100% / 3 - (30px / 3))`}
                        margin={`0 15px 0 0`}
                      >
                        <Image
                          width={`47px`}
                          height={`21px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FUSB(USB%20Type-A).svg?alt=media&token=9b5322d5-7af8-4748-875a-9be5643d6f0d`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          USB Type A
                        </Text>
                      </Wrapper>
                      <Wrapper
                        width={`calc(100% / 3 - (30px / 3))`}
                        margin={`0 15px 0 0`}
                      >
                        <Image
                          width={`58px`}
                          height={`21px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FUSB%20Cable(USB%20Type-A%20Connector).svg?alt=media&token=0780c408-a611-4aab-8c7f-f43378a62a60`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          USB Cable
                        </Text>
                      </Wrapper>
                      <Wrapper width={`calc(100% / 3 - (30px / 3))`}></Wrapper>
                    </Wrapper>
                  </Wrapper>

                  <Wrapper al={`flex-start`}>
                    <Text fontSize={width < 700 && `10px`}>Network</Text>
                    <Wrapper
                      dr={`row`}
                      ju={`flex-start`}
                      al={`flex-start`}
                      margin={`10px 0 0`}
                    >
                      <Wrapper
                        width={`calc(100% / 3 - (30px / 3))`}
                        margin={`0 15px 0 0`}
                      >
                        <Image
                          width={`33px`}
                          height={`28px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FRJ45(RJ-45%2C%20Ethernet%20RJ-45).svg?alt=media&token=8e0c055e-a235-4d60-a9cb-69b2761512b4`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          RJ45
                        </Text>
                      </Wrapper>
                      <Wrapper
                        width={`calc(100% / 3 - (30px / 3))`}
                        margin={`0 15px 0 0`}
                      >
                        <Image
                          width={`56px`}
                          height={`28px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FLAN%20Cable(Ethernet%20RJ-45%20Connector).svg?alt=media&token=b58057f1-c372-48a2-822e-24fe74baf30f`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          LAN Cable
                        </Text>
                      </Wrapper>
                      <Wrapper width={`calc(100% / 3 - (30px / 3))`}></Wrapper>
                    </Wrapper>
                  </Wrapper>

                  <Wrapper al={`flex-start`}>
                    <Text fontSize={width < 700 && `10px`}>Anti-Theft</Text>
                    <Wrapper
                      dr={`row`}
                      ju={`flex-start`}
                      al={`flex-start`}
                      margin={`10px 0 0`}
                    >
                      <Wrapper
                        width={`calc(100% / 3 - (30px / 3))`}
                        margin={`0 15px 0 0`}
                      >
                        <Image
                          width={`43px`}
                          height={`37px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FDesktop.svg?alt=media&token=a7a8de60-9836-41a0-9a08-c1b269cb03e1`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          Desktop
                        </Text>
                      </Wrapper>
                      <Wrapper
                        width={`calc(100% / 3 - (30px / 3))`}
                        margin={`0 15px 0 0`}
                      >
                        <Image
                          width={`42px`}
                          height={`37px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FLaptop.svg?alt=media&token=537395d1-446d-45cc-b4ba-2d3e841f64a4`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          Laptop
                        </Text>
                      </Wrapper>
                    </Wrapper>
                  </Wrapper>
                </BoxWrapper>
                {/* 6 */}
              </Box>
              <Box
                isRelative={true}
                bgImg={`url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2FMM00%2FHOME_boxImg_7.png?alt=media&token=dc9a30e8-48b6-4fa4-b6c2-d73261b2a839")`}
              >
                <Text
                  color={Theme.white_C}
                  fontSize={width < 700 ? `12px` : `30px`}
                  fontWeight={`700`}
                  margin={`0 0 5px`}
                >
                  교통망 기반시설
                </Text>
                <Text
                  display={width < 700 ? `none` : `flex`}
                  color={Theme.essGrey2_C}
                  fontSize={width < 700 ? `10px` : `16px`}
                >
                  교통망 기반시설
                </Text>
                <Text
                  display={width < 700 ? `none` : `flex`}
                  color={Theme.essGrey2_C}
                  fontSize={width < 700 ? `10px` : `16px`}
                >
                  교통망 연계 업종의 데이터 보안
                </Text>
                <Text
                  display={width < 700 ? `flex` : `none`}
                  color={Theme.essGrey2_C}
                  fontSize={width < 700 ? `10px` : `16px`}
                >
                  철도, 도로 등 교통망
                </Text>
                <Text
                  display={width < 700 ? `flex` : `none`}
                  color={Theme.essGrey2_C}
                  fontSize={width < 700 ? `10px` : `16px`}
                >
                  연계 업종의 데이터 보안
                </Text>
                {/* 7 */}
                <Wrapper
                  className={`mobile`}
                  display={`none`}
                  isAbsolute={true}
                  top={`0`}
                  left={`0`}
                  zIndex={`10`}
                >
                  <Image
                    alt="mobileImg"
                    src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2FMM00%2F%E1%84%80%E1%85%AD%E1%84%90%E1%85%A9%E1%86%BC%E1%84%86%E1%85%A1%E1%86%BC.png?alt=media&token=5eaeaeba-b890-4819-a7fb-ce09061268c4`}
                  />
                </Wrapper>
                <BoxWrapper>
                  <Wrapper al={`flex-start`}>
                    <Text fontSize={width < 700 && `10px`}>USB</Text>
                    <Wrapper
                      dr={`row`}
                      ju={`flex-start`}
                      al={`flex-start`}
                      margin={`10px 0 0`}
                    >
                      <Wrapper
                        width={`calc(100% / 3 - (30px / 3))`}
                        margin={`0 15px 0 0`}
                      >
                        <Image
                          width={`47px`}
                          height={`21px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FUSB(USB%20Type-A).svg?alt=media&token=9b5322d5-7af8-4748-875a-9be5643d6f0d`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          USB Type A
                        </Text>
                      </Wrapper>
                      <Wrapper
                        width={`calc(100% / 3 - (30px / 3))`}
                        margin={`0 15px 0 0`}
                      >
                        <Image
                          width={`58px`}
                          height={`21px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FUSB%20Cable(USB%20Type-A%20Connector).svg?alt=media&token=0780c408-a611-4aab-8c7f-f43378a62a60`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          USB Cable
                        </Text>
                      </Wrapper>
                    </Wrapper>
                  </Wrapper>

                  <Wrapper al={`flex-start`}>
                    <Text fontSize={width < 700 && `10px`}>Network</Text>
                    <Wrapper
                      dr={`row`}
                      ju={`flex-start`}
                      al={`flex-start`}
                      margin={`10px 0 0`}
                    >
                      <Wrapper width={`25%`} ju={`flex-start`}>
                        <Image
                          width={`28px`}
                          height={`32px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FRJ11(RJ-11).svg?alt=media&token=ab88406b-bc4a-4117-9c75-cd41e0bc59c3`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          RJ11
                        </Text>
                      </Wrapper>
                      <Wrapper width={`25%`} ju={`flex-start`}>
                        <Image
                          width={`33px`}
                          height={`32px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FRJ45(RJ-45%2C%20Ethernet%20RJ-45).svg?alt=media&token=8e0c055e-a235-4d60-a9cb-69b2761512b4`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          RJ45
                        </Text>
                      </Wrapper>
                      <Wrapper width={`25%`} ju={`flex-start`}>
                        <Image
                          width={`56px`}
                          height={`32px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FLAN%20Cable(Ethernet%20RJ-45%20Connector).svg?alt=media&token=b58057f1-c372-48a2-822e-24fe74baf30f`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          LAN Cable
                        </Text>
                      </Wrapper>
                      <Wrapper width={`25%`} ju={`flex-start`}>
                        <Image
                          width={`31px`}
                          height={`32px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2Ffemale%20BNC%20Connector.svg?alt=media&token=c6927666-1570-4ef7-8577-373dfba58fca`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                          letterSpacing={`-0.9px`}
                        >
                          female BNC
                        </Text>
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          Connector
                        </Text>
                      </Wrapper>
                    </Wrapper>
                  </Wrapper>

                  <Wrapper al={`flex-start`}>
                    <Text fontSize={width < 700 && `10px`}>Optical Fiber</Text>
                    <Wrapper
                      dr={`row`}
                      ju={`flex-start`}
                      al={`flex-start`}
                      margin={`10px 0 0`}
                    >
                      <Wrapper
                        width={`calc(100% / 3 - (30px / 3))`}
                        margin={`0 15px 0 0`}
                      >
                        <Image
                          width={width < 700 ? `26px` : `37px`}
                          height={width < 700 ? `auto` : `28px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FQSFP%20Transceiver.svg?alt=media&token=b4578725-6f4b-41d9-bc8d-863bbb9727a4`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          QSFP
                        </Text>
                      </Wrapper>
                      <Wrapper
                        width={`calc(100% / 3 - (30px / 3))`}
                        margin={`0 15px 0 0`}
                      >
                        <Image
                          width={width < 700 ? `26px` : `38px`}
                          height={width < 700 ? `auto` : `28px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FSFP%20Port%20(Mini%20GBIC).svg?alt=media&token=3c212117-e976-4f87-ab76-5c7b29f5d07f`}
                        />

                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          SFP Port
                        </Text>
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          (Optical Fiber)
                        </Text>
                      </Wrapper>
                      <Wrapper width={`calc(100% / 3 - (30px / 3))`}>
                        <Image
                          width={width < 700 ? `26px` : `62px`}
                          height={width < 700 ? `auto` : `28px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FGBIC%20Port.svg?alt=media&token=4be6deb9-6079-48fb-8611-d205cc867893`}
                        />

                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          GBIC Port
                        </Text>
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          (Optical Fiber)
                        </Text>
                      </Wrapper>
                    </Wrapper>
                  </Wrapper>
                </BoxWrapper>
                {/* 7 */}
              </Box>
              <Box
                isRelative={true}
                bgImg={`url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2FMM00%2FHOME_boxImg_8.png?alt=media&token=343d2cb0-0e59-4aa9-99d7-5955ac098a07")`}
              >
                <Text
                  display={width < 700 ? `none` : `flex`}
                  color={Theme.white_C}
                  fontSize={`30px`}
                  fontWeight={`700`}
                >
                  공항, 항만 등
                </Text>
                <Text
                  display={width < 700 ? `none` : `flex`}
                  color={Theme.white_C}
                  fontSize={`30px`}
                  fontWeight={`700`}
                  margin={`0 0 5px`}
                >
                  운송
                </Text>
                <Text
                  display={width < 700 ? `flex` : `none`}
                  color={Theme.white_C}
                  fontSize={`12px`}
                  fontWeight={`700`}
                  margin={`0 0 5px`}
                >
                  공항, 항만 등 운송
                </Text>
                <Text
                  color={Theme.essGrey2_C}
                  fontSize={width < 700 ? `10px` : `16px`}
                >
                  공항, 비행기, 선박 및
                </Text>
                <Text
                  color={Theme.essGrey2_C}
                  fontSize={width < 700 ? `10px` : `16px`}
                >
                  운송사의 정보보호
                </Text>
                {/* 8 */}
                <Wrapper
                  className={`mobile`}
                  display={`none`}
                  isAbsolute={true}
                  top={`0`}
                  left={`0`}
                  zIndex={`10`}
                >
                  <Image
                    alt="mobileImg"
                    src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2FMM00%2F%E1%84%80%E1%85%A9%E1%86%BC%E1%84%92%E1%85%A1%E1%86%BC%E1%84%92%E1%85%A1%E1%86%BC%E1%84%86%E1%85%A1%E1%86%AB.png?alt=media&token=706150cf-275c-47f4-8a69-94cf0ddc416f`}
                  />
                </Wrapper>
                <BoxWrapper>
                  <Wrapper al={`flex-start`}>
                    <Text fontSize={width < 700 && `10px`}>USB</Text>
                    <Wrapper
                      dr={`row`}
                      ju={`flex-start`}
                      al={`flex-start`}
                      margin={width < 700 ? `5px 0 0` : `10px 0 0`}
                    >
                      <Wrapper
                        width={`calc(100% / 3 - (30px / 3))`}
                        margin={`0 15px 0 0`}
                      >
                        <Image
                          width={width < 700 ? `26px` : `47px`}
                          height={`21px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FUSB(USB%20Type-A).svg?alt=media&token=9b5322d5-7af8-4748-875a-9be5643d6f0d`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          USB Type A
                        </Text>
                      </Wrapper>
                      <Wrapper
                        width={`calc(100% / 3 - (30px / 3))`}
                        margin={`0 15px 0 0`}
                      >
                        <Image
                          width={width < 700 ? `30px` : `54px`}
                          height={`21px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FUSB-C0D(USB%20Type-C).svg?alt=media&token=8cc76607-cdb9-4174-a0da-a252864a8525`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          USB Type C
                        </Text>
                      </Wrapper>
                      <Wrapper width={`calc(100% / 3 - (30px / 3))`}>
                        <Image
                          width={width < 700 ? `38px` : `58px`}
                          height={`21px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FUSB%20Cable(USB%20Type-A%20Connector).svg?alt=media&token=0780c408-a611-4aab-8c7f-f43378a62a60`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          USB Cable
                        </Text>
                      </Wrapper>
                    </Wrapper>
                  </Wrapper>

                  <Wrapper al={`flex-start`}>
                    <Text fontSize={width < 700 && `10px`}>Network</Text>
                    <Wrapper
                      dr={`row`}
                      ju={`flex-start`}
                      al={`flex-start`}
                      margin={`10px 0 0`}
                    >
                      <Wrapper width={`25%`} ju={`flex-start`}>
                        <Image
                          width={`28px`}
                          height={`32px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FRJ11(RJ-11).svg?alt=media&token=ab88406b-bc4a-4117-9c75-cd41e0bc59c3`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          RJ11
                        </Text>
                      </Wrapper>
                      <Wrapper width={`25%`} ju={`flex-start`}>
                        <Image
                          width={`33px`}
                          height={`32px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FRJ45(RJ-45%2C%20Ethernet%20RJ-45).svg?alt=media&token=8e0c055e-a235-4d60-a9cb-69b2761512b4`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          RJ45
                        </Text>
                      </Wrapper>
                      <Wrapper width={`25%`} ju={`flex-start`}>
                        <Image
                          width={`56px`}
                          height={`32px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FLAN%20Cable(Ethernet%20RJ-45%20Connector).svg?alt=media&token=b58057f1-c372-48a2-822e-24fe74baf30f`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          LAN Cable
                        </Text>
                      </Wrapper>
                      <Wrapper width={`25%`} ju={`flex-start`}>
                        <Image
                          width={`31px`}
                          height={`32px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2Ffemale%20BNC%20Connector.svg?alt=media&token=c6927666-1570-4ef7-8577-373dfba58fca`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                          letterSpacing={`-0.9px`}
                        >
                          female BNC
                        </Text>
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          Connector
                        </Text>
                      </Wrapper>
                    </Wrapper>
                  </Wrapper>

                  <Wrapper al={`flex-start`}>
                    <Text fontSize={width < 700 && `10px`}>Optical Fiber</Text>
                    <Wrapper
                      dr={`row`}
                      ju={`flex-start`}
                      al={`flex-start`}
                      margin={`10px 0 0`}
                    >
                      <Wrapper
                        width={`calc(100% / 3 - (10px / 3))`}
                        margin={`0 5px 0 0`}
                      >
                        <Image
                          width={`36px`}
                          height={`28px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FSFP%20Transceiver.svg?alt=media&token=d23660cc-dfac-4d8f-abff-8f098b03a587`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          SFP Transceiver
                        </Text>
                      </Wrapper>
                      <Wrapper
                        width={`calc(100% / 3 - (10px / 3))`}
                        margin={`0 5px 0 0`}
                      >
                        <Image
                          width={`37px`}
                          height={`28px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FSFP%20Port%20(Mini%20GBIC).svg?alt=media&token=3c212117-e976-4f87-ab76-5c7b29f5d07f`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          SFP Port
                        </Text>
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          (Optical Fiber)
                        </Text>
                      </Wrapper>
                      <Wrapper width={`calc(100% / 3 - (10px / 3))`}>
                        <Image
                          width={`60px`}
                          height={`28px`}
                          objectFit={`contain`}
                          margin={width < 700 ? `0 0 3px` : `0 0 10px`}
                          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%EB%8C%80%EC%83%81%ED%8F%AC%ED%8A%B8%2FGBIC%20Port.svg?alt=media&token=4be6deb9-6079-48fb-8611-d205cc867893`}
                        />
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          GBIC Port
                        </Text>
                        <Text
                          fontSize={`10px`}
                          fontWeight={`300`}
                          lineHeight={`1.3`}
                        >
                          (Optical Fiber)
                        </Text>
                      </Wrapper>
                    </Wrapper>
                  </Wrapper>
                </BoxWrapper>
                {/* 8 */}
              </Box>
            </Wrapper>
          </Wrapper>
        </RsWrapper>
      </WholeWrapper>
    </ParallaxProvider>
  );
};

export default withResizeDetector(MM19Presenter);
