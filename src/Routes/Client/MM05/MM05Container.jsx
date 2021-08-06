import React, { useEffect, useRef, useState } from "react";
import withSplitting from "../../../Lib/withSplitting";
const MM05Presenter = withSplitting(() => import("./MM05Presenter"));
import { useQuery, useMutation } from "@apollo/client";
import {} from "./MM05Queries";
import { animateScroll as scroll } from "react-scroll";
import useInput from "../../../Components/Hooks/useInput";
import { toast } from "react-toastify";

const MM05Container = ({ history }) => {
  ////////////// - VARIABLE- ////////////////

  ////////////// - USE REF- ///////////////
  const documentRef = useRef(document);
  const temp1Ref = useRef();
  const temp2Ref = useRef();
  const temp3Ref = useRef();
  const temp4Ref = useRef();
  const temp5Ref = useRef();
  const temp6Ref = useRef();

  ////////////// - USE STATE- ///////////////

  ////////////// - USE QUERY- ///////////////

  ///////////// - USE MUTATION- /////////////

  ///////////// - EVENT HANDLER- ////////////

  ////////////// - USE EFFECT- //////////////

  useEffect(() => {
    scroll.scrollTo(0);
  }, []);

  return (
    <MM05Presenter
      documentRef={documentRef}
      temp1Ref={temp1Ref}
      temp2Ref={temp2Ref}
      temp3Ref={temp3Ref}
      temp4Ref={temp4Ref}
      temp5Ref={temp5Ref}
      temp6Ref={temp6Ref}
    />
  );
};

export default MM05Container;
