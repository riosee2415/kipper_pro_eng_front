import React, { useEffect, useState, useRef } from "react";
import AD205Presenter from "./AD205Presenter";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_CATALOGUE,
  GET_ALL_CATALOGUE,
  UPDATE_CATALOGUE,
  DELETE_CATALOGUE,
} from "./AD205Queries.js";
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
  const filePathInput = useInput(``);
  const fileNameInput = useInput(``);

  const idUpset = useInput(``);
  const titleUpset = useInput(``);
  const filePathUpset = useInput(``);
  const fileNameUpset = useInput(``);
  ////////////// - USE REF- ////////////////////
  const fileRef = useRef();

  ////////////// - VARIABLE- ///////////////////

  ////////////// - USE QUERY- /////////////////

  const { data: cDatum, refetch: cRefetch } = useQuery(GET_ALL_CATALOGUE);

  console.log(cDatum);

  ////////////// - USE MUTATION- //////////////
  const [createCatalogueMutation] = useMutation(CREATE_CATALOGUE);
  const [updateCatalogueMutation] = useMutation(UPDATE_CATALOGUE);
  const [deleteCatalogueMutation] = useMutation(DELETE_CATALOGUE);

  ////////////// - USE HANDLER- ///////////////
  const fileChangeHandler1 = async (e) => {
    const fileName = e.target.files[0].name;

    setIsLoading(true);
    const path = await storageFn.uploadFile(
      "KEEPERKRPRO/uploads/AD204",
      e.target.files[0].name,
      e.target.files[0]
    );

    const db_path = await storageFn.getSotragePath(path);
    filePathInput.setValue(db_path);
    fileNameInput.setValue(fileName);

    setIsLoading(false);
  };

  const fileChangeHandler2 = async (e) => {
    const fileName = e.target.files[0].name;

    setIsLoading(true);
    const path = await storageFn.uploadFile(
      "KEEPERKRPRO/uploads/AD205",
      e.target.files[0].name,
      e.target.files[0]
    );

    const db_path = await storageFn.getSotragePath(path);
    filePathUpset.setValue(db_path);
    fileNameUpset.setValue(fileName);

    setIsLoading(false);
  };

  const modalHandler = () => {
    setModalFlag(!modalFlag);
  };

  const modalHandler2 = (
    id = "",
    title = "",
    filePath = "",
    fileOriginName = ""
  ) => {
    setModalFlag2(!modalFlag2);

    if (modalFlag2) {
      titleUpset.setValue(``);
      filePathUpset.setValue(``);
      fileNameUpset.setValue(``);
    } else {
      idUpset.setValue(id);
      titleUpset.setValue(title);
      filePathUpset.setValue(filePath);
      fileNameUpset.setValue(fileOriginName);
    }
  };

  const createCatalogueHandler = () => {
    confirm(
      `CREATE`,
      `카탈로그 정보를 추가하시겠습니까 ?`,
      createCatalogueHandlerAfter,
      null
    );
  };

  const createCatalogueHandlerAfter = async () => {
    if (!emptyCheck(titleInput.value)) {
      toast.error("타이틀은 필수 입력사항 입니다.");
      return;
    }

    if (!emptyCheck(fileNameInput.value)) {
      toast.error("파일은 필수 사항 입니다.");
      return;
    }

    if (!emptyCheck(filePathInput.value)) {
      toast.error("파일은 필수 사항 입니다.");
      return;
    }

    const { data } = await createCatalogueMutation({
      variables: {
        title: titleInput.value,
        filePath: filePathInput.value ? filePathInput.value : "-",
        fileOriginName: fileNameInput.value ? fileNameInput.value : "-",
      },
    });

    if (data.createCatalogue) {
      toast.success("카탈로그 정보가 추가 되었습니다.");
      modalHandler();
      cRefetch();
      filePathInput.setValue(``);
      fileNameInput.setValue(``);
      titleInput.setValue(``);
    } else {
      toast.error(
        "카탈로그 추가에 실패했습니다. 개발사에 문의해주시기 바랍니다."
      );
    }
  };

  const updateCatalogueHandler = () => {
    confirm(
      `UPDATE`,
      `카탈로그 정보를 수정하시겠습니까?`,
      updateCatalogueHandlerAfter,
      null
    );
  };

  const updateCatalogueHandlerAfter = async () => {
    if (!emptyCheck(titleUpset.value)) {
      toast.error("타이틀은 필수 입력사항 입니다.");
      return;
    }

    if (!emptyCheck(fileNameUpset.value)) {
      toast.error("파일은 필수 사항 입니다.");
      return;
    }

    if (!emptyCheck(filePathUpset.value)) {
      toast.error("파일은 필수 사항 입니다.");
      return;
    }

    const { data } = await updateCatalogueMutation({
      variables: {
        id: idUpset.value,
        title: titleUpset.value,
        filePath: filePathUpset.value,
        fileOriginName: fileNameUpset.value,
      },
    });

    if (data.updateCatalogue) {
      toast.success("카탈로그 정보가 수정되었습니다.");
      modalHandler2();
      cRefetch();
      return;
    } else {
      toast.error("카탈로그 정보 추가에 실패했습니다.");
    }
  };

  const deleteCatalogueHandler = (id) => {
    confirm(
      `DELETE`,
      `해당 데이터를 삭제하시겠습니까?`,
      deleteCatalogueHandlerAfter,
      id
    );
  };

  const deleteCatalogueHandlerAfter = async (id) => {
    const { data } = await deleteCatalogueMutation({
      variables: {
        id,
        isDelete: true,
      },
    });

    if (data.deleteCatalogue) {
      toast.success("해당 데이터 정보를 삭제했습니다.");
      cRefetch();
    } else {
      toast.error(
        "데이터 삭제에 실패했습니다. 개발사에 문의해주시기 바랍니다."
      );
    }
  };
  ////////////// - USE EFFECT- ///////////////
  useEffect(() => {
    cRefetch();
  }, []);

  useEffect(() => {}, [currentTab]);

  return (
    <AD205Presenter
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      isLoading={isLoading}
      fileUploadProgress={fileUploadProgress}
      modalFlag={modalFlag}
      modalFlag2={modalFlag2}
      titleInput={titleInput}
      filePathInput={filePathInput}
      fileNameInput={fileNameInput}
      titleUpset={titleUpset}
      filePathUpset={filePathUpset}
      fileNameUpset={fileNameUpset}
      //
      fileRef={fileRef}
      //
      cDatum={cDatum && cDatum.getAllCatalogue}
      //
      fileChangeHandler1={fileChangeHandler1}
      fileChangeHandler2={fileChangeHandler2}
      modalHandler={modalHandler}
      modalHandler2={modalHandler2}
      createCatalogueHandler={createCatalogueHandler}
      updateCatalogueHandler={updateCatalogueHandler}
      deleteCatalogueHandler={deleteCatalogueHandler}
    />
  );
};
