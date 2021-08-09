import React, { useEffect, useState, useRef } from "react";
import AD200Presenter from "./AD200Presenter";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_SIGN } from "./AD200Queries.js";
import { toast } from "react-toastify";
import storageFn from "../../../fsStorage";
import useInput from "../../../Components/Hooks/useInput";
import { progressLoading } from "../../../commonUtils";

export default () => {
  ////////////// - USE STATE- ///////////////
  const [currentTab, setCurrentTab] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const fileUploadProgress = useInput(null);

  const fileRef = useRef();

  const [currentThumbnail, setCurrentThumbnail] = useState("");

  const currentTitle = useInput("");
  const currentType = useInput("");
  ////////////// - VARIABLE- ////////////////

  ////////////// - USE QUERY- ///////////////
  ///////////// - USE MUTATION- /////////////
  const [createSignMutation] = useMutation(CREATE_SIGN);

  ///////////// - EVENT HANDLER- ////////////

  const fileChangeHandler = async (e) => {
    // Presenter Logic
    /**
     *   <Image
              src={imagePath}
              width={`350px`}
              height={`350px`}
              isBorder={true}
              margin={`0px 0px 5px 0px`}
            />
            <FileInput
              id="file-js"
              type="file"
              accept="image/jpeg,image/gif,image/png"
              onChange={fileChangeHandler}
              ref={fileRef}
            />

            {isLoading ? (
              <Wrapper>
                {fileUploadProgress.value && (
                  <FileProgress
                    variant="determinate"
                    value={fileUploadProgress.value}
                  />
                )}
              </Wrapper>
            ) : (
              <FileLabel
                width={`350px`}
                htmlFor={`file-js`}
                margin={`0px 0px 55px 0px`}
              >
                THUMBNAIL UPLOAD
              </FileLabel>
            )}
     * 
     */

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

  const createSignHandler = async () => {
    if (!currentThumbnail || currentThumbnail.trim() === "") {
      toast.error("상품 이미지는 필수 입니다.");
      return;
    }
    if (!currentTitle.value || currentTitle.value.trim() === "") {
      toast.error("제목은 필수 입니다.");
      return;
    }
    if (!currentType.value || currentType.value.trim() === "") {
      toast.error("제목은 필수 입니다.");
      return;
    }

    const { data } = await createSignMutation({
      variables: {
        thumbnail: currentThumbnail,
        title: currentTitle.value,
        type: currentType.value,
      },
    });

    if (data.createSign) {
      toast.info("CREATE SIGN!");

      setCurrentThumbnail("");
      currentTitle.setValue("");
      currentType.setValue("");
    } else {
      toast.error("처리 중 문제가 발생했습니다. 개발사에게 문의해주세요.");
    }
  };
  ////////////// - USE EFFECT- //////////////

  return (
    <AD200Presenter
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      isLoading={isLoading}
      fileRef={fileRef}
      fileUploadProgress={fileUploadProgress}
      //
      currentThumbnail={currentThumbnail}
      currentTitle={currentTitle}
      currentType={currentType}
      //

      fileChangeHandler={fileChangeHandler}
      createSignHandler={createSignHandler}
    />
  );
};
