import React, { useEffect, useState, useRef } from "react";
import AD204Presenter from "./AD204Presenter";
import { useMutation, useQuery } from "@apollo/client";
import { REGISTER_REFERENCE } from "./AD204Queries.js";
import { toast } from "react-toastify";
import storageFn from "../../../fsStorage";
import useInput from "../../../Components/Hooks/useInput";
import { emptyCheck, progressLoading } from "../../../commonUtils";
import confirm from "../../../Components/confirm/confirm";

export default ({ history }) => {
  ////////////// - USE STATE- ///////////////
  const [currentTab, setCurrentTab] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [editContent, setEditContent] = useState("");

  const currentTitle = useInput(``);
  const currentSubTitle = useInput(``);
  const currentThumbnail = useInput(``);
  const inputFilePath = useInput("");
  const inputFileName = useInput("");
  const currentLink = useInput(``);
  const currentContent = useInput(``);

  const fileUploadProgress = useInput(null);

  ////////////// - USE REF- ////////////////
  const fileRef = useRef();

  ////////////// - VARIABLE- ////////////////

  ////////////// - USE QUERY- ///////////////

  ////////////// - USE MUTATION- //////////////
  const [registerReferenceMutation] = useMutation(REGISTER_REFERENCE);

  ////////////// - USE HANDLER- //////////////
  const fileChangeHandler = async (e) => {
    const fileName = e.target.files[0].name;

    setIsLoading(true);
    const path = await storageFn.uploadFile(
      "KEEPERKRPRO/uploads/AD204",
      e.target.files[0].name,
      e.target.files[0]
    );

    const db_path = await storageFn.getSotragePath(path);
    inputFilePath.setValue(db_path);
    inputFileName.setValue(fileName);

    setIsLoading(false);
  };

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
      "reference",
      fileUploadProgress.setValue,
      currentThumbnail.setValue,
      true, // isResize
      1920, // if you use resize function, you must be going to write width that this type is only Integer
      null // if you use resize function, you should be going to write height that this type is only Integer
    );

    if (result) {
      setIsLoading(false);
      fileRef.current.value = null;
    }
  };

  const registerReference = () => {
    if (!emptyCheck(currentTitle.value)) {
      toast.error("타이틀은 필수 입력사항 입니다.");
      return;
    }
    if (!emptyCheck(currentSubTitle.value)) {
      toast.error("서브 타이틀은 필수 입력사항 입니다.");
      return;
    }

    if (!emptyCheck(inputFileName.value)) {
      toast.error("파일은 필수 사항 입니다.");
      return;
    }
    if (!emptyCheck(inputFilePath.value)) {
      toast.error("파일은 필수 사항 입니다.");
      return;
    }
    if (!emptyCheck(currentLink.value)) {
      toast.error("링크는 필수 입력사항 입니다.");
      return;
    }
    if (!emptyCheck(currentThumbnail.value)) {
      toast.error("이미지는 필수 업로드사항 입니다.");
      return;
    }
    if (!emptyCheck(currentContent.value)) {
      toast.error("제품 설명은 필수 업로드사항 입니다.");
      return;
    }

    confirm(
      `사용설명서 등록`,
      `해당 데이터를 등록하시겠습니까?`,
      registerReferenceAfter,
      null
    );
  };
  const registerReferenceAfter = async () => {
    const { data } = await registerReferenceMutation({
      variables: {
        title: currentTitle.value,
        subTitle: currentSubTitle.value,
        thumbnailPath: currentThumbnail.value,
        filePath: inputFilePath.value ? inputFilePath.value : "-",
        fileOriginName: inputFileName.value ? inputFileName.value : "-",
        link: currentLink.value,
        content: currentContent.value,
      },
    });

    if (data.registerReference) {
      toast.info("사용설명서 등록 되었습니다.");
      history.push(`/admin/referenceManagement`);
    } else {
      toast.error("처리 중 문제가 발생했습니다. 개발사에게 문의해주세요.");
    }
  };

  const moveListReferencePage = () => {
    confirm(
      "페이지 이동",
      "리스트로 이동하시겠습니까?",
      moveListReferencePagePageAfter,
      null
    );
  };

  const moveListReferencePagePageAfter = () => {
    history.push(`/admin/referenceManagement`);
  };

  ////////////// - USE EFFECT- ///////////////
  useEffect(() => {}, []);

  useEffect(() => {}, [currentTab]);

  return (
    <AD204Presenter
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      isLoading={isLoading}
      currentTitle={currentTitle}
      currentSubTitle={currentSubTitle}
      currentThumbnail={currentThumbnail}
      inputFilePath={inputFilePath}
      inputFileName={inputFileName}
      currentLink={currentLink}
      currentContent={currentContent}
      //
      fileUploadProgress={fileUploadProgress}
      fileRef={fileRef}
      //
      fileChangeHandler={fileChangeHandler}
      fileChangeHandlerThumbnail={fileChangeHandlerThumbnail}
      registerReference={registerReference}
      moveListReferencePagePageAfter={moveListReferencePagePageAfter}
    />
  );
};
