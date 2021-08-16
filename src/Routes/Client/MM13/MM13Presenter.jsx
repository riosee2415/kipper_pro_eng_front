import React from "react";
import withSplitting from "../../../Lib/withSplitting";
import {
  WholeWrapper,
  RsWrapper,
  Wrapper,
  Image,
} from "../../../Components/CommonComponents";
import styled from "styled-components";
import { withResizeDetector } from "react-resize-detector";
import useTitle from "@4leaf.ysh/use-title";
import Theme from "../../../Styles/Theme";
const Board = withSplitting(() => import("../../../Components/faq/Board"));

const MM13Presenter = ({
  width,
  inputSearch,
  pages,
  currentPage,
  currentType,
  actionFaqView,
  //
  faqTypeDatum,
  faqDatum,
  //
  toggleFaqAnswer,
  changeFaqTypeHandler,
  prevAndNextPageChangeHandler,
  changePageHandler,
  searchHandler,
}) => {
  useTitle(`FAQ | ${process.env["HOMEPAGE_NAME"]}`);

  return (
    <WholeWrapper bgColor={Theme.black_C}>
      <RsWrapper
        padding={width < 900 ? `115px 0 100px` : `204px 0 100px`}
        paddingLeft={width < 900 && `0`}
        paddingRight={width < 900 && `0`}
      >
        {/* <Wrapper
          al={`flex-start`}
          fontSize={`70px`}
          isGotham={true}
          margin={`0 0 90px`}
          color={Theme.white_C}
          letterSpacing={`-5px`}
          700
        >
          FAQs
        </Wrapper> */}
        <Wrapper width={width < 900 ? `100%` : `80%`}>
          <Wrapper al={`flex-start`}>
            <Image
              alt="faq"
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ftitle%2FFAQs.svg?alt=media&token=e3dfe057-2bd1-4a86-b199-b339d9ef21fe`}
              width={width < 900 ? `84px` : `175px`}
              margin={width < 900 ? `0 0 40px 36px` : `0 0 90px`}
            />
          </Wrapper>
          <Wrapper>
            <Board
              inputSearch={inputSearch}
              pages={pages}
              currentPage={currentPage}
              currentType={currentType}
              actionFaqView={actionFaqView}
              //
              faqTypeDatum={faqTypeDatum}
              faqDatum={faqDatum}
              //
              toggleFaqAnswer={toggleFaqAnswer}
              changeFaqTypeHandler={changeFaqTypeHandler}
              prevAndNextPageChangeHandler={prevAndNextPageChangeHandler}
              changePageHandler={changePageHandler}
              searchHandler={searchHandler}
            />
          </Wrapper>
        </Wrapper>
      </RsWrapper>
    </WholeWrapper>
  );
};

export default withResizeDetector(MM13Presenter);
