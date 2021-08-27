import React from "react";
import withSplitting from "../../../Lib/withSplitting";
import {
  WholeWrapper,
  Wrapper,
  RsWrapper,
  Text,
  Image,
} from "../../../Components/CommonComponents";
import styled from "styled-components";
import { withResizeDetector } from "react-resize-detector";
import useTitle from "@4leaf.ysh/use-title";
import Theme from "../../../Styles/Theme";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { translate102 } from "../../../Components/AnimationCommon";

const ProText = styled.div`
  color: ${(props) => props.theme.white_C};
  text-align: center;
  opacity: 0;
  visibility: hidden;
  position: absolute;
  bottom: -65%;
  left: 0;
  width: 100%;
  transition: 0.6s;
`;

const ImgWrapper = styled(Wrapper)`
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &:hover:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  &:hover {
    .hoverImg {
      transform: scale(1.1);
    }
  }

  &:hover ${ProText} {
    opacity: 1;
    visibility: visible;

    @media (max-width: 700px) {
      display: none;
    }
  }
`;

const EssText = styled.div`
  color: ${(props) => props.theme.white_C};
  text-align: center;
  opacity: 0;
  visibility: hidden;
  position: absolute;
  bottom: -70%;
  left: 0;
  width: 100%;
  transition: 0.6s;
`;

const ImgWrapper2 = styled(Wrapper)`
  position: relative;
  overflow: hidden;
  cursor: pointer;

  & .hover {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    visibility: hidden;
    transition: 0.2s;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.68);
    z-index: 10;
  }

  /* &:hover:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  } */

  &:hover {
    &:before {
      background-color: transparent;
    }

    & .noHover {
      opacity: 0;
      visibility: hidden;
    }

    & .hover {
      opacity: 1;
      visibility: visible;
      transform: scale(1.1);
      transition: 0.2s;
    }

    & .noHoverSmart,
    .noHoverEss {
      display: none;
    }

    & .hoverSmart,
    .hoverEss {
      display: flex;
    }

    & ${EssText} {
      opacity: 1;
      visibility: visible;

      @media (max-width: 700px) {
        display: none;
      }
    }
  }
`;

const BeforeImg = styled(Wrapper)`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

const ArrowIcon = styled(Text)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & svg {
    font-size: 16px;
    margin-left: 5px;

    @media (max-width: 700px) {
      font-size: 14px;
    }
  }

  @media (max-width: 700px) {
    font-size: 14px;
    font-weight: 700;
  }
`;

const Arrow = styled(Wrapper)`
  position: absolute;
  bottom: 9%;
  left: calc(50% - 14px);
  width: auto;
  animation: ${translate102} 1.9s infinite;
  font-size: 28px;
  color: ${(props) => props.theme.white_C};

  @media (max-width: 700px) {
    bottom: 3%;

    & svg {
      color: rgb(0, 116, 188);
    }
  }
`;

const LinkTag = styled(Link)`
  width: ${(props) => props.width || `50%`};
  display: ${(props) => props.display || `flex`};
  align-items: ${(props) => props.al || `center`};
  justify-content: ${(props) => props.ju || `center`};
`;

const MMinitPresenter = ({ width, moveLinkHandler, moveLinkHandler2 }) => {
  useTitle(`${process.env["HOMEPAGE_NAME"]}`);

  return (
    <WholeWrapper>
      <Wrapper isRelative={true}>
        <Wrapper dr={`row`}>
          <ImgWrapper
            width={width < 900 ? `100%` : `50%`}
            height={
              width < 1100
                ? width < 900
                  ? width < 700
                    ? `360px`
                    : `400px`
                  : `calc(100vh - 450px)`
                : `calc(100vh - 150px)`
            }
            isRelative={true}
            onClick={() => moveLinkHandler("https://www.smartkeeper.kr/#/pro")}
          >
            <Image
              className={`hoverImg`}
              height={
                width < 1100
                  ? width < 900
                    ? width < 700
                      ? `360px`
                      : `400px`
                    : `calc(100vh - 450px)`
                  : `calc(100vh - 150px)`
              }
              alt="image"
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2FLanding%2Fpro_image.png?alt=media&token=db7eb2c9-5486-492c-9243-735d8e03f1b8`}
            />

            <Wrapper
              isAbsolute={true}
              top={`0`}
              left={`0`}
              padding={`30px 0 0`}
              zIndex={`999`}
            >
              <Image
                width={width < 700 ? `100px` : `196px`}
                alt="smartkeeper"
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMMinit%2FSMARTKEEPER_Landing.svg?alt=media&token=a9b47d47-6562-49ec-9a19-c71746a8f488`}
              />
              <Image
                width={width < 700 ? `100px` : `156px`}
                margin={width < 900 ? `120px 0 0` : `300px 0 0`}
                alt="pro"
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMMinit%2FPRO_Landing.svg?alt=media&token=c474bdd7-002f-4708-9e44-509f2e57cf15`}
              />
              <ProText>
                <Wrapper
                  width={`25px`}
                  border={`1px solid ${Theme.white_C}`}
                  al={`center`}
                  margin={`0 auto`}
                ></Wrapper>
                <Text
                  fontSize={`25px`}
                  textAlign={`center`}
                  margin={`15px 0 0`}
                >
                  For Professionals Only
                </Text>
                <Wrapper margin={`100px 0 0`}>
                  <Text fontSize={width < 1280 ? `14px` : `18px`}>
                    For better security, sold exclusively to verified companies.
                    Proven choice of
                  </Text>
                  <Text fontSize={width < 1280 ? `14px` : `18px`}>
                    3,000+ installation sites worldwide from a wide range of
                    industries
                  </Text>
                  <Text fontSize={width < 1280 ? `14px` : `18px`}>
                    including, government, military and public &#38; private
                    institutions.
                  </Text>
                </Wrapper>
              </ProText>
            </Wrapper>
          </ImgWrapper>

          <ImgWrapper2
            width={width < 900 ? `100%` : `50%`}
            height={
              width < 1100
                ? width < 900
                  ? width < 700
                    ? `360px`
                    : `400px`
                  : `calc(100vh - 450px)`
                : `calc(100vh - 150px)`
            }
            isRelative={true}
            onClick={() => moveLinkHandler2("/essential")}
          >
            <Image
              height={
                width < 1100
                  ? width < 900
                    ? width < 700
                      ? `360px`
                      : `400px`
                    : `calc(100vh - 450px)`
                  : `calc(100vh - 150px)`
              }
              alt="image"
              className={`noHover`}
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2FLanding%2Fessential-image.png?alt=media&token=eed0b43b-cb62-45ca-b624-0b57fe005392`}
            />
            <Image
              height={
                width < 1100
                  ? width < 900
                    ? width < 700
                      ? `360px`
                      : `400px`
                    : `calc(100vh - 450px)`
                  : `calc(100vh - 150px)`
              }
              alt="image"
              className={`hover`}
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2FLanding%2Fessential-2.png?alt=media&token=e36cf7db-c0b5-41a4-9804-b3cea70dafe0`}
            />

            <Wrapper
              isAbsolute={true}
              top={`0`}
              left={`0`}
              padding={`30px 0 0`}
              zIndex={`999`}
            >
              <Image
                className={`noHoverSmart`}
                width={width < 700 ? `100px` : `196px`}
                alt="smartkeeper"
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMMinit%2FSMARTKEEPER_br_landing.svg?alt=media&token=7f698310-9665-4bc2-a7b6-f582ae1fff2a`}
              />
              <Image
                className={`hoverSmart`}
                display={`none`}
                width={width < 700 ? `100px` : `196px`}
                alt="smartkeeper"
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMMinit%2FSMARTKEEPER_Landing.svg?alt=media&token=a9b47d47-6562-49ec-9a19-c71746a8f488`}
              />

              <Image
                className={`noHoverEss`}
                width={width < 700 ? `258px` : `400px`}
                margin={width < 900 ? `120px 0 0` : `300px 0 0`}
                alt="essential"
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMMinit%2FESSENTIAL_br_landing.svg?alt=media&token=951ad808-3c13-41ba-b3a5-b8e633029e9f`}
              />
              <Image
                className={`hoverEss`}
                display={`none`}
                width={width < 700 ? `258px` : `400px`}
                margin={width < 900 ? `120px 0 0` : `300px 0 0`}
                alt="essential"
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMMinit%2FESSENTIAL_Landing.svg?alt=media&token=8df4d101-93b6-41d8-b351-4758ff75fcad`}
              />
              <EssText>
                <Wrapper
                  width={`25px`}
                  border={`1px solid ${Theme.white_C}`}
                  al={`center`}
                  margin={`0 auto`}
                ></Wrapper>
                <Text
                  fontSize={`25px`}
                  textAlign={`center`}
                  margin={`15px 0 0`}
                >
                  Security for Your Ideas
                </Text>

                <Wrapper margin={`90px 0 0`}>
                  <Text fontSize={width < 1280 ? `14px` : `18px`}>
                    Manage the results of your hard work with better security.
                  </Text>
                  <Text fontSize={width < 1280 ? `14px` : `18px`}>
                    ESSENTIAL Series available online with economical prices!
                    Secure open USB
                  </Text>
                  <Text fontSize={width < 1280 ? `14px` : `18px`}>
                    Ports and other input/output ports with locks from our
                    ESSENTIAL Series.
                  </Text>
                </Wrapper>
              </EssText>
            </Wrapper>
          </ImgWrapper2>
          <Arrow>
            <FaArrowAltCircleDown />
          </Arrow>
        </Wrapper>
      </Wrapper>

      <Wrapper
        attachment={`initial`}
        bgPosition={width < 700 && `-590px 0`}
        height={`auto`}
        bgImg={`url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2FLanding%2Fimage02.png?alt=media&token=af88cb43-aaa3-4161-ae76-f960b4217d35")`}
      >
        <RsWrapper
          width={`1230px`}
          al={`flex-start`}
          color={Theme.white_C}
          padding={width < 900 ? `76px 36px 94px` : `180px 0`}
        >
          <Text
            fontSize={width < 900 ? `26px` : `40px`}
            fontWeight={`700`}
            lineHeight={width < 700 ? `1.3` : `1.6`}
          >
            {width < 900 ? `Arguably the most` : `Arguably`},
          </Text>
          <Text
            display={width < 900 ? `none` : `flex`}
            fontSize={`40px`}
            fontWeight={`700`}
          >
            the most effective defense is physical defense.
          </Text>
          <Text
            display={width < 900 ? `flex` : `none`}
            fontSize={`26px`}
            fontWeight={`700`}
            lineHeight={`1.3`}
          >
            effective defense is
          </Text>
          <Text
            display={width < 900 ? `flex` : `none`}
            fontSize={`26px`}
            fontWeight={`700`}
            lineHeight={`1.3`}
          >
            physical defense.
          </Text>
          <Wrapper
            display={width < 900 ? `none` : `flex`}
            al={`flex-start`}
            padding={`30px 0`}
          >
            <Text fontSize={`20px`} fontWeight={`300`}>
              “Physical Cybersecurity” may sound foreign, however, like armor
              and shields,
            </Text>
            <Text fontSize={`20px`} fontWeight={`300`}>
              and fences and walls, we have been “physically” protected for a
              long time.
            </Text>
            <Text fontSize={`20px`} fontWeight={`300`}>
              What is physical is real, and what is real has always been
              perfect.
            </Text>
            <Text fontSize={`20px`} fontWeight={`300`}>
              SMARTKEEPER is committed to setting the standard in physical
              cybersecurity.
            </Text>
          </Wrapper>

          <Wrapper
            display={width < 900 ? `flex` : `none`}
            al={`flex-start`}
            padding={width < 900 ? `15px 0 10px` : `30px 0`}
          >
            <Text
              fontSize={`17px`}
              lineHeight={`1.4`}
              letterSpacing={`-0.2px`}
              fontWeight={`300`}
            >
              “Physical Cybersecurity” may sound
            </Text>
            <Text
              fontSize={`17px`}
              lineHeight={`1.4`}
              letterSpacing={`-0.2px`}
              fontWeight={`300`}
            >
              foreign, however, like armor and shields,
            </Text>
            <Text
              fontSize={`17px`}
              lineHeight={`1.4`}
              letterSpacing={`-0.2px`}
              fontWeight={`300`}
            >
              and fences and walls, we have been
            </Text>
            <Text
              fontSize={`17px`}
              lineHeight={`1.4`}
              letterSpacing={`-0.2px`}
              fontWeight={`300`}
            >
              “physically” protected for a long time.
            </Text>
            <Text
              fontSize={`17px`}
              lineHeight={`1.4`}
              letterSpacing={`-0.2px`}
              fontWeight={`300`}
            >
              What is physical is real, and what is real
            </Text>
            <Text
              fontSize={`17px`}
              lineHeight={`1.4`}
              letterSpacing={`-0.2px`}
              fontWeight={`300`}
            >
              has always been perfect. SMARTKEEPER
            </Text>
            <Text
              fontSize={`17px`}
              lineHeight={`1.4`}
              letterSpacing={`-0.2px`}
              fontWeight={`300`}
            >
              is committed to setting the standard in
            </Text>
            <Text
              fontSize={`17px`}
              lineHeight={`1.4`}
              letterSpacing={`-0.2px`}
              fontWeight={`300`}
            >
              physical cybersecurity.
            </Text>
          </Wrapper>

          <Link to="/about">
            <ArrowIcon>
              Learn more
              <FaChevronRight />
            </ArrowIcon>
          </Link>
        </RsWrapper>
      </Wrapper>
      <BeforeImg
        bgPosition={width < 700 && `-720px 0`}
        attachment={`initial`}
        isRelative={true}
        bgImg={`url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2FLanding%2Fimage03.png?alt=media&token=054146a5-1c4b-456b-bcc6-5353e7fade52")`}
      >
        <Wrapper
          isAbsolute={true}
          width={`100%`}
          height={`100%`}
          top={`0`}
          left={`0`}
          bgColor={`rgba(0,0,0,0.4)`}
        ></Wrapper>
        <RsWrapper
          width={`1230px`}
          al={`flex-start`}
          color={Theme.white_C}
          padding={width < 900 ? `100px 30px 60px` : `180px 0`}
        >
          <Text fontSize={width < 900 ? `26px` : `40px`} fontWeight={`700`}>
            {width < 700 ? `We value the voice of` : `We`}
          </Text>
          <Text fontSize={width < 900 ? `26px` : `40px`} fontWeight={`700`}>
            {width < 700
              ? `our customers.`
              : `value the voice of our customers.`}
          </Text>
          <Wrapper
            display={width > 900 ? `flex` : `none`}
            al={`flex-start`}
            padding={`30px 0`}
          >
            <Text fontSize={`20px`} fontWeight={`300`}>
              SMARTKEEPER is in constant communications with cybersecurity
              teams.
            </Text>
            <Text fontSize={`20px`} fontWeight={`300`}>
              We discuss and examine ways to enhance security, safety and
              convenience of use.
            </Text>
            <Text fontSize={`20px`} fontWeight={`300`}>
              From office use to server rooms and industrial sites, we research
              and analyze port specifications and
            </Text>
            <Text fontSize={`20px`} fontWeight={`300`}>
              characteristics to present the best products.
            </Text>
            {/* <Text fontSize={`20px`} fontWeight={`300`}>
              연구하며 최고의 제품을 여러분께 선보입니다.
            </Text> */}
          </Wrapper>

          <Wrapper
            display={width < 900 ? `flex` : `none`}
            al={`flex-start`}
            padding={width < 900 ? `30px 0 18px` : `30px 0`}
          >
            <Text fontSize={`17px`} fontWeight={`300`}>
              SMARTKEEPER is in constant
            </Text>
            <Text fontSize={`17px`} fontWeight={`300`}>
              communications with cybersecurity
            </Text>
            <Text fontSize={`17px`} fontWeight={`300`}>
              teams. We discuss and examine ways
            </Text>
            <Text fontSize={`17px`} fontWeight={`300`}>
              to enhance security, safety and
            </Text>
            <Text fontSize={`17px`} fontWeight={`300`}>
              convenience of use.
            </Text>
            <Text fontSize={`17px`} fontWeight={`300`}>
              From office use to server rooms and
            </Text>
            <Text fontSize={`17px`} fontWeight={`300`}>
              industrial sites, we research and analyze
            </Text>
            <Text fontSize={`17px`} fontWeight={`300`}>
              port specifications and characteristics
            </Text>
            <Text fontSize={`17px`} fontWeight={`300`}>
              to present the best products.
            </Text>
          </Wrapper>
          <ArrowIcon>
            <Link to="/contact">
              Learn more
              <FaChevronRight />
            </Link>
          </ArrowIcon>
        </RsWrapper>
      </BeforeImg>
    </WholeWrapper>
  );
};

export default withResizeDetector(MMinitPresenter);
