import React, { useEffect, useState, useRef } from "react";
import AD213Presenter from "./AD213Presenter";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_LOCATION,
  GET_ALL_LOCATION,
  UPDATE_LOCATION,
  DELETE_LOCATION,
} from "./AD213Queries.js";
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

  const [modalFlag, setModalFlag] = useState(``);
  const [modalFlag2, setModalFlag2] = useState(``);

  const titleInput = useInput(``);
  const linkInput = useInput(``);

  const idUpset = useInput(``);
  const titleUpset = useInput(``);
  const linkUpset = useInput(``);

  ////////////// - USE REF- ////////////////////
  const fileRef = useRef();

  ////////////// - VARIABLE- ///////////////////

  ////////////// - USE QUERY- /////////////////

  const { data: lDatum, refetch: lRefetch } = useQuery(GET_ALL_LOCATION);

  ////////////// - USE MUTATION- //////////////
  const [createLocationMutation] = useMutation(CREATE_LOCATION);
  const [updateLocationMutation] = useMutation(UPDATE_LOCATION);
  const [deleteLocationMutation] = useMutation(DELETE_LOCATION);

  ////////////// - USE HANDLER- ///////////////
  const fileChangeHandler = async (e) => {
    process.nextTick(() => {
      setIsLoading(true);
    });

    const realFile = e.target.files[0];

    const result = await progressLoading(
      realFile,
      "test", // Foldername
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

  const modalHandler = () => {
    setModalFlag(!modalFlag);
  };

  const modalHandler2 = (id = "", title = "", link = "") => {
    setModalFlag2(!modalFlag2);

    if (modalFlag2) {
      titleUpset.setValue(``);
      linkUpset.setValue(``);
    } else {
      idUpset.setValue(id);
      titleUpset.setValue(title);
      linkUpset.setValue(link);
    }
  };

  const createLocationHandler = () => {
    confirm(
      `CREATE`,
      `LOCATION를 추가하시겠습니까 ?`,
      createLocationHandlerAfter,
      null
    );
  };

  const createLocationHandlerAfter = async () => {
    if (!emptyCheck(titleInput.value)) {
      toast.error("Location 이름은 필수 입력사항 입니다.");
      return;
    }
    if (!emptyCheck(linkInput.value)) {
      toast.error("Location 링크는 필수 입력사항 입니다.");
      return;
    }

    const { data } = await createLocationMutation({
      variables: {
        title: titleInput.value,
        link: linkInput.value,
      },
    });

    if (data.createLocation) {
      toast.success("Location LINK가 추가 되었습니다.");
      modalHandler();
      lRefetch();
      titleInput.setValue(``);
      linkInput.setValue(``);
    } else {
      toast.error("Location LINK 추가에 실패했습니다.");
    }
  };

  const updateLocationHandler = () => {
    confirm(
      `UPDATE`,
      `Location LINK를 수정하시겠습니까?`,
      updateLocationHandlerAfter,
      null
    );
  };

  const updateLocationHandlerAfter = async () => {
    if (!emptyCheck(titleUpset.value)) {
      toast.error("Location 이름은 필수 입력사항 입니다.");
      return;
    }
    if (!emptyCheck(linkUpset.value)) {
      toast.error("Location 링크는 필수 입력사항 입니다.");
      return;
    }

    const { data } = await updateLocationMutation({
      variables: {
        id: idUpset.value,
        title: titleUpset.value,
        link: linkUpset.value,
      },
    });

    if (data.updateLocation) {
      toast.success("Location LINK가 수정되었습니다.");
      modalHandler2();
      lRefetch();
      return;
    } else {
      toast.error("Location LINK 추가에 실패했습니다.");
    }
  };

  const deleteLocationHandler = (id) => {
    confirm(
      `DELETE`,
      `Location LINK를 삭제하시겠습니까?`,
      deleteLocationHandlerAfter,
      id
    );
  };

  const deleteLocationHandlerAfter = async (id) => {
    const { data } = await deleteLocationMutation({
      variables: {
        id,
        isDelete: true,
      },
    });

    if (data.deleteLocation) {
      toast.success("Location LINK를 삭제했습니다.");
      lRefetch();
    } else {
      toast.error("Location LINK 삭제에 실패했습니다.");
    }
  };
  ////////////// - USE EFFECT- ///////////////
  useEffect(() => {
    lRefetch();
  }, []);

  useEffect(() => {}, [currentTab]);

  return (
    <AD213Presenter
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      isLoading={isLoading}
      fileUploadProgress={fileUploadProgress}
      modalFlag={modalFlag}
      modalFlag2={modalFlag2}
      titleInput={titleInput}
      linkInput={linkInput}
      titleUpset={titleUpset}
      linkUpset={linkUpset}
      //
      fileRef={fileRef}
      //
      lDatum={lDatum && lDatum.getAllLocation}
      //
      fileChangeHandler={fileChangeHandler}
      modalHandler={modalHandler}
      modalHandler2={modalHandler2}
      createLocationHandler={createLocationHandler}
      updateLocationHandler={updateLocationHandler}
      deleteLocationHandler={deleteLocationHandler}
    />
  );
};
