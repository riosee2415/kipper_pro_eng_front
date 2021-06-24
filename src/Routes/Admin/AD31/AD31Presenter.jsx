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
import Chart from "react-apexcharts";
import { AiOutlineSearch } from "react-icons/ai";
import { FiAlertCircle } from "react-icons/fi";
import Slide from "@material-ui/core/Slide";

const options = {
  chart: {
    id: "basic-bar",
    toolbar: {
      show: true,
    },
  },

  plotOptions: {
    bar: {
      columnWidth: "50%",
    },
  },

  stroke: {
    width: [4, 0, 0],
  },
};

const tabs = ["7일 그래프", "30일 그래프", "1년 그래프", "3년 그래프"];

export default ({
  currentTab,
  setCurrentTab,
  yearCnt,
  monthCnt,
  todayCnt,
  yesterdayCnt,
  reCnt,
  newCnt,
  //
  yearData,
  category,
  count,
  categoryM,
  countM,
  categoryY,
  countY,
  categoryT,
  countT,
  date,
  viewDate,
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
        <Title text="사이트 방문 지표" />
        <Wrapper margin={`0px 0px 50px 0px`} ju={`flex-start`} dr={`row`}>
          {/* 오늘 방문수 */}
          <Wrapper
            margin={`0px 10px 0px 0px`}
            width={`120px`}
            height={`100px`}
            isBorder={true}
            al={`center`}
            ju={`center`}
          >
            <Wrapper margin={`0px 0px 17px 0px `}>오늘 방문수</Wrapper>
            <Wrapper fontSize={`24px`} fontWeight={`700`}>
              {todayCnt}
            </Wrapper>
          </Wrapper>

          {/* 어제 방문수 */}
          <Wrapper
            margin={`0px 10px 0px 0px`}
            width={`120px`}
            height={`100px`}
            isBorder={true}
            al={`center`}
            ju={`center`}
          >
            <Wrapper margin={`0px 0px 17px 0px `}>어제 방문수</Wrapper>
            <Wrapper fontSize={`24px`} fontWeight={`700`}>
              {yesterdayCnt}
            </Wrapper>
          </Wrapper>

          {/* 재 방문수 */}
          <Wrapper
            margin={`0px 10px 0px 0px`}
            width={`120px`}
            height={`100px`}
            isBorder={true}
            al={`center`}
            ju={`center`}
          >
            <Wrapper margin={`0px 0px 17px 0px `}>재 방문수</Wrapper>
            <Wrapper fontSize={`24px`} fontWeight={`700`}>
              {reCnt}
            </Wrapper>
          </Wrapper>

          {/* 순 방문수 */}
          <Wrapper
            margin={`0px 10px 0px 0px`}
            width={`120px`}
            height={`100px`}
            isBorder={true}
            al={`center`}
            ju={`center`}
          >
            <Wrapper margin={`0px 0px 17px 0px `}>순 방문수</Wrapper>
            <Wrapper fontSize={`24px`} fontWeight={`700`}>
              {newCnt}
            </Wrapper>
          </Wrapper>

          {/* 누적 방문수 */}
          <Wrapper
            margin={`0px 10px 0px 0px`}
            width={`120px`}
            height={`100px`}
            isBorder={true}
            al={`center`}
            ju={`center`}
          >
            <Wrapper margin={`0px 0px 17px 0px `}>누적 방문수</Wrapper>
            <Wrapper fontSize={`24px`} fontWeight={`700`}>
              {yearCnt}
            </Wrapper>
          </Wrapper>
        </Wrapper>
        <Tabs
          tabs={tabs}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
      </Fade>
      {/* 그래프 */}
      <Wrapper>
        <Chart
          options={{
            ...options,

            xaxis: {
              categories: viewDate,
            },
          }}
          series={[{ name: "접속자 수", data: count }]}
          type="line"
          width={`1450px`}
          height={`500px`}
        />
      </Wrapper>
    </WholeWrapper>
  );
};
