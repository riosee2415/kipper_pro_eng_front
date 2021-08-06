import React from "react";
import withSplitting from "../../../Lib/withSplitting";
import {
  RsWrapper,
  WholeWrapper,
  Image,
  Wrapper,
  Text,
  ATag,
} from "../../../Components/CommonComponents";
import styled from "styled-components";
import { withResizeDetector } from "react-resize-detector";
import useTitle from "@4leaf.ysh/use-title";
import Theme from "../../../Styles/Theme";
import { IoIosArrowForward } from "react-icons/io";

const Box = styled(Wrapper)`
  cursor: pointer;
  width: 187px;
  height: 30px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 30px;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 17px 0 10px;
  color: ${Theme.white_C};
  border: 1px solid transparent;
  transition: 0.5s;
  margin: ${(props) => props.margin || `0 17px 0 0`};

  &:hover {
    border: 1px solid ${Theme.white_C};
  }

  @media (max-width: 700px) {
    margin: ${(props) => props.margin || `15px 0 0 26px`};
  }
`;

const Title = styled(Wrapper)`
  width: 140px;
  height: 30px;
  border-radius: 30px;
  border: 2px solid ${(props) => props.theme.white_C};
  color: ${(props) => props.theme.white_C};
  margin: ${(props) => props.margin || `0 39px 0 26px`};
  font-size: 12px;
  font-weight: bold;
`;

const Dot = styled(Wrapper)`
  width: 21px;
  height: 21px;
  border: 5px solid ${(props) => props.theme.white_C};
  border-radius: 100%;
  position: relative;
  margin-bottom: ${(props) => props.marginBottom || `68px`};

  &:before {
    content: "";
    position: absolute;
    bottom: ${(props) => props.beBottom || `-73px`};
    left: 50%;
    width: 2px;
    height: ${(props) => props.beHeight || `70px`};
    background: ${(props) => props.theme.white_C};
    margin: 0 0 0 -1px;
  }

  @media (max-width: 700px) {
    width: 13px;
    height: 13px;
    border: 3px solid ${(props) => props.theme.white_C};
  }
`;

const MM11Presenter = ({
  width,
  //
  moveLinkHandler,
}) => {
  useTitle(`사이트맵 | ${process.env["HOMEPAGE_NAME"]}`);

  return (
    <WholeWrapper bgColor={`rgb(36, 36, 36)`}>
      <RsWrapper
        padding={width < 900 ? `115px 0 100px` : `280px 0 240px`}
        paddingLeft={width < 900 && `36px`}
        paddingRight={width < 900 && `95px`}
      >
        <Wrapper al={`flex-start`}>
          <Image
            alt="site Map"
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM11%2FSITE%20MAP.svg?alt=media&token=b721bb18-c94a-40a9-af33-56cd32ddfbb6`}
            width={width < 700 ? `148px` : `344px`}
            margin={`0 0 80px`}
          />
          <Image
            alt="HOME"
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM11%2FHOME.svg?alt=media&token=12eaf6a3-09b3-4fc1-a31e-a76d560c8855`}
            width={`46px`}
            display={width < 700 ? `flex` : `none`}
          />
          <Wrapper
            dr={`row`}
            ju={`flex-start`}
            al={`flex-start`}
            display={width < 700 ? `none` : `flex`}
          >
            <Image
              alt="HOME"
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM11%2FHOME.svg?alt=media&token=12eaf6a3-09b3-4fc1-a31e-a76d560c8855`}
              width={`92px`}
              display={width < 700 ? `none` : `flex`}
            />
            <Wrapper
              width={`calc(100% - 92px - 45px)`}
              padding={`0 0 0 45px`}
              al={`flex-start`}
            >
              <Dot />

              <Wrapper dr={`row`} ju={`flex-start`} al={`flex-start`}>
                <Wrapper
                  width={`226px`}
                  al={`flex-start`}
                  ju={`flex-start`}
                  dr={`row`}
                >
                  <Dot
                    beHeight={`119px`}
                    beBottom={`-121px`}
                    marginBottom={`116px`}
                  />
                  <Title>스마트키퍼</Title>
                </Wrapper>
                <Wrapper width={`calc(100% - 226px)`}>
                  <Wrapper dr={`row`}>
                    <Box
                      onClick={() => {
                        moveLinkHandler("/about");
                      }}
                    >
                      <Text fontSize={`12px`}>스마트키퍼란?</Text>
                      <IoIosArrowForward />
                    </Box>
                    <Box
                      onClick={() => {
                        moveLinkHandler("/malware");
                      }}
                    >
                      <Text fontSize={`11px`}>
                        악성코드의 침입과 데이터 유출
                      </Text>
                      <IoIosArrowForward />
                    </Box>
                    <Box
                      onClick={() => {
                        moveLinkHandler("/insightpro");
                      }}
                    >
                      <Text fontSize={`12px`}>스마트키퍼 프로</Text>
                      <IoIosArrowForward />
                    </Box>
                    <Box>
                      <Text fontSize={`12px`}>스마트키퍼 에센셜</Text>
                      <IoIosArrowForward />
                    </Box>
                  </Wrapper>

                  <Wrapper dr={`row`} margin={`20px 0 0`}>
                    <Box
                      onClick={() => {
                        moveLinkHandler("/example");
                      }}
                    >
                      <Text fontSize={`12px`}>적용사례(프로)</Text>
                      <IoIosArrowForward />
                    </Box>
                    <Box>
                      <Text fontSize={`11px`}>적용 사례(에센셜)</Text>
                      <IoIosArrowForward />
                    </Box>
                    <Box
                      onClick={() => {
                        moveLinkHandler("/security");
                      }}
                    >
                      <Text fontSize={`12px`}>USB보안의 완성</Text>
                      <IoIosArrowForward />
                    </Box>
                    <Box
                      onClick={() => {
                        moveLinkHandler("/network");
                      }}
                    >
                      <Text fontSize={`12px`}>네트워크 보안의 이상적 조합</Text>
                      <IoIosArrowForward />
                    </Box>
                  </Wrapper>
                </Wrapper>
              </Wrapper>

              <Wrapper dr={`row`} ju={`flex-start`} al={`flex-start`}>
                <Wrapper
                  width={`226px`}
                  al={`flex-start`}
                  ju={`flex-start`}
                  dr={`row`}
                >
                  <Dot
                    beHeight={`119px`}
                    beBottom={`-121px`}
                    marginBottom={`116px`}
                  />
                  <Title>PRO</Title>
                </Wrapper>
                <Wrapper width={`calc(100% - 226px)`}>
                  <Wrapper dr={`row`}>
                    <Box
                      onClick={() => {
                        moveLinkHandler("/usb");
                      }}
                    >
                      <Text fontSize={`12px`}>USB 물리보안</Text>
                      <IoIosArrowForward />
                    </Box>
                    <Box
                      onClick={() => {
                        moveLinkHandler("/p_network");
                      }}
                    >
                      <Text fontSize={`11px`}>네트워크 물리보안</Text>
                      <IoIosArrowForward />
                    </Box>
                    <Box
                      onClick={() => {
                        moveLinkHandler("/computer");
                      }}
                    >
                      <Text fontSize={`12px`}>컴퓨터 물리보안</Text>
                      <IoIosArrowForward />
                    </Box>
                    <Box
                      onClick={() => {
                        moveLinkHandler("/port");
                      }}
                    >
                      <Text fontSize={`12px`}>기타포트 물리보안</Text>
                      <IoIosArrowForward />
                    </Box>
                  </Wrapper>

                  <Wrapper dr={`row`} margin={`20px 0 0`} ju={`flex-start`}>
                    <Box
                      onClick={() => {
                        moveLinkHandler("/lock");
                      }}
                    >
                      <Text fontSize={`12px`}>락키 PRO</Text>
                      <IoIosArrowForward />
                    </Box>
                  </Wrapper>
                </Wrapper>
              </Wrapper>

              <Wrapper dr={`row`} ju={`flex-start`} al={`flex-start`}>
                <Wrapper
                  width={`226px`}
                  al={`flex-start`}
                  ju={`flex-start`}
                  dr={`row`}
                >
                  <Dot
                    beHeight={`119px`}
                    beBottom={`-121px`}
                    marginBottom={`116px`}
                  />
                  <Title>ESSENTIAL</Title>
                </Wrapper>
                <Wrapper width={`calc(100% - 226px)`}>
                  <Wrapper dr={`row`}>
                    <Box>
                      <Text fontSize={`12px`}>베이직 시리즈</Text>
                      <IoIosArrowForward />
                    </Box>
                    <Box>
                      <Text fontSize={`11px`}>미니 시리즈</Text>
                      <IoIosArrowForward />
                    </Box>
                    <Box>
                      <Text fontSize={`12px`}>키 불필요 제품</Text>
                      <IoIosArrowForward />
                    </Box>
                    <Box>
                      <Text fontSize={`12px`}>락키 ESSENTIAL</Text>
                      <IoIosArrowForward />
                    </Box>
                  </Wrapper>
                </Wrapper>
              </Wrapper>

              <Wrapper dr={`row`} ju={`flex-start`} al={`flex-start`}>
                <Wrapper
                  width={`226px`}
                  al={`flex-start`}
                  ju={`flex-start`}
                  dr={`row`}
                >
                  <Dot
                    beHeight={`119px`}
                    beBottom={`-121px`}
                    marginBottom={`116px`}
                  />
                  <Title>회사소개</Title>
                </Wrapper>
                <Wrapper width={`calc(100% - 226px)`}>
                  <Wrapper dr={`row`} ju={`flex-start`}>
                    <Box
                      onClick={() => {
                        moveLinkHandler("/info");
                      }}
                    >
                      <Text fontSize={`12px`}>회사소개</Text>
                      <IoIosArrowForward />
                    </Box>
                    <Box
                      onClick={() => {
                        moveLinkHandler("/info?type=history");
                      }}
                    >
                      <Text fontSize={`11px`}>연혁</Text>
                      <IoIosArrowForward />
                    </Box>
                    <Box
                      onClick={() => {
                        moveLinkHandler("/info?type=sign");
                      }}
                    >
                      <Text fontSize={`12px`}>수상 및 인증</Text>
                      <IoIosArrowForward />
                    </Box>
                  </Wrapper>
                </Wrapper>
              </Wrapper>

              <Wrapper
                dr={`row`}
                ju={`flex-start`}
                al={`flex-start`}
                margin={`-8px 0 0`}
              >
                <Wrapper width={`226px`} ju={`flex-start`} dr={`row`}>
                  <Dot beHeight={`0`} marginBottom={`0`} />
                  <Title>고객센터</Title>
                </Wrapper>
                <Wrapper width={`calc(100% - 226px)`}>
                  <Wrapper dr={`row`} ju={`flex-start`}>
                    <Box
                      onClick={() => {
                        moveLinkHandler("/faq");
                      }}
                    >
                      <Text fontSize={`12px`}>FAQ</Text>
                      <IoIosArrowForward />
                    </Box>
                    <Box
                      onClick={() => {
                        moveLinkHandler("/contact");
                      }}
                    >
                      <Text fontSize={`11px`}>문의하기</Text>
                      <IoIosArrowForward />
                    </Box>
                    <Box
                      onClick={() => {
                        moveLinkHandler("/reference");
                      }}
                    >
                      <Text fontSize={`12px`}>자료실</Text>
                      <IoIosArrowForward />
                    </Box>
                  </Wrapper>
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </Wrapper>

          {/* mobile */}
          <Wrapper
            dr={`row`}
            ju={`flex-start`}
            al={`flex-start`}
            display={width < 700 ? `flex` : `none`}
            margin={`20px 0 0`}
          >
            <Wrapper width={`13px`} margin={`0 0 0 17px`}>
              <Dot
                beHeight={`34.5px`}
                marginBottom={`34.5px`}
                beBottom={`-38px`}
              />
              <Dot
                beHeight={`425px`}
                marginBottom={`420px`}
                beBottom={`-425px`}
              />
              <Dot
                beHeight={`280px`}
                marginBottom={`275px`}
                beBottom={`-280px`}
              />
              <Dot
                beHeight={`235px`}
                marginBottom={`230px`}
                beBottom={`-235px`}
              />
              <Dot
                beHeight={`195px`}
                marginBottom={`190px`}
                beBottom={`-195px`}
              />
              <Dot beHeight={`0`} marginBottom={`0`} />
            </Wrapper>
            <Wrapper
              width={`calc(100% - 30px)`}
              al={`flex-start`}
              margin={`40.5px 0 0`}
            >
              <Title>스마트키퍼</Title>
              <Box
                margin={`20px 0 0 26px`}
                onClick={() => {
                  moveLinkHandler("/about");
                }}
              >
                <Text fontSize={`12px`}>스마트키퍼란?</Text>
                <IoIosArrowForward />
              </Box>
              <Box
                onClick={() => {
                  moveLinkHandler("/malware");
                }}
              >
                <Text fontSize={`11px`}>악성코드의 침입과 데이터 유출</Text>
                <IoIosArrowForward />
              </Box>
              <Box
                onClick={() => {
                  moveLinkHandler("/insightpro");
                }}
              >
                <Text fontSize={`12px`}>스마트키퍼 프로</Text>
                <IoIosArrowForward />
              </Box>
              <Box>
                <Text fontSize={`12px`}>스마트키퍼 에센셜</Text>
                <IoIosArrowForward />
              </Box>
              <Box
                onClick={() => {
                  moveLinkHandler("/example");
                }}
              >
                <Text fontSize={`12px`}>적용사례(프로)</Text>
                <IoIosArrowForward />
              </Box>
              <Box>
                <Text fontSize={`11px`}>적용 사례(에센셜)</Text>
                <IoIosArrowForward />
              </Box>
              <Box
                onClick={() => {
                  moveLinkHandler("/security");
                }}
              >
                <Text fontSize={`12px`}>USB보안의 완성</Text>
                <IoIosArrowForward />
              </Box>
              <Box
                onClick={() => {
                  moveLinkHandler("/network");
                }}
              >
                <Text fontSize={`12px`}>네트워크 보안의 이상적 조합</Text>
                <IoIosArrowForward />
              </Box>
              <Title margin={`35px 0 0 26px`}>PRO</Title>
              <Box
                onClick={() => {
                  moveLinkHandler("/usb");
                }}
              >
                <Text fontSize={`12px`}>USB 물리보안</Text>
                <IoIosArrowForward />
              </Box>
              <Box
                onClick={() => {
                  moveLinkHandler("/p_network");
                }}
              >
                <Text fontSize={`11px`}>네트워크 물리보안</Text>
                <IoIosArrowForward />
              </Box>
              <Box
                onClick={() => {
                  moveLinkHandler("/computer");
                }}
              >
                <Text fontSize={`12px`}>컴퓨터 물리보안</Text>
                <IoIosArrowForward />
              </Box>
              <Box
                onClick={() => {
                  moveLinkHandler("/port");
                }}
              >
                <Text fontSize={`12px`}>기타포트 물리보안</Text>
                <IoIosArrowForward />
              </Box>
              <Box
                onClick={() => {
                  moveLinkHandler("/lock");
                }}
              >
                <Text fontSize={`12px`}>락키 PRO</Text>
                <IoIosArrowForward />
              </Box>
              <Title margin={`35px 0 0 26px`}>ESSENTIAL</Title>
              <Box>
                <Text fontSize={`12px`}>베이직 시리즈</Text>
                <IoIosArrowForward />
              </Box>
              <Box>
                <Text fontSize={`11px`}>미니 시리즈</Text>
                <IoIosArrowForward />
              </Box>
              <Box>
                <Text fontSize={`12px`}>키 불필요 제품</Text>
                <IoIosArrowForward />
              </Box>
              <Box>
                <Text fontSize={`12px`}>락키 ESSENTIAL</Text>
                <IoIosArrowForward />
              </Box>
              <Title margin={`35px 0 0 26px`}>회사소개</Title>
              <Box
                onClick={() => {
                  moveLinkHandler("/info");
                }}
              >
                <Text fontSize={`12px`}>회사소개</Text>
                <IoIosArrowForward />
              </Box>
              <Box
                onClick={() => {
                  moveLinkHandler("/info?type=history");
                }}
              >
                <Text fontSize={`11px`}>연혁</Text>
                <IoIosArrowForward />
              </Box>
              <Box
                onClick={() => {
                  moveLinkHandler("/info?type=sign");
                }}
              >
                <Text fontSize={`12px`}>수상 및 인증</Text>
                <IoIosArrowForward />
              </Box>
              <Title margin={`35px 0 0 26px`}>고객센터</Title>
              <Box
                onClick={() => {
                  moveLinkHandler("/faq");
                }}
              >
                <Text fontSize={`12px`}>FAQ</Text>
                <IoIosArrowForward />
              </Box>
              <Box
                onClick={() => {
                  moveLinkHandler("/contact");
                }}
              >
                <Text fontSize={`11px`}>문의하기</Text>
                <IoIosArrowForward />
              </Box>
              <Box
                onClick={() => {
                  moveLinkHandler("/reference");
                }}
              >
                <Text fontSize={`12px`}>자료실</Text>
                <IoIosArrowForward />
              </Box>
            </Wrapper>
          </Wrapper>
        </Wrapper>
        {/* <Image
          alt="sitemap"
          src={
            width < 900
              ? `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM11%2Fm-sitemap.png?alt=media&token=c3ce8692-f5f5-41c4-b2ac-5a1f9bf35154`
              : `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM11%2Fsitemap.png?alt=media&token=5b8d4443-c1c1-426b-8841-6fa78b0168d5`
          }
        /> */}
      </RsWrapper>
    </WholeWrapper>
  );
};

export default withResizeDetector(MM11Presenter);
