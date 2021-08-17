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
  ComboOption,
  Combo,
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
import { CSVLink } from "react-csv";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DownloadBtn = styled(CSVLink)`
  width: 200px;
  height: 25px;
  border-radius: 3px;

  background: ${(props) => props.theme.create_B_C};
  color: ${(props) => props.theme.white_C};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  transition: 0.4s;

  &:hover {
    color: ${(props) => props.theme.create_B_C};
    background: ${(props) => props.theme.white_C};
    border: 1px solid ${(props) => props.theme.create_B_C};
  }
`;

const tabs = ["제품 리스트"];

export default ({
  currentTab,
  setCurrentTab,
  searchValue,
  setSearchValue,
  selectData,
  fileUploadProgress,
  //
  fileRef,
  searchType,
  svcData,
  headers,
  //
  nDatum,
  //
  dataClickHandler,
  deleteProductHandler,
  moveCreateProductPage,
  moveUpdateProductPage,
  sortUpdateHandler,
}) => {
  useTitle("ADMIN | 제품 관리");

  return (
    <WholeWrapper al={`flex-start`} ju={`flex-start`}>
      <Fade right>
        <Title text="제품 관리" />
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
          margin={`0px 0px 10px 0px`}
          padding={`5px`}
        >
          <Wrapper ju={`flex-start`} isSearchBox={true} width={`300px`}>
            <TextInput
              height={`25px`}
              width={`300px`}
              type="text"
              placeholder={`제품 타이틀을 검색하세요.`}
              margin={`0px 5px 0px 0px`}
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
            <AiOutlineSearch />
          </Wrapper>

          <Wrapper width={`210px`} ju={`flex-start`}>
            <Combo width={`200px`} {...searchType}>
              <ComboOption value={``}>--전체--</ComboOption>
              <ComboOption value={`USB 물리보안`}>USB 물리보안</ComboOption>
              <ComboOption value={`네트워크 물리보안`}>
                네트워크 물리보안
              </ComboOption>
              <ComboOption value={`기타포트 물리보안`}>
                기타포트 물리보안
              </ComboOption>
              <ComboOption value={`컴퓨터 물리보안`}>
                컴퓨터 물리보안
              </ComboOption>
              <ComboOption value={`락키 PRO`}>락키 PRO</ComboOption>
            </Combo>
          </Wrapper>
          <Wrapper al={`flex-end`} ju={`flex-end`}>
            <CommonButton
              kindOf={`create`}
              onClick={() => moveCreateProductPage()}
            >
              제품 등록
            </CommonButton>
          </Wrapper>
        </Wrapper>
      </Fade>

      <Wrapper dr={`row`}>
        <Wrapper width={`760px`} minWidth={`760px`}>
          <Fade left>
            <TableWrapper>
              <TableHeadColumn width={`10%`}>번호</TableHeadColumn>
              <TableHeadColumn width={`45%`} isStart={true}>
                제품명
              </TableHeadColumn>
              <TableHeadColumn width={`30%`} isStart={true}>
                모델명
              </TableHeadColumn>
              <TableHeadColumn width={`15%`} isStart={true}>
                정렬
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
                            width={`45%`}
                            isStart={true}
                            isToday={true}
                            onClick={() => dataClickHandler(data)}
                          >
                            {data.productName}
                          </TableHeadColumn>
                          <TableHeadColumn
                            isData={true}
                            width={`30%`}
                            isStart={true}
                            isToday={true}
                            onClick={() => dataClickHandler(data)}
                          >
                            {data.modelName}
                          </TableHeadColumn>
                          <TableHeadColumn
                            isData={true}
                            width={`15%`}
                            dr={`row`}
                            isSvg={true}
                          >
                            <TextInput
                              type={"number"}
                              width={`50px`}
                              placeholder={data.sort}
                              height={`25px`}
                            />
                            <CommonButton
                              kindOf={`update`}
                              width={`40px`}
                              height={`25px`}
                              onClick={(e) => sortUpdateHandler(e, data._id)}
                            >
                              적용
                            </CommonButton>
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
                  width={`250px`}
                  height={`250px`}
                  alt={`thumbnail`}
                  margin={`0px 0px 20px 0px`}
                  src={selectData && selectData.thumbnailPath}
                />

                <Wrapper dr={`row`} margin={`0px 0px 10px 20px`}>
                  <Content>제품명</Content>
                  <TextInput
                    readOnly={true}
                    width={`350px`}
                    value={(selectData && selectData.productName) || ``}
                  />
                </Wrapper>
                <Wrapper dr={`row`} margin={`0px 0px 10px 20px`}>
                  <Content>모델명</Content>
                  <TextInput
                    readOnly={true}
                    width={`350px`}
                    value={(selectData && selectData.modelName) || ``}
                  />
                </Wrapper>

                <Wrapper dr={`row`} margin={`0px 0px 10px 20px`}>
                  <Content>타입</Content>
                  <TextInput
                    readOnly={true}
                    width={`350px`}
                    value={(selectData && selectData.productType) || ``}
                  />
                </Wrapper>
                <Wrapper dr={`row`} margin={`0px 0px 10px 20px`}>
                  <Content>서브타입</Content>
                  <TextInput
                    readOnly={true}
                    width={`350px`}
                    value={(selectData && selectData.productSubType) || ``}
                  />
                </Wrapper>

                <Wrapper
                  al={`flex-end`}
                  ju={`flex-end`}
                  margin={`45px 0px 0px 0px`}
                  dr={`row`}
                >
                  <CommonButton
                    margin={`0px 10px`}
                    kindOf={`update`}
                    onClick={() => moveUpdateProductPage()}
                  >
                    데이터 수정
                  </CommonButton>
                  <CommonButton
                    margin={`0px 10px`}
                    kindOf={`delete`}
                    onClick={() => deleteProductHandler()}
                  >
                    데이터 삭제
                  </CommonButton>
                </Wrapper>
              </Wrapper>
            )}
          </Wrapper>
        </Fade>
      </Wrapper>
      <Wrapper>
        {svcData && (
          <DownloadBtn headers={headers} data={svcData}>
            DOWNLOAD
          </DownloadBtn>
        )}
      </Wrapper>
    </WholeWrapper>
  );
};
