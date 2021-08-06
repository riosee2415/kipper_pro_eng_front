import React, { useEffect, useRef, useState } from "react";
import withSplitting from "../../../Lib/withSplitting";
const MM11Presenter = withSplitting(() => import("./MM11Presenter"));
import { useQuery, useMutation } from "@apollo/client";
import {} from "./MM11Queries";
import { animateScroll as scroll } from "react-scroll";
import useInput from "../../../Components/Hooks/useInput";
import { toast } from "react-toastify";

const MM11Container = ({ history }) => {
  ////////////// - VARIABLE- ////////////////

  ////////////// - USE REF- ///////////////

  ////////////// - USE STATE- ///////////////

  ////////////// - USE QUERY- ///////////////

  ///////////// - USE MUTATION- /////////////

  ///////////// - EVENT HANDLER- ////////////

  const moveLinkHandler = (link) => {
    history.push(link);
  };

  ////////////// - USE EFFECT- //////////////

  useEffect(() => {
    scroll.scrollTo(0);
  }, []);

  return <MM11Presenter moveLinkHandler={moveLinkHandler} />;
};

export default MM11Container;
