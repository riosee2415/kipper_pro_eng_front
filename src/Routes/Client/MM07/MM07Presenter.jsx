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
  Image2,
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

const MM07Presenter = ({
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
  useTitle(`Other Port Security | ${process.env["HOMEPAGE_NAME"]}`);

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
            onClick={() => moveLinkHandler(`/usb`)}
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
            onClick={() => moveLinkHandler(`/p_network`)}
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
            onClick={() => moveLinkHandler(`/port`)}
          >
            <Wrapper width={`80px`}>
              <Image
                alt="icon"
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon%2F%E1%84%85%E1%85%A1%E1%86%A8%E1%84%8F%E1%85%B5-04.svg?alt=media&token=9f031275-3abf-4d2a-ae2b-f5d7688b860f`}
                width={`37px`}
                height={`37px`}
                objectFit={`contain`}
                margin={`0 0 5px`}
              />
            </Wrapper>
            <Text fontSize={`12px`} fontWeight={`700`} color={`rgb(209, 0, 0)`}>
              Other Port Security
            </Text>
          </Wrapper>
          <Wrapper
            width={`auto`}
            margin={width < 1000 ? `0 30px` : `0 55px`}
            cursor={`pointer`}
            onClick={() => moveLinkHandler(`/computer`)}
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
            onClick={() => moveLinkHandler(`/lock`)}
          >
            <Wrapper width={`80px`}>
              <Image
                alt="icon"
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon%2Fproduct-icon-07.png?alt=media&token=adae713b-c659-4475-beac-a7c1cd85abab`}
                width={`37px`}
                height={`37px`}
                objectFit={`contain`}
                margin={`0 0 5px`}
              />
            </Wrapper>
            <Text fontSize={`12px`}>Lock Key PRO</Text>
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
                width={`calc((100% - 36px - 36px) / 2)`}
                cursor={`pointer`}
                onClick={() => moveLinkHandler(`/computer`)}
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
                onClick={() => moveLinkHandler(`/lock`)}
              >
                <Wrapper width={`80px`}>
                  <Image
                    alt="icon"
                    src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon%2Fproduct-icon-07.png?alt=media&token=adae713b-c659-4475-beac-a7c1cd85abab`}
                    width={`37px`}
                    height={`37px`}
                    objectFit={`contain`}
                    margin={`0 0 5px`}
                  />
                </Wrapper>
                <Text fontSize={`10px`}>Lock Key PRO</Text>
              </Wrapper>
            </>
          ) : (
            <>
              <Wrapper
                width={`calc((100% - 36px - 36px) / 3)`}
                cursor={`pointer`}
                onClick={() => moveLinkHandler(`/usb`)}
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
                onClick={() => moveLinkHandler(`/p_network`)}
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
                onClick={() => moveLinkHandler(`/port`)}
              >
                <Wrapper width={`80px`}>
                  <Image
                    alt="icon"
                    src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon%2F%E1%84%85%E1%85%A1%E1%86%A8%E1%84%8F%E1%85%B5-04.svg?alt=media&token=9f031275-3abf-4d2a-ae2b-f5d7688b860f`}
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
                  Other Port Security
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
      <Wrapper
        bgColor={`rgb(143, 143, 143)`}
        color={Theme.white_C}
        height={`35px`}
        isRelative={true}
        isSticky={true}
        top={`44px`}
        left={`0`}
        zIndex={`10`}
      >
        <RsWrapper>
          <Wrapper dr={`row`}>
            {search ? (
              <>
                <Wrapper
                  dr={`row`}
                  width={width < 700 ? `350px` : `500px`}
                  isRelative={true}
                  transition={`0.3s`}
                >
                  <SearchInput
                    type={`text`}
                    {...inputSearchValue}
                    onChange={searchDataHandler}
                    onBlur={searchDataBlurHandler}
                  />

                  <Wrapper
                    width={`auto`}
                    isAbsolute={true}
                    height={`24px`}
                    top={`0`}
                    right={`10px`}
                    cursor={`pointer`}
                    onClick={searchDataHandler}
                  >
                    <AiOutlineSearch color={Theme.white_C} />
                  </Wrapper>
                </Wrapper>

                <Wrapper
                  width={width < 700 ? `26px` : `34px`}
                  height={width < 700 ? `26px` : `34px`}
                  radius={`100%`}
                  bgColor={`rgb(143, 143, 143)`}
                  color={Theme.white_C}
                  isAbsolute={true}
                  bottom={width < 700 ? `-30px` : `-53px`}
                  left={`50%`}
                  margin={width < 700 ? `0 0 0 -13px` : `0 0 0 -17px`}
                  shadow={`0px 3px 6px rgb(214, 214, 214)`}
                  onClick={() => searchToggle()}
                  cursor={`pointer`}
                >
                  <AiOutlineClose
                    color={Theme.white_C}
                    size={width < 700 ? 15 : 20}
                  />
                </Wrapper>
              </>
            ) : (
              <>
                <Wrapper width={width < 900 ? `35px` : `215px`}></Wrapper>
                <Wrapper
                  width={
                    width < 900 ? `calc(100% - 80px)` : `calc(100% - 430px)`
                  }
                  dr={`row`}
                  ju={width < 900 ? `center` : `space-between`}
                >
                  {/* <ProductTypeSlider /> */}
                  <Wrapper
                    display={width < 900 ? `none` : `flex`}
                    width={`auto`}
                    cursor={`pointer`}
                    onClick={() => moveLinkHandler("/p_network")}
                  >
                    <IoIosArrowBack fontSize={22} />
                  </Wrapper>
                  <Wrapper
                    display={width < 900 ? `flex` : `none`}
                    isAbsolute={true}
                    top={`6px`}
                    left={`15px`}
                    width={`auto`}
                    cursor={`pointer`}
                    onClick={() => moveLinkHandler("/p_network")}
                  >
                    <IoIosArrowBack fontSize={22} />
                  </Wrapper>
                  <Wrapper
                    width={`auto`}
                    cursor={`pointer`}
                    onClick={() => changeSubTypeHandler(`Input/Output`)}
                    margin={width < 900 ? `0 0 0 5px` : `0 0 0 110px`}
                  >
                    <Image
                      alt="icon"
                      width={`26px`}
                      height={`14px`}
                      objectFit={`contain`}
                      isFilter={
                        productSubType.value === `Input/Output` ? false : true
                      }
                      src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2Fdrive-03.svg?alt=media&token=8d680327-ac7d-4291-bd43-dbd43c14327f`}
                    />
                    <Text
                      fontSize={`9px`}
                      color={
                        productSubType.value === `Input/Output`
                          ? Theme.white_C
                          : `rgb(199, 199, 199)`
                      }
                      fontWeight={
                        productSubType.value === `Input/Output` ? `700` : `300`
                      }
                    >
                      Input/Output
                    </Text>
                  </Wrapper>

                  <Wrapper
                    width={`auto`}
                    margin={width < 900 ? `0 10px` : `0 80px`}
                    cursor={`pointer`}
                    onClick={() => changeSubTypeHandler(`Drive/Memory`)}
                  >
                    <Image
                      alt="icon"
                      width={`26px`}
                      height={`14px`}
                      objectFit={`contain`}
                      isFilter={
                        productSubType.value === `Drive/Memory` ? false : true
                      }
                      src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2Fdrive-04.svg?alt=media&token=0c4ce1d6-1a46-4c84-b3cf-82d2af34c2e1`}
                    />
                    <Text
                      fontSize={`9px`}
                      color={
                        productSubType.value === `Drive/Memory`
                          ? Theme.white_C
                          : `rgb(199, 199, 199)`
                      }
                      fontWeight={
                        productSubType.value === `Drive/Memory` ? `700` : `300`
                      }
                    >
                      Drive/Memory
                    </Text>
                  </Wrapper>

                  <Wrapper
                    width={`auto`}
                    cursor={`pointer`}
                    margin={width < 900 ? ` 0 5px 0 0` : `0 80px 0 0`}
                    onClick={() => changeSubTypeHandler(`Display`)}
                  >
                    <Image
                      alt="icon"
                      width={`26px`}
                      height={`14px`}
                      objectFit={`contain`}
                      isFilter={
                        productSubType.value === `Display` ? false : true
                      }
                      src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2FDisplay.svg?alt=media&token=39da3800-9dbc-48b3-996d-2ad8de46f159`}
                    />
                    <Text
                      fontSize={`9px`}
                      color={
                        productSubType.value === `Display`
                          ? Theme.white_C
                          : `rgb(199, 199, 199)`
                      }
                      fontWeight={
                        productSubType.value === `Display` ? `700` : `300`
                      }
                    >
                      Display
                    </Text>
                  </Wrapper>

                  <Wrapper
                    width={`auto`}
                    cursor={`pointer`}
                    onClick={() => changeSubTypeHandler(`Network`)}
                    margin={width < 900 ? ` 0 10px 0 0` : `0 110px 0 0`}
                  >
                    <Image2
                      alt="icon"
                      width={`26px`}
                      height={`14px`}
                      objectFit={`contain`}
                      isFilter={
                        productSubType.value === `Network` ? false : true
                      }
                      src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2Fdrive-05.svg?alt=media&token=4b8e496b-ef62-427f-b780-30fe2a849a70`}
                    />
                    <Text
                      fontSize={`9px`}
                      fontWeight={
                        productSubType.value === `Network` ? `700` : `300`
                      }
                      color={
                        productSubType.value === `Network`
                          ? Theme.white_C
                          : `rgb(199, 199, 199)`
                      }
                    >
                      Network
                    </Text>
                  </Wrapper>

                  <Wrapper
                    display={width < 900 ? `none` : `flex`}
                    width={`auto`}
                    cursor={`pointer`}
                    onClick={() => moveLinkHandler("/computer")}
                  >
                    <IoIosArrowForward fontSize={22} />
                  </Wrapper>
                  <Wrapper
                    display={width < 900 ? `flex` : `none`}
                    isAbsolute={true}
                    top={`6px`}
                    right={`42px`}
                    width={`auto`}
                    cursor={`pointer`}
                    onClick={() => moveLinkHandler("/computer")}
                  >
                    <IoIosArrowForward fontSize={22} />
                  </Wrapper>
                </Wrapper>
                <Wrapper
                  width={width < 900 ? `35px` : `215px`}
                  al={width < 900 ? `flex-start` : `flex-end`}
                  transition={`0`}
                >
                  <Wrapper
                    width={`22px`}
                    height={`22px`}
                    radius={`100%`}
                    bgColor={`rgb(157, 157, 157)`}
                    onClick={() => searchToggle()}
                    cursor={`pointer`}
                  >
                    <AiOutlineSearch color={Theme.white_C} />
                  </Wrapper>
                </Wrapper>
              </>
            )}
          </Wrapper>
        </RsWrapper>
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
                    onClick={() => moveLinkHandler(`/port/${data._id}`)}
                  >
                    <Text
                      fontSize={width < 700 ? `10px` : `19px`}
                      fontWeight={`bold`}
                    >
                      {data.mainTitle}
                    </Text>
                    <Wrapper dr={`row`} ju={`space-between`} al={`flex-end`}>
                      <Text fontSize={`10px`}>{data.keyType}</Text>
                      <Wrapper width={`auto`} al={`flex-end`}>
                        {tData && (
                          <Text
                            fontSize={`15px`}
                            color={`#C50000`}
                            lineHeight={`1`}
                            fontWeight={`bold`}
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

export default withResizeDetector(MM07Presenter);
