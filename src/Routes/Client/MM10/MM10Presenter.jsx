import React, { useEffect } from "react";
import withSplitting from "../../../Lib/withSplitting";
import {
  RsWrapper,
  Text,
  WholeWrapper,
  Wrapper,
  Image,
  EmptyList,
  SpanText,
} from "../../../Components/CommonComponents";
import styled from "styled-components";
import { withResizeDetector } from "react-resize-detector";
import useTitle from "@4leaf.ysh/use-title";
import Theme from "../../../Styles/Theme";

const MM10Presenter = ({ width }) => {
  useTitle(`회사소개 | ${process.env["HOMEPAGE_NAME"]}`);

  return <WholeWrapper>business</WholeWrapper>;
};

export default withResizeDetector(MM10Presenter);
