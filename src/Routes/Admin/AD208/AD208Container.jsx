import React, { useEffect, useState, useRef } from "react";
import AD208Presenter from "./AD208Presenter";
import { useMutation, useQuery } from "@apollo/client";
import { REGISTER_EXHIBITION } from "./AD208Queries.js";
import { toast } from "react-toastify";
import storageFn from "../../../fsStorage";
import useInput from "../../../Components/Hooks/useInput";
import { emptyCheck, progressLoading } from "../../../commonUtils";
import confirm from "../../../Components/confirm/confirm";
import useOnlyNumberInput from "../../../Components/Hooks/useOnlyNumberInput";

export default ({ history }) => {
  ////////////// - USE STATE- ///////////////
  const [currentTab, setCurrentTab] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [editContent, setEditContent] = useState("");

  const currentTitle = useInput(``);
  const currentLink = useInput(``);
  const currentThumbnail = useInput(``);

  const [innerImageList, setInnerImageList] = useState([]);
  const inputImageSort = useOnlyNumberInput("");
  const inputCurrentImageSort = useOnlyNumberInput("");

  const fileUploadProgress = useInput(null);

  ////////////// - USE REF- ////////////////
  const fileRef = useRef();

  ////////////// - VARIABLE- ////////////////

  ////////////// - USE QUERY- ///////////////

  ////////////// - USE MUTATION- //////////////
  const [registerExhibitionMutation] = useMutation(REGISTER_EXHIBITION);

  ////////////// - USE HANDLER- //////////////
  const fileChangeHandlerThumbnail = async (e) => {
    process.nextTick(() => {
      setIsLoading(true);
    });

    const realFile = e.target.files[0];

    if (!realFile) {
      setIsLoading(false);
      return;
    }

    const result = await progressLoading(
      realFile,
      "exhibition",
      fileUploadProgress.setValue,
      currentThumbnail.setValue,
      false, // isResize
      1920, // if you use resize function, you must be going to write width that this type is only Integer
      null // if you use resize function, you should be going to write height that this type is only Integer
    );

    if (result) {
      setIsLoading(false);
      fileRef.current.value = null;
    }
  };

  const innerImageSelectHandler = async (e) => {
    ``;
    setIsLoading(true);

    const realFile = e.target.files[0];

    if (!realFile) {
      setIsLoading(false);
      return;
    }

    const path = await storageFn.uploadFile(
      `${process.env.STORAGE_NAME}/uploads/exhibition`,
      realFile.name,
      realFile
    );

    const db_path = await storageFn.getSotragePath(path);

    let tempArr = innerImageList;

    fileRef.current.value = null;

    tempArr.push(db_path);
    setInnerImageList(tempArr);

    setIsLoading(false);
  };

  const removeInnerImageHandler = (idx) => {
    let tempArr = innerImageList;

    tempArr.splice(idx, 1);

    setInnerImageList([...tempArr]);
  };

  const registerExhibition = () => {
    if (!emptyCheck(currentTitle.value)) {
      toast.error("제목은 필수 입력사항 입니다.");
      return;
    }

    if (!emptyCheck(currentThumbnail.value)) {
      toast.error("이미지는 필수 업로드사항 입니다.");
      return;
    }

    confirm(
      `메인베너 등록`,
      `해당 베너를 등록하시겠습니까?`,
      registerExhibitionAfter,
      null
    );
  };
  const registerExhibitionAfter = async () => {
    const { data } = await registerExhibitionMutation({
      variables: {
        title: currentTitle.value,
        thumbnailPath: currentThumbnail.value,
        innerImageList: innerImageList,
      },
    });
    console.log(currentTitle.value);
    console.log(currentThumbnail.value);
    console.log(innerImageList);
    if (data.registerExhibition) {
      toast.info("메인베너 등록 되었습니다.");
      history.push(`/admin/exhibitionManagement`);
    } else {
      toast.error("처리 중 문제가 발생했습니다. 개발사에게 문의해주세요.");
    }
  };

  const moveListExhibitionPage = () => {
    confirm(
      "페이지 이동",
      "리스트로 이동하시겠습니까?",
      moveListExhibitionPagePageAfter,
      null
    );
  };

  const moveListExhibitionPagePageAfter = () => {
    history.push(`/admin/exhibitionManagement`);
  };

  ////////////// - USE EFFECT- ///////////////
  useEffect(() => {}, []);

  useEffect(() => {}, [currentTab]);

  return (
    <AD208Presenter
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      isLoading={isLoading}
      editContent={editContent}
      setEditContent={setEditContent}
      fileUploadProgress={fileUploadProgress}
      currentTitle={currentTitle}
      currentLink={currentLink}
      currentThumbnail={currentThumbnail}
      innerImageSelectHandler={innerImageSelectHandler}
      removeInnerImageHandler={removeInnerImageHandler}
      innerImageList={innerImageList}
      //
      fileRef={fileRef}
      //
      fileChangeHandlerThumbnail={fileChangeHandlerThumbnail}
      registerExhibition={registerExhibition}
      moveListExhibitionPage={moveListExhibitionPage}
    />
  );
};
