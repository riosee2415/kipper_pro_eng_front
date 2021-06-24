import React, { useEffect, useState, useRef } from "react";
import AD22Presenter from "./AD22Presenter";
import { useMutation, useQuery } from "@apollo/client";
import { REGISTER_MAINBANNER } from "./AD22Queries.js";
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
  const currentLink = useInput(``);
  const currentThumbnail = useInput(``);

  const fileUploadProgress = useInput(null);

  ////////////// - USE REF- ////////////////
  const fileRef = useRef();

  ////////////// - VARIABLE- ////////////////

  ////////////// - USE QUERY- ///////////////

  ////////////// - USE MUTATION- //////////////
  const [registerMainBannerMutation] = useMutation(REGISTER_MAINBANNER);

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
      "mainBanner",
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

  const registerMainBanner = () => {
    if (!emptyCheck(currentTitle.value)) {
      toast.error("제목은 필수 입력사항 입니다.");
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
    if (!emptyCheck(editContent)) {
      toast.error("내용은 필수 입력사항 입니다.");
      return;
    }

    confirm(
      `메인베너 등록`,
      `해당 베너를 등록하시겠습니까?`,
      registerMainBannerAfter,
      null
    );
  };
  const registerMainBannerAfter = async () => {
    const { data } = await registerMainBannerMutation({
      variables: {
        title: currentTitle.value,
        link: currentLink.value,
        thumbnailPath: currentThumbnail.value,
        description: editContent,
      },
    });

    if (data.registerMainBanner) {
      toast.info("메인베너 등록 되었습니다.");
      history.push(`/admin/mainBannerManagement`);
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
    history.push(`/admin/mainBannerManagement`);
  };

  ////////////// - USE EFFECT- ///////////////
  useEffect(() => {}, []);

  useEffect(() => {}, [currentTab]);

  return (
    <AD22Presenter
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      isLoading={isLoading}
      editContent={editContent}
      setEditContent={setEditContent}
      fileUploadProgress={fileUploadProgress}
      currentTitle={currentTitle}
      currentLink={currentLink}
      currentThumbnail={currentThumbnail}
      //
      fileRef={fileRef}
      //
      fileChangeHandlerThumbnail={fileChangeHandlerThumbnail}
      registerMainBanner={registerMainBanner}
      moveListBannerPage={moveListBannerPage}
    />
  );
};
