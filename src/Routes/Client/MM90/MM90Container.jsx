import React, { useEffect, useRef, useState } from "react";
import withSplitting from "../../../Lib/withSplitting";
const MM90Presenter = withSplitting(() => import("./MM90Presenter"));
import { GET_TOKEN_FOR_LOGIN } from "./MM90Queries";
import { useQuery, useMutation } from "@apollo/client";
import { getTokenForLogin } from "./MM90Queries";
import { animateScroll as scroll } from "react-scroll";
import useInput from "../../../Components/Hooks/useInput";
import { toast } from "react-toastify";

const MM90Container = ({ history }) => {
  ////////////// - VARIABLE- ////////////////

  ////////////// - USE REF- ///////////////

  ////////////// - USE STATE- ///////////////
  const inputUserId = useInput("");
  const inputPassword = useInput("");

  const [loginSkip, setLoginSkip] = useState(true);

  ////////////// - USE QUERY- ///////////////
  const { data: tData, refetch: tRefetch } = useQuery(GET_TOKEN_FOR_LOGIN, {
    variables: {
      userId: inputUserId.value,
      password: inputPassword.value,
    },
    skip: loginSkip,
  });

  ///////////// - USE MUTATION- /////////////

  ///////////// - EVENT HANDLER- ////////////
  const loginHandler = () => {
    if (!inputUserId.value || inputUserId.value.trim() === "") {
      toast.error("Please enter your Entry code.");
      return;
    }

    if (!inputPassword.value || inputPassword.value.trim() === "") {
      toast.error("Please enter your Password.");
      return;
    }

    tRefetch();

    setTimeout(() => {
      setLoginSkip(false);
    }, 500);
  };

  ////////////// - USE EFFECT- //////////////
  useEffect(() => {
    scroll.scrollTo(0);
  }, []);

  useEffect(() => {
    if (tData) {
      if (tData.getTokenForLogin) {
        toast.success("Login Sucessed.");
        sessionStorage.setItem("DLJHQSUDCJSKALDJ", tData.getTokenForLogin._id);
        history.push("/pro");
      } else {
        toast.error("Login Failed.");
      }
      setLoginSkip(true);
    }
  }, [tData]);

  return (
    <MM90Presenter
      inputUserId={inputUserId}
      inputPassword={inputPassword}
      //
      loginHandler={loginHandler}
    />
  );
};

export default MM90Container;
