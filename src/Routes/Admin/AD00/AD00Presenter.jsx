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
  box-shadow: ${Theme.boxShadow};
  justify-content: flex-end;
  padding: 10px;
`;

const Title = styled(Text)`
  margin: 10px 0 0;
`;

const Button5 = styled(Wrapper)`
  width: ${(props) => props.width || `100px`};
  height: ${(props) => props.height || `40px`};
  border: 2px solid transparent;
  position: relative;
  transition: 1s;
  margin: 20px 0;

  &:after {
    content: "주요제품 관리";
    position: absolute;
    background-color: ${Theme.basicTheme_C};
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
    content: "주요제품 관리";
    position: absolute;
    border: 2px solid ${Theme.basicTheme_C};
    color: ${Theme.basicTheme_C};
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
    content: "토큰 회원관리";
    position: absolute;
    background-color: ${Theme.basicTheme_C};
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
    content: "토큰 회원관리";
    position: absolute;
    border: 2px solid ${Theme.basicTheme_C};
    color: ${Theme.basicTheme_C};
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
  width: ${(props) => props.width || `100px`};
  height: ${(props) => props.height || `40px`};
  border: 2px solid transparent;
  position: relative;
  transition: 1s;
  margin: 20px 0;

  &:after {
    content: "팝업관리";
    position: absolute;
    background-color: ${Theme.basicTheme_C};
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
    content: "팝업관리";
    position: absolute;
    border: 2px solid ${Theme.basicTheme_C};
    color: ${Theme.basicTheme_C};
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
    background-color: ${Theme.basicTheme_C};
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
    border: 2px solid ${Theme.basicTheme_C};
    color: ${Theme.basicTheme_C};
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
    background-color: ${Theme.basicTheme_C};
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
    border: 2px solid ${Theme.basicTheme_C};
    color: ${Theme.basicTheme_C};
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
    <WholeWrapper minWidth={`1000px`} radius={`30px`}>
      <Image
        width={`200px`}
        alt="로고"
        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Flogo%2Fpro-logo-b.png?alt=media&token=446d0daf-0039-4044-a88b-6915e3c93b38`}
      />
      <Wrapper dr={`row`} height={`100vh`}>
        {/* ////////접속자통계///////// */}
        <Wrapper width={`30%`} padding={`0 0 0 50px`}>
          <Link to="/admin/statManagement">
            <Button></Button>
          </Link>
          <Box
            width={`300px`}
            height={`200px`}
            shadow={Theme.boxShadow}
            ju={`flex-end`}
            padding={`10px`}
          >
            <Wrapper width={`auto`} al={`flex-end`}>
              <Wrapper
                width={`20px`}
                height={`140px`}
                bgColor={Theme.subTheme_C}
                shadow={`5px 5px 5px ${Theme.grey_C}`}
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
                shadow={`5px 5px 5px ${Theme.grey_C}`}
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
                shadow={`5px 5px 5px ${Theme.grey_C}`}
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
                shadow={`5px 5px 5px ${Theme.grey_C}`}
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
                shadow={`5px 5px 5px ${Theme.grey_C}`}
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
        <Wrapper width={`70%`}>
          <Wrapper dr={`row`} ju={`space-around`}>
            <Wrapper width={`auto`}>
              <Link to="/admin/productManagement">
                <Button2></Button2>
              </Link>
              <Wrapper
                fontSize={`14px`}
                width={`300px`}
                shadow={Theme.boxShadow}
                padding={`50px 20px`}
              >
                <Text fontWeight={`700`}>제품 등록,수정,삭제를 관리하는</Text>
                <Text fontWeight={`700`}>제품 관리</Text>
              </Wrapper>
            </Wrapper>
            {/* ///////////팝업관리/////////// */}
            <Wrapper width={`auto`}>
              <Link to="/admin/popUpManagement">
                <Button3></Button3>
              </Link>

              <Wrapper
                width={`300px`}
                fontSize={`14px`}
                shadow={Theme.boxShadow}
                padding={`50px 20px`}
              >
                <Text fontWeight={`700`}>웹사이트 접속시 효율적인</Text>
                <Text fontWeight={`700`}>
                  정보 전달을 위해 생성되는 팝업 관리
                </Text>
              </Wrapper>
            </Wrapper>
          </Wrapper>
          {/* /////////회원관리///////////// */}
          <Wrapper dr={`row`} ju={`space-around`}>
            <Wrapper width={`auto`}>
              <Link to="/admin/tokenManagement">
                <Button4></Button4>
              </Link>

              <Wrapper
                width={`300px`}
                fontSize={`14px`}
                shadow={Theme.boxShadow}
                padding={`50px 20px`}
              >
                <Text fontWeight={`700`}>
                  웹사이트를 이용할 유저를 생성시키는
                </Text>
                <Text fontWeight={`700`}>회원 토큰 관리</Text>
              </Wrapper>
            </Wrapper>
            {/* /////////게시판관리///////// */}
            <Wrapper width={`auto`}>
              <Link to="/admin/snsLinkManagement">
                <Button5></Button5>
              </Link>

              <Wrapper
                width={`300px`}
                fontSize={`14px`}
                shadow={Theme.boxShadow}
                padding={`50px 20px`}
              >
                <Text fontWeight={`700`}>하단 푸터에 실시간으로 반영되는</Text>
                <Text fontWeight={`700`}>주요제품 링크</Text>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </WholeWrapper>
  );
};
