import React, { useEffect, useRef, useState } from "react";
import withSplitting from "../../../Lib/withSplitting";
const MM10Presenter = withSplitting(() => import("./MM10Presenter"));
import { useQuery, useMutation } from "@apollo/client";
import { GET_EXHIBITION_ALL, GET_SIGN_LIST } from "./MM10Queries";
import { animateScroll as scroll } from "react-scroll";
import useInput from "../../../Components/Hooks/useInput";
import { toast } from "react-toastify";

const MM10Container = ({ history, location }) => {
  ////////////// - VARIABLE- ////////////////

  ////////////// - USE REF- ///////////////
  const aboutRef = useRef();
  const historyRef = useRef();
  const signRef = useRef();

  ////////////// - USE STATE- ///////////////
  const [readMoreBtn, setReadMoreBtn] = useState(false);
  const [currentTab, setCurrentTab] = useState(0);
  const [popup, setPopup] = useState("");
  const [exhibition, setExhibition] = useState("");
  const [detailExhibition, setDetailExhibition] = useState("");

  ////////////// - USE QUERY- ///////////////
  const { data: sDatum, refetch: sRefetch } = useQuery(GET_SIGN_LIST);
  const { data: eDatum, refetch: eRefetch } = useQuery(GET_EXHIBITION_ALL);

  ///////////// - USE MUTATION- /////////////

  ///////////// - EVENT HANDLER- ////////////
  const readMoreToggle = () => {
    setReadMoreBtn(!readMoreBtn);
  };

  ////////////// - USE EFFECT- //////////////

  useEffect(() => {
    sRefetch();
    eRefetch();

    scroll.scrollTo(0);
  }, []);

  useEffect(() => {
    scroll.scrollTo(0);
  }, [popup]);

  return (
    <MM10Presenter
      location={location}
      history={history}
      //
      aboutRef={aboutRef}
      historyRef={historyRef}
      signRef={signRef}
      //
      readMoreBtn={readMoreBtn}
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      popup={popup}
      setPopup={setPopup}
      exhibition={exhibition}
      setExhibition={setExhibition}
      detailExhibition={detailExhibition}
      setDetailExhibition={setDetailExhibition}
      //
      sDatum={sDatum && sDatum.getSignList}
      eDatum={eDatum && eDatum.getExhibitionAll}
      //
      readMoreToggle={readMoreToggle}
    />
  );
};

export default MM10Container;
