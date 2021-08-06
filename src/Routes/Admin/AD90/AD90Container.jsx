import React, { useEffect, useState, useRef } from "react";
import AD90Presenter from "./AD90Presenter";
import { useMutation, useQuery } from "@apollo/client";
import { EXCEL_DATA_PUSH_EMP } from "./AD90Queries.js";
import { toast } from "react-toastify";
import storageFn from "../../../fsStorage";
import useInput from "../../../Components/Hooks/useInput";
import { emptyCheck } from "../../../commonUtils";
import confirm from "../../../Components/confirm/confirm";

export default ({ history }) => {
  ////////////// - USE STATE- ///////////////
  const [currentTab, setCurrentTab] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const fileRef = useRef();

  ////////////// - VARIABLE- ////////////////

  ////////////// - USE QUERY- ///////////////

  ////////////// - USE MUTATION- //////////////
  const [excelDataPushEmpMutation] = useMutation(EXCEL_DATA_PUSH_EMP);

  ////////////// - USE HANDLER- //////////////
  const fileChangeHandler = async (e) => {
    setIsLoading(true);
    const path = await storageFn.uploadFile(
      "PROJECT_NAME/uploads/FOLDER_NAME",
      e.target.files[0].name,
      e.target.files[0]
    );

    const db_path = await storageFn.getSotragePath(path);
    currentThumbnailPath.setValue(db_path);
    fileRef.current.value = null;

    setIsLoading(false);
  };

  const excelFileHandler = (e) => {
    let input = e.target;
    let reader = new FileReader();

    reader.onload = () => {
      let data = reader.result;
      let workBook = XLSX.read(data, { type: "binary" });

      workBook.SheetNames.forEach((sheetName) => {
        let rows = XLSX.utils.sheet_to_json(workBook.Sheets[sheetName]);

        rows.map(async (data) => {
          await excelDataPushEmpMutation({
            variables: {
              productType: String(data.productType) || `-`,
              productSubType: String(data.productSubType) || `-`,
              keyType: String(data.keyType) || `-`,
              mainTitle: String(data.mainTitle) || `-`,
              productName: String(data.productName) || `-`,
              modelName: String(data.modelName) || `-`,
              size: String(data.size) || `-`,
              weight: String(data.weight) || `-`,
              productIcon: String(data.productIcon) || `-`,
              iconContent1: String(data.iconContent1) || `-`,
              productContent: String(data.productContent) || `-`,
              warningContent: String(data.warningContent) || `-`,
              settingImage: String(data.settingImage) || `-`,
              settingTitle: String(data.settingTitle) || `-`,
              settingContent: String(data.settingContent) || `-`,
              pointTitle: String(data.pointTitle) || `-`,
              pointContent1: String(data.pointContent1) || `-`,
              pointContent2: String(data.pointContent2) || `-`,
              pointContent3: String(data.pointContent3) || `-`,
              featureImage1: String(data.featureImage1) || `-`,
              featureTitle1: String(data.featureTitle1) || `-`,
              featureSubTitle1: String(data.featureSubTitle1) || `-`,
              featureContent1: String(data.featureContent1) || `-`,
              featureImage2: String(data.featureImage2) || `-`,
              featureTitle2: String(data.featureTitle2) || `-`,
              featureSubTitle2: String(data.featureSubTitle2) || `-`,
              featureContent2: String(data.featureContent2) || `-`,
              specName: String(data.specName) || `-`,
              specImage1: String(data.specImage1) || `-`,
              specImage2: String(data.specImage2) || `-`,
              specImage3: String(data.specImage3) || `-`,
              specDetailTitle1: String(data.specDetailTitle1) || `-`,
              specDetailContent1: String(data.specDetailContent1) || `-`,
              specDetailImage1: String(data.specDetailImage1) || `-`,
              specDetailTitle2: String(data.specDetailTitle2) || `-`,
              specDetailContent2: String(data.specDetailContent2) || `-`,
              specDetailImage2: String(data.specDetailImage2) || `-`,
              specDetailTitle3: String(data.specDetailTitle3) || `-`,
              specDetailContent3: String(data.specDetailContent3) || `-`,
              specDetailImage3: String(data.specDetailImage3) || `-`,
              finalTitle: String(data.finalTitle) || `-`,
              finalContent: String(data.finalContent) || `-`,
              cerIconImage1: String(data.cerIconImage1) || `-`,
              cerIconImage2: String(data.cerIconImage2) || `-`,
              cerIconImage3: String(data.cerIconImage3) || `-`,
              cerIconImage4: String(data.cerIconImage4) || `-`,
              cerIconImage5: String(data.cerIconImage5) || `-`,
              cerIconImage6: String(data.cerIconImage6) || `-`,
              cerContent1: String(data.cerContent1) || `-`,
              cerContent2: String(data.cerContent2) || `-`,
              cerContent3: String(data.cerContent3) || `-`,
              cerContent4: String(data.cerContent4) || `-`,
              cerContent5: String(data.cerContent5) || `-`,
              cerContent6: String(data.cerContent6) || `-`,
              filePath1: String(data.filePath1) || `-`,
              fileOriginName1: String(data.fileOriginName1) || `-`,
              filePath2: String(data.filePath2) || `-`,
              fileOriginName2: String(data.fileOriginName2) || `-`,
              thumbnailPath: String(data.thumbnailPath) || `-`,
              thumbnailPath2: String(data.thumbnailPath2) || `-`,
              createdAt: String(data.createdAt) || `-`,
              isDelete: data.isDelete || false,
              deletedAt: String(data.deletedAt) || `-`,
            },
          });
        });
      });
    };

    reader.readAsBinaryString(input.files[0]);
  };

  ////////////// - USE EFFECT- ///////////////
  useEffect(() => {}, []);

  useEffect(() => {}, [currentTab]);

  return (
    <AD90Presenter
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      isLoading={isLoading}
      fileRef={fileRef}
      //
      fileChangeHandler={fileChangeHandler}
      excelFileHandler={excelFileHandler}
    />
  );
};
