import React, { useEffect, useState } from "react";
import withSplitting from "../../../Lib/withSplitting";
import {
  WholeWrapper,
  Wrapper,
  Image,
  Text,
  RsWrapper,
  SpanText,
} from "../../../Components/CommonComponents";
import styled from "styled-components";
import { withResizeDetector } from "react-resize-detector";
import useTitle from "@4leaf.ysh/use-title";
import Theme from "../../../Styles/Theme";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ArrowIcon = styled(Text)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
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
      font-weight: bold;
    }
  }

  @media (max-width: 700px) {
    font-size: 14px;
  }
`;

const MM05Presenter = ({
  width,
  //
  documentRef,
  temp1Ref,
  temp2Ref,
  temp3Ref,
  temp4Ref,
  temp5Ref,
  temp6Ref,
}) => {
  useTitle(`Combination of Network Security | ${process.env["HOMEPAGE_NAME"]}`);

  const [image, setImage] = useState(1);
  const [pageY, setPageY] = useState(0);
  const [marginImg, setMarginImg] = useState(50);
  const [marginImg2, setMarginImg2] = useState(50);
  const [scale2, setScale2] = useState(1.5);

  const handleScroll = () => {
    const { pageYOffset } = window;

    const temp1Height = temp1Ref.current.offsetTop;
    const temp2Height = temp2Ref.current.offsetTop;
    const temp3Height = temp3Ref.current.offsetTop;
    const temp4Height = temp4Ref.current.offsetTop;
    const temp5Height = temp5Ref.current.offsetTop;
    const temp6Height = temp6Ref.current.offsetTop;

    if (pageYOffset > temp1Height && pageYOffset < temp2Height) {
      if (pageYOffset < temp1Height - 1000) {
        setImage(1);
      } else {
        setImage(2);
      }
    }

    if (pageYOffset >= temp6Height) {
      setScale2(0.9);
    }

    if (pageYOffset > temp3Height - 500 && pageYOffset < temp3Height + 300) {
      if (marginImg - 50 < -300 && pageY < pageYOffset) {
        setMarginImg(-300);
      } else if (pageY > pageYOffset && marginImg + 30 < 50) {
        console.log(marginImg + 30);
        setMarginImg(marginImg + 30);
      } else if (pageY > pageYOffset && marginImg + 30 >= 50) {
        setMarginImg(50);
      } else {
        setMarginImg(marginImg - 50);
      }
    }

    if (pageYOffset > temp5Height - 500 && pageYOffset < temp5Height + 300) {
      if (marginImg2 - 50 < -300 && pageY < pageYOffset) {
        setMarginImg2(-300);
      } else if (pageY > pageYOffset && marginImg2 + 30 < 50) {
        setMarginImg2(marginImg2 + 30);
      } else if (pageY > pageYOffset && marginImg2 + 30 >= 50) {
        setMarginImg2(50);
      } else {
        setMarginImg2(marginImg2 - 50);
      }
    }

    setPageY(pageYOffset);
  };

  useEffect(() => {
    documentRef.current.addEventListener("scroll", handleScroll);
    return () =>
      documentRef.current.removeEventListener("scroll", handleScroll);
  }, [pageY]);

  return (
    <WholeWrapper>
      <Wrapper
        isRelative={true}
        borderBottom={width < 700 && `10px solid ${Theme.white_C}`}
        padding={width < 700 && `260px 0 0`}
        bgColor={width < 700 && `rgb(9, 11, 12)`}
        borderBottom={`10px solid rgb(114, 114, 114)`}
      >
        <Image
          height={width < 700 ? `350px` : `800px`}
          ait="image"
          objectFit={width < 700 ? `cover` : `initial`}
          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM05%2F%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%20%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%20795.png?alt=media&token=621dd404-c143-4489-b7be-93ba3ce0183c`}
        />

        <RsWrapper isAbsolute={true} top={`-22%`} left={`0`} height={`100%`}>
          <Wrapper
            color={Theme.white_C}
            al={width < 700 ? `center` : `flex-start`}
            margin={width < 700 ? `0` : `0 0 0 50px`}
          >
            <Text color={Theme.greyTheme7_C}>Physical Network Security</Text>
            <Text
              fontSize={width < 700 ? `23px` : `40px`}
              fontWeight={`bold`}
              lineHeight={`1.3`}
            >
              Ideal combination for
            </Text>
            <Text
              fontSize={width < 700 ? `23px` : `40px`}
              fontWeight={`bold`}
              lineHeight={`1.3`}
            >
              physical network security.
            </Text>
          </Wrapper>
        </RsWrapper>

        <Wrapper
          isAbsolute={true}
          bottom={width < 700 ? `3%` : `9%`}
          left={width < 700 ? `12%` : `29%`}
          width={`auto`}
          al={`flex-start`}
          color={Theme.white_C}
        >
          <Text fontSize={width < 700 ? `18px` : `24px`}>
            Network Port Lock Plus
          </Text>
          <Text fontSize={width < 700 ? `12px` : `16px`}>(CSK-NL11)</Text>

          <Link to="/p_network/6107f36abdf08f065ce6cd53">
            <ArrowIcon>
              Learn more
              <FaChevronRight />
            </ArrowIcon>
          </Link>
        </Wrapper>

        <Wrapper
          isAbsolute={true}
          bottom={`36%`}
          right={width < 700 ? `35px` : `17%`}
          width={`auto`}
          al={`flex-start`}
          color={Theme.white_C}
        >
          <Text fontSize={width < 700 ? `18px` : `24px`}>
            LAN Cable Lock Plus
          </Text>
          <Text fontSize={width < 700 ? `12px` : `16px`}>(CSK-NC11)</Text>

          <Link to="/p_network/6107f6c7bdf08f065ce6cd5f">
            <ArrowIcon>
              Learn more
              <FaChevronRight />
            </ArrowIcon>
          </Link>
        </Wrapper>
      </Wrapper>

      <Wrapper
        height={width < 700 ? `400px` : `800px`}
        padding={width < 700 ? `0` : `190px 0`}
        attachment={`initial`}
        bgPosition={width < 700 && `-340px 0`}
        bgImg={`url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM05%2F%E1%84%82%E1%85%A6%E1%84%90%E1%85%B3%E1%84%8B%E1%85%AF%E1%84%8F%E1%85%B3-background-1.png?alt=media&token=3c3a6b43-5c5f-485b-b7d8-95c9a6ccdffa")`}
      >
        <RsWrapper
          dr={`row`}
          margin={width < 700 ? `50px 0` : `0`}
          al={`flex-start`}
          ju={`flex-start`}
          color={Theme.white_C}
          padding={width < 700 && `0 35px`}
          isRelative={true}
        >
          <Wrapper width={width < 700 ? `auto` : `60%`} al={`flex-start`}>
            <Image
              width={`70%`}
              alt="Network
              Port Lock Plus-font"
              src={
                width < 700
                  ? `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Fmodify%2FNetwork%20Port%20Lock%20Plus_M_%E1%84%82%E1%85%A6%E1%84%90%E1%85%B3%E1%84%8B%E1%85%AF%E1%84%8F%E1%85%B3%E1%84%86%E1%85%AE%E1%86%AF%E1%84%85%E1%85%B5%E1%84%87%E1%85%A9%E1%84%8B%E1%85%A1%E1%86%AB%E1%84%8B%E1%85%B4%E1%84%8B%E1%85%B5%E1%84%89%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%A8%E1%84%8C%E1%85%A9%E1%84%92%E1%85%A1%E1%86%B8.svg?alt=media&token=405f7d2c-9df8-4134-9505-231ab914a757`
                  : `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Fmodify%2FNetwork%20Port%20Lock%20Plus_%E1%84%82%E1%85%A6%E1%84%90%E1%85%B3%E1%84%8B%E1%85%AF%E1%84%8F%E1%85%B3%E1%84%86%E1%85%AE%E1%86%AF%E1%84%85%E1%85%B5%E1%84%87%E1%85%A9%E1%84%8B%E1%85%A1%E1%86%AB%E1%84%8B%E1%85%B4%E1%84%8B%E1%85%B5%E1%84%89%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%A8%E1%84%8C%E1%85%A9%E1%84%92%E1%85%A1%E1%86%B8.svg?alt=media&token=6ce996bb-fc51-4dd0-9c5b-f42518e171c4`
              }
            />

            <Text
              fontSize={width < 700 ? `12px` : `25px`}
              color={Theme.greyTheme7_C}
            >
              CSK-NL11
            </Text>

            <Wrapper
              display={width < 700 ? `none` : `flex`}
              al={`flex-start`}
              padding={`40px 0 0`}
            >
              <Text fontSize={`30px`} fontWeight={`bold`} margin={`0 0 5px`}>
                Physically secure open RJ45 Port
              </Text>
              <Text fontSize={`24px`} color={Theme.greyTheme7_C}>
                Entryway to all network systems
              </Text>
              <Text fontSize={`24px`} color={Theme.greyTheme7_C}>
                If a network port is open, anyone can have access.
              </Text>
            </Wrapper>

            <Wrapper
              display={width < 700 ? `flex` : `none`}
              al={`flex-start`}
              padding={`80px 0 0`}
            >
              <Text fontSize={`20px`} fontWeight={`bold`}>
                Physically secure
              </Text>
              <Text fontSize={`20px`} fontWeight={`bold`} margin={`0 0 10px`}>
                open RJ45 Port
              </Text>
              <Text fontSize={`18px`} color={Theme.greyTheme7_C}>
                Entryway to all network systems
              </Text>
              <Text fontSize={`18px`} color={Theme.greyTheme7_C}>
                If a network port is open,
              </Text>
              <Text fontSize={`18px`} color={Theme.greyTheme7_C}>
                anyone can have access.
              </Text>
            </Wrapper>
          </Wrapper>
        </RsWrapper>
      </Wrapper>

      <Wrapper
        height={width < 900 ? (width < 700 ? `350px` : `470px`) : `710px`}
        isRelative={true}
        attachment={`initial`}
        bgImg={
          width < 700
            ? `none`
            : `url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM05%2Fbg.png?alt=media&token=b7a7f52c-1302-43fe-8960-ac8f378d9a51")`
        }
        ref={temp1Ref}
      >
        <Image
          isAbsolute={true}
          top={width < 700 ? `20%` : `33%`}
          right={width < 700 ? `10%` : `16%`}
          width={width < 900 ? (width < 700 ? `130px` : `200px`) : `400px`}
          alt="Network Port Lock01"
          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM05%2FNetwork%20Port%20Lock0${image}.png?alt=media&token=7523599c-2077-4af2-9a3a-07b54f670e72`}
        />
        <Wrapper isAbsolute={true} top={`0`} left={`0`} height={`100%`}>
          <RsWrapper al={`flex-start`} padding={width < 700 && `90px 35px 0`}>
            <Wrapper width={width < 700 ? `100%` : `60%`}>
              <Wrapper width={width < 700 ? `100%` : `80%`} al={`flex-start`}>
                <Text
                  fontSize={width < 900 ? `20px` : `34px`}
                  fontWeight={`bold`}
                  margin={`0 0 10px`}
                >
                  Market’s First
                </Text>
                {/* <Text
                  display={width < 900 ? `flex` : `none`}
                  fontSize={`20px`}
                  fontWeight={`bold`}
                >
                  세계최초 동작구조
                </Text>
                <Text
                  display={width < 900 ? `flex` : `none`}
                  fontSize={`20px`}
                  fontWeight={`bold`}
                  margin={`0 0 10px`}
                >
                  포트락.
                </Text> */}
                <Text
                  fontSize={width < 900 ? `16px` : `28px`}
                  color={Theme.darkGrey_C}
                >
                  Fully locks into network port.
                </Text>
                <Text
                  fontSize={width < 900 ? `16px` : `28px`}
                  color={Theme.darkGrey_C}
                >
                  Enhanced security with exceptionally
                </Text>
                <Text
                  fontSize={width < 900 ? `16px` : `28px`}
                  color={Theme.darkGrey_C}
                >
                  thin key hole that prevents tampering.
                </Text>
                <Image
                  width={width < 700 ? `50%` : `50%`}
                  margin={
                    width < 900
                      ? width < 700
                        ? `10px 0 0`
                        : `30px 0 0`
                      : `100px 0 0`
                  }
                  alt="image"
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM05%2Fnet-icon-2.png?alt=media&token=4fc68e0b-1b42-45f5-8b0b-26b519547b2e`}
                />
              </Wrapper>
            </Wrapper>
          </RsWrapper>
        </Wrapper>
      </Wrapper>

      <Wrapper
        isRelative={true}
        ref={temp2Ref}
        padding={width < 900 && `0 0 150px`}
      >
        <Image
          alt="image"
          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM05%2Fnet-background-image-3.png?alt=media&token=cd3f1aa9-2716-4440-98d8-cbc9b4fea9fc`}
        />

        <RsWrapper>
          {/* web */}
          <Wrapper
            display={width < 900 ? `none` : `flex`}
            isAbsolute={true}
            top={`50%`}
            left={`18%`}
            width={`auto`}
            al={`flex-start`}
          >
            <Text fontSize={`28px`} color={`rgb(69,69,69)`}>
              Insert Network Port Lock Plus in the disengaged
            </Text>
            <Text fontSize={`28px`} color={`rgb(69,69,69)`}>
              position and press into the network port fully to
            </Text>
            <Text fontSize={`28px`} color={`rgb(69,69,69)`}>
              engage the locking mechanism.
            </Text>
          </Wrapper>

          {/* mobile */}
          <Wrapper
            display={width < 900 ? `flex` : `none`}
            isAbsolute={true}
            top={`40%`}
            left={`10%`}
            width={`auto`}
            al={`flex-start`}
            color={Theme.darkGrey_C}
            lineHeight={`1.4`}
          >
            <Text fontSize={`18px`} lineHeight={`1.4`} color={`rgb(69,69,69)`}>
              Insert Network Port Lock Plus in
            </Text>
            <Text fontSize={`18px`} lineHeight={`1.4`} color={`rgb(69,69,69)`}>
              the disengaged position and press
            </Text>
            <Text fontSize={`18px`} lineHeight={`1.4`} color={`rgb(69,69,69)`}>
              into the network port fully to
            </Text>
            <Text fontSize={`18px`} lineHeight={`1.4`} color={`rgb(69,69,69)`}>
              engage the locking mechanism.
            </Text>
          </Wrapper>
        </RsWrapper>
      </Wrapper>

      <Wrapper
        bgColor={Theme.greyTheme3_C}
        ref={temp3Ref}
        isRelative={true}
        padding={width < 700 ? `0 0 70px` : `100px 0`}
        borderBottom={width < 700 && `10px solid ${Theme.white_C}`}
      >
        <RsWrapper al={`flex-start`} isRelative={true}>
          <Wrapper
            display={width < 700 ? `none` : `flex`}
            isAbsolute={true}
            top={`${marginImg}px`}
            left={`0%`}
            height={`100%`}
          >
            <Image
              // margin={`0 0 ${marginImg}px 0`}
              ait="image"
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2FMM05%2FMM05.png?alt=media&token=d31823f2-0b23-4c65-bbc6-c5f090f8c462`}
            />
          </Wrapper>

          <Wrapper display={width < 700 ? `flex` : `none`} margin={`-70px 0 0`}>
            <Image
              alt="mobileImg"
              // shadow={`2px 2px 7px rgba(3, 4, 2, 0.31)`}
              radius={`30px`}
              width={`85%`}
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2FMM05%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%204492.png?alt=media&token=9b7166ba-86d0-4e5a-834f-e1ba6fb932dc`}
            />
            <Image
              margin={`30px 0`}
              // shadow={`2px 2px 7px rgba(3, 4, 2, 0.31)`}
              radius={`30px`}
              alt="mobileImg"
              width={`85%`}
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2FMM05%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%204496.png?alt=media&token=9ef74519-1a26-4446-9442-dc5b272197e4`}
            />
            <Image
              alt="mobileImg"
              width={`85%`}
              // shadow={`2px 2px 7px rgba(3, 4, 2, 0.31)`}
              radius={`30px`}
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2FMM05%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%204494.png?alt=media&token=74b687cb-70b5-4148-8217-323aef6b44a5`}
            />
          </Wrapper>

          <Wrapper
            display={width < 700 ? `none` : `flex`}
            al={`flex-start`}
            margin={`300px 0 0`}
          >
            <Text fontSize={`30px`} fontWeight={`700`}>
              Block access to open Network Ports
            </Text>
            <Text fontSize={`24px`} color={Theme.greyTheme4_C}>
              Simple but effective economical solution
            </Text>
            <Text fontSize={`24px`} color={Theme.greyTheme4_C}>
              Physical cyber security is now a must, not a choice.
            </Text>
            <Link to="/usb/6107dd1dbdf08f065ce6cd1e">
              <ArrowIcon fontWeight={`bold`} margin={`30px 0 0`}>
                Learn more about Network Port Lock Plus
                <FaChevronRight />
              </ArrowIcon>
            </Link>
          </Wrapper>
          <Wrapper
            display={width < 700 ? `flex` : `none`}
            al={`flex-start`}
            margin={`40px 0 0`}
            padding={`0 35px`}
          >
            <Text fontWeight={`bold`} margin={`0 0 10px`} fontSize={`17px`}>
              Block access to open Network Ports
            </Text>
            <Text
              fontSize={`18px`}
              color={Theme.greyTheme4_C}
              lineHeight={`1.4`}
            >
              Simple but effective economical
            </Text>
            <Text
              fontSize={`18px`}
              color={Theme.greyTheme4_C}
              lineHeight={`1.4`}
            >
              solution Physical cyber security
            </Text>
            <Text
              fontSize={`18px`}
              color={Theme.greyTheme4_C}
              lineHeight={`1.4`}
            >
              is now a must, not a choice.
            </Text>
            <Link to="/usb/6107dd1dbdf08f065ce6cd1e">
              <ArrowIcon fontWeight={`bold`} margin={`30px 0 0`}>
                Learn more about Network Port Lock Plus
                <FaChevronRight />
              </ArrowIcon>
            </Link>
          </Wrapper>
        </RsWrapper>
      </Wrapper>

      <Wrapper
        isRelative={true}
        ref={temp4Ref}
        height={width < 900 ? `580px` : `955px`}
      >
        <Image
          height={`100%`}
          alt="background-img"
          src={
            width < 900
              ? `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM05%2F%E1%84%85%E1%85%A2%E1%86%AB%E1%84%8F%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%87%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A1%E1%86%A8%20%E1%84%91%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A5%E1%84%89%E1%85%B3-img.png?alt=media&token=1dfd0d00-d7d1-4f24-b042-9beece43cdea`
              : `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM05%2F%E1%84%82%E1%85%A6%E1%84%90%E1%85%B3%E1%84%8B%E1%85%AF%E1%84%8F%E1%85%B3-background-2.png?alt=media&token=feef687a-3662-4720-b702-bcb900592cd1`
          }
        />
        <Wrapper isAbsolute={true} top={`0`} left={`0`} height={`100%`}>
          <RsWrapper
            al={`flex-start`}
            ju={`flex-start`}
            color={Theme.white_C}
            padding={width < 700 ? `0 35px` : `200px 0 0`}
          >
            <Image
              display={width < 700 ? `none` : `flex`}
              width={width < 900 ? `304px` : `600px`}
              margin={width < 900 ? `60px 0 10px` : `0 0 30px`}
              alt="link lock-font"
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Fmodify%2FLAN%20Cable%20Lock%20Plus_%E1%84%82%E1%85%A6%E1%84%90%E1%85%B3%E1%84%8B%E1%85%AF%E1%84%8F%E1%85%B3%E1%84%86%E1%85%AE%E1%86%AF%E1%84%85%E1%85%B5%E1%84%87%E1%85%A9%E1%84%8B%E1%85%A1%E1%86%AB%E1%84%8B%E1%85%B4%E1%84%8B%E1%85%B5%E1%84%89%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%A8%E1%84%8C%E1%85%A9%E1%84%92%E1%85%A1%E1%86%B8.svg?alt=media&token=5ec18bd7-fb87-41d0-82fe-537efdcab720`}
            />

            <Wrapper
              al={`flex-start`}
              display={width < 700 ? `flex` : `none`}
              margin={`50px 0 10px`}
              fontSize={`29px`}
              isGotham={true}
            >
              LAN Cable Lock Plus
            </Wrapper>

            <Text
              fontSize={width < 900 ? `14px` : `25px`}
              fontWeight={`bold`}
              color={Theme.greyTheme7_C}
            >
              CSK-NC11
            </Text>
            <Wrapper
              display={width < 900 ? `none` : `flex`}
              al={`flex-start`}
              padding={`50px 0 0`}
            >
              <Text fontSize={`24px`} color={Theme.greyTheme7_C}>
                Install LAN Cable Lock Plus without removing
              </Text>
              <Text fontSize={`24px`} color={Theme.greyTheme7_C}>
                the network cables in use. Striving for better security.
              </Text>
            </Wrapper>

            <Wrapper
              display={width < 900 ? `flex` : `none`}
              al={`flex-start`}
              ju={`flex-end`}
              padding={width < 900 ? `310px 0 0` : `50px 0 0`}
            >
              <Text fontSize={`18px`} color={Theme.greyTheme7_C}>
                Install LAN Cable Lock Plus without
              </Text>
              <Text fontSize={`18px`} color={Theme.greyTheme7_C}>
                removing the network cables in
              </Text>
              <Text fontSize={`18px`} color={Theme.greyTheme7_C}>
                use. Striving for better security.
              </Text>
            </Wrapper>
          </RsWrapper>
        </Wrapper>
      </Wrapper>

      {/* web */}
      <Wrapper
        display={width < 900 ? `none` : `flex`}
        isRelative={true}
        height={`675px`}
      >
        <Wrapper
          isAbsolute={true}
          top={`-325px`}
          left={`0`}
          attachment={`initial`}
          height={`1000px`}
          bgImg={`url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM05%2F%E1%84%82%E1%85%A6%E1%84%90%E1%85%B3%E1%84%8B%E1%85%AF%E1%84%8F%E1%85%B3-background-4.png?alt=media&token=c02d41a1-dd3b-4a4c-bbf7-57c8b5e624bf")`}
        >
          <RsWrapper al={`flex-start`}>
            {/* <Text fontSize={`34px`} color={Theme.white_C} fontWeight={`700`}>
              포트가 많은 스위치 장비에서 나란히,
            </Text>
            <Text
              fontSize={`34px`}
              color={Theme.white_C}
              fontWeight={`700`}
              margin={`0 0 30px`}
            >
              위아래로 연속하여 장착도 가능합니다.
            </Text> */}

            <Text fontSize={`20px`} color={Theme.white_C} lineHeight={`1.8`}>
              Easy to install on devices with multiple ports, such as a
            </Text>
            <Text fontSize={`20px`} color={Theme.white_C} lineHeight={`1.8`}>
              server or Network Switch, without removing the cables in
            </Text>
            <Text fontSize={`20px`} color={Theme.white_C} lineHeight={`1.8`}>
              use. Install vertically and/or horizontally.
            </Text>
          </RsWrapper>
        </Wrapper>
      </Wrapper>

      {/* mobile */}
      <Wrapper display={width < 900 ? `flex` : `none`} isRelative={true}>
        <Image
          alt="image"
          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2FMM05%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%20710.png?alt=media&token=2204c780-11c2-48e5-a055-b038a0ed4880`}
        />
        <Wrapper
          al={`flex-start`}
          padding={`0 35px`}
          height={`100%`}
          isAbsolute={true}
          top={`0`}
          left={`0`}
        >
          <Text fontSize={`17px`} lineHeight={`1.4`} color={Theme.white_C}>
            Easy to install on devices with
          </Text>
          <Text fontSize={`17px`} lineHeight={`1.4`} color={Theme.white_C}>
            multiple ports, such as a server or
          </Text>
          <Text fontSize={`17px`} lineHeight={`1.4`} color={Theme.white_C}>
            Network Switch, without removing
          </Text>
          <Text fontSize={`17px`} lineHeight={`1.4`} color={Theme.white_C}>
            the cables in use. Install vertically and/or horizontally.
          </Text>
        </Wrapper>
      </Wrapper>

      <Wrapper
        padding={width < 700 ? `0` : `100px 0`}
        bgColor={Theme.greyTheme3_C}
        ref={temp5Ref}
        isRelative={true}
      >
        <RsWrapper al={`flex-start`} isRelative={true}>
          {/* web */}
          <Wrapper
            display={width < 700 ? `none` : `flex`}
            isAbsolute={true}
            top={`${marginImg2}px`}
            left={`0%`}
            height={`100%`}
          >
            <Image
              // margin={`0 0 ${marginImg2}px 0`}
              ait="image"
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2FMM05%2FMM05-1.png?alt=media&token=f3cb5447-46d9-4989-8b94-9976422e9fda`}
            />
          </Wrapper>

          {/* mobile */}
          <Wrapper display={width < 700 ? `flex` : `none`} margin={`45px 0 0`}>
            <Image
              alt="mobileImg"
              radius={`30px`}
              width={`85%`}
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2FMM05%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%204492.png?alt=media&token=9b7166ba-86d0-4e5a-834f-e1ba6fb932dc`}
            />
            <Image
              margin={`30px 0`}
              radius={`30px`}
              alt="mobileImg"
              width={`85%`}
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2FMM05%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%204500.png?alt=media&token=9fc925b2-6e6f-45f7-b574-89560f576c1a`}
            />
            <Image
              alt="mobileImg"
              width={`85%`}
              radius={`30px`}
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2FMM05%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%204499.png?alt=media&token=27cfb9c0-eadd-46a6-91fd-2e96546bce93`}
            />
          </Wrapper>

          <Wrapper
            al={`flex-start`}
            margin={width < 700 ? `40px 0 70px` : `300px 0 0`}
            padding={`0 35px`}
          >
            <Text
              fontSize={width < 700 ? `17px` : `24px`}
              color={Theme.greyTheme4_C}
            >
              Possible only with SMARTKEEPER
            </Text>
            <Text
              fontSize={width < 700 ? `17px` : `24px`}
              color={Theme.greyTheme4_C}
            >
              Physical cyber security
            </Text>
            <Text
              fontSize={width < 700 ? `17px` : `24px`}
              color={Theme.greyTheme4_C}
              margin={`0 0 10px`}
            >
              for Network Cables
            </Text>

            <Link to="/p_network/6107f6c7bdf08f065ce6cd5f">
              <ArrowIcon color={Theme.blackTheme2_C}>
                Learn more about LAN Cable Lock Plus
                <FaChevronRight />
              </ArrowIcon>
            </Link>
          </Wrapper>
        </RsWrapper>
      </Wrapper>

      {/* web */}
      <Wrapper
        display={width < 900 ? `none` : `flex`}
        padding={`140px 0`}
        attachment={`initial`}
        bgImg={`url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM17%2Fbg.png?alt=media&token=9316bd80-325b-44b3-8477-4e7990a8e44d")`}
        ref={temp6Ref}
        isRelative={true}
      >
        <Image
          display={width < 900 ? `none` : `flex`}
          isAbsolute={true}
          top={`27%`}
          left={`12%`}
          width={`80%`}
          alt="image"
          transform={`scale(${scale2})`}
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
            <Text fontSize={`20px`}>
              ONE key can manage 30+ SMARTKEEPER products to
            </Text>
            <Text fontSize={`20px`}>enhance user efficiency.</Text>
            <Text fontSize={`20px`} margin={`15px 0 0`}>
              Numerous confidential key patterns are only compatible
            </Text>
            <Text fontSize={`20px`} margin={`0 0 90px`}>
              with products of matching pattern.
            </Text>

            <Link to="/lock/6114b080e48e2e29f6cd570b">
              <ArrowIcon fontWeight={`bold`}>
                Learn more about Universal Lock Key
                <FaChevronRight />
              </ArrowIcon>
            </Link>
          </Wrapper>
        </RsWrapper>
      </Wrapper>

      {/* mobile */}
      <Wrapper
        display={width < 900 ? `flex` : `none`}
        isRelative={true}
        height={`540px`}
        ju={`flex-start`}
        attachment={`initial`}
        bgImg={`url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM05%2Funiversal%20lock%20key-mobile.png?alt=media&token=f23ecfab-69bf-4d2b-8807-5037964e8a5b")`}
      >
        {/* <Image
          delay={`0.8s`}
          display={width < 900 ? `none` : `flex`}
          isAbsolute={true}
          // transform={`scale(${scale2})`}
          top={`27%`}
          left={`12%`}
          width={`80%`}
          alt="image"
          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM17%2FKey.png?alt=media&token=0fbde530-01e3-4667-bad2-d1ef64b41dd1`}
        /> */}

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
            <Text fontWeight={`400`}>ONE key can manage 30+</Text>
            <Text fontWeight={`400`}>SMARTKEEPER products to enhance</Text>
            <Text fontWeight={`400`} margin={`0 0 30px`}>
              user efficiency.
            </Text>

            <Text fontWeight={`400`}>Numerous confidential key patterns</Text>
            <Text fontWeight={`400`}>are only compatible with </Text>
            <Text fontWeight={`400`} margin={`0 0 30px`}>
              products of matching pattern.
            </Text>
            <Link to="/lock/6114b080e48e2e29f6cd570b">
              <ArrowIcon fontWeight={`bold`}>
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

export default withResizeDetector(MM05Presenter);
