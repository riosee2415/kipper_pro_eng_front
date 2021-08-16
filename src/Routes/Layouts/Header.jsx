import React, { useState, useEffect, Fragment } from "react";
import {
  Wrapper,
  RsWrapper,
  SpanText,
  Text,
  Image,
  ATag,
} from "../../Components/CommonComponents";
import { Link, withRouter, NavLink } from "react-router-dom";
import styled, { ThemeContext } from "styled-components";
import { header, header2 } from "../../Components/AnimationCommon";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { withResizeDetector } from "react-resize-detector";
import Drawer from "@material-ui/core/Drawer";
import Bounce from "react-reveal/Bounce";
import { menus } from "./clientMenus";
import Theme from "../../Styles/Theme";
import { toast } from "react-toastify";

const OnlyHeadAbsoluteWrapper = styled.div`
  display: flex;
  opacity: 0;
  visibility: hidden;
  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height};
  background: ${(props) => props.theme.black_C};
  font-size: 14px;
  flex-direction: ${(props) => props.dr || `column`};
  align-items: ${(props) => props.al || `center`};
  justify-content: ${(props) => props.ju || `center`};

  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  transition: 0.2s;
  animation: ${header2} 0.3s forwards;
`;

const HeaderWrapper = styled.div`
  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height || `44px`};
  color: ${(props) => props.theme.white_C};
  display: flex;
  background: ${(props) => props.bgColor};
  border-bottom: ${(props) => props.borderBottom};
  color: ${(props) => props.color};
  flex-direction: ${(props) => props.dr || `column`};
  align-items: ${(props) => props.al || `center`};
  justify-content: ${(props) => props.ju || `center`};
  z-index: 1000;
  position: ${(props) => (props.isRelative ? `relative` : ``)};
  position: ${(props) => (props.isFixed ? `fixed` : ``)};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  transition: 0.4s;
`;

const H_Wrapper = styled.div`
  width: 1230px;
  height: ${(props) => props.height || `100%`};
  color: ${(props) => props.theme.black_C};
  display: flex;
  background: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  flex-direction: ${(props) => props.dr || `column`};
  align-items: ${(props) => props.al || `center`};
  justify-content: ${(props) => props.ju || `center`};
  position: ${(props) => (props.isAbsolute ? `absolute` : ``)};
  position: ${(props) => (props.isRelative ? `relative` : ``)};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  transition: ${(props) => props.theme.transition};

  &:hover ${OnlyHeadAbsoluteWrapper} {
    opacity: 1;
    visibility: visible;
    animation: ${header} 0.3s forwards;
  }

  & .Header__menu:hover {
    font-weight: 600;
    color: ${(props) => props.theme.white_C};
  }

  & .Header__menu.active {
    font-weight: 600;
  }

  @media (max-width: 1100px) {
    width: 900px;
  }
  @media (max-width: 900px) {
    width: 800px;
  }
  @media (max-width: 800px) {
    width: 700px;
    display: none;
  }
`;

const Logo = styled.div`
  width: ${(props) => props.width || `120px`};
  text-align: left;

  & a {
    width: 100%;
  }

  @media (max-width: 800px) {
    width: auto;
  }
`;

const LogoImg = styled.img`
  width: 52px;

  @media (max-width: 800px) {
    width: 38px;
  }
`;

const ToggleBtn = styled.button`
  width: 57px;
  height: 22px;
  color: ${(props) => props.theme.white_C};
  background: rgb(69, 69, 69);
  border-radius: 20px;
  font-size: 14px;

  &:hover {
    background: rgb(20, 131, 199);
  }

  @media (max-width: 800px) {
    width: 49px;
  }
`;

const MenuItem = styled.h3`
  position: relative;
  color: ${(props) => props.theme.white_C};
  transition: ${(props) => props.theme.transition};
  margin-bottom: 20px;

  &:hover {
    font-weight: 700;
  }
`;

const MobileHeader = styled.div`
  width: 100%;
  padding: 10px 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  display: none;

  @media (max-width: 800px) {
    display: flex;
  }

  & svg {
    cursor: pointer;
    font-size: 20px;
  }
`;

const MobileMenu = styled.div`
  width: 100%;
  height: 900px;
  background: ${(props) => props.theme.black_C};
  color: ${(props) => props.theme.white_C};
  z-index: 10000;

  & svg {
    cursor: pointer;
    font-size: 20px;
  }

  & .react-reveal {
    width: 100%;
  }
`;

const ToggleSubMenu = styled(Wrapper)`
  &:last-child div {
    border-bottom: none;
  }
`;

const Header = ({ history, width, match }) => {
  //state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState(null);
  const [reload, setReload] = useState(false);
  const [subToggle, setSubToggle] = useState([]);

  const [loginUserKey, setLoginUserKey] = useState(
    sessionStorage.getItem("DLJHQSUDCJSKALDJ")
  );

  const [currentIndex, setCurrentIndex] = useState(99);

  //handler

  const mobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const mobileSubMenuToggle = () => {
    setMobileSubMenuOpen(!mobileSubMenuOpen);
  };

  const logoutUserHandler = () => {
    sessionStorage.removeItem("DLJHQSUDCJSKALDJ");
    setLoginUserKey("");
    setMobileMenuOpen(false);
    history.push("/pro");
  };

  // 서브 메뉴 업데이트
  const updateSubMenuHandler = (index) => {
    const tempArr = subToggle.map((data, idx) => {
      return index === idx ? !data : data;
    });

    setSubToggle(tempArr);
  };

  //useEffect
  // 서브 메뉴 배열 생성
  useEffect(() => {
    const tempArr = [];
    menus.map((_, idx) => {
      tempArr.push(false);
    });

    setSubToggle(tempArr);
  }, []);

  useEffect(() => {
    setReload(!reload);
  }, [mobileSubMenu]);

  return (
    <HeaderWrapper
      isFixed={true}
      top={`0px`}
      left={`0px`}
      bgColor={Theme.black_C}
    >
      <Wrapper height={`100%`}>
        <H_Wrapper dr={`row`} margin={`0 auto`}>
          <Wrapper
            height={`100%`}
            dr={`row`}
            ju={`space-between`}
            isMenu={true}
          >
            <Logo>
              <Link to="/pro">
                <LogoImg
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Flogo%2Fpro-logo.png?alt=media&token=1d7babc2-4c9d-4923-b9e2-b46f8967ca07`}
                  alt="LOGO"
                />
              </Link>
            </Logo>

            <Wrapper width={`auto`} dr={`row`}>
              {menus &&
                menus.map((menu, activeIndex) => {
                  return (
                    <Fragment key={menu.menuName}>
                      <Wrapper
                        width={`auto`}
                        fontSize={`14px`}
                        margin={`0 40px`}
                        header={true}
                        color={Theme.white_C}
                      >
                        <Link
                          className={
                            activeIndex === parseInt(match.params.active)
                              ? "Header__menu active"
                              : "Header__menu"
                          }
                          to={`${menu.menuLink}`}
                        >
                          <Wrapper width={`155px`} al={`flex-start`}>
                            {menu.menuName}
                          </Wrapper>
                        </Link>
                        <OnlyHeadAbsoluteWrapper
                          top={`44px`}
                          left={`0`}
                          padding={`5px 0px`}
                        >
                          <RsWrapper
                            dr={`row`}
                            al={`flex-start`}
                            ju={`space-between`}
                            wrap={`inherit`}
                          >
                            <Wrapper width={`90px`}></Wrapper>

                            <Wrapper
                              width={`auto`}
                              dr={`row`}
                              al={`flex-start`}
                            >
                              {menus &&
                                menus.map((menu, menuIndex) => {
                                  return (
                                    <Wrapper
                                      key={menuIndex}
                                      width={`auto`}
                                      fontSize={`11px`}
                                      padding={`15px 0px 0px`}
                                      margin={`0 40px`}
                                      fontWeight={`300`}
                                      header={true}
                                    >
                                      {menu.subMenus.map((sub, idx) => {
                                        return (
                                          <Link
                                            key={idx}
                                            to={`${sub.subMenuLink}`}
                                          >
                                            <Wrapper
                                              width={`155px`}
                                              al={`flex-start`}
                                            >
                                              <MenuItem>
                                                {sub.subMenuName}
                                              </MenuItem>
                                            </Wrapper>
                                          </Link>
                                        );
                                      })}
                                    </Wrapper>
                                  );
                                })}
                            </Wrapper>
                            <Wrapper width={`90px`}></Wrapper>
                          </RsWrapper>
                        </OnlyHeadAbsoluteWrapper>
                      </Wrapper>
                    </Fragment>
                  );
                })}
            </Wrapper>

            <Wrapper width={`120px`} dr={`row`} ju={`flex-end`}>
              <Link to="/essential">
                <ToggleBtn>ESS</ToggleBtn>
              </Link>
              <ATag
                target={`_blank`}
                href={`https://schoolhealing3.co.kr/#/pro`}
                width={`auto`}
              >
                <Image
                  margin={`0 0 0 10px`}
                  width={`auto`}
                  alt="lan"
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Ficon%2F%E1%84%91%E1%85%A2%E1%84%89%E1%85%B3%20416.svg?alt=media&token=6a0d8888-77bf-4027-b540-99ee0d9a1a8e`}
                />
              </ATag>

              {loginUserKey ? (
                <Wrapper
                  width={`auto`}
                  onClick={logoutUserHandler}
                  cursor={`pointer`}
                >
                  <Image
                    margin={`0 0 0 10px`}
                    width={`23px`}
                    alt="lan"
                    src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Ficon%2Flogout.png?alt=media&token=dee7b062-cafa-4bb4-92f1-d03ac259476b`}
                  />
                </Wrapper>
              ) : (
                <Link to="/login">
                  <Image
                    margin={`0 0 0 10px`}
                    width={`auto`}
                    alt="lan"
                    src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Ficon%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%20561.svg?alt=media&token=fbb179f2-a819-4bc1-81be-cf6b2023f465`}
                  />
                </Link>
              )}
            </Wrapper>
          </Wrapper>
        </H_Wrapper>
      </Wrapper>
      <MobileHeader>
        <Wrapper dr={`row`} ju={`space-between`}>
          <Wrapper width={`120px`} al={`flex-start`}>
            {mobileMenuOpen ? (
              <AiOutlineClose onClick={mobileMenuToggle} />
            ) : (
              <AiOutlineMenu onClick={mobileMenuToggle} />
            )}
          </Wrapper>
          <Logo>
            <Link to="/pro">
              <LogoImg
                alt="logo"
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Flogo%2Fpro-logo.png?alt=media&token=1d7babc2-4c9d-4923-b9e2-b46f8967ca07`}
              />
            </Link>
          </Logo>
          <Wrapper width={`120px`} dr={`row`} ju={`flex-end`}>
            <Link to="/essential">
              <ToggleBtn>ESS</ToggleBtn>
            </Link>
            <ATag
              target={`_blank`}
              href={`https://schoolhealing3.co.kr/#/pro`}
              width={`auto`}
            >
              <Image
                margin={`0 0 0 10px`}
                width={`auto`}
                alt="lan"
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Ficon%2F%E1%84%91%E1%85%A2%E1%84%89%E1%85%B3%20416.svg?alt=media&token=6a0d8888-77bf-4027-b540-99ee0d9a1a8e`}
              />
            </ATag>
            {loginUserKey ? (
              <Wrapper width={`auto`} onClick={logoutUserHandler}>
                <Image
                  margin={`0 0 0 10px`}
                  width={`23px`}
                  alt="lan"
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Ficon%2Flogout.png?alt=media&token=dee7b062-cafa-4bb4-92f1-d03ac259476b`}
                />
              </Wrapper>
            ) : (
              <Link to="/login">
                <Image
                  margin={`0 0 0 10px`}
                  width={`auto`}
                  alt="lan"
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Ficon%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%20561.svg?alt=media&token=fbb179f2-a819-4bc1-81be-cf6b2023f465`}
                />
              </Link>
            )}
          </Wrapper>
        </Wrapper>

        <Drawer open={mobileMenuOpen} anchor={`top`}>
          <MobileMenu>
            <Wrapper
              height={`50px`}
              dr={`row`}
              ju={`space-between`}
              padding={`10px`}
              borderBottom={`1px solid ${Theme.white_C}`}
            >
              <AiOutlineClose onClick={mobileMenuToggle} />
              <Link to="/main">
                <LogoImg
                  alt="logo"
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Flogo%2Fpro-logo.png?alt=media&token=1d7babc2-4c9d-4923-b9e2-b46f8967ca07`}
                />
              </Link>
              <Wrapper width={`14px`}></Wrapper>
            </Wrapper>

            <Wrapper margin={`10px 0 0`}>
              {menus &&
                menus.map((menu, activeIndex) => {
                  return (
                    <Fragment key={menu.menuName}>
                      <ToggleSubMenu al={`flex-start`} padding={`0px 35px`}>
                        <Wrapper
                          dr={`row`}
                          ju={`space-between`}
                          borderBottom={`1px solid ${Theme.white_C}`}
                          padding={`15px 0`}
                          fontSize={`12px !important`}
                          margin={subToggle[activeIndex] && `0 0 15px`}
                          onClick={() => updateSubMenuHandler(activeIndex)}
                        >
                          {menu.menuName}
                          {subToggle[activeIndex] ? (
                            <AiOutlineMinus />
                          ) : (
                            <AiOutlinePlus />
                          )}
                        </Wrapper>

                        {subToggle[activeIndex] && (
                          <Wrapper al={`flex-start`}>
                            {menu.subMenus.map((data, idx) => {
                              return (
                                <Bounce key={idx} delay={idx * 100}>
                                  <Link to={`${data.subMenuLink}`}>
                                    <Wrapper
                                      fontSize={`11px`}
                                      color={`rgb(161, 161, 166)`}
                                      al={`flex-start`}
                                      padding={`0 0 20px`}
                                    >
                                      {data.subMenuName}
                                    </Wrapper>
                                  </Link>
                                </Bounce>
                              );
                            })}
                          </Wrapper>
                        )}
                      </ToggleSubMenu>
                    </Fragment>
                  );
                })}
            </Wrapper>
          </MobileMenu>
        </Drawer>
      </MobileHeader>
    </HeaderWrapper>
  );
};

export default withResizeDetector(withRouter(Header));
