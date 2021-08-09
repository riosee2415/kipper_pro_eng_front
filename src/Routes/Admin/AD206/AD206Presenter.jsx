import React from "react";
import {
  WholeWrapper,
  TextInput,
  Wrapper,
  TableWrapper,
  TableHeadColumn,
  Content,
  CommonButton,
  GuideBox,
  GuideContent,
  Image,
} from "../../../Components/AdminCommonComponents";
import { Title, Tabs } from "../Components";
import Fade from "react-reveal/Fade";
import CircularIndeterminate from "../../../Components/loading/CircularIndeterminate";
import styled from "styled-components";
import Theme from "../../../Styles/Theme";
import useTitle from "@4leaf.ysh/use-title";
import Slide from "@material-ui/core/Slide";
import { FiAlertCircle } from "react-icons/fi";
import FileProgress from "../../../Components/FileProgress";
import { AiOutlineSearch } from "react-icons/ai";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const tabs = ["EXHIBITION 리스트"];

export default ({
  currentTab,
  setCurrentTab,
  searchValue,
  setSearchValue,
  selectData,
  fileUploadProgress,
  //
  fileRef,
  //
  nDatum,
  //
  dataClickHandler,
  deleteExhibitionHandler,
  moveUpdateExhibitionPage,
  moveCreateExhibitionPage,
}) => {
  useTitle("ADMIN | EXHIBITION");

  return (
    <WholeWrapper al={`flex-start`} ju={`flex-start`}>
      <Fade right>
        <Title text="EXHIBITION 관리" />
        <Tabs
          tabs={tabs}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
      </Fade>

      <Fade bottom>
        <Wrapper margin={`10px 0px`}>
          <GuideBox padding={`5px`}>
            <GuideContent padding={`5px`}>
              리스트는 최신 베너를 기준으로 정렬됩니다.
            </GuideContent>
            <GuideContent padding={`5px`}>
              이미지 비율이 다르면 화면에 다르게보일 수 있습니다.
            </GuideContent>
            <GuideContent padding={`5px 5px 0px 5px`}>
              삭제된 데이터는 복구할 수 없으니, 삭제 시 유의하시기 바랍니다.
            </GuideContent>
          </GuideBox>
        </Wrapper>
      </Fade>

      <Fade>
        <Wrapper
          isSearchBox={true}
          dr={`row`}
          al={`center`}
          ju={`space-between`}
          margin={`0px 0px 10px 0px`}
          padding={`5px`}
        >
          <Wrapper isSearchBox={true} width={`300px`}>
            <TextInput
              height={`25px`}
              width={`300px`}
              type="text"
              placeholder={`EXHIBITION 타이틀을 검색하세요.`}
              margin={`0px 5px 0px 0px`}
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
            <AiOutlineSearch />
          </Wrapper>
          <Wrapper al={`flex-end`} ju={`flex-end`}>
            <CommonButton
              kindOf={`create`}
              onClick={() => moveCreateExhibitionPage()}
            >
              EXHIBITION 등록
            </CommonButton>
          </Wrapper>
        </Wrapper>
      </Fade>

      <Wrapper dr={`row`}>
        <Wrapper width={`760px`} minWidth={`760px`}>
          <Fade left>
            <TableWrapper>
              <TableHeadColumn width={`10%`}>번호</TableHeadColumn>
              <TableHeadColumn width={`90%`} isStart={true}>
                타이틀
              </TableHeadColumn>
            </TableWrapper>

            <Wrapper
              height={`550px`}
              isBorder={true}
              isScroll={true}
              ju={`flex-start`}
            >
              {nDatum ? (
                nDatum.length === 0 ? (
                  <TableWrapper isData={true}>
                    <TableHeadColumn
                      isData={true}
                      width={`100%`}
                      dr={`row`}
                      isSvg={true}
                    >
                      <FiAlertCircle /> 조회 된 데이터가 없습니다.
                    </TableHeadColumn>
                  </TableWrapper>
                ) : (
                  nDatum.map((data, idx) => {
                    return (
                      <Fade key={idx}>
                        <TableWrapper
                          isData={true}
                          isActive={selectData && selectData._id === data._id}
                        >
                          <TableHeadColumn isData={true} width={`10%`}>
                            {idx + 1}
                          </TableHeadColumn>
                          <TableHeadColumn
                            isData={true}
                            width={`90%`}
                            isStart={true}
                            isToday={true}
                            onClick={() => dataClickHandler(data)}
                          >
                            {data.title}
                          </TableHeadColumn>
                        </TableWrapper>
                      </Fade>
                    );
                  })
                )
              ) : (
                <CircularIndeterminate />
              )}
            </Wrapper>
          </Fade>
        </Wrapper>

        <Fade right>
          <Wrapper margin={`5px`}>
            <TableWrapper>
              <TableHeadColumn width={`100%`}>상세정보</TableHeadColumn>
            </TableWrapper>

            {selectData === null ? (
              <Wrapper
                height={`550px`}
                isBorder={true}
                isScroll={true}
                ju={`flex-start`}
                padding={`20px`}
                isSvg={true}
              >
                <FiAlertCircle size={40} color={Theme.delete_B_C} />
                <Wrapper margin={`20px 0px`}>
                  좌측 데이터를 선택해주세요.
                </Wrapper>
              </Wrapper>
            ) : (
              <Wrapper
                height={`550px`}
                isBorder={true}
                isScroll={true}
                ju={`flex-start`}
                padding={`20px`}
              >
                <Image
                  width={`500px`}
                  height={`281`}
                  alt={`thumbnail`}
                  margin={`0px 0px 20px 0px`}
                  src={selectData && selectData.thumbnailPath}
                />

                <Wrapper dr={`row`} margin={`0px 0px 10px 20px`}>
                  <Content>제목</Content>
                  <TextInput
                    readOnly={true}
                    width={`350px`}
                    value={(selectData && selectData.title) || ``}
                  />
                </Wrapper>

                <Wrapper margin={`45px 0px 0px 0px`} dr={`row`}>
                  <CommonButton
                    margin={`0px 10px`}
                    kindOf={`update`}
                    onClick={() => moveUpdateExhibitionPage()}
                  >
                    데이터 수정
                  </CommonButton>
                  <CommonButton
                    margin={`0px 10px`}
                    kindOf={`delete`}
                    onClick={() => deleteExhibitionHandler()}
                  >
                    데이터 삭제
                  </CommonButton>
                </Wrapper>
              </Wrapper>
            )}
          </Wrapper>
        </Fade>
      </Wrapper>
    </WholeWrapper>
  );
};
