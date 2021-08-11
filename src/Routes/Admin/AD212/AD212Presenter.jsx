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
  StatusText,
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
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles, makeStyles } from "@material-ui/core/styles";

const DataWrapper = styled(Wrapper)`
  height: ${(props) => props.height || `30px`};
  align-items: flex-start;
  padding: 0px 20px;
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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const tabs = ["회원 리스트", "회원 생성"];

const useStyles = makeStyles({
  radio: {
    color: `grey`,
  },
});

export default ({
  currentTab,
  setCurrentTab,
  isLoading,
  nameValue,
  managerValue,
  nameType,
  searchValue,
  setSearchValue,
  currentUserId,
  currentPassWord,
  currentPassWordRe,
  currentContry,
  currentLevel,
  currentCompanyName,
  currentCharge,
  currentEmail,
  currentTel,
  //
  tDatum,
  //
  createTokenHandler,
  searchValueHandler,
  deleteTokenHandler,
}) => {
  useTitle(`ADMIN | 회원`);

  const classes = useStyles();

  return (
    <WholeWrapper al={`flex-start`} ju={`flex-start`}>
      <Fade right>
        <Title text="회원 관리" />
        <Tabs
          tabs={tabs}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
      </Fade>

      {/* TOKEN LIST */}
      {currentTab === 0 && (
        <Wrapper>
          <TableWrapper>
            <TableHeadColumn width={`5%`}>번호</TableHeadColumn>
            <TableHeadColumn width={`20%`}>COMPANY NAME</TableHeadColumn>
            <TableHeadColumn width={`10%`}>LEVEL</TableHeadColumn>
            <TableHeadColumn width={`20%`}>CHARGE</TableHeadColumn>
            <TableHeadColumn width={`20%`}>EMAIL</TableHeadColumn>
            <TableHeadColumn width={`15%`}>TEL</TableHeadColumn>
            <TableHeadColumn width={`10%`}>삭제</TableHeadColumn>
          </TableWrapper>

          <Wrapper
            height={`630px`}
            isScroll={true}
            isBorder={true}
            al={`flex-start`}
            ju={`flex-start`}
          >
            {tDatum ? (
              tDatum.length === 0 ? (
                <TableWrapper isData={true}>
                  <TableHeadColumn isData={true} width={`100%`}>
                    조회 된 데이터가 없습니다.
                  </TableHeadColumn>
                </TableWrapper>
              ) : (
                tDatum.map((data, idx) => {
                  return (
                    <Fade left key={idx} delay={idx * 60}>
                      <TableWrapper isData={true}>
                        <TableHeadColumn isData={true} width={`5%`}>
                          {idx + 1}
                        </TableHeadColumn>
                        <TableHeadColumn isData={true} width={`20%`}>
                          {data.companyName}
                        </TableHeadColumn>
                        <TableHeadColumn isData={true} width={`10%`}>
                          {data.level}
                        </TableHeadColumn>
                        <TableHeadColumn isData={true} width={`20%`}>
                          {data.charge}
                        </TableHeadColumn>
                        <TableHeadColumn isData={true} width={`20%`}>
                          {data.email}
                        </TableHeadColumn>
                        <TableHeadColumn isData={true} width={`15%`}>
                          {data.tel}
                        </TableHeadColumn>
                        <TableHeadColumn isData={true} width={`10%`}>
                          <CommonButton
                            width={`100%`}
                            height={`25px`}
                            kindOf={`delete`}
                            onClick={() => {
                              deleteTokenHandler(data._id);
                            }}
                          >
                            삭제
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
        </Wrapper>
      )}

      {/* CREATE TOKEN */}
      {currentTab === 1 && (
        <Fade>
          <Wrapper>
            <GuideBox padding={`5px`} margin={`0px 0px 25px 0px`}>
              <GuideContent padding={`5px`}>
                해당 정보는 실시간으로 반영됩니다.
              </GuideContent>
              <GuideContent padding={`5px`}>
                공란없이 등록해 주시기 바랍니다.
              </GuideContent>
              <GuideContent padding={`5px`}>
                생성된 회원정보는 수정이 불가하오니 정확하게 입력하시기
                바랍니다.
              </GuideContent>
            </GuideBox>

            <Wrapper margin={`100px 0px 0px 0px`} width={`1000px`}>
              <Wrapper dr={`row`} ju={`flex-start`}>
                <DataGuideWrapper>ENTRYCODE</DataGuideWrapper>
                <DataWrapper>
                  <TextInput
                    {...currentUserId}
                    width={`750px`}
                    height={`25px`}
                  />
                </DataWrapper>
              </Wrapper>

              <Wrapper dr={`row`} ju={`flex-start`}>
                <DataGuideWrapper>PASSWORD</DataGuideWrapper>
                <DataWrapper>
                  <TextInput
                    type={`password`}
                    {...currentPassWord}
                    width={`750px`}
                    height={`25px`}
                  />
                </DataWrapper>
              </Wrapper>

              <Wrapper dr={`row`} ju={`flex-start`}>
                <DataGuideWrapper>PASSWORD_RE</DataGuideWrapper>
                <DataWrapper>
                  <TextInput
                    type={`password`}
                    {...currentPassWordRe}
                    width={`750px`}
                    height={`25px`}
                  />
                </DataWrapper>
              </Wrapper>
              <Wrapper dr={`row`} ju={`flex-start`}>
                <DataGuideWrapper>COUNTRY</DataGuideWrapper>
                <DataWrapper>
                  <TextInput
                    {...currentContry}
                    width={`750px`}
                    height={`25px`}
                  />
                </DataWrapper>
              </Wrapper>

              <Wrapper dr={`row`} ju={`flex-start`}>
                <DataGuideWrapper>LEVEL</DataGuideWrapper>
                <DataWrapper>
                  <RadioGroup
                    row
                    aria-label="gender"
                    name="gender1"
                    {...currentLevel}
                  >
                    <FormControlLabel
                      className={classes.radio}
                      value="LEVEL3"
                      control={<Radio />}
                      label="LEVEL3"
                    />
                    <FormControlLabel
                      className={classes.radio}
                      value="LEVEL4"
                      control={<Radio />}
                      label="LEVEL4"
                    />
                  </RadioGroup>
                </DataWrapper>
              </Wrapper>

              <Wrapper dr={`row`} ju={`flex-start`}>
                <DataGuideWrapper>COMPANY NAME</DataGuideWrapper>
                <DataWrapper>
                  <TextInput
                    {...currentCompanyName}
                    width={`750px`}
                    height={`25px`}
                  />
                </DataWrapper>
              </Wrapper>

              <Wrapper dr={`row`} ju={`flex-start`}>
                <DataGuideWrapper>PERSON IN CHARGE</DataGuideWrapper>
                <DataWrapper>
                  <TextInput
                    {...currentCharge}
                    width={`750px`}
                    height={`25px`}
                  />
                </DataWrapper>
              </Wrapper>

              <Wrapper dr={`row`} ju={`flex-start`}>
                <DataGuideWrapper>EMAIL</DataGuideWrapper>
                <DataWrapper>
                  <TextInput
                    {...currentEmail}
                    width={`750px`}
                    height={`25px`}
                  />
                </DataWrapper>
              </Wrapper>

              <Wrapper dr={`row`} ju={`flex-start`}>
                <DataGuideWrapper>TEL</DataGuideWrapper>
                <DataWrapper>
                  <TextInput {...currentTel} width={`750px`} height={`25px`} />
                </DataWrapper>
              </Wrapper>
              <Wrapper
                ju={`flex-end`}
                al={`flex-end`}
                margin={`20px 63px 20px 0px`}
              >
                {!isLoading ? (
                  <CommonButton onClick={createTokenHandler}>
                    회원생성
                  </CommonButton>
                ) : (
                  <Wrapper>회원을 생성 중 입니다.</Wrapper>
                )}
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Fade>
      )}
    </WholeWrapper>
  );
};
