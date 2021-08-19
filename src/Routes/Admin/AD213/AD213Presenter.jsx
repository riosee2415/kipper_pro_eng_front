import React from "react";
import {
  WholeWrapper,
  TextInput,
  Wrapper,
  TableWrapper,
  TableHeadColumn,
  Content,
  ContentTitle,
  Textarea,
  CommonButton,
  Combo,
  ComboOption,
  GuideBox,
  GuideContent,
  Image,
  FileInput,
  FileLabel,
} from "../../../Components/AdminCommonComponents";
import { Title, Tabs } from "../Components";
import Fade from "react-reveal/Fade";
import CircularIndeterminate from "../../../Components/loading/CircularIndeterminate";
import styled from "styled-components";
import Theme from "../../../Styles/Theme";
import { FiAlertCircle, FiPlusCircle } from "react-icons/fi";
import FileProgress from "../../../Components/FileProgress";
import useTitle from "@4leaf.ysh/use-title";
import { Modal } from "antd";

const tabs = ["Location 리스트"];

export default ({
  currentTab,
  setCurrentTab,
  isLoading,
  fileUploadProgress,
  modalFlag,
  modalFlag2,
  titleInput,
  linkInput,
  titleUpset,
  linkUpset,
  //
  fileRef,
  //
  lDatum,
  //
  fileChangeHandler,
  modalHandler,
  modalHandler2,
  createLocationHandler,
  updateLocationHandler,
  deleteLocationHandler,
}) => {
  useTitle("ADMIN | Location 관리");

  return (
    <WholeWrapper al={`flex-start`} ju={`flex-start`}>
      <Fade right>
        <Title text="Location 관리" />
        <Tabs
          tabs={tabs}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
      </Fade>

      <Fade>
        {/* <Wrapper
          fontSize={`30px`}
          al={`flex-end`}
          margin={`0 0 10px`}
          color={Theme.update_B_C}
        >
          <FiPlusCircle onClick={modalHandler} />
        </Wrapper> */}
        <TableWrapper>
          <TableHeadColumn width={`10%`}>번호</TableHeadColumn>
          <TableHeadColumn width={`15%`}>타이틀</TableHeadColumn>
          <TableHeadColumn width={`65%`}>링크</TableHeadColumn>
          <TableHeadColumn width={`5%`}>수정</TableHeadColumn>
          <TableHeadColumn width={`5%`}>삭제</TableHeadColumn>
        </TableWrapper>

        <Wrapper
          height={`500px`}
          isBorder={true}
          isScroll={true}
          className="scroll"
          ju={`flex-start`}
        >
          {lDatum ? (
            lDatum.length === 0 ? (
              <Wrapper dr={`row`} isSvg={true} margin={`10px 0`}>
                <FiAlertCircle /> 조회된 데이터가 없습니다.
              </Wrapper>
            ) : (
              lDatum.map((data, idx) => {
                return (
                  <TableWrapper isData={true} key={idx}>
                    <TableHeadColumn isData={true} width={`10%`}>
                      {idx + 1}
                    </TableHeadColumn>
                    <TableHeadColumn isData={true} width={`15%`}>
                      {data.title}
                    </TableHeadColumn>
                    <TableHeadColumn isData={true} width={`65%`}>
                      {data.link}
                    </TableHeadColumn>
                    <TableHeadColumn isData={true} width={`5%`}>
                      <CommonButton
                        width={`100%`}
                        height={`25px`}
                        kindOf={`update`}
                        onClick={() => {
                          modalHandler2(data._id, data.title, data.link);
                        }}
                      >
                        수정
                      </CommonButton>
                    </TableHeadColumn>
                    <TableHeadColumn isData={true} width={`5%`}>
                      <CommonButton
                        width={`100%`}
                        height={`25px`}
                        kindOf={`delete`}
                        onClick={() => {
                          deleteLocationHandler(data._id);
                        }}
                      >
                        삭제
                      </CommonButton>
                    </TableHeadColumn>
                  </TableWrapper>
                );
              })
            )
          ) : (
            <Wrapper></Wrapper>
          )}
        </Wrapper>
      </Fade>
      {/* 
      <Modal
        title="Location LINK 추가"
        visible={modalFlag}
        onOk={() => {
          createLocationHandler();
        }}
        onCancel={() => {
          modalHandler();
        }}
      >
        <Wrapper al={`flex-start`} margin={`0 0 10px`}>
          타이틀
        </Wrapper>
        <TextInput {...titleInput} />
        <Wrapper al={`flex-start`} margin={`10px 0`}>
          Location LINK
        </Wrapper>
        <TextInput {...linkInput} />
      </Modal> */}

      <Modal
        title="Location LINK 수정"
        visible={modalFlag2}
        onOk={() => {
          updateLocationHandler();
        }}
        onCancel={() => {
          modalHandler2();
        }}
      >
        <Wrapper al={`flex-start`} margin={`0 0 10px`}>
          타이틀
        </Wrapper>
        <TextInput readOnly={true} {...titleUpset} />
        <Wrapper al={`flex-start`} margin={`10px 0`}>
          링크
        </Wrapper>
        <TextInput {...linkUpset} />
      </Modal>
    </WholeWrapper>
  );
};
