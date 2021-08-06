import React, { useState } from "react";
import withSplitting from "../../../Lib/withSplitting";
import {
  WholeWrapper,
  RsWrapper,
  Text,
  Image,
  Wrapper,
  SpanText,
  CommonSubTitle,
  ATag,
} from "../../../Components/CommonComponents";
import styled from "styled-components";
import { withResizeDetector } from "react-resize-detector";
import useTitle from "@4leaf.ysh/use-title";
import Theme from "../../../Styles/Theme";
import AnimatedNumber from "animated-number-react";
import { RiArrowRightSLine } from "react-icons/ri";
import { useEffect } from "react";
import { Link } from "react-router-dom";

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
    background-color: ${(props) => props.hoverBgColor || `${Theme.white_C}`};
    transition: 0.5s;
  }

  &:hover:before {
    width: 100%;
  }
`;

const PieImage = styled(Image)`
  width: 31.3%;
  position: absolute;
  top: 0px;
  right: 141px;
  transition: 0.5s;

  &:hover {
    transform: scale(1.1);
  }
`;

const PieMobileImage = styled(Image)`
  width: 100%;
  transition: 0.5s;
  position: relative;

  &:hover {
    transform: scale(1.1);
  }
`;

const GraphWrapper = styled(Wrapper)`
  transition: all 4s;
`;

const MM16Presenter = ({
  width,
  graphRef,
  documentRef,
  //
  isCheck,
  setIsCheck,
  graphValue,
  setGraphValue,
  graphValue2,
  setGraphValue2,
}) => {
  useTitle(`악성코드의 침입과 데이터 유출 | ${process.env["HOMEPAGE_NAME"]}`);

  const [isFirst, setIsFirst] = useState(false);
  const [pageY, setPageY] = useState(0);

  const handleScroll = (width) => {
    const { pageYOffset } = window;

    if (pageYOffset > graphRef.current.offsetTop) {
      setIsFirst(true);
    }

    setPageY(pageYOffset);
  };

  useEffect(() => {
    if (isFirst) {
      setTimeout(() => {
        setIsCheck(true);
      }, 4000);

      setGraphValue(width < 700 ? `60%` : `85%`);
      setGraphValue2(width < 700 ? `30%` : `50%`);
    }
  }, [isFirst]);

  useEffect(() => {
    documentRef.current.addEventListener("scroll", handleScroll);
    return () =>
      documentRef.current.removeEventListener("scroll", handleScroll);
  }, [pageY]);

  return (
    <WholeWrapper bgColor={`rgb(0,0,0)`}>
      {/* web */}
      <Wrapper display={width < 900 ? `none` : `flex`}>
        <RsWrapper margin={`153px 0 0`}>
          <Wrapper margin={`0 0 50px`}>
            <Text
              fontSize={width < 900 ? `14px !important` : `20px`}
              color={Theme.white_C}
              lineHeight={`1.2`}
              fontWeight={`300`}
            >
              회사의 소중한 자산과 데이터,
            </Text>
            <CommonSubTitle
              fontSize={`35px`}
              fontWeight={`700`}
              color={Theme.white_C}
              margin={`10px 0`}
            >
              <SpanText color={Theme.subTheme3_C}>
                의도 있는 유출 및 반출
              </SpanText>
              이 가장 높습니다.
            </CommonSubTitle>
            <Text
              fontSize={`14px`}
              color={Theme.white_C}
              fontWeight={`300`}
              margin={`0 0 25px`}
            >
              (외/내부 유포자)
            </Text>

            <Text fontSize={`20px`} fontWeight={`700`} color={Theme.white_C}>
              데이터 유출 주요 원인
            </Text>
          </Wrapper>
          <Wrapper
            isRelative={true}
            width={`60%`}
            margin={`0 0 100px`}
            display={width < 700 ? `none` : `flex`}
          >
            <Image
              width={`100%`}
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM16%2F%E1%84%8B%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3_%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%84%91%E1%85%B3.png?alt=media&token=fadc8b74-2bee-428d-9a01-645bbe825007`}
            />
            <PieImage
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM16%2F%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%92%E1%85%A7%E1%86%BC%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%84%91%E1%85%B3.png?alt=media&token=a0c61985-5e4f-492e-9766-379bc5e221dc`}
            />
            <Wrapper
              width={`auto`}
              isAbsolute={true}
              top={`50%`}
              right={`160px`}
              margin={`-28px 0 0`}
              ref={graphRef}
            >
              <Text color={Theme.white_C} fontSize={`35px`} fontWeight={`700`}>
                <AnimatedNumber
                  className="48"
                  value={48}
                  formatValue={(value) => value.toFixed(0)}
                  duration={1000}
                />
                %
              </Text>
            </Wrapper>
          </Wrapper>
          {/*  */}
          <Wrapper margin={`100px 0 200px`}>
            <Text color={Theme.white_C} fontSize={`20px`}>
              데이터유출 피해액
            </Text>
            <Text color={Theme.white_C} fontSize={`14px`} margin={`0 0 15px`}>
              (단위: $억)
            </Text>

            <Wrapper al={`flex-start`}>
              <Text
                fontSize={`22px`}
                margin={`0 0 10px 110px`}
                color={Theme.white_C}
              >
                {isCheck ? `2018` : `2017`}
              </Text>
              <Wrapper dr={`row`} ju={`flex-start`}>
                <Text
                  fontSize={`18px`}
                  color={Theme.white_C}
                  width={`100px`}
                  margin={`0 10px 0 0`}
                  textAlign={`right`}
                  fontWeight={`700`}
                >
                  유출비용
                </Text>
                <GraphWrapper
                  width={graphValue}
                  bgColor={Theme.basicTheme_C}
                  height={`40px`}
                  radius={`0 30px 30px 0`}
                ></GraphWrapper>
                <Text
                  margin={`0 0 0 10px`}
                  fontSize={`22px`}
                  color={Theme.white_C}
                >
                  {isFirst ? (
                    <AnimatedNumber
                      className="38"
                      value={38}
                      formatValue={(value) => value.toFixed(2)}
                      duration={4000}
                    />
                  ) : (
                    `0`
                  )}
                </Text>
              </Wrapper>
              <Wrapper dr={`row`} ju={`flex-start`} margin={`20px 0 15px`}>
                <Text
                  fontSize={`18px`}
                  color={Theme.white_C}
                  width={`100px`}
                  margin={`0 10px 0 0`}
                  textAlign={`right`}
                  fontWeight={`700`}
                >
                  후속처리비용
                </Text>
                <GraphWrapper
                  width={graphValue2}
                  bgColor={Theme.white_C}
                  height={`40px`}
                  radius={`0 30px 30px 0`}
                ></GraphWrapper>
                <Text
                  fontSize={`22px`}
                  color={Theme.white_C}
                  margin={`0 0 0 10px`}
                >
                  {isFirst ? (
                    <AnimatedNumber
                      className="25"
                      value={25}
                      formatValue={(value) => value.toFixed(2)}
                      duration={4000}
                    />
                  ) : (
                    `0`
                  )}
                </Text>
              </Wrapper>

              <Wrapper
                color={Theme.greyTheme7_C}
                fontSize={`12px`}
                al={`flex-end`}
              >
                출처 : Ponemon 2018 Cost of a Data breach Study
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </RsWrapper>
        {/*  */}
        <Wrapper bgColor={Theme.black_C}>
          <RsWrapper>
            <Wrapper margin={`100px 0`}>
              <Text fontSize={`20px`} color={Theme.white_C} fontWeight={`400`}>
                악성코드 유입과 데이터 유출
              </Text>
              <CommonSubTitle fontWeight={`700`} fontSize={`35px`}>
                <SpanText color={Theme.subTheme3_C}>기술 유출</SpanText>의
                유형과 수단
              </CommonSubTitle>
              <Image
                margin={`55px 0 0`}
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM16%2Fgraph-image-1.png?alt=media&token=9af4718d-385e-4745-8a9a-892a33bbbeb4`}
              />
            </Wrapper>
          </RsWrapper>
        </Wrapper>
        {/*  */}
        <RsWrapper>
          <Wrapper margin={`100px 0`}>
            <Text
              fontSize={`20px`}
              color={Theme.white_C}
              fontWeight={`400`}
              margin={`0 0 10px`}
            >
              우리가 간과하고 있는 그것
            </Text>
            <CommonSubTitle
              fontWeight={`700`}
              margin={`0 0 70px`}
              fontSize={`35px`}
              color={Theme.white_C}
            >
              <SpanText color={Theme.subTheme3_C}>이동식디스크</SpanText>는
              여전히&nbsp;
              <SpanText color={Theme.subTheme3_C}>보안의 위협</SpanText>적
              요소입니다.
            </CommonSubTitle>
            <Image
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM16%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%84%91%E1%85%B3-image-2.png?alt=media&token=e6f4ef15-f855-48ee-b2f9-af84fb3bf1b2`}
            />
          </Wrapper>
          {/*  */}
          <Wrapper margin={`100px 0`}>
            <Text
              fontSize={`20px`}
              color={Theme.white_C}
              fontWeight={`400`}
              margin={`0 0 10px`}
            >
              철통같은 보안을 통과하는 손쉬운 방법
            </Text>
            <CommonSubTitle
              fontWeight={`700`}
              fontSize={`35px`}
              color={Theme.subTheme3_C}
            >
              길에서 주운 USB,
            </CommonSubTitle>
            <CommonSubTitle
              fontWeight={`700`}
              margin={`0 0 50px`}
              fontSize={`35px`}
              color={Theme.white_C}
              lineHeight={`0.4`}
            >
              과연 몇 명 이 꽂아볼까요?
            </CommonSubTitle>
            <Text
              fontSize={`20px`}
              fontWeight={`700`}
              color={Theme.white_C}
              margin={`0 0 5px`}
            >
              길에서 주운 USB를 직원이 사내 PC에 사용한 경우
            </Text>
            <Wrapper margin={`10px 0 0`} dr={`row`} ju={`space-between`}>
              <Image
                width={`50%`}
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM02%2Fgraph-image-3.png?alt=media&token=b6c74fb4-172f-441f-91ff-4d7791225ff2`}
              />
              <Wrapper
                width={`48%`}
                bgColor={Theme.greyTheme10_C}
                padding={`55px`}
                height={`464px`}
                al={`flex-start`}
                ju={`space-between`}
              >
                <Wrapper al={`flex-start`}>
                  <Text
                    color={Theme.white_C}
                    fontSize={`16px`}
                    lineHeight={`1.8`}
                    fontWeight={`300`}
                  >
                    2011년, 미 국토보안부(U.S. Department of Homeland Security)
                    US-CERT (U.S. Computer Emergency Readiness Team) 에서 보안부
                    직원들을 대상으로 한 가지 실험을 했습니다.
                  </Text>
                  <Text
                    color={Theme.white_C}
                    fontSize={`16px`}
                    lineHeight={`1.8`}
                    fontWeight={`300`}
                  >
                    ‘해커가 직원을 통해 시스템에 얼마나 쉽게 접근할 수 있는가’
                  </Text>
                  <Text
                    color={Theme.white_C}
                    fontSize={`16px`}
                    lineHeight={`1.8`}
                    fontWeight={`300`}
                  >
                    그 실험은, 보안부의 주차장에 USB를 떨어트려 놓고 직원들이
                    사내PC에 사용하는지 관찰하는 것이었죠. 결과가 어떻게
                    되었을까요? 약 60%가 땅에 떨어진 USB를 사용하였고,
                    국토보안부 공식 로고가 새겨진 USB나 CD는 90%가 사용했죠. 그
                    USB안에 Malware가 있을 수도 있는 위험성은 모두 잊고 사내
                    pc에 사용했어요. 보안의 가장 큰 취약점은 직원의
                  </Text>
                  <Text
                    color={Theme.white_C}
                    fontSize={`16px`}
                    lineHeight={`1.8`}
                    fontWeight={`300`}
                  >
                    ‘멍청함’(Idiocy) 이라고 이야기 하더군요.
                  </Text>
                </Wrapper>
                <ATag
                  width={`auto`}
                  href="https://www.bloomberg.com/news/articles/2011-06-27/human-errors-fuel-hacking-as-test-shows-nothing-prevents-idiocy"
                  target="_blank"
                >
                  <Text
                    color={Theme.subTheme2_C}
                    borderBottom={`1px solid ${Theme.subTheme2_C}`}
                  >
                    출처 : Bloomberg
                  </Text>
                </ATag>
              </Wrapper>
            </Wrapper>
          </Wrapper>
          {/*  */}
          <Wrapper margin={`100px 0`}>
            <Text fontSize={`20px`} color={Theme.white_C}>
              누가, 언제, 어디서 감염된 기기를 꽂을지 모르는 두려움
            </Text>
            <CommonSubTitle
              fontWeight={`700`}
              fontSize={`35px`}
              color={Theme.white_C}
              lineHeight={`1.4`}
            >
              단 한 번이
            </CommonSubTitle>
            <CommonSubTitle
              fontWeight={`700`}
              margin={`0 0 50px`}
              fontSize={`35px`}
              color={Theme.subTheme3_C}
              lineHeight={`0.2`}
            >
              재앙과도 같은 피해로
            </CommonSubTitle>

            <Wrapper margin={`10px 0 0`} dr={`row`} ju={`space-between`}>
              <Wrapper width={`50%`} bgColor={Theme.white_C}>
                <Image
                  height={`450px`}
                  isBlendMode={true}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM02%2Fgraph-image-4.png?alt=media&token=bd25000d-522f-428d-af3e-69b54c2e6726`}
                />
              </Wrapper>

              <Wrapper
                width={`45%`}
                al={`flex-start`}
                ju={`space-between`}
                height={`450px`}
              >
                <Wrapper al={`flex-start`}>
                  <Image
                    width={`80%`}
                    src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM16%2FTitle-1.png?alt=media&token=123d139f-b6c6-4c67-ba9f-e41e4d2f0d0a`}
                  />
                  <Text
                    fontWeight={`300`}
                    color={Theme.white_C}
                    fontSize={`16px`}
                    margin={`20px 0`}
                    lineHeight={`1.9`}
                    letterSpacing={`1px`}
                  >
                    생산설비 점검을 위해 외주 직원이 꽂은 USB 드라이브 하나로
                    인해 미국 2개의 전력 공장 네트워크에 Malware가 감염된 사례가
                    있죠. 이 감염때문에 터빈 관리 시스템의 10개 PC와 시스템
                    다운타임에 영향이 와서, 시스템 재시동만 정확히 3주 지연되는
                    사건이 있었죠.
                  </Text>
                  <Text
                    fontWeight={`300`}
                    color={Theme.white_C}
                    fontSize={`16px`}
                    lineHeight={`1.9`}
                    letterSpacing={`1px`}
                  >
                    <SpanText fontWeight={`700`}>SCADA</SpanText>(Supervisory
                    Control and Data Acquisition) 나 ICS(Industrial Control
                    System), 즉, 산업제어시스템에 Malware가 감염되면 즉시 장비의
                    중단이나 원격 공격의 위험에 무방비로 노출되게 됩니다. 이
                    경로가 이번엔 USB였지만 다른 포트로 공격해 올 수도 있죠.
                  </Text>
                </Wrapper>
                <ATag
                  width={`auto`}
                  href="https://arstechnica.com/information-technology/2013/01/two-us-power-plants-infected-with-malware-spread-via-usb-drive/"
                  target="_blank"
                >
                  <Wrapper
                    dr={`row`}
                    width={`auto`}
                    color={Theme.subTheme2_C}
                    margin={`10px 0 0`}
                    fontWeight={`600`}
                  >
                    기사보기 <RiArrowRightSLine size={`20`} />
                  </Wrapper>
                </ATag>
              </Wrapper>
            </Wrapper>
          </Wrapper>
          {/*  */}
          <Wrapper margin={`100px 0`}>
            <Text color={Theme.white_C} fontSize={`20px`} fontWeight={`400`}>
              악성코드 유입과 데이터 유출
            </Text>
            <CommonSubTitle
              fontWeight={`700`}
              margin={`0 0 50px`}
              fontSize={`35px`}
              lineHeight={`1.5`}
            >
              무심코 한 작은 행동 하나
            </CommonSubTitle>

            <Wrapper margin={`10px 0 0`} dr={`row`} ju={`space-between`}>
              <Wrapper width={`45%`} al={`flex-start`}>
                <Image
                  width={`70%`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM16%2FTitle-2.png?alt=media&token=66866a78-0998-48b9-950c-b8070ffb9b13`}
                />
                <Text
                  fontWeight={`300`}
                  color={Theme.white_C}
                  fontSize={`16px`}
                  margin={`20px 0 40px`}
                  letterSpacing={`1px`}
                >
                  원자력시설의 원심분리기를 파괴할 목적으로 설계된 사이버 공격의
                  대표적인 예로, 이란의 부셰르 원자력 발전소 SCADA(Supervisory
                  Control and Data Acquisition) 시스템에 감염되었던 Stuxnet
                  worm을 들 수 있죠.
                </Text>
                <Text
                  fontWeight={`300`}
                  color={Theme.white_C}
                  fontSize={`16px`}
                  letterSpacing={`1px`}
                >
                  감염 경로는 USB 드라이브 이를 통해 악성코드는 내부망을 타고
                  확산되어 6만대 이상의 PC를 감염시키고 2년 동안 원전 가동이
                  중단되는 막대한 피해가 발생했어요. 발전소, 군등을 비롯한 많은
                  조직들은 이미 보안의 해결책으로 설비와 사내에 일체의 DISK와 CD
                  등 이동식디스크에 대한 사용금지 조치를 취하고 있습니다.
                </Text>
              </Wrapper>

              <Wrapper width={`50%`} bgColor={Theme.white_C}>
                <Image
                  height={`450px`}
                  isBlendMode={true}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM02%2Fgraph-image-4.png?alt=media&token=bd25000d-522f-428d-af3e-69b54c2e6726`}
                />
              </Wrapper>
            </Wrapper>
          </Wrapper>
          {/*  */}
          <Wrapper margin={`100px 0`}>
            <Text fontSize={`20px`} color={Theme.white_C}>
              USB KILLER를 아시나요?
            </Text>
            <CommonSubTitle
              margin={`0 0 50px`}
              fontSize={`35px`}
              fontWeight={`700`}
              lineHeight={`1.5`}
            >
              더 보급화 되고 쉽게 구할 수 있는&nbsp;
              <SpanText color={Theme.subTheme3_C}>공격도구</SpanText>
            </CommonSubTitle>

            <Wrapper
              margin={`10px 0 0`}
              dr={`row`}
              ju={`space-between`}
              al={`flex-start`}
            >
              <Wrapper width={`calc(100% / 3.3)`} al={`flex-start`}>
                <Image
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM02%2Fgraph-image-6.png?alt=media&token=2bbd3a54-ab5d-4d4a-80d2-c4a8f8eeb42f`}
                />
                <Text
                  fontSize={`16px`}
                  color={Theme.greyTheme3_C}
                  margin={`30px 0 0`}
                  lineHeight={`1.6`}
                >
                  인터넷검색만 해도 누구나 쉽게 구매할 수 있는 이 제품은, 컴퓨터
                  내부에 DC/DC 컨버터와 컨덴서를 이용하여 전류를 모은 뒤, 110v
                  (2.0에서는 220v)까지 승압하여 고전압을 되돌려 보내는 구조로
                  설계되었습니다. 고전압 방어 회로가 없다면 순식간에 과유입되며,
                  관련 회로와 부품이 전부 타버리는 동작 원리이죠.
                </Text>
                <ATag
                  width={`auto`}
                  href="https://thehackernews.com/2015/03/killer-usb-explode-computer.html"
                  target="_blank"
                >
                  <Wrapper al={`flex-start`} margin={`10px 0 0`}>
                    <Button dr={`row`} hoverBgColor={Theme.subTheme2_C}>
                      <Text fontWeight={`300`} color={Theme.subTheme2_C}>
                        원문보기
                      </Text>
                      <RiArrowRightSLine
                        fontSize={`20px`}
                        color={Theme.subTheme2_C}
                      />
                    </Button>
                  </Wrapper>
                </ATag>
              </Wrapper>

              <Wrapper width={`calc(100% / 3.3)`}>
                <Image
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM02%2Fgraph-image-7.png?alt=media&token=1352434f-d92f-4b48-b38e-2e6f61af8aa4`}
                />
                <Text
                  fontSize={`16px`}
                  color={Theme.greyTheme3_C}
                  margin={`30px 0 0`}
                  lineHeight={`1.6`}
                >
                  국내의 한 PC방 사장은, 경쟁 PC방의 영업방해를 목적으로
                  40여대의 PC에 USB Killer를 삽입하여 해당 PC들의 CPU와
                  메인보드를 의도적으로 손상시킨 사례도 있었습니다.
                </Text>
              </Wrapper>

              <Wrapper width={`calc(100% / 3.3)`} al={`flex-start`}>
                <Image
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM02%2Fgraph-image-8.png?alt=media&token=4e89fdff-0fdc-45ee-b3d1-5158bf0a1c09`}
                />
                <Text
                  fontSize={`16px`}
                  color={Theme.greyTheme3_C}
                  margin={`30px 0 0`}
                  lineHeight={`1.6`}
                >
                  최근에는(2019년 4월), 미국의 한 대학생이 자신이 다니는 학교
                  시스템에 USB Killer를 사용해 $58,000 (약 6천5백만원)의 피해를
                  입히기도 했죠.
                </Text>

                <ATag
                  width={`auto`}
                  href="https://www.theverge.com/2019/4/17/18412427/college-saint-rose-student-guilty-usb-killerdestroyed-computers"
                  target="_blank"
                >
                  <Wrapper al={`flex-start`} margin={`90px 0 0`}>
                    <Button dr={`row`} hoverBgColor={Theme.subTheme2_C}>
                      <Text fontWeight={`300`} color={Theme.subTheme2_C}>
                        원문보기
                      </Text>
                      <RiArrowRightSLine
                        fontSize={`20px`}
                        color={Theme.subTheme2_C}
                      />
                    </Button>
                  </Wrapper>
                </ATag>
              </Wrapper>
            </Wrapper>
          </Wrapper>
          {/*  */}

          <Wrapper height={`450px`} isRelative={true} overflow={`hidden`}>
            <Wrapper
              height={`100%`}
              isAbsolute={true}
              bottom={`0`}
              right={`0`}
              attachment={`initial`}
              bgImg={`url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM16%2F%E1%84%8B%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3%20%E1%84%92%E1%85%A1%E1%84%83%E1%85%A1%E1%86%AB%20%E1%84%8B%E1%85%AA%E1%84%8B%E1%85%B5%E1%84%83%E1%85%B3%20%E1%84%87%E1%85%A2%E1%84%82%E1%85%A5.png?alt=media&token=de1b6e91-03de-41c2-a1ec-aa62a18eed14")`}
            ></Wrapper>
            <Wrapper al={`flex-start`} padding={`0 50px`}>
              <CommonSubTitle margin={`0`} fontSize={`35px`} lineHeight={`1.2`}>
                물리보안,
              </CommonSubTitle>
              <CommonSubTitle margin={`0`} fontSize={`35px`} lineHeight={`1.2`}>
                이제 선택이 아닌 필수
              </CommonSubTitle>
              <Wrapper margin={`20px 0`} al={`flex-start`}>
                <Text
                  fontSize={`18px`}
                  color={Theme.greyTheme3_C}
                  lineHeight={`1.4`}
                  fontWeight={`400`}
                >
                  사례는 점점 늘어날 것이고, 기업의 피해액은 더 커지겠죠.
                </Text>
                <Text
                  fontSize={`18px`}
                  color={Theme.greyTheme3_C}
                  lineHeight={`1.4`}
                  fontWeight={`400`}
                >
                  보안문제는 소프트웨어나 단순 교육만으로 해결되지 않습니다.
                </Text>
                <Text
                  fontSize={`18px`}
                  color={Theme.greyTheme3_C}
                  lineHeight={`1.4`}
                  fontWeight={`400`}
                >
                  이제 물리적 보안은 선택이 아니라 필수가 되었습니다.
                </Text>
              </Wrapper>
              <Wrapper al={`flex-start`}>
                <Button dr={`row`} hoverBgColor={Theme.subTheme2_C}>
                  <Text fontWeight={`700`} color={Theme.subTheme2_C}>
                    더 알아보기
                  </Text>
                  <RiArrowRightSLine
                    fontSize={`20px`}
                    color={Theme.subTheme2_C}
                  />
                </Button>
              </Wrapper>
            </Wrapper>
          </Wrapper>
          {/*  */}
          <Wrapper dr={`row`} ju={`space-between`} margin={`30px 0 100px`}>
            <Wrapper
              width={width < 900 ? `302px` : `calc(100% / 2 - 15px)`}
              height={`auto`}
              padding={width < 900 ? `35px 0px 35px 20px` : `30px 50px`}
              isRelative={true}
              attachment={`initial`}
              bgImg={`url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM01%2F%E1%84%87%E1%85%A2%E1%84%82%E1%85%A5_USB%20%E1%84%91%E1%85%A9%E1%84%90%E1%85%B3%E1%84%8B%E1%85%B4%20%E1%84%87%E1%85%A9%E1%84%8B%E1%85%A1%E1%86%AB-1.jpg?alt=media&token=8a5d48dc-6496-46f4-9ada-0762f57e8966")`}
            >
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
              width={width < 900 ? `302px` : `calc(100% / 2 - 15px)`}
              height={`auto`}
              padding={width < 900 ? `35px 0px 35px 20px` : `30px 50px`}
              isRelative={true}
              attachment={`initial`}
              bgImg={`url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM01%2F%E1%84%87%E1%85%A2%E1%84%82%E1%85%A5_%E1%84%82%E1%85%A6%E1%84%90%E1%85%B3%E1%84%8B%E1%85%AF%E1%84%8F%E1%85%B3%20%E1%84%87%E1%85%A9%E1%84%8B%E1%85%A1%E1%86%AB%E1%84%8B%E1%85%B4%20%E1%84%91%E1%85%B5%E1%86%AF%E1%84%89%E1%85%AE%20%E1%84%8C%E1%85%A9%E1%84%92%E1%85%A1%E1%86%B8-1.jpg?alt=media&token=f36f0f3e-da0f-4b74-98e1-3b3dec193f90")`}
            >
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
          </Wrapper>
        </RsWrapper>
      </Wrapper>

      {/* mobile */}
      <Wrapper display={width < 900 ? `flex` : `none`}>
        <RsWrapper margin={`111px 0 0`}>
          <Wrapper margin={`0 0 50px`} padding={`0 35px`}>
            <Text
              fontSize={width < 700 ? `14px !important` : `22px`}
              color={Theme.white_C}
            >
              회사의 소중한 자산과 데이터,
            </Text>
            <CommonSubTitle
              margin={`10px 0 0`}
              fontSize={`30px`}
              fontWeight={`700`}
              color={Theme.subTheme3_C}
              lineHeight={`1.4`}
            >
              의도 있는 유출 및 반출
              <SpanText color={Theme.white_C}>이</SpanText>
            </CommonSubTitle>
            <CommonSubTitle
              margin={`0 0 5px`}
              fontSize={`30px`}
              fontWeight={`700`}
              color={Theme.white_C}
            >
              가장 높습니다.
            </CommonSubTitle>

            <Text
              color={Theme.greyTheme7_C}
              fontSize={width < 700 ? `12px !important` : `20px`}
              margin={`0 0 50px`}
            >
              (외/내부 유포자)
            </Text>

            <Text
              fontSize={width < 700 ? `20px !important` : `40px`}
              color={Theme.white_C}
              margin={`6px 0 44px`}
              fontWeight={`300`}
            >
              <SpanText fontWeight={`700`}>데이터 유출</SpanText> 주요 원인
            </Text>

            <Wrapper isRelative={true}>
              <Image
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM16%2F%E1%84%8B%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3_%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%84%91%E1%85%B3.png?alt=media&token=fadc8b74-2bee-428d-9a01-645bbe825007`}
              />
              <Wrapper
                top={`0`}
                right={`19.5%`}
                isAbsolute={true}
                width={`31.5%`}
              >
                <PieMobileImage
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM16%2F%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%92%E1%85%A7%E1%86%BC%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%84%91%E1%85%B3.png?alt=media&token=a0c61985-5e4f-492e-9766-379bc5e221dc`}
                />
                <Text
                  isAbsolute={true}
                  top={`18%`}
                  right={`30%`}
                  color={Theme.white_C}
                  fontSize={width < 700 ? `14px !important` : `30px`}
                  fontWeight={`700`}
                >
                  <AnimatedNumber
                    value={48}
                    formatValue={(value) => value.toFixed(0)}
                    duration={1000}
                  />
                  %
                </Text>
              </Wrapper>
            </Wrapper>

            <Text
              fontSize={width < 700 ? `18px !important` : `28px`}
              color={Theme.white_C}
              margin={width < 700 ? `100px 0 27px` : `150px 0 40px`}
            >
              데이터유출 피해액
              <SpanText fontSize={width < 700 ? `12px !important` : `20px`}>
                &nbsp;(단위: $억)
              </SpanText>
            </Text>

            <Wrapper al={`flex-start`}>
              <Text
                fontSize={width < 700 ? `12px !important` : `25px`}
                color={Theme.white_C}
                fontWeight={`700`}
                margin={width < 700 ? `0 0 0 77px` : `0 0 0 110px`}
              >
                {isCheck ? `2018` : `2017`}
              </Text>

              <Wrapper
                dr={`row`}
                ju={`flex-start`}
                margin={width < 700 ? `15px 0 0` : `30px 0 0`}
              >
                <Text
                  fontSize={width < 700 ? `12px !important` : `20px`}
                  color={Theme.white_C}
                  margin={width < 700 ? `0 10px 0 0` : `0 14px 0 0`}
                  width={width < 700 ? `67px` : `100px`}
                  textAlign={`right`}
                >
                  유출비용
                </Text>
                <GraphWrapper
                  width={graphValue}
                  bgColor={Theme.basicTheme_C}
                  height={width < 700 ? `15px` : `25px`}
                  radius={`0 20px 20px 0`}
                ></GraphWrapper>
                <Text
                  margin={`0 0 0 5px`}
                  fontSize={`12px`}
                  color={Theme.white_C}
                >
                  {isFirst ? (
                    <AnimatedNumber
                      className="38"
                      value={38}
                      formatValue={(value) => value.toFixed(2)}
                      duration={4000}
                    />
                  ) : (
                    `0`
                  )}
                </Text>
              </Wrapper>

              <Wrapper
                dr={`row`}
                ju={`flex-start`}
                margin={width < 700 ? `14px 0 0` : `30px 0 0`}
              >
                <Text
                  fontSize={width < 700 ? `12px !important` : `20px`}
                  color={Theme.white_C}
                  margin={width < 700 ? `0 10px 0 0` : `0 14px 0 0`}
                  width={width < 700 ? `67px` : `100px`}
                  textAlign={`right`}
                >
                  후속처리비용
                </Text>
                <GraphWrapper
                  width={graphValue2}
                  bgColor={Theme.white_C}
                  height={width < 700 ? `15px` : `25px`}
                  radius={`0 20px 20px 0`}
                ></GraphWrapper>
                <Text
                  margin={`0 0 0 5px`}
                  fontSize={`12px`}
                  color={Theme.white_C}
                >
                  {isFirst ? (
                    <AnimatedNumber
                      className="25"
                      value={25}
                      formatValue={(value) => value.toFixed(2)}
                      duration={4000}
                    />
                  ) : (
                    `0`
                  )}
                </Text>
                {/* <Text
                  fontSize={width < 700 ? `14px !important` : `30px`}
                  color={Theme.white_C}
                  margin={`0 0 0 10px`}
                >
                  25.00
                </Text> */}
              </Wrapper>

              <Text
                margin={width < 700 ? `37px 0 150px` : `50px 0 150px`}
                color={Theme.greyTheme7_C}
                fontSize={width < 700 ? `12px !important` : `20px`}
                fontWeight={`300`}
              >
                출처 : Ponemon 2018 Cost of a Data breach Study
              </Text>
            </Wrapper>
          </Wrapper>
        </RsWrapper>

        <Wrapper bgColor={Theme.black_C}>
          <Text
            fontSize={`14px`}
            color={Theme.white_C}
            fontWeight={`400`}
            margin={`50px 0 5px`}
          >
            악성코드 유입과 데이터 유출
          </Text>
          <CommonSubTitle
            fontWeight={`700`}
            fontSize={`30px`}
            color={Theme.subTheme3_C}
            margin={`0`}
          >
            이동식디스크<SpanText color={Theme.white_C}>는 여전히</SpanText>
          </CommonSubTitle>
          <CommonSubTitle
            fontWeight={`700`}
            fontSize={`30px`}
            margin={`0 0 50px`}
            color={Theme.subTheme3_C}
            lineHeight={`1.8`}
          >
            보안의 위협<SpanText color={Theme.white_C}>적 요소입니다.</SpanText>
          </CommonSubTitle>

          <Image
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM16%2F%E1%84%8B%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3-mobile-1.png?alt=media&token=efe1e420-d0c4-462a-95e0-1c70597db5c2`}
          />

          <Image
            margin={width < 700 ? `30px 0` : `60px 0`}
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM16%2F%E1%84%8B%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3-mobile-2.png?alt=media&token=99c8c7b7-b9f7-4e31-8d24-ab8338d6be53`}
          />
        </Wrapper>

        <RsWrapper>
          <Text
            fontSize={`14px`}
            color={Theme.white_C}
            fontWeight={`400`}
            margin={`50px 0 5px`}
          >
            철통같은 보안을 통과하는 손 쉬운 방법
          </Text>
          <CommonSubTitle
            fontWeight={`700`}
            fontSize={`30px`}
            color={Theme.subTheme3_C}
            margin={`0`}
          >
            길에서 주운 USB,
          </CommonSubTitle>
          <CommonSubTitle
            fontWeight={`700`}
            fontSize={`30px`}
            margin={`0 0 50px`}
            color={Theme.white_C}
            lineHeight={`1.8`}
          >
            과연 몇 명 이 꽂아 볼까요?
          </CommonSubTitle>

          <Text
            color={Theme.white_C}
            fontSize={width < 700 ? `18px !important` : `32px`}
            margin={width < 700 ? `14px 0 0` : `25px 0 0`}
          >
            길에서 주운 USB를 직원이
          </Text>
          <Text
            color={Theme.white_C}
            fontSize={width < 700 ? `18px !important` : `32px`}
            margin={width < 700 ? `0 0 26px` : `0 0 50px`}
          >
            사내 PC에 사용한 경우
          </Text>

          <Image
            width={`80%`}
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM02%2Fgraph-image-3.png?alt=media&token=b6c74fb4-172f-441f-91ff-4d7791225ff2`}
          />
          <Wrapper
            width={`80%`}
            bgColor={`rgba(255,255,255,0.2)`}
            padding={width < 700 ? `20px` : `30px`}
            al={`flex-start`}
          >
            <Text
              margin={width < 700 ? `0 0 40px` : `0 0 60px`}
              color={Theme.white_C}
              fontSize={width < 700 ? `14px !important` : `30px`}
              fontWeight={`400`}
              lineHeight={`1.8`}
            >
              2011년, 미 국토보안부(U.S. Department of Homeland Security)
              US-CERT (U.S. Computer Emergency Readiness Team) 에서 보안부
              직원들을 대상으로 한 가지 실험을 했습니다.
            </Text>
            <Text
              color={Theme.white_C}
              fontSize={width < 700 ? `14px !important` : `30px`}
              fontWeight={`400`}
              lineHeight={`1.8`}
              letterSpacing={`0.6px`}
            >
              ‘해커가 직원을 통해 시스템에 얼마나 쉽게 접근할 수 있는가’ 그
              실험은, 보안부의 주차장에 USB를 떨어트려 놓고 직원들이 사내PC에
              사용하는지 관찰하는 것이었죠. 결과가 어떻게 되었을까요? 약 60%가
              땅에 떨어진 USB를 사용하였고, 국토보안부 공식 로고가 새겨진 USB나
              CD는 90%가 사용했죠. 그 USB안에 Malware가 있을 수도 있는 위험성은
              모두 잊고 사내 pc에 사용했어요. 보안의 가장 큰 취약점은 직원의
              ‘멍청함’(Idiocy) 이라고 이야기 하더군요.
            </Text>

            <ATag
              width={`auto`}
              href="https://www.bloomberg.com/news/articles/2011-06-27/human-errors-fuel-hacking-as-test-shows-nothing-prevents-idiocy"
              target="_blank"
            >
              <Text
                margin={width < 700 ? `25px 0 0` : `50px 0 0`}
                color={Theme.subTheme2_C}
                fontSize={width < 700 ? `14px !important` : `30px`}
                borderBottom={`1px solid ${Theme.subTheme2_C}`}
              >
                출처 : Bloomberg
              </Text>
            </ATag>
          </Wrapper>

          <Text
            fontSize={width < 700 ? `14px !important` : `30px`}
            color={Theme.white_C}
            fontWeight={`300`}
            margin={width < 700 ? `48px 0 0` : `70px 0 0`}
          >
            누가, 언제, 어디서
          </Text>
          <Text
            fontSize={width < 700 ? `14px !important` : `30px`}
            color={Theme.white_C}
            fontWeight={`300`}
            margin={width < 700 ? `0 0 15px` : `0 0 30px`}
          >
            감염된 기기를 꽂을지 모르는 두려움
          </Text>

          <Text
            color={Theme.white_C}
            margin={width < 700 ? `0` : `15px 0 0`}
            fontSize={width < 700 ? `26px !important` : `50px`}
          >
            단 한 번이
          </Text>
          <Text
            color={Theme.subTheme3_C}
            fontSize={width < 700 ? `26px !important` : `50px`}
            margin={width < 700 ? `0 0 30px` : `0 0 55px`}
          >
            재앙과도 같은 피해로
          </Text>

          <Wrapper
            padding={width < 700 ? `0 36px` : `0 50px`}
            al={`flex-start`}
          >
            <Image
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM16%2F%E1%84%8B%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3-image-4.png?alt=media&token=2a959f13-5c4a-4562-95dc-8f0e664f163f`}
            />

            <Text
              isGotham={true}
              color={Theme.white_C}
              fontSize={width < 700 ? `18px !important` : `32px`}
              margin={width < 700 ? `28px 0 11px` : `45px 0 20px`}
            >
              Two Us Power plants infected with malware spread via USB drive
            </Text>

            <Text
              margin={width < 700 ? `0 0 40px` : `0 0 60px`}
              color={Theme.greyTheme3_C}
              fontSize={width < 700 ? `14px !important` : `30px`}
              fontWeight={`300`}
            >
              생산설비 점검을 위해 외주 직원이 꽂은 USB 드라이브 하나로 인해
              미국 2개의 전력 공장 네트워크에 Malware가 감염된 사례가 있죠. 이
              감염때문에 터빈 관리 시스템의 10개 PC와 시스템 다운타임에 영향이
              와서, 시스템 재시동만 정확히 3주 지연되는 사건이 있었죠.
            </Text>

            <Text
              fontSize={width < 700 ? `14px !important` : `30px`}
              fontWeight={`300`}
              color={Theme.greyTheme3_C}
            >
              <SpanText fontWeight={`700`}>SCADA</SpanText>(Supervisory Control
              and Data Acquisition) 나
              <SpanText fontWeight={`700`}>ICS</SpanText>(Industrial Control
              System), 즉, 산업제어시스템에 Malware가 감염되면 즉시 장비의
              중단이나 원격 공격의 위험에 무방비로 노출되게 됩니다. 이 경로가
              이번엔 USB였지만 다른 포트로 공격해 올 수도 있죠.
            </Text>

            <Wrapper
              margin={width < 700 ? `25px 0 0` : `50px 0 0`}
              color={Theme.subTheme2_C}
              dr={`row`}
              width={`auto`}
            >
              <Text fontSize={width < 700 ? `14px !important` : `30px`}>
                기사보기
              </Text>
              <RiArrowRightSLine size={width < 700 ? `20` : `30`} />
            </Wrapper>
          </Wrapper>

          <Text
            fontSize={width < 700 ? `14px !important` : `30px`}
            color={Theme.white_C}
            fontWeight={`300`}
            margin={width < 700 ? `48px 0 0` : `90px 0 0`}
          >
            악성코드 유입과 데이터 유출
          </Text>

          <Text
            fontSize={width < 700 ? `29px !important` : `60px`}
            color={Theme.white_C}
            margin={width < 700 ? `0 0 22px` : `0 0 50px`}
            fontWeight={`300`}
          >
            무심코 한 <SpanText fontWeight={`700`}>작은 행동 하나</SpanText>
          </Text>
          <Wrapper
            padding={width < 700 ? `0 36px` : `0 50px`}
            al={`flex-start`}
          >
            <Image
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM16%2F%E1%84%8B%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3-image-5.png?alt=media&token=a58af519-738d-4d57-83b2-b23c7f06b6c8`}
            />

            <Text
              color={Theme.white_C}
              fontSize={width < 700 ? `18px !important` : `32px`}
              isGotham={true}
              margin={width < 700 ? `30px 0 0` : `55px 0 0`}
            >
              Under worm assault, military
            </Text>
            <Text
              color={Theme.white_C}
              fontSize={width < 700 ? `18px !important` : `32px`}
              isGotham={true}
              margin={width < 700 ? `0 0 20px` : `0 0 40px`}
            >
              bans disks, USB drives
            </Text>

            <Text
              fontSize={width < 700 ? `14px !important` : `30px`}
              color={Theme.greyTheme3_C}
              fontWeight={`300`}
              margin={width < 700 ? `0 0 20px` : `0 0 40px`}
            >
              원자력시설의 원심분리기를 파괴할 목적으로 설계된 사이버 공격의
              대표적인 예로, 이란의 부셰르 원자력 발전소 SCADA(Supervisory
              Control and Data Acquisition) 시스템에 감염되었던 Stuxnet worm을
              들 수 있죠.
            </Text>

            <Text
              fontSize={width < 700 ? `14px !important` : `30px`}
              color={Theme.greyTheme3_C}
              fontWeight={`300`}
            >
              감염 경로는 USB 드라이브 이를 통해 악성코드는 내부망을 타고
              확산되어 6만대 이상의 PC를 감염시키고 2년 동안 원전 가동이
              중단되는 막대한 피해가 발생했어요. 발전소, 군등을 비롯한 많은
              조직들은 이미 보안의 해결책으로 설비와 사내에 일체의 DISK와 CD 등
              이동식디스크에 대한 사용금지 조치를 취하고 있습니다.
            </Text>
          </Wrapper>

          <Text
            fontSize={width < 700 ? `14px !important` : `30px`}
            color={Theme.white_C}
            margin={width < 700 ? `53px 0 10px` : `100px 0 20px`}
          >
            USB KILLER를 아시나요?
          </Text>
          <Text
            fontSize={width < 700 ? `29px !important` : `60px`}
            color={Theme.white_C}
            fontWeight={`700`}
          >
            더 보급화 되고 쉽게
          </Text>
          <Text
            fontSize={width < 700 ? `29px !important` : `60px`}
            color={Theme.white_C}
            margin={width < 700 ? `0 0 22px` : `0 0 44px`}
            fontWeight={`700`}
          >
            구할 수 있는 <SpanText color={Theme.subTheme3_C}>공격도구</SpanText>
          </Text>

          <Image
            width={`80%`}
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM16%2F%E1%84%8B%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3-image-6.png?alt=media&token=a0523653-4f02-472a-8093-d9908947f10e`}
          />

          <Wrapper
            padding={width < 700 ? `0 36px` : `0 50px`}
            al={`flex-start`}
          >
            <Text
              color={Theme.greyTheme3_C}
              fontSize={width < 700 ? `14px !important` : `30px`}
              fontWeight={`300`}
            >
              인터넷검색만 해도 누구나 쉽게 구매할 수 있는 이 제품은, 컴퓨터
              내부에 DC/DC 컨버터와 컨덴서를 이용하여 전류를 모은 뒤, 110v
              (2.0에서는 220v) 까지 승압하여 고전압을 되돌려 보내는 구조로
              설계되었습니다. 고전압 방어 회로가 없다면 순식간에 과유입되며,
              관련 회로와 부품이 전부 타버리는 동작 원리이죠.
            </Text>

            <Wrapper
              margin={width < 700 ? `10px 0 27px` : `20px 0 50px`}
              color={Theme.subTheme2_C}
              dr={`row`}
              width={`auto`}
            >
              <Text fontSize={width < 700 ? `14px !important` : `30px`}>
                원문보기
              </Text>
              <RiArrowRightSLine size={width < 700 ? `20` : `30`} />
            </Wrapper>
          </Wrapper>

          <Image
            width={`80%`}
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM16%2F%E1%84%8B%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3-image-7.png?alt=media&token=7e42f35d-9437-4eaf-95fc-a3276af132f3`}
          />

          <Wrapper
            padding={width < 700 ? `0 36px` : `0 50px`}
            al={`flex-start`}
            margin={width < 700 ? `10px 0 30px` : `20px 0 60px`}
          >
            <Text
              color={Theme.greyTheme3_C}
              fontSize={width < 700 ? `14px !important` : `30px`}
              fontWeight={`300`}
            >
              국내의 한 PC방 사장은, 경쟁 PC방의 영업방해를 목적으로 40여대의
              PC에 USB Killer를 삽입하여 해당 PC들의 CPU와 메인보드를 의도적으로
              손상시킨 사례도 있었습니다.
            </Text>
          </Wrapper>

          <Image
            width={`80%`}
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM16%2F%E1%84%8B%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3-image-8.png?alt=media&token=880d36f6-63bf-4c23-8682-7bd5534d7600`}
          />

          <Wrapper
            padding={width < 700 ? `0 36px` : `0 50px`}
            al={`flex-start`}
            margin={width < 700 ? `10px 0 57px` : `20px 0 100px`}
          >
            <Text
              color={Theme.greyTheme3_C}
              fontSize={width < 700 ? `14px !important` : `30px`}
              fontWeight={`300`}
            >
              최근에는(2019년 4월), 미국의 한 대학생이 자신이 다니는 학교
              시스템에 USB Killer를 사용해 $58,000 (약 6천5백만원)의 피해를
              입히기도 했죠.
            </Text>

            <Wrapper
              margin={width < 700 ? `10px 0 27px` : `20px 0 50px`}
              color={Theme.subTheme2_C}
              dr={`row`}
              width={`auto`}
            >
              <Text fontSize={width < 700 ? `14px !important` : `30px`}>
                원문보기
              </Text>
              <RiArrowRightSLine size={width < 700 ? `20` : `30`} />
            </Wrapper>
          </Wrapper>

          <Wrapper
            isRelative={true}
            width={width < 700 ? `302px` : `700px`}
            height={width < 700 ? `302px` : `700px`}
            ju={`flex-start`}
            al={`flex-start`}
            padding={width < 700 ? `20px 16px` : `40px 30px`}
            margin={width < 700 ? `0 0 30px` : `0 0 50px`}
          >
            <Image
              isAbsolute={true}
              top={`0`}
              left={`0`}
              height={`100%`}
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM16%2F%E1%84%8B%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3-mobile-3.png?alt=media&token=2aa3f303-e0e8-4d0b-a6c8-d2740fd43d8c`}
            />
            <Text
              fontSize={width < 700 ? `29px !important` : `60px`}
              fontWeight={`700`}
              color={Theme.white_C}
            >
              물리보안,
            </Text>
            <Text
              fontSize={width < 700 ? `29px !important` : `60px`}
              fontWeight={`700`}
              color={Theme.white_C}
            >
              이제 선택이 아닌 필수
            </Text>
            <Link to="/about">
              <Wrapper
                margin={width < 700 ? `10px 0 0` : `20px 0 0`}
                color={Theme.subTheme2_C}
                dr={`row`}
                width={`auto`}
              >
                <Text
                  fontSize={width < 700 ? `14px !important` : `30px`}
                  fontWeight={`700`}
                >
                  더 알아보기
                </Text>
                <RiArrowRightSLine size={width < 700 ? `20` : `30`} />
              </Wrapper>
            </Link>
          </Wrapper>

          <Wrapper
            isRelative={true}
            width={width < 700 ? `302px` : `700px`}
            height={width < 700 ? `200px` : `460px`}
            ju={`flex-start`}
            al={`flex-start`}
            padding={width < 700 ? `30px 18px 0` : `50px 32px 0`}
            margin={width < 700 ? `0 0 10px` : `0 0 20px`}
          >
            <Image
              isAbsolute={true}
              top={`0`}
              left={`0`}
              height={`100%`}
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM16%2F%E1%84%8B%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3-image-10.png?alt=media&token=c57b03a9-a2f5-41d8-80ef-4ff5200d7f90`}
            />
            <Text
              fontSize={width < 700 ? `12px !important` : `20px`}
              fontWeight={`300`}
              color={Theme.greyTheme3_C}
            >
              USB 포트의 보안
            </Text>
            <Text
              fontSize={width < 700 ? `26px !important` : `50px`}
              fontWeight={`700`}
              color={Theme.white_C}
              lineHeight={`1.4`}
            >
              포트보안의 시작점,
            </Text>
            <Text
              fontSize={width < 700 ? `26px !important` : `50px`}
              fontWeight={`700`}
              color={Theme.white_C}
              lineHeight={`1.4`}
            >
              물리보안으로 종결.
            </Text>

            <Link to="/security">
              <Wrapper
                margin={width < 700 ? `10px 0 0` : `20px 0 0`}
                color={Theme.white_C}
                dr={`row`}
                width={`auto`}
              >
                <Text
                  fontSize={width < 700 ? `14px !important` : `30px`}
                  fontWeight={`700`}
                >
                  더 알아보기
                </Text>
                <RiArrowRightSLine size={width < 700 ? `20` : `30`} />
              </Wrapper>
            </Link>
          </Wrapper>

          <Wrapper
            isRelative={true}
            width={width < 700 ? `302px` : `700px`}
            height={width < 700 ? `200px` : `460px`}
            ju={`flex-start`}
            al={`flex-start`}
            padding={width < 700 ? `30px 18px 0` : `50px 32px 0`}
            margin={width < 700 ? `0 0 87px` : `0 0 140px`}
          >
            <Image
              isAbsolute={true}
              top={`0`}
              left={`0`}
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM16%2F%E1%84%8B%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3-image-11.png?alt=media&token=78526b8e-b773-42f8-8131-3a4385a3d2b3`}
            />
            <Text
              fontSize={width < 700 ? `12px !important` : `20px`}
              fontWeight={`300`}
              color={Theme.greyTheme3_C}
            >
              네트워크 보안의 필수 조합
            </Text>
            <Text
              fontSize={width < 700 ? `23px !important` : `50px`}
              fontWeight={`700`}
              color={Theme.white_C}
              lineHeight={`1.4`}
            >
              네트워크와 인트라넷,
            </Text>
            <Text
              fontSize={width < 700 ? `23px !important` : `50px`}
              fontWeight={`700`}
              color={Theme.white_C}
              lineHeight={`1.4`}
            >
              사내 모든 자산으로의 통로.
            </Text>
            <Link to="/network">
              <Wrapper
                margin={width < 700 ? `10px 0 0` : `20px 0 0`}
                color={Theme.white_C}
                dr={`row`}
                width={`auto`}
              >
                <Text
                  fontSize={width < 700 ? `14px !important` : `30px`}
                  fontWeight={`700`}
                >
                  더 알아보기
                </Text>
                <RiArrowRightSLine size={width < 700 ? `20` : `30`} />
              </Wrapper>
            </Link>
          </Wrapper>
        </RsWrapper>
      </Wrapper>
    </WholeWrapper>
  );
};

export default withResizeDetector(MM16Presenter);
