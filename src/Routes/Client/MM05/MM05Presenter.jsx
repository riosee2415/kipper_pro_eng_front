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
  useTitle(`네트워크 물리보안의 이상적 조합 | ${process.env["HOMEPAGE_NAME"]}`);

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
      if (marginImg2 - 50 < -200 && pageY < pageYOffset) {
        setMarginImg2(-200);
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
            al={`flex-start`}
            margin={width < 700 ? `0 0 0 35px` : `0 0 0 50px`}
          >
            <Text>네트워크 물리보안</Text>
            <Text
              fontSize={width < 700 ? `30px` : `40px`}
              fontWeight={`bold`}
              lineHeight={`1.3`}
            >
              네트워크 물리보안을 위한
            </Text>
            <Text
              fontSize={width < 700 ? `30px` : `40px`}
              fontWeight={`bold`}
              lineHeight={`1.3`}
            >
              가장 이상적인 조합
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
          <Text fontSize={width < 700 ? `12px` : `16px`}>
            네트워크 포트락 플러스(CSK-NL11)
          </Text>

          <Link to="/p_network/6107f36abdf08f065ce6cd53">
            <ArrowIcon>
              더 알아보기
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
          <Text fontSize={width < 700 ? `12px` : `16px`}>
            랜케이블락 플러스(CSK-NC11)
          </Text>

          <Link to="/p_network/6107f6c7bdf08f065ce6cd5f">
            <ArrowIcon>
              더 알아보기
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
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM05%2FNetwork%20Port%20Lock%20Plus.svg?alt=media&token=295ca128-394e-4791-b89c-e31aa9af2297`}
            />
            <Text
              fontSize={width < 700 ? `20px` : `34px`}
              fontWeight={`bold`}
              margin={`10px 0 0`}
            >
              네트워크 포트락 플러스
            </Text>
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
                사용하지 않는 RJ45 포트의 철통보안.
              </Text>
              <Text fontSize={`24px`} color={Theme.greyTheme7_C}>
                모든 시스템으로의 접속 통로,
              </Text>
              <Text fontSize={`24px`} color={Theme.greyTheme7_C}>
                네트워크의 포트는 열려있다면 누구든 접근할 수 있습니다.
              </Text>
            </Wrapper>

            <Wrapper
              display={width < 700 ? `flex` : `none`}
              al={`flex-start`}
              padding={`80px 0 0`}
            >
              <Text fontSize={`20px`} fontWeight={`bold`}>
                사용하지 않는
              </Text>
              <Text fontSize={`20px`} fontWeight={`bold`} margin={`0 0 10px`}>
                RJ45 포트의 철통보안.
              </Text>
              <Text fontSize={`18`} color={Theme.greyTheme7_C}>
                모든 시스템으로의 접속 통로,
              </Text>
              <Text fontSize={`18`} color={Theme.greyTheme7_C}>
                네트워크의 포트는 열려있다면
              </Text>
              <Text fontSize={`18`} color={Theme.greyTheme7_C}>
                누구든 접근할 수 있습니다.
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
            <Wrapper width={width < 700 ? `100%` : `50%`}>
              <Wrapper width={width < 700 ? `100%` : `80%`} al={`flex-start`}>
                <Text
                  display={width < 900 ? `none` : `flex`}
                  fontSize={`34px`}
                  fontWeight={`bold`}
                  margin={`0 0 10px`}
                >
                  세계최초 동작구조 포트락.
                </Text>
                <Text
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
                </Text>
                <Text
                  fontSize={width < 900 ? `18px` : `28px`}
                  color={Theme.darkGrey_C}
                >
                  포트안에 완전히 매립되고,
                </Text>
                <Text
                  fontSize={width < 900 ? `18px` : `28px`}
                  color={Theme.darkGrey_C}
                >
                  키 홀(Key Hole)은 아주 작아
                </Text>
                <Text
                  fontSize={width < 900 ? `18px` : `28px`}
                  color={Theme.darkGrey_C}
                >
                  높은 보안성을 제공합니다.
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
              포트에 열려있는&nbsp;
              <SpanText fontWeight={`700`}>포트락을 삽입</SpanText>하고&nbsp;
              <SpanText fontWeight={`700`}>잠금버튼</SpanText>을 누르면,
            </Text>
            <Text fontSize={`28px`} color={`rgb(69,69,69)`}>
              포트락 내부의&nbsp;
              <SpanText fontWeight={`700`}>숨겨진 돌기</SpanText>가 튀어나와
              포트 내부에
            </Text>
            <Text fontSize={`28px`} color={`rgb(69,69,69)`}>
              <SpanText fontWeight={`700`}>강하게 결착</SpanText>됩니다.
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
              포트에 열려있는&nbsp;
              <SpanText fontWeight={`bold`}>포트락을 삽입</SpanText>하고
            </Text>
            <Text fontSize={`18px`} lineHeight={`1.4`} color={`rgb(69,69,69)`}>
              <SpanText fontWeight={`bold`}>잠금버튼</SpanText>을 누르면, 포트락
              내부의
            </Text>
            <Text fontSize={`18px`} lineHeight={`1.4`} color={`rgb(69,69,69)`}>
              <SpanText fontWeight={`bold`}>숨겨진 돌기</SpanText>가 튀어나와
              포트 내부에
            </Text>
            <Text fontSize={`18px`} lineHeight={`1.4`} color={`rgb(69,69,69)`}>
              <SpanText fontWeight={`bold`}>강하게 결착</SpanText>됩니다.
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
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM05%2Fnet-image-3.png?alt=media&token=aa49a4b0-60db-4b61-8de6-7a1f67f759d8`}
            />
          </Wrapper>

          <Wrapper display={width < 700 ? `flex` : `none`} margin={`-70px 0 0`}>
            <Image
              alt="mobileImg"
              shadow={`2px 2px 7px rgba(3, 4, 2, 0.31)`}
              radius={`30px`}
              width={`85%`}
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM05%2Fmobile-%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%87%E1%85%AE%E1%86%A8.png?alt=media&token=6df8310f-17be-4713-84f1-73b26c87a5c1`}
            />
            <Image
              margin={`30px 0`}
              shadow={`2px 2px 7px rgba(3, 4, 2, 0.31)`}
              radius={`30px`}
              alt="mobileImg"
              width={`85%`}
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM05%2Fmobile-PC%E1%84%92%E1%85%AE%E1%84%86%E1%85%A7%E1%86%AB.png?alt=media&token=1f5ca452-78d6-4639-bfb5-ac3145a6af46`}
            />
            <Image
              alt="mobileImg"
              width={`85%`}
              shadow={`2px 2px 7px rgba(3, 4, 2, 0.31)`}
              radius={`30px`}
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM05%2Fmobile-%E1%84%82%E1%85%A6%E1%84%90%E1%85%B3%E1%84%8B%E1%85%AF%E1%84%8F%E1%85%B3.png?alt=media&token=d95fb19e-13f5-4b63-957a-533b99d98b60`}
            />
          </Wrapper>

          <Wrapper
            display={width < 700 ? `none` : `flex`}
            al={`flex-start`}
            margin={`300px 0 0`}
          >
            <Text fontSize={`30px`} fontWeight={`700`}>
              비어있는 네트워크 포트는 확실히.
            </Text>
            <Text fontSize={`24px`} color={Theme.greyTheme4_C}>
              아주 작은 비용으로, 큰 리스크를 없앨 수 있다면.
            </Text>
            <Text fontSize={`24px`} color={Theme.greyTheme4_C}>
              물리 보안은 선택이 아닌 필수입니다.
            </Text>
          </Wrapper>

          <Wrapper
            display={width < 700 ? `flex` : `none`}
            al={`flex-start`}
            margin={`40px 0 0`}
            padding={`0 35px`}
          >
            <Text fontWeight={`bold`} margin={`0 0 10px`} fontSize={`18px`}>
              비어있는 네트워크 포트는 확실히.
            </Text>
            <Text
              fontSize={`16px`}
              color={Theme.greyTheme4_C}
              lineHeight={`1.4`}
            >
              아주 작은 비용으로,
            </Text>
            <Text
              fontSize={`16px`}
              color={Theme.greyTheme4_C}
              lineHeight={`1.4`}
            >
              큰 리스크를 없앨 수 있다면.
            </Text>
            <Text
              fontSize={`16px`}
              color={Theme.greyTheme4_C}
              lineHeight={`1.4`}
            >
              물리 보안은 선택이 아닌 필수입니다.
            </Text>
          </Wrapper>
        </RsWrapper>
      </Wrapper>

      <Wrapper
        isRelative={true}
        ref={temp4Ref}
        height={width < 900 ? `550px` : `955px`}
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
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM05%2FLAN%20Cable%20Lock%20Plus.svg?alt=media&token=0eb01f04-41a6-402c-954d-a8a1032437c0`}
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
            <Text fontSize={width < 900 ? `20px` : `34px`} fontWeight={`bold`}>
              랜케이블락 플러스
            </Text>
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
                워킹장비에서 사용 중인 케이블에도 장착가능.
              </Text>
              <Text fontSize={`24px`} color={Theme.greyTheme7_C}>
                더 나은 물리 보안 환경을 위한 노력.
              </Text>
            </Wrapper>

            <Wrapper
              display={width < 900 ? `flex` : `none`}
              al={`flex-start`}
              ju={`flex-end`}
              padding={width < 900 ? `250px 0 0` : `50px 0 0`}
            >
              <Text fontSize={`18px`} color={Theme.greyTheme7_C}>
                워킹장비에서
              </Text>
              <Text fontSize={`18px`} color={Theme.greyTheme7_C}>
                사용 중인 케이블에도 장착가능.
              </Text>
              <Text fontSize={`18px`} color={Theme.greyTheme7_C}>
                더 나은 물리 보안 환경을 위한 노력.
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
            <Text fontSize={`34px`} color={Theme.white_C} fontWeight={`700`}>
              포트가 많은 스위치 장비에서 나란히,
            </Text>
            <Text
              fontSize={`34px`}
              color={Theme.white_C}
              fontWeight={`700`}
              margin={`0 0 30px`}
            >
              위아래로 연속하여 장착도 가능합니다.
            </Text>

            <Text fontSize={`20px`} color={Theme.white_C} lineHeight={`1.8`}>
              서버나 네트워크 스위치와 같이,
            </Text>
            <Text fontSize={`20px`} color={Theme.white_C} lineHeight={`1.8`}>
              이미 사용중인 장비의 케이블의 탈착없이 설치가 가능하여
            </Text>
            <Text fontSize={`20px`} color={Theme.white_C} lineHeight={`1.8`}>
              고객분들의 만족도가 매우 높습니다.
            </Text>
          </RsWrapper>
        </Wrapper>
      </Wrapper>

      {/* mobile */}
      <Wrapper display={width < 900 ? `flex` : `none`}>
        <Image
          alt="image"
          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM05%2Fmobile-image.png?alt=media&token=24e460ca-79a7-4ee0-8fc0-012c58f7ed8c`}
        />
        <Wrapper al={`flex-start`} padding={`0 35px`}>
          <Text fontSize={`19px`} fontWeight={`bold`} margin={`40px 0 0`}>
            포트가 많은 스위치 장비에서 나란히,
          </Text>
          <Text fontSize={`19px`} fontWeight={`bold`}>
            위아래로 연속하여 장착도 가능합니다.
          </Text>
          <Text
            fontSize={`18px`}
            lineHeight={`1.4`}
            color={Theme.darkGrey_C}
            margin={`20px 0 0`}
          >
            서버나 네트워크 스위치와 같이, 이미
          </Text>
          <Text fontSize={`18px`} lineHeight={`1.4`} color={Theme.darkGrey_C}>
            사용중인 장비의 케이블의 탈착없이
          </Text>
          <Text fontSize={`18px`} lineHeight={`1.4`} color={Theme.darkGrey_C}>
            설치가 가능하여 고객분들의 만족도가
          </Text>
          <Text
            fontSize={`18px`}
            lineHeight={`1.4`}
            color={Theme.darkGrey_C}
            margin={`0 0 110px`}
          >
            매우 높습니다.
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
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM05%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%205591.png?alt=media&token=a35b852e-a4e9-43bf-9531-e98444502d59`}
            />
          </Wrapper>

          {/* mobile */}
          <Wrapper display={width < 700 ? `flex` : `none`} margin={`-70px 0 0`}>
            <Image
              alt="mobileImg"
              shadow={`2px 2px 7px rgba(3, 4, 2, 0.31)`}
              radius={`30px`}
              width={`85%`}
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM05%2Fmobile-%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%87%E1%85%AE%E1%86%A82.png?alt=media&token=0fcff4fe-cc8c-4570-bcd7-944caefa7732`}
            />
            <Image
              margin={`30px 0`}
              shadow={`2px 2px 7px rgba(3, 4, 2, 0.31)`}
              radius={`30px`}
              alt="mobileImg"
              width={`85%`}
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM05%2Fmobile-PC%E1%84%92%E1%85%AE%E1%84%86%E1%85%A7%E1%86%AB2.png?alt=media&token=c5df68ec-df27-4853-ae62-17b29b61675e`}
            />
            <Image
              alt="mobileImg"
              width={`85%`}
              shadow={`2px 2px 7px rgba(3, 4, 2, 0.31)`}
              radius={`30px`}
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM05%2Fmobile-%E1%84%82%E1%85%A6%E1%84%90%E1%85%B3%E1%84%8B%E1%85%AF%E1%84%8F%E1%85%B32.png?alt=media&token=fee1f6c8-de92-47f6-a11c-80798a8cebfb`}
            />
          </Wrapper>

          <Wrapper
            al={`flex-start`}
            margin={width < 700 ? `40px 0 70px` : `300px 0 0`}
            padding={`0 35px`}
          >
            <Text
              fontSize={width < 700 ? `20px` : `24px`}
              color={Theme.greyTheme4_C}
            >
              네트워크 케이블의 강력한 물리 보안.
            </Text>
            <Text
              fontSize={width < 700 ? `20px` : `24px`}
              color={Theme.greyTheme4_C}
              margin={`0 0 10px`}
            >
              스마트키퍼에서만 가능합니다.
            </Text>

            <Link to="/p_network/6107f6c7bdf08f065ce6cd5f">
              <ArrowIcon color={Theme.blackTheme2_C}>
                랜케이블락 플러스 자세히 보러가기
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
              이름에 걸맞게 Universal (만능) 키이죠.
            </Text>
            <Text fontSize={`20px`}>
              하나의 키로 30여 스마트키퍼 제품을 해제할 수 있어, 사용자의
              편의성을 극대화 하였습니다.
            </Text>
            <Text fontSize={`20px`} margin={`15px 0 0`}>
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

export default withResizeDetector(MM05Presenter);
