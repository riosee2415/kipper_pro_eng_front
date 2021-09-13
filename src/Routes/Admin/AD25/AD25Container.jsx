import React, { useEffect, useState, useRef } from "react";
import AD25Presenter from "./AD25Presenter";
import { useMutation, useQuery } from "@apollo/client";
import { REGISTER_POPUP } from "./AD25Queries.js";
import { toast } from "react-toastify";
import storageFn from "../../../fsStorage";
import useInput from "../../../Components/Hooks/useInput";
import { emptyCheck, progressLoading } from "../../../commonUtils";
import confirm from "../../../Components/confirm/confirm";

export default ({ history }) => {
  ////////////// - USE STATE- ///////////////
  const [currentTab, setCurrentTab] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const currentTitle = useInput(``);
  const currentThumbnail = useInput(``);
  const currentLink = useInput(``);

  const fileUploadProgress = useInput(null);

  ////////////// - USE REF- ////////////////
  const fileRef = useRef();

  ////////////// - VARIABLE- ////////////////

  ////////////// - USE QUERY- ///////////////

  ////////////// - USE MUTATION- //////////////
  const [registerPopupMutation] = useMutation(REGISTER_POPUP);

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
      "popup",
      fileUploadProgress.setValue,
      currentThumbnail.setValue,
      true, // isResize
      560, // if you use resize function, you must be going to write width that this type is only Integer
      560 // if you use resize function, you should be going to write height that this type is only Integer
    );

    if (result) {
      setIsLoading(false);
      fileRef.current.value = null;
    }
  };

  const registerPopup = () => {
    if (!emptyCheck(currentTitle.value)) {
      toast.error("제목은 필수 입력사항 입니다.");
      return;
    }

    if (!emptyCheck(currentThumbnail.value)) {
      toast.error("이미지는 필수 업로드사항 입니다.");
      return;
    }
    if (!emptyCheck(currentLink.value)) {
      toast.error("링크는 필수 업로드사항 입니다.");
      return;
    }

    confirm(
      `팝업 등록`,
      `해당 팝업을 등록하시겠습니까?`,
      registerPopupAfter,
      null
    );
  };
  const registerPopupAfter = async () => {
    const { data } = await registerPopupMutation({
      variables: {
        title: currentTitle.value,
        thumbnailPath: currentThumbnail.value,
        link: currentLink.value,
      },
    });

    if (data.registerPopup) {
      toast.info("팝업이 등록 되었습니다.");
      history.push(`/admin/popupManagement`);
    } else {
      toast.error("처리 중 문제가 발생했습니다. 개발사에게 문의해주세요.");
    }
  };

  const moveListBannerPage = () => {
    confirm(
      "페이지 이동",
      "리스트로 이동하시겠습니까?",
      moveListBannerPagePageAfter,
      null
    );
  };

  const moveListBannerPagePageAfter = () => {
    history.push(`/admin/popupManagement`);
  };

  ////////////// - USE EFFECT- ///////////////
  useEffect(() => {}, []);

  useEffect(() => {}, [currentTab]);

  return (
    <AD25Presenter
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      isLoading={isLoading}
      currentTitle={currentTitle}
      currentThumbnail={currentThumbnail}
      currentLink={currentLink}
      fileUploadProgress={fileUploadProgress}
      //
      fileRef={fileRef}
      //
      fileChangeHandlerThumbnail={fileChangeHandlerThumbnail}
      registerPopup={registerPopup}
      moveListBannerPage={moveListBannerPage}
    />
  );
};
