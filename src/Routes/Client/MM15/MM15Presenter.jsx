import React from "react";
import withSplitting from "../../../Lib/withSplitting";
import {
  WholeWrapper,
  Wrapper,
  RsWrapper,
  TextInput,
  Text,
  Image,
  EmptyList,
  PagenationWrapper,
  PagenationBtn,
  Pagenation,
} from "../../../Components/CommonComponents";
import styled from "styled-components";
import { withResizeDetector } from "react-resize-detector";
import useTitle from "@4leaf.ysh/use-title";
import Theme from "../../../Styles/Theme";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import CircularIndeterminate from "../../../Components/loading/CircularIndeterminate";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

const Cancel = styled(Wrapper)`
  width: 20px;
  height: 20px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 20px;
    height: 1px;
    background-color: ${Theme.white_C};
    transform: rotate(45deg);
    top: 0;
    left: 0;
  }
  &:after {
    content: "";
    position: absolute;
    width: 20px;
    height: 1px;
    background-color: ${Theme.white_C};
    transform: rotate(-45deg);
    top: 0;
    left: 0;
  }
`;

const Box2 = styled(Wrapper)`
  width: 100%;
  height: 40px;
  border: 1px solid ${Theme.greyTheme4_C};
  flex-direction: row;
  padding: 0 24px 0 14px;
  justify-content: space-between;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    border: 1px solid ${Theme.greyTheme7_C};
  }

  @media (max-width: 700px) {
    padding: 0 14px;
  }
`;

const Box = styled(Wrapper)`
  width: calc(100% / 4);
  height: auto;
  padding: 15px 20px;
  border: 1px solid ${Theme.greyTheme4_C};
  cursor: pointer;
  border-right: 1px solid transparent;
  transition: 0.5s;

  &:nth-child(n + 5) {
    border-top: 1px solid transparent;
  }

  &:last-child {
    border-right: 1px solid ${Theme.greyTheme4_C};
  }

  &:nth-child(4n) {
    border-right: 1px solid ${Theme.greyTheme4_C};
  }

  &:hover {
    border: 1px solid ${Theme.greyTheme7_C};
  }

  @media (max-width: 900px) {
    width: calc(100% / 2);
    height: 300px;
    padding: 20px 10px;

    &:nth-child(2n) {
      border-right: 1px solid ${Theme.greyTheme4_C};
    }
  }

  @media (max-width: 700px) {
    height: 163px;
    padding: 10px 5px;
  }
`;

const Tab = styled(Wrapper)`
  width: 50%;
  border-bottom: ${(props) => props.borderBottom};
  font-size: 18px;
  font-weight: ${(props) => props.fontWeight};
  padding: 0 0 9px;
  transition: 0.5s;
  align-items: flex-start;
  cursor: pointer;
  color: ${(props) => props.color};

  &:hover {
    color: ${Theme.greyTheme3_C};
    font-weight: 700;
    border-bottom: 1px solid ${Theme.greyTheme3_C};
  }

  @media (max-width: 700px) {
    font-size: 15px;
  }
`;

const MM15Presenter = ({
  location,
  width,
  currentTab,
  setCurrentTab,
  inputSearch,
  pages,
  currentPage,
  currentList,
  limit,
  currentLink,
  setCurrentPage,
  //
  rDatum,
  CatDatum,
  //
  prevAndNextPageChangeHandler,
  changePageHandler,
  searchHandler,
  changeTabHandler,
  downloadHandler,
  changeLinkHandler,
}) => {
  useTitle(`자료실 | ${process.env["HOMEPAGE_NAME"]}`);

  return (
    <>
      <WholeWrapper bgColor={Theme.black_C} color={Theme.white_C}>
        <RsWrapper
          padding={width < 900 ? (width < 700 ? `0 35px` : `0 50px`) : ``}
        >
          <Wrapper
            al={`flex-start`}
            fontSize={width < 700 ? `26px` : `34px`}
            fontWeight={`bold`}
            margin={width < 700 ? `100px 0 20px` : `160px 0 20px`}
          >
            Download
          </Wrapper>

          <Wrapper dr={`row`} margin={`21px 0 18px`}>
            <Tab
              color={
                currentTab === 0
                  ? `${Theme.greyTheme3_C}`
                  : `${Theme.greyTheme7_C}`
              }
              borderBottom={
                currentTab === 0
                  ? `1px solid ${Theme.greyTheme3_C}`
                  : `1px solid ${Theme.greyTheme7_C}`
              }
              fontWeight={currentTab === 0 ? `700` : `400`}
              onClick={() => changeTabHandler(0)}
            >
              User Guide
            </Tab>
            <Tab
              color={
                currentTab === 1
                  ? `${Theme.greyTheme3_C}`
                  : `${Theme.greyTheme7_C}`
              }
              borderBottom={
                currentTab === 1
                  ? `1px solid ${Theme.greyTheme3_C}`
                  : `1px solid ${Theme.greyTheme7_C}`
              }
              fontWeight={currentTab === 0 ? `700` : `400`}
              onClick={() => changeTabHandler(1)}
            >
              Catalog / Product Introduction
            </Tab>
          </Wrapper>

          <Wrapper al={`flex-end`} margin={`0 0 39px`}>
            <Wrapper
              isRelative={true}
              width={width < 900 ? `100%` : `33%`}
              height={`24px`}
            >
              <TextInput
                width={`100%`}
                height={`100%`}
                bgColor={Theme.greyTheme7_C}
                radius={`10px`}
                padding={`0 50px 0 20px`}
                placeholder={`Search for the product you are looking for.`}
                placeholderColor={Theme.black_C}
                focusBorder={`1px solid ${Theme.greyTheme7_C}`}
                {...inputSearch}
                onKeyDown={(e) => e.keyCode === 13 && searchHandler()}
                placeholderFontSize={width < 700 ? `10px` : `12px`}
              />

              <Wrapper
                isAbsolute={true}
                top={width < 700 ? `4px` : `2px`}
                right={`5px`}
                width={`auto`}
                color={Theme.black_C}
                onClick={searchHandler}
              >
                <AiOutlineSearch size={width < 700 ? `15` : `20`} />
              </Wrapper>
            </Wrapper>
          </Wrapper>

          {/* 제품 사용설명서 */}

          {currentTab === 0 && (
            <Wrapper dr={`row`} ju={`flex-start`}>
              {rDatum ? (
                rDatum.length === 0 ? (
                  <EmptyList>제품 사용설명서가 없습니다.</EmptyList>
                ) : (
                  rDatum.map((data) => {
                    return (
                      <Box>
                        <Wrapper
                          overflow={`hidden`}
                          padding={width < 700 ? `5px 0` : `17px 0`}
                        >
                          <Image
                            height={width < 700 ? `56px` : `115px`}
                            src={data.thumbnailPath}
                            objectFit={`contain`}
                          />
                        </Wrapper>

                        <Wrapper
                          borderBottom={`1px solid ${Theme.greyTheme9_C}`}
                          color={Theme.greyTheme7_C}
                          fontSize={`10px`}
                          al={`flex-end`}
                          padding={`0 0 4px`}
                        >
                          {data.content}
                        </Wrapper>

                        <Wrapper al={`flex-start`}>
                          <Text
                            isEllipsis={true}
                            width={`100%`}
                            color={Theme.greyTheme3_C}
                            fontSize={width < 700 ? `12px` : `18px`}
                            fontWeight={`700`}
                            margin={width < 700 ? `2px 0 0` : `8px 0 0`}
                          >
                            {data.title}
                          </Text>
                          <Text
                            isEllipsis={true}
                            width={`100%`}
                            color={Theme.greyTheme7_C}
                            fontSize={width < 700 ? `10px` : `11px`}
                            fontWeight={`400`}
                            margin={width < 700 ? `0 0 7px` : `0 0 12px`}
                          >
                            {data.subTitle}
                          </Text>
                          <Wrapper dr={`row`} ju={`flex-start`}>
                            <Wrapper
                              dr={`row`}
                              width={`auto`}
                              margin={width < 700 ? `0 9px 0 0` : `0 17px 0 0`}
                            >
                              <Image
                                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM15%2F%E1%84%8C%E1%85%A1%E1%84%85%E1%85%AD%E1%84%89%E1%85%B5%E1%86%AF-icon-1.png?alt=media&token=29d6e6b1-b134-4a30-9e19-794cfe601e7f`}
                                width={width < 700 ? `15px` : `20px`}
                              />
                              <Text
                                color={Theme.white_C}
                                fontSize={`10px`}
                                margin={width < 700 ? `0 0 0 3px` : `0 0 0 6px`}
                                onClick={() => {
                                  console.log("????");
                                  downloadHandler(
                                    data.filePath,
                                    data.fileOriginName
                                  );
                                }}
                              >
                                사용설명서
                              </Text>
                            </Wrapper>
                            <Wrapper dr={`row`} width={`auto`}>
                              <Image
                                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM15%2F%E1%84%8C%E1%85%A1%E1%84%85%E1%85%AD%E1%84%89%E1%85%B5%E1%86%AF-icon-2.png?alt=media&token=8feef21a-dafb-45a1-bdc3-70a2acc1f0b1`}
                                width={width < 700 ? `15px` : `20px`}
                              />
                              <Text
                                color={Theme.white_C}
                                fontSize={`10px`}
                                margin={width < 700 ? `0 0 0 3px` : `0 0 0 6px`}
                                onClick={() => {
                                  changeLinkHandler(data);
                                }}
                              >
                                동영상보기
                              </Text>
                            </Wrapper>
                          </Wrapper>
                        </Wrapper>
                      </Box>
                    );
                  })
                )
              ) : (
                <CircularIndeterminate />
              )}
            </Wrapper>
          )}

          {/* 카탈로그 */}
          {currentTab === 1 && (
            <Wrapper margin={`0 0 33px`}>
              {CatDatum ? (
                CatDatum.length === 0 ? (
                  <EmptyList>카탈로그가 없습니다.</EmptyList>
                ) : (
                  CatDatum.map((data, idx) => {
                    return (
                      <Box2 margin={idx % 2 !== 0 ? `0 0 30px` : `0`}>
                        <Text
                          fontSize={width < 700 ? `12px` : `16px`}
                          fontWeight={`700`}
                          color={Theme.greyTheme3_C}
                        >
                          {data.title}
                        </Text>
                        <Wrapper width={`auto`} dr={`row`}>
                          <Image
                            onClick={() =>
                              downloadHandler(
                                data.filePath,
                                data.fileOriginName
                              )
                            }
                            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FMM15%2F%E1%84%8C%E1%85%A1%E1%84%85%E1%85%AD%E1%84%89%E1%85%B5%E1%86%AF-icon-3.png?alt=media&token=7aa0d881-d244-45d5-8fa1-cde03169d9a2`}
                            width={`20px`}
                            margin={`0 10px 0 0`}
                          />
                          <Text
                            fontSize={`14px`}
                            color={Theme.white_C}
                            fontWeight={`400`}
                            display={width < 700 ? `none` : `flex`}
                            onClick={() =>
                              downloadHandler(
                                data.filePath,
                                data.fileOriginName
                              )
                            }
                          >
                            다운로드
                          </Text>
                        </Wrapper>
                      </Box2>
                    );
                  })
                )
              ) : (
                <CircularIndeterminate />
              )}
            </Wrapper>
          )}
          {/* <Wrapper margin={`0 0 33px`}>
          <Box2>
            <Text
              fontSize={`16px`}
              fontWeight={`700`}
              color={Theme.greyTheme3_C}
            >
              스마트키퍼 프로 국문 카탈로그
            </Text>
            <Wrapper width={`auto`} dr={`row`}>
              <Image src={`#`} width={`20px`} margin={`0 10px 0 0`} />
              <Text fontSize={`14px`} color={Theme.white_C} fontWeight={`400`}>
                다운로드
              </Text>
            </Wrapper>
          </Box2>
          <Box2>
            <Text
              fontSize={`16px`}
              fontWeight={`700`}
              color={Theme.greyTheme3_C}
            >
              스마트키퍼 프로 영문 카탈로그
            </Text>
            <Wrapper width={`auto`} dr={`row`}>
              <Image src={`#`} width={`20px`} margin={`0 10px 0 0`} />
              <Text fontSize={`14px`} color={Theme.white_C} fontWeight={`400`}>
                다운로드
              </Text>
            </Wrapper>
          </Box2>
        </Wrapper> */}
        </RsWrapper>

        {pages && pages.length > 0 && (
          <PagenationWrapper
            width={`auto`}
            margin={width < 700 ? `50px 0` : `50px 0 150px`}
          >
            <PagenationBtn onClick={() => changePageHandler(0)}>
              <BsChevronDoubleLeft />
            </PagenationBtn>

            <PagenationBtn
              onClick={() => prevAndNextPageChangeHandler(currentPage - 1)}
            >
              <IoIosArrowBack />
            </PagenationBtn>

            <Wrapper width={`auto`} margin={`0 16px`} dr={`row`}>
              {pages.map((data, idx) => {
                return (
                  (currentList + 1) * 5 > idx &&
                  currentList * 5 <= idx && (
                    <Pagenation
                      className={data === currentPage ? `active` : ``}
                      key={data}
                      onClick={() => changePageHandler(data)}
                    >
                      {data + 1}
                    </Pagenation>
                  )
                );
              })}
            </Wrapper>

            <PagenationBtn
              onClick={() => prevAndNextPageChangeHandler(currentPage + 1)}
            >
              <IoIosArrowForward />
            </PagenationBtn>
            <PagenationBtn onClick={() => changePageHandler(pages.length - 1)}>
              <BsChevronDoubleRight />
            </PagenationBtn>
          </PagenationWrapper>
        )}
      </WholeWrapper>
      {currentLink && (
        <Wrapper
          top={0}
          left={0}
          isFixed={true}
          zIndex={999999}
          width={`100%`}
          height={`100vh`}
          bgColor={`rgba(0,0,0,0.85)`}
          padding={width < 800 ? `0 20px` : `0`}
        >
          <Wrapper width={width < 800 ? `100%` : `870px`}>
            <Wrapper al={`flex-end`}>
              <Cancel onClick={() => changeLinkHandler(null)}></Cancel>
            </Wrapper>
            <Wrapper
              height={width < 800 ? `200px` : `473px`}
              bgColor={Theme.white_C}
            >
              <iframe
                width={`100%`}
                height={`100%`}
                src={`https://www.youtube.com/embed/${
                  currentLink.link.includes(`v=`)
                    ? currentLink.link.split(`v=`)[1].split(`&`)[0]
                    : ""
                }`}
                frameBorder="0"
                allow="accelerometer; autoplay; loop; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Wrapper>

            <Wrapper al={`flex-start`} margin={`20px 0 0`}>
              <Text
                fontSize={`18px`}
                fontWeight={`700`}
                color={Theme.greyTheme3_C}
              >
                {currentLink.title}
              </Text>
              <Text fontSize={`11px`} color={Theme.greyTheme7_C}>
                {currentLink.subTitle}
              </Text>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      )}
    </>
  );
};

export default withResizeDetector(MM15Presenter);
