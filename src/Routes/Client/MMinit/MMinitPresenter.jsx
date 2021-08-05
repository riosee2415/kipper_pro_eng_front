import React from "react";
import withSplitting from "../../../Lib/withSplitting";
import {
  WholeWrapper,
  Wrapper,
  RsWrapper,
  Text,
  Image,
} from "../../../Components/CommonComponents";
import styled from "styled-components";
import { withResizeDetector } from "react-resize-detector";
import useTitle from "@4leaf.ysh/use-title";
import Theme from "../../../Styles/Theme";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { translate102 } from "../../../Components/AnimationCommon";

const ProText = styled.div`
  color: ${(props) => props.theme.white_C};
  text-align: center;
  opacity: 0;
  visibility: hidden;
  position: absolute;
  bottom: -65%;
  left: 0;
  width: 100%;
  transition: 0.6s;
`;

const ImgWrapper = styled(Wrapper)`
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &:hover:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  &:hover {
    .hoverImg {
      transform: scale(1.1);
    }
  }

  &:hover ${ProText} {
    opacity: 1;
    visibility: visible;

    @media (max-width: 700px) {
      display: none;
    }
  }
`;

const EssText = styled.div`
  color: ${(props) => props.theme.white_C};
  text-align: center;
  opacity: 0;
  visibility: hidden;
  position: absolute;
  bottom: -70%;
  left: 0;
  width: 100%;
  transition: 0.6s;
`;

const ImgWrapper2 = styled(Wrapper)`
  position: relative;
  overflow: hidden;
  cursor: pointer;

  & .hover {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    visibility: hidden;
    transition: 0.2s;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.68);
    z-index: 10;
  }

  /* &:hover:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  } */

  &:hover {
    &:before {
      background-color: transparent;
    }

    & .noHover {
      opacity: 0;
      visibility: hidden;
    }

    & .hover {
      opacity: 1;
      visibility: visible;
      transform: scale(1.1);
      transition: 0.2s;
    }

    & .noHoverSmart,
    .noHoverEss {
      display: none;
    }

    & .hoverSmart,
    .hoverEss {
      display: flex;
    }

    & ${EssText} {
      opacity: 1;
      visibility: visible;

      @media (max-width: 700px) {
        display: none;
      }
    }
  }
`;

const BeforeImg = styled(Wrapper)`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

const ArrowIcon = styled(Text)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & svg {
    font-size: 16px;
    margin-left: 5px;

    @media (max-width: 700px) {
      font-size: 14px;
    }
  }

  @media (max-width: 700px) {
    font-size: 14px;
  }
`;

const Arrow = styled(Wrapper)`
  position: absolute;
  bottom: 9%;
  left: calc(50% - 14px);
  width: auto;
  animation: ${translate102} 1.9s infinite;
  font-size: 28px;
  color: ${(props) => props.theme.white_C};

  @media (max-width: 700px) {
    bottom: 3%;

    & svg {
      color: rgb(0, 116, 188);
    }
  }
`;

const LinkTag = styled(Link)`
  width: ${(props) => props.width || `50%`};
  display: ${(props) => props.display || `flex`};
  align-items: ${(props) => props.al || `center`};
  justify-content: ${(props) => props.ju || `center`};
`;

const MMinitPresenter = ({ width, moveLinkHandler }) => {
  useTitle(`${process.env["HOMEPAGE_NAME"]}`);

  return (
    <WholeWrapper>
      <Wrapper isRelative={true}>
        <Wrapper dr={`row`}>
          <ImgWrapper
            width={width < 900 ? `100%` : `50%`}
            height={
              width < 1100
                ? width < 900
                  ? width < 700
                    ? `360px`
                    : `400px`
                  : `calc(100vh - 450px)`
                : `calc(100vh - 150px)`
            }
            isRelative={true}
            onClick={() =>
              moveLinkHandler("https://www.schoolhealing3.co.kr/#/pro")
            }
          >
            <Image
              className={`hoverImg`}
              height={
                width < 1100
                  ? width < 900
                    ? width < 700
                      ? `360px`
                      : `400px`
                    : `calc(100vh - 450px)`
                  : `calc(100vh - 150px)`
              }
              alt="image"
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2FLanding%2Fpro_image.png?alt=media&token=db7eb2c9-5486-492c-9243-735d8e03f1b8`}
            />

            <Wrapper
              isAbsolute={true}
              top={`0`}
              left={`0`}
              padding={`30px 0 0`}
              zIndex={`999`}
            >
              <Image
                width={width < 700 ? `100px` : `196px`}
                alt="smartkeeper"
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2FLanding%2FSMARTKEEPER_Landing.svg?alt=media&token=fb26aa20-1135-44e7-9a71-0e4cf0ff224a`}
              />
              <Image
                width={width < 700 ? `100px` : `156px`}
                margin={width < 900 ? `120px 0 0` : `300px 0 0`}
                alt="pro"
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2FLanding%2FPRO_Landing.svg?alt=media&token=0c98a306-433c-40ab-9f6c-bc0c31c6d12c`}
              />
              <ProText>
                <Wrapper
                  width={`25px`}
                  border={`1px solid ${Theme.white_C}`}
                  al={`center`}
                  margin={`0 auto`}
                ></Wrapper>
                <Text
                  fontSize={`25px`}
                  textAlign={`center`}
                  margin={`15px 0 0`}
                >
                  For the Professionals
                </Text>
                <Wrapper margin={`100px 0 0`}>
                  <Text fontSize={`18px`}>
                    더 나은 보안을 위해. 확인된 기업 외에는 판매하지 않습니다.
                  </Text>
                  <Text fontSize={`18px`}>
                    정부, 공공기관, 기반시설, 교통, 항만, 지자체, 발전소, 군,
                  </Text>
                  <Text fontSize={`18px`}>
                    군수업체, 대기업 제조사, 금융 등 글로벌 3천여 사이트의 선택
                  </Text>
                </Wrapper>
              </ProText>
            </Wrapper>
          </ImgWrapper>

          <ImgWrapper2
            width={width < 900 ? `100%` : `50%`}
            height={
              width < 1100
                ? width < 900
                  ? width < 700
                    ? `360px`
                    : `400px`
                  : `calc(100vh - 450px)`
                : `calc(100vh - 150px)`
            }
            isRelative={true}
            onClick={() =>
              moveLinkHandler("https://www.schoolhealing2.co.kr/#/main")
            }
          >
            <Image
              height={
                width < 1100
                  ? width < 900
                    ? width < 700
                      ? `360px`
                      : `400px`
                    : `calc(100vh - 450px)`
                  : `calc(100vh - 150px)`
              }
              alt="image"
              className={`noHover`}
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2FLanding%2Fessential-image.png?alt=media&token=eed0b43b-cb62-45ca-b624-0b57fe005392`}
            />
            <Image
              height={
                width < 1100
                  ? width < 900
                    ? width < 700
                      ? `360px`
                      : `400px`
                    : `calc(100vh - 450px)`
                  : `calc(100vh - 150px)`
              }
              alt="image"
              className={`hover`}
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2FLanding%2Fessential-2.png?alt=media&token=e36cf7db-c0b5-41a4-9804-b3cea70dafe0`}
            />

            <Wrapper
              isAbsolute={true}
              top={`0`}
              left={`0`}
              padding={`30px 0 0`}
              zIndex={`999`}
            >
              <Image
                className={`noHoverSmart`}
                width={width < 700 ? `100px` : `196px`}
                alt="smartkeeper"
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2FLanding%2Fess-smartkeeper.svg?alt=media&token=57bee5ad-8c09-4e96-a45d-79ff6602228b`}
              />
              <Image
                className={`hoverSmart`}
                display={`none`}
                width={width < 700 ? `100px` : `196px`}
                alt="smartkeeper"
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2FLanding%2FSMARTKEEPER_Landing.svg?alt=media&token=fb26aa20-1135-44e7-9a71-0e4cf0ff224a`}
              />

              <Image
                className={`noHoverEss`}
                width={width < 700 ? `258px` : `400px`}
                margin={width < 900 ? `120px 0 0` : `300px 0 0`}
                alt="essential"
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2FLanding%2FESSENTIAL.svg?alt=media&token=4ee4d600-46d9-44d2-8cad-8856be29eed4`}
              />
              <Image
                className={`hoverEss`}
                display={`none`}
                width={width < 700 ? `258px` : `400px`}
                margin={width < 900 ? `120px 0 0` : `300px 0 0`}
                alt="essential"
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2FLanding%2FESSENTIAL_Landing.svg?alt=media&token=2bb3c3ca-a1e9-40a2-84ef-9dfbe23ca1ab`}
              />
              <EssText>
                <Wrapper
                  width={`25px`}
                  border={`1px solid ${Theme.white_C}`}
                  al={`center`}
                  margin={`0 auto`}
                ></Wrapper>
                <Text
                  fontSize={`25px`}
                  textAlign={`center`}
                  margin={`15px 0 0`}
                >
                  Security for Your Ideas
                </Text>

                <Wrapper margin={`90px 0 0`}>
                  <Text fontSize={`18px`}>당신의 노력이 담긴 결과물,</Text>
                  <Text fontSize={`18px`}>
                    이제 더 안전하게 관리하세요. 온라인 유통모델 출시!
                  </Text>
                  <Text fontSize={`18px`}>
                    USB 포트부터 각종 입출력 포트의 잠금장치를
                  </Text>
                  <Text fontSize={`18px`}>
                    더 경제적인 가격으로 온라인에서 만나보세요.
                  </Text>
                </Wrapper>
              </EssText>
            </Wrapper>
          </ImgWrapper2>
          <Arrow>
            <FaArrowAltCircleDown />
          </Arrow>
        </Wrapper>
      </Wrapper>

      <Wrapper
        attachment={`initial`}
        bgPosition={width < 700 && `-680px 0`}
        bgImg={`url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2FLanding%2Fimage02.png?alt=media&token=af88cb43-aaa3-4161-ae76-f960b4217d35")`}
      >
        <RsWrapper
          width={`1230px`}
          al={`flex-start`}
          color={Theme.white_C}
          padding={width < 900 ? `100px 30px 60px` : `180px 0`}
        >
          <Text fontSize={width < 900 ? `26px` : `40px`} fontWeight={`bold`}>
            단언컨데,
          </Text>
          <Text
            display={width > 900 ? `flex` : `none`}
            fontSize={`40px`}
            fontWeight={`bold`}
          >
            가장 완벽한 보안은 직접 막는 것 입니다.
          </Text>
          <Text
            display={width < 900 ? `flex` : `none`}
            fontSize={`26px`}
            fontWeight={`bold`}
          >
            가장 완벽한 보안은
          </Text>
          <Text
            display={width < 900 ? `flex` : `none`}
            fontSize={`26px`}
            fontWeight={`bold`}
          >
            직접 막는 것 입니다.
          </Text>
          <Wrapper
            display={width > 900 ? `flex` : `none`}
            al={`flex-start`}
            padding={`30px 0`}
          >
            <Text fontSize={`20px`} fontWeight={`300`}>
              물리보안, 생소한 단어같지만
            </Text>
            <Text fontSize={`20px`} fontWeight={`300`}>
              갑옷과 방패, 그리고 울타리와 성벽 처럼 우린 오랫동안 물리적으로
              지켜왔습니다.
            </Text>
            <Text fontSize={`20px`} fontWeight={`300`}>
              물리적인 것은 실체가 있고, 실체가 있는 것은 언제나 완벽했습니다.
            </Text>
            <Text fontSize={`20px`} fontWeight={`300`}>
              스마트키퍼는 물리보안의 표준을 위해 정진해 나가고 있습니다.
            </Text>
          </Wrapper>

          <Wrapper
            display={width < 900 ? `flex` : `none`}
            al={`flex-start`}
            padding={width < 900 ? `30px 0 18px` : `30px 0`}
          >
            <Text fontSize={`18px`} fontWeight={`300`}>
              물리보안, 생소한 단어같지만
            </Text>
            <Text fontSize={`18px`} fontWeight={`300`}>
              갑옷과 방패, 그리고 울타리와 성벽 처럼
            </Text>
            <Text fontSize={`18px`} fontWeight={`300`}>
              우린 오랫동안 물리적으로 지켜왔습니다.
            </Text>
            <Text fontSize={`18px`} fontWeight={`300`}>
              물리적인 것은 실체가 있고,
            </Text>
            <Text fontSize={`18px`} fontWeight={`300`}>
              실체가 있는 것은 언제나 완벽했습니다.
            </Text>
            <Text fontSize={`18px`} fontWeight={`300`}>
              스마트키퍼는 물리보안의 표준을 위해
            </Text>
            <Text fontSize={`18px`} fontWeight={`300`}>
              정진해 나가고 있습니다.
            </Text>
          </Wrapper>
          <Link to="/about">
            <ArrowIcon>
              더 알아보기
              <FaChevronRight />
            </ArrowIcon>
          </Link>
        </RsWrapper>
      </Wrapper>
      <BeforeImg
        bgPosition={width < 700 && `-720px 0`}
        attachment={`initial`}
        bgImg={`url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2FLanding%2Fimage03.png?alt=media&token=054146a5-1c4b-456b-bcc6-5353e7fade52")`}
      >
        <RsWrapper
          width={`1230px`}
          al={`flex-start`}
          color={Theme.white_C}
          padding={width < 900 ? `100px 30px 60px` : `180px 0`}
        >
          <Text fontSize={width < 900 ? `26px` : `40px`} fontWeight={`bold`}>
            우리는
          </Text>
          <Text fontSize={width < 900 ? `26px` : `40px`} fontWeight={`bold`}>
            고객의 목소리를 중시합니다.
          </Text>
          <Wrapper
            display={width > 900 ? `flex` : `none`}
            al={`flex-start`}
            padding={`30px 0`}
          >
            <Text fontSize={`20px`} fontWeight={`300`}>
              스마트키퍼는 실제 보안 담당자와의 끊임없는 소통을 합니다.
            </Text>
            <Text fontSize={`20px`} fontWeight={`300`}>
              사용에 있어 보다 효율적이며 편의성과 보안성, 안전성에 대해
              논의하고 연구합니다.
            </Text>
            <Text fontSize={`20px`} fontWeight={`300`}>
              사무실 같은 간단한 환경부터 서버실과 산업현장 같은 복잡한
              환경까지.
            </Text>
            <Text fontSize={`20px`} fontWeight={`300`}>
              필드의 목소리를 통해 다양한 사용 환경 내 포트의 규격과 특징을
              분석하여
            </Text>
            <Text fontSize={`20px`} fontWeight={`300`}>
              연구하며 최고의 제품을 여러분께 선보입니다.
            </Text>
          </Wrapper>

          <Wrapper
            display={width < 900 ? `flex` : `none`}
            al={`flex-start`}
            padding={width < 900 ? `30px 0 18px` : `30px 0`}
          >
            <Text fontSize={`18px`} fontWeight={`300`}>
              스마트키퍼는 실제 보안 담당자와의
            </Text>
            <Text fontSize={`18px`} fontWeight={`300`}>
              끊임없는 소통을 합니다. 사용에 있어
            </Text>
            <Text fontSize={`18px`} fontWeight={`300`}>
              보다 효율적이며 편의성과 보안성, 안전성
            </Text>
            <Text fontSize={`18px`} fontWeight={`300`}>
              에 대해 논의하고 연구합니다. 사무실
            </Text>
            <Text fontSize={`18px`} fontWeight={`300`}>
              같은 간단한 환경부터 서버실과 산업현장
            </Text>
            <Text fontSize={`18px`} fontWeight={`300`}>
              같은 복잡한 환경까지. 필드의 목소리를
            </Text>
            <Text fontSize={`18px`} fontWeight={`300`}>
              통해 다양한 사용 환경 내 포트의 규격과
            </Text>
            <Text fontSize={`18px`} fontWeight={`300`}>
              특징을 분석하여 연구하며 최고의 제품을
            </Text>
            <Text fontSize={`18px`} fontWeight={`300`}>
              여러분께 선보입니다.
            </Text>
          </Wrapper>
          <ArrowIcon>
            <Link to="/contact">
              더 알아보기
              <FaChevronRight />
            </Link>
          </ArrowIcon>
        </RsWrapper>
      </BeforeImg>
    </WholeWrapper>
  );
};

export default withResizeDetector(MMinitPresenter);
