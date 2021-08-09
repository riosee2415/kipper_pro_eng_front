import React, { useEffect, useState, useRef } from "react";
import AD201Presenter from "./AD201Presenter";
import { useMutation, useQuery } from "@apollo/client";
import {
  GET_SIGN_LIST,
  MODIFY_SIGN_BASIC,
  DELETE_SIGN,
} from "./AD201Queries.js";
import { toast } from "react-toastify";
import storageFn from "../../../fsStorage";
import useInput from "../../../Components/Hooks/useInput";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { resizeImage } from "../../../commonUtils";

export default () => {
  ////////////// - USE REF- ///////////////
  const fileRef = useRef();

  ////////////// - USE STATE- ///////////////
  const [currentTab, setCurrentTab] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [currentId, setCurrentId] = useState("");
  const [currentData, setCurrentData] = useState(null);

  const currentThumbnailPath = useInput(``);
  const currentTitle = useInput(``);
  const currentType = useInput(``);

  ////////////// - VARIABLE- ////////////////

  ////////////// - USE QUERY- ///////////////
  const { data, refetch } = useQuery(GET_SIGN_LIST);

  ///////////// - USE MUTATION- /////////////
  const [modifySignBasicMutation] = useMutation(MODIFY_SIGN_BASIC);
  const [deleteSignMutation] = useMutation(DELETE_SIGN);

  ///////////// - EVENT HANDLER- ////////////
  const eventClickHandler = (data) => {
    setCurrentId(data._id);
    setCurrentData(data);
    currentTitle.setValue(data.title);
    currentType.setValue(data.type);
    currentThumbnailPath.setValue(data.thumbnail);
  };

  const fileChangeHandler = async (e) => {
    setIsLoading(true);

    const file = e.target.files[0];

    if (!file) {
      setIsLoading(false);
      return;
    }

    const db_path = await resizeImage(
      `${process.env["STORAGE_NAME"]}/uploads/sign`,
      file,
      350,
      350
    );

    currentThumbnailPath.setValue(db_path);

    setIsLoading(false);
    fileRef.current.value = null;
  };

  const dialogToggle = () => {
    setOpenDialog(!openDialog);
  };

  const basicInfoSaveHandler = async () => {
    const { data } = await modifySignBasicMutation({
      variables: {
        id: currentId,
        thumbnail: currentThumbnailPath.value,
        title: currentTitle.value,
        type: currentType.value,
      },
    });

    if (data.modifySignBasic) {
      toast.info("UPDATE CONTENT!");
      refetch();
    } else {
      toast.error("처리 중 문제가 발생했습니다. 개발사에게 문의해주세요.");
    }
  };

  const deleteHandler = () => {
    confirmAlert({
      title: "DELETE AWARD",
      message: "선택하신 수상내역을 삭제 하시겠습니까 ?",
      buttons: [
        {
          label: "취소",
          onClick: () => {
            return false;
          },
        },
        {
          label: "확인",
          onClick: () => deleteHandlerAfter(),
        },
      ],
    });
  };

  const deleteHandlerAfter = async () => {
    const { data } = await deleteSignMutation({
      variables: {
        id: currentId,
      },
    });

    if (data.deleteSign) {
      toast.info("DELETE CONTENT!");
      refetch();
      setCurrentData(null);
    } else {
      toast.error("처리 중 문제가 발생했습니다. 개발사에게 문의해주세요.");
    }
  };

  ////////////// - USE EFFECT- //////////////
  useEffect(() => {
    refetch();
  }, []);

  return (
    <AD201Presenter
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      isLoading={isLoading}
      fileRef={fileRef}
      currentId={currentId}
      currentData={currentData}
      currentThumbnailPath={currentThumbnailPath}
      currentTitle={currentTitle}
      currentType={currentType}
      //
      datum={data && data.getSignList}
      //
      eventClickHandler={eventClickHandler}
      fileChangeHandler={fileChangeHandler}
      basicInfoSaveHandler={basicInfoSaveHandler}
      deleteHandler={deleteHandler}
    />
  );
};
