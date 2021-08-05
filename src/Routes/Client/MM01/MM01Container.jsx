import React, { useEffect, useRef, useState } from "react";
import withSplitting from "../../../Lib/withSplitting";
const MM01Presenter = withSplitting(() => import("./MM01Presenter"));
import { useQuery, useMutation } from "@apollo/client";
import {} from "./MM01Queries";
import { animateScroll as scroll } from "react-scroll";
import useInput from "../../../Components/Hooks/useInput";
import { toast } from "react-toastify";

const MM01Container = ({ history }) => {
  ////////////// - VARIABLE- ////////////////

  ////////////// - USE REF- ///////////////
  const tab1Ref = useRef();
  const tab2Ref = useRef();
  const tab3Ref = useRef();
  const tab4Ref = useRef();
  const tab5Ref = useRef();
  const documentRef = useRef(document);

  ////////////// - USE STATE- ///////////////

  ////////////// - USE QUERY- ///////////////

  ///////////// - USE MUTATION- /////////////

  ///////////// - EVENT HANDLER- ////////////

  ////////////// - USE EFFECT- //////////////

  useEffect(() => {
    scroll.scrollTo(0);
  }, []);

  return (
    <MM01Presenter
      tab1Ref={tab1Ref}
      tab2Ref={tab2Ref}
      tab3Ref={tab3Ref}
      tab4Ref={tab4Ref}
      tab5Ref={tab5Ref}
      documentRef={documentRef}
      //
    />
  );
};

export default MM01Container;
