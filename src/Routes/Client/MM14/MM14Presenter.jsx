import React from "react";
import withSplitting from "../../../Lib/withSplitting";
import {
  WholeWrapper,
  RsWrapper,
  Wrapper,
  Text,
  Image,
  CommonSubTitle,
  ATag,
} from "../../../Components/CommonComponents";
import styled from "styled-components";
import { withResizeDetector } from "react-resize-detector";
import useTitle from "@4leaf.ysh/use-title";
import Theme from "../../../Styles/Theme";
import { dotAni } from "../../../Components/AnimationCommon";

const Dot = styled(Wrapper)`
  position: relative;
  cursor: pointer;

  img {
    display: none;
  }

  :hover img {
    display: flex;
  }

  &:before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -25.5px;
    margin-left: -25.5px;
    width: 51px;
    height: 51px;
    background: rgba(255, 255, 255, 0.5);
    animation: ${dotAni} 1.5s ${(props) => props.delay} infinite;
    border-radius: 100%;

    @media (max-width: 700px) {
      margin-top: -10px;
      margin-left: -10px;
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: 700px) {
    width: 5px;
    height: 5px;
  }
`;

const MM14Presenter = ({
  width,
  //
  point,
  map,
  overMap,
  setOverMap,
  //
  wholeRef,
  //
  ableIcon,
  setAbleIcon,
}) => {
  useTitle(`Contact us | ${process.env["HOMEPAGE_NAME"]}`);

  return (
    <WholeWrapper
      ref={wholeRef}
      bgColor={Theme.black_C}
      color={Theme.white_C}
      padding={`0 0 200px`}
    >
      <RsWrapper>
        <Wrapper
          padding={width < 900 && `0 36px`}
          margin={`160px 0 15px`}
          al={width < 900 && `flex-start`}
        >
          <Image
            alt="contact"
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ftitle%2FContact%20us.svg?alt=media&token=ba2e1b7a-c77d-4315-8526-53b595f21a12`}
            width={width < 900 ? `164px` : `383px`}
          />
        </Wrapper>
        <Text
          fontSize={`18px`}
          color={Theme.greyTheme7_C}
          display={width < 900 ? `none` : `flex`}
        >
          Find a SMARTKEEPER distributor near your region
        </Text>
        <Text
          fontSize={`18px`}
          color={Theme.greyTheme7_C}
          display={width < 900 ? `flex` : `none`}
          width={`100%`}
          textAlign={`left`}
          padding={width < 900 && `0 36px`}
        >
          Find a SMARTKEEPER distributor
        </Text>
        <Text
          width={`100%`}
          textAlign={`left`}
          padding={width < 900 && `0 36px 80px`}
          fontSize={`18px`}
          color={Theme.greyTheme7_C}
          display={width < 900 ? `flex` : `none`}
        >
          near your region
        </Text>

        <Wrapper isRelative={true}>
          <Image
            width={`100%`}
            src={
              map[
                overMap !== 0
                  ? overMap
                  : ableIcon !== null
                  ? point[ableIcon].map
                  : 0
              ]
            }
          />
          {point.map((data, idx) => {
            return (
              <Wrapper
                isAbsolute={true}
                width={`50px`}
                height={`50px`}
                top={data.top}
                left={data.left}
                key={idx}
              >
                {ableIcon !== idx && (
                  <Dot
                    width={`15px`}
                    height={`15px`}
                    radius={`50%`}
                    bgColor={`#fff`}
                    delay={idx % 2 === 0 ? `0s` : `0.15s`}
                    onClick={() => setAbleIcon(idx)}
                    onMouseOver={() => setOverMap(data.map)}
                    onMouseOut={() => setOverMap(0)}
                    zIndex={`10`}
                  >
                    <Image
                      isAbsolute={true}
                      src={data.src}
                      width={`50px`}
                      height={`50px`}
                      top={`-16px`}
                      letf={`0px`}
                    />
                  </Dot>
                )}
              </Wrapper>
            );
          })}
          {ableIcon !== null &&
            point.map((data, idx) => {
              return (
                <Wrapper
                  isAbsolute={true}
                  width={`50px`}
                  height={`50px`}
                  top={data.top}
                  left={data.left}
                  key={idx}
                >
                  {ableIcon === idx && (
                    <>
                      <Wrapper
                        width={`100%`}
                        height={`100%`}
                        isFixed={true}
                        bgColor={`rgba(0,0,0,0.4)`}
                        top={`0`}
                        left={`0`}
                        onClick={() => setAbleIcon(null)}
                      ></Wrapper>
                      <Wrapper
                        isAbsolute={true}
                        width={`370px`}
                        top={`0px`}
                        left={`0px`}
                        dr={`row`}
                        ju={`space-between`}
                        al={`flex-start`}
                        zIndex={`100`}
                        onClick={() => setAbleIcon(null)}
                      >
                        <Image src={data.src} width={`50px`} height={`50px`} />
                        <Wrapper isRelative={true} width={`300px`}>
                          <Image
                            src={data.info}
                            width={`300px`}
                            isFixed={width < 900 ? true : false}
                            top={width < 900 ? `52%` : ``}
                            transform={width < 900 ? `translateX(-50%)` : ``}
                            left={width < 900 ? `50%` : ``}
                          />
                          {/* data.mobile 등등 나오면 됨 */}
                          <Wrapper
                            isAbsolute={true}
                            top={`68px`}
                            left={`0`}
                            padding={`0 25px`}
                            color={Theme.darkGrey_C}
                            al={`flex-start`}
                            fontSize={`12px`}
                          >
                            {data.mobile && (
                              <Wrapper width={`auto`} dr={`row`}>
                                <Wrapper
                                  al={`flex-start`}
                                  fontWeight={`900`}
                                  margin={`0 10px 0 0`}
                                  width={`12px`}
                                >
                                  T
                                </Wrapper>
                                | &nbsp;{data.mobile}
                              </Wrapper>
                            )}
                            {data.email && (
                              <Wrapper
                                width={`auto`}
                                dr={`row`}
                                margin={`13px 0`}
                              >
                                <Wrapper
                                  al={`flex-start`}
                                  fontWeight={`900`}
                                  margin={`0 10px 0 0`}
                                  width={`12px`}
                                >
                                  E
                                </Wrapper>
                                | &nbsp;
                                <ATag
                                  width={`auto`}
                                  href={`mailto:${data.email}`}
                                >
                                  {data.email}
                                </ATag>
                              </Wrapper>
                            )}
                            {data.web && (
                              <Wrapper width={`auto`} dr={`row`}>
                                <Wrapper
                                  al={`flex-start`}
                                  fontWeight={`900`}
                                  margin={`0 10px 0 0`}
                                  width={`12px`}
                                >
                                  W
                                </Wrapper>
                                | &nbsp;
                                <ATag
                                  width={`auto`}
                                  href={`https://${data.web}`}
                                  target={`_blank`}
                                >
                                  {data.web}
                                </ATag>
                              </Wrapper>
                            )}
                          </Wrapper>
                        </Wrapper>
                      </Wrapper>

                      {data.mobile2 && (
                        <Wrapper
                          isAbsolute={true}
                          width={`370px`}
                          top={`160px`}
                          left={`0px`}
                          dr={`row`}
                          ju={`space-between`}
                          al={`flex-start`}
                          onClick={() => setAbleIcon(null)}
                        >
                          <Wrapper width={`50px`} height={`50px`} />
                          <Wrapper isRelative={true} width={`300px`}>
                            <Image
                              src={data.info}
                              width={`300px`}
                              isFixed={width < 900 ? true : false}
                              top={width < 900 ? `52%` : ``}
                              transform={width < 900 ? `translateX(-50%)` : ``}
                              left={width < 900 ? `50%` : ``}
                            />
                            {/* data.mobile2 등등 나오면 됨 */}
                            <Wrapper
                              isAbsolute={true}
                              top={`68px`}
                              left={`0`}
                              padding={`0 25px`}
                              color={Theme.darkGrey_C}
                              al={`flex-start`}
                              fontSize={`12px`}
                            >
                              <Wrapper width={`auto`} dr={`row`}>
                                <Wrapper
                                  al={`flex-start`}
                                  fontWeight={`900`}
                                  margin={`0 10px 0 0`}
                                  width={`12px`}
                                >
                                  T
                                </Wrapper>
                                | &nbsp;{data.mobile2}
                              </Wrapper>
                              <Wrapper
                                width={`auto`}
                                dr={`row`}
                                margin={`13px 0`}
                              >
                                <Wrapper
                                  al={`flex-start`}
                                  fontWeight={`900`}
                                  margin={`0 10px 0 0`}
                                  width={`12px`}
                                >
                                  E
                                </Wrapper>
                                | &nbsp;
                                <ATag
                                  width={`auto`}
                                  href={`mailto:${data.email2}`}
                                >
                                  {data.email}
                                </ATag>
                              </Wrapper>
                            </Wrapper>
                          </Wrapper>
                        </Wrapper>
                      )}
                    </>
                  )}
                </Wrapper>
              );
            })}
        </Wrapper>
      </RsWrapper>
    </WholeWrapper>
  );
};

export default withResizeDetector(MM14Presenter);
