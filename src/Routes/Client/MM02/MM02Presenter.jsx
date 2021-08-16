import React, { useEffect, useState } from "react";
import withSplitting from "../../../Lib/withSplitting";
import {
  WholeWrapper,
  Image,
  Text,
  SpanText,
  Wrapper,
  RsWrapper,
  CommonSubTitle,
} from "../../../Components/CommonComponents";
import styled from "styled-components";
import { withResizeDetector } from "react-resize-detector";
import useTitle from "@4leaf.ysh/use-title";
import Theme from "../../../Styles/Theme";
import { RiArrowRightSLine } from "react-icons/ri";
import AnimatedNumber from "animated-number-react";
import { Link } from "react-router-dom";

const SubTitle = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: ${(props) => props.theme.white_C};
  line-height: 1.3;

  @media (max-width: 900px) {
    font-size: 17px;
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

  @media (max-width: 900px) {
    font-size: 14px;
  }
`;

const TempImage = styled(Image)`
  transition: all 1s;
  position: absolute;
  bottom: ${(props) => props.bottom};
  left: 0;
  width: 1800px;
  margin: 0 0 -1300px -400px;
  @media (max-width: 900px) {
    margin: 0 0 -1300px -650px;
    width: 1500px;
  }
  @media (max-width: 700px) {
    margin: 0 0 -640px -330px;
    width: 770px;
  }
`;

const TextWrapper = styled(Wrapper)`
  transition: all 1s;
`;

const MM02Presenter = ({
  width,
  //
  documentRef,
  noteRef,
  textRef,
  numberRef,
  //
  moveLinkHandler,
}) => {
  useTitle(`SMARTKEEPER PRO | ${process.env["HOMEPAGE_NAME"]}`);

  const [pageY, setPageY] = useState(0);
  const [noteImg, setNoteImg] = useState(50);
  const [noteText, setNoteText] = useState(0);
  const [text, setText] = useState(450);
  const [isFirst, setIsFirst] = useState(false);

  const handleScroll = () => {
    const { pageYOffset } = window;

    const noteHeight = noteRef.current.offsetHeight;
    const textHeight = textRef.current.offsetHeight;
    const tempHeight = textRef.current.offsetTop;
    const temp1Height = noteRef.current.offsetTop;

    if (noteHeight > pageYOffset) {
      if (noteImg < 100 && pageYOffset > pageY) {
        setNoteImg(noteImg + 10);
        if (noteText + 50 < 250) setNoteText(noteText + 50);
        else setNoteText(250);
      } else if (noteImg > 0) {
        setNoteImg(noteImg - 10);
        if (noteText - 50 > 0) setNoteText(noteText - 50);
        else setNoteText(0);
      }
    }

    if (tempHeight - 500 < pageYOffset && tempHeight + 400 > pageYOffset) {
      if (pageYOffset - 20 < 262 && pageYOffset > pageY) {
        setText(262);
      } else if (pageYOffset < pageY) {
        setText(text + 20);
      } else {
        setText(text - 20);
      }
    }

    if (pageYOffset > numberRef.current.offsetTop) {
      setIsFirst(true);
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
      setNoteImg(0);
    }, 1000);
  }, []);

  return (
    <WholeWrapper isRelative={true} bgColor={`rgb(0, 0, 0)`}>
      <Wrapper
        overflow={`hidden`}
        height={width < 900 ? (width < 700 ? `600px` : `850px`) : `900px`}
        isRelative={true}
        bgImg={`url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM02%2Fbg.png?alt=media&token=7b66c81b-dde1-4c83-99a2-2efb47dea45d")`}
      >
        <TempImage
          ref={noteRef}
          bottom={`${noteImg}px`}
          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM02%2FKakaoTalk_Photo_2021-07-19-20-18-04.png?alt=media&token=12cd6524-7775-4acd-ab63-cdc1d1feec59`}
        />
        <TextWrapper isAbsolute={true} top={`${noteText}px`} right={`0`}>
          <RsWrapper al={`flex-end`}>
            <Wrapper
              al={`flex-start`}
              margin={
                width < 900
                  ? width < 700
                    ? `90px 24px 0 0`
                    : `140px 40px 0 0`
                  : `100px 0 0`
              }
              width={`auto`}
            >
              <CommonSubTitle
                fontSize={
                  width < 900 ? (width < 700 ? `27px` : `50px`) : `60px`
                }
                fontWeight={`700`}
                lineHeight={`1.4`}
                margin={`0`}
                color={`rgba(255,255,255,0.5)`}
              >
                Smaller
              </CommonSubTitle>
              <CommonSubTitle
                fontSize={
                  width < 900 ? (width < 700 ? `27px` : `50px`) : `60px`
                }
                fontWeight={`700`}
                lineHeight={`1.4`}
                margin={`0`}
                color={`rgba(255,255,255,0.75)`}
              >
                Easier
              </CommonSubTitle>
              <CommonSubTitle
                fontSize={
                  width < 900 ? (width < 700 ? `27px` : `50px`) : `60px`
                }
                fontWeight={`700`}
                lineHeight={`1.4`}
                margin={`0`}
                color={Theme.white_C}
              >
                Longer
              </CommonSubTitle>
              <CommonSubTitle
                fontSize={
                  width < 900 ? (width < 700 ? `27px` : `50px`) : `60px`
                }
                fontWeight={`700`}
                lineHeight={`1.4`}
                margin={`0`}
                color={Theme.white_C}
              >
                Lasting Security.
              </CommonSubTitle>
              <Text
                display={width < 900 ? `none` : `inline`}
                color={Theme.greyTheme7_C}
                margin={`27px 0 0`}
                fontWeight={`400`}
              >
                SMARTKEEPER PRO with hundreds of confidential
              </Text>
              <Text
                display={width < 900 ? `none` : `inline`}
                color={Theme.greyTheme7_C}
                fontWeight={`400`}
              >
                key patterns Available for corporate use only
              </Text>

              <Text
                fontSize={width < 700 ? `14px !important` : `20px`}
                display={width < 900 ? `flex` : `none`}
                color={Theme.greyTheme7_C}
                margin={width < 700 ? `14px 0 0` : `25px 0 0`}
              >
                SMARTKEEPER PRO with hundreds
              </Text>
              <Text
                fontSize={width < 700 ? `14px !important` : `20px`}
                display={width < 900 ? `flex` : `none`}
                color={Theme.greyTheme7_C}
              >
                of confidential key patterns
              </Text>
              <Text
                fontSize={width < 700 ? `14px !important` : `20px`}
                display={width < 900 ? `flex` : `none`}
                color={Theme.greyTheme7_C}
              >
                Available for corporate use only
              </Text>
            </Wrapper>
          </RsWrapper>
        </TextWrapper>
      </Wrapper>
      {/*  */}
      <RsWrapper>
        <Wrapper
          width={`85%`}
          al={`flex-start`}
          margin={
            width < 900
              ? width < 700
                ? `43px 0 0`
                : `80px 0 0`
              : `140px 0 40px`
          }
        >
          <Image
            width={width < 700 ? `301px` : `80%`}
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Fmodify%2FSMARTKEEPER%20PRO_%E1%84%89%E1%85%B3%E1%84%86%E1%85%A1%E1%84%90%E1%85%B3%E1%84%8F%E1%85%B5%E1%84%91%E1%85%A5%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9_1.svg?alt=media&token=a51b4955-3235-4e54-9a3b-153641d73eb7`}
          />
          <Wrapper
            al={`flex-start`}
            display={width < 900 ? `none` : `flex`}
            fontSize={`20px`}
            fontWeight={`700`}
            margin={`10px 0 0`}
            color={Theme.greyTheme3_C}
          >
            SMARTKEEPER PRO Use it with Confidence!
          </Wrapper>
        </Wrapper>

        <Wrapper isRelative={true} ref={textRef}>
          <Image
            margin={
              width < 900 ? (width < 700 ? `33px 0 46px` : `60px 0 90px`) : `0`
            }
            height={width < 900 ? (width < 700 ? `150px` : `300px`) : `493px`}
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM02%2F%E1%84%89%E1%85%B3%E1%84%86%E1%85%A1%E1%84%90%E1%85%B3%E1%84%8F%E1%85%B5%E1%84%91%E1%85%A5%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%20%E1%84%87%E1%85%A2%E1%84%82%E1%85%A5%2001.jpg?alt=media&token=faf1aaa2-6b9a-4953-ab50-8861d643342a`}
          />

          {/* 웹 */}
          <Wrapper
            display={width < 900 ? `none` : `flex`}
            width={`85%`}
            al={`flex-start`}
            margin={`50px 0 0`}
          >
            <CommonSubTitle fontSize={`40px`}>
              End-User Verification
            </CommonSubTitle>
            <Text fontSize={`24px`} color={Theme.greyTheme3_C}>
              Not available on-line for sales to the public. Distributed
              exclusively to verified
            </Text>
            <Text fontSize={`24px`} color={Theme.greyTheme3_C}>
              companies only through proper channels.
            </Text>
            <Text fontSize={`24px`} color={Theme.greyTheme3_C}>
              To ensure key security, there are no exceptions in the
              distribution process.
            </Text>
          </Wrapper>
        </Wrapper>

        {/* mobile */}
        <Wrapper
          display={width < 900 ? `flex` : `none`}
          padding={width < 700 ? `0 0 0 35px` : `0 70px`}
          al={`flex-start`}
        >
          <Text
            fontSize={width < 700 ? `27px` : `45px`}
            color={Theme.white_C}
            fontWeight={`700`}
            margin={width < 700 ? `0 0 11px` : `0 0 20px`}
          >
            End-User Verification
          </Text>

          <Text
            color={Theme.greyTheme3_C}
            fontSize={width < 700 ? `14px !important` : `18px`}
            fontWeight={`400`}
            lineHeight={`1.8`}
            letterSpacing={`0.5px`}
          >
            Not available on-line for sales to the public. Distributed
            exclusively to verified companies only through proper channels.
          </Text>
          <Text
            color={Theme.greyTheme3_C}
            fontSize={width < 700 ? `14px !important` : `18px`}
            fontWeight={`400`}
            lineHeight={`1.8`}
            letterSpacing={`0.5px`}
          >
            To ensure key security, there are no
          </Text>
          <Text
            color={Theme.greyTheme3_C}
            fontSize={width < 700 ? `14px !important` : `18px`}
            fontWeight={`400`}
            lineHeight={`1.8`}
            letterSpacing={`0.5px`}
          >
            exceptions in the distribution process.
          </Text>
        </Wrapper>

        <Image
          height={width < 900 ? `150px` : `493px`}
          margin={
            width < 900
              ? width < 700
                ? `48px 0 42px`
                : `90px 0 80px`
              : `100px 0 50px`
          }
          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM02%2F%E1%84%89%E1%85%B3%E1%84%86%E1%85%A1%E1%84%90%E1%85%B3%E1%84%8F%E1%85%B5%E1%84%91%E1%85%A5%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%20%E1%84%87%E1%85%A2%E1%84%82%E1%85%A5%2002.jpg?alt=media&token=e49e6309-146c-4e3a-9d30-bb9d538a8a69`}
        />

        {/* 웹 */}
        <Wrapper
          display={width < 900 ? `none` : `flex`}
          width={`85%`}
          al={`flex-start`}
          margin={`0 0 100px`}
        >
          <CommonSubTitle fontSize={`40px`}>
            Hundreds of Key Patterns
          </CommonSubTitle>
          <Text fontSize={`24px`} color={Theme.greyTheme3_C}>
            There are hundreds of confidential key patterns available in
            SMARTKEEPER PRO.
          </Text>
          <Text fontSize={`24px`} color={Theme.greyTheme3_C}>
            Each end-user’s confidential key pattern is matched and managed
            exclusively by COMXI.
          </Text>
          <Text fontSize={`24px`} color={Theme.greyTheme3_C}>
            This procedure prevents unauthorized purchases of Universal Lock
            Keys with malicious
          </Text>
          <Text fontSize={`24px`} color={Theme.greyTheme3_C}>
            intent.
          </Text>
        </Wrapper>
      </RsWrapper>

      {/*  */}
      <Wrapper
        height={width < 900 ? (width < 700 ? `800px` : `700px`) : `2000px`}
        attachment={`initial`}
        bgImg={`url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM02%2FSMARTKEEPER-POR-ALL-set_Large.jpg?alt=media&token=431c605f-c5f6-47b1-9354-ff947ed14294")`}
        ref={numberRef}
        ju={width < 900 ? `flex-start` : `center`}
        bgSize={width < 900 && `630px`}
        bgPosition={width < 900 ? `center bottom ` : `center`}
      >
        {/* mobile */}
        <Wrapper
          display={width < 900 ? `flex` : `none`}
          width={`85%`}
          margin={width < 700 ? `16px 0 0` : `35px 0 0`}
          al={`flex-start`}
        >
          <Text
            fontWeight={`700`}
            fontSize={width < 700 ? `30px` : `50px`}
            color={Theme.white_C}
          >
            Hundreds of
          </Text>
          <Text
            fontWeight={`700`}
            fontSize={width < 700 ? `30px` : `50px`}
            color={Theme.white_C}
          >
            Key Patterns
          </Text>

          <Text
            fontSize={width < 700 ? `14px !important` : `20px`}
            color={Theme.greyTheme3_C}
            fontWeight={`400`}
            margin={width < 700 ? `11px 0 0` : `22px 0 0`}
            lineHeight={`1.8`}
            letterSpacing={`0.3px`}
          >
            There are hundreds of confidential key patterns available in
            SMARTKEEPER PRO.
          </Text>
          <Text
            fontSize={width < 700 ? `14px !important` : `20px`}
            color={Theme.greyTheme3_C}
            fontWeight={`400`}
            lineHeight={`1.8`}
            letterSpacing={`0.3px`}
          >
            Each end-user’s confidential key pattern is matched and managed
            exclusively by COMXI. This procedure prevents unauthorized purchases
            of Universal Lock Keys with malicious intent.
          </Text>

          <Image
            width={width < 700 ? `50px` : `70px`}
            margin={`35px 0 0`}
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM03%2Fpro-icon-1.png?alt=media&token=b5b0fd63-cdca-4be7-ae19-932b58f777d8`}
          />

          <Text
            fontSize={width < 700 ? `23px` : `50px`}
            color={Theme.white_C}
            fontWeight={`700`}
            margin={width < 700 ? `18px 0 0` : `30px 0 0`}
          >
            Complete product line-up,
          </Text>
          <Text
            fontSize={width < 700 ? `23px` : `50px`}
            color={Theme.white_C}
            fontWeight={`700`}
            margin={width < 700 ? `0 0 11px` : `0 0 20px`}
          >
            Convenient Key Management
          </Text>

          <Text
            fontSize={width < 700 ? `18px !important` : `24px`}
            color={Theme.greyTheme3_C}
          >
            The ability to manage 40+
          </Text>
          <Text
            fontSize={width < 700 ? `18px !important` : `24px`}
            color={Theme.greyTheme3_C}
          >
            products with ONE key.
          </Text>
        </Wrapper>

        {/* web */}
        <RsWrapper display={width < 900 ? `none` : `flex`}>
          <Wrapper
            al={`flex-start`}
            width={`auto`}
            margin={`100px 0`}
            ju={`flex-start`}
            height={`100%`}
          >
            <Image
              width={`80px`}
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM03%2Fpro-icon-1.png?alt=media&token=b5b0fd63-cdca-4be7-ae19-932b58f777d8`}
            />

            <CommonSubTitle
              fontSize={`36px`}
              fontWeight={`700`}
              margin={`20px 0 0`}
            >
              Complete product line-up,
            </CommonSubTitle>
            <CommonSubTitle
              fontSize={`36px`}
              fontWeight={`700`}
              margin={`10px 0 0`}
            >
              Convenient Key Management
            </CommonSubTitle>

            <Wrapper width={`auto`} margin={`30px 0`} al={`flex-start`}>
              <Text fontSize={`25px`} color={Theme.greyTheme3_C}>
                The ability to manage 40+ products with ONE key.
              </Text>
            </Wrapper>

            <Wrapper dr={`row`} al={`flex-start`} ju={`flex-start`}>
              <Wrapper
                width={`auto`}
                margin={`0 85px 0 0`}
                ju={`flex-start`}
                al={`flex-start`}
              >
                <Wrapper
                  width={`auto`}
                  al={`flex-start`}
                  height={`50px`}
                  ju={`flex-start`}
                >
                  <Text
                    fontSize={`22px`}
                    fontWeight={`700`}
                    color={Theme.white_C}
                  >
                    Desktop
                  </Text>
                </Wrapper>
                <Wrapper dr={`row`} al={`flex-end`}>
                  <Text
                    fontSize={`60px`}
                    color={Theme.white_C}
                    lineHeight={`1.0`}
                    fontWeight={`700`}
                  >
                    {!isFirst ? (
                      `0`
                    ) : (
                      <AnimatedNumber
                        className="19"
                        value={19}
                        formatValue={(value) => value.toFixed(0)}
                        duration={1500}
                      />
                    )}
                  </Text>
                  <Text
                    margin={`0 0 0 5px`}
                    color={Theme.white_C}
                    fontWeight={`400`}
                  >
                    products
                  </Text>
                </Wrapper>
              </Wrapper>

              <Wrapper
                width={`auto`}
                margin={`0 85px 0 0`}
                ju={`flex-start`}
                al={`flex-start`}
              >
                <Wrapper
                  width={`auto`}
                  al={`flex-start`}
                  height={`50px`}
                  ju={`flex-start`}
                >
                  <Text
                    fontSize={`22px`}
                    fontWeight={`700`}
                    color={Theme.white_C}
                  >
                    Laptop
                  </Text>
                </Wrapper>
                <Wrapper dr={`row`} al={`flex-end`}>
                  <Text
                    fontSize={`60px`}
                    color={Theme.white_C}
                    lineHeight={`1.0`}
                    fontWeight={`700`}
                  >
                    {!isFirst ? (
                      `0`
                    ) : (
                      <AnimatedNumber
                        className="19"
                        value={13}
                        formatValue={(value) => value.toFixed(0)}
                        duration={1500}
                      />
                    )}
                  </Text>
                  <Text
                    margin={`0 0 0 5px`}
                    color={Theme.white_C}
                    fontWeight={`400`}
                  >
                    products
                  </Text>
                </Wrapper>
              </Wrapper>
              <Wrapper
                width={`auto`}
                margin={`0 85px 0 0`}
                ju={`flex-start`}
                al={`flex-start`}
              >
                <Wrapper
                  width={`auto`}
                  al={`flex-start`}
                  height={`50px`}
                  ju={`flex-start`}
                >
                  <Text
                    fontSize={`14px`}
                    fontWeight={`700`}
                    color={Theme.white_C}
                  >
                    Network Switch &#38;
                  </Text>
                  <Text
                    fontSize={`14px`}
                    fontWeight={`700`}
                    color={Theme.white_C}
                  >
                    Server
                  </Text>
                </Wrapper>
                <Wrapper dr={`row`} al={`flex-end`}>
                  <Text
                    fontSize={`60px`}
                    color={Theme.white_C}
                    lineHeight={`1.0`}
                    fontWeight={`700`}
                  >
                    {!isFirst ? (
                      `0`
                    ) : (
                      <AnimatedNumber
                        className="19"
                        value={21}
                        formatValue={(value) => value.toFixed(0)}
                        duration={1500}
                      />
                    )}
                  </Text>
                  <Text
                    margin={`0 0 0 5px`}
                    color={Theme.white_C}
                    fontWeight={`400`}
                  >
                    products
                  </Text>
                </Wrapper>
              </Wrapper>
              <Wrapper width={`auto`}>
                <Wrapper
                  width={`auto`}
                  al={`flex-start`}
                  height={`50px`}
                  ju={`flex-start`}
                >
                  <Text
                    fontSize={`22px`}
                    fontWeight={`700`}
                    color={Theme.white_C}
                  >
                    Other Device
                  </Text>
                </Wrapper>
                <Wrapper dr={`row`} al={`flex-end`}>
                  <Text
                    fontSize={`60px`}
                    color={Theme.white_C}
                    lineHeight={`1.0`}
                    fontWeight={`700`}
                  >
                    {!isFirst ? (
                      `0`
                    ) : (
                      <AnimatedNumber
                        className="19"
                        value={18}
                        formatValue={(value) => value.toFixed(0)}
                        duration={1500}
                      />
                    )}
                  </Text>
                  <Text
                    margin={`0 0 0 5px`}
                    color={Theme.white_C}
                    fontWeight={`400`}
                  >
                    products
                  </Text>
                </Wrapper>
              </Wrapper>
            </Wrapper>

            <Image
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM03%2Fpro-icon-2.png?alt=media&token=d5d676c1-56d5-495e-89d0-d6f33b364d6d`}
              width={`80px`}
              margin={`200px 0 20px`}
            />

            <Wrapper width={`auto`} al={`flex-start`}>
              <Text color={Theme.greyTheme3_C} fontSize={`25px`}>
                SMARTKEEPER PRO’s complete line-up not only includes locks for
                everyday use ports,
              </Text>
              <Text color={Theme.greyTheme3_C} fontSize={`25px`}>
                such as USB, USB-C and RJ45 ports, but for uncommon ports, such
                as ODD, Micro-B,
              </Text>
              <Text color={Theme.greyTheme3_C} fontSize={`25px`}>
                BNC ports, as well.
              </Text>
            </Wrapper>

            <Wrapper
              dr={`row`}
              width={`auto`}
              ju={`flex-start`}
              al={`flex-start`}
              margin={`50px 0 20px`}
            >
              <Wrapper width={`auto`} margin={`0 50px 0 0`} ju={`flex-start`}>
                <Wrapper width={`auto`} height={`45px`}>
                  <Image
                    width={`auto`}
                    height={`30px`}
                    objectFit={`contain`}
                    src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2FUSB(USB%20Type-A).svg?alt=media&token=67984156-1155-4aac-bf52-8063413d52ce`}
                  />
                </Wrapper>
                <Text
                  color={Theme.white_C}
                  fontSize={`11px`}
                  margin={`10px 0 0`}
                  fontWeight={`300`}
                >
                  USB Type-A
                </Text>
              </Wrapper>
              <Wrapper width={`auto`} margin={`0 50px 0 0`} ju={`flex-start`}>
                <Wrapper width={`auto`} height={`45px`}>
                  <Image
                    width={`auto`}
                    height={`30px`}
                    objectFit={`contain`}
                    src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM02%2F%E1%84%89%E1%85%B3%E1%84%86%E1%85%A1%E1%84%90%E1%85%B3%E1%84%8F%E1%85%B5%E1%84%91%E1%85%A5%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9-icon.png?alt=media&token=78cfd0b8-6d90-4f14-a651-668b1d5dd584`}
                  />
                </Wrapper>
                <Text
                  color={Theme.white_C}
                  fontSize={`11px`}
                  margin={`10px 0 0`}
                  fontWeight={`300`}
                >
                  USB Type-C
                </Text>
              </Wrapper>
              <Wrapper width={`auto`} margin={`0 50px 0 0`} ju={`flex-start`}>
                <Wrapper width={`auto`} height={`45px`}>
                  <Image
                    width={`auto`}
                    height={`45px`}
                    objectFit={`contain`}
                    src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2FRJ11(RJ-11).svg?alt=media&token=cb9891b3-67a5-40c8-8f95-3c6741116ced`}
                  />
                </Wrapper>
                <Text
                  color={Theme.white_C}
                  fontSize={`11px`}
                  margin={`10px 0 0`}
                  fontWeight={`300`}
                >
                  RJ-11
                </Text>
              </Wrapper>
              <Wrapper width={`auto`} margin={`0 50px 0 0`} ju={`flex-start`}>
                <Wrapper width={`auto`} height={`45px`}>
                  <Image
                    width={`auto`}
                    height={`45px`}
                    objectFit={`contain`}
                    src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2FRJ45(RJ-45%2C%20Ethernet%20RJ-45).svg?alt=media&token=7d8d6406-3dca-4e17-97bd-d1264b28530d`}
                  />
                </Wrapper>
                <Text
                  color={Theme.white_C}
                  fontSize={`11px`}
                  margin={`10px 0 0`}
                  fontWeight={`300`}
                >
                  RJ-45
                </Text>
              </Wrapper>
              <Wrapper width={`auto`} margin={`0 50px 0 0`} ju={`flex-start`}>
                <Wrapper width={`auto`} height={`45px`}>
                  <Image
                    width={`auto`}
                    height={`45px`}
                    objectFit={`contain`}
                    src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2FQSFP%20Transceiver.svg?alt=media&token=d810f8d0-bfe2-4c53-adc1-a112ca3cf30c`}
                  />
                </Wrapper>
                <Text
                  color={Theme.white_C}
                  fontSize={`11px`}
                  margin={`10px 0 0`}
                  fontWeight={`300`}
                >
                  QSFP
                </Text>
                <Text
                  color={Theme.white_C}
                  fontSize={`14px`}
                  fontWeight={`300`}
                >
                  Transceiver
                </Text>
              </Wrapper>
              <Wrapper width={`auto`} margin={`0 50px 0 0`} ju={`flex-start`}>
                <Wrapper width={`auto`} height={`45px`}>
                  <Image
                    width={`auto`}
                    height={`45px`}
                    objectFit={`contain`}
                    src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2FSFP%20Transceiver.svg?alt=media&token=43f4d232-5fd9-42d7-ab7f-3409476fb9ff`}
                  />
                </Wrapper>
                <Text
                  color={Theme.white_C}
                  fontSize={`11px`}
                  margin={`10px 0 0`}
                  fontWeight={`300`}
                >
                  SFP
                </Text>
                <Text
                  color={Theme.white_C}
                  fontSize={`14px`}
                  fontWeight={`300`}
                >
                  Transceiver
                </Text>
              </Wrapper>
              <Wrapper width={`auto`} margin={`0 50px 0 0`} ju={`flex-start`}>
                <Wrapper width={`auto`} height={`45px`}>
                  <Image
                    width={`auto`}
                    height={`45px`}
                    objectFit={`contain`}
                    src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2FSFP%20Port%20(Mini%20GBIC).svg?alt=media&token=b2ef4865-ef70-4b08-9dcb-5a4da57d6b73`}
                  />
                </Wrapper>
                <Text
                  color={Theme.white_C}
                  fontSize={`11px`}
                  margin={`10px 0 0`}
                  fontWeight={`300`}
                >
                  SFP Port
                </Text>
                <Text
                  color={Theme.white_C}
                  fontSize={`14px`}
                  fontWeight={`300`}
                >
                  (Mini GBIC)
                </Text>
              </Wrapper>
              <Wrapper width={`auto`}>
                <Wrapper width={`auto`} height={`45px`}>
                  <Image
                    width={`90px`}
                    height={`40px`}
                    objectFit={`contain`}
                    src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2FGBIC%20Port.svg?alt=media&token=59eb23c5-245e-43b1-9cb7-4e13534ebec8`}
                  />
                </Wrapper>
                <Text
                  color={Theme.white_C}
                  fontSize={`11px`}
                  margin={`10px 0 0`}
                  fontWeight={`300`}
                >
                  GBIC Port
                </Text>
              </Wrapper>
            </Wrapper>

            <Wrapper dr={`row`} ju={`flex-start`} al={`flex-start`}>
              <Wrapper width={`auto`} margin={`0 50px 0 0`} ju={`flex-start`}>
                <Wrapper width={`auto`} height={`50px`}>
                  <Image
                    width={`auto`}
                    height={`50px`}
                    objectFit={`contain`}
                    src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2Ffemale%20BNC%20Connector.svg?alt=media&token=700ebe76-67b6-47a6-90ec-f73643f0f7e6`}
                  />
                </Wrapper>
                <Text
                  color={Theme.white_C}
                  fontSize={`11px`}
                  margin={`10px 0 0`}
                  fontWeight={`300`}
                >
                  female BNC
                </Text>
                <Text
                  color={Theme.white_C}
                  fontSize={`14px`}
                  fontWeight={`300`}
                >
                  Connector
                </Text>
              </Wrapper>

              <Wrapper width={`auto`} margin={`0 50px 0 0`} ju={`flex-start`}>
                <Wrapper width={`auto`} height={`50px`}>
                  <Image
                    width={`auto`}
                    height={`40px`}
                    objectFit={`contain`}
                    src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2FRF%20Connector.svg?alt=media&token=41442fcf-01af-41bf-bf98-2e18f166c635`}
                  />
                </Wrapper>
                <Text
                  color={Theme.white_C}
                  fontSize={`11px`}
                  margin={`10px 0 0`}
                  fontWeight={`300`}
                >
                  RF Connector
                </Text>
              </Wrapper>

              <Wrapper width={`auto`}>
                <Wrapper width={`auto`} height={`50px`}>
                  <Image
                    width={`auto`}
                    height={`50px`}
                    objectFit={`contain`}
                    src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2FOptical%20Disc%20Drive.svg?alt=media&token=4167e33b-cb79-45da-8b47-31f57d29d3cd`}
                  />
                </Wrapper>
                <Text
                  color={Theme.white_C}
                  fontSize={`11px`}
                  margin={`10px 0 0`}
                  fontWeight={`300`}
                >
                  Optical Disc Drive
                </Text>
                <Text
                  color={Theme.white_C}
                  fontSize={`14px`}
                  fontWeight={`300`}
                >
                  (DVD/CD-ROM)
                </Text>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </RsWrapper>
      </Wrapper>
      {/* mobile */}
      <Wrapper
        width={`85%`}
        margin={width < 700 ? `23px 0 0` : `50px 0 0`}
        display={width < 900 ? `flex` : `none`}
        al={`flex-start`}
      >
        <Wrapper dr={`row`} margin={width < 700 ? `40px 0 0` : `80px 0 0`}>
          <Wrapper width={`50%`} al={`flex-start`}>
            <Text
              fontSize={width < 700 ? `20px !important` : `30px`}
              color={Theme.white_C}
              fontWeight={`600`}
            >
              Desktop
            </Text>
            <Wrapper
              dr={`row`}
              margin={width < 700 ? `20px 0 0` : `40px 0 0`}
              al={`flex-end`}
              ju={`flex-start`}
            >
              <Text
                fontSize={width < 700 ? `55px !important` : `80px`}
                color={Theme.white_C}
                margin={`0 8px 0 0`}
                lineHeight={`1.0`}
                fontWeight={`700`}
              >
                {!isFirst ? (
                  `0`
                ) : (
                  <AnimatedNumber
                    className="19"
                    value={19}
                    formatValue={(value) => value.toFixed(0)}
                    duration={1500}
                  />
                )}
              </Text>

              <Text
                fontSize={width < 700 ? `14px !important` : `18px`}
                color={Theme.white_C}
                fontWeight={`300`}
                margin={`0 0 3px`}
              >
                Products
              </Text>
            </Wrapper>
          </Wrapper>

          <Wrapper width={`50%`} al={`flex-start`}>
            <Text
              fontSize={width < 700 ? `20px !important` : `30px`}
              color={Theme.white_C}
              fontWeight={`600`}
            >
              Laptop
            </Text>
            <Wrapper
              dr={`row`}
              margin={width < 700 ? `20px 0 0` : `40px 0 0`}
              al={`flex-end`}
              ju={`flex-start`}
            >
              <Text
                fontSize={width < 700 ? `55px !important` : `80px`}
                color={Theme.white_C}
                margin={`0 8px 0 0`}
                lineHeight={`1.0`}
                fontWeight={`700`}
              >
                {!isFirst ? (
                  `0`
                ) : (
                  <AnimatedNumber
                    className="19"
                    value={13}
                    formatValue={(value) => value.toFixed(0)}
                    duration={1500}
                  />
                )}
              </Text>

              <Text
                fontSize={width < 700 ? `14px !important` : `18px`}
                color={Theme.white_C}
                fontWeight={`300`}
                margin={`0 0 3px`}
              >
                Products
              </Text>
            </Wrapper>
          </Wrapper>
        </Wrapper>

        <Wrapper dr={`row`} margin={width < 700 ? `30px 0 0` : `60px 0 0`}>
          <Wrapper width={`50%`} al={`flex-start`}>
            <Text
              fontSize={width < 700 ? `12px !important` : `20px`}
              color={Theme.white_C}
              fontWeight={`600`}
            >
              Network Switch &#38;
            </Text>
            <Text
              fontSize={width < 700 ? `12px !important` : `20px`}
              color={Theme.white_C}
              fontWeight={`600`}
            >
              Server
            </Text>
            <Wrapper
              dr={`row`}
              margin={width < 700 ? `10px 0 0` : `20px 0 0`}
              al={`flex-end`}
              ju={`flex-start`}
            >
              <Text
                fontSize={width < 700 ? `55px !important` : `80px`}
                color={Theme.white_C}
                margin={`0 8px 0 0`}
                lineHeight={`1.0`}
                fontWeight={`700`}
              >
                {!isFirst ? (
                  `0`
                ) : (
                  <AnimatedNumber
                    className="19"
                    value={21}
                    formatValue={(value) => value.toFixed(0)}
                    duration={1500}
                  />
                )}
              </Text>

              <Text
                fontSize={width < 700 ? `14px !important` : `18px`}
                color={Theme.white_C}
                fontWeight={`300`}
                margin={`0 0 3px`}
              >
                Products
              </Text>
            </Wrapper>
          </Wrapper>

          <Wrapper width={`50%`} al={`flex-start`}>
            <Text
              fontSize={width < 700 ? `20px !important` : `30px`}
              color={Theme.white_C}
            >
              Other Device
            </Text>
            <Wrapper
              dr={`row`}
              margin={`20px 0 0`}
              al={`flex-end`}
              ju={`flex-start`}
            >
              <Text
                fontSize={width < 700 ? `55px !important` : `80px`}
                color={Theme.white_C}
                margin={`0 8px 0 0`}
                lineHeight={`1.0`}
                fontWeight={`700`}
              >
                {!isFirst ? (
                  `0`
                ) : (
                  <AnimatedNumber
                    className="19"
                    value={18}
                    formatValue={(value) => value.toFixed(0)}
                    duration={1500}
                  />
                )}
              </Text>

              <Text
                fontSize={width < 700 ? `14px !important` : `18px`}
                color={Theme.white_C}
                fontWeight={`300`}
                margin={`0 0 3px`}
              >
                Products
              </Text>
            </Wrapper>
          </Wrapper>

          <Wrapper al={`flex-start`}>
            <Image
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM03%2Fpro-icon-2.png?alt=media&token=d5d676c1-56d5-495e-89d0-d6f33b364d6d`}
              width={width < 700 ? `50px` : `70px`}
              margin={width < 700 ? `70px 0 23px` : `140px 0 50px`}
            />

            <Text
              color={Theme.greyTheme3_C}
              fontSize={width < 700 ? `18px !important` : `24px`}
              fontWeight={`400`}
            >
              SMARTKEEPER PRO’s complete
            </Text>
            <Text
              color={Theme.greyTheme3_C}
              fontSize={width < 700 ? `18px !important` : `24px`}
              fontWeight={`400`}
            >
              line-up not only includes locks for everyday use ports, such as
              USB, USB-C and RJ45 ports, but for uncommon ports, such as ODD,
              Micro-B, BNC ports, as well.
            </Text>
          </Wrapper>

          <Wrapper
            dr={`row`}
            ju={`space-around`}
            margin={width < 700 ? `34px 0 0` : `70px 0 0`}
            al={`flex-end`}
          >
            <Wrapper width={`auto`}>
              <Wrapper width={`auto`}>
                <Image
                  width={width < 700 ? `60px` : `110px`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM02%2F%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9-icon-1.png?alt=media&token=582df5e6-4616-4f79-b100-6f2bbdfb1349`}
                />
              </Wrapper>
              <Text
                color={Theme.white_C}
                fontSize={width < 700 ? `10px !important` : `14px`}
                margin={width < 700 ? `14px 0 0` : `30px 0 0`}
                fontWeight={`300`}
              >
                USB Type-A
              </Text>
            </Wrapper>

            <Wrapper width={`auto`}>
              <Wrapper width={`auto`}>
                <Image
                  width={width < 700 ? `60px` : `110px`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM02%2F%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9-icon-2.png?alt=media&token=a0114d90-9456-4e28-b9cc-12fcb5da615a`}
                />
              </Wrapper>
              <Text
                color={Theme.white_C}
                fontSize={width < 700 ? `10px !important` : `14px`}
                margin={width < 700 ? `14px 0 0` : `30px 0 0`}
                fontWeight={`300`}
              >
                USB Type-C
              </Text>
            </Wrapper>

            <Wrapper width={`auto`}>
              <Wrapper width={`auto`}>
                <Image
                  width={width < 700 ? `34px` : `80px`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM02%2F%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9-icon-3.png?alt=media&token=03ad6ba9-e32e-4010-b452-d049dfad5792`}
                />
              </Wrapper>
              <Text
                color={Theme.white_C}
                fontSize={width < 700 ? `10px !important` : `14px`}
                margin={width < 700 ? `5px 0 0` : `10px 0 0`}
                fontWeight={`300`}
              >
                RJ-11
              </Text>
            </Wrapper>

            <Wrapper width={`auto`}>
              <Wrapper width={`auto`}>
                <Image
                  width={width < 700 ? `40px` : `90px`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM02%2F%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9-icon-4.png?alt=media&token=8bf421c7-b468-4ce9-a234-2426abd95f1f`}
                />
              </Wrapper>
              <Text
                color={Theme.white_C}
                fontSize={width < 700 ? `10px !important` : `14px`}
                margin={width < 700 ? `7px 0 0` : `14px 0 0`}
                fontWeight={`300`}
              >
                RJ-45
              </Text>
            </Wrapper>
          </Wrapper>

          <Wrapper
            dr={`row`}
            ju={`space-around`}
            margin={width < 700 ? `32px 0 0` : `65px 0 0`}
            al={`flex-end`}
          >
            <Wrapper width={`auto`}>
              <Wrapper width={`auto`}>
                <Image
                  width={width < 700 ? `66px` : `100px`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM03%2Fpro-icon-7.png?alt=media&token=f5c65f7d-873a-4ab4-8ab5-240c7f794ccc`}
                />
              </Wrapper>
              <Text
                color={Theme.white_C}
                fontSize={width < 700 ? `10px !important` : `14px`}
                margin={width < 700 ? `6px 0 0` : `12px 0 0`}
                fontWeight={`300`}
              >
                QSFP
              </Text>
              <Text
                color={Theme.white_C}
                fontSize={width < 700 ? `10px !important` : `14px`}
                fontWeight={`300`}
              >
                Transceiver
              </Text>
            </Wrapper>

            <Wrapper width={`auto`}>
              <Wrapper width={`auto`}>
                <Image
                  width={width < 700 ? `46px` : `85px`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM03%2Fpro-icon-8.png?alt=media&token=8a20c4c0-043e-4f4d-8086-dd4a1db5b048`}
                />
              </Wrapper>
              <Text
                color={Theme.white_C}
                fontSize={width < 700 ? `10px !important` : `14px`}
                margin={width < 700 ? `6px 0 0` : `12px 0 0`}
                fontWeight={`300`}
              >
                SFP
              </Text>
              <Text
                color={Theme.white_C}
                fontSize={width < 700 ? `10px !important` : `14px`}
                fontWeight={`300`}
              >
                Transceiver
              </Text>
            </Wrapper>

            <Wrapper width={`auto`}>
              <Wrapper width={`auto`}>
                <Image
                  width={width < 700 ? `46px` : `85px`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM02%2F%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9-icon-7.png?alt=media&token=0ae58d19-202c-4a89-973b-a3ab7383cf35`}
                />
              </Wrapper>
              <Text
                color={Theme.white_C}
                fontSize={width < 700 ? `10px !important` : `14px`}
                margin={width < 700 ? `6px 0 0` : `12px 0 0`}
                fontWeight={`300`}
              >
                SFP Port
              </Text>
              <Text
                color={Theme.white_C}
                fontSize={width < 700 ? `10px !important` : `14px`}
                fontWeight={`300`}
              >
                (Mini GBIC)
              </Text>
            </Wrapper>

            <Wrapper width={`auto`}>
              <Wrapper width={`auto`}>
                <Image
                  width={width < 700 ? `50px` : `90px`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM02%2F%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9-icon-9.png?alt=media&token=a5255952-c315-457b-8d8e-01ff1bb0c3a9`}
                />
              </Wrapper>
              <Text
                color={Theme.white_C}
                fontSize={width < 700 ? `10px !important` : `14px`}
                margin={width < 700 ? `6px 0 0` : `12px 0 0`}
                fontWeight={`300`}
              >
                female BNC
              </Text>
              <Text
                color={Theme.white_C}
                fontSize={width < 700 ? `10px !important` : `14px`}
                fontWeight={`300`}
              >
                Connector
              </Text>
            </Wrapper>
          </Wrapper>

          <Wrapper
            dr={`row`}
            ju={`space-around`}
            margin={width < 700 ? `32px 0 0` : `65px 0 0`}
            al={`flex-end`}
          >
            <Wrapper width={`auto`}>
              <Wrapper width={`auto`}>
                <Image
                  width={width < 700 ? `55px` : `120px`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM02%2F%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9-icon-10.png?alt=media&token=1e3b5c61-4508-43c6-ba78-96a2fd7421e3`}
                />
              </Wrapper>

              <Wrapper
                height={width < 700 ? `32px` : `50px`}
                margin={width < 700 ? `16px 0 0` : `30px 0 0`}
                ju={`flex-start`}
              >
                <Text
                  color={Theme.white_C}
                  fontSize={width < 700 ? `10px !important` : `14px`}
                  fontWeight={`300`}
                >
                  RF Connector
                </Text>
              </Wrapper>
            </Wrapper>

            <Wrapper width={`auto`}>
              <Wrapper width={`auto`}>
                <Image
                  width={width < 700 ? `45px` : `85px`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM02%2F%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9-icon-11.png?alt=media&token=aa4a9a9e-1723-4150-b2dc-854cb6d206d0`}
                />
              </Wrapper>

              <Wrapper
                height={width < 700 ? `32px` : `50px`}
                margin={width < 700 ? `12px 0 0` : `24px 0 0`}
                ju={`flex-start`}
              >
                <Text
                  color={Theme.white_C}
                  fontSize={width < 700 ? `10px !important` : `14px`}
                  fontWeight={`300`}
                >
                  Optical Disc Drive
                </Text>
                <Text
                  color={Theme.white_C}
                  fontSize={width < 700 ? `10px !important` : `14px`}
                  fontWeight={`300`}
                >
                  (DVD/CD-ROM)
                </Text>
              </Wrapper>
            </Wrapper>

            <Wrapper width={`auto`}>
              <Wrapper width={`auto`}>
                <Image
                  width={width < 700 ? `76px` : `140px`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM02%2F%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9-icon-8.png?alt=media&token=9c366b8c-861f-4706-95bd-6173d8c10646`}
                />
              </Wrapper>

              <Wrapper
                height={width < 700 ? `32px` : `50px`}
                margin={width < 700 ? `13px 0 0` : `26px 0 0`}
                ju={`flex-start`}
              >
                <Text
                  color={Theme.white_C}
                  fontSize={width < 700 ? `10px !important` : `14px`}
                  fontWeight={`300`}
                >
                  GBIC Port
                </Text>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>
      {/* web */}

      <RsWrapper display={width < 900 ? `none` : `flex`}>
        <Wrapper dr={`row`} ju={`space-between`} margin={`80px 0`}>
          <Wrapper
            width={width < 900 ? `302px` : `calc(100% / 2 - 5px)`}
            height={`auto`}
            padding={width < 900 ? `35px 0px 35px 20px` : `30px 50px`}
            margin={`0 0 10px`}
            isRelative={true}
            attachment={`initial`}
            bgImg={`url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM01%2F%E1%84%87%E1%85%A2%E1%84%82%E1%85%A5_USB%20%E1%84%91%E1%85%A9%E1%84%90%E1%85%B3%E1%84%8B%E1%85%B4%20%E1%84%87%E1%85%A9%E1%84%8B%E1%85%A1%E1%86%AB.jpg?alt=media&token=4a6448f5-86c5-4362-aec0-6be84c2cb259")`}
          >
            <Wrapper al={`flex-start`} height={`100%`} ju={`flex-start`}>
              <Text
                fontSize={width < 900 ? `11.5px` : `18px`}
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
                  <RiArrowRightSLine fontSize={`20px`} color={Theme.white_C} />
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
            bgImg={`url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM01%2F%E1%84%87%E1%85%A2%E1%84%82%E1%85%A5_%E1%84%82%E1%85%A6%E1%84%90%E1%85%B3%E1%84%8B%E1%85%AF%E1%84%8F%E1%85%B3%20%E1%84%87%E1%85%A9%E1%84%8B%E1%85%A1%E1%86%AB%E1%84%8B%E1%85%B4%20%E1%84%91%E1%85%B5%E1%86%AF%E1%84%89%E1%85%AE%20%E1%84%8C%E1%85%A9%E1%84%92%E1%85%A1%E1%86%B8.jpg?alt=media&token=b2feb7ee-367a-474d-9244-ff1c9e21f090")`}
          >
            <Wrapper al={`flex-start`} height={`100%`} ju={`flex-start`}>
              <Text
                fontSize={width < 900 ? `11.5px` : `18px`}
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
                  <RiArrowRightSLine fontSize={`20px`} color={Theme.white_C} />
                </Button>
              </Link>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </RsWrapper>

      {/* mobile */}
      <Wrapper
        margin={width < 700 ? `80px 0 50px` : `150px 0 40px`}
        display={width < 900 ? `flex` : `none`}
      >
        <Wrapper
          isRelative={true}
          width={width < 700 ? `302px` : `700px`}
          height={width < 700 ? `200px` : `460px`}
          al={`flex-start`}
          padding={width < 700 ? `0 18px` : `50px 32px 0`}
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
            fontSize={width < 700 ? `11.5px !important` : `20px`}
            fontWeight={`500`}
            color={Theme.greyTheme3_C}
          >
            USB Port Security
          </Text>
          <Text
            fontSize={width < 700 ? `17px` : `50px`}
            fontWeight={`700`}
            color={Theme.white_C}
            lineHeight={`1.4`}
          >
            Starting point of Port Security,
          </Text>

          <Text
            fontSize={width < 700 ? `17px` : `50px`}
            fontWeight={`700`}
            color={Theme.white_C}
            lineHeight={`1.4`}
          >
            End it with Physical Security.
          </Text>

          <Wrapper
            margin={width < 700 ? `10px 0 0` : `20px 0 0`}
            color={Theme.white_C}
            dr={`row`}
            width={`auto`}
          >
            <Text
              fontSize={width < 700 ? `14px !important` : `30px`}
              fontWeight={`700`}
              onClick={() => moveLinkHandler(`/usb`)}
            >
              Learn more
            </Text>
            <RiArrowRightSLine size={width < 700 ? `20` : `30`} />
          </Wrapper>
        </Wrapper>

        <Wrapper
          isRelative={true}
          width={width < 700 ? `302px` : `700px`}
          height={width < 700 ? `200px` : `460px`}
          al={`flex-start`}
          padding={width < 700 ? `0 18px` : `50px 32px 0`}
        >
          <Image
            isAbsolute={true}
            top={`0`}
            left={`0`}
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM16%2F%E1%84%8B%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3-image-11.png?alt=media&token=78526b8e-b773-42f8-8131-3a4385a3d2b3`}
          />
          <Text
            fontSize={width < 700 ? `11.5px !important` : `20px`}
            fontWeight={`500`}
            color={Theme.greyTheme3_C}
          >
            The essential combination of network security
          </Text>
          <Text
            fontSize={width < 700 ? `19px !important` : `50px`}
            fontWeight={`700`}
            color={Theme.white_C}
            lineHeight={`1.4`}
          >
            Network &#38; Intranet :
          </Text>
          <Text
            fontSize={width < 700 ? `19px !important` : `50px`}
            fontWeight={`700`}
            color={Theme.white_C}
            lineHeight={`1.4`}
          >
            Pathway to all assets within
          </Text>

          <Wrapper
            margin={width < 700 ? `10px 0 0` : `20px 0 0`}
            color={Theme.white_C}
            dr={`row`}
            width={`auto`}
          >
            <Text
              fontSize={width < 700 ? `14px !important` : `30px`}
              fontWeight={`700`}
              onClick={() => moveLinkHandler(`/network`)}
            >
              Learn more
            </Text>
            <RiArrowRightSLine size={width < 700 ? `20` : `30`} />
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </WholeWrapper>
  );
};

export default withResizeDetector(MM02Presenter);
