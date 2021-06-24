import React, { useEffect, useState } from "react";
import AD31Presenter from "./AD31Presenter";
import { useQuery } from "@apollo/client";

import {
  GET_ACEEPTRECORD,
  GET_ACEEPTRECORD_BY_MONTH,
  GET_ACEEPTRECORD_BY_DATE,
  GET_ACCEPTRECORD_ALL_YEAR,
  GET_ACEEPTRECORD_BY_YESTERDAY,
} from "./AD31Queries.js";
import { toast } from "react-toastify";
import useInput from "../../../Components/Hooks/useInput";
import { isNetworkRequestInFlight } from "@apollo/client/core/networkStatus";

export default () => {
  ////////////// - USE STATE- ///////////////
  const [currentTab, setCurrentTab] = useState(0);
  const [yearCnt, setYearCnt] = useState(null);
  const [monthCnt, setMonthCnt] = useState(null);
  const [todayCnt, setTodayCnt] = useState(null);
  const [yesterdayCnt, setYesterdayCnt] = useState(null);
  const [reCnt, setReCnt] = useState(null);
  const [newCnt, setNewCnt] = useState(null);
  //
  const [graphDatum, setGraphDatum] = useState(null);
  const [viewGraphDatum, setViewGraphDatum] = useState(null);
  //
  const [searchIp, setSearchIp] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const searchDevice = useInput("");
  const searchPlatform = useInput("");
  const searchBrowser = useInput("");
  //
  const [category, setCategory] = useState([]);
  const [count, setCount] = useState([]);
  const [countT, setCountT] = useState([]);
  const [categoryT, setCategoryT] = useState([]);
  const [categoryM, setCategoryM] = useState([]);
  const [countM, setCountM] = useState([]);
  const [categoryY, setCategoryY] = useState([]);
  const [countY, setCountY] = useState([]);
  //
  const [date, setDate] = useState([]);
  const [viewDate, setViewDate] = useState([]);
  ////////////// - USE REF- ////////////////

  ////////////// - VARIABLE- ////////////////
  const currentYear = new Date().getFullYear();
  let currentMonth = new Date().getMonth() + 1;
  let currentDate = new Date().getDate();
  let currentYesterday = new Date().getDate() - 1;

  currentMonth = ("0" + currentMonth).slice(-2);
  currentDate = ("0" + currentDate).slice(-2);

  ////////////// - USE QUERY- ///////////////
  const { data: yearData, refetch: yearRefetch } = useQuery(GET_ACEEPTRECORD, {
    variables: {
      currentYear: `${currentYear}`,
      searchIp: searchIp,
      searchLocation: searchLocation,
      searchDevice: searchDevice.value,
      searchPlatform: searchPlatform.value,
      searchBrowser: searchBrowser.value,
    },
  });
  // //////////

  const { data: monthData, refetch: monthRefetch } = useQuery(
    GET_ACEEPTRECORD_BY_MONTH,
    {
      variables: {
        currentMonth: `${currentYear}${currentMonth}`,
      },
    }
  );

  // //////////

  const { data: dateData, refetch: dateRefetch } = useQuery(
    GET_ACEEPTRECORD_BY_DATE,
    {
      variables: {
        currentDate: `${currentYear}${currentMonth}${currentDate}`,
      },
    }
  );

  // //////////

  const { data: yesterdayData, refetch: yesterdayRefetch } = useQuery(
    GET_ACEEPTRECORD_BY_YESTERDAY,
    {
      variables: {
        currentYesterday: `${currentYear}${currentMonth}${currentYesterday}`,
      },
    }
  );

  // //////////

  const { data: allDatum, refetch: allRefetch } = useQuery(
    GET_ACCEPTRECORD_ALL_YEAR,
    {
      variables: {
        year: `${currentYear}`,
      },
    }
  );

  ///////////// - USE MUTATION- /////////////

  ///////////// - EVENT HANDLER- ////////////

  ///////////// - GET BROWSER - ////////////

  //// - USE EFFECT- //////////////

  useEffect(() => {
    yearRefetch();
    monthRefetch();
    dateRefetch();
    allRefetch();
  }, []);

  useEffect(
    (idx) => {
      const dayCount = [7, 30, 365, 1095];
      const tempArr = [];
      const viewArr = [];

      let tempYear = parseInt(currentYear);
      let tempMonth = parseInt(currentMonth);
      let tempDate = parseInt(currentDate);

      for (let i = 0; i < dayCount[currentTab]; i++) {
        tempDate = tempDate - 1;

        if (tempDate < 1) {
          tempMonth = tempMonth - 1;

          if (tempMonth < 1) {
            tempYear = tempYear - 1;
            tempMonth = 12;
          }

          if (
            ((tempYear % 4 == 0 && tempYear % 100 != 0) ||
              tempYear % 400 == 0) &&
            tempMonth === 2
          ) {
            tempDate = 29;
          } else if (tempMonth === 2) {
            tempDate = 28;
          } else if (tempMonth % 2 === 0) {
            tempDate = 30;
          } else {
            tempDate = 31;
          }
        }

        let currentDay =
          tempYear.toString() +
          (tempMonth < 10 ? "0" + tempMonth.toString() : tempMonth.toString()) +
          (tempDate < 10 ? "0" + tempDate.toString() : tempDate.toString());

        if (currentTab === 1) {
          if (i === 0) {
            viewArr.push(currentDay);
          } else if (i % 7 !== 0) {
            viewArr.push(" ");
          } else if (i % 7 === 0) {
            viewArr.push(currentDay);
          }
        } else if (currentTab === 2) {
          if (i === 0) {
            // const com = parseInt(currentDay.substring(6, 8));
            // viewArr.push(tempDate === com && currentDay.substring(0, 6));
            viewArr.push(currentDay.substring(0, 6));
          } else if (i % 30 !== 0) {
            viewArr.push(" ");
          } else if (i % 30 === 0) {
            // const com = parseInt(currentDay.substring(6, 8));
            // viewArr.push(tempDate === com && currentDay.substring(0, 6));
            viewArr.push(currentDay.substring(0, 6));
          }
        } else if (currentTab === 3) {
          if (i === 0) {
            // const com = parseInt(currentDay.substring(6, 8));
            // viewArr.push(tempDate === com && currentDay.substring(0, 6));
            viewArr.push(currentDay.substring(0, 6));
          } else if (i % 90 !== 0) {
            viewArr.push(" ");
          } else if (i % 90 === 0) {
            // const com = parseInt(currentDay.substring(6, 8));
            // viewArr.push(tempDate === com && currentDay.substring(0, 6));
            viewArr.push(currentDay.substring(0, 6));
          }
        } else {
          viewArr.push(currentDay);
        }
        tempArr.push(currentDay);
      }
      setViewDate(viewArr.reverse());
      setDate(tempArr.reverse());
    },

    [currentTab]
  );
  // 전체 방문수 /////
  useEffect(() => {
    if (yearData) {
      if (yearCnt === null) {
        setYearCnt(yearData.getAcceptRecord.length);
      }
    }
  }, [yearData]);

  //  순 방문수 /////
  useEffect(() => {
    if (yearData) {
      const tempArr = [];
      const tempCountArr = [];

      let currentIp = "";
      let count = 0;
      yearData.getAcceptRecord.map((data) => {
        if (currentIp !== data.ipAdress) {
          currentIp = data.ipAdress;
          tempCountArr.push(count);
          count = 0;
        }
        if (tempArr.indexOf(data.ipAdress) === -1) tempArr.push(data.ipAdress);
        count += 1;
      });
      tempCountArr.push(count);

      setNewCnt(tempArr.length);
    }
  }, [yearData]);

  //  재 방문수 /////
  useEffect(() => {
    if (yearData) {
      const tempArr = [];
      const tempCountArr = [];

      let currentIp = "";
      let count = 0;
      yearData.getAcceptRecord.map((data) => {
        if (currentIp === data.ipAdress) {
          currentIp = data.ipAdress;
          tempCountArr.push(count);
          count = 0;
        }
        if (tempArr.indexOf(data.ipAdress) === -1) tempArr.push(data.ipAdress);
        count += 1;
      });
      tempCountArr.push(count);

      setReCnt(tempArr.length);
    }
  }, [yearData]);

  // 월 방문수 /////
  useEffect(() => {
    if (monthData) {
      if (monthCnt === null) {
        setMonthCnt(monthData.getAcceptRecordByMonth.length);
      }
    }
  }, [monthData]);

  // 오늘 방문수 /////
  useEffect(() => {
    if (dateData) {
      if (todayCnt === null) {
        setTodayCnt(dateData.getAcceptRecordByDate.length);
      }
    }
  }, [dateData]);

  // 어제 방문수 /////
  useEffect(() => {
    if (yesterdayData) {
      if (yesterdayCnt === null) {
        setYesterdayCnt(yesterdayData.getAcceptRecordByYesterday.length);
      }
    }
  }, [yesterdayData]);

  useEffect(() => {
    if (allDatum) {
      const graphArr = Array.from({ length: 12 }, () => 0);

      if (!graphDatum) {
        allDatum.getAcceptRecordAllYear.map((data) => {
          for (let i = 0; i < graphArr.length; i++) {
            const month = ("0" + (i + 1)).slice(-2);

            const regExp = new RegExp(`${currentYear}${month}.*`, "gi");

            const match = regExp.test(data.date);

            match && graphArr[i]++;
          }
        });

        setGraphDatum(graphArr);
      }
    }
  }, [allDatum]);

  useEffect(() => {
    let totalCnt = 0;

    if (graphDatum) {
      graphDatum.map((data) => {
        totalCnt += data;
      });

      graphDatum.map((cnt, idx) => {
        graphDatum[idx] = Math.floor((cnt / totalCnt) * 100);
      });
      setViewGraphDatum([...graphDatum]);
    }
  }, [graphDatum]);

  // dayCount ////////////////////////
  useEffect(() => {
    if (yearData && date) {
      const tempCountArr = date.map(() => 0);

      yearData.getAcceptRecord.map((data) => {
        const index = date.indexOf(data.date);

        if (index !== -1) {
          tempCountArr[index] = tempCountArr[index] + 1;
        }
      });
      setCount(tempCountArr);
    }
  }, [yearData, date]);

  //

  return (
    <AD31Presenter
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      yearCnt={yearCnt}
      monthCnt={monthCnt}
      todayCnt={todayCnt}
      yesterdayCnt={yesterdayCnt}
      reCnt={reCnt}
      newCnt={newCnt}
      //
      //
      currentYear={currentYear}
      currentMonth={currentMonth}
      currentDate={currentDate}
      yearData={yearData && yearData.getAcceptRecord}
      date={date}
      viewDate={viewDate}
      //
      monthGraphDatum={viewGraphDatum}
      category={category}
      count={count}
      categoryM={categoryM}
      countM={countM}
      categoryY={categoryY}
      countY={countY}
      categoryT={categoryT}
      countT={countT}
      //
      searchIp={searchIp}
      searchLocation={searchLocation}
      setSearchIp={setSearchIp}
      setSearchLocation={setSearchLocation}
      searchDevice={searchDevice}
      searchPlatform={searchPlatform}
      searchBrowser={searchBrowser}
    />
  );
};
