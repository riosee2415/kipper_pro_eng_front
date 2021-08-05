import React from "react";
import withSplitting from "../../../Lib/withSplitting";
import {
  WholeWrapper,
  RsWrapper,
  Text,
  Image,
  Wrapper,
  SpanText,
  CommonSubTitle,
} from "../../../Components/CommonComponents";
import styled from "styled-components";
import { withResizeDetector } from "react-resize-detector";
import useTitle from "@4leaf.ysh/use-title";
import Theme from "../../../Styles/Theme";

const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: ${(props) => props.theme.white_C};

  @media (max-width: 700px) {
    font-size: 30px;
    margin: 0 0 15px;
  }
`;

const Desc = styled.h2`
  font-size: 16px;
  margin: 15px 0 10px;
  color: ${(props) => props.theme.white_C};
  display: ${(props) => props.display};

  @media (max-width: 700px) {
    font-size: 18px;
    margin: 0 0 10px;
    color: rgb(226, 226, 226);
  }
`;

const MM03Presenter = ({
  width,
  //
  moveLinkHandler,
}) => {
  useTitle(`적용사례 | ${process.env["HOMEPAGE_NAME"]}`);

  return (
    <WholeWrapper bgColor={`rgb(16, 16, 16)`} color={Theme.white_C}>
      <Wrapper height={width < 700 ? `450px` : `600px`} bgColor={Theme.black_C}>
        {/* <Wrapper isGotham={true} fontSize={width < 700 ? `10px`:`20px`} letterSpacing={`0px`}>
          SMARTKEEPER PRO
        </Wrapper> */}
        <Image
          alt="smartkeeper"
          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM03%2FSMARTKEEPER%20PRO%20(2).svg?alt=media&token=1bad9f59-a10d-4d8f-8309-d01ea8eadd4a`}
          width={width < 700 ? `146px` : `188px`}
        />
        <Image
          alt="reference"
          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM03%2FReference.svg?alt=media&token=b56e0939-a82f-4cc2-81fe-be815b68e4c3`}
          width={width < 700 ? `250px` : `312px`}
          margin={width < 700 ? `16px 0 25px` : `16px 0 75px`}
        />
        {/* <Wrapper
          isGotham={true}
          fontSize={`70px`}
          fontWeight={`bold`}
          margin={`15px 0 75px`}
        >
          Reference
        </Wrapper> */}
        <Text
          fontSize={width < 700 ? `18px` : `24px`}
          lineHeight={width < 700 ? `30px` : `40px`}
        >
          3천여 개 국내외 주요사이트
        </Text>
        <Text
          fontSize={width < 700 ? `18px` : `24px`}
          lineHeight={width < 700 ? `30px` : `40px`}
          display={width < 700 ? `none` : `block`}
        >
          물리보안을 가장 완벽하게, 활용하는 모든 곳.
        </Text>
        <Text
          fontSize={width < 700 ? `18px` : `24px`}
          lineHeight={width < 700 ? `30px` : `40px`}
          display={width < 700 ? `block` : `none`}
        >
          물리보안을 가장 완벽하게,
        </Text>
        <Text
          fontSize={width < 700 ? `18px` : `24px`}
          lineHeight={width < 700 ? `30px` : `40px`}
          display={width < 700 ? `block` : `none`}
        >
          활용하는 모든 곳.
        </Text>
      </Wrapper>
      <Wrapper isRelative={true} margin={width < 700 ? `15px 0 0` : `10px 0 0`}>
        <Image
          alt="background"
          src={
            width < 700
              ? `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM03-mobile%2F%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%20%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%20685.png?alt=media&token=6e3eb665-c5e0-485d-b4bb-3c3411b7f560`
              : `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Fexample%2F%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%85%E1%85%A7%E1%86%A8%E1%84%86%E1%85%B5%E1%86%BE%E1%84%8B%E1%85%A6%E1%84%82%E1%85%A5%E1%84%8C%E1%85%B5%E1%84%87%E1%85%A1%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%AB_shutterstock_1007906407.png?alt=media&token=779c022e-e3d6-4e14-8786-79fbb500c1f8`
          }
        />
        <Wrapper isAbsolute={true} height={`100%`} top={`0`} left={`0`}>
          <RsWrapper>
            <Wrapper width={width < 700 ? `100%` : `90%`}>
              <Title>전력 및 에너지 발전</Title>
              <Desc display={width < 700 ? `none` : `block`}>
                원자력, 화력, 수력 등 발전기발시설 150여 사이트
              </Desc>
              <Desc display={width < 700 ? `block` : `none`}>
                원자력, 화력, 수력 등
              </Desc>
              <Desc display={width < 700 ? `block` : `none`}>
                발전기발시설 150여 사이트
              </Desc>
              <Text
                fontSize={width < 700 ? `13px` : `12px`}
                color={`#9D9D9D`}
                fontWeight={`300`}
              >
                * 대상포트를 클릭하면 해당 제품으로 이동합니다.
              </Text>

              <Wrapper margin={`15px 0 0`} dr={`row`} al={`flex-start`}>
                <Wrapper
                  al={width < 700 && `flex-start`}
                  padding={width < 700 && `0 50px`}
                  width={width < 700 ? `100%` : `40%`}
                >
                  <Text
                    fontSize={width < 700 ? `10px` : `20px`}
                    margin={width < 700 ? `0 0 10px` : `0 0 20px`}
                  >
                    USB
                  </Text>
                  <Wrapper
                    dr={`row`}
                    padding={width < 700 ? `0` : `0 65px`}
                    borderRight={
                      width < 700 ? `none` : `1px solid ${Theme.white_C}`
                    }
                    ju={width < 700 ? `flex-start` : `center`}
                  >
                    <Wrapper
                      width={width < 700 ? `calc(100% / 4 )` : `calc(100% / 2)`}
                      al={width < 700 && `flex-start`}
                      cursor={`pointer`}
                      onClick={() => moveLinkHandler(`/usb?type=USB Type-A`)}
                    >
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2FUSB(USB%20Type-A).svg?alt=media&token=67984156-1155-4aac-bf52-8063413d52ce`}
                        width={width < 700 ? `39px` : `62px`}
                        height={width < 700 ? `15px` : `40px`}
                        objectFit={`contain`}
                        margin={width < 700 ? `0 0 10px` : `0 0 20px`}
                      />
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        USB Type A
                      </Text>
                    </Wrapper>
                    <Wrapper
                      width={width < 700 ? `calc(100% / 4 )` : `calc(100% / 2)`}
                      al={width < 700 && `flex-start`}
                      cursor={`pointer`}
                      onClick={() => moveLinkHandler(`/usb?type=USB Type-C`)}
                    >
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2F%E1%84%85%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%A5%202.svg?alt=media&token=7d1527f3-0dda-4d00-991e-d3e8c64f094a`}
                        width={width < 700 ? `44px` : `62px`}
                        height={width < 700 ? `auto` : `40px`}
                        objectFit={`contain`}
                        margin={width < 700 ? `0 0 10px` : `0 0 20px`}
                      />
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        USB Type C
                      </Text>
                    </Wrapper>
                  </Wrapper>
                </Wrapper>
                <Wrapper
                  al={width < 700 && `flex-start`}
                  padding={width < 700 && `0 50px`}
                  width={width < 700 ? `100%` : `60%`}
                >
                  <Text
                    fontSize={width < 700 ? `10px` : `20px`}
                    margin={width < 700 ? `15px 0 10px` : `0 0 20px`}
                  >
                    Network
                  </Text>
                  <Wrapper
                    dr={`row`}
                    padding={width < 700 ? `0` : `0 65px`}
                    al={`flex-start`}
                  >
                    <Wrapper
                      width={`calc(100% / 4)`}
                      al={width < 700 && `flex-start`}
                      ju={`flex-start`}
                      cursor={`pointer`}
                      onClick={() =>
                        moveLinkHandler(`/p_network?type=LAN Cable`)
                      }
                    >
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2FLAN%20Cable(Ethernet%20RJ-45%20Connector).svg?alt=media&token=009d72bc-d4e1-481a-a834-cc99d977072f`}
                        width={width < 700 ? `100%` : `62px`}
                        height={width < 700 ? `21px` : `40px`}
                        objectFit={`contain`}
                        margin={width < 700 ? `5px 0 10px` : `0 0 20px`}
                      />
                      <Wrapper>
                        <Text
                          fontWeight={`300`}
                          fontSize={width < 700 ? `8px` : `16px`}
                          lineHeight={width < 700 && `1.3`}
                        >
                          Ethernet RJ45
                        </Text>
                        <Text
                          fontWeight={`300`}
                          fontSize={width < 700 ? `8px` : `16px`}
                          lineHeight={width < 700 && `1.3`}
                        >
                          Connector
                        </Text>
                      </Wrapper>
                    </Wrapper>
                    <Wrapper
                      width={`calc(100% / 4)`}
                      ju={`flex-start`}
                      cursor={`pointer`}
                      onClick={() => moveLinkHandler(`/p_network?type=RJ45`)}
                    >
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2F%E1%84%85%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%A5%20-1.svg?alt=media&token=0a8d29c2-5035-49b2-95e3-c2350f6d2436`}
                        width={width < 700 ? `26px` : `62px`}
                        height={width < 700 ? `auto` : `40px`}
                        objectFit={`contain`}
                        margin={width < 700 ? `0 0 10px` : `0 0 20px`}
                      />
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        Ethernet
                      </Text>
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        RJ45 Port
                      </Text>
                    </Wrapper>
                    <Wrapper
                      width={`calc(100% / 4)`}
                      ju={`flex-start`}
                      onClick={() =>
                        moveLinkHandler(`/p_network?type=SFP/QSFP`)
                      }
                    >
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2F%E1%84%85%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%A5%20-2.svg?alt=media&token=0be31c59-b013-46bd-8910-bf3c31af0cc7`}
                        width={width < 700 ? `30px` : `62px`}
                        height={width < 700 ? `auto` : `40px`}
                        objectFit={`contain`}
                        margin={width < 700 ? `0 0 10px` : `0 0 20px`}
                      />
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        GBIC Module
                      </Text>
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        (LC,SC)
                      </Text>
                    </Wrapper>
                    <Wrapper
                      width={`calc(100% / 4)`}
                      ju={`flex-start`}
                      cursor={`pointer`}
                      onClick={() =>
                        moveLinkHandler(`/p_network?type=SFP/QSFP`)
                      }
                    >
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2FSFP%20Port%20(Mini%20GBIC).svg?alt=media&token=b2ef4865-ef70-4b08-9dcb-5a4da57d6b73`}
                        width={width < 700 ? `31px` : `62px`}
                        height={width < 700 ? `23px` : `40px`}
                        objectFit={`contain`}
                        margin={width < 700 ? `0 0 10px` : `0 0 20px`}
                      />
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        SFP Module
                      </Text>
                    </Wrapper>
                  </Wrapper>
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </RsWrapper>
        </Wrapper>
      </Wrapper>

      <Wrapper isRelative={true} margin={`10px 0 0`}>
        <Image
          alt="background"
          src={
            width < 700
              ? `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM03-mobile%2F%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%20%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%20694.png?alt=media&token=f28529c4-dbf4-4aec-877c-e7f5907b1ae3`
              : `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Fexample%2F%E1%84%89%E1%85%A1%E1%86%BC%E1%84%92%E1%85%A1%E1%84%89%E1%85%AE%E1%84%83%E1%85%A9_shutterstock_89467804.png?alt=media&token=5e2fc897-8673-4e20-b745-171c25122e8d`
          }
        />
        <Wrapper isAbsolute={true} height={`100%`} top={`0`} left={`0`}>
          <RsWrapper>
            <Wrapper width={width < 700 ? `100%` : `90%`}>
              <Title>상하수도</Title>
              <Desc display={width < 700 ? `none` : `block`}>
                수자원 등 국가기반시설 60여 사이트
              </Desc>
              <Desc display={width < 700 ? `block` : `none`}>
                수자원 등 국가기반시설
              </Desc>
              <Desc display={width < 700 ? `block` : `none`}>60여 사이트</Desc>
              <Text
                fontSize={width < 700 ? `13px` : `12px`}
                color={`#9D9D9D`}
                fontWeight={`300`}
              >
                * 대상포트를 클릭하면 해당 제품으로 이동합니다.
              </Text>

              <Wrapper margin={`15px 0 0`} dr={`row`} al={`flex-start`}>
                <Wrapper
                  al={width < 700 && `flex-start`}
                  padding={width < 700 && `0 50px`}
                  width={width < 700 ? `100%` : `40%`}
                >
                  <Text
                    fontSize={width < 700 ? `10px` : `20px`}
                    margin={width < 700 ? `0 0 10px` : `0 0 20px`}
                  >
                    USB
                  </Text>
                  <Wrapper
                    dr={`row`}
                    padding={width < 700 ? `0` : `0 65px`}
                    borderRight={
                      width < 700 ? `none` : `1px solid ${Theme.white_C}`
                    }
                    ju={width < 700 ? `flex-start` : `center`}
                  >
                    <Wrapper
                      width={width < 700 ? `calc(100% / 4 )` : `calc(100% / 2)`}
                      al={width < 700 && `flex-start`}
                      cursor={`pointer`}
                      onClick={() => moveLinkHandler(`/usb?type=USB Type-A`)}
                    >
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2FUSB(USB%20Type-A).svg?alt=media&token=67984156-1155-4aac-bf52-8063413d52ce`}
                        width={width < 700 ? `39px` : `62px`}
                        height={width < 700 ? `15px` : `40px`}
                        objectFit={`contain`}
                        margin={width < 700 ? `0 0 10px` : `0px 0 20px`}
                      />
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        USB Type A
                      </Text>
                    </Wrapper>
                    <Wrapper
                      width={width < 700 ? `calc(100% / 4 )` : `calc(100% / 2)`}
                      al={width < 700 && `flex-start`}
                      cursor={`pointer`}
                      onClick={() => moveLinkHandler(`/usb?type=USB Type-C`)}
                    >
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2F%E1%84%85%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%A5%202.svg?alt=media&token=7d1527f3-0dda-4d00-991e-d3e8c64f094a`}
                        width={width < 700 ? `44px` : `62px`}
                        height={width < 700 ? `auto` : `40px`}
                        objectFit={`contain`}
                        margin={width < 700 ? `0 0 10px` : `0 0 20px`}
                      />
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        USB Type C
                      </Text>
                    </Wrapper>
                  </Wrapper>
                </Wrapper>
                <Wrapper
                  al={width < 700 && `flex-start`}
                  padding={width < 700 && `0 50px`}
                  width={width < 700 ? `100%` : `60%`}
                >
                  <Text
                    fontSize={width < 700 ? `10px` : `20px`}
                    margin={width < 700 ? `15px 0 10px` : `0 0 20px`}
                  >
                    Network
                  </Text>
                  <Wrapper
                    dr={`row`}
                    padding={width < 700 ? `0` : `0 65px`}
                    al={`flex-start`}
                  >
                    <Wrapper
                      width={`calc(100% / 4)`}
                      ju={`flex-start`}
                      al={width < 700 && `flex-start`}
                      cursor={`pointer`}
                      onClick={() =>
                        moveLinkHandler(`/p_network?type=LAN Cable`)
                      }
                    >
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2FLAN%20Cable(Ethernet%20RJ-45%20Connector).svg?alt=media&token=009d72bc-d4e1-481a-a834-cc99d977072f`}
                        width={width < 700 ? `100%` : `62px`}
                        height={width < 700 ? `21px` : `40px`}
                        objectFit={`contain`}
                        margin={width < 700 ? `5px 0 10px` : `0 0 20px`}
                      />
                      <Wrapper>
                        <Text
                          fontWeight={`300`}
                          fontSize={width < 700 ? `8px` : `16px`}
                          lineHeight={width < 700 && `1.3`}
                        >
                          Ethernet RJ45
                        </Text>
                        <Text
                          fontWeight={`300`}
                          fontSize={width < 700 ? `8px` : `16px`}
                          lineHeight={width < 700 && `1.3`}
                        >
                          Connector
                        </Text>
                      </Wrapper>
                    </Wrapper>
                    <Wrapper
                      width={`calc(100% / 4)`}
                      ju={`flex-start`}
                      cursor={`pointer`}
                      onClick={() => moveLinkHandler(`/p_network?type=RJ45`)}
                    >
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2F%E1%84%85%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%A5%20-1.svg?alt=media&token=0a8d29c2-5035-49b2-95e3-c2350f6d2436`}
                        width={width < 700 ? `26px` : `62px`}
                        height={width < 700 ? `auto` : `40px`}
                        objectFit={`contain`}
                        margin={width < 700 ? `0 0 10px` : `0 0 20px`}
                      />
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        Ethernet
                      </Text>
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        RJ45 Port
                      </Text>
                    </Wrapper>
                    <Wrapper width={`calc(100% / 4)`} ju={`flex-start`}>
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2F%E1%84%85%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%A5%20-2.svg?alt=media&token=0be31c59-b013-46bd-8910-bf3c31af0cc7`}
                        width={width < 700 ? `30px` : `62px`}
                        height={width < 700 ? `auto` : `40px`}
                        objectFit={`contain`}
                        margin={width < 700 ? `0 0 10px` : `0 0 20px`}
                      />
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        GBIC Module
                      </Text>
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        (LC,SC)
                      </Text>
                    </Wrapper>
                    <Wrapper
                      width={`calc(100% / 4)`}
                      ju={`flex-start`}
                      cursor={`pointer`}
                      onClick={() =>
                        moveLinkHandler(`/p_network?type=SFP/QSFP`)
                      }
                    >
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2FSFP%20Port%20(Mini%20GBIC).svg?alt=media&token=b2ef4865-ef70-4b08-9dcb-5a4da57d6b73`}
                        width={width < 700 ? `31px` : `62px`}
                        height={width < 700 ? `23px` : `40px`}
                        objectFit={`contain`}
                        margin={width < 700 ? `0 0 10px` : `0 0 20px`}
                      />
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        SFP Module
                      </Text>
                    </Wrapper>
                  </Wrapper>
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </RsWrapper>
        </Wrapper>
      </Wrapper>

      <Wrapper isRelative={true} margin={`10px 0 0`}>
        <Image
          alt="background"
          src={
            width < 700
              ? `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM03-mobile%2F%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%20%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%20695.png?alt=media&token=1d6de526-48d2-4d84-bcdf-798ea2770599`
              : `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Fexample%2F%E1%84%8E%E1%85%A5%E1%86%AF%E1%84%83%E1%85%A9%E1%84%83%E1%85%A9%E1%84%85%E1%85%A9_shutterstock_658551766.png?alt=media&token=102d6aac-665d-4122-a4c9-30067c874df5`
          }
        />
        <Wrapper isAbsolute={true} height={`100%`} top={`0`} left={`0`}>
          <RsWrapper>
            <Wrapper width={width < 700 ? `100%` : `90%`}>
              <Title>철도, 도로</Title>
              <Desc display={width < 700 ? `none` : `block`}>
                교통망 기반시설 70개 사이트
              </Desc>
              <Desc display={width < 700 ? `block` : `none`}>
                교통망 기반시설
              </Desc>
              <Desc display={width < 700 ? `block` : `none`}>70개 사이트</Desc>
              <Text
                fontSize={width < 700 ? `13px` : `12px`}
                color={`#9D9D9D`}
                fontWeight={`300`}
              >
                * 대상포트를 클릭하면 해당 제품으로 이동합니다.
              </Text>

              <Wrapper margin={`15px 0 0`} dr={`row`} al={`flex-start`}>
                <Wrapper
                  al={width < 700 && `flex-start`}
                  padding={width < 700 && `0 50px`}
                  width={width < 700 ? `100%` : `40%`}
                >
                  <Text
                    fontSize={width < 700 ? `10px` : `20px`}
                    margin={width < 700 ? `0 0 10px` : `0 0 20px`}
                  >
                    USB
                  </Text>
                  <Wrapper
                    dr={`row`}
                    padding={width < 700 ? `0` : `0 65px`}
                    borderRight={
                      width < 700 ? `none` : `1px solid ${Theme.white_C}`
                    }
                    ju={width < 700 ? `flex-start` : `center`}
                  >
                    <Wrapper
                      width={width < 700 ? `calc(100% / 4 )` : `calc(100% / 2)`}
                      al={width < 700 && `flex-start`}
                      cursor={`pointer`}
                      onClick={() => moveLinkHandler(`/usb?type=USB Type-A`)}
                    >
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2FUSB(USB%20Type-A).svg?alt=media&token=67984156-1155-4aac-bf52-8063413d52ce`}
                        width={width < 700 ? `39px` : `62px`}
                        height={width < 700 ? `15px` : `40px`}
                        objectFit={`contain`}
                        margin={width < 700 ? `0 0 10px` : `0px 0 20px`}
                      />
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        USB Type A
                      </Text>
                    </Wrapper>
                    <Wrapper
                      width={width < 700 ? `calc(100% / 4 )` : `calc(100% / 2)`}
                      al={width < 700 && `flex-start`}
                      cursor={`pointer`}
                      onClick={() => moveLinkHandler(`/usb?type=USB Type-C`)}
                    >
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2F%E1%84%85%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%A5%202.svg?alt=media&token=7d1527f3-0dda-4d00-991e-d3e8c64f094a`}
                        width={width < 700 ? `44px` : `62px`}
                        height={width < 700 ? `auto` : `40px`}
                        objectFit={`contain`}
                        margin={width < 700 ? `0 0 10px` : `0 0 20px`}
                      />
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        USB Type C
                      </Text>
                    </Wrapper>
                  </Wrapper>
                </Wrapper>
                <Wrapper
                  al={width < 700 && `flex-start`}
                  padding={width < 700 && `0 50px`}
                  width={width < 700 ? `100%` : `60%`}
                >
                  <Text
                    fontSize={width < 700 ? `10px` : `20px`}
                    margin={width < 700 ? `15px 0 10px` : `0 0 20px`}
                  >
                    Network
                  </Text>
                  <Wrapper
                    dr={`row`}
                    padding={width < 700 ? `0` : `0 65px`}
                    al={`flex-start`}
                  >
                    <Wrapper
                      width={`calc(100% / 4)`}
                      ju={`flex-start`}
                      al={width < 700 && `flex-start`}
                      cursor={`pointer`}
                      onClick={() =>
                        moveLinkHandler(`/p_network?type=LAN Cable`)
                      }
                    >
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2FLAN%20Cable(Ethernet%20RJ-45%20Connector).svg?alt=media&token=009d72bc-d4e1-481a-a834-cc99d977072f`}
                        width={width < 700 ? `100%` : `62px`}
                        height={width < 700 ? `21px` : `40px`}
                        objectFit={`contain`}
                        margin={width < 700 ? `5px 0 10px` : `0 0 20px`}
                      />
                      <Wrapper>
                        <Text
                          fontWeight={`300`}
                          fontSize={width < 700 ? `8px` : `16px`}
                          lineHeight={width < 700 && `1.3`}
                        >
                          Ethernet RJ45
                        </Text>
                        <Text
                          fontWeight={`300`}
                          fontSize={width < 700 ? `8px` : `16px`}
                          lineHeight={width < 700 && `1.3`}
                        >
                          Connector
                        </Text>
                      </Wrapper>
                    </Wrapper>
                    <Wrapper
                      width={`calc(100% / 4)`}
                      ju={`flex-start`}
                      cursor={`pointer`}
                      onClick={() => moveLinkHandler(`/p_network?type=RJ45`)}
                    >
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2F%E1%84%85%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%A5%20-1.svg?alt=media&token=0a8d29c2-5035-49b2-95e3-c2350f6d2436`}
                        width={width < 700 ? `26px` : `62px`}
                        height={width < 700 ? `auto` : `40px`}
                        objectFit={`contain`}
                        margin={width < 700 ? `0 0 10px` : `0 0 20px`}
                      />
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        Ethernet
                      </Text>
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        RJ45 Port
                      </Text>
                    </Wrapper>
                    <Wrapper width={`calc(100% / 4)`} ju={`flex-start`}>
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2F%E1%84%85%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%A5%20-2.svg?alt=media&token=0be31c59-b013-46bd-8910-bf3c31af0cc7`}
                        width={width < 700 ? `30px` : `62px`}
                        height={width < 700 ? `auto` : `40px`}
                        objectFit={`contain`}
                        margin={width < 700 ? `0 0 10px` : `0 0 20px`}
                      />
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        GBIC Module
                      </Text>
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        (LC,SC)
                      </Text>
                    </Wrapper>
                    <Wrapper
                      width={`calc(100% / 4)`}
                      ju={`flex-start`}
                      cursor={`pointer`}
                      onClick={() =>
                        moveLinkHandler(`/p_network?type=SFP/QSFP`)
                      }
                    >
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2FSFP%20Port%20(Mini%20GBIC).svg?alt=media&token=b2ef4865-ef70-4b08-9dcb-5a4da57d6b73`}
                        width={width < 700 ? `31px` : `62px`}
                        height={width < 700 ? `23px` : `40px`}
                        objectFit={`contain`}
                        margin={width < 700 ? `0 0 10px` : `0 0 20px`}
                      />
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        SFP Module
                      </Text>
                    </Wrapper>
                  </Wrapper>
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </RsWrapper>
        </Wrapper>
      </Wrapper>

      <Wrapper isRelative={true} margin={`10px 0 0`}>
        <Image
          alt="background"
          src={
            width < 700
              ? `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM03-mobile%2F%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%20%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%20696.png?alt=media&token=ae52f670-238d-4c2b-baca-479749146042`
              : `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Fexample%2F%E1%84%80%E1%85%A9%E1%86%BC%E1%84%92%E1%85%A1%E1%86%BC%E1%84%92%E1%85%A1%E1%86%BC%E1%84%86%E1%85%A1%E1%86%AB%E1%84%83%E1%85%B3%E1%86%BC%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%89%E1%85%A9%E1%86%BC_shutterstock_665431459.png?alt=media&token=2ba42701-ffa1-448c-ad86-fc817b94027c`
          }
        />
        <Wrapper isAbsolute={true} height={`100%`} top={`0`} left={`0`}>
          <RsWrapper>
            <Wrapper width={width < 700 ? `100%` : `90%`}>
              <Title>공항, 항만 등 운송</Title>
              <Desc display={width < 700 ? `none` : `block`}>
                교통망 기반시설 70개 사이트
              </Desc>
              <Desc display={width < 700 ? `block` : `none`}>
                교통망 기반시설
              </Desc>
              <Desc display={width < 700 ? `block` : `none`}>70개 사이트</Desc>
              <Text
                fontSize={width < 700 ? `13px` : `12px`}
                color={`#9D9D9D`}
                fontWeight={`300`}
              >
                * 대상포트를 클릭하면 해당 제품으로 이동합니다.
              </Text>

              <Wrapper margin={`15px 0 0`} dr={`row`} al={`flex-start`}>
                <Wrapper
                  al={width < 700 && `flex-start`}
                  padding={width < 700 && `0 50px`}
                  width={width < 700 ? `100%` : `45%`}
                >
                  <Text
                    fontSize={width < 700 ? `10px` : `20px`}
                    margin={width < 700 ? `0 0 10px` : `0 0 20px`}
                  >
                    USB
                  </Text>
                  <Wrapper
                    dr={`row`}
                    padding={width < 700 ? `0` : `0 65px`}
                    borderRight={
                      width < 700 ? `none` : `1px solid ${Theme.white_C}`
                    }
                    ju={width < 700 ? `flex-start` : `center`}
                  >
                    <Wrapper
                      width={width < 700 ? `calc(100% / 4 )` : `calc(100% / 2)`}
                      al={width < 700 && `flex-start`}
                      cursor={`pointer`}
                      onClick={() => moveLinkHandler(`/usb?type=USB Type-A`)}
                    >
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2FUSB(USB%20Type-A).svg?alt=media&token=67984156-1155-4aac-bf52-8063413d52ce`}
                        width={width < 700 ? `39px` : `62px`}
                        height={width < 700 ? `15px` : `40px`}
                        objectFit={`contain`}
                        margin={width < 700 ? `0 0 10px` : `0px 0 20px`}
                      />
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        USB Type A
                      </Text>
                    </Wrapper>
                    <Wrapper
                      width={width < 700 ? `calc(100% / 4 )` : `calc(100% / 2)`}
                      al={width < 700 && `flex-start`}
                      cursor={`pointer`}
                      onClick={() => moveLinkHandler(`/usb?type=USB Type-C`)}
                    >
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2F%E1%84%85%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%A5%202.svg?alt=media&token=7d1527f3-0dda-4d00-991e-d3e8c64f094a`}
                        width={width < 700 ? `44px` : `62px`}
                        height={width < 700 ? `auto` : `40px`}
                        objectFit={`contain`}
                        margin={width < 700 ? `0 0 10px` : `0 0 20px`}
                      />
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        USB Type C
                      </Text>
                    </Wrapper>
                  </Wrapper>
                </Wrapper>
                <Wrapper
                  al={width < 700 && `flex-start`}
                  padding={width < 700 && `0 50px`}
                  width={width < 700 ? `100%` : `55%`}
                >
                  <Text
                    fontSize={width < 700 ? `10px` : `20px`}
                    margin={width < 700 ? `15px 0 10px` : `0 0 20px`}
                  >
                    Network
                  </Text>
                  <Wrapper
                    dr={`row`}
                    padding={width < 700 ? `0` : `0 65px`}
                    al={`flex-start`}
                  >
                    <Wrapper
                      width={width < 700 ? `calc(100% / 4)` : `calc(100% / 3)`}
                      ju={`flex-start`}
                      al={width < 700 && `flex-start`}
                      cursor={`pointer`}
                      onClick={() =>
                        moveLinkHandler(`/p_network?type=LAN Cable`)
                      }
                    >
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2FLAN%20Cable(Ethernet%20RJ-45%20Connector).svg?alt=media&token=009d72bc-d4e1-481a-a834-cc99d977072f`}
                        width={width < 700 ? `100%` : `62px`}
                        height={width < 700 ? `21px` : `40px`}
                        objectFit={`contain`}
                        margin={width < 700 ? `5px 0 10px` : `0 0 20px`}
                      />
                      <Wrapper>
                        <Text
                          fontWeight={`300`}
                          fontSize={width < 700 ? `8px` : `16px`}
                          lineHeight={width < 700 && `1.3`}
                        >
                          Ethernet RJ45
                        </Text>
                        <Text
                          fontWeight={`300`}
                          fontSize={width < 700 ? `8px` : `16px`}
                          lineHeight={width < 700 && `1.3`}
                        >
                          Connector
                        </Text>
                      </Wrapper>
                    </Wrapper>
                    <Wrapper
                      width={width < 700 ? `calc(100% / 4)` : `calc(100% / 3)`}
                      ju={`flex-start`}
                      cursor={`pointer`}
                      onClick={() => moveLinkHandler(`/p_network?type=RJ45`)}
                    >
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2F%E1%84%85%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%A5%20-1.svg?alt=media&token=0a8d29c2-5035-49b2-95e3-c2350f6d2436`}
                        width={width < 700 ? `26px` : `62px`}
                        height={width < 700 ? `auto` : `40px`}
                        objectFit={`contain`}
                        margin={width < 700 ? `0 0 10px` : `0 0 20px`}
                      />
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        Ethernet
                      </Text>
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        RJ45 Port
                      </Text>
                    </Wrapper>
                    <Wrapper
                      display={width < 700 ? `flex` : `none`}
                      width={`calc(100% / 4)`}
                      ju={`flex-start`}
                    >
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2F%E1%84%85%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%A5%20-2.svg?alt=media&token=0be31c59-b013-46bd-8910-bf3c31af0cc7`}
                        width={width < 700 ? `30px` : `62px`}
                        height={width < 700 ? `auto` : `40px`}
                        objectFit={`contain`}
                        margin={width < 700 ? `0 0 10px` : `0 0 20px`}
                      />
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        GBIC Module
                      </Text>
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        (LC,SC)
                      </Text>
                    </Wrapper>
                    <Wrapper
                      width={width < 700 ? `calc(100% / 4)` : `calc(100% / 3)`}
                      ju={`flex-start`}
                      cursor={`pointer`}
                      onClick={() =>
                        moveLinkHandler(`/p_network?type=SFP/QSFP`)
                      }
                    >
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2FSFP%20Port%20(Mini%20GBIC).svg?alt=media&token=b2ef4865-ef70-4b08-9dcb-5a4da57d6b73`}
                        width={width < 700 ? `31px` : `62px`}
                        height={width < 700 ? `23px` : `40px`}
                        objectFit={`contain`}
                        margin={width < 700 ? `0 0 10px` : `0 0 20px`}
                      />
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        SFP Module
                      </Text>
                    </Wrapper>
                  </Wrapper>
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </RsWrapper>
        </Wrapper>
      </Wrapper>

      <Wrapper isRelative={true} margin={`10px 0 0`}>
        <Image
          alt="background"
          src={
            width < 700
              ? `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM03-mobile%2F%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%20%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%20697.png?alt=media&token=056a7d6a-63cb-45ed-ae8c-389d3e8bc4f0`
              : `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Fexample%2F%E1%84%80%E1%85%A9%E1%86%BC%E1%84%80%E1%85%A9%E1%86%BC%E1%84%80%E1%85%B5%E1%84%80%E1%85%AA%E1%86%AB_shutterstock_1596460642.png?alt=media&token=dc888a10-5a70-488f-ad39-184d42dc515e`
          }
        />
        <Wrapper isAbsolute={true} height={`100%`} top={`0`} left={`0`}>
          <RsWrapper>
            <Wrapper>
              <Title>공공기관</Title>
              <Desc display={width < 700 ? `none` : `block`}>
                청와대, 중앙부처를 비롯한 지자체 200여 사이트
              </Desc>
              <Desc display={width < 700 ? `block` : `none`}>
                청와대, 중앙부처를 비롯한
              </Desc>
              <Desc display={width < 700 ? `block` : `none`}>
                지자체 200여 사이트
              </Desc>
              <Text
                fontSize={width < 700 ? `13px` : `12px`}
                color={`#9D9D9D`}
                fontWeight={`300`}
              >
                * 대상포트를 클릭하면 해당 제품으로 이동합니다.
              </Text>

              <Wrapper margin={`15px 0 0`} dr={`row`} al={`flex-start`}>
                <Wrapper
                  width={width < 700 ? `50%` : `30%`}
                  al={width < 700 && `flex-start`}
                  padding={width < 700 && `0 0 0 50px`}
                >
                  <Text
                    width={`100%`}
                    textAlign={width < 700 ? `left` : `center`}
                    fontSize={width < 700 ? `10px` : `20px`}
                    margin={width < 700 ? `0 0 10px` : `0 0 20px`}
                    padding={width < 700 ? `0` : `0 65px 0 0`}
                  >
                    USB
                  </Text>
                  <Wrapper
                    dr={`row`}
                    ju={`flex-start`}
                    padding={width < 700 ? `0` : `0 65px 0 0`}
                    borderRight={
                      width < 700 ? `none` : `1px solid ${Theme.white_C}`
                    }
                  >
                    <Wrapper
                      width={`calc(100% / 2)`}
                      al={width < 700 && `flex-start`}
                      cursor={`pointer`}
                      onClick={() => moveLinkHandler(`/usb?type=USB Type-A`)}
                    >
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2FUSB(USB%20Type-A).svg?alt=media&token=67984156-1155-4aac-bf52-8063413d52ce`}
                        width={width < 700 ? `42px` : `62px`}
                        height={width < 700 ? `20px` : `24px`}
                        objectFit={`contain`}
                        margin={width < 700 ? `13px 0 10px` : `0 0 20px`}
                      />
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        USB Type A
                      </Text>
                    </Wrapper>
                    <Wrapper
                      width={`calc(100% / 2)`}
                      al={width < 700 && `flex-start`}
                      cursor={`pointer`}
                      onClick={() => moveLinkHandler(`/usb?type=USB Type-C`)}
                    >
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2F%E1%84%85%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%A5%202.svg?alt=media&token=7d1527f3-0dda-4d00-991e-d3e8c64f094a`}
                        width={width < 700 ? `44px` : `62px`}
                        height={width < 700 ? `auto` : `40px`}
                        objectFit={`contain`}
                        margin={width < 700 ? `13px 0 10px` : `0 0 20px`}
                      />
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        USB Type C
                      </Text>
                    </Wrapper>
                  </Wrapper>
                </Wrapper>
                <Wrapper
                  width={`50%`}
                  display={width < 700 ? `block` : `none`}
                  onClick={() => moveLinkHandler(`/computer?type=Desktop`)}
                >
                  <Text
                    fontSize={width < 700 ? `10px` : `20px`}
                    textAlign={`left`}
                    width={`100%`}
                    margin={`0 0 10px`}
                  >
                    Anti-Theft
                  </Text>
                  <Wrapper al={`flex-start`}>
                    <Image
                      alt="icon"
                      src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2FDesktop.svg?alt=media&token=805987e8-470c-4835-9c89-3c2094c16978`}
                      width={width < 700 ? `32px` : `auto`}
                      height={width < 700 ? `auto` : `42px`}
                      margin={`0 0 10px`}
                    />
                    <Text
                      fontWeight={`300`}
                      fontSize={width < 700 ? `8px` : `16px`}
                      lineHeight={width < 700 && `1.3`}
                    >
                      Desktop
                    </Text>
                  </Wrapper>
                </Wrapper>
                <Wrapper
                  width={width < 700 ? `100%` : `50%`}
                  al={width < 700 && `flex-start`}
                  padding={width < 700 && `0 50px`}
                >
                  <Text
                    fontSize={width < 700 ? `10px` : `20px`}
                    margin={width < 700 ? `15px 0 10px` : `0 0 20px`}
                  >
                    Network
                  </Text>
                  <Wrapper
                    dr={`row`}
                    padding={width < 700 ? `0` : `0 65px`}
                    al={`flex-start`}
                    borderRight={
                      width < 700 ? `none` : `1px solid ${Theme.white_C}`
                    }
                  >
                    <Wrapper
                      width={`calc(100% / 4)`}
                      ju={`flex-start`}
                      al={width < 700 && `flex-start`}
                      cursor={`pointer`}
                      onClick={() =>
                        moveLinkHandler(`/p_network?type=LAN Cable`)
                      }
                    >
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2FLAN%20Cable(Ethernet%20RJ-45%20Connector).svg?alt=media&token=009d72bc-d4e1-481a-a834-cc99d977072f`}
                        width={width < 700 ? `100%` : `62px`}
                        height={width < 700 ? `21px` : `40px`}
                        objectFit={`contain`}
                        margin={width < 700 ? `5px 0 10px` : `0 0 20px`}
                      />
                      <Wrapper>
                        <Text
                          fontWeight={`300`}
                          fontSize={width < 700 ? `8px` : `16px`}
                          lineHeight={width < 700 && `1.3`}
                        >
                          Ethernet RJ45
                        </Text>
                        <Text
                          fontWeight={`300`}
                          fontSize={width < 700 ? `8px` : `16px`}
                          lineHeight={width < 700 && `1.3`}
                        >
                          Connector
                        </Text>
                      </Wrapper>
                    </Wrapper>
                    <Wrapper
                      width={`calc(100% / 4)`}
                      ju={`flex-start`}
                      cursor={`pointer`}
                      onClick={() => moveLinkHandler(`/p_network?type=RJ45`)}
                    >
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2F%E1%84%85%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%A5%20-1.svg?alt=media&token=0a8d29c2-5035-49b2-95e3-c2350f6d2436`}
                        width={width < 700 ? `26px` : `62px`}
                        height={width < 700 ? `auto` : `40px`}
                        objectFit={`contain`}
                        margin={width < 700 ? `0 0 10px` : `0 0 20px`}
                      />
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        Ethernet
                      </Text>
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        RJ45 Port
                      </Text>
                    </Wrapper>
                    <Wrapper width={`calc(100% / 4)`} ju={`flex-start`}>
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2F%E1%84%85%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%A5%20-2.svg?alt=media&token=0be31c59-b013-46bd-8910-bf3c31af0cc7`}
                        width={width < 700 ? `30px` : `62px`}
                        height={width < 700 ? `auto` : `40px`}
                        objectFit={`contain`}
                        margin={width < 700 ? `0 0 10px` : `0 0 20px`}
                      />
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        GBIC Module
                      </Text>
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        (LC,SC)
                      </Text>
                    </Wrapper>
                    <Wrapper
                      width={`calc(100% / 4)`}
                      ju={`flex-start`}
                      cursor={`pointer`}
                      onClick={() =>
                        moveLinkHandler(`/p_network?type=SFP/QSFP`)
                      }
                    >
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2FSFP%20Port%20(Mini%20GBIC).svg?alt=media&token=b2ef4865-ef70-4b08-9dcb-5a4da57d6b73`}
                        width={width < 700 ? `31px` : `62px`}
                        height={width < 700 ? `23px` : `40px`}
                        objectFit={`contain`}
                        margin={width < 700 ? `0 0 10px` : `0 0 20px`}
                      />
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        SFP Module
                      </Text>
                    </Wrapper>
                  </Wrapper>
                </Wrapper>
                <Wrapper
                  width={`20%`}
                  display={width < 700 ? `none` : `flex`}
                  onClick={() => moveLinkHandler(`/computer?type=Desktop`)}
                >
                  <Text
                    fontSize={`20px`}
                    textAlign={`center`}
                    width={`100%`}
                    padding={`0 0 0 65px`}
                    margin={`0 0 20px`}
                  >
                    Anti-Theft
                  </Text>
                  <Wrapper dr={`row`} padding={`0 0 0 65px`}>
                    <Wrapper>
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2FDesktop.svg?alt=media&token=805987e8-470c-4835-9c89-3c2094c16978`}
                        width={`auto`}
                        height={`42px`}
                        margin={`0 0 20px`}
                      />
                      <Text fontWeight={`300`}>Desktop</Text>
                    </Wrapper>
                  </Wrapper>
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </RsWrapper>
        </Wrapper>
      </Wrapper>

      <Wrapper isRelative={true} margin={`10px 0 0`}>
        <Image
          alt="background"
          src={
            width < 700
              ? `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM03-mobile%2F%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%20%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%20698.png?alt=media&token=61859b51-436b-4653-86fd-a100e68f461e`
              : `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Fexample%2F%E1%84%80%E1%85%AE%E1%86%AB_shutterstock_1074284264.png?alt=media&token=b11865f7-9193-4480-8f6c-5e7d4c2b46df`
          }
        />
        <Wrapper isAbsolute={true} height={`100%`} top={`0`} left={`0`}>
          <RsWrapper>
            <Wrapper>
              <Title>군</Title>
              <Desc display={width < 700 ? `none` : `block`}>
                육, 해, 공군 관련 시설 및 방산업체 80여개 사이트
              </Desc>

              <Desc display={width < 700 ? `block` : `none`}>
                육, 해, 공군 관련 시설 및
              </Desc>
              <Desc display={width < 700 ? `block` : `none`}>
                방산업체 80여개 사이트
              </Desc>
              <Text
                fontSize={width < 700 ? `13px` : `12px`}
                color={`rgb(157, 157, 157)`}
                fontWeight={`300`}
              >
                * 대상포트를 클릭하면 해당 제품으로 이동합니다.
              </Text>

              <Wrapper margin={`15px 0 0`} dr={`row`} al={`flex-start`}>
                <Wrapper
                  width={width < 700 ? `50%` : `30%`}
                  al={width < 700 && `flex-start`}
                  padding={width < 700 && `0 0 0 50px`}
                >
                  <Text
                    width={`100%`}
                    textAlign={width < 700 ? `left` : `center`}
                    fontSize={width < 700 ? `10px` : `20px`}
                    margin={width < 700 ? `0 0 10px` : `0 0 20px`}
                    padding={width < 700 ? `0` : `0 65px 0 0`}
                  >
                    USB
                  </Text>
                  <Wrapper
                    dr={`row`}
                    ju={`flex-start`}
                    padding={width < 700 ? `0` : `0 65px 0 0`}
                    borderRight={
                      width < 700 ? `none` : `1px solid ${Theme.white_C}`
                    }
                  >
                    <Wrapper
                      width={`calc(100% / 2)`}
                      al={width < 700 && `flex-start`}
                      cursor={`pointer`}
                      onClick={() => moveLinkHandler(`/usb?type=USB Type-A`)}
                    >
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2FUSB(USB%20Type-A).svg?alt=media&token=67984156-1155-4aac-bf52-8063413d52ce`}
                        width={width < 700 ? `42px` : `62px`}
                        height={width < 700 ? `20px` : `24px`}
                        objectFit={`contain`}
                        margin={width < 700 ? `13px 0 10px` : `0 0 20px`}
                      />
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        USB Type A
                      </Text>
                    </Wrapper>
                    <Wrapper
                      width={`calc(100% / 2)`}
                      al={width < 700 && `flex-start`}
                      cursor={`pointer`}
                      onClick={() => moveLinkHandler(`/usb?type=USB Type-C`)}
                    >
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2F%E1%84%85%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%A5%202.svg?alt=media&token=7d1527f3-0dda-4d00-991e-d3e8c64f094a`}
                        width={width < 700 ? `44px` : `62px`}
                        height={width < 700 ? `auto` : `40px`}
                        objectFit={`contain`}
                        margin={width < 700 ? `13px 0 10px` : `0 0 20px`}
                      />
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        USB Type C
                      </Text>
                    </Wrapper>
                  </Wrapper>
                </Wrapper>
                <Wrapper width={`50%`} display={width < 700 ? `block` : `none`}>
                  <Text
                    fontSize={width < 700 ? `10px` : `20px`}
                    textAlign={`left`}
                    width={`100%`}
                    margin={`0 0 10px`}
                  >
                    Anti-Theft
                  </Text>
                  <Wrapper al={`flex-start`}>
                    <Image
                      alt="icon"
                      src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2FDesktop.svg?alt=media&token=805987e8-470c-4835-9c89-3c2094c16978`}
                      width={width < 700 ? `32px` : `auto`}
                      height={width < 700 ? `auto` : `42px`}
                      margin={`0 0 10px`}
                    />
                    <Text
                      fontWeight={`300`}
                      fontSize={width < 700 ? `8px` : `16px`}
                      lineHeight={width < 700 && `1.3`}
                    >
                      Desktop
                    </Text>
                  </Wrapper>
                </Wrapper>
                <Wrapper
                  width={width < 700 ? `100%` : `50%`}
                  al={width < 700 && `flex-start`}
                  padding={width < 700 && `0 50px`}
                >
                  <Text
                    fontSize={width < 700 ? `10px` : `20px`}
                    margin={width < 700 ? `15px 0 10px` : `0 0 20px`}
                  >
                    Network
                  </Text>
                  <Wrapper
                    dr={`row`}
                    padding={width < 700 ? `0` : `0 65px`}
                    al={`flex-start`}
                    borderRight={
                      width < 700 ? `none` : `1px solid ${Theme.white_C}`
                    }
                  >
                    <Wrapper
                      width={`calc(100% / 4)`}
                      ju={`flex-start`}
                      cursor={`pointer`}
                      al={width < 700 && `flex-start`}
                      onClick={() =>
                        moveLinkHandler(`/p_network?type=LAN Cable`)
                      }
                    >
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2FLAN%20Cable(Ethernet%20RJ-45%20Connector).svg?alt=media&token=009d72bc-d4e1-481a-a834-cc99d977072f`}
                        width={width < 700 ? `100%` : `62px`}
                        height={width < 700 ? `21px` : `40px`}
                        objectFit={`contain`}
                        margin={width < 700 ? `5px 0 10px` : `0 0 20px`}
                      />
                      <Wrapper>
                        <Text
                          fontWeight={`300`}
                          fontSize={width < 700 ? `8px` : `16px`}
                          lineHeight={width < 700 && `1.3`}
                        >
                          Ethernet RJ45
                        </Text>
                        <Text
                          fontWeight={`300`}
                          fontSize={width < 700 ? `8px` : `16px`}
                          lineHeight={width < 700 && `1.3`}
                        >
                          Connector
                        </Text>
                      </Wrapper>
                    </Wrapper>
                    <Wrapper
                      width={`calc(100% / 4)`}
                      ju={`flex-start`}
                      cursor={`pointer`}
                      onClick={() => moveLinkHandler(`/p_network?type=RJ45`)}
                    >
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2F%E1%84%85%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%A5%20-1.svg?alt=media&token=0a8d29c2-5035-49b2-95e3-c2350f6d2436`}
                        width={width < 700 ? `26px` : `62px`}
                        height={width < 700 ? `auto` : `40px`}
                        objectFit={`contain`}
                        margin={width < 700 ? `0 0 10px` : `0 0 20px`}
                      />
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        Ethernet
                      </Text>
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        RJ45 Port
                      </Text>
                    </Wrapper>
                    <Wrapper width={`calc(100% / 4)`} ju={`flex-start`}>
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2F%E1%84%85%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%A5%20-2.svg?alt=media&token=0be31c59-b013-46bd-8910-bf3c31af0cc7`}
                        width={width < 700 ? `30px` : `62px`}
                        height={width < 700 ? `auto` : `40px`}
                        objectFit={`contain`}
                        margin={width < 700 ? `0 0 10px` : `0 0 20px`}
                      />
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        GBIC Module
                      </Text>
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        (LC,SC)
                      </Text>
                    </Wrapper>
                    <Wrapper
                      width={`calc(100% / 4)`}
                      ju={`flex-start`}
                      cursor={`pointer`}
                      onClick={() =>
                        moveLinkHandler(`/p_network?type=SFP/QSFP`)
                      }
                    >
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2FSFP%20Port%20(Mini%20GBIC).svg?alt=media&token=b2ef4865-ef70-4b08-9dcb-5a4da57d6b73`}
                        width={width < 700 ? `31px` : `62px`}
                        height={width < 700 ? `23px` : `40px`}
                        objectFit={`contain`}
                        margin={width < 700 ? `0 0 10px` : `0 0 20px`}
                      />
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        SFP Module
                      </Text>
                    </Wrapper>
                  </Wrapper>
                </Wrapper>
                <Wrapper width={`20%`} display={width < 700 ? `none` : `flex`}>
                  <Text
                    fontSize={`20px`}
                    textAlign={`center`}
                    width={`100%`}
                    padding={`0 0 0 65px`}
                    margin={`0 0 20px`}
                  >
                    Anti-Theft
                  </Text>
                  <Wrapper dr={`row`} padding={`0 0 0 65px`}>
                    <Wrapper>
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2FDesktop.svg?alt=media&token=805987e8-470c-4835-9c89-3c2094c16978`}
                        width={`auto`}
                        height={`42px`}
                        margin={`0 0 20px`}
                      />
                      <Text fontWeight={`300`}>Desktop</Text>
                    </Wrapper>
                  </Wrapper>
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </RsWrapper>
        </Wrapper>
      </Wrapper>

      <Wrapper isRelative={true} margin={`10px 0 0`}>
        <Image
          alt="background"
          src={
            width < 700
              ? `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM03-mobile%2F%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%20%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%20699.png?alt=media&token=46e520f8-bd02-4410-97a8-1ea63857d7b6`
              : `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Fexample%2F%E1%84%80%E1%85%B3%E1%86%B7%E1%84%8B%E1%85%B2%E1%86%BC_shutterstock_527098861.png?alt=media&token=00b5865b-a456-420c-8b23-542f152e8563`
          }
        />
        <Wrapper isAbsolute={true} height={`100%`} top={`0`} left={`0`}>
          <RsWrapper>
            <Wrapper width={width < 700 ? `100%` : `90%`}>
              <Title>금융</Title>
              <Desc display={width < 700 ? `none` : `block`}>
                주요 은행, 증권, 생보사 등 금융권 150여 사이트
              </Desc>
              <Desc display={width < 700 ? `block` : `none`}>
                주요 은행, 증권, 생보사 등
              </Desc>
              <Desc display={width < 700 ? `block` : `none`}>
                금융권 150여 사이트
              </Desc>
              <Text
                fontSize={width < 700 ? `13px` : `12px`}
                color={`#9D9D9D`}
                fontWeight={`300`}
              >
                * 대상포트를 클릭하면 해당 제품으로 이동합니다.
              </Text>

              <Wrapper margin={`15px 0 0`} dr={`row`} al={`flex-start`}>
                <Wrapper
                  width={width < 700 ? `100%` : `45%`}
                  padding={width < 700 && `0 90px`}
                  al={width < 700 && `flex-start`}
                >
                  <Text
                    fontSize={width < 700 ? `10px` : `20px`}
                    margin={width < 700 ? `0 0 10px` : `0 0 20px`}
                  >
                    USB
                  </Text>
                  <Wrapper
                    dr={`row`}
                    padding={width < 700 ? `0` : `0 65px`}
                    borderRight={
                      width < 700 ? `none` : `1px solid ${Theme.white_C}`
                    }
                    ju={width < 700 ? `flex-start` : `center`}
                  >
                    <Wrapper
                      width={width < 700 ? `calc(100% / 3 )` : `calc(100% / 2)`}
                      al={width < 700 && `flex-start`}
                      cursor={`pointer`}
                      onClick={() => moveLinkHandler(`/usb?type=USB Type-A`)}
                    >
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2FUSB(USB%20Type-A).svg?alt=media&token=67984156-1155-4aac-bf52-8063413d52ce`}
                        width={width < 700 ? `39px` : `62px`}
                        height={width < 700 ? `15px` : `40px`}
                        objectFit={`contain`}
                        margin={width < 700 ? `0 0 10px` : `0px 0 20px`}
                      />
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        USB Type A
                      </Text>
                    </Wrapper>
                    <Wrapper
                      width={width < 700 ? `calc(100% / 3 )` : `calc(100% / 2)`}
                      al={width < 700 && `flex-start`}
                      cursor={`pointer`}
                      onClick={() => moveLinkHandler(`/usb?type=USB Type-C`)}
                    >
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2F%E1%84%85%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%A5%202.svg?alt=media&token=7d1527f3-0dda-4d00-991e-d3e8c64f094a`}
                        width={width < 700 ? `44px` : `62px`}
                        height={width < 700 ? `auto` : `40px`}
                        objectFit={`contain`}
                        margin={width < 700 ? `0 0 10px` : `0 0 20px`}
                      />
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        USB Type C
                      </Text>
                    </Wrapper>
                  </Wrapper>
                </Wrapper>
                <Wrapper
                  width={width < 700 ? `100%` : `55%`}
                  padding={width < 700 && `0 90px`}
                  al={width < 700 && `flex-start`}
                >
                  <Text
                    fontSize={width < 700 ? `10px` : `20px`}
                    margin={width < 700 ? `15px 0 10px` : `0 0 20px`}
                  >
                    Network
                  </Text>
                  <Wrapper
                    dr={`row`}
                    padding={width < 700 ? `0` : `0 65px`}
                    al={`flex-start`}
                  >
                    <Wrapper
                      width={`calc(100% / 3)`}
                      ju={`flex-start`}
                      al={width < 700 && `flex-start`}
                      cursor={`pointer`}
                      onClick={() =>
                        moveLinkHandler(`/p_network?type=LAN Cable`)
                      }
                    >
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2FLAN%20Cable(Ethernet%20RJ-45%20Connector).svg?alt=media&token=009d72bc-d4e1-481a-a834-cc99d977072f`}
                        width={width < 700 ? `100%` : `62px`}
                        height={width < 700 ? `21px` : `40px`}
                        objectFit={`contain`}
                        margin={width < 700 ? `5px 0 10px` : `0 0 20px`}
                      />
                      <Wrapper>
                        <Text
                          fontWeight={`300`}
                          fontSize={width < 700 ? `8px` : `16px`}
                          lineHeight={width < 700 && `1.3`}
                        >
                          Ethernet RJ45
                        </Text>
                        <Text
                          fontWeight={`300`}
                          fontSize={width < 700 ? `8px` : `16px`}
                          lineHeight={width < 700 && `1.3`}
                        >
                          Connector
                        </Text>
                      </Wrapper>
                    </Wrapper>
                    <Wrapper
                      width={`calc(100% / 3)`}
                      ju={`flex-start`}
                      cursor={`pointer`}
                      onClick={() => moveLinkHandler(`/p_network?type=RJ45`)}
                    >
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2F%E1%84%85%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%A5%20-1.svg?alt=media&token=0a8d29c2-5035-49b2-95e3-c2350f6d2436`}
                        width={width < 700 ? `52px` : `62px`}
                        height={width < 700 ? `26px` : `40px`}
                        objectFit={`contain`}
                        margin={width < 700 ? `0 0 10px` : `0 0 20px`}
                      />
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        Ethernet
                      </Text>
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        RJ45 Port
                      </Text>
                    </Wrapper>

                    <Wrapper
                      width={`calc(100% / 3)`}
                      ju={`flex-start`}
                      cursor={`pointer`}
                      onClick={() =>
                        moveLinkHandler(`/p_network?type=SFP/QSFP`)
                      }
                    >
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2FSFP%20Port%20(Mini%20GBIC).svg?alt=media&token=b2ef4865-ef70-4b08-9dcb-5a4da57d6b73`}
                        width={width < 700 ? `52px` : `62px`}
                        height={width < 700 ? `26px` : `40px`}
                        objectFit={`contain`}
                        margin={width < 700 ? `0 0 10px` : `0 0 20px`}
                      />
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        SFP Module
                      </Text>
                    </Wrapper>
                  </Wrapper>
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </RsWrapper>
        </Wrapper>
      </Wrapper>

      <Wrapper isRelative={true} margin={`10px 0 0`}>
        <Image
          alt="background"
          src={
            width < 700
              ? `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM03-mobile%2F%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%20%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%20700.png?alt=media&token=2ed8da81-2362-4e92-9796-609264d86555`
              : `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Fexample%2F%E1%84%80%E1%85%B5%E1%84%89%E1%85%AE%E1%86%AF%E1%84%86%E1%85%B5%E1%86%BE%E1%84%8C%E1%85%A6%E1%84%8C%E1%85%A9_shutterstock_1541393417.png?alt=media&token=94b722c9-5786-49d8-a0b3-905243024acf`
          }
        />
        <Wrapper isAbsolute={true} height={`100%`} top={`0`} left={`0`}>
          <RsWrapper>
            <Wrapper width={width < 700 ? `100%` : `90%`}>
              <Title>기술 및 제조</Title>
              <Desc display={width < 700 ? `none` : `block`}>
                조선, 디스플레이, 반도체 등 200여 사이트
              </Desc>
              <Desc display={width < 700 ? `block` : `none`}>
                조선, 디스플레이, 반도체 등
              </Desc>
              <Desc display={width < 700 ? `block` : `none`}>200여 사이트</Desc>
              <Text
                fontSize={width < 700 ? `13px` : `12px`}
                color={`#9D9D9D`}
                fontWeight={`300`}
              >
                * 대상포트를 클릭하면 해당 제품으로 이동합니다.
              </Text>

              <Wrapper margin={`15px 0 0`} dr={`row`} al={`flex-start`}>
                <Wrapper
                  width={width < 700 ? `100%` : `35%`}
                  al={width < 700 && `flex-start`}
                  padding={width < 700 && `0 30px`}
                >
                  <Text
                    fontSize={width < 700 ? `10px` : `20px`}
                    margin={width < 700 ? `0 0 10px` : `0 0 20px`}
                    padding={`0 65px 0 0`}
                  >
                    USB
                  </Text>
                  <Wrapper
                    dr={`row`}
                    padding={width < 700 ? `0` : `0 65px 0 0`}
                    borderRight={
                      width < 700 ? `none` : `1px solid ${Theme.white_C}`
                    }
                    ju={width < 700 ? `flex-start` : `center`}
                  >
                    <Wrapper
                      width={width < 700 ? `calc(100% / 5 )` : `calc(100% / 2)`}
                      al={width < 700 && `flex-start`}
                      cursor={`pointer`}
                      onClick={() => moveLinkHandler(`/usb?type=USB Type-A`)}
                    >
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2FUSB(USB%20Type-A).svg?alt=media&token=67984156-1155-4aac-bf52-8063413d52ce`}
                        width={width < 700 ? `80%` : `62px`}
                        height={width < 700 ? `auto` : `24px`}
                        objectFit={`contain`}
                        margin={width < 700 ? `0 0 10px` : `0 0 20px`}
                      />
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        USB Type A
                      </Text>
                    </Wrapper>
                    <Wrapper
                      width={width < 700 ? `calc(100% / 5 )` : `calc(100% / 2)`}
                      cursor={`pointer`}
                      onClick={() => moveLinkHandler(`/usb?type=USB Type-C`)}
                    >
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2F%E1%84%85%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%A5%202.svg?alt=media&token=7d1527f3-0dda-4d00-991e-d3e8c64f094a`}
                        width={width < 700 ? `80%` : `62px`}
                        height={width < 700 ? `auto` : `40px`}
                        objectFit={`contain`}
                        margin={width < 700 ? `0 0 10px` : `0 0 20px`}
                      />
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        USB Type C
                      </Text>
                    </Wrapper>
                  </Wrapper>
                </Wrapper>
                <Wrapper
                  width={width < 700 ? `100%` : `65%`}
                  al={width < 700 && `flex-start`}
                  padding={width < 700 && `0 30px`}
                >
                  <Text
                    fontSize={width < 700 ? `10px` : `20px`}
                    margin={width < 700 ? `15px 0 10px` : `0 0 20px`}
                    padding={width < 700 ? `0` : `0 0 0 65px`}
                  >
                    Network
                  </Text>
                  <Wrapper
                    dr={`row`}
                    padding={width < 700 ? `0` : `0 0 0 65px`}
                    al={`flex-start`}
                    cursor={`pointer`}
                    onClick={() => moveLinkHandler(`/p_network?type=LAN Cable`)}
                  >
                    <Wrapper
                      width={`calc(100% / 5)`}
                      ju={`flex-start`}
                      al={width < 700 && `flex-start`}
                    >
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2FLAN%20Cable(Ethernet%20RJ-45%20Connector).svg?alt=media&token=009d72bc-d4e1-481a-a834-cc99d977072f`}
                        width={width < 700 ? `100%` : `62px`}
                        height={width < 700 ? `21px` : `40px`}
                        objectFit={`contain`}
                        margin={width < 700 ? `5px 0 10px` : `0 0 20px`}
                      />
                      <Wrapper>
                        <Text
                          fontWeight={`300`}
                          fontSize={width < 700 ? `8px` : `16px`}
                          lineHeight={width < 700 && `1.3`}
                        >
                          Ethernet RJ45
                        </Text>
                        <Text
                          fontWeight={`300`}
                          fontSize={width < 700 ? `8px` : `16px`}
                          lineHeight={width < 700 && `1.3`}
                        >
                          Connector
                        </Text>
                      </Wrapper>
                    </Wrapper>
                    <Wrapper
                      width={`calc(100% / 5)`}
                      ju={`flex-start`}
                      cursor={`pointer`}
                      onClick={() => moveLinkHandler(`/p_network?type=RJ45`)}
                    >
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2F%E1%84%85%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%A5%20-1.svg?alt=media&token=0a8d29c2-5035-49b2-95e3-c2350f6d2436`}
                        width={width < 700 ? `26px` : `62px`}
                        height={width < 700 ? `26px` : `40px`}
                        objectFit={`contain`}
                        margin={width < 700 ? `0 0 10px` : `0 0 20px`}
                      />
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        Ethernet
                      </Text>
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        RJ45 Port
                      </Text>
                    </Wrapper>
                    <Wrapper width={`calc(100% / 5)`} ju={`flex-start`}>
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2F%E1%84%85%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%A5%20-2.svg?alt=media&token=0be31c59-b013-46bd-8910-bf3c31af0cc7`}
                        width={width < 700 ? `30px` : `62px`}
                        height={width < 700 ? `auto` : `40px`}
                        objectFit={`contain`}
                        margin={width < 700 ? `0 0 10px` : `0 0 20px`}
                      />
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        GBIC Module
                      </Text>
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        (LC,SC)
                      </Text>
                    </Wrapper>
                    <Wrapper
                      width={`calc(100% / 5)`}
                      ju={`flex-start`}
                      cursor={`pointer`}
                      onClick={() =>
                        moveLinkHandler(`/p_network?type=SFP/QSFP`)
                      }
                    >
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2FSFP%20Port%20(Mini%20GBIC).svg?alt=media&token=b2ef4865-ef70-4b08-9dcb-5a4da57d6b73`}
                        width={width < 700 ? `31px` : `62px`}
                        height={width < 700 ? `auto` : `40px`}
                        objectFit={`contain`}
                        margin={width < 700 ? `0 0 10px` : `0 0 20px`}
                      />
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        SFP Module
                      </Text>
                    </Wrapper>
                    <Wrapper width={`calc(100% / 5)`} ju={`flex-start`}>
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Fexample%2FRF%20Module%20(N%3AM%20Type).png?alt=media&token=14ee06df-d379-4c24-bd7b-e718c1a55864`}
                        width={width < 700 ? `27px` : `62px`}
                        height={width < 700 ? `26px` : `40px`}
                        objectFit={`contain`}
                        margin={width < 700 ? `0 0 10px` : `0 0 20px`}
                      />
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        RF Module
                      </Text>
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        (N/M Type)
                      </Text>
                    </Wrapper>
                  </Wrapper>
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </RsWrapper>
        </Wrapper>
      </Wrapper>

      <Wrapper isRelative={true} margin={`10px 0`}>
        <Image
          alt="background"
          src={
            width < 700
              ? `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM03-mobile%2F%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%20%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%20701.png?alt=media&token=6b8748eb-8ae9-471a-8f82-7a8663978640`
              : `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Fexample%2F%E1%84%90%E1%85%A9%E1%86%BC%E1%84%89%E1%85%B5%E1%86%AB%E1%84%82%E1%85%A6%E1%84%90%E1%85%B3%E1%84%8B%E1%85%AF%E1%84%8F%E1%85%B3shutterstock_1139969336.png?alt=media&token=a673da73-5b42-42ac-8d32-32b99ad1c315`
          }
        />
        <Wrapper isAbsolute={true} height={`100%`} top={`0`} left={`0`}>
          <RsWrapper>
            <Wrapper width={width < 700 ? `100%` : `90%`}>
              <Title>통신 네트워크</Title>
              <Desc display={width < 700 ? `none` : `block`}>
                IDC, 네트워크 서비스 공급자 등 200여 사이트
              </Desc>
              <Desc display={width < 700 ? `block` : `none`}>
                IDC, 네트워크 서비스 공급자 등
              </Desc>
              <Desc display={width < 700 ? `block` : `none`}>200여 사이트</Desc>
              <Text
                fontSize={width < 700 ? `13px` : `12px`}
                color={`rgb(157, 157, 157)`}
                fontWeight={`300`}
              >
                * 대상포트를 클릭하면 해당 제품으로 이동합니다.
              </Text>

              <Wrapper margin={`15px 0 0`} dr={`row`} al={`flex-start`}>
                <Wrapper
                  al={width < 700 && `flex-start`}
                  padding={width < 700 && `0 50px`}
                  width={width < 700 ? `100%` : `40%`}
                >
                  <Text
                    fontSize={width < 700 ? `10px` : `20px`}
                    margin={width < 700 ? `0 0 10px` : `0 0 20px`}
                  >
                    USB
                  </Text>
                  <Wrapper
                    dr={`row`}
                    padding={width < 700 ? `0` : `0 65px`}
                    borderRight={
                      width < 700 ? `none` : `1px solid ${Theme.white_C}`
                    }
                    ju={width < 700 ? `flex-start` : `center`}
                  >
                    <Wrapper
                      width={width < 700 ? `calc(100% / 4 )` : `calc(100% / 2)`}
                      al={width < 700 && `flex-start`}
                      cursor={`pointer`}
                      onClick={() => moveLinkHandler(`/usb?type=USB Type-A`)}
                    >
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2FUSB(USB%20Type-A).svg?alt=media&token=67984156-1155-4aac-bf52-8063413d52ce`}
                        width={width < 700 ? `52px` : `62px`}
                        height={width < 700 ? `26px` : `24px`}
                        objectFit={`contain`}
                        margin={width < 700 ? `0 0 10px` : `0 0 20px`}
                      />
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        USB Type A
                      </Text>
                    </Wrapper>
                    <Wrapper
                      width={width < 700 ? `calc(100% / 4 )` : `calc(100% / 2)`}
                      al={width < 700 && `flex-start`}
                      cursor={`pointer`}
                      onClick={() => moveLinkHandler(`/usb?type=USB Type-C`)}
                    >
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2F%E1%84%85%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%A5%202.svg?alt=media&token=7d1527f3-0dda-4d00-991e-d3e8c64f094a`}
                        width={width < 700 ? `52px` : `62px`}
                        height={width < 700 ? `26px` : `40px`}
                        objectFit={`contain`}
                        margin={width < 700 ? `0 0 10px` : `0 0 20px`}
                      />
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        USB Type C
                      </Text>
                    </Wrapper>
                  </Wrapper>
                </Wrapper>
                <Wrapper
                  al={width < 700 && `flex-start`}
                  padding={width < 700 && `0 50px`}
                  width={width < 700 ? `100%` : `60%`}
                >
                  <Text
                    fontSize={width < 700 ? `10px` : `20px`}
                    margin={width < 700 ? `15px 0 10px` : `0 0 20px`}
                  >
                    Network
                  </Text>
                  <Wrapper
                    dr={`row`}
                    padding={width < 700 ? `0` : `0 65px`}
                    al={`flex-start`}
                  >
                    <Wrapper
                      width={`calc(100% / 4)`}
                      ju={`flex-start`}
                      cursor={`pointer`}
                      al={width < 700 && `flex-start`}
                      onClick={() =>
                        moveLinkHandler(`/p_network?type=LAN Cable`)
                      }
                    >
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2FLAN%20Cable(Ethernet%20RJ-45%20Connector).svg?alt=media&token=009d72bc-d4e1-481a-a834-cc99d977072f`}
                        width={width < 700 ? `100%` : `62px`}
                        height={width < 700 ? `21px` : `40px`}
                        objectFit={`contain`}
                        margin={width < 700 ? `5px 0 10px` : `0 0 20px`}
                      />
                      <Wrapper>
                        <Text
                          fontWeight={`300`}
                          fontSize={width < 700 ? `8px` : `16px`}
                          lineHeight={width < 700 && `1.3`}
                        >
                          Ethernet RJ45
                        </Text>
                        <Text
                          fontWeight={`300`}
                          fontSize={width < 700 ? `8px` : `16px`}
                          lineHeight={width < 700 && `1.3`}
                        >
                          Connector
                        </Text>
                      </Wrapper>
                    </Wrapper>
                    <Wrapper
                      width={`calc(100% / 4)`}
                      ju={`flex-start`}
                      cursor={`pointer`}
                      onClick={() => moveLinkHandler(`/p_network?type=RJ45`)}
                    >
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2F%E1%84%85%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%A5%20-1.svg?alt=media&token=0a8d29c2-5035-49b2-95e3-c2350f6d2436`}
                        width={width < 700 ? `26px` : `62px`}
                        height={width < 700 ? `auto` : `40px`}
                        objectFit={`contain`}
                        margin={width < 700 ? `0 0 10px` : `0 0 20px`}
                      />
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        Ethernet
                      </Text>
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        RJ45 Port
                      </Text>
                    </Wrapper>
                    <Wrapper width={`calc(100% / 4)`} ju={`flex-start`}>
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2F%E1%84%85%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%A5%20-2.svg?alt=media&token=0be31c59-b013-46bd-8910-bf3c31af0cc7`}
                        width={width < 700 ? `30px` : `62px`}
                        height={width < 700 ? `auto` : `40px`}
                        objectFit={`contain`}
                        margin={width < 700 ? `0 0 10px` : `0 0 20px`}
                      />
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        GBIC Module
                      </Text>
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        (LC,SC)
                      </Text>
                    </Wrapper>
                    <Wrapper
                      width={`calc(100% / 4)`}
                      ju={`flex-start`}
                      cursor={`pointer`}
                      onClick={() =>
                        moveLinkHandler(`/p_network?type=SFP/QSFP`)
                      }
                    >
                      <Image
                        alt="icon"
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2FSFP%20Port%20(Mini%20GBIC).svg?alt=media&token=b2ef4865-ef70-4b08-9dcb-5a4da57d6b73`}
                        width={width < 700 ? `31px` : `62px`}
                        height={width < 700 ? `23px` : `40px`}
                        objectFit={`contain`}
                        margin={width < 700 ? `0 0 10px` : `0 0 20px`}
                      />
                      <Text
                        fontWeight={`300`}
                        fontSize={width < 700 ? `8px` : `16px`}
                        lineHeight={width < 700 && `1.3`}
                      >
                        SFP Module
                      </Text>
                    </Wrapper>
                  </Wrapper>
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </RsWrapper>
        </Wrapper>
      </Wrapper>
    </WholeWrapper>
  );
};

export default withResizeDetector(MM03Presenter);
