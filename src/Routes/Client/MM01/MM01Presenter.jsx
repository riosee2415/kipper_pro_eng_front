import React, { useEffect, useState } from "react";
import withSplitting from "../../../Lib/withSplitting";
import {
  RsWrapper,
  WholeWrapper,
  Wrapper,
  Image,
  Text,
  ATag,
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

const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: ${(props) => props.theme.white_C};
  line-height: 1.3;
  display: ${(props) => props.display};

  @media (max-width: 900px) {
    font-size: 30px;
  }
`;

const SubTitle = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: ${(props) => props.theme.white_C};
  display: ${(props) => props.display};
  line-height: 1.3;

  @media (max-width: 900px) {
    font-size: 24px;
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
}) => {
  useTitle(`스마트키퍼란? | ${process.env["HOMEPAGE_NAME"]}`);

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

  const handleScroll = () => {
    const { pageYOffset } = window;

    if (tab1Ref.current.offsetHeight * 3 >= pageYOffset) {
      setIsEnd(true);

      let currentOffset;

      let tempOffset = tab1Ref.current.offsetHeight * 4;

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
    }
  };

  useEffect(() => {
    documentRef.current.addEventListener("scroll", handleScroll);
    return () =>
      documentRef.current.removeEventListener("scroll", handleScroll);
  }, [pageY]);

  useEffect(() => {
    scroll.scrollTo(0);

    setHeight(heightRef.current.offsetHeight);
  }, []);

  return (
    <ParallaxProvider>
      <WholeWrapper bgColor={Theme.black_C}>
        <RsWrapper isRelative={true}>
          <Wrapper dr={`row`}>
            <Wrapper
              height={width < 700 ? `auto` : `${height}px`}
              width={width < 900 ? `100%` : `50%`}
              ju={width < 900 && `flex-start`}
              isRelative={true}
            >
              <TempImage
                width={width < 900 ? `302px` : `615px`}
                height={width < 900 ? `302px` : `615px`}
                zIndex={10}
                opacity={fade}
                // top={pageY + 120}
                src={value[currentImage]}
                position={isEnd ? `fixed` : `absolute`}
                top={isEnd ? `top: 50%` : `bottom: 150px`}
                transform={isEnd ? `translateY(-50%)` : `translateY(0)`}
              />

              <TempImage
                width={width < 900 ? `302px` : `615px`}
                height={width < 900 ? `302px` : `615px`}
                zIndex={1}
                opacity={1 - fade}
                position={isEnd ? `fixed` : `absolute`}
                top={isEnd ? `top: 50%` : `bottom: 150px`}
                transform={isEnd ? `translateY(-50%)` : `translateY(0)`}
                src={value[currentImage === 4 ? 4 : currentImage + 1]}
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
                <Title>보안의 틈,</Title>
                <Title>당신의 위태로운 이야기.</Title>
                <Wrapper
                  width={`20px`}
                  height={`2px`}
                  bgColor={width < 900 ? `transparent` : Theme.white_C}
                  margin={width < 900 ? `40px 0 0` : `50px 0`}
                ></Wrapper>

                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                >
                  악성코드는 감기와 같습니다.
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                  display={width < 900 ? `none` : `flex`}
                >
                  실시간 감시와 예방 주사에도 늘 새로운 바이러스로
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                  display={width < 900 ? `none` : `flex`}
                  margin={`0 0 40px`}
                >
                  우리몸에 침투하죠.
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                  display={width < 900 ? `flex` : `none`}
                >
                  실시간 감시와 예방 주사에도 늘 새로운
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                  display={width < 900 ? `flex` : `none`}
                  margin={`0 0 40px`}
                >
                  바이러스로 우리몸에 침투하죠.
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                  display={width < 900 ? `none` : `flex`}
                >
                  바이러스로부터 완벽하게 지키는 방법은 침투경로를
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                  display={width < 900 ? `none` : `flex`}
                >
                  직접적으로 막는 것 입니다. 침투경로를 열어두는 것.
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                  display={width < 900 ? `flex` : `none`}
                >
                  바이러스로부터 완벽하게 지키는 방법은
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                  display={width < 900 ? `flex` : `none`}
                >
                  침투경로를 직접적으로 막는 것 입니다.
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                  display={width < 900 ? `flex` : `none`}
                >
                  침투경로를 열어두는 것.
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                >
                  보안의 틈을 방치해 두었다는 것.
                </Text>
              </Wrapper>
              {/*  */}
              <Wrapper
                height={`100vh`}
                padding={width < 900 ? `0 36px` : `0 0 0 50px`}
                ref={tab2Ref}
                al={`flex-start`}
              >
                <Title>가장 좋은 보안은</Title>
                <Title display={width < 900 ? `none` : `block`}>
                  물리적으로 차단하는 보안.
                </Title>
                <Title display={width < 900 ? `block` : `none`}>
                  물리적으로
                </Title>
                <Title display={width < 900 ? `block` : `none`}>
                  차단하는 보안.
                </Title>

                <Wrapper
                  width={`20px`}
                  height={`2px`}
                  bgColor={width < 900 ? `transparent` : Theme.white_C}
                  margin={width < 900 ? `40px 0 0` : `50px 0`}
                ></Wrapper>

                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                >
                  악성코드가 심어진 스팸 메일을 받았을 때
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                  display={width < 900 ? `none` : `flex`}
                >
                  대처 방법은 무엇이죠? 우린 모두 알고 있습니다.
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                  display={width < 900 ? `flex` : `none`}
                >
                  대처 방법은 무엇이죠?
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                  display={width < 900 ? `flex` : `none`}
                >
                  우린 모두 알고 있습니다.
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                  margin={`0 0 40px`}
                >
                  ‘클릭 해서 열어보지 말 것.’
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                  display={width < 900 ? `none` : `flex`}
                >
                  감염되었을지 모르는 개인용 기기를 자유롭게 사용하고,
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                  display={width < 900 ? `none` : `flex`}
                >
                  중요 자료가 담긴 이동식 저장장치를 방치하고
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                  display={width < 900 ? `none` : `flex`}
                >
                  산업장비 및 기밀자료가 가득한 산업 시설 기기들에
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                  display={width < 900 ? `none` : `flex`}
                >
                  수많은 이동식 저장장치와 스마트폰을 연결하도록
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                  display={width < 900 ? `none` : `flex`}
                >
                  두실건가요?
                </Text>

                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                  display={width < 900 ? `flex` : `none`}
                >
                  감염되었을지 모르는 개인용 기기를 자유
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                  display={width < 900 ? `flex` : `none`}
                >
                  롭게 사용하고, 중요 자료가 담긴 이동식
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                  display={width < 900 ? `flex` : `none`}
                >
                  저장장치를 방치하고 산업장비 및 기밀자
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                  display={width < 900 ? `flex` : `none`}
                >
                  료가 가득한 산업 시설 기기들에 수많은
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                  display={width < 900 ? `flex` : `none`}
                >
                  이동식 저장장치와 스마트폰을 연결하도
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                  display={width < 900 ? `flex` : `none`}
                >
                  록 두실건가요?
                </Text>
              </Wrapper>
              {/*  */}
              <Wrapper
                height={`100vh`}
                padding={width < 900 ? `0 36px` : `0 0 0 50px`}
                ref={tab3Ref}
                al={`flex-start`}
              >
                <Title>단언컨데,</Title>
                <Title>가장 완벽한 보안</Title>

                <Wrapper
                  width={`20px`}
                  height={`2px`}
                  bgColor={width < 900 ? `transparent` : Theme.white_C}
                  margin={width < 900 ? `40px 0 0` : `50px 0`}
                ></Wrapper>

                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                >
                  악성코드의 유입을 차단하고,
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                  display={width < 900 ? `none` : `flex`}
                >
                  데이터 유출을 막는 가장 확실한 방법은 실체가 있는
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                  display={width < 900 ? `none` : `flex`}
                >
                  잠금 장치를 통해 직접적인 통로를 차단하는것.
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                  display={width < 900 ? `flex` : `none`}
                >
                  데이터 유출을 막는 가장 확실한 방법은
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                  display={width < 900 ? `flex` : `none`}
                >
                  실체가 있는 잠금 장치를 통해 직접적인
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                  display={width < 900 ? `flex` : `none`}
                >
                  통로를 차단하는것.
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                  margin={`0 0 40px`}
                >
                  즉, 물리적 행동을 못하게 제재하는 것.
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                >
                  가장 완벽한 보안은 스마트키퍼로
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                >
                  시스템 물리보안을 구축하는 것 입니다.
                </Text>
                <Link to="/malware">
                  <Wrapper
                    dr={`row`}
                    ju={`flex-start`}
                    margin={`15px 0 0`}
                    color={Theme.white_C}
                    display={width < 900 ? `none` : `flex`}
                  >
                    <Text fontWeight={`700`}>
                      악성코드 유입과 데이터 유출 사례 보러가기
                    </Text>
                    <RiArrowRightSLine size={20} />
                  </Wrapper>
                </Link>
              </Wrapper>
              {/*  */}
              <Wrapper
                height={`100vh`}
                padding={width < 900 ? `0 36px` : `0 0 0 50px`}
                ref={tab4Ref}
                al={`flex-start`}
              >
                <Title>물리보안,</Title>
                <Title>이젠 선택이 아닌 필수.</Title>

                <Wrapper
                  width={`20px`}
                  height={`2px`}
                  bgColor={width < 900 ? `transparent` : Theme.white_C}
                  margin={width < 900 ? `40px 0 0` : `50px 0`}
                ></Wrapper>

                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                  display={width < 900 ? `none` : `flex`}
                >
                  제4차 산업혁명, 무형의 데이터가 자산이 된 시대.
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                  display={width < 900 ? `flex` : `none`}
                >
                  제4차 산업혁명, 무형의 데이터가
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                  display={width < 900 ? `flex` : `none`}
                  margin={`0 0 15px`}
                >
                  자산이 된 시대.
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                  display={width < 900 ? `none` : `flex`}
                >
                  2중, 3중으로 된 보안 시스템과 실시간 감시를 통한
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                  display={width < 900 ? `none` : `flex`}
                >
                  예방에도 나날이 발전하는 악성코드와 산업스파이로
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                  display={width < 900 ? `none` : `flex`}
                >
                  바부터 소중한 자산을 지키는 방법은 스마트키퍼를 통해
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                  display={width < 900 ? `none` : `flex`}
                >
                  유출 경로를 물리적으로 차단 하는 것 입니다.
                </Text>

                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                  display={width < 900 ? `flex` : `none`}
                >
                  2중, 3중으로 된 보안 시스템과 실시간
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                  display={width < 900 ? `flex` : `none`}
                >
                  감시를 통한 예방에도 나날이 발전하는
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                  display={width < 900 ? `flex` : `none`}
                >
                  악성코드와 산업스파이로 부터 소중한
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                  display={width < 900 ? `flex` : `none`}
                >
                  자산을 지키는 방법은 스마트키퍼를
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                  display={width < 900 ? `flex` : `none`}
                >
                  통해 유출 경로를 물리적으로 차단 하는
                </Text>
                <Text
                  fontSize={`18px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                  display={width < 900 ? `flex` : `none`}
                >
                  것 입니다.
                </Text>
              </Wrapper>
              {/*  */}
              {/* <Wrapper height={`100vh`}padding={width < 900 ? `0 36px` : `0 0 0 50px`} ref={tab5Ref}>
                <Title>보안의 틈,</Title>
                <Title>당신의 위태로운 이야기.</Title>

                <Wrapper
                  width={`20px`}
                  height={`2px`}
                  bgColor={Theme.white_C}
                  margin={`35px 0`}display={width < 900 ? `none`:`flex`}
                ></Wrapper>

                <Text
                  fontSize={width < 900 ? `18px`:`25px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                >
                  123123
                </Text>
                <Text
                  fontSize={width < 900 ? `18px`:`25px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                >
                  실시간 감시와 예방 주사에도 늘 새로운 바이러스로
                </Text>
                <Text
                  fontSize={width < 900 ? `18px`:`25px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                  margin={`0 0 40px`}
                >
                  우리몸에 침투하죠.
                </Text>
                <Text
                  fontSize={width < 900 ? `18px`:`25px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                >
                  바이러스로부터 완벽하게 지키는 방법은 침투경로를
                </Text>
                <Text
                  fontSize={width < 900 ? `18px`:`25px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                >
                  직접적으로 막는 것 입니다.침투경로를 열어두는 것.
                </Text>
                <Text
                  fontSize={width < 900 ? `18px`:`25px`}
                  fontWeight={`300`}
                  color={Theme.greyTheme7_C}
                >
                  보안의 틈을 방치해 두었다는 것.
                </Text>
              </Wrapper> */}
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
              width={width < 800 ? `100%` : `50%`}
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
                    fontWeight={`bold`}
                  >
                    SMARTKEEPER
                  </Wrapper> */}
                  <Image
                    alt="smartkeeper"
                    src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM01%2FSMARTKEEPER.svg?alt=media&token=414a9ee8-c0b1-4299-aec0-2fa5276d8193`}
                    width={width < 800 ? `164px` : `235px`}
                    margin={width < 800 && `0 0 20px`}
                  />
                  <Wrapper
                    width={`auto`}
                    fontSize={width < 900 ? `32px` : `45px`}
                    fontWeight={`bold`}
                    lineHeight={`1.3`}
                  >
                    한번의 도입으로
                  </Wrapper>
                  <Wrapper
                    width={`auto`}
                    fontSize={width < 900 ? `32px` : `45px`}
                    fontWeight={`bold`}
                    lineHeight={`1.3`}
                  >
                    지속가능한
                  </Wrapper>
                  <Wrapper
                    width={`auto`}
                    fontSize={width < 900 ? `32px` : `45px`}
                    fontWeight={`bold`}
                    lineHeight={`1.3`}
                  >
                    물리보안 시스템 구축.
                  </Wrapper>
                  <Wrapper
                    width={`auto`}
                    dr={`row`}
                    fontSize={width < 900 ? `18px` : `22px`}
                    margin={`20px 0 0`}
                    fontWeight={`300`}
                    display={width < 900 ? `none` : `flex`}
                  >
                    스마트키퍼는 USB, SD 카드, RJ45 포트 등 컴퓨터나
                  </Wrapper>
                  <Wrapper
                    width={`auto`}
                    dr={`row`}
                    fontSize={width < 900 ? `18px` : `22px`}
                    fontWeight={`300`}
                    lineHeight={`1.5`}
                    display={width < 900 ? `none` : `flex`}
                  >
                    네트워크 장비의 입출력 포트와 기기를 물리적으로
                  </Wrapper>
                  <Wrapper
                    width={`auto`}
                    dr={`row`}
                    fontSize={width < 900 ? `18px` : `22px`}
                    fontWeight={`300`}
                    lineHeight={`1.5`}
                    display={width < 900 ? `none` : `flex`}
                  >
                    잠금하여, 인가되지 않은 장비의 접근을 차단하는
                  </Wrapper>
                  <Wrapper
                    width={`auto`}
                    dr={`row`}
                    fontSize={width < 900 ? `18px` : `22px`}
                    fontWeight={`300`}
                    lineHeight={`1.5`}
                    display={width < 900 ? `none` : `flex`}
                  >
                    세계최초 물리보안 제품군입니다.
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
                    fontWeight={`bold`}
                  >
                    물리보안,
                  </Wrapper>
                  <Wrapper
                    width={`auto`}
                    lineHeight={`1.3`}
                    fontSize={`30px`}
                    fontWeight={`bold`}
                  >
                    적은 비용으로 큰 효과를 경험해보세요.
                  </Wrapper>
                </Wrapper>
              </Wrapper>
            </Wrapper>

            <Image
              width={width < 900 ? `100%` : `50%`}
              isAbsolute={width < 900 && `true`}
              top={width < 900 && `218px`}
              right={width < 900 && `0px`}
              zIndex={width < 900 && `-1`}
              height={width < 900 ? `auto` : `100vh`}
              alt="computer"
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM01%2Fbackground-image-1.png?alt=media&token=7af3f0fd-4dab-47f6-aaf2-3fdf14acc6c6`}
            />

            <Wrapper
              bgColor={`linear-gradient(to top, rgb(255, 255, 255), ${Theme.lightGrey_C})`}
              al={`flex-start`}
              display={width < 900 ? `flex` : `none`}
              padding={width < 900 && `40px 36px`}
              margin={`480px 0 0`}
            >
              <Wrapper
                width={`auto`}
                dr={`row`}
                fontSize={`18px`}
                fontWeight={`500`}
              >
                <Text>스마트키퍼</Text>는 USB, SD 카드, RJ45 포트
              </Wrapper>
              <Wrapper
                width={`auto`}
                dr={`row`}
                fontSize={`18px`}
                fontWeight={`500`}
                lineHeight={`1.5`}
              >
                등 컴퓨터나 네트워크 장비의 입출력
              </Wrapper>
              <Wrapper
                width={`auto`}
                dr={`row`}
                fontSize={`18px`}
                fontWeight={`500`}
                lineHeight={`1.5`}
              >
                포트와 기기를 물리적으로 잠금하여,
              </Wrapper>
              <Wrapper
                width={`auto`}
                dr={`row`}
                fontSize={`18px`}
                fontWeight={`500`}
                lineHeight={`1.5`}
              >
                인가되지 않은 장비의 접근을 차단하는
              </Wrapper>
              <Wrapper
                width={`auto`}
                dr={`row`}
                fontSize={`18px`}
                fontWeight={`500`}
                lineHeight={`1.5`}
              >
                세계최초 물리보안 제품군입니다.
              </Wrapper>
            </Wrapper>
          </RsWrapper>
        </Wrapper>

        <Wrapper
          bgColor={Theme.lightGrey_C}
          padding={width < 900 ? `30px 36px` : `30px 0 160px`}
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
              fontWeight={`bold`}
            >
              물리보안,
            </Wrapper>
            <Wrapper
              width={`auto`}
              lineHeight={`1.3`}
              fontSize={`20px`}
              fontWeight={`bold`}
            >
              적은 비용으로
            </Wrapper>
            <Wrapper
              width={`auto`}
              lineHeight={`1.3`}
              fontSize={`20px`}
              fontWeight={`bold`}
            >
              큰 효과를 경험해보세요.
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
                    USB 포트의 보안
                  </Text>
                  <Wrapper al={`flex-start`}>
                    <SubTitle>포트보안의 시작점,</SubTitle>
                    <SubTitle>물리보안으로 종결.</SubTitle>
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
                        더 알아보기
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
                    네트워크 보안의 필수 조합
                  </Text>
                  <Wrapper al={`flex-start`}>
                    <SubTitle>네트워크와 인트라넷,</SubTitle>
                    <SubTitle>사내 모든 자산으로의 통로.</SubTitle>
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
                        더 알아보기
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
                    src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM01%2FESSENTIAL.svg?alt=media&token=affba8f4-fa4c-4aab-a372-0f971daffe41`}
                    width={`174px`}
                  />
                  <Wrapper
                    al={`flex-start`}
                    fontSize={`14px`}
                    fontWeight={`500`}
                    margin={`5px 0`}
                    color={Theme.white_C}
                  >
                    유통형 제품 스마트키퍼 에센셜
                  </Wrapper>
                  <Wrapper al={width < 900 ? `flex-start` : `flex-end`}>
                    <ATag
                      width={`auto`}
                      href={`https://schoolhealing2.co.kr/#/basic`}
                      target={`_blank`}
                    >
                      <Button
                        dr={`row`}
                        margin={width < 700 ? `10px 0 0` : `0`}
                      >
                        <Text
                          fontWeight={width < 700 ? `700` : `500`}
                          color={Theme.white_C}
                        >
                          바로가기
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
                  <Wrapper
                    al={`flex-start`}
                    fontSize={width < 900 ? `26px` : `30px`}
                    fontWeight={`500`}
                    color={Theme.white_C}
                    isGotham={true}
                  >
                    PRO
                  </Wrapper>
                  <Wrapper
                    al={`flex-start`}
                    fontSize={`14px`}
                    fontWeight={`500`}
                    margin={`5px 0`}
                    color={Theme.white_C}
                  >
                    기업 전용 제품 스마트키퍼 프로
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
                          바로가기
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
                bgImg={`url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM01%2F%E1%84%87%E1%85%A2%E1%84%82%E1%85%A5_%E1%84%8B%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3.jpg?alt=media&token=d4533b5d-e70f-456c-9886-164ddb70f0e4")`}
              >
                <Wrapper al={`flex-start`} height={`100%`} ju={`flex-start`}>
                  <Wrapper
                    al={`flex-start`}
                    margin={width < 900 ? `0 0 20px` : `0 0 10px`}
                  >
                    <SubTitle fontSize={`40px`}>악성코드의 침입,</SubTitle>
                    <SubTitle
                      fontSize={`40px`}
                      display={width < 900 ? `none` : `flex`}
                    >
                      아무도 믿을 수 없는 데이터 유출
                    </SubTitle>
                    <SubTitle
                      fontSize={`40px`}
                      display={width < 900 ? `flex` : `none`}
                    >
                      아무도 믿을 수 없는
                    </SubTitle>
                    <SubTitle
                      fontSize={`40px`}
                      display={width < 900 ? `flex` : `none`}
                    >
                      데이터 유출
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
                    5G, IOT 사물인터넷을 통해 모든 사물이 연결되는 초 연결시대.
                  </Wrapper>
                  <Wrapper
                    al={`flex-start`}
                    fontSize={`18px`}
                    fontWeight={`300`}
                    lineHeight={`1.5`}
                    color={Theme.white_C}
                    display={width < 900 ? `none` : `flex`}
                  >
                    빅데이터로 인해 기업이 관리해야 하는 데이터와 서로 연결된
                    기기들은 기하급수적으로 늘어나고 있으며,
                  </Wrapper>
                  <Wrapper
                    al={`flex-start`}
                    fontSize={`18px`}
                    fontWeight={`300`}
                    lineHeight={`1.5`}
                    color={Theme.white_C}
                    display={width < 900 ? `none` : `flex`}
                  >
                    이에 따른 보안 취약성은 점점 증대되고 있습니다. 단 한대의
                    기기만 접근해도 연결된 모든 시스템으로
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
                    접속이 가능하기 때문이죠. 하나의 PC에 바이러스가 감염되면
                    사내에 퍼지는 것은 시간문제인 것처럼요.
                  </Wrapper>
                  <Link to="/malware">
                    <Button dr={`row`}>
                      <Text
                        fontWeight={width < 700 ? `700` : `500`}
                        color={Theme.white_C}
                      >
                        더 알아보기
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
