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
} from "../../../Components/CommonComponents";
import styled from "styled-components";
import { withResizeDetector } from "react-resize-detector";
import useTitle from "@4leaf.ysh/use-title";
import Theme from "../../../Styles/Theme";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import CircularIndeterminate from "../../../Components/loading/CircularIndeterminate";

const ProductTypeSlider = withSplitting(() =>
  import("../../../Components/slider/ProductTypeSlider.jsx")
);

const SearchInput = styled(TextInput)`
  width: 100%;
  height: 24px;
  border-radius: 14px;
  background: rgb(157, 157, 157);
  padding: 0 30px 0 16px;

  &::placeholder {
    color: ${(props) => props.theme.white_C};
    font-size: 12px;
  }
`;

const BoxImage = styled(Wrapper)`
  width: calc(100% / 4);
  height: 300px;
  border-bottom: 1px solid rgb(216, 216, 216);
  border-right: 1px solid rgb(216, 216, 216);
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px 15px;
  background-attachment: initial;
  cursor: pointer;
  transition: 0.5s;

  &:nth-child(-n + 4) {
    border-top: 1px solid rgb(216, 216, 216);
  }

  &:nth-child(4n + 1) {
    border-left: 1px solid rgb(216, 216, 216);
  }
  &:first-child {
    border-left: 1px solid rgb(216, 216, 216);
  }
  &:hover {
    background-image: ${(props) => props.bgImg2};

    & ${Text}.title {
      color: rgb(193, 47, 34);
    }
  }

  @media (max-width: 900px) {
    width: calc(100% / 2);
    height: 145px;
    background-size: 140px;
    padding: 5px;

    &:nth-child(-n + 4) {
      border-top: none;
    }

    &:nth-child(4n + 1) {
      border-left: none;
    }

    &:nth-child(-n + 2) {
      border-top: 1px solid rgb(216, 216, 216);
    }

    &:nth-child(2n + 1) {
      border-left: 1px solid rgb(216, 216, 216);
    }
  }
`;

const MM08Presenter = ({
  width,
  //
  tokenId,
  //
  search,
  arrow,
  productSubType,
  inputSearchValue,
  //
  tData,
  pDatum,
  //
  searchToggle,
  arrowToggle,
  moveLinkHandler,
  changeSubTypeHandler,
  searchDataHandler,
  searchDataBlurHandler,
}) => {
  useTitle(`Lock Key PRO | ${process.env["HOMEPAGE_NAME"]}`);

  return (
    <WholeWrapper>
      <Wrapper
        dr={`row`}
        bgColor={`rgb(241, 241, 241)`}
        margin={`43px 0 0`}
        padding={`25px 0`}
      >
        <Wrapper dr={`row`} display={width < 800 ? `none` : `flex`}>
          <Wrapper
            width={`auto`}
            margin={width < 1000 ? `0 30px` : `0 55px`}
            cursor={`pointer`}
            onClick={() => moveLinkHandler(`/usb-physicalsecurity`)}
          >
            <Wrapper width={`80px`}>
              <Image
                alt="icon"
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon%2Fproduct-icon-03.png?alt=media&token=adae713b-c659-4475-beac-a7c1cd85abab`}
                width={`37px`}
                height={`37px`}
                objectFit={`contain`}
                margin={`0 0 5px`}
              />
            </Wrapper>
            <Text fontSize={`12px`}>USB Security</Text>
          </Wrapper>
          <Wrapper
            width={`auto`}
            margin={width < 1000 ? `0 30px` : `0 55px`}
            cursor={`pointer`}
            onClick={() => moveLinkHandler(`/network-physicalsecurity`)}
          >
            <Wrapper width={`80px`}>
              <Image
                alt="icon"
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon%2Fproduct-icon-04.png?alt=media&token=adae713b-c659-4475-beac-a7c1cd85abab`}
                width={`37px`}
                height={`37px`}
                objectFit={`contain`}
                margin={`0 0 5px`}
              />
            </Wrapper>
            <Text fontSize={`12px`}>Network Security</Text>
          </Wrapper>
          <Wrapper
            width={`auto`}
            margin={width < 1000 ? `0 30px` : `0 55px`}
            cursor={`pointer`}
            onClick={() => moveLinkHandler(`/data-port-physicalsecurity`)}
          >
            <Wrapper width={`80px`}>
              <Image
                alt="icon"
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon%2Fproduct-icon-05.png?alt=media&token=adae713b-c659-4475-beac-a7c1cd85abab`}
                width={`37px`}
                height={`37px`}
                objectFit={`contain`}
                margin={`0 0 5px`}
              />
            </Wrapper>
            <Text fontSize={`12px`}>Other Port Security</Text>
          </Wrapper>
          <Wrapper
            width={`auto`}
            margin={width < 1000 ? `0 30px` : `0 55px`}
            cursor={`pointer`}
            onClick={() => moveLinkHandler(`/computer-physicalsecurity`)}
          >
            <Wrapper width={`80px`}>
              <Image
                alt="icon"
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon%2Fproduct-icon-06.png?alt=media&token=adae713b-c659-4475-beac-a7c1cd85abab`}
                width={`37px`}
                height={`37px`}
                objectFit={`contain`}
                margin={`0 0 5px`}
              />
            </Wrapper>
            <Text fontSize={`12px`}>Anti-Theft for Computer</Text>
          </Wrapper>
          <Wrapper
            width={`auto`}
            margin={width < 1000 ? `0 30px` : `0 55px`}
            cursor={`pointer`}
            onClick={() => moveLinkHandler(`/key`)}
          >
            <Wrapper width={`80px`}>
              <Image
                alt="icon"
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon%2F%E1%84%85%E1%85%A1%E1%86%A8%E1%84%8F%E1%85%B5-07.svg?alt=media&token=d15e62ca-8c1d-4f50-b494-d1e20466cf78`}
                width={`37px`}
                height={`37px`}
                objectFit={`contain`}
                margin={`0 0 5px`}
              />
            </Wrapper>
            <Text fontSize={`12px`} fontWeight={`700`} color={`rgb(209, 0, 0)`}>
              Lock Key PRO
            </Text>
          </Wrapper>
        </Wrapper>

        <Wrapper dr={`row`} display={width < 800 ? `flex` : `none`}>
          <Wrapper width={`36px`}>
            {arrow ? (
              <RiArrowLeftSLine
                size={25}
                color={Theme.blackTheme2_C}
                onClick={() => arrowToggle()}
              />
            ) : (
              <></>
            )}
          </Wrapper>
          {arrow ? (
            <>
              <Wrapper
                width={`calc((100% - 36px - 36px) / 3)`}
                cursor={`pointer`}
                onClick={() => moveLinkHandler(`/usb-physicalsecurity`)}
              >
                <Wrapper width={`80px`}>
                  <Image
                    alt="icon"
                    src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon%2Fproduct-icon-03.png?alt=media&token=adae713b-c659-4475-beac-a7c1cd85abab`}
                    width={`37px`}
                    height={`37px`}
                    objectFit={`contain`}
                    margin={`0 0 5px`}
                  />
                </Wrapper>
                <Text fontSize={`10px`}>USB Security</Text>
              </Wrapper>
              <Wrapper
                width={`calc((100% - 36px - 36px) / 3)`}
                cursor={`pointer`}
                onClick={() => moveLinkHandler(`/network-physicalsecurity`)}
              >
                <Wrapper width={`80px`}>
                  <Image
                    alt="icon"
                    src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon%2Fproduct-icon-04.png?alt=media&token=adae713b-c659-4475-beac-a7c1cd85abab`}
                    width={`37px`}
                    height={`37px`}
                    objectFit={`contain`}
                    margin={`0 0 5px`}
                  />
                </Wrapper>
                <Text fontSize={`10px`}>Network Security</Text>
              </Wrapper>
              <Wrapper
                width={`calc((100% - 36px - 36px) / 3)`}
                cursor={`pointer`}
                onClick={() => moveLinkHandler(`/data-port-physicalsecurity`)}
              >
                <Wrapper width={`80px`}>
                  <Image
                    alt="icon"
                    src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon%2Fproduct-icon-05.png?alt=media&token=adae713b-c659-4475-beac-a7c1cd85abab`}
                    width={`37px`}
                    height={`37px`}
                    objectFit={`contain`}
                    margin={`0 0 5px`}
                  />
                </Wrapper>
                <Text fontSize={`10px`}>Other Port Security</Text>
              </Wrapper>
            </>
          ) : (
            <>
              <Wrapper
                width={`calc((100% - 36px - 36px) / 2)`}
                cursor={`pointer`}
                onClick={() => moveLinkHandler(`/computer-physicalsecurity`)}
              >
                <Wrapper width={`80px`}>
                  <Image
                    alt="icon"
                    src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon%2Fproduct-icon-06.png?alt=media&token=adae713b-c659-4475-beac-a7c1cd85abab`}
                    width={`37px`}
                    height={`37px`}
                    objectFit={`contain`}
                    margin={`0 0 5px`}
                  />
                </Wrapper>
                <Text fontSize={`10px`}>Anti-Theft for Computer</Text>
              </Wrapper>
              <Wrapper
                width={`calc((100% - 36px - 36px) / 2)`}
                cursor={`pointer`}
                onClick={() => moveLinkHandler(`/key`)}
              >
                <Wrapper width={`80px`}>
                  <Image
                    alt="icon"
                    src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon%2F%E1%84%85%E1%85%A1%E1%86%A8%E1%84%8F%E1%85%B5-07.svg?alt=media&token=d15e62ca-8c1d-4f50-b494-d1e20466cf78`}
                    width={`37px`}
                    height={`37px`}
                    objectFit={`contain`}
                    margin={`0 0 5px`}
                  />
                </Wrapper>
                <Text
                  fontSize={`10px`}
                  fontWeight={`700`}
                  color={`rgb(209, 0, 0)`}
                >
                  Lock Key PRO
                </Text>
              </Wrapper>
            </>
          )}
          <Wrapper width={`36px`}>
            {arrow ? (
              <></>
            ) : (
              <RiArrowRightSLine
                size={25}
                color={Theme.blackTheme2_C}
                onClick={() => arrowToggle()}
              />
            )}
          </Wrapper>
        </Wrapper>
      </Wrapper>

      <RsWrapper padding={width < 900 ? `40px 36px` : `70px 0 150px`}>
        <Wrapper dr={`row`} ju={`flex-start`}>
          {pDatum ? (
            pDatum.length === 0 ? (
              <EmptyList>Search result does not exist.</EmptyList>
            ) : (
              pDatum.map((data) => {
                return (
                  <BoxImage
                    key={data._id}
                    bgImg={`url("${data.thumbnailPath}")`}
                    bgImg2={`url("${data.thumbnailPath2}")`}
                    onClick={() => moveLinkHandler(`/key/${data._id}`)}
                  >
                    <Text
                      fontSize={width < 700 ? `10px` : `19px`}
                      fontWeight={`700`}
                      className={`title`}
                    >
                      {data.mainTitle}
                    </Text>
                    <Wrapper dr={`row`} ju={`space-between`} al={`flex-end`}>
                      <Text fontSize={`10px`} width={width < 700 && `55%`}>
                        {data.keyType}
                      </Text>
                      <Wrapper width={`auto`} al={`flex-end`}>
                        {tData && (
                          <Text
                            fontSize={width < 700 ? `10px` : `15px`}
                            color={`#C50000`}
                            lineHeight={`1`}
                            fontWeight={`700`}
                          >
                            {tData.level === `LEVEL3`
                              ? data.vipPrice1
                              : tData.level === `LEVEL4`
                              ? data.vipPrice2
                              : ``}
                            USD
                          </Text>
                        )}
                        {tokenId && (
                          <Text fontSize={`10px`} color={`#a5a5a5`}>
                            MMP {data.price}USD
                          </Text>
                        )}
                      </Wrapper>
                    </Wrapper>
                  </BoxImage>
                );
              })
            )
          ) : (
            <EmptyList dr={`column`}>
              <Wrapper margin={`0 0 20px`}>
                <CircularIndeterminate />
              </Wrapper>
              We're searching the data you requested.
            </EmptyList>
          )}
        </Wrapper>
      </RsWrapper>
    </WholeWrapper>
  );
};

export default withResizeDetector(MM08Presenter);
