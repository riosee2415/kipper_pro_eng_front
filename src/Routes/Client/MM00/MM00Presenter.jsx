import React, { useState } from "react";
import withSplitting from "../../../Lib/withSplitting";
import { WholeWrapper } from "../../../Components/CommonComponents";
import styled from "styled-components";
import useTitle from "@4leaf.ysh/use-title";
import { withResizeDetector } from "react-resize-detector";

const Popup = withSplitting(() =>
  import("../../../Components/popup/Popup.jsx")
);

const MainSlider = withSplitting(() =>
  import("../../../Components/slider/MainSlider.jsx")
);

const MM00Presenter = ({
  width,
  //
  mobileBannerData,
  mainBannerData,
}) => {
  useTitle(`${process.env["HOMEPAGE_NAME"]}`);
  return (
    <WholeWrapper isRelative={true} zIndex={`1`}>
      <MainSlider datum={width < 700 ? mobileBannerData : mainBannerData} />
      <h1>Hello 4LEAF</h1>

      <Popup />
    </WholeWrapper>
  );
};

export default withResizeDetector(MM00Presenter);
