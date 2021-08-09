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

const Search = styled.label`
  width: 100px;
  height: 25px;
  padding: 5px;
  font-size: 14.5px;
  transition: 0.5s;
  border: 1px solid ${(props) => props.theme.basicTheme_C};
  border-radius: 4px;
  margin: 3px 0 0 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${(props) => props.theme.basicTheme_C};
    color: ${(props) => props.theme.white_C};
  }
`;

const tabs = ["카탈로그 관리"];

export default ({
  currentTab,
  setCurrentTab,
  isLoading,
  fileUploadProgress,
  modalFlag,
  modalFlag2,
  titleInput,
  filePathInput,
  fileNameInput,
  titleUpset,
  filePathUpset,
  fileNameUpset,
  //
  fileRef,
  //
  cDatum,
  //
  fileChangeHandler1,
  fileChangeHandler2,
  modalHandler,
  modalHandler2,
  createCatalogueHandler,
  updateCatalogueHandler,
  deleteCatalogueHandler,
}) => {
  useTitle("ADMIN | 자료실 관리");

  return (
    <WholeWrapper al={`flex-start`} ju={`flex-start`}>
      <Fade right>
        <Title text="자료실 관리" />
        <Tabs
          tabs={tabs}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
      </Fade>

      <Wrapper margin={`10px 0px`}>
        <GuideBox padding={`5px`}>
          <GuideContent padding={`5px`}>
            등록된 데이터는 실시간으로 반영됩니다.
          </GuideContent>
          <GuideContent padding={`5px 5px 0px 5px`}>
            삭제된 데이터는 복구가 불가능하오니 유의하시기 바랍니다.
          </GuideContent>
        </GuideBox>
      </Wrapper>

      <Fade>
        <Wrapper
          fontSize={`30px`}
          al={`flex-end`}
          margin={`0 0 10px`}
          color={Theme.update_B_C}
        >
          <FiPlusCircle onClick={modalHandler} />
        </Wrapper>
        <TableWrapper>
          <TableHeadColumn width={`10%`}>번호</TableHeadColumn>
          <TableHeadColumn width={`50%`}>타이틀</TableHeadColumn>
          <TableHeadColumn width={`30%`}>파일명</TableHeadColumn>
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
          {cDatum ? (
            cDatum.length === 0 ? (
              <Wrapper dr={`row`} isSvg={true} margin={`10px 0`}>
                <FiAlertCircle /> 조회된 데이터가 없습니다.
              </Wrapper>
            ) : (
              cDatum.map((data, idx) => {
                return (
                  <TableWrapper isData={true} key={idx}>
                    <TableHeadColumn isData={true} width={`10%`}>
                      {idx + 1}
                    </TableHeadColumn>
                    <TableHeadColumn isData={true} width={`50%`}>
                      {data.title}
                    </TableHeadColumn>
                    <TableHeadColumn isData={true} width={`30%`}>
                      {data.fileOriginName}
                    </TableHeadColumn>

                    <TableHeadColumn isData={true} width={`5%`}>
                      <CommonButton
                        width={`100%`}
                        height={`25px`}
                        kindOf={`update`}
                        onClick={() => {
                          modalHandler2(
                            data._id,
                            data.title,
                            data.filePath,
                            data.fileOriginName
                          );
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
                          deleteCatalogueHandler(data._id);
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

      <Modal
        title="카탈로그 추가"
        visible={modalFlag}
        onOk={() => {
          createCatalogueHandler();
        }}
        onCancel={() => {
          modalHandler();
        }}
      >
        <Wrapper al={`flex-start`} margin={`0 0 10px`}>
          타이틀
        </Wrapper>
        <TextInput {...titleInput} />
        <Wrapper al={`flex-start`} margin={`0 0 10px`}>
          첨부파일
        </Wrapper>
        <Wrapper ju={`flex-start`} dr={`row`}>
          <FileInput
            id="file-js"
            type="file"
            onChange={(e) => fileChangeHandler1(e)}
          />
          <TextInput
            type="text"
            width={`370px`}
            height={`25px`}
            margin={`3px 0px 0px 0px`}
            {...fileNameInput}
          />
          {isLoading ? (
            <CircularIndeterminate />
          ) : (
            <Search htmlFor={`file-js`}>찾아보기</Search>
          )}
        </Wrapper>
      </Modal>

      <Modal
        title="SNS LINK 수정"
        visible={modalFlag2}
        onOk={() => {
          updateCatalogueHandler();
        }}
        onCancel={() => {
          modalHandler2();
        }}
      >
        <Wrapper al={`flex-start`} margin={`0 0 10px`}>
          타이틀
        </Wrapper>
        <TextInput {...titleUpset} />
        <Wrapper al={`flex-start`} margin={`0 0 10px`}>
          첨부파일
        </Wrapper>
        <Wrapper ju={`flex-start`} dr={`row`}>
          <FileInput
            id="file-js"
            type="file"
            onChange={(e) => fileChangeHandler2(e)}
          />
          <TextInput
            type="text"
            width={`370px`}
            height={`25px`}
            margin={`3px 0px 0px 0px`}
            {...fileNameUpset}
          />
          {isLoading ? (
            <CircularIndeterminate />
          ) : (
            <Search htmlFor={`file-js`}>찾아보기</Search>
          )}
        </Wrapper>
      </Modal>
    </WholeWrapper>
  );
};
