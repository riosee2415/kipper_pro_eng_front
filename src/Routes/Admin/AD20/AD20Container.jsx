import React, { useEffect, useState, useRef } from "react";
import AD20Presenter from "./AD20Presenter";
import { useMutation, useQuery } from "@apollo/client";
import { GET_MAINBANNER, DELETE_MAINBANNER } from "./AD20Queries.js";
import { toast } from "react-toastify";
import storageFn from "../../../fsStorage";
import useInput from "../../../Components/Hooks/useInput";
import { emptyCheck, progressLoading } from "../../../commonUtils";
import confirm from "../../../Components/confirm/confirm";

export default ({ history }) => {
  ////////////// - USE STATE- ///////////////
  const [currentTab, setCurrentTab] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [searchValue, setSearchValue] = useState("");

  const [selectData, setSelectData] = useState(null);

  ////////////// - USE REF- ////////////////

  ////////////// - VARIABLE- ////////////////

  ////////////// - USE QUERY- ///////////////
  const { data: nDatum, refetch: nRefetch } = useQuery(GET_MAINBANNER, {
    variables: {
      searchName: searchValue,
    },
  });

  ////////////// - USE MUTATION- //////////////
  const [deleteMainBannerMutation] = useMutation(DELETE_MAINBANNER);

  ////////////// - USE HANDLER- //////////////

  const dataClickHandler = (data) => {
    setSelectData(data);
  };

  const deleteMainBannerHandler = () => {
    confirm(
      `DELETE`,
      `베너를 삭제하시겠습니까?`,
      deleteMainBannerHandlerAfter,
      null
    );
  };

  const deleteMainBannerHandlerAfter = async () => {
    const { data } = await deleteMainBannerMutation({
      variables: {
        id: selectData && selectData._id,
      },
    });

    if (data.deleteMainBanner) {
      toast.info("베너가 삭제되었습니다.");
      setSelectData(null);
      nRefetch();
    } else {
      toast.error("처리 중 문제가 발생했습니다. 개발사에게 문의해주세요.");
    }
  };

  const moveDetailBannerPage = () => {
    confirm(
      "페이지 이동",
      "해당 베너 페이지로 이동하시겠습니까?",
      moveDetailBannerPageAfter,
      null
    );
  };

  const moveDetailBannerPageAfter = () => {
    window.open(`/#/mainBanner/${selectData._id}`, `_blank`);
  };

  const moveUpdateBannerPage = () => {
    confirm(
      "페이지 이동",
      "해당 베너 수정페이지로 이동하시겠습니까?",
      moveUpdateBannerPageAfter,
      null
    );
  };

  const moveUpdateBannerPageAfter = () => {
    history.push(`/admin/mainBannerUpdateManagement/${selectData._id}`);
  };

  const moveCreateBannerPage = () => {
    confirm(
      "페이지 이동",
      "해당 베너 등록페이지로 이동하시겠습니까?",
      moveCreateBannerPageAfter,
      null
    );
  };

  const moveCreateBannerPageAfter = () => {
    history.push(`/admin/mainBannerCreateManagement`);
  };

  ////////////// - USE EFFECT- ///////////////
  useEffect(() => {
    nRefetch();
  }, []);

  useEffect(() => {}, [currentTab]);

  return (
    <AD20Presenter
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      isLoading={isLoading}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      selectData={selectData}
      //
      nDatum={nDatum && nDatum.getMainBanner}
      //
      dataClickHandler={dataClickHandler}
      deleteMainBannerHandler={deleteMainBannerHandler}
      moveDetailBannerPage={moveDetailBannerPage}
      moveUpdateBannerPage={moveUpdateBannerPage}
      moveCreateBannerPage={moveCreateBannerPage}
    />
  );
};
