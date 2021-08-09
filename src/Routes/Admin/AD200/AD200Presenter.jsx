import React from "react";
import {
  WholeWrapper,
  Wrapper,
  TableHeadColumn,
  TableWrapper,
  Content,
  FileInput,
  FileLabel,
  InputContent,
  TextInput,
  CommonButton,
  GuideBox,
  GuideContent,
  Image,
  ComboOption,
  Textarea,
  Combo,
} from "../../../Components/AdminCommonComponents";
import { Title, Tabs } from "../Components";
import Fade from "react-reveal/Fade";
import styled from "styled-components";
import CircularIndeterminate from "../../../Components/loading/CircularIndeterminate";
import useTitle from "@4leaf.ysh/use-title";
import Editor from "../../../Components/editor/Editor.jsx";
import FileProgress from "../../../Components/FileProgress";

const tabs = ["수상내역 등록"];

const ImgBox = styled(Wrapper)`
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center center;
`;

export default ({
  currentTab,
  setCurrentTab,
  isLoading,
  fileRef,
  fileUploadProgress,
  //
  currentThumbnail,
  currentTitle,
  currentType,
  //
  fileChangeHandler,
  createSignHandler,
}) => {
  useTitle("ADMIN | 수상내역 관리");

  return (
    <WholeWrapper al={`flex-start`} ju={`flex-start`}>
      <Fade right>
        <Title text="수상내역 관리" />
        <Tabs
          tabs={tabs}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
      </Fade>

      <Wrapper dr={`row`} al={`center`} ju={`center`}>
        <Wrapper margin={`0px 10px 0px 0px`}>
          <TableWrapper>
            <TableHeadColumn width={`100%`}>
              수상내역 이미지 정보
            </TableHeadColumn>
          </TableWrapper>

          <Wrapper
            height={`680px`}
            isBorder={true}
            padding={`15px`}
            ju={`flex-start`}
          >
            <GuideBox margin={`0px 0px 40px 0px`}>
              <GuideContent padding={`5px`}>
                둥록되는 데이터는 실시간으로 반영 됩니다.
              </GuideContent>
              <GuideContent padding={`5px`}>
                아미지 비율이 상이할 경우 화면에 비정상적으로 보일 수 있습니다.
              </GuideContent>
            </GuideBox>
            <Wrapper width={`500px`} dr={`row`} margin={`0px 70px 10px 0px`}>
              <InputContent>타이틀</InputContent>
              <Textarea height={`72px`} {...currentTitle} type="text" />
            </Wrapper>

            <Wrapper width={`500px`} dr={`row`} margin={`0px 70px 10px 0px`}>
              <InputContent>타입</InputContent>
              <Combo {...currentType} width={`500px`}>
                <ComboOption value={``}>--전체--</ComboOption>
                <ComboOption value={`Certification`}>Certification</ComboOption>
                <ComboOption value={`Trademark`}>Trademark</ComboOption>
              </Combo>
            </Wrapper>

            <Content margin={`0px 0px 20px 0px`}>이미지</Content>
            <Image
              src={currentThumbnail}
              width={`350px`}
              height={`350px`}
              isBorder={true}
              margin={`0px 0px 5px 0px`}
            />
            <FileInput
              id="file-js"
              type="file"
              accept="image/jpeg,image/gif,image/png"
              onChange={fileChangeHandler}
              ref={fileRef}
            />

            {isLoading ? (
              <Wrapper>
                {fileUploadProgress.value && (
                  <FileProgress
                    variant="determinate"
                    value={fileUploadProgress.value}
                  />
                )}
              </Wrapper>
            ) : (
              <FileLabel
                width={`350px`}
                htmlFor={`file-js`}
                margin={`0px 0px 55px 0px`}
              >
                IMAGE UPLOAD
              </FileLabel>
            )}
          </Wrapper>
        </Wrapper>
      </Wrapper>

      <Wrapper al={`flex-end`} ju={`flex-end`} margin={`20px 0px`}>
        <CommonButton kindOf={`create`} onClick={createSignHandler}>
          수상내역 등록
        </CommonButton>
      </Wrapper>
    </WholeWrapper>
  );
};
