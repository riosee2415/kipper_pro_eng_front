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
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { withResizeDetector } from "react-resize-detector";
import Drawer from "@material-ui/core/Drawer";
import Bounce from "react-reveal/Bounce";
import { essmMenus } from "./clientMenus";
import Theme from "../../Styles/Theme";
import { toast } from "react-toastify";

const OnlyHeadAbsoluteWrapper = styled.div`
  display: flex;
  opacity: 0;
  visibility: hidden;
  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height};
  background: ${(props) => props.theme.subTheme_C};
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

  & .Header__menu {
    font-weight: 300;
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
  width: ${(props) => props.width || `90px`};
  text-align: left;

  & a {
    width: 100%;
  }

  @media (max-width: 800px) {
    width: auto;
  }
`;

const LogoImg = styled.img`
  width: 47px;

  @media (max-width: 800px) {
    width: 38px;
  }
`;

const ToggleBtn = styled.button`
  width: 57px;
  height: 22px;
  color: ${(props) => props.theme.white_C};
  background: rgb(41, 154, 223);
  border-radius: 20px;
  font-size: 14px;

  &:hover {
    background: ${(props) => props.theme.subTheme_C};
  }

  @media (max-width: 800px) {
    width: auto;
    padding: 0 10px;
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
  background: ${(props) => props.theme.subTheme_C};
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

const Header = ({ location, width, match }) => {
  //state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState(null);
  const [reload, setReload] = useState(false);

  const [loginUserKey, setLoginUserKey] = useState(
    sessionStorage.getItem("XKQUSLAHDYQUWLXM")
  );

  const [currentIndex, setCurrentIndex] = useState(99);

  //handler
  const mobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const mobileSubMenuToggle = (idx, menu) => {
    setCurrentIndex(idx);
  };

  //useEffect
  useEffect(() => {
    setReload(!reload);
  }, [mobileSubMenu]);

  return (
    <HeaderWrapper
      isFixed={true}
      top={`0px`}
      left={`0px`}
      bgColor={Theme.subTheme_C}
    >
      <Wrapper height={`100%`}>
        <H_Wrapper dr={`row`} margin={`0 auto`}>
          <Wrapper
            height={`100%`}
            dr={`row`}
            al={`center`}
            ju={`space-between`}
            isMenu={true}
          >
            <Logo>
              <Link to="/essential">
                <LogoImg
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Flogo%2Flogo.svg?alt=media&token=1956886f-e038-4305-a4c6-8447afd8ee2a`}
                  alt="LOGO"
                />
              </Link>
            </Logo>

            <Wrapper width={`auto`} dr={`row`}>
              {essmMenus &&
                essmMenus.map((menu, activeIndex) => {
                  return (
                    <Fragment key={menu.menuName}>
                      <Wrapper
                        width={`auto`}
                        fontSize={`14px`}
                        margin={`0 60px`}
                        header={true}
                        color={Theme.white_C}
                      >
                        <ATag
                          className={
                            location.pathname.includes(`${menu.menuLink}`)
                              ? "Header__menu active"
                              : "Header__menu"
                          }
                          href={`${menu.menuLink}`}
                        >
                          <Wrapper width={`140px`} al={`flex-start`}>
                            {menu.menuName}
                          </Wrapper>
                        </ATag>
                      </Wrapper>
                    </Fragment>
                  );
                })}
            </Wrapper>

            <Wrapper width={`90px`} dr={`row`} ju={`flex-end`}>
              <Link to="/pro">
                <ToggleBtn>PRO</ToggleBtn>
              </Link>
              <ATag
                href={`https://schoolhealing2.co.kr/#/`}
                target="_blank"
                width={`auto`}
              >
                <Image
                  margin={`0 0 0 10px`}
                  width={`auto`}
                  alt="lan"
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Ficon%2F%E1%84%91%E1%85%A2%E1%84%89%E1%85%B3%20416.svg?alt=media&token=6a0d8888-77bf-4027-b540-99ee0d9a1a8e`}
                />
              </ATag>
            </Wrapper>
          </Wrapper>
        </H_Wrapper>
      </Wrapper>
      <MobileHeader>
        <Wrapper dr={`row`} ju={`space-between`}>
          <Wrapper width={`100px`} al={`flex-start`}>
            {mobileMenuOpen ? (
              <AiOutlineClose onClick={mobileMenuToggle} />
            ) : (
              <AiOutlineMenu onClick={mobileMenuToggle} />
            )}
          </Wrapper>
          <Logo>
            <Link to="/essential">
              <LogoImg
                alt="logo"
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Flogo%2Flogo.svg?alt=media&token=1956886f-e038-4305-a4c6-8447afd8ee2a`}
              />
            </Link>
          </Logo>
          <Wrapper width={`100px`} dr={`row`} ju={`flex-end`}>
            <Link to="/pro">
              <ToggleBtn>PRO</ToggleBtn>
            </Link>
            <ATag
              href={`https://schoolhealing2.co.kr/#/`}
              target="_blank"
              width={`auto`}
            >
              <Image
                margin={`0 0 0 10px`}
                width={`auto`}
                alt="lan"
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Ficon%2F%E1%84%91%E1%85%A2%E1%84%89%E1%85%B3%20416.svg?alt=media&token=6a0d8888-77bf-4027-b540-99ee0d9a1a8e`}
              />
            </ATag>
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
              <Link to="/essential">
                <LogoImg
                  alt="logo"
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/Keeper-ES%2Fassets%2Fimages%2Flogo%2Flogo.svg?alt=media&token=1956886f-e038-4305-a4c6-8447afd8ee2a`}
                />
              </Link>
              <Wrapper width={`14px`}></Wrapper>
            </Wrapper>

            <Wrapper margin={`10px 0 0`}>
              {essmMenus &&
                essmMenus.map((menu, activeIndex) => {
                  return (
                    <Fragment key={menu.menuName}>
                      <ToggleSubMenu al={`flex-start`} padding={`0px 35px`}>
                        <Wrapper
                          al={`flex-start`}
                          borderBottom={`1px solid #fff`}
                          padding={`15px 0`}
                          fontSize={`12px !important`}
                        >
                          <ATag
                            width={`auto`}
                            className={
                              activeIndex === parseInt(match.params.active)
                                ? "Header__menu active"
                                : "Header__menu"
                            }
                            href={`${menu.menuLink}`}
                          >
                            {menu.menuName}
                          </ATag>
                        </Wrapper>
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
