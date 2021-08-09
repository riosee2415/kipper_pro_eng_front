import React, { useEffect, useState, useRef } from "react";
import AD211Presenter from "./AD211Presenter";
import { useMutation, useQuery } from "@apollo/client";
import {
  GET_PRODUCT_ONE,
  MODIFY_PRODUCT,
  CREATE_COLORIMAGES,
  DELETE_COLORIMAGES,
} from "./AD211Queries.js";
import { toast } from "react-toastify";
import storageFn from "../../../fsStorage";
import useInput from "../../../Components/Hooks/useInput";
import { emptyCheck, progressLoading } from "../../../commonUtils";
import confirm from "../../../Components/confirm/confirm";

export default ({ history, match }) => {
  ////////////// - USE STATE- ///////////////
  const [currentTab, setCurrentTab] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const currentImagePath = useInput(``);
  const currentColor = useInput(``);
  const currentColorCode = useInput(``);
  const currentSort = useInput(``);
  const [colorImageList, setColorImageList] = useState([]);
  const [currentPid, setCurrentPid] = useState("");

  ////////////////////////////////////////////

  const [editContent, setEditContent] = useState("");

  const thumbnailPathInput = useInput(``);
  const thumbnailPath2Input = useInput(``);
  const colorImageInput = useInput(``);
  const productTypeInput = useInput(``);
  const productSubTypeInput = useInput(``);
  const keyTypeInput = useInput(``);
  const mainTitleInput = useInput(``);
  const productNameInput = useInput(``);
  const modelNameInput = useInput(``);
  const sizeInput = useInput(``);
  const weightInput = useInput(``);
  const productIconInput = useInput(``);
  const iconContent1Input = useInput(``);
  const [productContentInput, setProductContentInput] = useState(``);
  const [warningContentInput, setWarningContentInput] = useState(``);
  const settingImageInput = useInput(``);
  const [settingTitleInput, setSettingTitleInput] = useState(``);
  const [settingContentInput, setSettingContentInput] = useState(``);
  const [pointTitleInput, setPointTitleInput] = useState(``);
  const [pointContentInput1, setPointContentInput1] = useState(``);
  const [pointContentInput2, setPointContentInput2] = useState(``);
  const [pointContentInput3, setPointContentInput3] = useState(``);
  const featureImage1Input = useInput(``);
  const [featureTitle1Input, setFeatureTitle1Input] = useState(``);
  const [featureSubTitle1Input, setFeatureSubTitle1Input] = useState(``);
  const [featureContent1Input, setFeatureContent1Input] = useState(``);
  const featureImage2Input = useInput(``);
  const [featureTitle2Input, setFeatureTitle2Input] = useState(``);
  const [featureSubTitle2Input, setFeatureSubTitle2Input] = useState(``);
  const [featureContent2Input, setFeatureContent2Input] = useState(``);
  const [specNameInput, setSpecNameInput] = useState(``);
  const specImage1Input = useInput(``);
  const specImage2Input = useInput(``);
  const specImage3Input = useInput(``);
  const [specDetailTitle1Input, setSpecDetailTitle1Input] = useState(``);
  const [specDetailContent1Input, setSpecDetailContent1Input] = useState(``);
  const specDetailImage1Input = useInput(``);
  const [specDetailTitle2Input, setSpecDetailTitle2Input] = useState(``);
  const [specDetailContent2Input, setSpecDetailContent2Input] = useState(``);
  const specDetailImage2Input = useInput(``);
  const [specDetailTitle3Input, setSpecDetailTitle3Input] = useState(``);
  const [specDetailContent3Input, setSpecDetailContent3Input] = useState(``);
  const specDetailImage3Input = useInput(``);
  const [finalTitleInput, setFinalTitleInput] = useState(``);
  const [finalContentInput, setFinalContentInput] = useState(``);
  const cerIconImage1Input = useInput(``);
  const cerIconImage2Input = useInput(``);
  const cerIconImage3Input = useInput(``);
  const cerIconImage4Input = useInput(``);
  const cerIconImage5Input = useInput(``);
  const cerIconImage6Input = useInput(``);
  const cerContent1Input = useInput(``);
  const cerContent2Input = useInput(``);
  const cerContent3Input = useInput(``);
  const cerContent4Input = useInput(``);
  const cerContent5Input = useInput(``);
  const cerContent6Input = useInput(``);
  const inputFilePath1 = useInput("");
  const inputFileName1 = useInput("");
  const inputFilePath2 = useInput("");
  const inputFileName2 = useInput("");

  const fileUploadProgress = useInput(null);

  ////////////// - USE REF- ////////////////
  const fileRef = useRef();

  ////////////// - VARIABLE- ////////////////

  ////////////// - USE QUERY- ///////////////

  const { data: nData, refetch: nRefetch } = useQuery(GET_PRODUCT_ONE, {
    variables: {
      id: match.params.id,
    },
  });

  ////////////// - USE MUTATION- //////////////
  const [modifyProductMutation] = useMutation(MODIFY_PRODUCT);
  const [createColorImagesMutation] = useMutation(CREATE_COLORIMAGES);
  const [deleteColorImagesMutation] = useMutation(DELETE_COLORIMAGES);

  ////////////// - USE HANDLER- //////////////
  const fileLoadChangeHandler1 = async (e) => {
    const fileName = e.target.files[0].name;

    setIsLoading(true);
    const path = await storageFn.uploadFile(
      "KEEPERKRPRO/uploads/AD209",
      e.target.files[0].name,
      e.target.files[0]
    );

    const db_path = await storageFn.getSotragePath(path);
    inputFilePath1.setValue(db_path);
    inputFileName1.setValue(fileName);

    setIsLoading(false);
  };
  const fileLoadChangeHandler2 = async (e) => {
    const fileName = e.target.files[0].name;

    setIsLoading(true);
    const path = await storageFn.uploadFile(
      "KEEPERKRPRO/uploads/AD209",
      e.target.files[0].name,
      e.target.files[0]
    );

    const db_path = await storageFn.getSotragePath(path);
    inputFilePath2.setValue(db_path);
    inputFileName2.setValue(fileName);

    setIsLoading(false);
  };

  const fileChangeHandlerThumbnail = async (e) => {
    process.nextTick(() => {
      setIsLoading(true);
    });

    const realFile = e.target.files[0];
    if (!realFile) {
      setTimeout(() => {
        setIsLoading(false);
      }, 0);
      return;
    }

    const result = await progressLoading(
      realFile,
      "product",
      fileUploadProgress.setValue,
      thumbnailPathInput.setValue,
      false, // isResize
      1920, // if you use resize function, you must be going to write width that this type is only Integer
      null // if you use resize function, you should be going to write height that this type is only Integer
    );

    if (result) {
      setIsLoading(false);
      fileRef.current.value = null;
    }
  };

  const fileChangeHandlerThumbnail2 = async (e) => {
    process.nextTick(() => {
      setIsLoading(true);
    });

    const realFile = e.target.files[0];
    if (!realFile) {
      setTimeout(() => {
        setIsLoading(false);
      }, 0);
      return;
    }

    const result = await progressLoading(
      realFile,
      "product",
      fileUploadProgress.setValue,
      thumbnailPath2Input.setValue,
      false, // isResize
      1920, // if you use resize function, you must be going to write width that this type is only Integer
      null // if you use resize function, you should be going to write height that this type is only Integer
    );

    if (result) {
      setIsLoading(false);
      fileRef.current.value = null;
    }
  };
  const fileChangeHandlerSettingImage = async (e) => {
    process.nextTick(() => {
      setIsLoading(true);
    });

    const realFile = e.target.files[0];

    if (!realFile) {
      setTimeout(() => {
        setIsLoading(false);
      }, 0);
      return;
    }

    const result = await progressLoading(
      realFile,
      "product",
      fileUploadProgress.setValue,
      settingImageInput.setValue,
      false, // isResize
      1920, // if you use resize function, you must be going to write width that this type is only Integer
      null // if you use resize function, you should be going to write height that this type is only Integer
    );

    if (result) {
      setIsLoading(false);
      fileRef.current.value = null;
    }
  };
  const fileChangeHandlerFeature1 = async (e) => {
    process.nextTick(() => {
      setIsLoading(true);
    });

    const realFile = e.target.files[0];

    if (!realFile) {
      setTimeout(() => {
        setIsLoading(false);
      }, 0);
      return;
    }

    const result = await progressLoading(
      realFile,
      "product",
      fileUploadProgress.setValue,
      featureImage1Input.setValue,
      false, // isResize
      1920, // if you use resize function, you must be going to write width that this type is only Integer
      null // if you use resize function, you should be going to write height that this type is only Integer
    );

    if (result) {
      setIsLoading(false);
      fileRef.current.value = null;
    }
  };
  const fileChangeHandlerFeature2 = async (e) => {
    process.nextTick(() => {
      setIsLoading(true);
    });

    const realFile = e.target.files[0];

    if (!realFile) {
      setTimeout(() => {
        setIsLoading(false);
      }, 0);
      return;
    }

    const result = await progressLoading(
      realFile,
      "product",
      fileUploadProgress.setValue,
      featureImage2Input.setValue,
      false, // isResize
      1920, // if you use resize function, you must be going to write width that this type is only Integer
      null // if you use resize function, you should be going to write height that this type is only Integer
    );

    if (result) {
      setIsLoading(false);
      fileRef.current.value = null;
    }
  };
  const fileChangeSpec1 = async (e) => {
    process.nextTick(() => {
      setIsLoading(true);
    });

    const realFile = e.target.files[0];

    if (!realFile) {
      setTimeout(() => {
        setIsLoading(false);
      }, 0);
      return;
    }

    const result = await progressLoading(
      realFile,
      "product",
      fileUploadProgress.setValue,
      specImage1Input.setValue,
      false, // isResize
      1920, // if you use resize function, you must be going to write width that this type is only Integer
      null // if you use resize function, you should be going to write height that this type is only Integer
    );

    if (result) {
      setIsLoading(false);
      fileRef.current.value = null;
    }
  };
  const fileChangeSpec2 = async (e) => {
    process.nextTick(() => {
      setIsLoading(true);
    });

    const realFile = e.target.files[0];

    if (!realFile) {
      setTimeout(() => {
        setIsLoading(false);
      }, 0);
      return;
    }

    const result = await progressLoading(
      realFile,
      "product",
      fileUploadProgress.setValue,
      specImage2Input.setValue,
      false, // isResize
      1920, // if you use resize function, you must be going to write width that this type is only Integer
      null // if you use resize function, you should be going to write height that this type is only Integer
    );

    if (result) {
      setIsLoading(false);
      fileRef.current.value = null;
    }
  };
  const fileChangeSpec3 = async (e) => {
    process.nextTick(() => {
      setIsLoading(true);
    });

    const realFile = e.target.files[0];

    if (!realFile) {
      setTimeout(() => {
        setIsLoading(false);
      }, 0);
      return;
    }

    const result = await progressLoading(
      realFile,
      "product",
      fileUploadProgress.setValue,
      specImage3Input.setValue,
      false, // isResize
      1920, // if you use resize function, you must be going to write width that this type is only Integer
      null // if you use resize function, you should be going to write height that this type is only Integer
    );

    if (result) {
      setIsLoading(false);
      fileRef.current.value = null;
    }
  };
  const fileChangeSpecDetail1 = async (e) => {
    process.nextTick(() => {
      setIsLoading(true);
    });

    const realFile = e.target.files[0];

    if (!realFile) {
      setTimeout(() => {
        setIsLoading(false);
      }, 0);
      return;
    }

    const result = await progressLoading(
      realFile,
      "product",
      fileUploadProgress.setValue,
      specDetailImage1Input.setValue,
      false, // isResize
      1920, // if you use resize function, you must be going to write width that this type is only Integer
      null // if you use resize function, you should be going to write height that this type is only Integer
    );

    if (result) {
      setIsLoading(false);
      fileRef.current.value = null;
    }
  };
  const fileChangeSpecDetail2 = async (e) => {
    process.nextTick(() => {
      setIsLoading(true);
    });

    const realFile = e.target.files[0];

    if (!realFile) {
      setTimeout(() => {
        setIsLoading(false);
      }, 0);
      return;
    }

    const result = await progressLoading(
      realFile,
      "product",
      fileUploadProgress.setValue,
      specDetailImage2Input.setValue,
      false, // isResize
      1920, // if you use resize function, you must be going to write width that this type is only Integer
      null // if you use resize function, you should be going to write height that this type is only Integer
    );

    if (result) {
      setIsLoading(false);
      fileRef.current.value = null;
    }
  };
  const fileChangeSpecDetail3 = async (e) => {
    process.nextTick(() => {
      setIsLoading(true);
    });

    const realFile = e.target.files[0];

    if (!realFile) {
      setTimeout(() => {
        setIsLoading(false);
      }, 0);
      return;
    }

    const result = await progressLoading(
      realFile,
      "product",
      fileUploadProgress.setValue,
      specDetailImage3Input.setValue,
      false, // isResize
      1920, // if you use resize function, you must be going to write width that this type is only Integer
      null // if you use resize function, you should be going to write height that this type is only Integer
    );

    if (result) {
      setIsLoading(false);
      fileRef.current.value = null;
    }
  };

  const colorImagesChangeHandler = async (e) => {
    process.nextTick(() => {
      setIsLoading(true);
    });

    const realFile = e.target.files[0];

    if (!realFile) {
      setTimeout(() => {
        setIsLoading(false);
      }, 0);
      return;
    }

    const result = await progressLoading(
      realFile,
      "product",
      fileUploadProgress.setValue,
      currentImagePath.setValue,
      false, // isResize
      1920, // if you use resize function, you must be going to write width that this type is only Integer
      null // if you use resize function, you should be going to write height that this type is only Integer
    );

    if (result) {
      setIsLoading(false);
      fileRef.current.value = null;
    }
  };

  const removeInnerImageHandler = (idx) => {
    let tempArr = colorImageList;

    tempArr.splice(idx, 1);

    setColorImageList([...tempArr]);
  };
  const createColorImagesHandler = () => {
    confirm(
      `색상 별 이미지 등록`,
      `해당 이미지를 등록하시겠습니까?`,
      createColorImagesHandlerAfter,
      null
    );
  };

  const createColorImagesHandlerAfter = async () => {
    const { data } = await createColorImagesMutation({
      variables: {
        imagePath: currentImagePath.value,
        color: currentColor.value,
        colorCode: currentColorCode.value,
        sort: parseInt(currentSort.value),
      },
    });

    const tempArr = colorImageList.map((data) => {
      return data;
    });

    if (data.createColorImages) {
      toast.info("색상 별 이미지가 등록 되었습니다.");
      tempArr.push(data.createColorImages);

      currentImagePath.setValue();
      currentColor.setValue(``);
      currentColorCode.setValue(``);
      currentSort.setValue(``);
      setColorImageList(tempArr);
    } else {
      toast.error("처리 중 문제가 발생했습니다. 개발사에게 문의해주세요.");
    }
  };

  ////////////////////////////////////////////

  const productSaveHandler = () => {
    confirm(
      `제품 정보 수정`,
      `해당 제품 정보를 수정하시겠습니까?`,
      productSaveHandlerAfter,
      null
    );
  };

  const productSaveHandlerAfter = async () => {
    const tempArr = colorImageList.map((data) => {
      return data._id;
    });
    nData &&
      nData.getProductOne.colorImage.map((data) => tempArr.push(data._id));

    const { data } = await modifyProductMutation({
      variables: {
        id: nData.getProductOne._id,
        thumbnailPath: thumbnailPathInput.value,
        thumbnailPath2: thumbnailPath2Input.value,
        colorImage: tempArr,
        productType: productTypeInput.value,
        productSubType: productSubTypeInput.value,
        keyType: keyTypeInput.value,
        mainTitle: mainTitleInput.value,
        productName: productNameInput.value,
        modelName: modelNameInput.value,
        size: sizeInput.value,
        weight: weightInput.value,
        productIcon: productIconInput.value,
        iconContent1: iconContent1Input.value,
        productContent: productContentInput,
        warningContent: warningContentInput,
        settingImage: settingImageInput.value,
        settingTitle: settingTitleInput,
        settingContent: settingContentInput,
        pointTitle: pointTitleInput,
        pointContent1: pointContentInput1,
        pointContent2: pointContentInput2,
        pointContent3: pointContentInput3,
        featureImage1: featureImage1Input.value,
        featureTitle1: featureTitle1Input,
        featureSubTitle1: featureSubTitle1Input,
        featureContent1: featureContent1Input,
        featureImage2: featureImage2Input.value,
        featureTitle2: featureTitle2Input,
        featureSubTitle2: featureSubTitle2Input,
        featureContent2: featureContent2Input,
        specName: specNameInput,
        specImage1: specImage1Input.value,
        specImage2: specImage2Input.value,
        specImage3: specImage3Input.value,
        specDetailTitle1: specDetailTitle1Input,
        specDetailContent1: specDetailContent1Input,
        specDetailImage1: specDetailImage1Input.value,
        specDetailTitle2: specDetailTitle2Input,
        specDetailContent2: specDetailContent2Input,
        specDetailImage2: specDetailImage2Input.value,
        specDetailTitle3: specDetailTitle3Input,
        specDetailContent3: specDetailContent3Input,
        specDetailImage3: specDetailImage3Input.value,
        finalTitle: finalTitleInput,
        finalContent: finalContentInput,
        cerIconImage1: cerIconImage1Input.value,
        cerIconImage2: cerIconImage2Input.value,
        cerIconImage3: cerIconImage3Input.value,
        cerIconImage4: cerIconImage4Input.value,
        cerIconImage5: cerIconImage5Input.value,
        cerIconImage6: cerIconImage6Input.value,
        cerContent1: cerContent1Input.value,
        cerContent2: cerContent2Input.value,
        cerContent3: cerContent3Input.value,
        cerContent4: cerContent4Input.value,
        cerContent5: cerContent5Input.value,
        cerContent6: cerContent6Input.value,
        filePath1: inputFilePath1.value,
        fileOriginName1: inputFileName1.value,
        filePath2: inputFilePath2.value,
        fileOriginName2: inputFileName2.value,
      },
    });

    if (data.modifyProduct) {
      toast.info("정보가 수정되었습니다.");
      history.push(`/admin/productManagement`);
    } else {
      toast.error("처리 중 문제가 발생했습니다. 개발사에게 문의해주세요.");
    }
  };

  const moveListProductPage = () => {
    confirm(
      "페이지 이동",
      "리스트로 이동하시겠습니까?",
      moveListProductPageAfter,
      null
    );
  };

  const moveListProductPageAfter = () => {
    history.push(`/admin/productManagement`);
  };

  const deleteColorImages = (id, productId) => {
    confirm(
      `DELETE`,
      `해당 색상별 이미지를 삭제하시겠습니까?`,
      deleteColorImagesAfter,
      id,
      productId
    );
  };

  const deleteColorImagesAfter = async (id) => {
    const { data } = await deleteColorImagesMutation({
      variables: {
        id,
        productId: currentPid,
      },
    });
    if (data.deleteColorImages) {
      toast.success("해당 이미지가 삭제되었습니다.");
      nRefetch();
    } else {
      toast.error("삭제에 실패했습니다 개발사에 문의해 주시기바랍니다.");
    }
  };

  ////////////// - USE EFFECT- ///////////////
  useEffect(() => {
    nRefetch();
  }, []);

  useEffect(() => {}, [currentTab]);

  useEffect(() => {
    if (nData) {
      setCurrentPid(nData.getProductOne._id);
      thumbnailPathInput.setValue(nData.getProductOne.thumbnailPath);
      thumbnailPath2Input.setValue(nData.getProductOne.thumbnailPath2);
      productTypeInput.setValue(nData.getProductOne.productType);
      productSubTypeInput.setValue(nData.getProductOne.productSubType);
      keyTypeInput.setValue(nData.getProductOne.keyType);
      mainTitleInput.setValue(nData.getProductOne.mainTitle);
      productNameInput.setValue(nData.getProductOne.productName);
      modelNameInput.setValue(nData.getProductOne.modelName);
      sizeInput.setValue(nData.getProductOne.size);
      weightInput.setValue(nData.getProductOne.weight);
      productIconInput.setValue(nData.getProductOne.productIcon);
      iconContent1Input.setValue(nData.getProductOne.iconContent1);
      setProductContentInput(nData.getProductOne.productContent);
      setWarningContentInput(nData.getProductOne.warningContent);
      settingImageInput.setValue(nData.getProductOne.settingImage);
      setSettingTitleInput(nData.getProductOne.settingTitle);
      setSettingContentInput(nData.getProductOne.settingContent);
      setPointTitleInput(nData.getProductOne.pointTitle);
      setPointContentInput1(nData.getProductOne.pointContent1);
      setPointContentInput2(nData.getProductOne.pointContent2);
      setPointContentInput3(nData.getProductOne.pointContent3);
      featureImage1Input.setValue(nData.getProductOne.featureImage1);
      setFeatureTitle1Input(nData.getProductOne.featureTitle1);
      setFeatureSubTitle1Input(nData.getProductOne.featureSubTitle1);
      setFeatureContent1Input(nData.getProductOne.featureContent1);
      featureImage2Input.setValue(nData.getProductOne.featureImage2);
      setFeatureTitle2Input(nData.getProductOne.featureTitle2);
      setFeatureSubTitle2Input(nData.getProductOne.featureSubTitle2);
      setFeatureContent2Input(nData.getProductOne.featureContent2);
      setSpecNameInput(nData.getProductOne.specName);
      specImage1Input.setValue(nData.getProductOne.specImage1);
      specImage2Input.setValue(nData.getProductOne.specImage2);
      specImage3Input.setValue(nData.getProductOne.specImage3);
      setSpecDetailTitle1Input(nData.getProductOne.specDetailTitle1);
      setSpecDetailContent1Input(nData.getProductOne.specDetailContent1);
      specDetailImage1Input.setValue(nData.getProductOne.specDetailImage1);
      setSpecDetailTitle2Input(nData.getProductOne.specDetailTitle2);
      setSpecDetailContent2Input(nData.getProductOne.specDetailContent2);
      specDetailImage2Input.setValue(nData.getProductOne.specDetailImage2);
      setSpecDetailTitle3Input(nData.getProductOne.specDetailTitle3);
      setSpecDetailContent3Input(nData.getProductOne.specDetailContent3);
      specDetailImage3Input.setValue(nData.getProductOne.specDetailImage3);
      setFinalTitleInput(nData.getProductOne.finalTitle);
      setFinalContentInput(nData.getProductOne.finalContent);
      cerIconImage1Input.setValue(nData.getProductOne.cerIconImage1);
      cerIconImage2Input.setValue(nData.getProductOne.cerIconImage2);
      cerIconImage3Input.setValue(nData.getProductOne.cerIconImage3);
      cerIconImage4Input.setValue(nData.getProductOne.cerIconImage4);
      cerIconImage5Input.setValue(nData.getProductOne.cerIconImage5);
      cerIconImage6Input.setValue(nData.getProductOne.cerIconImage6);
      cerContent1Input.setValue(nData.getProductOne.cerContent1);
      cerContent2Input.setValue(nData.getProductOne.cerContent2);
      cerContent3Input.setValue(nData.getProductOne.cerContent3);
      cerContent4Input.setValue(nData.getProductOne.cerContent4);
      cerContent5Input.setValue(nData.getProductOne.cerContent5);
      cerContent6Input.setValue(nData.getProductOne.cerContent6);
      inputFilePath1.setValue(nData.getProductOne.filePath1);
      inputFileName1.setValue(nData.getProductOne.fileOriginName1);
      inputFilePath2.setValue(nData.getProductOne.filePath2);
      inputFileName2.setValue(nData.getProductOne.fileOriginName2);
    }
  }, [nData]);

  return (
    <AD211Presenter
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      isLoading={isLoading}
      fileUploadProgress={fileUploadProgress}
      //
      thumbnailPathInput={thumbnailPathInput}
      thumbnailPath2Input={thumbnailPath2Input}
      colorImageInput={colorImageInput}
      productTypeInput={productTypeInput}
      productSubTypeInput={productSubTypeInput}
      keyTypeInput={keyTypeInput}
      mainTitleInput={mainTitleInput}
      productNameInput={productNameInput}
      modelNameInput={modelNameInput}
      sizeInput={sizeInput}
      weightInput={weightInput}
      productIconInput={productIconInput}
      iconContent1Input={iconContent1Input}
      productContentInput={productContentInput}
      warningContentInput={warningContentInput}
      setWarningContentInput={setWarningContentInput}
      settingImageInput={settingImageInput}
      settingTitleInput={settingTitleInput}
      settingContentInput={settingContentInput}
      pointTitleInput={pointTitleInput}
      pointContentInput1={pointContentInput1}
      pointContentInput2={pointContentInput2}
      pointContentInput3={pointContentInput3}
      featureImage1Input={featureImage1Input}
      featureTitle1Input={featureTitle1Input}
      featureSubTitle1Input={featureSubTitle1Input}
      featureContent1Input={featureContent1Input}
      featureImage2Input={featureImage2Input}
      featureTitle2Input={featureTitle2Input}
      featureSubTitle2Input={featureSubTitle2Input}
      featureContent2Input={featureContent2Input}
      specNameInput={specNameInput}
      specImage1Input={specImage1Input}
      specImage2Input={specImage2Input}
      specImage3Input={specImage3Input}
      specDetailTitle1Input={specDetailTitle1Input}
      specDetailContent1Input={specDetailContent1Input}
      specDetailImage1Input={specDetailImage1Input}
      specDetailTitle2Input={specDetailTitle2Input}
      specDetailContent2Input={specDetailContent2Input}
      specDetailImage2Input={specDetailImage2Input}
      specDetailTitle3Input={specDetailTitle3Input}
      specDetailContent3Input={specDetailContent3Input}
      specDetailImage3Input={specDetailImage3Input}
      finalTitleInput={finalTitleInput}
      finalContentInput={finalContentInput}
      setFinalTitleInput={setFinalTitleInput}
      setFinalContentInput={setFinalContentInput}
      cerIconImage1Input={cerIconImage1Input}
      cerIconImage2Input={cerIconImage2Input}
      cerIconImage3Input={cerIconImage3Input}
      cerIconImage4Input={cerIconImage4Input}
      cerIconImage5Input={cerIconImage5Input}
      cerIconImage6Input={cerIconImage6Input}
      cerContent1Input={cerContent1Input}
      cerContent2Input={cerContent2Input}
      cerContent3Input={cerContent3Input}
      cerContent4Input={cerContent4Input}
      cerContent5Input={cerContent5Input}
      cerContent6Input={cerContent6Input}
      inputFilePath1={inputFilePath1}
      inputFileName1={inputFileName1}
      inputFilePath2={inputFilePath2}
      inputFileName2={inputFileName2}
      setSettingContentInput={setSettingContentInput}
      setPointContentInput1={setPointContentInput1}
      setPointContentInput2={setPointContentInput2}
      setPointContentInput3={setPointContentInput3}
      setFeatureContent1Input={setFeatureContent1Input}
      setFeatureContent2Input={setFeatureContent2Input}
      setSpecDetailContent1Input={setSpecDetailContent1Input}
      setSpecDetailContent2Input={setSpecDetailContent2Input}
      setSpecDetailContent3Input={setSpecDetailContent3Input}
      setProductContentInput={setProductContentInput}
      //
      fileRef={fileRef}
      //
      fileChangeHandlerThumbnail={fileChangeHandlerThumbnail}
      fileChangeHandlerThumbnail2={fileChangeHandlerThumbnail2}
      fileChangeHandlerSettingImage={fileChangeHandlerSettingImage}
      fileChangeHandlerFeature1={fileChangeHandlerFeature1}
      fileChangeHandlerFeature2={fileChangeHandlerFeature2}
      fileChangeSpec1={fileChangeSpec1}
      fileChangeSpec2={fileChangeSpec2}
      fileChangeSpec3={fileChangeSpec3}
      fileChangeSpecDetail1={fileChangeSpecDetail1}
      fileChangeSpecDetail2={fileChangeSpecDetail2}
      fileChangeSpecDetail3={fileChangeSpecDetail3}
      fileLoadChangeHandler1={fileLoadChangeHandler1}
      fileLoadChangeHandler2={fileLoadChangeHandler2}
      //
      currentImagePath={currentImagePath}
      currentColor={currentColor}
      currentColorCode={currentColorCode}
      currentSort={currentSort}
      colorImageList={colorImageList}
      //
      setSettingTitleInput={setSettingTitleInput}
      setPointTitleInput={setPointTitleInput}
      setFeatureTitle1Input={setFeatureTitle1Input}
      setFeatureSubTitle1Input={setFeatureSubTitle1Input}
      setFeatureTitle2Input={setFeatureTitle2Input}
      setFeatureSubTitle2Input={setFeatureSubTitle2Input}
      setSpecNameInput={setSpecNameInput}
      setSpecDetailTitle1Input={setSpecDetailTitle1Input}
      setSpecDetailTitle2Input={setSpecDetailTitle2Input}
      setSpecDetailTitle3Input={setSpecDetailTitle3Input}
      nData={nData && nData.getProductOne}
      createColorImagesHandler={createColorImagesHandler}
      colorImagesChangeHandler={colorImagesChangeHandler}
      deleteColorImages={deleteColorImages}
      productSaveHandler={productSaveHandler}
      moveListProductPage={moveListProductPage}
    />
  );
};
