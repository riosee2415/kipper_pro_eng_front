import React, { useEffect, useRef, useState } from "react";
import withSplitting from "../../../Lib/withSplitting";
const MM16Presenter = withSplitting(() => import("./MM16Presenter"));
import { useQuery, useMutation } from "@apollo/client";
import {} from "./MM16Queries";
import { animateScroll as scroll } from "react-scroll";
import useInput from "../../../Components/Hooks/useInput";
import { toast } from "react-toastify";

const MM16Container = ({ history }) => {
  ////////////// - VARIABLE- ////////////////

  ////////////// - USE REF- ///////////////
  const graphRef = useRef();
  const documentRef = useRef(document);

  ////////////// - USE STATE- ///////////////
  const [isCheck, setIsCheck] = useState(false);
  const [graphValue, setGraphValue] = useState(`0%`);
  const [graphValue2, setGraphValue2] = useState(`0%`);

  ////////////// - USE QUERY- ///////////////

  ///////////// - USE MUTATION- /////////////

  ///////////// - EVENT HANDLER- ////////////

  ////////////// - USE EFFECT- //////////////

  useEffect(() => {
    scroll.scrollTo(0);
  }, []);

  return (
    <MM16Presenter
      graphRef={graphRef}
      documentRef={documentRef}
      //
      isCheck={isCheck}
      setIsCheck={setIsCheck}
      graphValue={graphValue}
      setGraphValue={setGraphValue}
      graphValue2={graphValue2}
      setGraphValue2={setGraphValue2}
    />
  );
};

export default MM16Container;
