import React, { useEffect, useRef, useState } from "react";
import withSplitting from "../../../Lib/withSplitting";
const MM17Presenter = withSplitting(() => import("./MM17Presenter"));
import { useQuery, useMutation } from "@apollo/client";
import {} from "./MM17Queries";
import { animateScroll as scroll } from "react-scroll";
import useInput from "../../../Components/Hooks/useInput";
import { toast } from "react-toastify";

const MM17Container = ({ history }) => {
  ////////////// - VARIABLE- ////////////////

  ////////////// - USE REF- ///////////////
  const documentRef = useRef(document);
  const tempRef = useRef();
  const temp2Ref = useRef();
  const temp3Ref = useRef();
  const temp4Ref = useRef();
  const temp5Ref = useRef();
  const temp6Ref = useRef();
  const temp7Ref = useRef();
  const temp8Ref = useRef();
  const temp9Ref = useRef();
  const temp10Ref = useRef();

  ////////////// - USE STATE- ///////////////

  ////////////// - USE QUERY- ///////////////

  ///////////// - USE MUTATION- /////////////

  ///////////// - EVENT HANDLER- ////////////

  ////////////// - USE EFFECT- //////////////

  useEffect(() => {
    scroll.scrollTo(0);
  }, []);

  return (
    <MM17Presenter
      //
      documentRef={documentRef}
      tempRef={tempRef}
      temp2Ref={temp2Ref}
      temp3Ref={temp3Ref}
      temp4Ref={temp4Ref}
      temp5Ref={temp5Ref}
      temp6Ref={temp6Ref}
      temp7Ref={temp7Ref}
      temp8Ref={temp8Ref}
      temp9Ref={temp9Ref}
      temp10Ref={temp10Ref}
    />
  );
};

export default MM17Container;
