import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import {
  WholeWrapper,
  TextInput,
  CommonButton,
} from "../../Components/AdminCommonComponents";
import { Image, Wrapper } from "../../Components/CommonComponents";
import A_Side from "./A_Side.jsx";
import Theme from "../../Styles/Theme";
import { useQuery } from "@apollo/client";
import { toast } from "react-toastify";
import withSplitting from "../../Lib/withSplitting";
import { useCookies } from "react-cookie";
import { checkCookie } from "../../commonUtils";
import crypto from "crypto";
import styled from "styled-components";

const AD00 = withSplitting(() => import("../Admin/AD00"));
const AD01 = withSplitting(() => import("../Admin/AD01"));
const AD03 = withSplitting(() => import("../Admin/AD03"));
const AD05 = withSplitting(() => import("../Admin/AD05"));
const AD06 = withSplitting(() => import("../Admin/AD06"));
const AD07 = withSplitting(() => import("../Admin/AD07"));
const AD08 = withSplitting(() => import("../Admin/AD08"));
const AD09 = withSplitting(() => import("../Admin/AD09"));
const AD10 = withSplitting(() => import("../Admin/AD10"));
const AD11 = withSplitting(() => import("../Admin/AD11"));
const AD12 = withSplitting(() => import("../Admin/AD12"));
const AD13 = withSplitting(() => import("../Admin/AD13"));
const AD14 = withSplitting(() => import("../Admin/AD14"));
const AD15 = withSplitting(() => import("../Admin/AD15"));
const AD16 = withSplitting(() => import("../Admin/AD16"));
const AD17 = withSplitting(() => import("../Admin/AD17"));
const AD19 = withSplitting(() => import("../Admin/AD19"));
const AD20 = withSplitting(() => import("../Admin/AD20"));
const AD21 = withSplitting(() => import("../Admin/AD21"));
const AD22 = withSplitting(() => import("../Admin/AD22"));
const AD23 = withSplitting(() => import("../Admin/AD23"));
const AD24 = withSplitting(() => import("../Admin/AD24"));
const AD25 = withSplitting(() => import("../Admin/AD25"));
const AD26 = withSplitting(() => import("../Admin/AD26"));
const AD27 = withSplitting(() => import("../Admin/AD27"));
const AD28 = withSplitting(() => import("../Admin/AD28"));
const AD29 = withSplitting(() => import("../Admin/AD29"));
const AD30 = withSplitting(() => import("../Admin/AD30"));
const AD31 = withSplitting(() => import("../Admin/AD31"));
const AD90 = withSplitting(() => import("../Admin/AD90"));
const AD200 = withSplitting(() => import("../Admin/AD200"));
const AD201 = withSplitting(() => import("../Admin/AD201"));
const AD202 = withSplitting(() => import("../Admin/AD202"));
const AD203 = withSplitting(() => import("../Admin/AD203"));
const AD204 = withSplitting(() => import("../Admin/AD204"));
const AD205 = withSplitting(() => import("../Admin/AD205"));
const AD206 = withSplitting(() => import("../Admin/AD206"));
const AD207 = withSplitting(() => import("../Admin/AD207"));
const AD208 = withSplitting(() => import("../Admin/AD208"));
const AD209 = withSplitting(() => import("../Admin/AD209"));
const AD210 = withSplitting(() => import("../Admin/AD210"));
const AD211 = withSplitting(() => import("../Admin/AD211"));
const AD212 = withSplitting(() => import("../Admin/AD212"));
const AD213 = withSplitting(() => import("../Admin/AD213"));

import { GET_USER_LOGIN_RESULT_FOR_ADMIN } from "./A_LayoutQueries";
import useInput from "../../Components/Hooks/useInput";

const Input = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid ${(props) => props.theme.greyTheme9_C};
  /* background: ${(props) => props.theme.greyTheme7_C}; */
  background: transparent;
  color: ${(props) => props.theme.white_C};
  font-size: 14px;
  padding: 0 10px;

  &::placeholder {
    color: ${(props) => props.theme.greyTheme7_C};
  }
`;

const A_Content = ({ location }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [loginSkip, setLoginSkip] = useState(true);
  const [isLoginProcess, setIsLoginProcess] = useState(false);
  const inputUserId = useInput("");
  const inputUserPassword = useInput("");

  const [cookie, setCookie] = useCookies();

  ////////////// - USE QUERY - ///////////////
  const {
    data: loginResult,
    loading: loginLoading,
    refetch: loginRefetch,
  } = useQuery(GET_USER_LOGIN_RESULT_FOR_ADMIN, {
    variables: {
      userId: inputUserId.value,
      userPassword: inputUserPassword.value,
    },
    fetchPolicy: "no-cache",
    skip: loginSkip,
  });

  ////////////// - EVENT HANDLER - ///////////////
  const _loginUserHanlder = async () => {
    if (!inputUserId.value || inputUserId.value.trim() === "") {
      toast.error("아이디를 입력해주세요.");
      return;
    }

    if (!inputUserPassword.value || inputUserId.value.trim() === "") {
      toast.error("비밀번호를 입력해주세요.");
      return;
    }

    await setLoginSkip(false);
    setIsLoginProcess(true);
  };

  useEffect(() => {
    if (loginResult) {
      const userData = loginResult.getUserLoginResultForAdmin;
      if (userData === "Not Find") {
        toast.error("아이디와 비밀번호를 확인해주세요.");
        setLoginSkip(true);
        return;
      }
      if (userData === "Error") {
        toast.error("처리 중 문제가 발생했습니다. 개발사에게 문의해주세요.");
        setLoginSkip(true);
        return;
      }

      const decipher = crypto.createDecipher(
        "aes-256-cbc",
        process.env.KEY_VALUE
      );
      let result = decipher.update(userData, "base64", "utf8");
      result += decipher.final("utf8");

      const finalResult = JSON.parse(result);

      setCookie("info", finalResult, {
        maxAge: 60 * 30,
      });

      toast.success("로그인에 성공했습니다.");
      setIsLogin(true);
    }
  }, [loginResult]);

  useEffect(() => {
    const userInfo = cookie["info"];
    const checkUser = checkCookie(userInfo);

    if (checkUser) {
      setIsLogin(true);
    }
  }, []);

  useEffect(() => {
    const userInfo = cookie["info"];

    if (userInfo) {
      setCookie("info", userInfo, {
        maxAge: 60 * 30,
      });
    }
  }, [location.pathname]);

  return (
    <WholeWrapper
      height={`100vh`}
      al={`flex-start`}
      ju={`flex-start`}
      dr={`row`}
    >
      {isLogin ? (
        <>
          <Wrapper
            width={`200px`}
            minWidth={`200px`}
            al={`center`}
            ju={`flex-start`}
            height={`100%`}
            shadow={`5px 0px 10px ${Theme.grey_C}`}
            bgColor={`rgb(56, 58, 77)`}
          >
            <Route path="/admin" component={A_Side} />
          </Wrapper>

          <Wrapper
            al={`flex-start`}
            ju={`flex-start`}
            height={`100%`}
            padding={`20px`}
            isScroll={true}
          >
            <Route exact path="/admin" component={AD00} />
            <Route exact path="/admin/statManagement" component={AD01} />
            <Route exact path="/admin/footerInfoManagement" component={AD03} />
            <Route exact path="/admin/noticeTypeManagement" component={AD05} />
            <Route exact path="/admin/noticeManagement" component={AD06} />
            <Route exact path="/admin/faqManagement" component={AD07} />
            <Route exact path="/admin/eventBoardManagement" component={AD08} />
            <Route
              exact
              path="/admin/eventBoardListManagement"
              component={AD09}
            />
            <Route exact path="/admin/userManagement" component={AD10} />
            <Route exact path="/admin/bUserManagement" component={AD11} />
            <Route exact path="/admin/userRightManagement" component={AD12} />
            <Route exact path="/admin/userExitManagement" component={AD13} />
            <Route exact path="/admin/bUserExitManagement" component={AD14} />
            <Route exact path="/admin/userBlackManagement" component={AD15} />
            <Route exact path="/admin/bUserBlackManagement" component={AD16} />
            <Route
              exact
              path="/admin/userRightControllManagement"
              component={AD17}
            />

            <Route
              exact
              path="/admin/directRequestManagement"
              component={AD19}
            />
            <Route exact path="/admin/mainBannerManagement" component={AD20} />

            <Route
              exact
              path="/admin/mainBannerUpdateManagement/:id"
              component={AD21}
            />
            <Route
              exact
              path="/admin/mainBannerCreateManagement"
              component={AD22}
            />
            <Route exact path="/admin/boardTypeManagement" component={AD23} />
            <Route
              exact
              path="/admin/popupUpdateManagement/:id"
              component={AD24}
            />
            <Route exact path="/admin/popupCreateManagement" component={AD25} />
            <Route
              exact
              path="/admin/mobileMainBannerManagement"
              component={AD26}
            />

            <Route
              exact
              path="/admin/mobileMainBannerUpdateManagement/:id"
              component={AD27}
            />
            <Route
              exact
              path="/admin/mobileMainBannerCreateManagement"
              component={AD28}
            />
            <Route exact path="/admin/popupManagement" component={AD29} />
            <Route exact path="/admin/snsLinkManagement" component={AD30} />
            <Route exact path="/admin/graphManagement" component={AD31} />
            <Route exact path="/admin/createManagement" component={AD90} />
            <Route exact path="/admin/awardManagement" component={AD200} />
            <Route exact path="/admin/awardListManagement" component={AD201} />
            <Route exact path="/admin/referenceManagement" component={AD202} />
            <Route
              exact
              path="/admin/referenceUpdateManagement/:id"
              component={AD203}
            />
            <Route
              exact
              path="/admin/referenceCreateManagement"
              component={AD204}
            />
            <Route exact path="/admin/catalogueManagement" component={AD205} />
            <Route exact path="/admin/exhibitionManagement" component={AD206} />
            <Route
              exact
              path="/admin/exhibitionUpdateManagement/:id"
              component={AD207}
            />
            <Route
              exact
              path="/admin/exhibitionCreateManagement"
              component={AD208}
            />
            <Route
              exact
              path="/admin/productCreateManagement"
              component={AD209}
            />
            <Route exact path="/admin/productManagement" component={AD210} />
            <Route
              exact
              path="/admin/productUpdateManagement/:id"
              component={AD211}
            />
            <Route exact path="/admin/tokenManagement" component={AD212} />
            <Route exact path="/admin/locationManagement" component={AD213} />
          </Wrapper>
        </>
      ) : (
        <WholeWrapper height={`100%`} bgColor={Theme.black_C}>
          <Image
            width={`51px`}
            margin={`0 0 20px`}
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%206251.png?alt=media&token=efed7f51-92de-44fc-b01c-73d7190dd908`}
          />
          <Wrapper
            width={`395px`}
            height={`350px`}
            bgColor={Theme.black_C}
            color={Theme.greyTheme3_C}
            border={`1px solid ${Theme.greyTheme9_C}`}
            padding={`25px`}
          >
            <Wrapper fontSize={`14px`} color={Theme.greyTheme3_C}>
              스마트키퍼 프로 글로벌 관리자 페이지
            </Wrapper>
            <Wrapper
              fontSize={`18px`}
              color={Theme.greyTheme3_C}
              fontWeight={`900`}
              margin={`5px 0 35px`}
            >
              SMARTKEEPER PRO World
            </Wrapper>
            <Wrapper dr={`row`} margin={`0 0 15px`}>
              <Input
                width={`250px`}
                className="login__input"
                type="text"
                placeholder={`아이디`}
                {...inputUserId}
                onKeyDown={(e) => e.keyCode === 13 && _loginUserHanlder()}
              />
            </Wrapper>
            <Wrapper dr={`row`}>
              <Input
                width={`250px`}
                className="login__input"
                type="password"
                placeholder={`비밀번호`}
                {...inputUserPassword}
                onKeyDown={(e) => e.keyCode === 13 && _loginUserHanlder()}
              />
            </Wrapper>
            <Wrapper
              height={`50px`}
              margin={`25px 0px 0px`}
              fontSize={`14px`}
              bgImg={`url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2Fpro-global-btn.png?alt=media&token=a0c4f682-893e-4eb9-825a-535194c3c505")`}
              className="login__btn"
              attachment={`initial`}
              onClick={_loginUserHanlder}
            >
              관리자 로그인
            </Wrapper>
          </Wrapper>
        </WholeWrapper>
      )}
    </WholeWrapper>
  );
};

// useEffect(() => {
//   const userInfo = cookie["info"];

//   if (userInfo) {
//     setCookie("info", userInfo, {
//       maxAge: 60 * 30,
//     });
//   }
// }, [location.pathname]);

export default A_Content;
