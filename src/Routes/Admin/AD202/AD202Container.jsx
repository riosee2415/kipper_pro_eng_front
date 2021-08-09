import React, { useEffect, useState, useRef } from "react";
import AD202Presenter from "./AD202Presenter";
import { useMutation, useQuery } from "@apollo/client";
import { GET_REFERENCE, DELETE_REFERENCE } from "./AD202Queries.js";
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
  const { data: nDatum, refetch: nRefetch } = useQuery(GET_REFERENCE, {
    variables: {
      searchName: searchValue,
    },
  });

  ////////////// - USE MUTATION- //////////////
  const [deleteReferenceMutation] = useMutation(DELETE_REFERENCE);

  ////////////// - USE HANDLER- //////////////

  const dataClickHandler = (data) => {
    setSelectData(data);
  };

  const deleteReferenceHandler = () => {
    confirm(
      `DELETE`,
      `해당 데이터를 삭제하시겠습니까?`,
      deleteReferenceHandlerAfter,
      null
    );
  };

  const deleteReferenceHandlerAfter = async () => {
    const { data } = await deleteReferenceMutation({
      variables: {
        id: selectData && selectData._id,
      },
    });

    if (data.deleteReference) {
      toast.info("데이터가 삭제되었습니다.");
      setSelectData(null);
      nRefetch();
    } else {
      toast.error("처리 중 문제가 발생했습니다. 개발사에게 문의해주세요.");
    }
  };

  const moveDetailReferencePage = () => {
    confirm(
      "페이지 이동",
      "자료실 페이지로 이동하시겠습니까?",
      moveDetailReferencePageAfter,
      null
    );
  };

  const moveDetailReferencePageAfter = () => {
    window.open(`/#/reference/${selectData._id}`, `_blank`);
  };

  const moveUpdateReferencePage = () => {
    confirm(
      "페이지 이동",
      "해당 데이터 수정페이지로 이동하시겠습니까?",
      moveUpdateReferencePageAfter,
      null
    );
  };

  const moveUpdateReferencePageAfter = () => {
    history.push(`/admin/referenceUpdateManagement/${selectData._id}`);
  };

  const moveCreateReferencePage = () => {
    confirm(
      "페이지 이동",
      "제품 사용설명서 등록페이지로 이동하시겠습니까?",
      moveCreateReferencePageAfter,
      null
    );
  };

  const moveCreateReferencePageAfter = () => {
    history.push(`/admin/referenceCreateManagement`);
  };

  ////////////// - USE EFFECT- ///////////////
  useEffect(() => {
    nRefetch();
  }, []);

  useEffect(() => {}, [currentTab]);

  return (
    <AD202Presenter
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      isLoading={isLoading}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      selectData={selectData}
      //
      nDatum={nDatum && nDatum.getReference}
      //
      dataClickHandler={dataClickHandler}
      deleteReferenceHandler={deleteReferenceHandler}
      moveDetailReferencePage={moveDetailReferencePage}
      moveUpdateReferencePage={moveUpdateReferencePage}
      moveCreateReferencePage={moveCreateReferencePage}
    />
  );
};
