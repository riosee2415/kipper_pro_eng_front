import React, { useEffect } from "react";
import withSplitting from "../../../Lib/withSplitting";
import {
  WholeWrapper,
  RsWrapper,
  Wrapper,
  Image,
  Text,
  SpanText,
  CommonButton,
  TextInput,
  ATag,
  Image2,
} from "../../../Components/CommonComponents";
import styled from "styled-components";
import { withResizeDetector } from "react-resize-detector";
import useTitle from "@4leaf.ysh/use-title";
import Theme from "../../../Styles/Theme";
import { BiArrowToBottom } from "react-icons/bi";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import EditorViewer from "../../../Components/editor/EditorViewer";
import ProductImageSlider from "../../../Components/slider/ProductImageSlider";
import Magnifier from "react-magnifier";

const BuyButton = styled.button`
  width: 100%;
  height: 60px;
  background: rgb(184, 0, 9);
  color: ${Theme.white_C};
  font-size: 18px;
  font-weight: 800;
  border: 3px solid transparent;
  transition: 0.5s;
  margin: 23px 0 0;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &:hover {
    background: rgb(255, 255, 255);
    color: rgb(184, 0, 9);
    border: 3px solid rgb(184, 0, 9);
  }
`;

const Gotham = styled(Wrapper)`
  /* font-family: "Gotham", sans-serif; */
  font-weight: 800;
  width: auto;
  letter-spacing: ${(props) => props.letterSpacing};
`;

const ColorList = styled(Wrapper)`
  width: 24px;
  height: 24px;
  border-radius: 24px;
  margin-right: 10px;
  border: ${(props) => props.isActive && `3px solid ${props.theme.white_C}`};
  box-shadow: ${(props) => props.isActive && `0 1px 5px rgba(0, 0, 0, 0.2)`};
`;

const TitleBox = styled(Wrapper)`
  width: auto;
  padding: 15px 20px;
  border-radius: 30px;
  background-color: ${(props) => props.theme.greyTheme3_C};
  color: ${(props) => props.theme.darkGrey_C};
`;

const BoxIcon = styled(Wrapper)`
  width: auto;
  margin: 0 50px 20px;
  justify-content: flex-start;
`;

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

const MM09Presenter = ({
  location,
  //
  width,
  //
  tokenId,
  currentMenu,
  //
  search,
  arrow,
  inputSearchValue,
  colorList,
  currentColor,
  setCurrentColor,
  currentColorImages,
  currentColorImage,
  setCurrentColorImage,
  //
  tData,
  pData,
  //
  searchToggle,
  arrowToggle,
  moveLinkHandler,
  searchDataHandler,
  fileDownloadHandler,
}) => {
  const setTitle = useTitle(`${process.env["HOMEPAGE_NAME"]}`);

  useEffect(() => {
    if (pData) {
      setTitle(
        `${pData.mainTitle.replace(/\n/g, ` `)} | ${
          process.env["HOMEPAGE_NAME"]
        }`
      );
    }
  }, [pData]);

  return (
    <WholeWrapper overflowX={`initial`} overflowY={`initial`}>
      <Wrapper
        dr={`row`}
        bgColor={`rgb(241, 241, 241)`}
        margin={`43px 0 0`}
        padding={`15px 0`}
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
                src={
                  location.pathname.includes("/usb")
                    ? `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon%2F%E1%84%85%E1%85%A1%E1%86%A8%E1%84%8F%E1%85%B5-03.svg?alt=media&token=1712d757-4fd7-4041-97cb-07c59340ed0e`
                    : `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon%2Fproduct-icon-03.png?alt=media&token=adae713b-c659-4475-beac-a7c1cd85abab`
                }
                width={`37px`}
                height={`37px`}
                objectFit={`contain`}
                margin={`0 0 5px`}
              />
            </Wrapper>
            <Text
              fontSize={`12px`}
              fontWeight={location.pathname.includes("/usb") && `700`}
              color={location.pathname.includes("/usb") && `rgb(209, 0, 0)`}
            >
              USB Security
            </Text>
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
                src={
                  location.pathname.includes("/p_network")
                    ? `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon%2F%E1%84%85%E1%85%A1%E1%86%A8%E1%84%8F%E1%85%B5-06.svg?alt=media&token=cc91ed66-8aa0-470c-a79e-fd5c97651926`
                    : `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon%2Fproduct-icon-04.png?alt=media&token=adae713b-c659-4475-beac-a7c1cd85abab`
                }
                width={`37px`}
                height={`37px`}
                objectFit={`contain`}
                margin={`0 0 5px`}
              />
            </Wrapper>
            <Text
              fontSize={`12px`}
              fontWeight={location.pathname.includes("/p_network") && `700`}
              color={
                location.pathname.includes("/p_network") && `rgb(209, 0, 0)`
              }
            >
              Network Security
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
                src={
                  location.pathname.includes("/port")
                    ? `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon%2F%E1%84%85%E1%85%A1%E1%86%A8%E1%84%8F%E1%85%B5-04.svg?alt=media&token=9f031275-3abf-4d2a-ae2b-f5d7688b860f`
                    : `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon%2Fproduct-icon-05.png?alt=media&token=adae713b-c659-4475-beac-a7c1cd85abab`
                }
                objectFit={`contain`}
                width={`37px`}
                height={`37px`}
                margin={`0 0 5px`}
              />
            </Wrapper>
            <Text
              fontSize={`12px`}
              fontWeight={location.pathname.includes("/port") && `700`}
              color={location.pathname.includes("/port") && `rgb(209, 0, 0)`}
            >
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
                src={
                  location.pathname.includes("/computer")
                    ? `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon%2F%E1%84%85%E1%85%A1%E1%86%A8%E1%84%8F%E1%85%B5-05.svg?alt=media&token=2ee09f47-3c0a-4922-8bc3-50873a5028a8`
                    : `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon%2Fproduct-icon-06.png?alt=media&token=adae713b-c659-4475-beac-a7c1cd85abab`
                }
                width={`37px`}
                height={`37px`}
                objectFit={`contain`}
                margin={`0 0 5px`}
              />
            </Wrapper>
            <Text
              fontSize={`12px`}
              fontWeight={location.pathname.includes("/computer") && `700`}
              color={
                location.pathname.includes("/computer") && `rgb(209, 0, 0)`
              }
            >
              Anti-Theft for Computer
            </Text>
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
                src={
                  location.pathname.includes("/lock")
                    ? `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon%2F%E1%84%85%E1%85%A1%E1%86%A8%E1%84%8F%E1%85%B5-07.svg?alt=media&token=d15e62ca-8c1d-4f50-b494-d1e20466cf78`
                    : `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon%2Fproduct-icon-07.png?alt=media&token=adae713b-c659-4475-beac-a7c1cd85abab`
                }
                width={`37px`}
                height={`37px`}
                objectFit={`contain`}
                margin={`0 0 5px`}
              />
            </Wrapper>
            <Text
              fontSize={`12px`}
              fontWeight={location.pathname.includes("/lock") && `700`}
              color={location.pathname.includes("/lock") && `rgb(209, 0, 0)`}
            >
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
                width={`calc((100% - 36px - 36px) / 2)`}
                cursor={`pointer`}
                onClick={() => moveLinkHandler(`/computer`)}
              >
                <Wrapper width={`80px`}>
                  <Image
                    alt="icon"
                    src={
                      location.pathname.includes("/computer")
                        ? `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon%2F%E1%84%85%E1%85%A1%E1%86%A8%E1%84%8F%E1%85%B5-05.svg?alt=media&token=2ee09f47-3c0a-4922-8bc3-50873a5028a8`
                        : `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon%2Fproduct-icon-06.png?alt=media&token=adae713b-c659-4475-beac-a7c1cd85abab`
                    }
                    width={`37px`}
                    height={`37px`}
                    objectFit={`contain`}
                    margin={`0 0 5px`}
                  />
                </Wrapper>
                <Text
                  fontSize={`10px`}
                  fontWeight={location.pathname.includes("/computer") && `700`}
                  color={
                    location.pathname.includes("/computer") && `rgb(209, 0, 0)`
                  }
                >
                  Anti-Theft for Computer
                </Text>
              </Wrapper>
              <Wrapper
                width={`calc((100% - 36px - 36px) / 2)`}
                cursor={`pointer`}
                onClick={() => moveLinkHandler(`/lock`)}
              >
                <Wrapper width={`80px`}>
                  <Image
                    alt="icon"
                    src={
                      location.pathname.includes("/lock")
                        ? `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon%2F%E1%84%85%E1%85%A1%E1%86%A8%E1%84%8F%E1%85%B5-07.svg?alt=media&token=d15e62ca-8c1d-4f50-b494-d1e20466cf78`
                        : `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon%2Fproduct-icon-07.png?alt=media&token=adae713b-c659-4475-beac-a7c1cd85abab`
                    }
                    width={`37px`}
                    height={`37px`}
                    objectFit={`contain`}
                    margin={`0 0 5px`}
                  />
                </Wrapper>
                <Text
                  fontSize={`10px`}
                  fontWeight={location.pathname.includes("/lock") && `700`}
                  color={
                    location.pathname.includes("/lock") && `rgb(209, 0, 0)`
                  }
                >
                  Lock Key PRO
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
                    src={
                      location.pathname.includes("/usb")
                        ? `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon%2F%E1%84%85%E1%85%A1%E1%86%A8%E1%84%8F%E1%85%B5-03.svg?alt=media&token=1712d757-4fd7-4041-97cb-07c59340ed0e`
                        : `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon%2Fproduct-icon-03.png?alt=media&token=adae713b-c659-4475-beac-a7c1cd85abab`
                    }
                    width={`37px`}
                    height={`37px`}
                    objectFit={`contain`}
                    margin={`0 0 5px`}
                  />
                </Wrapper>
                <Text
                  fontSize={`10px`}
                  fontWeight={location.pathname.includes("/usb") && `700`}
                  color={location.pathname.includes("/usb") && `rgb(209, 0, 0)`}
                >
                  USB Security
                </Text>
              </Wrapper>
              <Wrapper
                width={`calc((100% - 36px - 36px) / 3)`}
                cursor={`pointer`}
                onClick={() => moveLinkHandler(`/p_network`)}
              >
                <Wrapper width={`80px`}>
                  <Image
                    alt="icon"
                    src={
                      location.pathname.includes("/p_network")
                        ? `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon%2F%E1%84%85%E1%85%A1%E1%86%A8%E1%84%8F%E1%85%B5-06.svg?alt=media&token=cc91ed66-8aa0-470c-a79e-fd5c97651926`
                        : `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon%2Fproduct-icon-04.png?alt=media&token=adae713b-c659-4475-beac-a7c1cd85abab`
                    }
                    width={`37px`}
                    height={`37px`}
                    objectFit={`contain`}
                    margin={`0 0 5px`}
                  />
                </Wrapper>
                <Text
                  fontSize={`10px`}
                  fontWeight={location.pathname.includes("/p_network") && `700`}
                  color={
                    location.pathname.includes("/p_network") && `rgb(209, 0, 0)`
                  }
                >
                  Network Security
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
                    src={
                      location.pathname.includes("/port")
                        ? `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon%2F%E1%84%85%E1%85%A1%E1%86%A8%E1%84%8F%E1%85%B5-04.svg?alt=media&token=9f031275-3abf-4d2a-ae2b-f5d7688b860f`
                        : `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon%2Fproduct-icon-05.png?alt=media&token=adae713b-c659-4475-beac-a7c1cd85abab`
                    }
                    width={`37px`}
                    height={`37px`}
                    objectFit={`contain`}
                    margin={`0 0 5px`}
                  />
                </Wrapper>
                <Text
                  fontSize={`10px`}
                  fontWeight={location.pathname.includes("/port") && `700`}
                  color={
                    location.pathname.includes("/port") && `rgb(209, 0, 0)`
                  }
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

      {/* 제품상세 */}
      <Wrapper
        bgColor={`rgb(143, 143, 143)`}
        color={Theme.white_C}
        height={`35px`}
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

                {currentMenu === `usb` && (
                  <Wrapper
                    width={
                      width < 900 ? `calc(100% - 70px)` : `calc(100% - 430px)`
                    }
                    dr={`row`}
                    ju={`space-between`}
                  >
                    {/* <ProductTypeSlider /> */}

                    <Wrapper
                      display={width < 900 ? `none` : `flex`}
                      width={`auto`}
                      cursor={`pointer`}
                      onClick={() => moveLinkHandler("/lock")}
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
                      onClick={() => moveLinkHandler("/lock")}
                    >
                      <IoIosArrowBack fontSize={22} />
                    </Wrapper>
                    <Wrapper
                      width={`auto`}
                      cursor={`pointer`}
                      onClick={() =>
                        moveLinkHandler(`/${currentMenu}?type=USB Type-A`)
                      }
                      margin={width < 900 ? `0 0 0 40px` : `0 0 0 110px`}
                    >
                      <Image
                        alt="icon"
                        width={`26px`}
                        height={`14px`}
                        // filter={
                        //   location.pathname ===
                        //   `/${currentMenu}?type=USB Type-A`
                        //     ? `brightness(100%) opacity(1)`
                        //     : `brightness(80%) opacity(0.7)`
                        // }
                        objectFit={`contain`}
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%20398.png?alt=media&token=145c178d-a351-496e-9f34-2d00f16679bb`}
                      />
                      <Text
                        fontSize={`9px`}
                        fontWeight={`300`}
                        // color={`rgb(233, 233, 233)`}
                      >
                        USB Type-A
                      </Text>
                    </Wrapper>

                    <Wrapper
                      width={`auto`}
                      margin={width < 900 ? ` 0 30px` : `0 130px`}
                      cursor={`pointer`}
                      onClick={() =>
                        moveLinkHandler(`/${currentMenu}?type=USB Type-B`)
                      }
                    >
                      <Image
                        alt="icon"
                        width={`26px`}
                        height={`14px`}
                        objectFit={`contain`}
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%20396.png?alt=media&token=73465992-9401-4cd4-b7d3-20faf3c1efb9`}
                      />
                      <Text fontSize={`9px`} fontWeight={`300`}>
                        USB Type-B
                      </Text>
                    </Wrapper>

                    <Wrapper
                      width={`auto`}
                      cursor={`pointer`}
                      onClick={() =>
                        moveLinkHandler(`/${currentMenu}?type=USB Type-C`)
                      }
                      margin={width < 900 ? `0 40px 0 0px` : `0 110px 0 0`}
                    >
                      <Image
                        alt="icon"
                        width={`26px`}
                        height={`14px`}
                        objectFit={`contain`}
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%20397.png?alt=media&token=5cea9417-934b-4356-91ab-0dce355462ab`}
                      />
                      <Text fontSize={`9px`} fontWeight={`300`}>
                        USB Type-C
                      </Text>
                    </Wrapper>

                    <Wrapper
                      display={width < 900 ? `none` : `flex`}
                      width={`auto`}
                      cursor={`pointer`}
                      onClick={() => moveLinkHandler("/p_network")}
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
                      onClick={() => moveLinkHandler("/p_network")}
                    >
                      <IoIosArrowForward fontSize={22} />
                    </Wrapper>
                  </Wrapper>
                )}

                {currentMenu === `computer` && (
                  <Wrapper
                    width={
                      width < 900 ? `calc(100% - 70px)` : `calc(100% - 430px)`
                    }
                    dr={`row`}
                    ju={`space-between`}
                  >
                    {/* <ProductTypeSlider /> */}
                    <Wrapper
                      display={width < 900 ? `none` : `flex`}
                      width={`auto`}
                      cursor={`pointer`}
                      onClick={() => moveLinkHandler("/port")}
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
                      onClick={() => moveLinkHandler("/port")}
                    >
                      <IoIosArrowBack fontSize={22} />
                    </Wrapper>
                    <Wrapper
                      width={`auto`}
                      cursor={`pointer`}
                      onClick={() =>
                        moveLinkHandler(`/${currentMenu}?type=Desktop`)
                      }
                      margin={width < 900 ? `0 0 0 40px` : `0 0 0 110px`}
                    >
                      <Image
                        alt="icon"
                        width={`26px`}
                        height={`14px`}
                        objectFit={`contain`}
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2FDesktop.svg?alt=media&token=805987e8-470c-4835-9c89-3c2094c16978`}
                      />
                      <Text fontSize={`9px`} fontWeight={`300`}>
                        Desktop
                      </Text>
                    </Wrapper>

                    <Wrapper
                      width={`auto`}
                      margin={width < 800 ? ` 0 30px` : `0 130px`}
                      cursor={`pointer`}
                      onClick={() =>
                        moveLinkHandler(`/${currentMenu}?type=Laptop`)
                      }
                    >
                      <Image
                        alt="icon"
                        width={`26px`}
                        height={`14px`}
                        objectFit={`contain`}
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2FLaptop.svg?alt=media&token=3bfef6f3-aeb0-443d-97a7-49563fd26831`}
                      />
                      <Text fontSize={`9px`} fontWeight={`300`}>
                        Laptop
                      </Text>
                    </Wrapper>

                    {/* <Wrapper
                      width={`auto`}
                      cursor={`pointer`}
                      onClick={() =>
                        moveLinkHandler(`/${currentMenu}?type=Network`)
                      }
                      margin={width < 700 ? `0 20px 0 0px` : `0 110px 0 0`}
                    >
                      <Image
                        alt="icon"
                        width={`26px`}
                        height={`14px`}
                        objectFit={`contain`}
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%20397.png?alt=media&token=5cea9417-934b-4356-91ab-0dce355462ab`}
                      />
                      <Text fontSize={`9px`} fontWeight={`300`}>
                        Network
                      </Text>
                    </Wrapper> */}
                    <Wrapper
                      display={width < 900 ? `none` : `flex`}
                      width={`auto`}
                      cursor={`pointer`}
                      onClick={() => moveLinkHandler("/lock")}
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
                      onClick={() => moveLinkHandler("/lock")}
                    >
                      <IoIosArrowForward fontSize={22} />
                    </Wrapper>
                  </Wrapper>
                )}

                {currentMenu === `port` && (
                  <Wrapper
                    width={
                      width < 900 ? `calc(100% - 80px)` : `calc(100% - 430px)`
                    }
                    dr={`row`}
                    ju={width < 900 ? `flex-start` : `space-between`}
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
                      onClick={() =>
                        moveLinkHandler(`/${currentMenu}?type=Input/Output`)
                      }
                      margin={width < 900 ? `0 0 0 10px` : `0 0 0 110px`}
                    >
                      <Image
                        alt="icon"
                        width={`26px`}
                        height={`14px`}
                        objectFit={`contain`}
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2Fdrive-03.svg?alt=media&token=8d680327-ac7d-4291-bd43-dbd43c14327f`}
                      />
                      <Text fontSize={`9px`} fontWeight={`300`}>
                        Input/Output
                      </Text>
                    </Wrapper>

                    <Wrapper
                      width={`auto`}
                      margin={width < 900 ? `0 20px` : `0 80px`}
                      cursor={`pointer`}
                      onClick={() =>
                        moveLinkHandler(`/${currentMenu}?type=Drive/Memory`)
                      }
                    >
                      <Image
                        alt="icon"
                        width={`26px`}
                        height={`14px`}
                        objectFit={`contain`}
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2Fdrive-04.svg?alt=media&token=0c4ce1d6-1a46-4c84-b3cf-82d2af34c2e1`}
                      />
                      <Text fontSize={`9px`} fontWeight={`300`}>
                        Drive/Memory
                      </Text>
                    </Wrapper>

                    <Wrapper
                      width={`auto`}
                      cursor={`pointer`}
                      onClick={() =>
                        moveLinkHandler(`/${currentMenu}?type=Display`)
                      }
                      margin={width < 900 ? ` 0 20px 0 0` : `0 80px 0 0`}
                    >
                      <Image
                        alt="icon"
                        width={`26px`}
                        height={`14px`}
                        objectFit={`contain`}
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2FDisplay.svg?alt=media&token=39da3800-9dbc-48b3-996d-2ad8de46f159`}
                      />
                      <Text fontSize={`9px`} fontWeight={`300`}>
                        Display
                      </Text>
                    </Wrapper>

                    <Wrapper
                      width={`auto`}
                      cursor={`pointer`}
                      onClick={() =>
                        moveLinkHandler(`/${currentMenu}?type=Network`)
                      }
                      margin={width < 900 ? ` 0 10px 0 0` : `0 110px 0 0`}
                    >
                      <Image2
                        isFilter={false}
                        alt="icon"
                        width={`26px`}
                        height={`14px`}
                        objectFit={`contain`}
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2Fdrive-05.svg?alt=media&token=4b8e496b-ef62-427f-b780-30fe2a849a70`}
                      />
                      <Text fontSize={`9px`} fontWeight={`300`}>
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
                )}

                {currentMenu === `lock` && (
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
                      onClick={() => moveLinkHandler("/computer")}
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
                      onClick={() => moveLinkHandler("/computer")}
                    >
                      <IoIosArrowBack fontSize={22} />
                    </Wrapper>
                    <Wrapper
                      width={`auto`}
                      cursor={`pointer`}
                      margin={width < 900 ? ` 0 30px 0 0` : `0 130px 0 0`}
                      onClick={() =>
                        moveLinkHandler(
                          `/${currentMenu}?type=Universal Lock Key`
                        )
                      }
                    >
                      <Image
                        alt="icon"
                        width={`26px`}
                        height={`14px`}
                        objectFit={`contain`}
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon%2FUniversal%20Lock%20Key.svg?alt=media&token=6da7efe7-c92c-41cb-9502-3b3d9b303be0`}
                      />
                      <Text fontSize={`9px`} fontWeight={`300`}>
                        Universal Lock Key
                      </Text>
                    </Wrapper>

                    <Wrapper
                      width={`auto`}
                      cursor={`pointer`}
                      onClick={() =>
                        moveLinkHandler(`/${currentMenu}?type=Lock Key Mini`)
                      }
                    >
                      <Image
                        alt="icon"
                        width={`26px`}
                        height={`14px`}
                        objectFit={`contain`}
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon%2FLock%20Key%20Mini.svg?alt=media&token=7b9af02b-c9ee-431a-b1a7-a3a23a177e06`}
                      />
                      <Text fontSize={`9px`} fontWeight={`300`}>
                        Lock Key Mini
                      </Text>
                    </Wrapper>
                    <Wrapper
                      display={width < 900 ? `none` : `flex`}
                      width={`auto`}
                      cursor={`pointer`}
                      onClick={() => moveLinkHandler("/lock")}
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
                      onClick={() => moveLinkHandler("/lock")}
                    >
                      <IoIosArrowForward fontSize={22} />
                    </Wrapper>
                  </Wrapper>
                )}

                {currentMenu === `p_network` && (
                  <Wrapper
                    width={
                      width < 900 ? `calc(100% - 70px)` : `calc(100% - 430px)`
                    }
                    dr={`row`}
                    ju={`space-between`}
                  >
                    {/* <ProductTypeSlider /> */}
                    <Wrapper
                      display={width < 900 ? `none` : `flex`}
                      width={`auto`}
                      cursor={`pointer`}
                      onClick={() => moveLinkHandler("/usb")}
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
                      onClick={() => moveLinkHandler("/usb")}
                    >
                      <IoIosArrowBack fontSize={22} />
                    </Wrapper>
                    <Wrapper
                      width={`auto`}
                      cursor={`pointer`}
                      onClick={() =>
                        moveLinkHandler(`/${currentMenu}?type=RJ45`)
                      }
                      margin={width < 900 ? `0 0 0 40px` : `0 0 0 110px`}
                    >
                      <Image
                        alt="icon"
                        width={`26px`}
                        height={`14px`}
                        objectFit={`contain`}
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2FRJ45(RJ-45%2C%20Ethernet%20RJ-45).svg?alt=media&token=7d8d6406-3dca-4e17-97bd-d1264b28530d`}
                      />
                      <Text fontSize={`9px`} fontWeight={`300`}>
                        RJ45
                      </Text>
                    </Wrapper>

                    <Wrapper
                      width={`auto`}
                      margin={width < 900 ? ` 0 30px` : `0 130px`}
                      cursor={`pointer`}
                      onClick={() =>
                        moveLinkHandler(`/${currentMenu}?type=LAN Cable`)
                      }
                    >
                      <Image
                        alt="icon"
                        width={`26px`}
                        height={`14px`}
                        objectFit={`contain`}
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2FLAN%20Cable(Ethernet%20RJ-45%20Connector).svg?alt=media&token=009d72bc-d4e1-481a-a834-cc99d977072f`}
                      />
                      <Text fontSize={`9px`} fontWeight={`300`}>
                        LAN Cable
                      </Text>
                    </Wrapper>

                    <Wrapper
                      width={`auto`}
                      cursor={`pointer`}
                      onClick={() =>
                        moveLinkHandler(`/${currentMenu}?type=SFP/QSFP`)
                      }
                      margin={width < 900 ? `0 40px 0 0px` : `0 110px 0 0`}
                    >
                      <Image
                        alt="icon"
                        width={`26px`}
                        height={`14px`}
                        objectFit={`contain`}
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ficon-w%2FSFP%20Port%20(Mini%20GBIC).svg?alt=media&token=b2ef4865-ef70-4b08-9dcb-5a4da57d6b73`}
                      />
                      <Text fontSize={`9px`} fontWeight={`300`}>
                        SFP/QSFP
                      </Text>
                    </Wrapper>
                    <Wrapper
                      display={width < 900 ? `none` : `flex`}
                      width={`auto`}
                      cursor={`pointer`}
                      onClick={() => moveLinkHandler("/port")}
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
                      onClick={() => moveLinkHandler("/port")}
                    >
                      <IoIosArrowForward fontSize={22} />
                    </Wrapper>
                  </Wrapper>
                )}

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

      <Wrapper bgColor={`rgb(0, 0, 0)`}>
        <RsWrapper
          dr={`row`}
          padding={
            width < 900
              ? width < 700
                ? `45px 36px 36px`
                : `100px 60px 60px`
              : `30px 0 20px`
          }
          color={Theme.white_C}
          al={`flex-start`}
        >
          {/* mobile */}
          <Wrapper display={width < 900 ? `flex` : `none`} ju={`flex-start`}>
            <Wrapper
              height={width < 700 ? `230px` : `468px`}
              overflow={`hidden`}
            >
              <Magnifier
                height={width < 700 ? `230px` : `468px`}
                alt="image"
                src={currentColorImage && currentColorImage.imagePath}
              />
            </Wrapper>

            {/* 세미 이미지 리스트 */}
            <Wrapper margin={`17px 0 0`}>
              <ProductImageSlider
                width={width}
                currentColorImage={currentColorImage}
                setCurrentColorImage={setCurrentColorImage}
                currentColorImages={currentColorImages}
              />
            </Wrapper>

            {/* <BuyButton color={Theme.white_C}>Contact Us</BuyButton> */}
          </Wrapper>

          <Wrapper
            width={width < 900 ? `100%` : `50%`}
            al={`flex-start`}
            padding={width < 700 ? `0` : `0 50px`}
          >
            <Text
              fontSize={`18px`}
              color={Theme.greyTheme3_C}
              margin={
                width < 900
                  ? width < 700
                    ? `25px 0 15px`
                    : `50px 0 30px`
                  : `0`
              }
              letterSpacing={`-0.05em`}
              lineHeight={`1.66`}
            >
              {/* 메인 타이틀 위 type */}
              {pData && pData.keyType}
            </Text>
            <Gotham
              fontSize={width < 900 ? (width < 700 ? `26px` : `50px`) : `50px`}
              lineHeight={`1`}
              // letterSpacing={`-0.025em`}
              lineHeight={`1.18`}
            >
              {/* 메인 타이틀 */}
              {pData &&
                pData.mainTitle.split(`\n`).map((data, idx) => {
                  return (
                    <SpanText key={idx}>
                      {data}
                      <br />
                    </SpanText>
                  );
                })}
            </Gotham>
            {/* <Text
              letterSpacing={`-0.04em`}
              fontSize={width < 900 ? (width < 700 ? `18px` : `22px`) : `25px`}
              color={Theme.greyTheme7_C}
              fontWeight={`500`}
              margin={
                width < 900 ? (width < 700 ? `10px 0 0` : `20px 0 0`) : `0`
              }
              lineHeight={`1.4`}
            >
              {/* 제품명 입력 필드 
              {pData && pData.productName}
            </Text> */}
            <Text
              letterSpacing={`-0.03em`}
              fontSize={width < 900 ? (width < 700 ? `14px` : `16px`) : `16px`}
              color={Theme.greyTheme7_C}
              fontWeight={`400`}
              lineHeight={`1.5`}
              margin={width < 700 ? `10px 0 0` : `1px 0 0`}
            >
              {/* 모델명 입력 필드 */}
              {pData && pData.modelName}
            </Text>
            {/* 글로벌 전용 필드 */}
            {/* <Text
              fontSize={width < 900 ? `18px` : `20px`}
              fontWeight={`300`}
              margin={`3px 0 0`}
              height={width < 900 ? (width < 700 ? `60px` : `80px`) : `50px`}
              padding={
                width < 900 ? (width < 700 ? `10px 0 0` : `15px 0 0`) : `0`
              }
            >
              ＄64.00
            </Text> */}
            <Wrapper
              al={`flex-start`}
              margin={tokenId ? `30px 0 0` : `35px 0 0`}
            >
              {tokenId && (
                <Wrapper
                  dr={`row`}
                  ju={width < 900 ? `flex-start` : `center`}
                  width={`auto`}
                  margin={`0 0 11px`}
                >
                  <Wrapper
                    width={`auto`}
                    al={`flex-start`}
                    margin={`0 30px 0 0`}
                    // display={width < 900 ? `none` : `flex`}
                  >
                    <Text
                      fontSize={width < 700 ? `18px` : `14px`}
                      fontWeight={`400`}
                      letterSpacing={`-0.02em`}
                    >
                      MMP
                    </Text>
                    {tData && (
                      <Text
                        fontSize={width < 700 ? `22px` : `22px`}
                        lineHeight={`1.2`}
                        fontWeight={`900`}
                        letterSpacing={`-0.02em`}
                      >
                        UNIT PRICE
                      </Text>
                    )}
                  </Wrapper>

                  <Wrapper width={`auto`} al={`flex-start`}>
                    <Text
                      fontSize={width < 900 ? `18px` : `14px`}
                      fontWeight={`400`}
                      letterSpacing={`-0.02em`}
                    >
                      $ {pData && pData.price} USD
                    </Text>
                    {tData && pData && (
                      <Text
                        fontSize={`22px`}
                        lineHeight={`1.2`}
                        fontWeight={`900`}
                        letterSpacing={`-0.02em`}
                      >
                        $&nbsp;
                        {tData.level === `LEVEL3`
                          ? pData.vipPrice1
                          : tData.level === `LEVEL4`
                          ? pData.vipPrice2
                          : ``}
                        &nbsp;USD
                      </Text>
                    )}
                  </Wrapper>
                </Wrapper>
              )}
              <Text
                letterSpacing={`-0.03em`}
                margin={width < 700 && `15px 0 0`}
                fontSize={
                  width < 900 ? (width < 700 ? `14px` : `20px`) : `16px`
                }
                lineHeight={`1.87`}
              >
                Color -{" "}
                {currentColor && currentColor.color === "없음"
                  ? "N/A"
                  : currentColor.color}
              </Text>
              <Wrapper dr={`row`} ju={`flex-start`} padding={`7px 0`}>
                {colorList.map((data) => {
                  return (
                    <ColorList
                      key={data._id}
                      isActive={currentColor && currentColor._id === data._id}
                      bgColor={data.colorCode}
                      onClick={() => setCurrentColor(data)}
                    ></ColorList>
                  );
                })}
              </Wrapper>
              <Text
                letterSpacing={`-0.03em`}
                fontSize={
                  width < 900 ? (width < 700 ? `14px` : `20px`) : `16px`
                }
                margin={
                  width < 900
                    ? width < 700
                      ? `19px 0 0`
                      : `30px 0 0`
                    : `17px 0 0`
                }
                lineHeight={`1.87`}
                fontWeight={`700`}
              >
                Dimensions
              </Text>
              <Text
                letterSpacing={`0`}
                fontSize={
                  width < 900 ? (width < 700 ? `14px` : `20px`) : `16px`
                }
                fontWeight={`300`}
                lineHeight={`1.25`}
                color={Theme.greyTheme7_C}
              >
                {pData && pData.size}
              </Text>
              <Text
                letterSpacing={`-0.03em`}
                fontSize={
                  width < 900 ? (width < 700 ? `14px` : `20px`) : `16px`
                }
                margin={
                  width < 900
                    ? width < 700
                      ? `19px 0 0`
                      : `30px 0 0`
                    : `18px 0 0`
                }
                lineHeight={`1.87`}
                fontWeight={`700`}
              >
                Weight
              </Text>
              <Text
                letterSpacing={`0`}
                fontSize={
                  width < 900 ? (width < 700 ? `14px` : `20px`) : `16px`
                }
                fontWeight={`300`}
                lineHeight={`1.25`}
                color={Theme.greyTheme7_C}
              >
                {pData && pData.weight}
              </Text>
              <Text
                letterSpacing={`-0.03em`}
                lineHeight={`1.87`}
                fontWeight={`700`}
                fontSize={
                  width < 900 ? (width < 700 ? `14px` : `20px`) : `16px`
                }
                margin={
                  width < 900
                    ? width < 700
                      ? `19px 0 0`
                      : `30px 0 0`
                    : `21px 0 0`
                }
              >
                Application port
              </Text>

              {/* 적용 대상 아이콘 */}
              {pData && (
                <Image
                  width={`70px`}
                  src={pData.productIcon}
                  // filter={`brightness(10)`}
                  margin={`5px 0`}
                />
              )}
              <Text
                letterSpacing={`-0.02em`}
                fontSize={width < 700 ? `14px` : `14px`}
                fontWeight={`300`}
                lineHeight={`1.25`}
                color={Theme.greyTheme7_C}
              >
                {pData && pData.iconContent1}
              </Text>
              {/* <Text
                fontSize={width < 700 ? `14px` : `12px`}
                fontWeight={`300`}
                lineHeight={`1.4`}
              >
                {pData && pData.iconContent2}
              </Text> */}
            </Wrapper>

            {/* 제품 설명 */}
            <Wrapper
              margin={
                width < 700
                  ? `30px 0 15px`
                  : tokenId
                  ? `10px 0 30px`
                  : `50px 0 30px`
              }
              al={`flex-start`}
            >
              {pData && (
                <EditorViewer
                  letterSpacing={`-0.04em`}
                  lineHeight={`1.38`}
                  value={pData.productContent}
                  fontSize={width < 700 ? `16px` : `18px`}
                  fontWeight={`400`}
                />
              )}

              {/* {pData &&
                pData.productContent.split(`\n`).map((data, idx) => {
                  return (
                    <Text
                      key={idx}
                      fontSize={width < 700 ? `16px` : `18px`}
                      color={Theme.greyTheme3_C}
                      fontWeight={`400`}
                      display={width < 700 && `contents`}
                    >
                      {data}
                    </Text>
                  );
                })} */}
            </Wrapper>

            {/* <Wrapper dr={`row`} ju={`flex-start`} margin={`10px 0 30px`}>
              <Image
                width={`30px`}
                margin={`0 10px 0 0`}
                alt="image"
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2FMM02%2Ficon-01.png?alt=media&token=544f517a-e3da-4688-946d-9efc0d485270`}
              />*/}

            {/* 주의 사항 */}
            {/*  {pData && (
                <EditorViewer
                  lineHeight={`1.36`}
                  letterSpacing={`-0.03em`}
                  value={pData.warningContent}
                  width={`calc(100% - 60px)`}
                  fontSize={width < 390 ? `10px !important` : `16px`}
                  color={Theme.greyTheme7_C}
                />
              )}
            </Wrapper> */}

            <Wrapper
              dr={`row`}
              ju={`flex-start`}
              al={`flex-start`}
              margin={width < 700 && `15px 0`}
            >
              <Image
                width={`30px`}
                margin={`0 10px 0 0`}
                alt="image"
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2FMM02%2Ficon-02.png?alt=media&token=b106f41c-32b7-48f5-aafa-6cfd8b3f7427`}
              />
              <Wrapper width={`calc(100% - 40px)`} al={`flex-start`}>
                <Text
                  fontSize={`11px`}
                  color={Theme.greyTheme7_C}
                  letterSpacing={`-0.03em`}
                  lineHeight={`1.36`}
                >
                  <SpanText fontWeight={`700`}>SMARTKEEPER PRO</SpanText> is a
                  product for B2B business. Please leave your required item/qty/
                </Text>
                <Text
                  fontSize={`11px`}
                  color={Theme.greyTheme7_C}
                  letterSpacing={`-0.03em`}
                  lineHeight={`1.36`}
                >
                  {/* <ATag
                    display={`inline-block`}
                    width={`auto`}
                    href={`mailto:sales@comxi.com`}
                  >
                    sales@comxi.com
                  </ATag> */}
                  contact so that we can get back to you immediately. Click
                  <SpanText
                    color={`rgb(15, 152, 255)`}
                    cursor={`pointer`}
                    onClick={() => moveLinkHandler(`/contact`)}
                  >
                    &nbsp;CONTACT US↗
                  </SpanText>
                </Text>
              </Wrapper>
            </Wrapper>
          </Wrapper>

          <Wrapper display={width < 900 ? `flex` : `none`}>
            <BuyButton
              color={Theme.white_C}
              onClick={() => moveLinkHandler(`/info?type=history`)}
            >
              Contact Us
            </BuyButton>
          </Wrapper>
          {/* 상단 메인 이미지 */}
          <Wrapper
            display={width < 900 ? `none` : `flex`}
            width={`50%`}
            ju={`flex-start`}
          >
            <Wrapper
              height={width < 1100 ? `468px` : `525px`}
              overflow={`hidden`}
            >
              <Magnifier
                mgWidth={350}
                mgHeight={350}
                height={width < 1100 ? `468px` : `525px`}
                alt="image"
                zoomFactor={-10}
                src={currentColorImage && currentColorImage.imagePath}
              />
            </Wrapper>

            {/* 세미 이미지 리스트 */}
            <Wrapper margin={`20px 0 0`}>
              <ProductImageSlider
                width={width}
                currentColorImage={currentColorImage}
                setCurrentColorImage={setCurrentColorImage}
                currentColorImages={currentColorImages}
              />
            </Wrapper>
            <BuyButton
              color={Theme.white_C}
              onClick={() => moveLinkHandler(`/info?type=history`)}
            >
              Contact Us
            </BuyButton>
          </Wrapper>
        </RsWrapper>
      </Wrapper>

      <Wrapper
        bgImg={`url('${pData && pData.settingImage}')`}
        height={width < 800 ? `auto` : `1080px`}
        padding={width < 700 ? `55px  0` : `100px 0`}
        attachment={`initial`}
      >
        <RsWrapper
          height={`100%`}
          color={Theme.white_C}
          padding={width < 700 ? `0 36px` : `0`}
          ju={`space-between`}
        >
          <Wrapper>
            {/* 사용 환경 및 주의사항 타이틀 */}
            {pData && (
              <EditorViewer
                letterSpacing={`-0.02em`}
                lineHeight={`1.47`}
                value={pData.settingTitle}
                fontSize={width < 700 ? `26px` : `34px`}
                fontWeight={`900`}
                margin={width < 700 ? `0 0 30px` : `0 0 35px`}
                textAlign={`center`}
              />
            )}
            {/* <Text
              fontSize={width < 700 ? `26px` : `34px`}
              fontWeight={`900`}
              margin={width < 700 ? `0 0 30px` : `0 0 35px`}
              textAlign={`center`}
            >
              {pData && pData.settingTitle}
            </Text> */}
            {/* 사용 환경 및 주의사항 설명글 */}
            <Wrapper
              // minHeight={width < 700 ? `300px` : `500px`}
              ju={`flex-start`}
            >
              {pData && (
                <EditorViewer
                  letterSpacing={`-0.03em`}
                  lineHeight={`1.5`}
                  value={pData.settingContent}
                  fontSize={`22px`}
                  fontWeight={`400`}
                  textAlign={`center`}
                />
              )}

              {/* {pData &&
                pData.settingContent.split(`\n`).map((data, idx) => {
                  return (
                    <Text
                      fontSize={`22px`}
                      key={idx}
                      fontWeight={`400`}
                      textAlign={`center`}
                      display={width < 700 && `contents`}
                    >
                      {data}
                    </Text>
                  );
                })} */}
            </Wrapper>
          </Wrapper>
          {/* 에센셜 영역 */}
          {/* <Text fontSize={`34px`} fontWeight={`900`} margin={`80px 0 20px`}>
            적용대상
          </Text>
          <Wrapper
            width={`180px`}
            height={`88px`}
            bgColor={`rgba(114, 114, 114, 0.4)`}
            color={Theme.white_C}
            fontSize={`25px`}
            margin={`0 0 20px`}
          >
            icon
          </Wrapper>
          <Text fontSize={`18px`} color={Theme.greyTheme2_C}>
            Port name EN
          </Text> 

          <Text fontSize={`18px`} color={Theme.greyTheme2_C} fontWeight={`400`}>
            적용포트 이름 한글
          </Text>
          */}

          <Wrapper>
            {/* 핵심 특징 타이틀 */}
            {pData && (
              <EditorViewer
                letterSpacing={`-0.02em`}
                lineHeight={`1.47`}
                value={pData.pointTitle}
                fontSize={width < 700 ? `26px` : `34px`}
                fontWeight={`900`}
                margin={width < 700 ? `400px 0 0` : `50px 0 34px`}
                textAlign={`center`}
              />
            )}

            {/* <Text
              fontSize={width < 700 ? `26px` : `34px`}
              fontWeight={`900`}
              margin={width < 700 ? `50px 0` : `50px 0 34px`}
            >
              {pData && pData.pointTitle}
            </Text> */}
            {/* 핵심 특징 입력 필드 1 */}
            <Wrapper dr={`row`} ju={`space-around`} al={`flex-start`}>
              {pData && pData.pointContent1 && (
                <Wrapper width={width < 700 ? `100%` : `31%`}>
                  {pData && (
                    <EditorViewer
                      value={pData.pointNumber1}
                      letterSpacing={`-0.02em`}
                      lineHeight={`1.47`}
                      fontSize={width < 700 ? `20px` : `25px`}
                      fontWeight={`900`}
                      margin={width < 700 ? `0 0 20px` : `0 0 30px`}
                      textAlign={`center`}
                    />
                  )}

                  {/* <Text
                    letterSpacing={`-0.02em`}
                    lineHeight={`1.47`}
                    fontSize={width < 700 ? `20px` : `34px`}
                    fontWeight={`900`}
                    margin={width < 700 ? `0 0 20px` : `0 0 30px`}
                  >
                    01.
                  </Text> */}

                  {pData && (
                    <EditorViewer
                      letterSpacing={`-0.03em`}
                      lineHeight={`1.5`}
                      value={pData.pointContent1}
                      fontSize={width < 700 ? `16px` : `22px`}
                      fontWeight={`400`}
                      textAlign={`center`}
                    />
                  )}

                  {/* {pData.pointContent1.split(`\n`).map((data, idx) => {
                    return (
                      <Text
                        key={idx}
                        fontSize={width < 700 ? `16px` : `22px`}
                        fontWeight={`400`}
                        textAlign={`center`}
                      >
                        {data}
                      </Text>
                    );
                  })} */}
                </Wrapper>
              )}

              {/* 핵심 특징 입력 필드 2 */}
              {pData && pData.pointContent2 && (
                <Wrapper width={width < 700 ? `100%` : `31%`} margin={`0`}>
                  {pData && (
                    <EditorViewer
                      value={pData.pointNumber2}
                      letterSpacing={`-0.02em`}
                      lineHeight={`1.47`}
                      fontSize={width < 700 ? `20px` : `25px`}
                      fontWeight={`900`}
                      margin={width < 700 ? `20px 0 10px` : `0 0 30px`}
                      textAlign={`center`}
                    />
                  )}

                  {pData && (
                    <EditorViewer
                      letterSpacing={`-0.03em`}
                      lineHeight={`1.5`}
                      value={pData.pointContent2}
                      fontSize={width < 700 ? `16px` : `22px`}
                      fontWeight={`400`}
                      textAlign={`center`}
                    />
                  )}

                  {/* {pData.pointContent2.split(`\n`).map((data, idx) => {
                    return (
                      <Text
                        key={idx}
                        fontSize={width < 700 ? `16px` : `22px`}
                        fontWeight={`400`}
                        textAlign={`center`}
                      >
                        {data}
                      </Text>
                    );
                  })} */}
                </Wrapper>
              )}

              {/* 핵심 특징 입력 필드 3 */}
              {pData && pData.pointContent3 && (
                <Wrapper width={width < 700 ? `100%` : `31%`}>
                  {pData && (
                    <EditorViewer
                      value={pData.pointNumber2}
                      letterSpacing={`-0.02em`}
                      lineHeight={`1.47`}
                      fontSize={width < 700 ? `20px` : `25px`}
                      fontWeight={`900`}
                      margin={width < 700 ? `20px 0 10px` : `0 0 30px`}
                      textAlign={`center`}
                    />
                  )}

                  {/* <Text
                    letterSpacing={`-0.02em`}
                    lineHeight={`1.47`}
                    fontSize={width < 700 ? `20px` : `34px`}
                    fontWeight={`900`}
                    margin={width < 700 ? `50px 0 20px` : `0 0 30px`}
                  >
                    03.
                  </Text> */}

                  {pData && (
                    <EditorViewer
                      letterSpacing={`-0.03em`}
                      lineHeight={`1.5`}
                      value={pData.pointContent3}
                      fontSize={width < 700 ? `16px` : `22px`}
                      fontWeight={`400`}
                      textAlign={`center`}
                    />
                  )}
                  {/* {pData.pointContent3.split(`\n`).map((data, idx) => {
                    return (
                      <Text
                        key={idx}
                        fontSize={width < 700 ? `16px` : `22px`}
                        fontWeight={`400`}
                        textAlign={`center`}
                      >
                        {data}
                      </Text>
                    );
                  })} */}
                </Wrapper>
              )}
            </Wrapper>
          </Wrapper>
        </RsWrapper>
      </Wrapper>

      {/* 제품 특징 배경 이미지 */}
      <Wrapper
        bgImg={pData && `url('${pData.featureImage1}')`}
        height={width < 700 ? `400px` : `1080px`}
        padding={width < 700 ? `24px 36px` : `100px 0`}
        attachment={`initial`}
      >
        {/* 제품 특징 서브타이틀 */}
        <RsWrapper
          minHeight={width < 700 ? `300px` : `500px`}
          ju={`flex-start`}
          color={Theme.white_C}
        >
          {pData && (
            <EditorViewer
              letterSpacing={`-0.03em`}
              lineHeight={`1.5`}
              value={pData.featureSubTitle1}
              fontSize={width < 700 ? `12px` : `20px`}
              textAlign={`center`}
            />
          )}

          {/* <Text fontSize={width < 700 ? `12px` : `20px`}>
            {pData && pData.featureSubTitle1}
          </Text> */}
          {/* 제품 특징 메인타이틀 */}
          {pData && (
            <EditorViewer
              letterSpacing={`-0.03em`}
              lineHeight={`1.47`}
              value={pData.featureTitle1}
              fontSize={width < 700 ? `30px` : `48px`}
              fontWeight={`700`}
              margin={width < 700 ? `0 0 10px` : `0 0 20px`}
              lineHeight={`1.0`}
              textAlign={`center`}
            />
          )}

          {/* <Text
            fontSize={width < 700 ? `30px` : `48px`}
            fontWeight={`700`}
            margin={width < 700 ? `0 0 10px` : `0 0 20px`}
            lineHeight={`1.0`}
          >
            {pData && pData.featureTitle1}
          </Text> */}

          {/* 특징 설명 글 */}
          {pData && (
            <EditorViewer
              letterSpacing={`-0.03em`}
              lineHeight={`1.53`}
              value={pData.featureContent1}
              fontSize={width < 700 ? `16px` : `28px`}
              textAlign={`center`}
            />
          )}

          {/* {pData &&
            pData.featureContent1.split(`\n`).map((data, idx) => {
              return (
                <Text
                  key={idx}
                  fontSize={width < 700 ? `16px` : `28px`}
                  textAlign={`center`}
                >
                  {data}
                </Text>
              );
            })} */}

          {/* <Wrapper height={`700px`}>
            <Text fontSize={`25px`} color={Theme.greyTheme4_C}>
              제품 이미지 영역
            </Text>
          </Wrapper> */}
        </RsWrapper>
      </Wrapper>

      {/* 제품 특징 2 배경 이미지 */}
      <Wrapper
        bgImg={pData && `url('${pData.featureImage2}')`}
        height={width < 700 ? `400px` : `1080px`}
        padding={width < 700 ? `24px 36px` : `100px 0`}
        attachment={`initial`}
      >
        <RsWrapper
          minHeight={width < 700 ? `300px` : `500px`}
          ju={`flex-start`}
          color={Theme.white_C}
        >
          {/* 제품 특징2 서브타이틀 */}
          {pData && (
            <EditorViewer
              letterSpacing={`-0.03em`}
              lineHeight={`1.5`}
              value={pData.featureSubTitle2}
              fontSize={width < 700 ? `12px` : `20px`}
              textAlign={`center`}
            />
          )}

          {/* <Text fontSize={width < 700 ? `12px` : `20px`}>
            {pData && pData.featureSubTitle2}
          </Text> */}
          {/* 제품 특징2 메인타이틀 */}
          {pData && (
            <EditorViewer
              letterSpacing={`-0.03em`}
              lineHeight={`1.47`}
              value={pData.featureTitle2}
              fontSize={width < 700 ? `30px` : `48px`}
              fontWeight={`700`}
              margin={width < 700 ? `0 0 10px` : `0 0 20px`}
              lineHeight={`1.0`}
              textAlign={`center`}
            />
          )}

          {/* <Text
            fontSize={width < 700 ? `30px` : `48px`}
            fontWeight={`700`}
            margin={width < 700 ? `0 0 10px` : `0 0 20px`}
            lineHeight={`1.0`}
          >
            {pData && pData.featureTitle2}
          </Text> */}

          {/* 특징2 설명 글 */}
          {pData && (
            <EditorViewer
              letterSpacing={`-0.03em`}
              lineHeight={`1.53`}
              value={pData.featureContent2}
              fontSize={width < 700 ? `16px` : `28px`}
              textAlign={`center`}
            />
          )}

          {/* {pData &&
            pData.featureContent2.split(`\n`).map((data, idx) => {
              return (
                <Text
                  key={idx}
                  fontSize={width < 700 ? `16px` : `28px`}
                  textAlign={`center`}
                >
                  {data}
                </Text>
              );
            })} */}

          {/* <Wrapper height={`700px`}>
            <Text fontSize={`25px`} color={Theme.greyTheme7_C}>
              제품 이미지 영역
            </Text>
          </Wrapper> */}
        </RsWrapper>
      </Wrapper>

      <Wrapper bgColor={`rgba(36, 36, 36, 0.95)`}>
        <RsWrapper
          display={width < 700 ? `none` : `flex`}
          padding={`120px 0`}
          color={Theme.white_C}
        >
          <Wrapper al={`flex-start`}>
            <Text
              lineHeight={`1.47`}
              fontSize={width < 700 ? `30px` : `34px`}
              fontWeight={`900`}
              letterSpacing={`-0.03em`}
            >
              Specifications
            </Text>
            {/* 국문 제품명 입력필드 */}
            {pData && (
              <EditorViewer
                letterSpacing={`-0.05em`}
                lineHeight={`1.5`}
                value={pData.specName}
                fontSize={width < 700 ? `14px` : `20px`}
                fontWeight={`400`}
                margin={`10px 0 50px`}
              />
            )}

            {/* <Text
              fontSize={width < 700 ? `14px` : `20px`}
              fontWeight={`400`}
              margin={`10px 0 50px`}
            >
              {pData && pData.specName}
            </Text> */}
          </Wrapper>
          {/* 이미지 1 */}
          <Wrapper
            display={width < 700 ? `none` : `flex`}
            bgImg={pData && `url('${pData.specImage1}')`}
            attachment={`initial`}
            height={`460px`}
          ></Wrapper>
          <Wrapper
            dr={`row`}
            margin={`20px 0 0`}
            display={width < 700 ? `none` : `flex`}
          >
            {/* 이미지 2 */}
            <Wrapper
              width={`calc(100% / 2 - (20px / 2))`}
              margin={`0 20px 0 0`}
              bgImg={pData && `url('${pData.specImage2}')`}
              attachment={`initial`}
              height={`330px`}
            ></Wrapper>
            {/* 이미지 3 */}
            <Wrapper
              width={`calc(100% / 2 - (20px / 2))`}
              bgImg={pData && `url('${pData.specImage3}')`}
              attachment={`initial`}
              height={`330px`}
            ></Wrapper>
          </Wrapper>

          <Wrapper
            dr={`row`}
            ju={`space-between`}
            al={`flex-start`}
            padding={width < 700 ? `50px 0 40px` : `70px 0 80px`}
          >
            {/* 세부 특징 입력 필드 1 */}
            {pData &&
              pData.specDetailTitle1 &&
              pData.specDetailImage1 &&
              pData.specDetailContent1 && (
                <Wrapper
                  width={width < 700 ? `100%` : `calc(100% / 3 - 15px)`}
                  // margin={`0 20px 0 0`}
                >
                  <TitleBox>
                    {pData && (
                      <EditorViewer
                        letterSpacing={`-0.03em`}
                        lineHeight={`1.42`}
                        value={pData.specDetailTitle1}
                        textAlign={`center`}
                        fontSize={`16px`}
                        fontWeight={`700`}
                      />
                    )}
                  </TitleBox>
                  <Wrapper
                    height={`420px`}
                    bgImg={`url('${pData.specDetailImage1}')`}
                    attachment={`initial`}
                    margin={`30px 0`}
                  ></Wrapper>

                  {pData && (
                    <EditorViewer
                      letterSpacing={`-0.05em`}
                      lineHeight={`1.46`}
                      value={pData.specDetailContent1}
                      fontSize={width < 700 ? `18px` : `15px`}
                      fontWeight={`400`}
                      textAlign={`center`}
                    />
                  )}

                  {/* {pData.specDetailContent1.split(`\n`).map((data, idx) => {
                    return (
                      <Text
                        key={idx}
                        fontSize={width < 700 ? `18px` : `15px`}
                        fontWeight={`400`}
                        color={Theme.greyTheme3_C}
                        textAlign={`center`}
                      >
                        {data}
                      </Text>
                    );
                  })} */}
                </Wrapper>
              )}
            {/* 세부 특징 입력 필드 2 */}
            {pData &&
              pData.specDetailTitle2 &&
              pData.specDetailImage2 &&
              pData.specDetailContent2 && (
                <Wrapper width={width < 700 ? `100%` : `calc(100% / 3 - 15px)`}>
                  <TitleBox>
                    {pData && (
                      <EditorViewer
                        letterSpacing={`-0.03em`}
                        lineHeight={`1.42`}
                        value={pData.specDetailTitle2}
                        textAlign={`center`}
                        fontSize={`16px`}
                        fontWeight={`700`}
                      />
                    )}
                  </TitleBox>
                  <Wrapper
                    height={`420px`}
                    bgImg={`url('${pData.specDetailImage2}')`}
                    attachment={`initial`}
                    margin={`30px 0`}
                  ></Wrapper>

                  {pData && (
                    <EditorViewer
                      letterSpacing={`-0.05em`}
                      lineHeight={`1.46`}
                      value={pData.specDetailContent2}
                      fontSize={width < 700 ? `18px` : `15px`}
                      fontWeight={`400`}
                      textAlign={`center`}
                    />
                  )}

                  {/* {pData.specDetailContent2.split(`\n`).map((data, idx) => {
                    return (
                      <Text
                        key={idx}
                        fontSize={width < 700 ? `18px` : `15px`}
                        fontWeight={`400`}
                        color={Theme.greyTheme3_C}
                        textAlign={`center`}
                      >
                        {data}
                      </Text>
                    );
                  })} */}
                </Wrapper>
              )}
            {/* 세부 특징 입력 필드 3 */}
            {pData &&
              pData.specDetailTitle3 &&
              pData.specDetailImage3 &&
              pData.specDetailContent3 && (
                <Wrapper
                  width={width < 700 ? `100%` : `calc(100% / 3 - 15px)`}
                  // margin={`0 20px 0 0`}
                >
                  <TitleBox>
                    {pData && (
                      <EditorViewer
                        letterSpacing={`-0.03em`}
                        lineHeight={`1.42`}
                        value={pData.specDetailTitle3}
                        textAlign={`center`}
                        fontSize={`16px`}
                        fontWeight={`700`}
                      />
                    )}
                  </TitleBox>
                  <Wrapper
                    height={`420px`}
                    bgImg={`url('${pData.specDetailImage3}')`}
                    attachment={`initial`}
                    margin={`30px 0`}
                  ></Wrapper>

                  {pData && (
                    <EditorViewer
                      letterSpacing={`-0.05em`}
                      lineHeight={`1.46`}
                      value={pData.specDetailContent3}
                      fontSize={width < 700 ? `18px` : `15px`}
                      fontWeight={`400`}
                      textAlign={`center`}
                    />
                  )}

                  {/* {pData.specDetailContent3.split(`\n`).map((data, idx) => {
                    return (
                      <Text
                        key={idx}
                        fontSize={width < 700 ? `18px` : `15px`}
                        fontWeight={`400`}
                        color={Theme.greyTheme3_C}
                        textAlign={`center`}
                      >
                        {data}
                      </Text>
                    );
                  })} */}
                </Wrapper>
              )}
          </Wrapper>
        </RsWrapper>

        <RsWrapper
          display={width < 700 ? `flex` : `none`}
          color={Theme.white_C}
          padding={`35px 36px`}
        >
          <Wrapper al={`flex-start`}>
            <Text
              fontSize={width < 700 ? `30px` : `34px`}
              fontWeight={`900`}
              letterSpacing={`-0.03em`}
              lineHeight={`1.47`}
            >
              Specifications
            </Text>
            {/* 국문 제품명 입력필드 */}
            {pData && (
              <EditorViewer
                lineHeight={`1.5`}
                letterSpacing={`-0.03em`}
                value={pData.specName}
                fontSize={width < 700 ? `14px` : `20px`}
                fontWeight={`400`}
                margin={`10px 0 50px`}
              />
            )}

            {/* <Text
              fontSize={width < 700 ? `14px` : `20px`}
              fontWeight={`400`}
              margin={`10px 0 50px`}
            >
              {pData && pData.specName}
            </Text> */}
          </Wrapper>
        </RsWrapper>
        <Wrapper display={width < 700 ? `flex` : `none`}>
          <Image
            src={pData && `${pData.specImage1}`}
            attachment={`initial`}
            height={`250px`}
          />
          <Image
            src={pData && `${pData.specImage1}`}
            attachment={`initial`}
            height={`250px`}
            margin={`10px 0`}
          />
          <Image
            src={pData && `${pData.specImage1}`}
            attachment={`initial`}
            height={`250px`}
          />
        </Wrapper>

        {/* 세부 특징 입력 필드 1 */}
        <Wrapper
          display={width < 700 ? `flex` : `none`}
          dr={`row`}
          ju={`space-around`}
          padding={`80px 0`}
        >
          {pData &&
            pData.specDetailTitle1 &&
            pData.specDetailImage1 &&
            pData.specDetailContent1 && (
              <Wrapper margin={`0 0 50px`}>
                <TitleBox>
                  {pData && (
                    <EditorViewer
                      letterSpacing={`-0.03em`}
                      lineHeight={`1.42`}
                      value={pData.specDetailTitle1}
                      textAlign={`center`}
                      fontSize={`16px`}
                      fontWeight={`700`}
                    />
                  )}
                </TitleBox>
                <Wrapper
                  height={`200px`}
                  bgImg={`url('${pData.specDetailImage1}')`}
                  attachment={`initial`}
                  margin={`30px 0`}
                ></Wrapper>

                {pData && (
                  <EditorViewer
                    letterSpacing={`-0.05em`}
                    lineHeight={`1.46`}
                    value={pData.specDetailContent1}
                    padding={`0 36px 0`}
                    fontSize={`18px`}
                    fontWeight={`400`}
                    textAlign={`center`}
                  />
                )}

                {/* {pData.specDetailContent1.split(`\n`).map((data, idx) => {
                  return (
                    <Text
                      padding={`0 36px 0`}
                      key={idx}
                      fontSize={`18px`}
                      fontWeight={`400`}
                      color={Theme.greyTheme3_C}
                      textAlign={`center`}
                    >
                      {data}
                    </Text>
                  );
                })} */}
              </Wrapper>
            )}
          {/* 세부 특징 입력 필드 1 */}
          {pData &&
            pData.specDetailTitle2 &&
            pData.specDetailImage2 &&
            pData.specDetailContent2 && (
              <Wrapper margin={`0 0 50px`}>
                <TitleBox>
                  {pData && (
                    <EditorViewer
                      letterSpacing={`-0.03em`}
                      lineHeight={`1.42`}
                      value={pData.specDetailTitle2}
                      textAlign={`center`}
                      fontSize={`16px`}
                      fontWeight={`700`}
                    />
                  )}
                </TitleBox>
                <Wrapper
                  height={`200px`}
                  bgImg={`url('${pData.specDetailImage2}')`}
                  attachment={`initial`}
                  margin={`30px 0`}
                ></Wrapper>

                {pData && (
                  <EditorViewer
                    letterSpacing={`-0.05em`}
                    lineHeight={`1.46`}
                    value={pData.specDetailContent2}
                    padding={`0 36px 0`}
                    fontSize={`18px`}
                    fontWeight={`400`}
                    textAlign={`center`}
                  />
                )}

                {/* {pData.specDetailContent2.split(`\n`).map((data, idx) => {
                  return (
                    <Text
                      padding={`0 36px 0`}
                      key={idx}
                      fontSize={`18px`}
                      fontWeight={`400`}
                      color={Theme.greyTheme3_C}
                      textAlign={`center`}
                    >
                      {data}
                    </Text>
                  );
                })} */}
              </Wrapper>
            )}
          {/* 세부 특징 입력 필드 1 */}
          {pData &&
            pData.specDetailTitle3 &&
            pData.specDetailImage3 &&
            pData.specDetailContent3 && (
              <Wrapper>
                <TitleBox>
                  {pData && (
                    <EditorViewer
                      lineHeight={`1.42`}
                      letterSpacing={`-0.03em`}
                      value={pData.specDetailTitle3}
                      textAlign={`center`}
                      fontSize={`16px`}
                      fontWeight={`700`}
                    />
                  )}
                </TitleBox>
                <Wrapper
                  height={`200px`}
                  bgImg={`url('${pData.specDetailImage3}')`}
                  attachment={`initial`}
                  margin={`30px 0`}
                ></Wrapper>

                {pData && (
                  <EditorViewer
                    letterSpacing={`-0.05em`}
                    lineHeight={`1.46`}
                    value={pData.specDetailContent3}
                    padding={`0 36px 0`}
                    fontSize={`18px`}
                    fontWeight={`400`}
                    textAlign={`center`}
                  />
                )}

                {/* {pData.specDetailContent3.split(`\n`).map((data, idx) => {
                  return (
                    <Text
                      padding={`0 36px 0`}
                      key={idx}
                      fontSize={`18px`}
                      fontWeight={`400`}
                      color={Theme.greyTheme3_C}
                      textAlign={`center`}
                    >
                      {data}
                    </Text>
                  );
                })} */}
              </Wrapper>
            )}
        </Wrapper>
      </Wrapper>

      <Wrapper
        padding={width < 700 ? `180px 0 30px` : `180px 0`}
        attachment={`initial`}
        bgImg={`url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2FMM02%2FbgImage.png?alt=media&token=0917fcbf-c46d-4f3c-a371-8b1e69100a61")`}
      >
        {/* 맺음말 타이틀 */}
        <RsWrapper
          color={Theme.white_C}
          al={`flex-start`}
          padding={width < 700 && `0 36px`}
        >
          {pData && (
            <EditorViewer
              letterSpacing={`-0.03em`}
              lineHeight={`1.3`}
              value={pData.finalTitle}
              margin={`30px 0 0`}
            />
          )}

          {pData && (
            <EditorViewer
              letterSpacing={`-0.04em`}
              lineHeight={`2.1`}
              value={pData.finalContent}
              margin={`20px 0 0`}
              fontSize={width < 700 ? `18px` : `20px`}
            />
          )}

          {/* <Text fontSize={`28px`} margin={`10px 0 100px`}>
            잦은 문제는 브랜드 이미지와도 연결됩니다.
          </Text>
            

          에센셜 영역

          <Text fontSize={`34px`} fontWeight={`900`}>
            구성품
          </Text>
          <Text fontSize={`25px`} margin={`30px 0 50px`}>
            USB포트락 2EA , USB허브 1EA , 링크락 허브 1EA
          </Text> */}

          <Text
            margin={`100px 0 0`}
            fontSize={`34px`}
            fontWeight={`900`}
            letterSpacing={`0`}
            lineHeight={`1.47`}
          >
            Manufacturing &#38; Certification
          </Text>
          <Wrapper
            dr={`row`}
            ju={`flex-start`}
            al={`flex-start`}
            padding={`30px 0 0`}
          >
            {/* 제조 인증 아이콘 */}
            {pData &&
              pData.cerIconImage1 &&
              pData.cerContent1 &&
              pData.cerContent1 !== `undefined` && (
                <Wrapper
                  width={
                    width < 700
                      ? `calc(100% / 2 - (10px / 2))`
                      : `calc(100% / 6 - (180px / 6) )`
                  }
                  al={width < 700 && `flex-start`}
                  margin={width < 700 ? `0 10px 30px 0` : `0 30px 0 0`}
                >
                  <Image
                    width={`70px`}
                    height={`90px`}
                    margin={`0 0 20px`}
                    objectFit={`contain`}
                    src={pData.cerIconImage1}
                  />

                  <Text fontWeight={`300`} textAlign={`center`}>
                    {pData.cerContent1.split(`\n`).map((title, idx) => {
                      return (
                        <SpanText key={idx}>
                          {title}
                          <br />
                        </SpanText>
                      );
                    })}
                  </Text>
                </Wrapper>
              )}

            {pData &&
              pData.cerIconImage2 &&
              pData.cerContent2 &&
              pData.cerContent2 !== `undefined` && (
                <Wrapper
                  width={
                    width < 700
                      ? `calc(100% / 2 - (10px / 2))`
                      : `calc(100% / 6 - (180px / 6) )`
                  }
                  al={width < 700 && `flex-start`}
                  margin={width < 700 ? `0 0 30px 0` : `0 30px 0 0`}
                >
                  <Image
                    width={`70px`}
                    height={`90px`}
                    margin={`0 0 20px`}
                    objectFit={`contain`}
                    src={pData.cerIconImage2}
                  />

                  <Text fontWeight={`300`} textAlign={`center`}>
                    {pData.cerContent2.split(`\n`).map((title, idx) => {
                      return (
                        <SpanText key={idx}>
                          {title}
                          <br />
                        </SpanText>
                      );
                    })}
                  </Text>
                </Wrapper>
              )}

            {pData &&
              pData.cerIconImage3 &&
              pData.cerContent3 &&
              pData.cerContent3 !== `undefined` && (
                <Wrapper
                  width={
                    width < 700
                      ? `calc(100% / 2 - (10px / 2))`
                      : `calc(100% / 6 - (180px / 6) )`
                  }
                  al={width < 700 && `flex-start`}
                  margin={width < 700 ? `0 10px 30px 0` : `0 30px 0 0`}
                >
                  <Image
                    width={`70px`}
                    height={`90px`}
                    margin={`0 0 20px`}
                    objectFit={`contain`}
                    src={pData.cerIconImage3}
                  />

                  <Text fontWeight={`300`} textAlign={`center`}>
                    {pData.cerContent3.split(`\n`).map((title, idx) => {
                      return (
                        <SpanText key={idx}>
                          {title}
                          <br />
                        </SpanText>
                      );
                    })}
                  </Text>
                </Wrapper>
              )}

            {pData &&
              pData.cerIconImage4 &&
              pData.cerContent4 &&
              pData.cerContent4 !== `undefined` && (
                <Wrapper
                  width={
                    width < 700
                      ? `calc(100% / 2 - (10px / 2))`
                      : `calc(100% / 6 - (180px / 6) )`
                  }
                  al={width < 700 && `flex-start`}
                  margin={width < 700 ? `0 0 30px 0` : `0 30px 0 0`}
                >
                  <Image
                    width={`70px`}
                    height={`90px`}
                    margin={`0 0 20px`}
                    objectFit={`contain`}
                    src={pData.cerIconImage4}
                  />

                  <Text fontWeight={`300`} textAlign={`center`}>
                    {pData.cerContent4.split(`\n`).map((title, idx) => {
                      return (
                        <SpanText key={idx}>
                          {title}
                          <br />
                        </SpanText>
                      );
                    })}
                  </Text>
                </Wrapper>
              )}

            {pData &&
              pData.cerIconImage5 &&
              pData.cerContent5 &&
              pData.cerContent5 !== `undefined` && (
                <Wrapper
                  width={
                    width < 700
                      ? `calc(100% / 2 - (10px / 2))`
                      : `calc(100% / 6 - (180px / 6) )`
                  }
                  al={width < 700 && `flex-start`}
                  margin={width < 700 ? `0 10px 30px 0` : `0 30px 0 0`}
                >
                  <Image
                    width={`70px`}
                    height={`90px`}
                    margin={`0 0 20px`}
                    objectFit={`contain`}
                    src={pData.cerIconImage5}
                  />

                  <Text fontWeight={`300`} textAlign={`center`}>
                    {pData.cerContent5.split(`\n`).map((title, idx) => {
                      return (
                        <SpanText key={idx}>
                          {title}
                          <br />
                        </SpanText>
                      );
                    })}
                  </Text>
                </Wrapper>
              )}

            {pData &&
              pData.cerIconImage6 &&
              pData.cerContent6 &&
              pData.cerContent6 !== `undefined` && (
                <Wrapper
                  width={
                    width < 700
                      ? `calc(100% / 2 - (10px / 2))`
                      : `calc(100% / 6 - (180px / 6) )`
                  }
                  al={width < 700 && `flex-start`}
                  margin={width < 700 ? `0 0 30px 0` : `0 30px 0 0`}
                >
                  <Image
                    width={`70px`}
                    height={`90px`}
                    margin={`0 0 20px`}
                    objectFit={`contain`}
                    src={pData.cerIconImage6}
                  />

                  <Text fontWeight={`300`} textAlign={`center`}>
                    {pData.cerContent6.split(`\n`).map((title, idx) => {
                      return (
                        <SpanText key={idx}>
                          {title}
                          <br />
                        </SpanText>
                      );
                    })}
                  </Text>
                </Wrapper>
              )}
          </Wrapper>
        </RsWrapper>
      </Wrapper>

      <Wrapper
        padding={width < 700 ? `30px 36px 45px` : `100px 0`}
        bgColor={Theme.black_C}
      >
        <RsWrapper width={`1230px`} al={`flex-start`} color={Theme.white_C}>
          <Text
            fontSize={width < 700 ? `26px` : `34px`}
            color={Theme.blackTheme_C}
            margin={width < 700 ? `0 0 30px` : `0 0 50px`}
          >
            Download
          </Text>
          <Wrapper
            dr={`row`}
            ju={`flex-start`}
            padding={width < 700 ? `25px 0` : `35px 0 35px  50px`}
            borderTop={`1px solid rgb(226, 226, 226)`}
          >
            <Text
              width={width < 700 ? `50%` : `20%`}
              color={Theme.greyTheme3_C}
              fontSize={width < 700 && `14px`}
            >
              User Guide
            </Text>
            <Wrapper width={width < 700 ? `50%` : `80%`} al={`flex-start`}>
              <CommonButton
                width={width < 700 ? `120px` : `150px`}
                height={width < 700 ? `30px` : `36px`}
                fontSize={width < 700 ? `14px` : `16px`}
                kindOf={`darkGrey`}
                onClick={() =>
                  fileDownloadHandler(pData.filePath1, pData.fileOriginName1)
                }
              >
                <BiArrowToBottom />
                Download
              </CommonButton>
            </Wrapper>
          </Wrapper>
          <Wrapper
            dr={`row`}
            ju={`flex-start`}
            padding={width < 700 ? `25px 0 0` : `35px 0 35px  50px`}
            borderTop={`1px solid rgb(226, 226, 226)`}
          >
            <Text
              width={width < 700 ? `50%` : `20%`}
              color={Theme.greyTheme3_C}
              fontSize={width < 700 && `14px`}
            >
              Product page
            </Text>
            <Wrapper width={width < 700 ? `50%` : `80%`} al={`flex-start`}>
              <CommonButton
                width={width < 700 ? `120px` : `150px`}
                height={width < 700 ? `30px` : `36px`}
                fontSize={width < 700 ? `14px` : `16px`}
                kindOf={`darkGrey`}
                onClick={() =>
                  fileDownloadHandler(pData.filePath2, pData.fileOriginName2)
                }
              >
                <BiArrowToBottom />
                Download
              </CommonButton>
            </Wrapper>
          </Wrapper>
        </RsWrapper>
      </Wrapper>
    </WholeWrapper>
  );
};

export default withResizeDetector(MM09Presenter);
