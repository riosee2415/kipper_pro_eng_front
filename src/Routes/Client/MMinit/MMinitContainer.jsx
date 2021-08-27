import React, { useEffect, useRef, useState } from "react";
import withSplitting from "../../../Lib/withSplitting";
const MMinitPresenter = withSplitting(() => import("./MMinitPresenter"));
import { useQuery, useMutation } from "@apollo/client";
import {} from "./MMinitQueries";
import { animateScroll as scroll } from "react-scroll";
import useInput from "../../../Components/Hooks/useInput";
import { toast } from "react-toastify";

const MMinitContainer = ({ history, location }) => {
  ////////////// - VARIABLE- ////////////////

  ////////////// - USE REF- ///////////////

  ////////////// - USE STATE- ///////////////

  ////////////// - USE QUERY- ///////////////

  ///////////// - USE MUTATION- /////////////

  ///////////// - EVENT HANDLER- ////////////
  const moveLinkHandler = (url) => {
    window.open(url, "_self");
  };

  const moveLinkHandler2 = (link) => {
    history.push(link);
  };

  ////////////// - USE EFFECT- //////////////
  useEffect(() => {
    const location = window.location.href;

    if ("https://smartkeeperworld.com/essential#/".indexOf(location) !== -1) {
      window.open(`https://smartkeeperworld.com/#/essential`, "_self");
    }
  }, []);

  useEffect(() => {
    scroll.scrollTo(0);
  }, []);

  return (
    <MMinitPresenter
      moveLinkHandler={moveLinkHandler}
      moveLinkHandler2={moveLinkHandler2}
    />
  );
};

export default MMinitContainer;
