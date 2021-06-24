import React, { useEffect, useRef, useState } from "react";
import AD19Presenter from "./AD19Presenter";
import { useMutation, useQuery } from "@apollo/client";
import {
  GET_DIRECTREQUEST,
  MODIFY_DIRECTREQUEST_COMPLETE,
} from "./AD19Queries.js";
import { toast } from "react-toastify";
import storageFn from "../../../fsStorage";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

export default ({ history }) => {
  ////////////// - USE STATE- ///////////////
  const [currentTab, setCurrentTab] = useState(0);
  const [currentData, setCurrentData] = useState("");
  const [currentMemo, setCurrentMemo] = useState("");
  const [canEditor, setCanEditor] = useState(false);

  /////////////// - USE REF- ////////////////
  const descRef = useRef();

  ////////////// - VARIABLE- ////////////////

  ////////////// - USE QUERY- ///////////////
  const { data: dqDatum, refetch: dqRefetch } = useQuery(GET_DIRECTREQUEST, {
    variables: {
      isComplete: currentTab === 0 ? false : true,
    },
  });

  ///////////// - USE MUTATION- /////////////
  const [modifyDirectRequestCompleteMutation] = useMutation(
    MODIFY_DIRECTREQUEST_COMPLETE,
    {
      variables: {
        id: currentData,
        memo: currentMemo,
      },
    }
  );

  ///////////// - EVENT HANDLER- ////////////
  const getDetailDataHandler = (data) => {
    setCanEditor(true);
    setCurrentMemo(data.memo);
    setCurrentData(data._id);
    descRef.current.innerHTML = data.description;
  };

  const completeHandler = () => {
    confirmAlert({
      title: "COMPLETE DIRECTREQUEST",
      message: "문의 처리를 완료하시겠습니까?",
      buttons: [
        {
          label: "취소",
          onClick: () => {
            return false;
          },
        },
        {
          label: "확인",
          onClick: () => completeHandlerAfter(),
        },
      ],
    });
  };

  const completeHandlerAfter = async () => {
    const { data } = await modifyDirectRequestCompleteMutation({
      variables: {
        id: currentData,
      },
    });

    if (data.modifyDirectRequestComplete) {
      toast.info("UPDATE DIRECTREQUEST!");
      dqRefetch();
      dialogOpenToggleHandler();
    } else {
      toast.error("처리 중 문제가 발생했습니다. 개발사에게 문의해주세요.");
    }
  };

  ////////////// - USE EFFECT- //////////////
  useEffect(() => {
    if (sessionStorage.getItem("CXKLJHQOUASDLJKX") === "LJHUQKLJHALXKJDH") {
      history.goBack();
    }
  }, []);

  useEffect(() => {
    descRef.current.innerHTML = "";
    setCanEditor(false);
    dqRefetch();
  }, [currentTab]);

  return (
    <AD19Presenter
      descRef={descRef}
      //
      canEditor={canEditor}
      currentTab={currentTab}
      currentData={currentData}
      currentMemo={currentMemo}
      setCurrentTab={setCurrentTab}
      setCurrentMemo={setCurrentMemo}
      //
      dqDatum={dqDatum && dqDatum.getDirectRequest}
      //
      getDetailDataHandler={getDetailDataHandler}
      completeHandler={completeHandler}
    />
  );
};
