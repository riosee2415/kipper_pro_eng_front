import React, { useEffect, useState } from "react";
import {
  WholeWrapper,
  RsWrapper,
  Wrapper,
  Text,
  Image,
  ATag,
} from "../../Components/CommonComponents";
import { Link } from "react-router-dom";
import { withResizeDetector } from "react-resize-detector";
import { GET_ALL_FOOTER_INFO, GET_ALL_SNS } from "./LayoutQueries";
import { useQuery } from "@apollo/client";
import Theme from "../../Styles/Theme";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import styled from "styled-components";

const FooterTitle = styled.h2`
  width: auto;
  font-size: 17px;
  color: rgb(222, 222, 222);
  font-weight: 700;
  margin: 0 0 30px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: -10px;
    left: 0;
    width: 25px;
    height: 2px;
    background: rgb(246, 246, 246);
  }
`;

const Footer = ({ width, location }) => {
  ////////////// - USE STATE - ///////////////

  ////////////// - USE QUERY - ///////////////

  const { data: fDatum, refetch: fRefetch } = useQuery(GET_ALL_FOOTER_INFO);
  const { data: sDatum, refetch: sRefetch } = useQuery(GET_ALL_SNS);

  useEffect(() => {
    fRefetch();
    sRefetch();
  }, []);

  return (
    <WholeWrapper
      padding={`50px 0`}
      bgColor={Theme.black_C}
      color={Theme.white_C}
      isRelative={true}
    >
      <RsWrapper dr={`row`} ju={`space-between`}>
        <Wrapper width={`calc(100% / 3)`} al={`flex-start`}>
          <Image
            width={`230px`}
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/DGK%2Fassets%2Fimages%2Flogo%2Flogo-W.png?alt=media&token=bfea6f4e-3af3-4c82-b548-266885af1e2d`}
            alt="logo"
          />
        </Wrapper>
        <Wrapper width={`calc(100% / 3)`}>
          <Wrapper dr={`row`} ju={`flex-start`} margin={`10px 0`}>
            <Text> {fDatum && fDatum.getAllFooterInfo[0].title}</Text>
            <Text>{fDatum && fDatum.getAllFooterInfo[0].content}</Text>
          </Wrapper>

          {/* <Wrapper dr={`row`} ju={`flex-start`}>
            <Text>{fDatum && fDatum.getAllFooterInfo[1].title}</Text>
            <Text>{fDatum && fDatum.getAllFooterInfo[1].content}</Text>
          </Wrapper> */}
        </Wrapper>
        <Wrapper width={`calc(100% / 3)`}>
          {/* <Wrapper dr={`row`} ju={`flex-start`}>
            <Text>{fDatum && fDatum.getAllFooterInfo[2].title}</Text>
            <Text>{fDatum && fDatum.getAllFooterInfo[2].content}</Text>
          </Wrapper> */}

          {/* <Wrapper dr={`row`} ju={`flex-start`} margin={`10px 0`}>
            <Text width={`auto`}>
              {fDatum && fDatum.getAllFooterInfo[3].title}
            </Text>
            <ATag
              width={`auto`}
              href={`mailto:${fDatum && fDatum.getAllFooterInfo[3].content}`}
            >
              <Text width={`auto`}>
                {fDatum && fDatum.getAllFooterInfo[3].content}
              </Text>
            </ATag>
          </Wrapper> */}
          {/* <Wrapper dr={`row`} ju={`flex-start`}>
            <ATag
              href={`${sDatum && sDatum.getAllSns[1].url}`}
              target="_blank"
              color={Theme.white_C}
              width={`auto`}
            >
              <FaFacebookF />
            </ATag>
            <ATag
              href={`${sDatum && sDatum.getAllSns[2].url}`}
              target="_blank"
              color={Theme.white_C}
              margin={`0 20px`}
              width={`auto`}
            >
              <FaTwitter />
            </ATag>
            <ATag
              href={`${sDatum && sDatum.getAllSns[0].url}`}
              target="_blank"
              color={Theme.white_C}
              width={`auto`}
            >
              <FaInstagram />
            </ATag>
          </Wrapper> */}
        </Wrapper>
      </RsWrapper>
    </WholeWrapper>
  );
};

export default withResizeDetector(Footer);
