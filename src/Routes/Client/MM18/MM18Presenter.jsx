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

const MM18Presenter = ({
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
  useTitle(`네트워크 물리보안 | ${process.env["HOMEPAGE_NAME"]}`);

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
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon%2F%E1%84%85%E1%85%A1%E1%86%A8%E1%84%8F%E1%85%B5-06.svg?alt=media&token=cc91ed66-8aa0-470c-a79e-fd5c97651926`}
                width={`39px`}
                height={`39px`}
                objectFit={`contain`}
                margin={`0 0 2px`}
              />
            </Wrapper>
            <Text fontSize={`12px`} fontWeight={`700`} color={`rgb(209, 0, 0)`}>
              네트워크 물리보안
            </Text>
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
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon%2Fproduct-icon-07.png?alt=media&token=adae713b-c659-4475-beac-a7c1cd85abab`}
                width={`37px`}
                height={`37px`}
                objectFit={`contain`}
                margin={`0 0 5px`}
              />
            </Wrapper>
            <Text fontSize={`12px`}>락키 PRO</Text>
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
                    src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon%2Fproduct-icon-07.png?alt=media&token=adae713b-c659-4475-beac-a7c1cd85abab`}
                    width={`37px`}
                    height={`37px`}
                    objectFit={`contain`}
                    margin={`0 0 5px`}
                  />
                </Wrapper>
                <Text fontSize={`10px`}>락키 PRO</Text>
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
                    src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon%2F%E1%84%85%E1%85%A1%E1%86%A8%E1%84%8F%E1%85%B5-06.svg?alt=media&token=cc91ed66-8aa0-470c-a79e-fd5c97651926`}
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
                  네트워크 물리보안
                </Text>
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
                  ju={`space-between`}
                >
                  {/* <ProductTypeSlider /> */}
                  <Wrapper
                    display={width < 700 ? `none` : `flex`}
                    width={`auto`}
                    cursor={`pointer`}
                    onClick={() => moveLinkHandler("usb")}
                  >
                    <IoIosArrowBack fontSize={22} />
                  </Wrapper>
                  <Wrapper
                    display={width < 700 ? `flex` : `none`}
                    isAbsolute={true}
                    top={`6px`}
                    left={`15px`}
                    width={`auto`}
                    cursor={`pointer`}
                    onClick={() => moveLinkHandler("usb")}
                  >
                    <IoIosArrowBack fontSize={22} />
                  </Wrapper>
                  <Wrapper
                    width={`auto`}
                    cursor={`pointer`}
                    onClick={() => changeSubTypeHandler(`RJ45`)}
                    margin={width < 700 ? `0 0 0 40px` : `0 0 0 110px`}
                  >
                    <Image
                      alt="icon"
                      width={`26px`}
                      height={`14px`}
                      objectFit={`contain`}
                      isFilter={productSubType.value === `RJ45` ? false : true}
                      src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2FRJ45(RJ-45%2C%20Ethernet%20RJ-45).svg?alt=media&token=7d8d6406-3dca-4e17-97bd-d1264b28530d`}
                    />
                    <Text
                      fontSize={`9px`}
                      color={
                        productSubType.value === `RJ45`
                          ? Theme.white_C
                          : `rgb(199, 199, 199)`
                      }
                      fontWeight={
                        productSubType.value === `RJ45` ? `700` : `300`
                      }
                    >
                      RJ45
                    </Text>
                  </Wrapper>

                  <Wrapper
                    width={`auto`}
                    margin={width < 800 ? ` 0 30px` : `0 130px`}
                    cursor={`pointer`}
                    onClick={() => changeSubTypeHandler(`LAN Cable`)}
                  >
                    <Image
                      alt="icon"
                      width={`26px`}
                      height={`14px`}
                      objectFit={`contain`}
                      isFilter={
                        productSubType.value === `LAN Cable` ? false : true
                      }
                      src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2FLAN%20Cable(Ethernet%20RJ-45%20Connector).svg?alt=media&token=009d72bc-d4e1-481a-a834-cc99d977072f`}
                    />
                    <Text
                      fontSize={`9px`}
                      color={
                        productSubType.value === `LAN Cable`
                          ? Theme.white_C
                          : `rgb(199, 199, 199)`
                      }
                      fontWeight={
                        productSubType.value === `LAN Cable` ? `700` : `300`
                      }
                    >
                      LAN Cable
                    </Text>
                  </Wrapper>

                  <Wrapper
                    width={`auto`}
                    cursor={`pointer`}
                    onClick={() => changeSubTypeHandler(`SFP/QSFP`)}
                    margin={width < 700 ? `0 40px 0 0px` : `0 110px 0 0`}
                  >
                    <Image
                      alt="icon"
                      width={`26px`}
                      height={`14px`}
                      objectFit={`contain`}
                      isFilter={
                        productSubType.value === `SFP/QSFP` ? false : true
                      }
                      src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2FSFP%20Port%20(Mini%20GBIC).svg?alt=media&token=b2ef4865-ef70-4b08-9dcb-5a4da57d6b73`}
                    />
                    <Text
                      fontSize={`9px`}
                      color={
                        productSubType.value === `SFP/QSFP`
                          ? Theme.white_C
                          : `rgb(199, 199, 199)`
                      }
                      fontWeight={
                        productSubType.value === `SFP/QSFP` ? `700` : `300`
                      }
                    >
                      SFP/QSFP
                    </Text>
                  </Wrapper>
                  <Wrapper
                    display={width < 700 ? `none` : `flex`}
                    width={`auto`}
                    cursor={`pointer`}
                    onClick={() => moveLinkHandler("port")}
                  >
                    <IoIosArrowForward fontSize={22} />
                  </Wrapper>
                  <Wrapper
                    display={width < 700 ? `flex` : `none`}
                    isAbsolute={true}
                    top={`6px`}
                    right={`42px`}
                    width={`auto`}
                    cursor={`pointer`}
                    onClick={() => moveLinkHandler("port")}
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
                    onClick={() => moveLinkHandler(`/p_network/${data._id}`)}
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

export default withResizeDetector(MM18Presenter);
