import React, { useEffect, useRef, useState } from "react";
import withSplitting from "../../../Lib/withSplitting";
const MM02Presenter = withSplitting(() => import("./MM02Presenter"));
import { useQuery, useMutation } from "@apollo/client";
import {} from "./MM02Queries";
import { animateScroll as scroll } from "react-scroll";
import useInput from "../../../Components/Hooks/useInput";
import { toast } from "react-toastify";

const MM02Container = ({ history }) => {
  ////////////// - VARIABLE- ////////////////

  ////////////// - USE REF- ///////////////
  const documentRef = useRef(document);
  const noteRef = useRef();
  const textRef = useRef();
  const numberRef = useRef();

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

  return (
    <MM02Presenter
      //

      documentRef={documentRef}
      noteRef={noteRef}
      textRef={textRef}
      numberRef={numberRef}
      //
      moveLinkHandler={moveLinkHandler}
    />
  );
};

export default MM02Container;
