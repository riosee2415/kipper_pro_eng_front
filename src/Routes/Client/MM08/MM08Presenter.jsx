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
  border-left: 1px solid rgb(216, 216, 216);
  border-bottom: 1px solid rgb(216, 216, 216);
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px 15px;
  background-attachment: initial;
  cursor: pointer;

  &:nth-child(-n + 4) {
    border-top: 1px solid rgb(216, 216, 216);
  }

  &:nth-child(4n) {
    border-right: 1px solid rgb(216, 216, 216);
  }
  &:last-child {
    border-right: 1px solid rgb(216, 216, 216);
  }

  @media (max-width: 900px) {
    width: calc(100% / 2);
    height: 145px;
    background-size: 140px;
    padding: 5px;

    &:nth-child(-n + 4) {
      border-top: none;
    }

    &:nth-child(4n) {
      border-right: none;
    }

    &:nth-child(-n + 2) {
      border-top: 1px solid rgb(216, 216, 216);
    }

    &:nth-child(2n) {
      border-right: 1px solid rgb(216, 216, 216);
    }
  }
`;

const MM08Presenter = ({
  width,
  search,
  arrow,
  productSubType,
  inputSearchValue,
  //
  pDatum,
  //
  searchToggle,
  arrowToggle,
  moveLinkHandler,
  changeSubTypeHandler,
  searchDataHandler,
}) => {
  useTitle(`락키 PRO | ${process.env["HOMEPAGE_NAME"]}`);

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
            <Text fontSize={`12px`}>USB 물리보안</Text>
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
            <Text fontSize={`12px`}>네트워크 물리보안</Text>
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
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon%2Fproduct-icon-05.png?alt=media&token=adae713b-c659-4475-beac-a7c1cd85abab`}
                width={`37px`}
                height={`37px`}
                objectFit={`contain`}
                margin={`0 0 5px`}
              />
            </Wrapper>
            <Text fontSize={`12px`}>기타포트 물리보안</Text>
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
            <Text fontSize={`12px`}>컴퓨터 물리보안</Text>
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
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon%2F%E1%84%85%E1%85%A1%E1%86%A8%E1%84%8F%E1%85%B5-07.svg?alt=media&token=d15e62ca-8c1d-4f50-b494-d1e20466cf78`}
                width={`37px`}
                height={`37px`}
                objectFit={`contain`}
                margin={`0 0 5px`}
              />
            </Wrapper>
            <Text fontSize={`12px`} fontWeight={`700`} color={`rgb(209, 0, 0)`}>
              락키 PRO
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
                <Text fontSize={`10px`}>컴퓨터 물리보안</Text>
              </Wrapper>
              <Wrapper
                width={`calc((100% - 36px - 36px) / 2)`}
                cursor={`pointer`}
                onClick={() => moveLinkHandler(`/lock`)}
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
                  락키 PRO
                </Text>
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
                <Text fontSize={`10px`}>USB 물리보안</Text>
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
                <Text fontSize={`10px`}>네트워크 물리보안</Text>
              </Wrapper>
              <Wrapper
                width={`calc((100% - 36px - 36px) / 3)`}
                cursor={`pointer`}
                onClick={() => moveLinkHandler(`/port`)}
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
                <Text fontSize={`10px`}>기타포트 물리보안</Text>
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
                    onKeyDown={(e) => e.keyCode === 13 && searchDataHandler()}
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
                    width < 900 ? `calc(100% - 70px)` : `calc(100% - 430px)`
                  }
                  dr={`row`}
                  ju={width < 900 ? `center` : `space-between`}
                >
                  {/* <ProductTypeSlider /> */}
                  <Wrapper
                    display={width < 900 ? `none` : `flex`}
                    width={`auto`}
                    cursor={`pointer`}
                    onClick={() => moveLinkHandler("computer")}
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
                    onClick={() => moveLinkHandler("computer")}
                  >
                    <IoIosArrowBack fontSize={22} />
                  </Wrapper>
                  <Wrapper
                    width={`auto`}
                    cursor={`pointer`}
                    margin={width < 900 ? ` 0 30px 0 0` : `0 130px 0 0`}
                    onClick={() => changeSubTypeHandler(`Universal Lock Key`)}
                  >
                    <Image
                      alt="icon"
                      width={`26px`}
                      height={`14px`}
                      objectFit={`contain`}
                      isFilter={
                        productSubType.value === `Universal Lock Key`
                          ? false
                          : true
                      }
                      src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon%2FUniversal%20Lock%20Key.svg?alt=media&token=6da7efe7-c92c-41cb-9502-3b3d9b303be0`}
                    />
                    <Text
                      fontSize={`9px`}
                      color={
                        productSubType.value === `Universal Lock Key`
                          ? Theme.white_C
                          : `rgb(199, 199, 199)`
                      }
                      fontWeight={
                        productSubType.value === `Universal Lock Key`
                          ? `700`
                          : `300`
                      }
                    >
                      Universal Lock Key
                    </Text>
                  </Wrapper>

                  <Wrapper
                    width={`auto`}
                    cursor={`pointer`}
                    onClick={() => changeSubTypeHandler(`Lock Key Mini`)}
                  >
                    <Image
                      alt="icon"
                      width={`26px`}
                      height={`14px`}
                      objectFit={`contain`}
                      isFilter={
                        productSubType.value === `Lock Key Mini` ? false : true
                      }
                      src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon%2FLock%20Key%20Mini.svg?alt=media&token=7b9af02b-c9ee-431a-b1a7-a3a23a177e06`}
                    />
                    <Text
                      fontSize={`9px`}
                      color={
                        productSubType.value === `Lock Key Mini`
                          ? Theme.white_C
                          : `rgb(199, 199, 199)`
                      }
                      fontWeight={
                        productSubType.value === `Lock Key Mini` ? `700` : `300`
                      }
                    >
                      Lock Key Mini
                    </Text>
                  </Wrapper>
                  <Wrapper
                    display={width < 900 ? `none` : `flex`}
                    width={`auto`}
                    cursor={`pointer`}
                    onClick={() => moveLinkHandler("usb")}
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
                    onClick={() => moveLinkHandler("usb")}
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
              <EmptyList>조회된 제품이 없습니다.</EmptyList>
            ) : (
              pDatum.map((data) => {
                return (
                  <BoxImage
                    key={data._id}
                    bgImg={`url("${data.thumbnailPath}")`}
                    onClick={() => moveLinkHandler(`/lock/${data._id}`)}
                  >
                    <Text
                      fontSize={width < 700 ? `10px` : `19px`}
                      fontWeight={`bold`}
                    >
                      {data.mainTitle}
                    </Text>
                    <Text fontSize={`10px`}>{data.keyType}</Text>
                  </BoxImage>
                );
              })
            )
          ) : (
            <EmptyList dr={`column`}>
              <Wrapper margin={`0 0 20px`}>
                <CircularIndeterminate />
              </Wrapper>
              데이터를 조회하고 있습니다.
            </EmptyList>
          )}
        </Wrapper>
      </RsWrapper>
    </WholeWrapper>
  );
};

export default withResizeDetector(MM08Presenter);
