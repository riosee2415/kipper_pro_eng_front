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
import useTitle from "@4leaf.ysh/use-title";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { FiAlertCircle } from "react-icons/fi";
import Editor from "../../../Components/editor/Editor.jsx";
import FileProgress from "../../../Components/FileProgress";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FieldsSet = styled(Wrapper)`
  background-color: ${(props) => props.theme.check_B_C};
  color: ${(props) => props.theme.white_C};
  border-radius: ${(props) => props.theme.radius};
  font-size: 14px;
  font-weight: 600;
  height: 26px;
`;

const DataGuideWrapper = styled(Wrapper)`
  width: 240px;
  height: ${(props) => props.height || `30px`};
  border-bottom: 1px solid ${(props) => props.theme.lightGrey_C};
  font-size: 13px;
  font-weight: 600;
  align-items: flex-start;
  padding: 0px 20px;
  background-color: rgba(0, 10, 100, 0.1);
`;

const DataWrapper = styled(Wrapper)`
  height: ${(props) => props.height || `30px`};
  border-bottom: 1px solid ${(props) => props.theme.lightGrey_C};
  align-items: flex-start;
  padding: 0px 20px;
`;

export default ({
  currentTab,
  setCurrentTab,
  isLoading,
  editContent,
  setEditContent,
  currentTitle,
  currentLink,
  currentThumbnail,
  fileUploadProgress,
  innerImageSelectHandler,
  removeInnerImageHandler,
  innerImageList,
  //
  fileRef,
  //
  fileChangeHandlerThumbnail,
  registerExhibition,
  moveListExhibitionPage,
}) => {
  useTitle("ADMIN | EXHIBITION 등록");

  return (
    <WholeWrapper al={`flex-start`} ju={`flex-start`}>
      <Fade>
        <Title text={`EXHIBITION 등록`} />
      </Fade>

      <Wrapper margin={`10px 0px`}>
        <GuideBox padding={`5px`}>
          <GuideContent padding={`5px`}>
            등록된 데이터는 실시간으로 반영됩니다.
          </GuideContent>
          <GuideContent padding={`5px`}>
            이미지 비율이 다르면 화면에 다르게보일 수 있습니다.
          </GuideContent>
          <GuideContent padding={`5px 5px 0px 5px`}>
            이미지 리스트는 등록 후 수정이 불가능하오니 유의하시기 바랍니다.
          </GuideContent>
        </GuideBox>
      </Wrapper>

      <FieldsSet
        height={`30px`}
        margin={`20px 0px 5px 0px`}
        al={`flex-start`}
        padding={`0px 20px`}
      >
        기본정보
      </FieldsSet>

      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper height={`400px`}>이미지</DataGuideWrapper>
        <DataWrapper height={`400px`}>
          <Image
            src={currentThumbnail.value}
            width={`500px`}
            height={`282px`}
            alt={`bannerImage`}
          />

          <FileInput
            id="file-js"
            type="file"
            accept="image/jpeg,image/gif,image/png"
            onChange={fileChangeHandlerThumbnail}
            ref={fileRef}
          />

          {isLoading ? (
            <Wrapper width={`500px`} margin={`10px 0px 0px 0px`}>
              {fileUploadProgress.value && (
                <FileProgress
                  variant="determinate"
                  value={fileUploadProgress.value}
                />
              )}
            </Wrapper>
          ) : (
            <FileLabel
              htmlFor={`file-js`}
              width={`500px`}
              margin={`10px 0px 0px 0px`}
            >
              THUMBNAIL UPLOAD
            </FileLabel>
          )}
        </DataWrapper>
      </Wrapper>

      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper>제목</DataGuideWrapper>
        <DataWrapper>
          <TextInput width={`750px`} height={`25px`} {...currentTitle} />
        </DataWrapper>
      </Wrapper>

      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper>작성자</DataGuideWrapper>
        <DataWrapper>
          <TextInput
            width={`350px`}
            height={`25px`}
            readOnly={true}
            value={`관리자`}
          />
        </DataWrapper>
      </Wrapper>
      <Wrapper
        isBorder={true}
        margin={`20px 0px 0px 0px`}
        al={`flex-start`}
        ju={`flex-start`}
      >
        <FieldsSet>
          <TableHeadColumn width={`100%`}>이미지 리스트</TableHeadColumn>
        </FieldsSet>

        <Wrapper
          height={`40px`}
          al={`flex-end`}
          ju={`flex-end`}
          padding={`0px 10px`}
        >
          <FileInput
            ref={fileRef}
            id="file2-js"
            type="file"
            accept="image/jpeg,image/gif,image/png"
            onChange={innerImageSelectHandler}
          />

          {isLoading ? (
            <CircularIndeterminate />
          ) : (
            <FileLabel
              width={`100px`}
              htmlFor={`file2-js`}
              margin={`0px 0px 10px 0px`}
            >
              IMAGE SELECT
            </FileLabel>
          )}
        </Wrapper>

        <Wrapper
          margin={`0 auto`}
          width={`90%`}
          dr={`row`}
          ju={`flex-start`}
          al={`flex-start`}
          wrap={`wrap`}
        >
          {innerImageList.map((data, idx) => {
            return (
              <Wrapper
                key={idx}
                width={`calc(100% / 5 - 20px)`}
                margin={`15px 10px 20px`}
              >
                <Wrapper
                  width={`100%`}
                  height={`250px`}
                  isBorder={true}
                  al={`flex-start`}
                  ju={`flex-start`}
                >
                  <Image height={`100%`} src={data} />
                </Wrapper>

                <CommonButton
                  width={`100%`}
                  onClick={() => removeInnerImageHandler(idx)}
                >
                  삭제
                </CommonButton>
              </Wrapper>
            );
          })}
        </Wrapper>
      </Wrapper>

      <Wrapper margin={`30px 0px`}>
        {isLoading ? (
          <Wrapper al={`flex-end`} ju={`flex-end`}>
            <CircularIndeterminate />
          </Wrapper>
        ) : (
          <Wrapper al={`flex-end`} ju={`flex-end`} dr={`row`}>
            <CommonButton
              margin={`0px 5px 0px 0px`}
              kindOf={`check`}
              onClick={() => moveListExhibitionPage()}
            >
              목록으로
            </CommonButton>
            <CommonButton
              margin={`0px 5px 0px 0px`}
              kindOf={`update`}
              onClick={() => registerExhibition()}
            >
              등록
            </CommonButton>
          </Wrapper>
        )}
      </Wrapper>
    </WholeWrapper>
  );
};
