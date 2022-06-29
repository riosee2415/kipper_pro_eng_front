import React, { useEffect, useState } from "react";
import {
  WholeWrapper,
  RsWrapper,
  Wrapper,
  Text,
  Image,
  Combo,
  ComboOption,
  ATag,
} from "../../Components/CommonComponents";
import { Link } from "react-router-dom";
import { withResizeDetector } from "react-resize-detector";
import { GET_ALL_FOOTER_INFO, GET_ALL_SNS } from "./LayoutQueries";
import { useQuery } from "@apollo/client";
import Theme from "../../Styles/Theme";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import styled from "styled-components";
import { footerMenus } from "./clientMenus";
import { Fragment } from "react";
import { Modal } from "4leaf-antd";
import { GiSandsOfTime } from "react-icons/gi";

const Footer = ({ width, location }) => {
  const files = [
    // {
    //   filePath:
    //     "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FFooter%2FSmartKeeper%20Product%20Introduction_KR_R1.pdf?alt=media&token=9ca51af4-dd0e-44cc-bec4-5f7cf989f5c5",
    //   fileOriginName: "SmartKeeper Product Introduction_KR_R1.PDF",
    // },
    {
      filePath:
        "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FFooter%2FSmartKeeper%20Product%20Introduction_EN_R1.pdf?alt=media&token=7ebb6ccd-3579-4803-b32b-b615f7eed8c9",
      fileOriginName: "SmartKeeper Product Introduction_EN_R1.PDF",
    },
    // {
    //   filePath:
    //     "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FFooter%2FSMARTKEEPR_PRO_Catalogue_KR.pdf?alt=media&token=07d0b883-b3e2-4a06-b779-1232a1b7901f",
    //   fileOriginName: "SMARTKEEPR_PRO_Catalogue_KR.PDF",
    // },
    {
      filePath:
        "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FFooter%2FSMARTKEEPR_PRO_Catalogue_EN.pdf?alt=media&token=5953edda-b253-4508-978e-d8357fc5de63",
      fileOriginName: "SMARTKEEPR_PRO_Catalogue_EN.PDF",
    },
    // {
    //   filePath:
    //     "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FFooter%2FSMARTKEEPR_ESSENTIAL_Catalogue_KR.pdf?alt=media&token=324426a5-e7a3-4c18-9e72-940f7017b557",
    //   fileOriginName: "SMARTKEEPR_ESSENTIAL_Catalogue_KR.PDF",
    // },
    {
      filePath:
        "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2FFooter%2FSMARTKEEPR_ESSENTIAL_Catalogue_EN.pdf?alt=media&token=0ee4144e-8903-48f9-a2c8-8a8503ce6c5e",
      fileOriginName: "SMARTKEEPR_ESSENTIAL_Catalogue_EN.PDF",
    },
  ];

  ////////////// - USE STATE - ///////////////
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState(false);
  const [subToggle, setSubToggle] = useState([]);
  const [isModal, setIsModal] = useState(false);

  ////////////// - USE QUERY - ///////////////

  const { data: fDatum, refetch: fRefetch } = useQuery(GET_ALL_FOOTER_INFO);
  const { data: sDatum, refetch: sRefetch } = useQuery(GET_ALL_SNS);

  useEffect(() => {
    fRefetch();
    sRefetch();
  }, []);

  ////////////// - USE HANDLER - ///////////////
  const viewInfoHandler = () => {
    Modal.info({
      title: "Notice",
      width: "360px",
      content: (
        <Wrapper margin={`20px 0 0`}>
          <GiSandsOfTime size={30} />
          <Text margin={`20px 0 0`} fontSize={`17px`}>
            Coming soon
          </Text>
        </Wrapper>
      ),
      onOk() {},
    });
  };

  const mobileSubMenuToggle = () => {
    setMobileSubMenuOpen(!mobileSubMenuOpen);
  };

  // 서브 메뉴 업데이트
  const updateSubMenuHandler = (index) => {
    const tempArr = subToggle.map((data, idx) => {
      return index === idx ? !data : data;
    });

    setSubToggle(tempArr);
  };

  const fileDownloadHandler = async (idx) => {
    if (idx === null) return;

    const data = files[idx];

    if (!data.fileOriginName || data.fileOriginName === "-") {
      return;
    }
    let blob = await fetch(data.filePath).then((r) => r.blob());

    const file = new Blob([blob]);

    saveAs(file, data.fileOriginName);
  };

  ////////////// - USE EFFECT - ///////////////
  // 서브 메뉴 배열 생성
  useEffect(() => {
    const tempArr = [];
    footerMenus.map((_, idx) => {
      tempArr.push(false);
    });

    setSubToggle(tempArr);
  }, []);

  return (
    <WholeWrapper
      padding={width < 900 ? `36px` : `55px 0`}
      bgColor={Theme.essGrey_C}
      color={Theme.greyTheme1_C}
      isRelative={true}
    >
      <RsWrapper
        margin={width < 900 ? `0 0 30px` : `0 0 55px`}
        paddingLeft={width < 900 && `0`}
        paddingRight={width < 900 && `0`}
      >
        <Wrapper
          display={width < 900 ? `none` : `flex`}
          dr={`row`}
          al={`flex-start`}
        >
          {footerMenus &&
            footerMenus.map((menu, activeIndex) => {
              return (
                <Fragment key={menu.menuName}>
                  <Wrapper width={`calc(100% / 6 )`} al={`flex-start`}>
                    {menu.isEx === true ? (
                      <ATag width={`auto`} href={`${menu.menuLink}`}>
                        <Wrapper
                          width={`auto`}
                          fontSize={width < 900 ? `8px` : `12px`}
                          fontWeight={`600`}
                          margin={`0 0 20px`}
                          color={Theme.greyTheme4_C}
                        >
                          {menu.menuName}
                        </Wrapper>
                      </ATag>
                    ) : (
                      <Link to={`${menu.menuLink}`}>
                        <Wrapper
                          width={`auto`}
                          fontSize={width < 900 ? `8px` : `12px`}
                          fontWeight={`600`}
                          margin={`0 0 20px`}
                          color={Theme.greyTheme4_C}
                        >
                          {menu.menuName}
                        </Wrapper>
                      </Link>
                    )}

                    {menu.subMenus.map((sub, idx) => {
                      return (
                        <Fragment key={idx}>
                          {sub.isEx === true ? (
                            <ATag width={`auto`} href={`${sub.subMenuLink}`}>
                              <Wrapper
                                width={`auto`}
                                margin={`0 0 15px`}
                                al={`flex-start`}
                                fontSize={`11px`}
                                fontWeight={`300`}
                                color={Theme.greyTheme1_C}
                              >
                                {sub.subMenuName}
                              </Wrapper>
                            </ATag>
                          ) : (
                            <Link to={`${sub.subMenuLink}`}>
                              <Wrapper
                                width={`auto`}
                                margin={`0 0 15px`}
                                al={`flex-start`}
                                fontSize={`11px`}
                                fontWeight={`300`}
                                color={Theme.greyTheme1_C}
                              >
                                {sub.subMenuName}
                              </Wrapper>
                            </Link>
                          )}
                        </Fragment>
                      );
                    })}
                  </Wrapper>
                </Fragment>
              );
            })}
          <Wrapper width={`calc(100% / 6 )`} al={`flex-start`}>
            <Wrapper
              width={`auto`}
              fontSize={width < 900 ? `8px` : `12px`}
              fontWeight={`500`}
              margin={`0 0 20px`}
              color={Theme.greyTheme4_C}
            >
              Download
            </Wrapper>

            <Wrapper dr={`row`} ju={`flex-start`}>
              <Combo
                margin={`0 5px 0 0`}
                width={`100%`}
                onChange={(e) => fileDownloadHandler(e.target.value)}
              >
                <ComboOption value={null}>Choose a Catalogue</ComboOption>
                {/* <ComboOption value={0}>
                  SmartKeeper Product Introduction_KR_R1
                </ComboOption> */}
                <ComboOption value={1}>
                  SmartKeeper Product Introduction_EN_R1
                </ComboOption>
                {/* <ComboOption value={2}>SMARTKEEPR_PRO_Catalogue_KR</ComboOption> */}
                <ComboOption value={3}>SMARTKEEPR_PRO_Catalogue_EN</ComboOption>
                {/* <ComboOption value={4}>
                  SMARTKEEPR_ESSENTIAL_Catalogue_KR
                </ComboOption> */}
                <ComboOption value={5}>
                  SMARTKEEPR_ESSENTIAL_Catalogue_EN
                </ComboOption>
              </Combo>
              {/* <Wrapper width={`18px`} height={`18px`} bgColor={Theme.white_C}>
                <Image
                  alt="icon"
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%20147.png?alt=media&token=a4115382-eef7-4ad2-8c15-d8e0744ef988`}
                  width={`auto`}
                />
              </Wrapper> */}
            </Wrapper>

            <Wrapper
              borderTop={`1px solid ${Theme.greyTheme4_C}`}
              padding={`3px 0 0`}
              margin={`10px 0 0`}
              dr={`row`}
              ju={`space-between`}
            >
              <ATag
                width={`auto`}
                href={`http://comxi-partners.musign.co.kr/user/login.php`}
                target={`_blank`}
              >
                <Wrapper width={`auto`} dr={`row`}>
                  <Image
                    alt="icon"
                    src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ffooter%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%206378.svg?alt=media&token=dc432a29-17f7-4986-89b4-bfa927082c6c`}
                    width={`11px`}
                    height={`11px`}
                    margin={`0 5px 0 0`}
                  />
                  <Text fontSize={`12px`}>PARTNERS</Text>
                </Wrapper>
              </ATag>
              <Wrapper width={`auto`} dr={`row`}>
                <ATag
                  width={`auto`}
                  href={`https://www.facebook.com/smartkeeperworld/`}
                  target={`_blank`}
                >
                  <Image
                    alt="icon"
                    src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ffooter%2F%E1%84%91%E1%85%A2%E1%84%89%E1%85%B3%2038273.svg?alt=media&token=d5fae459-bbef-4196-8137-850e29262f14`}
                    width={`4px`}
                  />
                </ATag>
                <Image
                  alt="icon"
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ffooter%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%206379.svg?alt=media&token=15304992-da72-4006-912f-67192d7de437`}
                  width={`9px`}
                  margin={`0 10px`}
                  cursor={`pointer`}
                  onClick={() => {
                    viewInfoHandler();
                  }}
                />
                <ATag
                  width={`auto`}
                  href={`https://www.youtube.com/channel/UC10KyXQWAUmyzgJUX_lk0Og`}
                  target={`_blank`}
                >
                  <Image
                    alt="icon"
                    src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ffooter%2F%E1%84%91%E1%85%A2%E1%84%89%E1%85%B3%2038276.svg?alt=media&token=77c6ca18-a72e-44e4-acfd-c4f770c687e0`}
                    width={`14px`}
                  />
                </ATag>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Wrapper>

        <Wrapper display={width < 900 ? `flex` : `none`}>
          {footerMenus &&
            footerMenus.map((menu, activeIndex) => {
              return (
                <Fragment key={menu.menuName}>
                  <Wrapper al={`flex-start`}>
                    <Wrapper
                      dr={`row`}
                      ju={`space-between`}
                      borderBottom={`1px solid rgb(112, 112, 112)`}
                      padding={`15px 0`}
                      fontSize={`12px !important`}
                      margin={subToggle[activeIndex] && `0 0 15px`}
                      onClick={() => updateSubMenuHandler(activeIndex)}
                    >
                      {menu.menuName}
                      {subToggle[activeIndex] ? (
                        <RiArrowUpSLine size={18} />
                      ) : (
                        <RiArrowDownSLine size={18} />
                      )}
                    </Wrapper>

                    {subToggle[activeIndex] &&
                      menu.subMenus.map((sub, idx) => {
                        return (
                          <Fragment key={idx}>
                            {sub.isEx === true ? (
                              <ATag width={`auto`} href={`${sub.subMenuLink}`}>
                                <Wrapper
                                  width={`auto`}
                                  margin={`0 0 20px`}
                                  al={`flex-start`}
                                  fontSize={`11px`}
                                  fontWeight={`300`}
                                  color={Theme.greyTheme1_C}
                                >
                                  {sub.subMenuName}
                                </Wrapper>
                              </ATag>
                            ) : (
                              <Link key={idx} to={`${sub.subMenuLink}`}>
                                <Wrapper
                                  width={`auto`}
                                  margin={`0 0 20px`}
                                  al={`flex-start`}
                                  fontSize={`11px`}
                                  fontWeight={`300`}
                                  color={Theme.greyTheme1_C}
                                >
                                  {sub.subMenuName}
                                </Wrapper>
                              </Link>
                            )}
                          </Fragment>
                        );
                      })}
                  </Wrapper>
                </Fragment>
              );
            })}
          <Wrapper
            dr={`row`}
            ju={`space-between`}
            borderBottom={`1px solid rgb(112, 112, 112)`}
            padding={`15px 0`}
          >
            <Wrapper
              width={`auto`}
              fontSize={`12px !important`}
              fontWeight={`500`}
            >
              Download
            </Wrapper>

            <Wrapper width={`auto`} dr={`row`} ju={`flex-start`}>
              <Combo
                margin={`0 5px 0 0`}
                width={`100%`}
                onChange={(e) => fileDownloadHandler(e.target.value)}
              >
                <ComboOption value={null}>Choose a Catalogue</ComboOption>
                {/* <ComboOption value={0}>
                  SmartKeeper Product Introduction_KR_R1
                </ComboOption> */}
                <ComboOption value={1}>
                  SmartKeeper Product Introduction_EN_R1
                </ComboOption>
                {/* <ComboOption value={2}>SMARTKEEPR_PRO_Catalogue_KR</ComboOption> */}
                <ComboOption value={3}>SMARTKEEPR_PRO_Catalogue_EN</ComboOption>
                {/* <ComboOption value={4}>
                  SMARTKEEPR_ESSENTIAL_Catalogue_KR
                </ComboOption> */}
                <ComboOption value={5}>
                  SMARTKEEPR_ESSENTIAL_Catalogue_EN
                </ComboOption>
              </Combo>
              {/* <Wrapper
                width={width < 900 ? `16px` : `18px`}
                height={width < 900 ? `16px` : `18px`}
                bgColor={Theme.greyTheme5_C}
              >
                <Image
                  alt="icon"
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ficon%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%20147.png?alt=media&token=a4115382-eef7-4ad2-8c15-d8e0744ef988`}
                  width={`auto`}
                />
              </Wrapper> */}
            </Wrapper>
          </Wrapper>

          <Wrapper
            borderBottom={`1px solid ${Theme.greyTheme4_C}`}
            padding={`15px 0`}
            dr={`row`}
            ju={`space-between`}
          >
            <ATag
              width={`auto`}
              href={`http://comxi-partners.musign.co.kr/user/login.php`}
              target={`_blank`}
            >
              <Wrapper width={`auto`} dr={`row`}>
                <Image
                  alt="icon"
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ffooter%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%206378.svg?alt=media&token=dc432a29-17f7-4986-89b4-bfa927082c6c`}
                  width={`11px`}
                  height={`11px`}
                  margin={`0 5px 0 0`}
                />
                <Text fontSize={`12px`}>PARTNERS</Text>
              </Wrapper>
            </ATag>
            <Wrapper width={`auto`} dr={`row`}>
              <ATag
                width={`auto`}
                href={`https://www.facebook.com/smartkeeperworld/`}
                target={`_blank`}
              >
                <Image
                  alt="icon"
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ffooter%2F%E1%84%91%E1%85%A2%E1%84%89%E1%85%B3%2038273.svg?alt=media&token=d5fae459-bbef-4196-8137-850e29262f14`}
                  width={`4px`}
                />
              </ATag>
              <Image
                alt="icon"
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ffooter%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%206379.svg?alt=media&token=15304992-da72-4006-912f-67192d7de437`}
                width={`9px`}
                margin={`0 10px`}
                cursor={`pointer`}
                onClick={() => {
                  viewInfoHandler();
                }}
              />
              <ATag
                width={`auto`}
                href={`https://www.youtube.com/channel/UC10KyXQWAUmyzgJUX_lk0Og`}
                target={`_blank`}
              >
                <Image
                  alt="icon"
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Ffooter%2F%E1%84%91%E1%85%A2%E1%84%89%E1%85%B3%2038276.svg?alt=media&token=77c6ca18-a72e-44e4-acfd-c4f770c687e0`}
                  width={`14px`}
                />
              </ATag>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </RsWrapper>
      <RsWrapper
        dr={width < 900 ? `column` : `row`}
        ju={`space-between`}
        al={`flex-start`}
        borderBottom={`1px solid ${Theme.darkGrey_C}`}
        padding={`0 0 20px`}
        paddingLeft={width < 900 && `0`}
        paddingRight={width < 900 && `0`}
      >
        <Wrapper width={width < 900 ? `38px` : `170px`} al={`flex-start`}>
          <Link to="/">
            <Image
              alt="logo"
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Flogo%2Flogo.png?alt=media&token=528e533c-0d1d-4277-b05f-6ee785d36294`}
              width={width < 900 ? `38px` : `auto`}
            />
          </Link>
        </Wrapper>
        <Wrapper
          width={width < 900 ? `100%` : `calc(50% - 170px)`}
          al={`flex-start`}
          color={Theme.greyTheme4_C}
        >
          <Text
            margin={width < 900 && `10px 0 0`}
            fontWeight={`500`}
            fontSize={width < 900 ? `10px` : `14px`}
          >
            COMXI Co., Ltd.
          </Text>
          <Wrapper
            dr={`row`}
            ju={`flex-start`}
            margin={`5px 0 0`}
            fontSize={width < 900 ? `8px` : `10px`}
          >
            <Text fontWeight={`500`} margin={width < 900 ? `0` : `0 5px 0 0`}>
              {fDatum && fDatum.getAllFooterInfo[0].title}
            </Text>
            <Text fontWeight={`300`}>
              {fDatum && fDatum.getAllFooterInfo[0].content}
            </Text>
          </Wrapper>
          <Wrapper
            dr={`row`}
            ju={`flex-start`}
            fontSize={width < 900 ? `8px` : `10px`}
            margin={`0 0 10px`}
          >
            <Text fontWeight={`500`} margin={width < 900 ? `0` : `0 5px 0 0`}>
              {fDatum && fDatum.getAllFooterInfo[1].title}
            </Text>
            <Text fontWeight={`300`}>
              {fDatum && fDatum.getAllFooterInfo[1].content}
            </Text>
          </Wrapper>
          <Wrapper
            dr={`row`}
            ju={`flex-start`}
            fontSize={width < 900 ? `8px` : `10px`}
          >
            <Text
              fontWeight={`500`}
              width={`40px`}
              margin={width < 900 ? `0` : `0 5px 0 0`}
            >
              {fDatum && fDatum.getAllFooterInfo[2].title}
            </Text>
            <Text fontWeight={`300`}>
              {fDatum && fDatum.getAllFooterInfo[2].content}
            </Text>
          </Wrapper>
          {/* <Wrapper
            dr={`row`}
            ju={`flex-start`}
            fontSize={width < 900 ? `8px` : `10px`}
          >
            <Text
              fontWeight={`500`}
              width={`40px`}
              margin={width < 900 ? `0` : `0 5px 0 0`}
            >
              {fDatum && fDatum.getAllFooterInfo[3].title}
            </Text>
            <Text fontWeight={`300`}>
              {fDatum && fDatum.getAllFooterInfo[3].content}
            </Text>
          </Wrapper> */}
          <Wrapper
            dr={`row`}
            ju={`flex-start`}
            fontSize={width < 900 ? `8px` : `10px`}
          >
            <Text
              fontWeight={`500`}
              width={`40px`}
              margin={width < 900 ? `0` : `0 5px 0 0`}
            >
              {fDatum && fDatum.getAllFooterInfo[4].title}
            </Text>
            <Text fontWeight={`300`}>
              {fDatum && fDatum.getAllFooterInfo[4].content}
            </Text>
          </Wrapper>
        </Wrapper>
        <Wrapper
          width={width < 900 ? `100%` : `calc(50% - 170px)`}
          al={`flex-start`}
          color={Theme.greyTheme4_C}
        >
          <Text
            fontWeight={`500`}
            fontSize={width < 900 ? `10px` : `14px`}
            margin={width < 900 && `20px 0 0`}
          >
            USA Office
          </Text>
          <Wrapper
            dr={`row`}
            ju={`flex-start`}
            margin={`5px 0 0`}
            fontSize={width < 900 ? `8px` : `10px`}
          >
            <Text fontWeight={`500`} margin={width < 900 ? `0` : `0 5px 0 0`}>
              {fDatum && fDatum.getAllFooterInfo[5].title}
            </Text>
            <Text fontWeight={`300`}>
              {fDatum && fDatum.getAllFooterInfo[5].content}
            </Text>
          </Wrapper>
          <Wrapper
            dr={`row`}
            ju={`flex-start`}
            fontSize={width < 900 ? `8px` : `10px`}
            margin={`0 0 10px`}
          >
            <Text fontWeight={`500`} margin={width < 900 ? `0` : `0 5px 0 0`}>
              {fDatum && fDatum.getAllFooterInfo[6].title}
            </Text>
            <Text fontWeight={`300`}>
              {fDatum && fDatum.getAllFooterInfo[6].content}
            </Text>
          </Wrapper>
          <Wrapper
            dr={`row`}
            ju={`flex-start`}
            fontSize={width < 900 ? `8px` : `10px`}
          >
            <Text
              fontWeight={`500`}
              width={`40px`}
              margin={width < 900 ? `0` : `0 5px 0 0`}
            >
              {fDatum && fDatum.getAllFooterInfo[7].title}
            </Text>
            <Text fontWeight={`300`}>
              {fDatum && fDatum.getAllFooterInfo[7].content}
            </Text>
          </Wrapper>
          <Wrapper
            dr={`row`}
            ju={`flex-start`}
            fontSize={width < 900 ? `8px` : `10px`}
          >
            <Text
              fontWeight={`500`}
              width={`40px`}
              margin={width < 900 ? `0` : `0 5px 0 0`}
            >
              {fDatum && fDatum.getAllFooterInfo[8].title}
            </Text>
            <Text fontWeight={`300`}>
              {fDatum && fDatum.getAllFooterInfo[8].content}
            </Text>
          </Wrapper>
        </Wrapper>
      </RsWrapper>
      <RsWrapper
        padding={`10px 0 0`}
        dr={`row`}
        ju={`space-beetween`}
        color={Theme.greyTheme4_C}
        paddingLeft={width < 900 && `0`}
        paddingRight={width < 900 && `0`}
      >
        <Wrapper
          width={width < 900 ? `auto` : `300px`}
          fontSize={width < 900 ? `8px` : `10px`}
          fontWeight={`300`}
          al={`flex-start`}
        >
          Copyright 2022 COMXI CO., LTD. All right reserved.
        </Wrapper>
        <Wrapper
          display={width < 900 ? `none` : `flex`}
          width={`calc(100% - 300px - 300px)`}
          fontSize={width < 900 ? `8px` : `10px`}
          color={Theme.greyTheme1_C}
          dr={`row`}
        >
          {/* <Text fontWeight={`300`} padding={`0 20px 0 0`}>
            Privacy Policy
          </Text>
          | */}
          <Text fontWeight={`300`} padding={`0 20px`}>
            <Link to="/sitemap">Site Map</Link>
          </Text>
          {/* |
          <Text fontWeight={`300`} padding={`0 0 0 20px`}>
            <Link to="/agreement">Terms of Use</Link>
          </Text> */}
        </Wrapper>
        <Wrapper
          width={width < 900 ? `auto` : `300px`}
          fontSize={width < 900 ? `8px` : `10px`}
          fontWeight={`300`}
          color={Theme.greyTheme1_C}
          al={`flex-end`}
        >
          Republic of Korea
        </Wrapper>
      </RsWrapper>
      <RsWrapper
        paddingLeft={width < 900 && `0`}
        paddingRight={width < 900 && `0`}
      >
        <Wrapper
          display={width < 900 ? `flex` : `none`}
          fontSize={`10px`}
          color={Theme.greyTheme1_C}
          dr={`row`}
          ju={`space-between`}
          margin={`10px 0 0`}
        >
          {/* <Text fontWeight={`300`} padding={`0 10px 0 0`}>
            Privacy Policy
          </Text>
          | */}
          <Text fontWeight={`300`} padding={`0 10px`}>
            <Link to="/sitemap">Site Map</Link>
          </Text>
          {/* |
          <Text fontWeight={`300`} padding={`0 0 0 10px`}>
            <Link to="/agreement">Terms of Use</Link>
          </Text> */}
        </Wrapper>
      </RsWrapper>

      <Modal
        title="알림"
        width={`200px`}
        visible={isModal}
        type={`info`}
        onOk={() => setIsModal(false)}
      >
        asd
      </Modal>
    </WholeWrapper>
  );
};

export default withResizeDetector(Footer);
