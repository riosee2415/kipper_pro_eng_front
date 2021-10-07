import React from "react";
import {
  WholeWrapper,
  Wrapper,
  Text,
  CommonButton,
  Image,
  SpanText,
} from "../../../Components/CommonComponents";
import { Link } from "react-router-dom";
import styled, { ThemeConsumer } from "styled-components";
import Theme from "../../../Styles/Theme";

const Box = styled(Wrapper)`
  width: 300px;
  height: 300px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  justify-content: flex-end;
  padding: 10px;
`;

const Title = styled(Text)`
  margin: 10px 0 0;
`;

const Button5 = styled(Wrapper)`
  width: ${(props) => props.width || `120px`};
  height: ${(props) => props.height || `40px`};
  border: 2px solid transparent;
  position: relative;
  transition: 1s;
  margin: 20px 0;

  &:after {
    content: "주요제품관리";
    position: absolute;
    background-color: ${Theme.subTheme3_C};
    color: ${Theme.white_C};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    border: 2px solid transparent;
    transition: 1s;
  }

  &:before {
    content: "주요제품관리";
    position: absolute;
    border: 2px solid ${Theme.subTheme3_C};
    color: ${Theme.subTheme3_C};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(50%) rotateX(-90deg);
    transition: 1s;
  }

  &:hover {
    &:before {
      transform: translateY(0) rotateX(0);
    }
    &:after {
      transform: rotateX(90deg) translateY(-50%);
      top: -20px;
    }
  }
`;

const Button4 = styled(Wrapper)`
  width: ${(props) => props.width || `100px`};
  height: ${(props) => props.height || `40px`};
  border: 2px solid transparent;
  position: relative;
  transition: 1s;
  margin: 20px 0;

  &:after {
    content: "회원 관리";
    position: absolute;
    background-color: ${Theme.subTheme3_C};
    color: ${Theme.white_C};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    border: 2px solid transparent;
    transition: 1s;
  }

  &:before {
    content: "회원 관리";
    position: absolute;
    border: 2px solid ${Theme.subTheme3_C};
    color: ${Theme.subTheme3_C};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(50%) rotateX(-90deg);
    transition: 1s;
  }

  &:hover {
    &:before {
      transform: translateY(0) rotateX(0);
    }
    &:after {
      transform: rotateX(90deg) translateY(-50%);
      top: -20px;
    }
  }
`;

const Button3 = styled(Wrapper)`
  width: ${(props) => props.width || `130px`};
  height: ${(props) => props.height || `40px`};
  border: 2px solid transparent;
  position: relative;
  transition: 1s;
  margin: 20px 0;

  &:after {
    content: "팝업 배너 관리";
    position: absolute;
    background-color: ${Theme.subTheme3_C};
    color: ${Theme.white_C};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    border: 2px solid transparent;
    transition: 1s;
  }

  &:before {
    content: "팝업 배너 관리";
    position: absolute;
    border: 2px solid ${Theme.subTheme3_C};
    color: ${Theme.subTheme3_C};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(50%) rotateX(-90deg);
    transition: 1s;
  }

  &:hover {
    &:before {
      transform: translateY(0) rotateX(0);
    }
    &:after {
      transform: rotateX(90deg) translateY(-50%);
      top: -20px;
    }
  }
`;

const Button2 = styled(Wrapper)`
  width: ${(props) => props.width || `100px`};
  height: ${(props) => props.height || `40px`};
  border: 2px solid transparent;
  position: relative;
  transition: 1s;
  margin: 20px 0;

  &:after {
    content: "제품 관리";
    position: absolute;
    background-color: ${Theme.subTheme3_C};
    color: ${Theme.white_C};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    border: 2px solid transparent;
    transition: 1s;
  }

  &:before {
    content: "제품 관리";
    position: absolute;
    border: 2px solid ${Theme.subTheme3_C};
    color: ${Theme.subTheme3_C};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(50%) rotateX(-90deg);
    transition: 1s;
  }

  &:hover {
    &:before {
      transform: translateY(0) rotateX(0);
    }
    &:after {
      transform: rotateX(90deg) translateY(-50%);
      top: -20px;
    }
  }
`;

const Button = styled(Wrapper)`
  width: ${(props) => props.width || `100px`};
  height: ${(props) => props.height || `40px`};
  border: 2px solid transparent;
  position: relative;
  transition: 1s;
  margin: 20px 0;

  &:after {
    content: "접속자통계";
    position: absolute;
    background-color: ${Theme.subTheme3_C};
    color: ${Theme.white_C};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    border: 2px solid transparent;
    transition: 1s;
  }

  &:before {
    content: "접속자통계";
    position: absolute;
    border: 2px solid ${Theme.subTheme3_C};
    color: ${Theme.subTheme3_C};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(50%) rotateX(-90deg);
    transition: 1s;
  }

  &:hover {
    &:before {
      transform: translateY(0) rotateX(0);
    }
    &:after {
      transform: rotateX(90deg) translateY(-50%);
      top: -20px;
    }
  }
`;

const StatusText = styled.div`
  font-size: 20px;
  color: ${(props) => props.color};
  margin: 20px 0px;
  font-weight: 700;
`;

export default () => {
  return (
    <WholeWrapper minWidth={`1000px`} radius={`30px`} isRelative={true}>
      <Image
        width={`410px`}
        margin={`20px 0`}
        alt="로고"
        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FAdmin%2F%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A9%E1%84%87%E1%85%A5%E1%86%AF%E1%84%92%E1%85%A6%E1%84%83%E1%85%A5.svg?alt=media&token=bc59da53-b9cc-4a7b-9b3d-8df8fde26e86`}
      />
      <Wrapper dr={`row`} height={`100vh`}>
        {/* ////////접속자통계///////// */}
        <Wrapper width={`calc(100% / 3)`} padding={`0 0 0 50px`}>
          <Link to="/admin/statManagement">
            <Button></Button>
          </Link>
          <Box
            width={`300px`}
            height={`200px`}
            shadow={`0px 3px 6px rgba(0, 0, 0, 0.16)`}
            ju={`flex-end`}
            padding={`10px`}
          >
            <Wrapper width={`auto`} al={`flex-end`}>
              <Wrapper
                width={`20px`}
                height={`140px`}
                bgColor={Theme.subTheme_C}
              ></Wrapper>
              <Title margin={`10px 0 0`}>
                <SpanText>1</SpanText>월
              </Title>
            </Wrapper>

            <Wrapper width={`auto`}>
              <Wrapper
                width={`20px`}
                height={`100px`}
                bgColor={Theme.subTheme_C}
              ></Wrapper>
              <Title margin={`10px 0 0`}>
                <SpanText>2</SpanText>월
              </Title>
            </Wrapper>

            <Wrapper width={`auto`}>
              <Wrapper
                width={`20px`}
                height={`140px`}
                bgColor={Theme.subTheme_C}
              ></Wrapper>
              <Title margin={`10px 0 0`}>
                <SpanText>3</SpanText>월
              </Title>
            </Wrapper>

            <Wrapper width={`auto`}>
              <Wrapper
                width={`20px`}
                height={`140px`}
                bgColor={Theme.subTheme_C}
              ></Wrapper>
              <Title margin={`10px 0 0`}>
                <SpanText>4</SpanText>월
              </Title>
            </Wrapper>

            <Wrapper width={`auto`}>
              <Wrapper
                width={`20px`}
                height={`120px`}
                bgColor={Theme.subTheme_C}
              ></Wrapper>
              <Title margin={`10px 0 0`}>
                <SpanText>5</SpanText>월
              </Title>
            </Wrapper>
          </Box>
          <Wrapper
            width={`auto`}
            fontSize={`14px`}
            padding={`10px 0`}
            margin={`10px 0 0`}
          >
            <Text fontWeight={`700`}>일별/월별 접속자 통계를</Text>
            <Text fontWeight={`700`}>데이터화 하여 효율적인 웹사이트 관리</Text>
          </Wrapper>
        </Wrapper>
        {/* //////////메인베너관리///////// */}
        <Wrapper width={`calc(100% / 3)`}>
          <Wrapper>
            <Wrapper width={`auto`}>
              <Link to="/admin/productManagement">
                <Button2></Button2>
              </Link>
              <Wrapper
                fontSize={`14px`}
                width={`300px`}
                height={`150px`}
                shadow={`0px 3px 6px rgba(0, 0, 0, 0.16)`}
                padding={`50px 20px`}
              >
                <Text fontWeight={`700`}>스마트키퍼 프로 제품 관리</Text>
              </Wrapper>
            </Wrapper>
            {/* ///////////팝업 배너 관리/////////// */}
            <Wrapper width={`auto`} margin={`20px 0 0`}>
              <Link to="/admin/popUpManagement">
                <Button3></Button3>
              </Link>

              <Wrapper
                width={`300px`}
                height={`150px`}
                fontSize={`14px`}
                shadow={`0px 3px 6px rgba(0, 0, 0, 0.16)`}
                padding={`50px 20px`}
              >
                <Text fontWeight={`700`}>웹사이트 접속시 효율적인</Text>
                <Text fontWeight={`700`}>
                  정보 전달을 위해 생성되는 팝업 관리
                </Text>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Wrapper>
        <Wrapper width={`calc(100% / 3)`}>
          {/* /////////회원관리///////////// */}
          <Wrapper>
            <Wrapper width={`auto`}>
              <Link to="/admin/tokenManagement">
                <Button4></Button4>
              </Link>

              <Wrapper
                width={`300px`}
                height={`150px`}
                fontSize={`14px`}
                shadow={`0px 3px 6px rgba(0, 0, 0, 0.16)`}
                padding={`50px 20px`}
              >
                <Text fontWeight={`700`}>레벨 3, 4 파트너</Text>
                <Text fontWeight={`700`}>회원 관리</Text>
              </Wrapper>
            </Wrapper>
            {/* /////////게시판관리///////// */}
            <Wrapper width={`auto`} margin={`20px 0 0`}>
              <Link to="/admin/snsLinkManagement">
                <Button5></Button5>
              </Link>

              <Wrapper
                width={`300px`}
                height={`150px`}
                fontSize={`14px`}
                shadow={`0px 3px 6px rgba(0, 0, 0, 0.16)`}
                padding={`50px 20px`}
              >
                <Text fontWeight={`700`}>웹사이트 하단에 표기되는</Text>
                <Text fontWeight={`700`}>주요제품 링크 관리</Text>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>

      <Wrapper isAbsolute={true} bottom={`5px`} left={`0`} fontSize={`12px`}>
        <Image
          alt="logo"
          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FAdmin%2F%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%92%E1%85%A1%E1%84%83%E1%85%A1%E1%86%AB%E1%84%85%E1%85%A9%E1%84%80%E1%85%A9.svg?alt=media&token=96ac24e3-4073-472c-9ddd-4de62236d5d5`}
          width={`70px`}
          margin={`0 0 10px`}
        />
        Copyright 2021 COMXI CO., LTD. All right reserved.
      </Wrapper>
    </WholeWrapper>
  );
};
