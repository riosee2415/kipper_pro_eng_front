import React from "react";
import withSplitting from "../../../Lib/withSplitting";
import {
  WholeWrapper,
  RsWrapper,
  Wrapper,
  Text,
  Image,
  CommonSubTitle,
} from "../../../Components/CommonComponents";
import styled from "styled-components";
import { withResizeDetector } from "react-resize-detector";
import useTitle from "@4leaf.ysh/use-title";
import Theme from "../../../Styles/Theme";
import { dotAni } from "../../../Components/AnimationCommon";

const Dot = styled(Wrapper)`
  position: relative;
  cursor: pointer;

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
    animation: ${dotAni} 1.5s infinite;
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
  //
  ableIcon,
  setAbleIcon,
}) => {
  useTitle(`Contact us | ${process.env["HOMEPAGE_NAME"]}`);

  return (
    <WholeWrapper
      bgColor={Theme.black_C}
      color={Theme.white_C}
      padding={`0 0 200px`}
    >
      <RsWrapper>
        <Wrapper padding={width < 900 && `0 0 0 36px`} margin={`160px 0 15px`}>
          <Image
            alt="contact"
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ftitle%2FContact%20us.svg?alt=media&token=ba2e1b7a-c77d-4315-8526-53b595f21a12`}
            width={width < 900 ? `164px` : `383px`}
          />
        </Wrapper>
        <Text fontSize={`18px`} color={Theme.greyTheme7_C}>
          Find a SMARTKEEPER distributor near your region
        </Text>

        <Wrapper isRelative={true}>
          <Image
            width={`100%`}
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2F%E1%84%8C%E1%85%B5%E1%84%83%E1%85%A9.png?alt=media&token=37261bad-6bd3-4223-9db4-ee54b98cc834`}
          />
          {point.map((data, idx) => {
            return (
              <Wrapper
                isAbsolute={true}
                width={`50px`}
                height={`50px`}
                top={data.top}
                left={data.left}
              >
                {ableIcon !== idx ? (
                  <Dot
                    width={`15px`}
                    height={`15px`}
                    radius={`50%`}
                    bgColor={`#fff`}
                    onClick={() => setAbleIcon(idx)}
                  ></Dot>
                ) : (
                  <Wrapper
                    isAbsolute={true}
                    width={`370px`}
                    top={`0px`}
                    left={`0px`}
                    dr={`row`}
                    ju={`space-between`}
                    al={`flex-start`}
                    onClick={() => setAbleIcon(null)}
                  >
                    <Image src={data.src} width={`50px`} height={`50px`} />
                    <Image
                      src={data.info}
                      width={`300px`}
                      isFixed={width < 900 ? true : false}
                      top={width < 900 ? `52%` : ``}
                      transform={width < 900 ? `translateX(-50%)` : ``}
                      left={width < 900 ? `50%` : ``}
                    />
                  </Wrapper>
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
