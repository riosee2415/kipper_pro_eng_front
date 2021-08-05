import React from "react";
import {
  EmptyList,
  Wrapper,
  WholeWrapper,
  UlWrapper,
  LiWrapper,
  SearchWrapper,
  TextInput,
  PagenationBtn,
  Pagenation,
  PagenationWrapper,
  Text,
  TabWrapper,
  TabBtn,
} from "../CommonComponents";
import CircularIndeterminate from "../loading/CircularIndeterminate";
import { withResizeDetector } from "react-resize-detector";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import Theme from "../../Styles/Theme";

const Board = ({
  width,
  currentType,
  actionFaqView,
  inputSearch,
  pages,
  currentPage,
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
  return (
    <WholeWrapper>
      {/* <SearchWrapper width={`auto`} dr={`row`} isRelative={true}>
        <TextInput
          type="text"
          width={`190px`}
          padding={`0px 30px 0px 5px`}
          {...inputSearch}
          placeholder="Search"
          onKeyDown={(e) => e.keyCode === 13 && searchHandler()}
        />

        <AiOutlineSearch onClick={searchHandler} />
      </SearchWrapper>

      <TabWrapper
        dr={`row`}
        isWrap={true}
        ju={width < 700 ? `center` : `flex-start`}
        margin={`20px 0px 50px`}
      >
        {faqTypeDatum &&
          faqTypeDatum.map((data, idx) => {
            return (
              <TabBtn
                key={data._id}
                minWidth={width < 700 ? `175px` : `168px`}
                height={`35px`}
                kindOf={idx === currentType ? `activeBtn` : `white`}
                margin={`0px 10px 0px 0px`}
                bgColor={idx === currentType && Theme.basicTheme_C}
                color={idx === currentType && Theme.white_C}
                border={
                  idx === currentType ? `` : `1px solid ${Theme.basicTheme_C}`
                }
                onClick={() => changeFaqTypeHandler(idx)}
              >
                {data.typeName}
              </TabBtn>
            );
          })}
      </TabWrapper> */}

      <Wrapper>
        {faqDatum ? (
          faqDatum.length === 0 ? (
            <EmptyList>등록된 FAQ가 없습니다.</EmptyList>
          ) : (
            faqDatum.map((data, idx) => {
              return (
                <Wrapper className="faqBoard" key={data._id}>
                  <Wrapper
                    display={`flex`}
                    padding={width < 900 ? `10px 0 10px 36px` : `15px 0`}
                    al={`center`}
                    ju={`flex-start`}
                    dr={`row`}
                    cursor={`pointer`}
                    color={Theme.white_C}
                    borderBottom={`1px solid ${Theme.greyTheme7_C}`}
                    onClick={() => toggleFaqAnswer(idx, data.answer)}
                  >
                    <Wrapper
                      width={
                        width < 900 ? `calc(100% - 65px)` : `calc(100% - 50px)`
                      }
                      ju={`space-between`}
                      dr={`row`}
                      al={width < 900 && `flex-start`}
                    >
                      <Wrapper
                        width={`50px`}
                        minWidth={`50px`}
                        radius={`5px`}
                        al={`flex-start`}
                      >
                        <Text
                          fontSize={width < 700 ? `15px` : `18px`}
                          fontWeight={
                            actionFaqView && actionFaqView[idx] ? `500` : `500`
                          }
                        >
                          Q{idx + 1}.
                        </Text>
                      </Wrapper>
                      <Wrapper width={`calc(100% - 50px)`} al={`flex-start`}>
                        <Text
                          fontSize={width < 700 ? `15px` : `18px`}
                          fontWeight={
                            actionFaqView && actionFaqView[idx] ? `500` : `500`
                          }
                        >
                          {data.question}
                        </Text>
                      </Wrapper>
                    </Wrapper>
                    <Wrapper
                      width={width < 900 ? `65px` : `50px`}
                      color={Theme.white_C}
                      fontSize={width < 700 ? `16px` : `20px`}
                    >
                      {actionFaqView && actionFaqView[idx] ? (
                        <AiOutlineUp />
                      ) : (
                        <AiOutlineDown />
                      )}
                    </Wrapper>
                  </Wrapper>

                  <Wrapper
                    display={
                      actionFaqView && actionFaqView[idx] ? `flex` : `none`
                    }
                    margin={width < 900 ? `22px 0` : `50px 0`}
                    al={`center`}
                    color={Theme.greyTheme7_C}
                    ju={`flex-start`}
                    dr={`row`}
                    wrap={`initial`}
                  >
                    <Wrapper
                      height={`50px`}
                      width={width < 900 ? `36px` : `50px`}
                      minWidth={width < 900 ? `36px` : `50px`}
                      radius={`5px`}
                    ></Wrapper>
                    <Wrapper
                      width={
                        width < 900
                          ? `calc(100% - 36px - 36px)`
                          : `calc(100% - 50px)`
                      }
                    >
                      <Wrapper
                        className={`ql-editor`}
                        id={`faq-answer-${idx}`}
                        padding={width < 900 ? `0` : `10px`}
                        width={`100%`}
                        al={`flex-start`}
                        lineHeight={`1.6`}
                      ></Wrapper>
                    </Wrapper>
                  </Wrapper>
                </Wrapper>
              );
            })
          )
        ) : (
          <CircularIndeterminate />
        )}
      </Wrapper>

      {/* {pages && pages.length > 0 && (
        <PagenationWrapper width={`auto`}>
          <PagenationBtn
            onClick={() => prevAndNextPageChangeHandler(currentPage - 1)}
          >
            <IoIosArrowBack />
          </PagenationBtn>
          {pages.map((data) => {
            return (
              <Pagenation
                className={data === currentPage ? `active` : ``}
                key={data}
                onClick={() => changePageHandler(data)}
              >
                {data + 1}
              </Pagenation>
            );
          })}
          <PagenationBtn
            onClick={() => prevAndNextPageChangeHandler(currentPage + 1)}
          >
            <IoIosArrowForward />
          </PagenationBtn>
        </PagenationWrapper>
      )} */}
    </WholeWrapper>
  );
};

export default withResizeDetector(Board);
