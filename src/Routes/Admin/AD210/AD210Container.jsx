import React, { useEffect, useState, useRef } from "react";
import AD210Presenter from "./AD210Presenter";
import { useMutation, useQuery } from "@apollo/client";
import { GET_PRODUCT, DELETE_PRODUCT } from "./AD210Queries.js";
import { toast } from "react-toastify";
import storageFn from "../../../fsStorage";
import useInput from "../../../Components/Hooks/useInput";
import { emptyCheck, progressLoading } from "../../../commonUtils";
import confirm from "../../../Components/confirm/confirm";

export default ({ history }) => {
  ////////////// - USE STATE- ///////////////
  const [currentTab, setCurrentTab] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [searchValue, setSearchValue] = useState("");
  const searchType = useInput(``);

  const [selectData, setSelectData] = useState(null);
  const [dataList, setDataList] = useState(null);

  ////////////// - USE REF- ////////////////

  ////////////// - VARIABLE- ////////////////

  const headers = [
    { label: "번호", key: "no" },
    { label: "productType", key: "productType" },
    { label: "productSubType", key: "productSubType" },
    { label: "keyType", key: "keyType" },
    { label: "mainTitle", key: "mainTitle" },
    { label: "productName", key: "productName" },
    { label: "modelName", key: "modelName" },
    { label: "size", key: "size" },
    { label: "weight", key: "weight" },
    { label: "productIcon", key: "productIcon" },
    { label: "iconContent1", key: "iconContent1" },
    { label: "productContent", key: "productContent" },
    { label: "warningContent", key: "warningContent" },
    { label: "settingImage", key: "settingImage" },
    { label: "settingTitle", key: "settingTitle" },
    { label: "settingContent", key: "settingContent" },
    { label: "pointTitle", key: "pointTitle" },
    { label: "pointContent1", key: "pointContent1" },
    { label: "pointContent2", key: "pointContent2" },
    { label: "pointContent3", key: "pointContent3" },
    { label: "featureImage1", key: "featureImage1" },
    { label: "featureTitle1", key: "featureTitle1" },
    { label: "featureSubTitle1", key: "featureSubTitle1" },
    { label: "featureContent1", key: "featureContent1" },
    { label: "featureImage2", key: "featureImage2" },
    { label: "featureTitle2", key: "featureTitle2" },
    { label: "featureSubTitle2", key: "featureSubTitle2" },
    { label: "featureContent2", key: "featureContent2" },
    { label: "specName", key: "specName" },
    { label: "specImage1", key: "specImage1" },
    { label: "specImage2", key: "specImage2" },
    { label: "specImage3", key: "specImage3" },
    { label: "specDetailTitle1", key: "specDetailTitle1" },
    { label: "specDetailContent1", key: "specDetailContent1" },
    { label: "specDetailImage1", key: "specDetailImage1" },
    { label: "specDetailTitle2", key: "specDetailTitle2" },
    { label: "specDetailContent2", key: "specDetailContent2" },
    { label: "specDetailImage2", key: "specDetailImage2" },
    { label: "specDetailTitle3", key: "specDetailTitle3" },
    { label: "specDetailContent3", key: "specDetailContent3" },
    { label: "specDetailImage3", key: "specDetailImage3" },
    { label: "finalTitle", key: "finalTitle" },
    { label: "cerIconImage1", key: "cerIconImage1" },
    { label: "cerIconImage2", key: "cerIconImage2" },
    { label: "cerIconImage3", key: "cerIconImage3" },
    { label: "cerIconImage4", key: "cerIconImage4" },
    { label: "cerIconImage5", key: "cerIconImage5" },
    { label: "cerIconImage6", key: "cerIconImage6" },
    { label: "cerContent1", key: "cerContent1" },
    { label: "cerContent2", key: "cerContent2" },
    { label: "cerContent3", key: "cerContent3" },
    { label: "cerContent4", key: "cerContent4" },
    { label: "cerContent5", key: "cerContent5" },
    { label: "cerContent6", key: "cerContent6" },
    { label: "filePath1", key: "filePath1" },
    { label: "fileOriginName1", key: "fileOriginName1" },
    { label: "filePath2", key: "filePath2" },
    { label: "fileOriginName2", key: "fileOriginName2" },
    { label: "thumbnailPath", key: "thumbnailPath" },
    { label: "thumbnailPath2", key: "thumbnailPath2" },
    { label: "createdAt", key: "createdAt" },
    { label: "isDelete", key: "isDelete" },
    { label: "deletedAt", key: "deletedAt" },
  ];

  ////////////// - USE QUERY- ///////////////
  const { data: nDatum, refetch: nRefetch } = useQuery(GET_PRODUCT, {
    variables: {
      searchName: searchValue,
      searchType: searchType.value,
    },
  });

  ////////////// - USE MUTATION- //////////////
  const [deleteProductMutation] = useMutation(DELETE_PRODUCT);

  ////////////// - USE HANDLER- //////////////
  const moveUpdateProductPage = () => {
    confirm(
      "페이지 이동",
      "해당 제품 수정페이지로 이동하시겠습니까?",
      moveUpdateProductPageAfter,
      null
    );
  };

  const moveUpdateProductPageAfter = () => {
    history.push(`/admin/productUpdateManagement/${selectData._id}`);
  };

  const dataClickHandler = (data) => {
    setSelectData(data);
  };

  const deleteProductHandler = () => {
    confirm(
      `DELETE`,
      `해당 데이터를 삭제하시겠습니까?`,
      deleteProductHandlerAfter,
      null
    );
  };

  const deleteProductHandlerAfter = async () => {
    const { data } = await deleteProductMutation({
      variables: {
        id: selectData && selectData._id,
      },
    });

    if (data.deleteProduct) {
      toast.info("데이터가 삭제되었습니다.");
      nRefetch();
    } else {
      toast.error("처리 중 문제가 발생했습니다. 개발사에게 문의해주세요.");
    }
  };

  const moveCreateProductPage = () => {
    confirm(
      "페이지 이동",
      "해당 데이터 등록페이지로 이동하시겠습니까?",
      moveCreateProductPageAfter,
      null
    );
  };

  const moveCreateProductPageAfter = () => {
    history.push(`/admin/productCreateManagement`);
  };

  const moveProductPage = () => {
    history.push(`/usb/${selectData._id}`);
  };

  ////////////// - USE EFFECT- ///////////////
  useEffect(() => {
    nRefetch();
  }, []);

  useEffect(() => {}, [currentTab]);

  useEffect(() => {
    if (nDatum) {
      const scvData = [];

      nDatum &&
        nDatum.getProduct.map((data, idx) => {
          scvData.push({
            no: idx + 1,
            productType: data.productType,
            productSubType: data.productSubType,
            keyType: data.keyType,
            mainTitle: data.mainTitle,
            productName: data.productName,
            modelName: data.modelName,
            size: data.size,
            weight: data.weight,
            productIcon: data.productIcon,
            iconContent1: data.iconContent1,
            productContent: data.productContent,
            warningContent: data.warningContent,
            settingImage: data.settingImage,
            settingTitle: data.settingTitle,
            settingContent: data.settingContent,
            pointTitle: data.pointTitle,
            pointContent1: data.pointContent1,
            pointContent2: data.pointContent2,
            pointContent3: data.pointContent3,
            featureImage1: data.featureImage1,
            featureTitle1: data.featureTitle1,
            featureSubTitle1: data.featureSubTitle1,
            featureContent1: data.featureContent1,
            featureImage2: data.featureImage2,
            featureTitle2: data.featureTitle2,
            featureSubTitle2: data.featureSubTitle2,
            featureContent2: data.featureContent2,
            specName: data.specName,
            specImage1: data.specImage1,
            specImage2: data.specImage2,
            specImage3: data.specImage3,
            specDetailTitle1: data.specDetailTitle1,
            specDetailContent1: data.specDetailContent1,
            specDetailImage1: data.specDetailImage1,
            specDetailTitle2: data.specDetailTitle2,
            specDetailContent2: data.specDetailContent2,
            specDetailImage2: data.specDetailImage2,
            specDetailTitle3: data.specDetailTitle3,
            specDetailContent3: data.specDetailContent3,
            specDetailImage3: data.specDetailImage3,
            finalTitle: data.finalTitle,
            cerIconImage1: data.cerIconImage1,
            cerIconImage2: data.cerIconImage2,
            cerIconImage3: data.cerIconImage3,
            cerIconImage4: data.cerIconImage4,
            cerIconImage5: data.cerIconImage5,
            cerIconImage6: data.cerIconImage6,
            cerContent1: data.cerContent1,
            cerContent2: data.cerContent2,
            cerContent3: data.cerContent3,
            cerContent4: data.cerContent4,
            cerContent5: data.cerContent5,
            cerContent6: data.cerContent6,
            filePath1: data.filePath1,
            fileOriginName1: data.fileOriginName1,
            filePath2: data.filePath2,
            fileOriginName2: data.fileOriginName2,
            thumbnailPath: data.thumbnailPath,
            thumbnailPath2: data.thumbnailPath2,
            createdAt: data.createdAt,
            isDelete: data.isDelete,
            deletedAt: data.deletedAt,
          });
        });
      setDataList(scvData);
      console.log(scvData);
    }
  }, [nDatum]);

  return (
    <AD210Presenter
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      isLoading={isLoading}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchType={searchType}
      selectData={selectData}
      //
      nDatum={nDatum && nDatum.getProduct}
      svcData={dataList && dataList}
      headers={headers}
      //
      dataClickHandler={dataClickHandler}
      deleteProductHandler={deleteProductHandler}
      moveCreateProductPage={moveCreateProductPage}
      moveProductPage={moveProductPage}
      moveUpdateProductPage={moveUpdateProductPage}
    />
  );
};
