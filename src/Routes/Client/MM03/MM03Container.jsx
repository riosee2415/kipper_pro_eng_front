import React, { useEffect, useRef, useState } from "react";
import withSplitting from "../../../Lib/withSplitting";
const MM03Presenter = withSplitting(() => import("./MM03Presenter"));
import { useQuery, useMutation } from "@apollo/client";
import {} from "./MM03Queries";
import { animateScroll as scroll } from "react-scroll";
import useInput from "../../../Components/Hooks/useInput";
import { toast } from "react-toastify";

const MM03Container = ({ history }) => {
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

  return <MM03Presenter moveLinkHandler={moveLinkHandler} />;
};

export default MM03Container;
