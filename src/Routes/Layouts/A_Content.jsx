import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import {
  WholeWrapper,
  Wrapper,
  TextInput,
  CommonButton,
} from "../../Components/AdminCommonComponents";
import A_Side from "./A_Side.jsx";
import Theme from "../../Styles/Theme";
import { useQuery } from "@apollo/client";
import { toast } from "react-toastify";
import withSplitting from "../../Lib/withSplitting";
import { useCookies } from "react-cookie";
import { checkCookie } from "../../commonUtils";
import crypto from "crypto";

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

import { GET_USER_LOGIN_RESULT_FOR_ADMIN } from "./A_LayoutQueries";
import useInput from "../../Components/Hooks/useInput";

const A_Content = ({ location }) => {
  const [isLogin, setIsLogin] = useState(true);
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
          </Wrapper>
        </>
      ) : (
        <WholeWrapper
          height={`100%`}
          bgImg={`url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/POLLY-TELLY%2Fassets%2Fimages%2Fbackground%2F9176.jpg?alt=media&token=0f9599d2-a2a0-4573-9a3f-1f89f6c17218")`}
        >
          <Wrapper
            width={`500px`}
            height={`400px`}
            bgColor={`rgba(0, 0, 0, 0.6)`}
            color={Theme.white_C}
            isBorder={true}
            shadow={`0px 5px 10px ${Theme.grey_C}`}
          >
            <Wrapper
              fontWeight={`800`}
              fontSize={`30px`}
              color={Theme.white_C}
              margin={`0 0 30px`}
            >
              ADMIN LOGIN
            </Wrapper>
            <Wrapper dr={`row`} margin={`15px 0`}>
              <Wrapper width={`100px`} color={Theme.white_C} al={`flex-start`}>
                아이디
              </Wrapper>
              <TextInput
                width={`250px`}
                className="login__input"
                type="text"
                {...inputUserId}
                onKeyDown={(e) => e.keyCode === 13 && _loginUserHanlder()}
              />
            </Wrapper>
            <Wrapper dr={`row`}>
              <Wrapper width={`100px`} color={Theme.white_C} al={`flex-start`}>
                비밀번호
              </Wrapper>
              <TextInput
                width={`250px`}
                className="login__input"
                type="password"
                {...inputUserPassword}
                onKeyDown={(e) => e.keyCode === 13 && _loginUserHanlder()}
              />
            </Wrapper>
            <CommonButton
              width={`300px`}
              margin={`50px 0px 0px`}
              className="login__btn"
              onClick={_loginUserHanlder}
            >
              로그인
            </CommonButton>
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
