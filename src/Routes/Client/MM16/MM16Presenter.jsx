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
  font-weight: 700;

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
  width: 31%;
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
  useTitle(`VIRUS INTRUSION | ${process.env["HOMEPAGE_NAME"]}`);

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

      setGraphValue(`85%`);
      setGraphValue2(`50%`);
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
              fontSize={`20px`}
              color={Theme.white_C}
              lineHeight={`1.2`}
              fontWeight={`300`}
            >
              valuable assets and data of the company,
            </Text>
            <CommonSubTitle
              fontSize={`35px`}
              fontWeight={`700`}
              color={Theme.white_C}
              margin={`10px 0`}
            >
              <SpanText color={Theme.subTheme3_C}>
                Malicious or criminal attack&nbsp;
              </SpanText>
              is highest reason
            </CommonSubTitle>
            {/* <Text
              fontSize={`14px`}
              color={Theme.white_C}
              fontWeight={`300`}
              margin={`0 0 25px`}
            >
              (외/내부 유포자)
            </Text> */}

            <Text
              fontSize={`20px`}
              fontWeight={`700`}
              color={Theme.white_C}
              margin={`45px 0 0`}
            >
              Major Causes of Data Breach
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
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2FMM16%2F%E1%84%8B%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3-%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%92%E1%85%A7%E1%86%BC%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%84%91%E1%85%B3.png?alt=media&token=f768784f-472f-4aec-ab57-738c9c1c0dea`}
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
              Data Leak Damage
            </Text>
            <Text color={Theme.white_C} fontSize={`14px`} margin={`0 0 15px`}>
              (in 100 million dollars)
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
                <Wrapper
                  color={Theme.white_C}
                  width={`100px`}
                  margin={`0 10px 0 0`}
                  fontWeight={`700`}
                  al={`flex-end`}
                >
                  <Text fontSize={`18px`}>Leakage</Text>
                  <Text fontSize={`18px`}>Cost</Text>
                </Wrapper>

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
                <Wrapper
                  color={Theme.white_C}
                  width={`100px`}
                  margin={`0 10px 0 0`}
                  fontWeight={`700`}
                  al={`flex-end`}
                >
                  <Text fontSize={`18px`}>Follow-up</Text>
                  <Text fontSize={`18px`}>Processign</Text>
                  <Text fontSize={`18px`}>Cost</Text>
                </Wrapper>

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
                Source : Ponemon 2018 Cost of a Data Breach Study
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </RsWrapper>
        {/*  */}
        <Wrapper bgColor={Theme.black_C}>
          <RsWrapper>
            <Wrapper margin={`100px 0`}>
              <Text fontSize={`20px`} color={Theme.white_C} fontWeight={`400`}>
                Malware Intrusion and Data Leak
              </Text>
              <CommonSubTitle fontWeight={`700`} fontSize={`35px`}>
                <SpanText color={Theme.subTheme3_C}>Types and Means</SpanText>
                &nbsp; of Technology Leakage
              </CommonSubTitle>
              <Image
                margin={`55px 0 0`}
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2FMM16%2F%E1%84%8B%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3-%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%A5-1.png?alt=media&token=4edebda6-b895-4dad-88a1-2b6109fc8fb7`}
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
              Major Cause of Industrial System Malware
            </Text>
            <CommonSubTitle
              fontWeight={`700`}
              margin={`0 0 70px`}
              fontSize={`35px`}
              color={Theme.white_C}
            >
              <SpanText color={Theme.subTheme3_C}>
                Removable data storage&nbsp;
              </SpanText>
              is still a major threat to security
            </CommonSubTitle>
            <Image
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2FMM16%2F%E1%84%8B%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3-%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%A5-2.png?alt=media&token=f7d115e6-1868-4e2f-8d8f-2ac165a26015`}
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
              Malware Intrusion and Data Leak
            </Text>

            <CommonSubTitle
              fontWeight={`700`}
              fontSize={`35px`}
              color={Theme.white_C}
            >
              <SpanText color={Theme.subTheme3_C}>
                How many people&nbsp;
              </SpanText>
              would plug in a USB drive that they
            </CommonSubTitle>
            <CommonSubTitle
              fontWeight={`700`}
              margin={`0 0 50px`}
              fontSize={`35px`}
              color={Theme.white_C}
              lineHeight={`0.4`}
            >
              picked up on the street?
            </CommonSubTitle>
            <Text
              fontSize={`20px`}
              fontWeight={`700`}
              color={Theme.white_C}
              margin={`0 0 5px`}
            >
              USB drive picked up on the street is used by an employee on an
              in-house PC
            </Text>
            <Wrapper margin={`10px 0 0`} dr={`row`} ju={`space-between`}>
              <Image
                width={`calc(50% - 15px)`}
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2FMM16%2F%E1%84%8B%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3-%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%A5-3.png?alt=media&token=de0e4a82-53f7-40d1-9a71-a8384b4a0397`}
              />
              <Wrapper
                width={`calc(50% - 15px)`}
                bgColor={Theme.greyTheme10_C}
                padding={`48px 55px`}
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
                    letterSpacing={`0.7px`}
                  >
                    In 2011, the US Department of Homeland Security US-CERT
                    (United States Computer Emergency Readiness Team) conducted
                    an experiment on security staff. ‘How easily hackers can
                    access the system through employees’. The experiment was to
                    drop a USB drive into the parking lot of the security
                    department and see if the employees were using it on the
                    in-house PC. What was the result? About 60% of them used a
                    USB drive which fell to the ground, and 90% used a USB drive
                    or CD with official logo of DHS. “I forgot all the risks
                    that there might be malware in the USB and used it on my
                    PC.” The biggest security vulnerability is the employee’s
                    “idiocy”.
                  </Text>
                  {/* <Text
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
                  </Text> */}
                </Wrapper>
                <ATag
                  width={`auto`}
                  href="https://www.bloomberg.com/news/articles/2011-06-27/human-errors-fuel-hacking-as-test-shows-nothing-prevents-idiocy"
                >
                  <Text
                    color={Theme.subTheme2_C}
                    borderBottom={`1px solid ${Theme.subTheme2_C}`}
                  >
                    Source : Bloomberg
                  </Text>
                </ATag>
              </Wrapper>
            </Wrapper>
          </Wrapper>
          {/*  */}
          <Wrapper margin={`100px 0`}>
            <Text fontSize={`20px`} color={Theme.white_C}>
              Malware Intrusion and Data Leak
            </Text>
            <CommonSubTitle
              fontWeight={`700`}
              fontSize={`35px`}
              color={Theme.white_C}
              lineHeight={`1.4`}
            >
              A Single Malware Infection
            </CommonSubTitle>
            <CommonSubTitle
              fontWeight={`700`}
              margin={`0 0 50px`}
              fontSize={`35px`}
              color={Theme.white_C}
              lineHeight={`0.2`}
            >
              Can Cause&nbsp;
              <SpanText color={Theme.subTheme3_C}>Catastrophic</SpanText>
              &nbsp;Damage
            </CommonSubTitle>

            <Wrapper margin={`10px 0 0`} dr={`row`} ju={`space-between`}>
              <Wrapper width={`calc(50% - 15px)`} bgColor={Theme.white_C}>
                <Image
                  height={`435px`}
                  isBlendMode={true}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM16_modify%2F%E1%84%8B%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3-01.jpg?alt=media&token=2d0d87d3-3108-416e-a80f-eca06ae4b612`}
                />
              </Wrapper>

              <Wrapper
                width={`calc(50% - 15px)`}
                al={`flex-start`}
                ju={`space-between`}
                height={`435px`}
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
                    letterSpacing={`0.5px`}
                  >
                    Two US power plant networks were infected with malware that
                    was spread by a USB drive plugged in by a subcontractor, who
                    wanted to check on production facilities.
                  </Text>
                  <Text
                    fontWeight={`300`}
                    color={Theme.white_C}
                    fontSize={`16px`}
                    lineHeight={`1.9`}
                    letterSpacing={`0.4px`}
                  >
                    The malware affected 10 PCs in the turbine management system
                    and system downtime, which caused a 3-week delay in system
                    restart. Supervisory Control and Data Acquisition (SCADA) or
                    Industrial Control System (ICS), that is, industrial control
                    systems are especially vulnerable to immediate threats of
                    machine interruption or remote attack. Malware infection
                    path was a USB port this time, but all other open data ports
                    were equally vulnerable.
                  </Text>
                </Wrapper>
                <ATag
                  width={`auto`}
                  href="https://arstechnica.com/information-technology/2013/01/two-us-power-plants-infected-with-malware-spread-via-usb-drive/"
                >
                  <Wrapper
                    dr={`row`}
                    width={`auto`}
                    color={Theme.subTheme2_C}
                    margin={`10px 0 0`}
                    fontWeight={`600`}
                  >
                    See articles
                    <Wrapper width={`auto`} padding={`5px 0 0`}>
                      <RiArrowRightSLine size={`20`} />
                    </Wrapper>
                  </Wrapper>
                </ATag>
              </Wrapper>
            </Wrapper>
          </Wrapper>
          {/*  */}
          <Wrapper margin={`100px 0`}>
            <Text color={Theme.white_C} fontSize={`20px`} fontWeight={`400`}>
              Malware Intrusion and Data Leak
            </Text>
            <CommonSubTitle
              fontWeight={`700`}
              margin={`0 0 50px`}
              fontSize={`35px`}
              lineHeight={`1.5`}
            >
              <SpanText color={Theme.subTheme3_C}>
                One Small Act of&nbsp;
              </SpanText>
              Thoughtlessness
            </CommonSubTitle>

            <Wrapper margin={`10px 0 0`} dr={`row`} ju={`space-between`}>
              <Wrapper width={`calc(50% - 15px)`} al={`flex-start`}>
                <Image
                  width={`70%`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM16%2FTitle-2.png?alt=media&token=66866a78-0998-48b9-950c-b8070ffb9b13`}
                />
                <Text
                  fontWeight={`300`}
                  color={Theme.white_C}
                  fontSize={`16px`}
                  margin={`10px 0 40px`}
                  letterSpacing={`1.2px`}
                >
                  An example of a cyber attack designed to destroy nuclear
                  centrifuges is the Stuxnet worm attack, which infected the
                  Supervisory Control and Data Acquisition (SCADA) system at
                  Iran’s Bushehr nuclear power plant. Through a USB drive,
                  malicious codes spread throughout the internal network,
                  infecting more than 60,000 PCs and halting the plant’s
                  operation for two years.
                </Text>
                <Text
                  fontWeight={`300`}
                  color={Theme.white_C}
                  fontSize={`16px`}
                  letterSpacing={`1.2px`}
                >
                  Many companies, including power plants, the military and
                  others, have already taken measures to prohibit the use of
                  removable data storage devices such as DISK and CDs for
                  increased cyber security.
                </Text>
              </Wrapper>

              <Wrapper width={`calc(50% - 15px)`} bgColor={Theme.white_C}>
                <Image
                  height={`450px`}
                  isBlendMode={true}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM16_modify%2F%E1%84%8B%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3-02.jpg?alt=media&token=c2e77f08-d273-4b82-ae93-93b7232afb87`}
                />
              </Wrapper>
            </Wrapper>
          </Wrapper>
          {/*  */}
          <Wrapper margin={`100px 0`}>
            <Text fontSize={`20px`} color={Theme.white_C}>
              Do you know the USB KILLER?
            </Text>
            <CommonSubTitle
              margin={`0 0 50px`}
              fontSize={`35px`}
              fontWeight={`700`}
              lineHeight={`1.5`}
            >
              More popular and closer&nbsp;
              <SpanText color={Theme.subTheme3_C}>attack methods</SpanText>
            </CommonSubTitle>

            <Wrapper
              margin={`10px 0 0`}
              dr={`row`}
              ju={`space-between`}
              al={`flex-start`}
            >
              <Wrapper width={`calc(100% / 3.2)`} al={`flex-start`}>
                <Image
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM02%2Fgraph-image-6.png?alt=media&token=2bbd3a54-ab5d-4d4a-80d2-c4a8f8eeb42f`}
                />
                <Text
                  fontSize={`16px`}
                  color={Theme.greyTheme3_C}
                  margin={`30px 0 0`}
                  fontWeight={`300`}
                  lineHeight={`1.6`}
                >
                  This easily accessible product is designed to rapidly collect
                  current from the USB power source. Once fully charged, it
                  releases the high voltage and burns all of the circuits,
                  effectively “killing” the computer.
                </Text>
                <ATag
                  width={`auto`}
                  href="https://thehackernews.com/2015/03/killer-usb-explode-computer.html"
                >
                  <Wrapper al={`flex-start`} margin={`10px 0 0`}>
                    <Button dr={`row`} hoverBgColor={Theme.subTheme2_C}>
                      <Text fontWeight={`700`} color={Theme.subTheme2_C}>
                        Read More
                      </Text>
                      <Wrapper width={`auto`} margin={`5px 0 0`}>
                        <RiArrowRightSLine
                          fontSize={`20px`}
                          color={Theme.subTheme2_C}
                        />
                      </Wrapper>
                    </Button>
                  </Wrapper>
                </ATag>
              </Wrapper>

              <Wrapper width={`calc(100% / 3.2)`}>
                <Image
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM02%2Fgraph-image-7.png?alt=media&token=1352434f-d92f-4b48-b38e-2e6f61af8aa4`}
                />
                <Text
                  fontSize={`16px`}
                  color={Theme.greyTheme3_C}
                  margin={`30px 0 0`}
                  lineHeight={`1.6`}
                  fontWeight={`300`}
                >
                  In one case, the owner of a local PC Cafe intentionally
                  damaged approximately 40 PCs of a competitor using the USB
                  Killer.
                </Text>
              </Wrapper>

              <Wrapper width={`calc(100% / 3.2)`} al={`flex-start`}>
                <Image
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM02%2Fgraph-image-8.png?alt=media&token=4e89fdff-0fdc-45ee-b3d1-5158bf0a1c09`}
                />
                <Text
                  fontSize={`16px`}
                  color={Theme.greyTheme3_C}
                  margin={`30px 0 0`}
                  lineHeight={`1.6`}
                  fontWeight={`300`}
                >
                  Recently, in April 2019, a college student in the U.S. used a
                  USB Killer on his school system, causing $58,000 in damage.
                </Text>

                <ATag
                  width={`auto`}
                  href="https://www.theverge.com/2019/4/17/18412427/college-saint-rose-student-guilty-usb-killerdestroyed-computers"
                >
                  <Wrapper al={`flex-start`} margin={`38px 0 0`}>
                    <Button dr={`row`} hoverBgColor={Theme.subTheme2_C}>
                      <Text fontWeight={`700`} color={Theme.subTheme2_C}>
                        Read More
                      </Text>
                      <Wrapper width={`auto`} margin={`5px 0 0`}>
                        <RiArrowRightSLine
                          fontSize={`20px`}
                          color={Theme.subTheme2_C}
                        />
                      </Wrapper>
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
                Physical Cyber Security,
              </CommonSubTitle>
              <CommonSubTitle margin={`0`} fontSize={`35px`} lineHeight={`1.2`}>
                Now a must, not a choice.
              </CommonSubTitle>
              <Wrapper margin={`20px 0`} al={`flex-start`}>
                <Text
                  fontSize={`18px`}
                  color={Theme.greyTheme3_C}
                  lineHeight={`1.4`}
                  fontWeight={`400`}
                >
                  There will be more and more cases similar to these,
                </Text>
                <Text
                  fontSize={`18px`}
                  color={Theme.greyTheme3_C}
                  lineHeight={`1.4`}
                  fontWeight={`400`}
                >
                  and the damage to companies will increase.
                </Text>
                <Text
                  fontSize={`18px`}
                  color={Theme.greyTheme3_C}
                  lineHeight={`1.4`}
                  fontWeight={`400`}
                >
                  Do you still think cyber security is just about software?
                </Text>
              </Wrapper>
              <Wrapper al={`flex-start`}>
                <Link to="/security">
                  <Button dr={`row`}>
                    Learn more
                    <Wrapper width={`auto`} margin={`5px 0 0`}>
                      <RiArrowRightSLine fontSize={`20px`} />
                    </Wrapper>
                  </Button>
                </Link>
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
                    <Wrapper width={`auto`} margin={`5px 0 0`}>
                      <RiArrowRightSLine
                        fontSize={`20px`}
                        color={Theme.white_C}
                      />
                    </Wrapper>
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
                    <Wrapper width={`auto`} margin={`5px 0 0`}>
                      <RiArrowRightSLine
                        fontSize={`20px`}
                        color={Theme.white_C}
                      />
                    </Wrapper>
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
          <Wrapper margin={`0 0 50px`}>
            <Text fontSize={`16px`} color={Theme.white_C}>
              valuable assets and data of the company,
            </Text>
            <CommonSubTitle
              margin={`10px 0 0`}
              fontSize={`27px`}
              fontWeight={`700`}
              color={Theme.subTheme3_C}
              lineHeight={`1.4`}
            >
              Malicious or criminal
            </CommonSubTitle>
            <CommonSubTitle
              margin={`0 0 5px`}
              fontSize={`27px`}
              fontWeight={`700`}
              color={Theme.white_C}
            >
              <SpanText color={Theme.subTheme3_C}>attack&nbsp;</SpanText> is
              highest reason
            </CommonSubTitle>

            <Text
              fontSize={`18px`}
              color={Theme.white_C}
              margin={`38px 0 39px`}
            >
              Major Causes of Data Breach
            </Text>

            <Wrapper isRelative={true}>
              <Image
                width={`90%`}
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2FMM16%2F%E1%84%8B%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3-%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%92%E1%85%A7%E1%86%BC%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%84%91%E1%85%B3.png?alt=media&token=f768784f-472f-4aec-ab57-738c9c1c0dea`}
              />
              <Wrapper
                top={`0`}
                right={`22.5%`}
                isAbsolute={true}
                width={`28.3%`}
              >
                <PieMobileImage
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM16%2F%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%92%E1%85%A7%E1%86%BC%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%84%91%E1%85%B3.png?alt=media&token=a0c61985-5e4f-492e-9766-379bc5e221dc`}
                />
                <Text
                  isAbsolute={true}
                  top={`18%`}
                  right={`30%`}
                  color={Theme.white_C}
                  fontSize={`14px`}
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

            <Text fontSize={`18px`} color={Theme.white_C} margin={`96px 0 0`}>
              Data Leak Damage
            </Text>
            <Text fontSize={`12px`} color={Theme.white_C} margin={`0 0 20px`}>
              (in 100 million dollars)
            </Text>

            <Wrapper al={`flex-start`} padding={`0 0 0 36px`}>
              <Text fontSize={`12px`} color={Theme.white_C} fontWeight={`700`}>
                {isCheck ? `2018` : `2017`}
              </Text>

              <Wrapper dr={`row`} ju={`flex-start`} margin={`15px 0 0`}>
                <Wrapper
                  fontSize={`12px`}
                  color={Theme.white_C}
                  width={`100%`}
                  al={`flex-start`}
                  margin={`0 0 5px`}
                >
                  Leakage Cost
                </Wrapper>
                <GraphWrapper
                  width={graphValue}
                  bgColor={Theme.basicTheme_C}
                  height={`15px`}
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

              <Wrapper dr={`row`} ju={`flex-start`} margin={`14px 0 0`}>
                <Wrapper
                  fontSize={`12px`}
                  color={Theme.white_C}
                  width={`100%`}
                  textAlign={`left`}
                  al={`flex-start`}
                  margin={`0 0 5px`}
                >
                  Follow-up Processign Cost
                </Wrapper>
                <GraphWrapper
                  width={graphValue2}
                  bgColor={Theme.white_C}
                  height={`15px`}
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
                margin={`17px 0 78px`}
                color={Theme.greyTheme7_C}
                fontSize={`12px`}
                fontWeight={`300`}
              >
                Source : Ponemon 2018 Cost of a Data Breach Study
              </Text>
            </Wrapper>
          </Wrapper>
        </RsWrapper>

        <Wrapper bgColor={Theme.black_C}>
          <Text
            fontSize={`16px`}
            color={Theme.white_C}
            fontWeight={`400`}
            margin={`40px 0 10px`}
          >
            Malware Intrusion and Data Leak
          </Text>
          <CommonSubTitle
            fontSize={`27px`}
            color={Theme.subTheme3_C}
            fontWeight={`700`}
            margin={`0`}
            lineHeight={`1.8`}
          >
            Types and Means 
          </CommonSubTitle>
          <CommonSubTitle
            fontSize={`27px`}
            color={Theme.white_C}
            fontWeight={`700`}
            margin={`0 0 48px`}
          >
            of Technology Leakage
          </CommonSubTitle>

          <Image
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM16%2F%E1%84%8B%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3-%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%A5-mobile.png?alt=media&token=7a5ba78f-1be3-4c1b-a743-ebcd114fcf5a`}
          />

          <Image
            margin={`30px 0`}
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM16%2F%E1%84%8B%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3-%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%A5-mobile2.png?alt=media&token=28588637-409b-43a7-82e5-466413ad0c97`}
          />
        </Wrapper>

        <Text
          fontSize={`16px`}
          color={Theme.white_C}
          fontWeight={`400`}
          margin={`44px 0 0`}
        >
          Major Cause of Industrial System Malware
        </Text>
        <CommonSubTitle
          fontWeight={`700`}
          fontSize={`27px`}
          color={Theme.subTheme3_C}
          margin={`5px 0`}
        >
          Removable data storage
        </CommonSubTitle>
        <CommonSubTitle
          fontWeight={`700`}
          fontSize={`27px`}
          margin={`0`}
          color={Theme.white_C}
        >
          is still a major threat
        </CommonSubTitle>
        <CommonSubTitle
          fontWeight={`700`}
          fontSize={`27px`}
          margin={`5px 0 0`}
          color={Theme.white_C}
        >
          to security
        </CommonSubTitle>

        <Image
          margin={`27px 0 56px`}
          height={`235px`}
          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2FMM16%2F%E1%84%8B%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3-%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%A5-mobile3.png?alt=media&token=f798f058-8b20-4ecd-8b16-4d71b81299c8`}
        />

        <RsWrapper>
          <Text color={Theme.white_C} fontSize={`16px`}>
            Malware Intrusion and Data Leak
          </Text>
          <Text
            fontSize={`25px`}
            lineHeight={`1.2`}
            color={Theme.subTheme3_C}
            fontWeight={`700`}
          >
            How many people 
          </Text>
          <Text
            fontSize={`25px`}
            lineHeight={`1.2`}
            color={Theme.white_C}
            fontWeight={`700`}
          >
            would plug in a USB drive
          </Text>
          <Text
            fontSize={`25px`}
            lineHeight={`1.2`}
            color={Theme.white_C}
            fontWeight={`700`}
          >
            that they picked up
          </Text>
          <Text
            fontSize={`25px`}
            lineHeight={`1.2`}
            color={Theme.white_C}
            fontWeight={`700`}
          >
            on the street?
          </Text>

          <Text
            fontSize={`18px`}
            color={Theme.white_C}
            fontWeight={`700`}
            margin={`19px 0 0`}
          >
            USB drive picked up on the street
          </Text>
          <Text fontSize={`18px`} color={Theme.white_C} fontWeight={`700`}>
            is used by an employee
          </Text>
          <Text fontSize={`18px`} color={Theme.white_C} fontWeight={`700`}>
            on an in-house PC
          </Text>

          <Image
            margin={`47px 0 0`}
            width={`80%`}
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2FMM16%2F%E1%84%8B%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3-%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%A5-3.png?alt=media&token=de0e4a82-53f7-40d1-9a71-a8384b4a0397`}
          />
          <Wrapper
            width={`80%`}
            bgColor={`rgba(255,255,255,0.2)`}
            padding={`20px`}
            al={`flex-start`}
          >
            <Text fontSize={`14px`} fontWeight={`300`} color={Theme.white_C}>
              In 2011, the US Department of
            </Text>
            <Text fontSize={`14px`} fontWeight={`300`} color={Theme.white_C}>
              Homeland Security US-CERT (United
            </Text>
            <Text fontSize={`14px`} fontWeight={`300`} color={Theme.white_C}>
              States Computer Emergency Readiness
            </Text>
            <Text fontSize={`14px`} fontWeight={`300`} color={Theme.white_C}>
              Team) conducted an experiment on
            </Text>
            <Text fontSize={`14px`} fontWeight={`300`} color={Theme.white_C}>
              security staff. ‘How easily hackers can
            </Text>
            <Text fontSize={`14px`} fontWeight={`300`} color={Theme.white_C}>
              access the system through employees’.
            </Text>
            <Text fontSize={`14px`} fontWeight={`300`} color={Theme.white_C}>
              The experiment was to drop a USB
            </Text>
            <Text fontSize={`14px`} fontWeight={`300`} color={Theme.white_C}>
              drive into the parking lot of the security
            </Text>
            <Text fontSize={`14px`} fontWeight={`300`} color={Theme.white_C}>
              department and see if the employees
            </Text>
            <Text fontSize={`14px`} fontWeight={`300`} color={Theme.white_C}>
              were using it on the in-house PC. What
            </Text>
            <Text fontSize={`14px`} fontWeight={`300`} color={Theme.white_C}>
              was the result? About 60% of them
            </Text>
            <Text fontSize={`14px`} fontWeight={`300`} color={Theme.white_C}>
              used a USB drive which fell to the
            </Text>
            <Text fontSize={`14px`} fontWeight={`300`} color={Theme.white_C}>
              ground, and 90% used a USB drive or
            </Text>
            <Text fontSize={`14px`} fontWeight={`300`} color={Theme.white_C}>
              CD with official logo of DHS. “I forgot all
            </Text>
            <Text fontSize={`14px`} fontWeight={`300`} color={Theme.white_C}>
              the risks that there might be malware
            </Text>
            <Text fontSize={`14px`} fontWeight={`300`} color={Theme.white_C}>
              in the USB and used it on my PC.” The
            </Text>
            <Text fontSize={`14px`} fontWeight={`300`} color={Theme.white_C}>
              biggest security vulnerability is the
            </Text>
            <Text fontSize={`14px`} fontWeight={`300`} color={Theme.white_C}>
              employee’s “idiocy”.
            </Text>

            <ATag
              width={`auto`}
              href="https://www.bloomberg.com/news/articles/2011-06-27/human-errors-fuel-hacking-as-test-shows-nothing-prevents-idiocy"
            >
              <Text
                margin={`25px 0 0`}
                color={Theme.subTheme2_C}
                fontSize={`14px`}
                borderBottom={`1px solid ${Theme.subTheme2_C}`}
              >
                Source : Bloomberg
              </Text>
            </ATag>
          </Wrapper>

          <Text fontSize={`16px`} color={Theme.white_C} margin={`55px 0 0`}>
            Malware Intrusion and Data Leak
          </Text>
          <Text fontSize={`20px`} color={Theme.white_C} fontWeight={`700`}>
            A Single Malware Infection
          </Text>

          <Text
            color={Theme.white_C}
            fontSize={`20px`}
            fontWeight={`700`}
            margin={`0 0 36px`}
          >
            Can Cause
            <SpanText color={Theme.subTheme3_C}>
              &nbsp;Catastrophic&nbsp;
            </SpanText>
            Damage
          </Text>

          <Wrapper padding={`0 36px`} al={`flex-start`}>
            <Image
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM16%2F%E1%84%8B%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3-image-4.png?alt=media&token=2a959f13-5c4a-4562-95dc-8f0e664f163f`}
            />

            <Text
              isGotham={true}
              color={Theme.white_C}
              fontSize={`18px`}
              margin={`20px 0 11px`}
            >
              Two Us Power plants infected with malware spread via USB drive
            </Text>

            <Text
              margin={`11px 0 15px`}
              color={Theme.greyTheme3_C}
              fontSize={`14px`}
              fontWeight={`300`}
            >
              Two US power plant networks were infected with malware that was
              spread by a USB drive plugged in by a subcontractor, who wanted to
              check on production facilities.
            </Text>

            <Text
              fontSize={`14px`}
              fontWeight={`300`}
              color={Theme.greyTheme3_C}
              letterSpacing={`0.4px`}
            >
              The malware affected 10 PCs in the turbine management system and
              system downtime, which caused a 3-week delay in system restart.
            </Text>
            <Text
              fontSize={`14px`}
              fontWeight={`300`}
              color={Theme.greyTheme3_C}
              letterSpacing={`0.4px`}
            >
              Supervisory Control and Data Acquisition (SCADA) or Industrial
              Control System (ICS), that is, industrial control systems are
              especially vulnerable to immediate threats of machine interruption
              or remote attack. Malware infection path was a USB port this time,
              but all other open data ports were equally vulnerable.
            </Text>

            <ATag
              width={`auto`}
              href="https://arstechnica.com/information-technology/2013/01/two-us-power-plants-infected-with-malware-spread-via-usb-drive/"
            >
              <Wrapper
                margin={`10px 0 0`}
                color={Theme.subTheme2_C}
                dr={`row`}
                width={`auto`}
              >
                <Text fontSize={`14px`} fontWeight={`700`}>
                  See articles
                </Text>

                <RiArrowRightSLine size={`20`} />
              </Wrapper>
            </ATag>
          </Wrapper>

          <Text
            fontSize={`16px`}
            color={Theme.white_C}
            fontWeight={`300`}
            margin={`76px 0 0`}
          >
            Malware Intrusion and Data Leak
          </Text>
          <Text
            fontSize={`27px`}
            fontWeight={`700`}
            lineHeight={`1.4`}
            color={Theme.subTheme3_C}
          >
            One Small Act of
          </Text>
          <Text
            fontSize={`27px`}
            fontWeight={`700`}
            lineHeight={`1.4`}
            color={Theme.white_C}
          >
            Thoughtlessness
          </Text>

          <Wrapper padding={`26px 36px 0`} al={`flex-start`}>
            <Image
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM16%2F%E1%84%8B%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3-image-5.png?alt=media&token=a58af519-738d-4d57-83b2-b23c7f06b6c8`}
            />

            <Text
              color={Theme.white_C}
              fontSize={`18px`}
              isGotham={true}
              margin={`30px 0 0`}
            >
              Under worm assault, military
            </Text>

            <Text
              color={Theme.white_C}
              fontSize={`18px`}
              isGotham={true}
              margin={`0 0 16px`}
            >
              bans disks, USB drives
            </Text>

            <Text
              fontSize={`14px`}
              color={Theme.greyTheme3_C}
              fontWeight={`300`}
              margin={`0 0 15px`}
              letterSpacing={`0.4px`}
            >
              An example of a cyber attack designed to destroy nuclear
              centrifuges is the Stuxnet worm attack, which infected the
              Supervisory Control and Data Acquisition (SCADA) system at Iran’s
              Bushehr nuclear power plant. Through a USB drive, malicious codes
              spread throughout the internal network, infecting more than 60,000
              PCs and halting the plant’s operation for two years.
            </Text>

            <Text
              fontSize={`14px`}
              color={Theme.greyTheme3_C}
              fontWeight={`300`}
            >
              Many companies, including power plants, the military and others,
              have already taken measures to prohibit the use of removable data
              storage devices such as DISK and CDs for increased cyber security.
            </Text>
          </Wrapper>

          <Text fontSize={`14px`} color={Theme.white_C} margin={`53px 0 0`}>
            Do you know the USB KILLER?
          </Text>
          <Text fontSize={`27px`} color={Theme.white_C} fontWeight={`700`}>
            More popular and
          </Text>
          <Text
            fontSize={`27px`}
            color={Theme.white_C}
            fontWeight={`700`}
            margin={`0 0 26px`}
          >
            closer <SpanText color={Theme.subTheme3_C}>attack methods</SpanText>
          </Text>

          <Image
            width={`80%`}
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM16%2F%E1%84%8B%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3-image-6.png?alt=media&token=a0523653-4f02-472a-8093-d9908947f10e`}
          />

          <Wrapper padding={`26px 36px 39px`} al={`flex-start`}>
            <Text
              color={Theme.greyTheme3_C}
              fontSize={`14px`}
              fontWeight={`300`}
            >
              This easily accessible product is designed to rapidly collect
              current from the USB power source. Once fully charged, it releases
              the high voltage and burns all of the circuits, effectively
              “killing” the computer.
            </Text>

            <Wrapper
              margin={`10px 0 8px`}
              color={Theme.subTheme2_C}
              dr={`row`}
              width={`auto`}
            >
              <Text fontSize={`14px`} fontWeight={`700`}>
                Read More
              </Text>
              <RiArrowRightSLine size={`20`} />
            </Wrapper>
          </Wrapper>

          <Image
            width={`80%`}
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM16%2F%E1%84%8B%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3-image-7.png?alt=media&token=7e42f35d-9437-4eaf-95fc-a3276af132f3`}
          />

          <Wrapper
            padding={`10px 36px 39px`}
            al={`flex-start`}
            margin={`10px 0 39px`}
          >
            <Text
              color={Theme.greyTheme3_C}
              fontSize={`14px`}
              fontWeight={`300`}
            >
              In one case, the owner of a local PC Cafe intentionally damaged
              approximately 40 PCs of a competitor using the USB Killer.
            </Text>
          </Wrapper>

          <Image
            width={`80%`}
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM16%2F%E1%84%8B%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3-image-8.png?alt=media&token=880d36f6-63bf-4c23-8682-7bd5534d7600`}
          />

          <Wrapper al={`flex-start`} margin={`0 0 54px`} padding={`0 36px`}>
            <Text
              margin={`10px 0`}
              color={Theme.greyTheme3_C}
              fontSize={`14px`}
              fontWeight={`300`}
            >
              Recently, in April 2019, a college student in the U.S. used a USB
              Killer on his school system, causing $58,000 in damage.
            </Text>

            <ATag
              width={`auto`}
              href="https://www.theverge.com/2019/4/17/18412427/college-saint-rose-student-guilty-usb-killerdestroyed-computers"
            >
              <Wrapper color={Theme.subTheme2_C} dr={`row`} width={`auto`}>
                <Text fontSize={`14px`} fontWeight={`700`}>
                  Read More
                </Text>
                <RiArrowRightSLine size={`20`} />
              </Wrapper>
            </ATag>
          </Wrapper>

          <Wrapper
            isRelative={true}
            width={`302px`}
            height={`302px`}
            ju={`flex-start`}
            al={`flex-start`}
            padding={`40px 16px 16px`}
            margin={`0 0 20px`}
          >
            <Image
              isAbsolute={true}
              top={`0`}
              left={`0`}
              height={`100%`}
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM16%2F%E1%84%8B%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3-mobile-3.png?alt=media&token=2aa3f303-e0e8-4d0b-a6c8-d2740fd43d8c`}
            />
            <Text fontSize={`21px`} fontWeight={`700`} color={Theme.white_C}>
              Physical Cyber Security,
            </Text>
            <Text fontSize={`21px`} fontWeight={`700`} color={Theme.white_C}>
              Now a must, not a choice.
            </Text>
            <Link to="/about">
              <Wrapper
                margin={`10px 0 0`}
                color={Theme.subTheme2_C}
                dr={`row`}
                width={`auto`}
              >
                <Text fontSize={`14px`} fontWeight={`700`}>
                  Learn more
                </Text>
                <RiArrowRightSLine size={`20`} />
              </Wrapper>
            </Link>
          </Wrapper>

          <Wrapper
            isRelative={true}
            width={`302px`}
            height={`200px`}
            al={`flex-start`}
            padding={`0 18px 0`}
            margin={`0 0 10px`}
          >
            <Image
              isAbsolute={true}
              top={`0`}
              left={`0`}
              height={`100%`}
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM16%2F%E1%84%8B%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3-image-10.png?alt=media&token=c57b03a9-a2f5-41d8-80ef-4ff5200d7f90`}
            />
            <Text
              fontSize={`12px`}
              fontWeight={`300`}
              color={Theme.greyTheme3_C}
            >
              USB Port Security
            </Text>
            <Text
              fontSize={`17px`}
              fontWeight={`700`}
              color={Theme.white_C}
              lineHeight={`1.4`}
            >
              Starting point of Port Security,
            </Text>
            <Text
              fontSize={`17px`}
              fontWeight={`700`}
              color={Theme.white_C}
              lineHeight={`1.4`}
            >
              End it with Physical Security.
            </Text>

            <Link to="/security">
              <Wrapper
                margin={`10px 0 0`}
                color={Theme.white_C}
                dr={`row`}
                width={`auto`}
              >
                <Text fontSize={`14px`} fontWeight={`700`}>
                  Learn more
                </Text>
                <RiArrowRightSLine size={`20`} />
              </Wrapper>
            </Link>
          </Wrapper>

          <Wrapper
            isRelative={true}
            width={`302px`}
            height={`200px`}
            al={`flex-start`}
            padding={`0 18px 0`}
            margin={`0 0 54px`}
          >
            <Image
              isAbsolute={true}
              top={`0`}
              left={`0`}
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM16%2F%E1%84%8B%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3-image-11.png?alt=media&token=78526b8e-b773-42f8-8131-3a4385a3d2b3`}
            />
            <Text
              fontSize={`11.5px`}
              fontWeight={`300`}
              color={Theme.greyTheme3_C}
            >
              The essential combination of network security
            </Text>
            <Text
              fontSize={`19px`}
              fontWeight={`700`}
              color={Theme.white_C}
              lineHeight={`1.4`}
            >
              Network &#38; Intranet :
            </Text>
            <Text
              fontSize={`19px`}
              fontWeight={`700`}
              color={Theme.white_C}
              lineHeight={`1.4`}
            >
              Pathway to all assets within
            </Text>
            <Link to="/network">
              <Wrapper
                margin={`10px 0 0`}
                color={Theme.white_C}
                dr={`row`}
                width={`auto`}
              >
                <Text fontSize={`14px`} fontWeight={`700`}>
                  Learn more
                </Text>
                <RiArrowRightSLine size={`20`} />
              </Wrapper>
            </Link>
          </Wrapper>
        </RsWrapper>
      </Wrapper>
    </WholeWrapper>
  );
};

export default withResizeDetector(MM16Presenter);
