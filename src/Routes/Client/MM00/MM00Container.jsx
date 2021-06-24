import React, { useState, useEffect } from "react";
import withSplitting from "../../../Lib/withSplitting";
const MM00Presenter = withSplitting(() => import("./MM00Presenter"));
import { useQuery, useMutation } from "@apollo/client";
import { toast } from "react-toastify";
import {
  ADD_ACCEPT_RECORD,
  GET_MAINBANNER_ALL,
  GET_MOBILEBANNER_ALL,
} from "./MM00Queries";
import { animateScroll as scroll } from "react-scroll";

const MM00Container = ({ history }) => {
  ////////////// - USE STATE- ///////////////
  const [ip, setIP] = useState();

  ////////////// - USE QUERY- ///////////////
  const { data: mainBannerData, refetch: mainBannerRefetch } =
    useQuery(GET_MAINBANNER_ALL);

  const { data: mobileBannerData, refetch: mobileBannerRefetch } =
    useQuery(GET_MOBILEBANNER_ALL);

  ///////////// - USE MUTATION- /////////////
  const [addAcceptRecordMutation] = useMutation(ADD_ACCEPT_RECORD);

  const preUrl = document.referrer;
  const title = document.title;

  document.getElementsByTagName("title")[0].innerHTML;

  let userAgent = navigator.userAgent.toLowerCase();

  let browser;

  if (userAgent.indexOf("edge") > -1) {
    browser = "익스플로러 엣지";
  } else if (userAgent.indexOf("whale") > -1) {
    browser = "네이버 웨일";
  } else if (userAgent.indexOf("chrome") > -1) {
    browser = "크롬";
  } else if (userAgent.indexOf("firefox") > -1) {
    browser = "파이어폭스";
  } else if (userAgent.indexOf("safari") > -1) {
    browser = "사파리";
  } else {
    browser = "익스플로러";
  }

  ///////////// - GET DEVICE - ////////////

  let platform;

  if (userAgent.indexOf("iPad") > -1) {
    platform = "아이패드";
  } else if (userAgent.indexOf("Tablet") > -1) {
    platform = "안드로이드 테블릿";
  } else if (userAgent.indexOf("Android") > -1) {
    platform = "안드로이드 OS";
  } else if (userAgent.indexOf("iPhone") > -1) {
    platform = "아이폰";
  } else if (userAgent.indexOf("macintosh") > -1) {
    platform = "맥OS";
  } else {
    platform = "기타 기기";
  }

  let device;

  if (userAgent.indexOf(`Mobi`) > -1) {
    device = "모바일";
  } else {
    device = "PC";
  }

  ///////////// - EVENT HANDLER- ////////////
  const getIpHandler = () => {
    var head = document.getElementsByTagName("head")[0];
    var script = document.createElement("script");
    window.getIP = (json) => {
      setIP(json.ip);
    };
    script.type = "text/javascript";
    script.src = "https://api.ipify.org?format=jsonp&callback=getIP";
    head.appendChild(script);
  };

  const _addAceeptRecord = async (isVisit) => {
    const d = new Date();
    const year = d.getFullYear();
    let month = d.getMonth() + 1;
    let date = d.getDate();
    month = ("00" + month).slice(-2);
    date = ("00" + date).slice(-2);

    const regDate = year + month + date;

    const {
      data: { addAcceptRecord },
    } = await addAcceptRecordMutation({
      variables: {
        date: regDate,
        browser: browser,
        platform: platform,
        device: device,
        ipAdress: ip,
        title: title,
        isVisit,
      },
    });

    await sessionStorage.setItem("ALKJSDLJOQIUALSX", "LAZKNJXOIUQASDSA");
  };

  ////////////// - USE EFFECT- //////////////
  useEffect(() => {
    scroll.scrollTo(0);

    mainBannerRefetch();
    mobileBannerRefetch();
  }, []);

  useEffect(() => {
    getIpHandler();
  }, []);

  useEffect(() => {
    if (ip) {
      const item = sessionStorage.getItem("ALKJSDLJOQIUALSX");

      _addAceeptRecord(item === "LAZKNJXOIUQASDSA");
    }
  }, [ip]);

  return (
    <MM00Presenter
      mainBannerData={mainBannerData && mainBannerData.getMainBannerAll}
      mobileBannerData={
        mobileBannerData && mobileBannerData.getMobileMainBannerAll
      }
    />
  );
};

export default MM00Container;
