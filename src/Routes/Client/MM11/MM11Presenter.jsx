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
  width: ${(props) => props.width || `192px`};
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

  &:last-child {
    margin: 0;
  }

  &:hover {
    border: 1px solid ${Theme.white_C};
  }

  @media (max-width: 700px) {
    width: 240px;
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
  moveUrlHandler,
}) => {
  useTitle(`SITE MAP | ${process.env["HOMEPAGE_NAME"]}`);

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
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Fmodify%2FSITE%20MAP.svg?alt=media&token=4909a331-7ba8-485a-bdc9-09b77d740527`}
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
              width={`calc(100% - 92px)`}
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
                  <Title>SMARTKEEPER</Title>
                </Wrapper>
                <Wrapper width={`calc(100% - 226px)`}>
                  <Wrapper dr={`row`} ju={`flex-start`}>
                    <Box
                      onClick={() => {
                        moveLinkHandler("/about");
                      }}
                    >
                      <Text fontSize={`11px`}>SMARTKEEPER?</Text>
                      <IoIosArrowForward />
                    </Box>
                    <Box
                      onClick={() => {
                        moveLinkHandler("/malware");
                      }}
                    >
                      <Text fontSize={`11px`}>VIRUS INTRUSION</Text>
                      <IoIosArrowForward />
                    </Box>
                    <Box
                      onClick={() => {
                        moveLinkHandler("/insightpro");
                      }}
                      width={`205px`}
                    >
                      <Text fontSize={`11px`}>SMARTKEEPER PRO</Text>
                      <IoIosArrowForward />
                    </Box>
                    <Box
                      onClick={() => {
                        moveUrlHandler("https://www.schoolhealing2.co.kr/#/");
                      }}
                    >
                      <Text fontSize={`11px`}>SMARTKEEPER ESSENTIAL</Text>
                      <IoIosArrowForward />
                    </Box>
                  </Wrapper>

                  <Wrapper dr={`row`} margin={`20px 0 0`} ju={`flex-start`}>
                    <Box
                      onClick={() => {
                        moveLinkHandler("/example");
                      }}
                    >
                      <Text fontSize={`11px`}>REFERENCE(PRO)</Text>
                      <IoIosArrowForward />
                    </Box>
                    <Box
                      onClick={() => {
                        moveUrlHandler(
                          "https://www.schoolhealing2.co.kr/#/?type=reference"
                        );
                      }}
                    >
                      <Text fontSize={`11px`}>REFERENCE(ESSENTIAL)</Text>
                      <IoIosArrowForward />
                    </Box>
                    <Box
                      onClick={() => {
                        moveLinkHandler("/security");
                      }}
                      width={`205px`}
                    >
                      <Text fontSize={`11px`}>Completion of USB Security</Text>
                      <IoIosArrowForward />
                    </Box>
                    <Box
                      onClick={() => {
                        moveLinkHandler("/network");
                      }}
                      width={`225px`}
                    >
                      <Text fontSize={`11px`}>
                        Combination of Network Security
                      </Text>
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
                  <Wrapper dr={`row`} ju={`flex-start`}>
                    <Box
                      onClick={() => {
                        moveLinkHandler("/usb");
                      }}
                    >
                      <Text fontSize={`12px`}>USB Physical Security</Text>
                      <IoIosArrowForward />
                    </Box>
                    <Box
                      onClick={() => {
                        moveLinkHandler("/p_network");
                      }}
                    >
                      <Text fontSize={`11px`}>Network Physical Security</Text>
                      <IoIosArrowForward />
                    </Box>
                    <Box
                      onClick={() => {
                        moveLinkHandler("/computer");
                      }}
                      width={`210px`}
                    >
                      <Text fontSize={`12px`}>Computer Physical Security</Text>
                      <IoIosArrowForward />
                    </Box>
                    <Box
                      onClick={() => {
                        moveLinkHandler("/port");
                      }}
                      width={`210px`}
                    >
                      <Text fontSize={`12px`}>
                        Other Port Physical Security
                      </Text>
                      <IoIosArrowForward />
                    </Box>
                  </Wrapper>

                  <Wrapper dr={`row`} margin={`20px 0 0`} ju={`flex-start`}>
                    <Box
                      onClick={() => {
                        moveLinkHandler("/lock");
                      }}
                    >
                      <Text fontSize={`12px`}>Lock Key PRO</Text>
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
                  <Wrapper dr={`row`} ju={`flex-start`}>
                    <Box>
                      <Text fontSize={`12px`}>Basic Series</Text>
                      <IoIosArrowForward />
                    </Box>
                    <Box>
                      <Text fontSize={`11px`}>Mini Series</Text>
                      <IoIosArrowForward />
                    </Box>
                    <Box>
                      <Text fontSize={`12px`}>No Key Required</Text>
                      <IoIosArrowForward />
                    </Box>
                    <Box>
                      <Text fontSize={`12px`}>Lock Key ESSENTIAL</Text>
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
                  <Title>BUSINESS</Title>
                </Wrapper>
                <Wrapper width={`calc(100% - 226px)`}>
                  <Wrapper dr={`row`} ju={`flex-start`}>
                    <Box
                      onClick={() => {
                        moveLinkHandler("/info");
                      }}
                    >
                      <Text fontSize={`12px`}>Partnership</Text>
                      <IoIosArrowForward />
                    </Box>
                    <Box
                      onClick={() => {
                        moveLinkHandler("/info?type=history");
                      }}
                    >
                      <Text fontSize={`11px`}>How to Business</Text>
                      <IoIosArrowForward />
                    </Box>
                    <Box
                      onClick={() => {
                        moveLinkHandler("/info?type=sign");
                      }}
                    >
                      <Text fontSize={`12px`}>Where our Partners</Text>
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
                  <Title>INQUIRY</Title>
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
                      <Text fontSize={`11px`}>Contact us</Text>
                      <IoIosArrowForward />
                    </Box>
                    <Box
                      onClick={() => {
                        moveLinkHandler("/reference");
                      }}
                    >
                      <Text fontSize={`12px`}>Download</Text>
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
              <Title>SMARTKEEPER</Title>
              <Box
                margin={`20px 0 0 26px`}
                onClick={() => {
                  moveLinkHandler("/about");
                }}
              >
                <Text fontSize={`12px`}>SMARTKEEPER?</Text>
                <IoIosArrowForward />
              </Box>
              <Box
                onClick={() => {
                  moveLinkHandler("/malware");
                }}
              >
                <Text fontSize={`11px`}>VIRUS INTRUSION</Text>
                <IoIosArrowForward />
              </Box>
              <Box
                onClick={() => {
                  moveLinkHandler("/insightpro");
                }}
              >
                <Text fontSize={`12px`}>SMARTKEEPER PRO</Text>
                <IoIosArrowForward />
              </Box>
              <Box>
                <Text fontSize={`12px`}>SMARTKEEPER ESSENTIAL</Text>
                <IoIosArrowForward />
              </Box>
              <Box
                onClick={() => {
                  moveLinkHandler("/example");
                }}
              >
                <Text fontSize={`12px`}>REFERENCE(PRO)</Text>
                <IoIosArrowForward />
              </Box>
              <Box>
                <Text fontSize={`11px`}>REFERENCE(ESSENTIAL)</Text>
                <IoIosArrowForward />
              </Box>
              <Box
                onClick={() => {
                  moveLinkHandler("/security");
                }}
              >
                <Text fontSize={`12px`}>Completion of USB Security</Text>
                <IoIosArrowForward />
              </Box>
              <Box
                onClick={() => {
                  moveLinkHandler("/network");
                }}
              >
                <Text fontSize={`12px`}>Combination of Network Security</Text>
                <IoIosArrowForward />
              </Box>
              <Title margin={`35px 0 0 26px`}>PRO</Title>
              <Box
                onClick={() => {
                  moveLinkHandler("/usb");
                }}
              >
                <Text fontSize={`12px`}>USB Physical Security</Text>
                <IoIosArrowForward />
              </Box>
              <Box
                onClick={() => {
                  moveLinkHandler("/p_network");
                }}
              >
                <Text fontSize={`11px`}>Network Physical Security</Text>
                <IoIosArrowForward />
              </Box>
              <Box
                onClick={() => {
                  moveLinkHandler("/computer");
                }}
              >
                <Text fontSize={`12px`}>Computer Physical Security</Text>
                <IoIosArrowForward />
              </Box>
              <Box
                onClick={() => {
                  moveLinkHandler("/port");
                }}
              >
                <Text fontSize={`12px`}>Other Port Physical Security</Text>
                <IoIosArrowForward />
              </Box>
              <Box
                onClick={() => {
                  moveLinkHandler("/lock");
                }}
              >
                <Text fontSize={`12px`}>Lock Key PRO</Text>
                <IoIosArrowForward />
              </Box>
              <Title margin={`35px 0 0 26px`}>ESSENTIAL</Title>
              <Box>
                <Text fontSize={`12px`}>Basic Series</Text>
                <IoIosArrowForward />
              </Box>
              <Box>
                <Text fontSize={`11px`}>Mini Series</Text>
                <IoIosArrowForward />
              </Box>
              <Box>
                <Text fontSize={`12px`}>No Key Required</Text>
                <IoIosArrowForward />
              </Box>
              <Box>
                <Text fontSize={`12px`}>Lock Key ESSENTIAL</Text>
                <IoIosArrowForward />
              </Box>
              <Title margin={`35px 0 0 26px`}>BUSINESS</Title>
              <Box
                onClick={() => {
                  moveLinkHandler("/info");
                }}
              >
                <Text fontSize={`12px`}>Partnership</Text>
                <IoIosArrowForward />
              </Box>
              <Box
                onClick={() => {
                  moveLinkHandler("/info?type=history");
                }}
              >
                <Text fontSize={`11px`}>How to Business</Text>
                <IoIosArrowForward />
              </Box>
              <Box
                onClick={() => {
                  moveLinkHandler("/info?type=sign");
                }}
              >
                <Text fontSize={`12px`}>Where our Partners</Text>
                <IoIosArrowForward />
              </Box>
              <Title margin={`35px 0 0 26px`}>INQUIRY</Title>
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
                <Text fontSize={`11px`}>Contact us</Text>
                <IoIosArrowForward />
              </Box>
              <Box
                onClick={() => {
                  moveLinkHandler("/reference");
                }}
                margin={`15px 0 0 26px !important`}
              >
                <Text fontSize={`12px`}>Download</Text>
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
