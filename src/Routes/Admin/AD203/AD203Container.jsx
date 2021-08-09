import React, { useEffect, useState, useRef } from "react";
import AD203Presenter from "./AD203Presenter";
import { useMutation, useQuery } from "@apollo/client";
import { GET_REFERENCE_ONE, MODIFY_REFERENCE } from "./AD203Queries.js";
import { toast } from "react-toastify";
import storageFn from "../../../fsStorage";
import useInput from "../../../Components/Hooks/useInput";
import { emptyCheck, progressLoading } from "../../../commonUtils";
import confirm from "../../../Components/confirm/confirm";

export default ({ history, match }) => {
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

  const { data: nData, refetch: nRefetch } = useQuery(GET_REFERENCE_ONE, {
    variables: {
      id: match.params.id,
    },
  });

  ////////////// - USE MUTATION- //////////////
  const [modifyReferenceMutation] = useMutation(MODIFY_REFERENCE);

  ////////////// - USE HANDLER- //////////////

  const fileChangeHandler = async (e) => {
    const fileName = e.target.files[0].name;

    setIsLoading(true);
    const path = await storageFn.uploadFile(
      "KEEPERKRPRO/uploads/AD203",
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

  const referenceSaveHandler = () => {
    confirm(
      `사용설명서 수정`,
      `해당 데이터 정보를 수정하시겠습니까?`,
      referenceSaveHandlerAfter,
      null
    );
  };

  const referenceSaveHandlerAfter = async () => {
    const { data } = await modifyReferenceMutation({
      variables: {
        id: nData.getReferenceOne._id,
        title: currentTitle.value,
        subTitle: currentSubTitle.value,
        thumbnail: currentThumbnail.value,
        filePath: inputFilePath.value ? inputFilePath.value : "-",
        fileOriginName: inputFileName.value ? inputFileName.value : "-",
        link: currentLink.value,
        content: currentContent.value,
      },
    });

    if (data.modifyReference) {
      toast.info("정보가 수정되었습니다.");
      history.push(`/admin/referenceManagement`);
    } else {
      toast.error("처리 중 문제가 발생했습니다. 개발사에게 문의해주세요.");
    }
  };

  const moveListReferencePage = () => {
    confirm(
      "페이지 이동",
      "게시글 목록으로 이동하시겠습니까?",
      moveListReferencePageAfter,
      null
    );
  };

  const moveListReferencePageAfter = () => {
    history.push(`/admin/referenceManagement`);
  };

  ////////////// - USE EFFECT- ///////////////
  useEffect(() => {
    nRefetch();
  }, []);

  useEffect(() => {}, [currentTab]);

  useEffect(() => {
    if (nData) {
      currentTitle.setValue(nData.getReferenceOne.title);
      currentSubTitle.setValue(nData.getReferenceOne.subTitle);
      currentThumbnail.setValue(nData.getReferenceOne.thumbnailPath);
      inputFilePath.setValue(nData.getReferenceOne.filePath);
      inputFileName.setValue(nData.getReferenceOne.fileOriginName);
      currentLink.setValue(nData.getReferenceOne.link);
      currentContent.setValue(nData.getReferenceOne.content);
    }
  }, [nData]);

  return (
    <AD203Presenter
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      isLoading={isLoading}
      currentTitle={currentTitle}
      currentSubTitle={currentSubTitle}
      currentThumbnail={currentThumbnail}
      inputFileName={inputFileName}
      inputFilePath={inputFilePath}
      currentContent={currentContent}
      currentLink={currentLink}
      fileUploadProgress={fileUploadProgress}
      //
      fileRef={fileRef}
      //
      nData={nData && nData.getReferenceOne}
      //
      fileChangeHandlerThumbnail={fileChangeHandlerThumbnail}
      fileChangeHandler={fileChangeHandler}
      referenceSaveHandler={referenceSaveHandler}
      moveListReferencePageAfter={moveListReferencePageAfter}
    />
  );
};
