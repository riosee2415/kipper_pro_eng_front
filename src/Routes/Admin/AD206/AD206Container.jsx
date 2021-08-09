import React, { useEffect, useState, useRef } from "react";
import AD206Presenter from "./AD206Presenter";
import { useMutation, useQuery } from "@apollo/client";
import { GET_EXHIBITION, DELETE_EXHIBITION } from "./AD206Queries.js";
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
  const { data: nDatum, refetch: nRefetch } = useQuery(GET_EXHIBITION, {
    variables: {
      searchName: searchValue,
    },
  });

  ////////////// - USE MUTATION- //////////////
  const [deleteExhibitionMutation] = useMutation(DELETE_EXHIBITION);

  ////////////// - USE HANDLER- //////////////

  const dataClickHandler = (data) => {
    setSelectData(data);
  };

  const deleteExhibitionHandler = () => {
    confirm(
      `DELETE`,
      `해당 데이터를 삭제하시겠습니까?`,
      deleteExhibitionHandlerAfter,
      null
    );
  };

  const deleteExhibitionHandlerAfter = async () => {
    const { data } = await deleteExhibitionMutation({
      variables: {
        id: selectData && selectData._id,
      },
    });

    if (data.deleteExhibition) {
      toast.info("데이터가 삭제되었습니다.");
      setSelectData(null);
      nRefetch();
    } else {
      toast.error("처리 중 문제가 발생했습니다. 개발사에게 문의해주세요.");
    }
  };

  const moveUpdateExhibitionPage = () => {
    confirm(
      "페이지 이동",
      "해당 데이터 수정페이지로 이동하시겠습니까?",
      moveUpdateExhibitionPageAfter,
      null
    );
  };

  const moveUpdateExhibitionPageAfter = () => {
    history.push(`/admin/exhibitionUpdateManagement/${selectData._id}`);
  };

  const moveCreateExhibitionPage = () => {
    confirm(
      "페이지 이동",
      "해당 데이터 등록페이지로 이동하시겠습니까?",
      moveCreateExhibitionPageAfter,
      null
    );
  };

  const moveCreateExhibitionPageAfter = () => {
    history.push(`/admin/exhibitionCreateManagement`);
  };

  ////////////// - USE EFFECT- ///////////////
  useEffect(() => {
    nRefetch();
  }, []);

  useEffect(() => {}, [currentTab]);

  return (
    <AD206Presenter
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      isLoading={isLoading}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      selectData={selectData}
      //
      nDatum={nDatum && nDatum.getExhibition}
      //
      dataClickHandler={dataClickHandler}
      deleteExhibitionHandler={deleteExhibitionHandler}
      moveUpdateExhibitionPage={moveUpdateExhibitionPage}
      moveCreateExhibitionPage={moveCreateExhibitionPage}
    />
  );
};
