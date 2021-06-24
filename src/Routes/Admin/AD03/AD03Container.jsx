import React, { useEffect, useState, useRef } from "react";
import AD03Presenter from "./AD03Presenter";
import { useMutation, useQuery } from "@apollo/client";
import {
  GET_ALL_FOOTER_INFO,
  CREATE_FOOTERLIST,
  DELETE_FOOTERLIST,
  UPDATE_FOOTERLIST,
} from "./AD03Queries.js";
import { toast } from "react-toastify";
import storageFn from "../../../fsStorage";
import useInput from "../../../Components/Hooks/useInput";
import { emptyCheck, resizeImage } from "../../../commonUtils";
import confirm from "../../../Components/confirm/confirm";
import { progressLoading } from "../../../commonUtils";

export default ({ history }) => {
  ////////////// - USE STATE- //////////////////
  const [currentTab, setCurrentTab] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const fileUploadProgress = useInput(null);

  const [modalFlag, setModalFlag] = useState(false);
  const [modalFlag2, setModalFlag2] = useState(false);

  const titleInput = useInput(``);
  const contentInput = useInput(``);

  const idUpset = useInput(``);
  const titleUpset = useInput(``);
  const contentUpset = useInput(``);

  ////////////// - USE REF- ////////////////////
  const fileRef = useRef();

  ////////////// - VARIABLE- ///////////////////

  ////////////// - USE QUERY- /////////////////
  const { data: footerInfoDatum, refetch: footerInfoRefetch } = useQuery(
    GET_ALL_FOOTER_INFO
  );

  ////////////// - USE MUTATION- //////////////
  const [craateFooterInfoMutation] = useMutation(CREATE_FOOTERLIST);
  const [deleteFooterInfoMutation] = useMutation(DELETE_FOOTERLIST);
  const [updateFooterInfoMutation] = useMutation(UPDATE_FOOTERLIST);

  ////////////// - USE HANDLER- ///////////////
  const fileChangeHandler = async (e) => {
    process.nextTick(() => {
      setIsLoading(true);
    });

    const realFile = e.target.files[0];

    const result = await progressLoading(
      realFile,
      "test",
      fileUploadProgress.setValue,
      setCurrentThumbnail,
      true, // isResize
      350, // if you use resize function, you must be going to write width that this type is only Integer
      350 // if you use resize function, you should be going to write height that this type is only Integer
    );

    if (result) {
      setIsLoading(false);
      fileRef.current.value = null;
    }
  };

  const modalToggleHandler = () => {
    setModalFlag(!modalFlag);
  };

  const createFooterInfoHandler = () => {
    if (!emptyCheck(titleInput.value)) {
      toast.error("TITLE은 필수 입력사항 입니다.");
      return;
    }

    if (!emptyCheck(contentInput.value)) {
      toast.error("CONTENT는 필수 입력사항 입니다.");
      return;
    }

    confirm(
      `UPDATE`,
      `하단정보를 추가하시겠습니까?`,
      createFooterInfoHandlerAfter,
      null
    );
  };

  const createFooterInfoHandlerAfter = async () => {
    const { data } = await craateFooterInfoMutation({
      variables: {
        title: titleInput.value,
        content: contentInput.value,
      },
    });

    if (data.createFooterList) {
      toast.success("하단정보가 추가되었습니다.");
      modalToggleHandler();
      footerInfoRefetch();
      titleInput.setValue(``);
      contentInput.setValue(``);
    } else {
      toast.error("정보입력에 실패하였습니다.");
    }
  };

  const deleteFooterInfoHandler = (id) => {
    confirm(
      `DELETE`,
      `정말 삭제하시겠습니까?`,
      deleteFooterInfoHandlerAfter,
      id
    );
  };

  const deleteFooterInfoHandlerAfter = async (id) => {
    const { data } = await deleteFooterInfoMutation({
      variables: {
        id,
      },
    });

    if (data.deleteFooterList) {
      toast.success("하단정보를 삭제하였습니다.");
      footerInfoRefetch();
    } else {
      toast.error("정보 삭제에 실패하였습니다.");
    }
  };

  const modalToggleHandler2 = (id = "", title = "", content = "") => {
    setModalFlag2(!modalFlag2);

    if (modalFlag2) {
      titleUpset.setValue(``);
      contentUpset.setValue(``);
    } else {
      idUpset.setValue(id);
      titleUpset.setValue(title);
      contentUpset.setValue(content);
    }
  };

  const updateFooterInfoHandler = () => {
    if (!emptyCheck(titleUpset.value)) {
      toast.error("TITLE은 필수 입력사항 입니다.");
    }

    if (!emptyCheck(contentUpset.value)) {
      toast.error("CONTENT은 필수 입력사항 입니다.");
    }

    confirm(
      `UPDATE`,
      `하단정보를 수정하시겠습니까?`,
      updateFooterInfoHandlerAfter,
      null
    );
  };

  const updateFooterInfoHandlerAfter = async () => {
    const { data } = await updateFooterInfoMutation({
      variables: {
        id: idUpset.value,
        title: titleUpset.value,
        content: contentUpset.value,
      },
    });

    if (data.updateFooterList) {
      toast.success("하단정보가 수정되었습니다.");
      modalToggleHandler2();
      footerInfoRefetch();
    } else {
      toast.error("하단정보 수정에 실패했습니다.");
    }
  };

  ////////////// - USE EFFECT- ///////////////
  useEffect(() => {
    footerInfoRefetch();
  }, []);

  useEffect(() => {}, [currentTab]);

  return (
    <AD03Presenter
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      isLoading={isLoading}
      fileUploadProgress={fileUploadProgress}
      modalFlag={modalFlag}
      modalFlag2={modalFlag2}
      titleInput={titleInput}
      contentInput={contentInput}
      titleUpset={titleUpset}
      contentUpset={contentUpset}
      //
      fileRef={fileRef}
      //
      fDatum={footerInfoDatum && footerInfoDatum.getAllFooterInfo}
      //
      fileChangeHandler={fileChangeHandler}
      modalToggleHandler={modalToggleHandler}
      modalToggleHandler2={modalToggleHandler2}
      createFooterInfoHandler={createFooterInfoHandler}
      deleteFooterInfoHandler={deleteFooterInfoHandler}
      updateFooterInfoHandler={updateFooterInfoHandler}
    />
  );
};
