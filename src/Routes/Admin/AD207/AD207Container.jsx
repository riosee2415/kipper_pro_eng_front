import React, { useEffect, useState, useRef } from "react";
import AD207Presenter from "./AD207Presenter";
import { useMutation, useQuery } from "@apollo/client";
import { GET_EXHIBITION_ONE, MODIFY_EXHIBITION } from "./AD207Queries.js";
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
  const currentThumbnail = useInput(``);
  const currentFiles = useInput(``);
  const fileUploadProgress = useInput(null);

  ////////////// - USE REF- ////////////////
  const fileRef = useRef();

  ////////////// - VARIABLE- ////////////////

  ////////////// - USE QUERY- ///////////////

  const { data: nData, refetch: nRefetch } = useQuery(GET_EXHIBITION_ONE, {
    variables: {
      id: match.params.id,
    },
  });

  ////////////// - USE MUTATION- //////////////
  const [modifyExhibitionMutation] = useMutation(MODIFY_EXHIBITION);

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

  const exhibitionSaveHandler = () => {
    confirm(
      `베너 정보 수정`,
      `해당 베너 정보를 수정하시겠습니까?`,
      exhibitionSaveHandlerAfter,
      null
    );
  };

  const exhibitionSaveHandlerAfter = async () => {
    const { data } = await modifyExhibitionMutation({
      variables: {
        id: nData.getExhibitionOne._id,
        title: currentTitle.value,
        thumbnail: currentThumbnail.value,
      },
    });

    if (data.modifyExhibition) {
      toast.info("정보가 수정되었습니다.");
      history.push(`/admin/exhibitionManagement`);
    } else {
      toast.error("처리 중 문제가 발생했습니다. 개발사에게 문의해주세요.");
    }
  };

  const moveListExhibitionPage = () => {
    confirm(
      "페이지 이동",
      "게시글 목록으로 이동하시겠습니까?",
      moveListExhibitionPageAfter,
      null
    );
  };

  const moveListExhibitionPageAfter = () => {
    history.push(`/admin/exhibitionManagement`);
  };

  ////////////// - USE EFFECT- ///////////////
  useEffect(() => {
    nRefetch();
  }, []);

  useEffect(() => {}, [currentTab]);

  useEffect(() => {
    if (nData) {
      currentTitle.setValue(nData.getExhibitionOne.title);
      currentThumbnail.setValue(nData.getExhibitionOne.thumbnailPath);
    }
  }, [nData]);

  return (
    <AD207Presenter
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      isLoading={isLoading}
      currentTitle={currentTitle}
      currentThumbnail={currentThumbnail}
      currentFiles={currentFiles}
      fileUploadProgress={fileUploadProgress}
      //
      fileRef={fileRef}
      //
      nData={nData && nData.getExhibitionOne}
      //
      fileChangeHandlerThumbnail={fileChangeHandlerThumbnail}
      exhibitionSaveHandler={exhibitionSaveHandler}
      moveListExhibitionPage={moveListExhibitionPage}
    />
  );
};
