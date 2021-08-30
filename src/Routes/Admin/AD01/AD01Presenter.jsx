import React from "react";
import {
  WholeWrapper,
  Wrapper,
  TableWrapper,
  TableHeadColumn,
  TextInput,
  GraphName,
  GraphBar,
  Combo,
  ComboOption,
} from "../../../Components/AdminCommonComponents";
import withSplitting from "../../../Lib/withSplitting";
const Title = withSplitting(() => import("../Components/Title"));
const Tabs = withSplitting(() => import("../Components/Tabs"));
const Fade = withSplitting(() => import("react-reveal/Fade"));
import useTitle from "@4leaf.ysh/use-title";
import { AiOutlineSearch } from "react-icons/ai";
import { FiAlertCircle } from "react-icons/fi";
import Slide from "@material-ui/core/Slide";

const tabs = ["접속자통계"];

export default ({
  currentTab,
  setCurrentTab,
  yearCnt,
  monthCnt,
  todayCnt,
  //
  yearData,
  //
  searchLocation,
  searchIp,
  setSearchIp,
  setSearchLocation,
  searchDevice,
  searchPlatform,
  searchBrowser,

  //
  currentYear,
  currentMonth,
  currentDate,
  //
  monthGraphDatum,
}) => {
  useTitle(`ADMIN | 접속자통계`);

  return (
    <WholeWrapper minWidth={`1000px`} al={`flex-start`} ju={`flex-start`}>
      <Fade right>
        <Title text="접속자 통계" />
        <Tabs
          tabs={tabs}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
      </Fade>

      {/* <Wrapper>
        <TableWrapper>
          <TableHeadColumn width={`33%`}>
            {currentYear}년도 전체 접속자
          </TableHeadColumn>
          <TableHeadColumn width={`33%`}>
            {currentYear}년 {currentMonth}월 전체 접속자
          </TableHeadColumn>
          <TableHeadColumn isToday={true} width={`33%`}>
            {currentYear}년 {currentMonth}월 {currentDate}일
          </TableHeadColumn>
        </TableWrapper>

        <TableWrapper isData={true}>
          <TableHeadColumn isData={true} width={`33%`}>
            {yearCnt === null ? `-` : yearCnt} 명
          </TableHeadColumn>
          <TableHeadColumn isData={true} width={`33%`}>
            {monthCnt === null ? `-` : monthCnt} 명
          </TableHeadColumn>
          <TableHeadColumn isData={true} width={`33%`}>
            {todayCnt === null ? `-` : todayCnt} 명
          </TableHeadColumn>
        </TableWrapper>
      </Wrapper> */}
      <Wrapper
        isSearchBox={true}
        dr={`row`}
        al={`flex-start`}
        ju={`flex-start`}
        margin={`0px 0px 10px 0px`}
        padding={`5px`}
        height={`150px`}
      >
        <Wrapper
          height={`100%`}
          width={`300px`}
          al={`center`}
          ju={`space-between`}
          padding={`10px 0px`}
        >
          <Wrapper isSearchBox={true} width={`300px`}>
            <TextInput
              height={`25px`}
              width={`300px`}
              type="text"
              placeholder={`IP를 검색하세요.`}
              value={searchIp}
              onChange={(e) => {
                setSearchIp(e.target.value);
              }}
            />
            <AiOutlineSearch />
          </Wrapper>
          <Wrapper isSearchBox={true} width={`300px`}>
            <TextInput
              height={`25px`}
              width={`300px`}
              type="text"
              placeholder={`유입경로를 검색하세요.`}
              value={searchLocation}
              onChange={(e) => {
                setSearchLocation(e.target.value);
              }}
            />
            <AiOutlineSearch />
          </Wrapper>
          <Wrapper margin={`0px 0px 10px 0px`} isSearchBox={true}></Wrapper>
        </Wrapper>

        <Wrapper
          height={`100%`}
          width={`400px`}
          al={`center`}
          ju={`space-between`}
        >
          <Wrapper dr={`row`} margin={`10px 0px 0px 0px`} width={`300px`}>
            <Wrapper
              width={`70px`}
              margin={`0px 10px 0px 0px`}
              al={`flex-start`}
              fontWeight={`900`}
              fontSize={`13.5px`}
            >
              디바이스
            </Wrapper>
            <Combo height={`25px`} width={`300px`} {...searchDevice}>
              <ComboOption value={""}>전체</ComboOption>
              <ComboOption value={`PC`}>PC</ComboOption>
              <ComboOption value={`모바일`}>MOBILE</ComboOption>
            </Combo>
          </Wrapper>

          <Wrapper dr={`row`} width={`300px`}>
            <Wrapper
              width={`70px`}
              margin={`0px 10px 0px 0px`}
              al={`flex-start`}
              fontWeight={`900`}
              fontSize={`13.5px`}
            >
              플랫폼
            </Wrapper>
            <Combo height={`25px`} width={`300px`} {...searchPlatform}>
              <ComboOption value={""}>전체</ComboOption>
              <ComboOption value={`아이패드`}>아이패드</ComboOption>
              <ComboOption value={`안드로이드 테블릿`}>
                안드로이드 테블릿
              </ComboOption>
              <ComboOption value={`안드로이드 OS`}>안드로이드 OS</ComboOption>
              <ComboOption value={`아이폰`}>아이폰</ComboOption>
              <ComboOption value={`맥OS`}>맥OS</ComboOption>
            </Combo>
          </Wrapper>
          <Wrapper dr={`row`} margin={`0px 0px 10px 0px`} width={`300px`}>
            <Wrapper
              width={`70px`}
              margin={`0px 10px 0px 0px`}
              al={`flex-start`}
              fontWeight={`900`}
              fontSize={`13.5px`}
            >
              브라우저
            </Wrapper>
            <Combo height={`25px`} width={`300px`} {...searchBrowser}>
              <ComboOption value={""}>전체</ComboOption>
              <ComboOption value={"익스플로러 엣지"}>
                익스플로러 엣지
              </ComboOption>
              <ComboOption value={"네이버"}>네이버</ComboOption>
              <ComboOption value={"크롬"}>크롬</ComboOption>
              <ComboOption value={"파이어폭스"}>파이어폭스</ComboOption>
              <ComboOption value={"사파리"}>사파리</ComboOption>
            </Combo>
          </Wrapper>
        </Wrapper>
      </Wrapper>
      <TableWrapper>
        <TableHeadColumn width={`5%`}>번호</TableHeadColumn>
        <TableHeadColumn width={`15%`}>IP</TableHeadColumn>
        <TableHeadColumn width={`15%`}>Device</TableHeadColumn>
        <TableHeadColumn width={`15%`}>Platform</TableHeadColumn>
        <TableHeadColumn width={`15%`}>Browser</TableHeadColumn>
        <TableHeadColumn width={`15%`}>방문시각</TableHeadColumn>
        <TableHeadColumn width={`20%`}>유입경로</TableHeadColumn>
      </TableWrapper>

      <Wrapper
        height={`500px`}
        isBorder={true}
        isScroll={true}
        className="scroll"
        ju={`flex-start`}
      >
        {yearData ? (
          yearData.length === 0 ? (
            <Wrapper dr={`row`} isSvg={true} margin={`10px 0`}>
              <FiAlertCircle /> 조회된 데이터가 없습니다.
            </Wrapper>
          ) : (
            yearData.map((data, idx) => {
              return (
                <TableWrapper minHeight={`26px`} isData={true} key={idx}>
                  <TableHeadColumn isData={true} width={`5%`}>
                    {idx + 1}
                  </TableHeadColumn>
                  <TableHeadColumn isData={true} width={`15%`}>
                    {data.ipAdress}
                  </TableHeadColumn>
                  <TableHeadColumn isData={true} width={`15%`}>
                    {data.device}
                  </TableHeadColumn>

                  <TableHeadColumn isData={true} width={`15%`}>
                    {data.platform}
                  </TableHeadColumn>

                  <TableHeadColumn isData={true} width={`15%`}>
                    {data.browser}
                  </TableHeadColumn>

                  <TableHeadColumn isData={true} width={`15%`}>
                    {data.date}
                  </TableHeadColumn>

                  <TableHeadColumn isData={true} width={`20%`}>
                    {data.title}
                  </TableHeadColumn>
                </TableWrapper>
              );
            })
          )
        ) : (
          <Wrapper></Wrapper>
        )}
      </Wrapper>

      {/* <Wrapper dr={`row`} height={`580px`} al={`flex-end`} ju={`space-around`}>
        {monthGraphDatum &&
          monthGraphDatum.map((data, idx) => {
            return (
              <Wrapper key={idx}>
                <Fade bottom delay={idx * 50}>
                  <Wrapper width={`40px`} height={`500px`} ju={`flex-end`}>
                    <GraphBar height={data + `%`}>{data}</GraphBar>
                    <GraphName>{data}%</GraphName>
                    <GraphName>{idx + 1}월</GraphName>
                  </Wrapper>
                </Fade>
              </Wrapper>
            );
          })}
      </Wrapper> */}
    </WholeWrapper>
  );
};
