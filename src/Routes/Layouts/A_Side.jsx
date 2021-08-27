import React, { useState } from "react";
import {
  WholeWrapper,
  SideMenu,
  SubMenus,
  SubMenu,
} from "../../Components/AdminCommonComponents";
import { Image, Wrapper, Text } from "../../Components/CommonComponents";
import { allMenus } from "./adminMenus";
import { MdExpandMore } from "react-icons/md";
import Flip from "react-reveal/Flip";
import { Link } from "react-router-dom";
import styled from "styled-components";

const A_Side = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const _openSubMenu = (event, tab) => {
    setCurrentTab(tab);
  };
  return (
    <WholeWrapper padding={`20px 0`}>
      <Image
        alt="logo"
        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Flogo%2Fpro-logo.png?alt=media&token=1d7babc2-4c9d-4923-b9e2-b46f8967ca07`}
        width={`80px`}
        margin={`0 0 20px`}
      />
      {allMenus.map((menu, idx) => {
        return (
          <Wrapper
            al={`flex-start`}
            ju={`flex-start`}
            key={idx}
            borderBottom={` 1px solid rgb(64, 66, 86)`}
          >
            {idx === 0 ? (
              <Link to={menu.link} className={`Atag`}>
                <SideMenu
                  onClick={(event) => _openSubMenu(event, idx)}
                  isActive={idx === currentTab}
                >
                  {menu.menuName}
                </SideMenu>
              </Link>
            ) : idx === 1 ? (
              <Link to={menu.link} className={`Atag`}>
                <SideMenu>{menu.menuName}</SideMenu>
              </Link>
            ) : idx === 2 ? (
              <Link to={menu.link} className={`Atag`}>
                <SideMenu>{menu.menuName}</SideMenu>
              </Link>
            ) : idx === 3 ? (
              <Link to={menu.link} className={`Atag`}>
                <SideMenu>{menu.menuName}</SideMenu>
              </Link>
            ) : idx === 4 ? (
              <Link to={menu.link} className={`Atag`}>
                <SideMenu>{menu.menuName}</SideMenu>
              </Link>
            ) : idx === 5 ? (
              <Link to={menu.link} className={`Atag`}>
                <SideMenu>{menu.menuName}</SideMenu>
              </Link>
            ) : idx === 6 ? (
              <Link to={menu.link} className={`Atag`}>
                <SideMenu>{menu.menuName}</SideMenu>
              </Link>
            ) : (
              <>
                <SideMenu
                  onClick={(event) => _openSubMenu(event, idx)}
                  isActive={idx === currentTab}
                >
                  {menu.menuName}
                  <MdExpandMore />
                </SideMenu>
                <SubMenus margin={`5px 10px`} isActive={idx === currentTab}>
                  {menu.subMenu?.map((sub, idx) => {
                    return (
                      <Flip key={idx} delay={idx * 80} right>
                        <Link to={sub.subMenuLink}>
                          <SubMenu>{sub.subMenuName}</SubMenu>
                        </Link>
                      </Flip>
                    );
                  })}
                </SubMenus>
              </>
            )}
          </Wrapper>
        );
      })}
    </WholeWrapper>
  );
};

export default A_Side;
