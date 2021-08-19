import React from "react";
import {
  WholeWrapper,
  TextInput,
  Wrapper,
  TableWrapper,
  TableHeadColumn,
  Content,
  ContentTitle,
  Textarea,
  CommonButton,
  Combo,
  ComboOption,
  GuideBox,
  GuideContent,
  Image,
  FileInput,
  FileLabel,
} from "../../../Components/AdminCommonComponents";
import { Title, Tabs } from "../Components";
import Fade from "react-reveal/Fade";
import CircularIndeterminate from "../../../Components/loading/CircularIndeterminate";
import styled from "styled-components";
import Theme from "../../../Styles/Theme";
import useTitle from "@4leaf.ysh/use-title";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { FiAlertCircle } from "react-icons/fi";
import Editor from "../../../Components/editor/Editor.jsx";
import FileProgress from "../../../Components/FileProgress";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

const Search = styled.label`
  width: 100px;
  height: 25px;
  padding: 5px;
  font-size: 14.5px;
  transition: 0.5s;
  border: 1px solid ${(props) => props.theme.basicTheme_C};
  border-radius: 4px;
  margin: 3px 0 0 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${(props) => props.theme.basicTheme_C};
    color: ${(props) => props.theme.white_C};
  }
`;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const IconWrapper = styled(Wrapper)`
  .MuiFormControlLabel-label {
    font-size: 0.5rem !important;
  }
`;

const FieldsSet = styled(Wrapper)`
  background-color: ${(props) => props.theme.check_B_C};
  color: ${(props) => props.theme.white_C};
  border-radius: ${(props) => props.theme.radius};
  font-size: 14px;
  font-weight: 600;
  height: 26px;
`;

const DataGuideWrapper = styled(Wrapper)`
  width: 240px;
  height: ${(props) => props.height || `30px`};
  border-bottom: 1px solid ${(props) => props.theme.lightGrey_C};
  font-size: 13px;
  font-weight: 600;
  align-items: flex-start;
  padding: 0px 20px;
  background-color: rgba(0, 10, 100, 0.1);
`;

const DataWrapper = styled(Wrapper)`
  height: ${(props) => props.height || `30px`};
  border-bottom: 1px solid ${(props) => props.theme.lightGrey_C};
  align-items: flex-start;
  padding: 0px 20px;
`;

export default ({
  currentTab,
  setCurrentTab,
  isLoading,
  //
  colorImageInput,
  thumbnailPathInput,
  thumbnailPath2Input,
  productTypeInput,
  productSubTypeInput,
  keyTypeInput,
  mainTitleInput,
  productNameInput,
  modelNameInput,
  sizeInput,
  weightInput,
  productIconInput,
  productContentInput,
  warningContentInput,
  setWarningContentInput,
  settingImageInput,
  settingTitleInput,
  settingContentInput,
  pointTitleInput,
  pointContentInput1,
  pointContentInput2,
  pointContentInput3,
  featureImage1Input,
  featureTitle1Input,
  featureSubTitle1Input,
  featureContent1Input,
  featureImage2Input,
  featureTitle2Input,
  featureSubTitle2Input,
  featureContent2Input,
  specNameInput,
  specImage1Input,
  specImage2Input,
  specImage3Input,
  specDetailTitle1Input,
  specDetailContent1Input,
  specDetailImage1Input,
  specDetailTitle2Input,
  specDetailContent2Input,
  specDetailImage2Input,
  specDetailTitle3Input,
  specDetailContent3Input,
  specDetailImage3Input,
  finalTitleInput,
  finalContentInput,
  inputFileName1,
  inputFileName2,
  setFinalTitleInput,
  setFinalContentInput,
  cerIconImage1Input,
  cerIconImage2Input,
  cerIconImage3Input,
  cerIconImage4Input,
  cerIconImage5Input,
  cerIconImage6Input,
  cerContent1Input,
  cerContent2Input,
  cerContent3Input,
  cerContent4Input,
  cerContent5Input,
  cerContent6Input,
  fileUploadProgress,
  iconContent1Input,
  setSettingContentInput,
  setPointContentInput1,
  setPointContentInput2,
  setPointContentInput3,
  setFeatureContent1Input,
  setFeatureContent2Input,
  setSpecDetailContent1Input,
  setSpecDetailContent2Input,
  setSpecDetailContent3Input,
  setProductContentInput,
  // innerImageSelectHandler,
  // removeInnerImageHandler,
  // innerImageList,
  //
  fileRef,
  //
  fileChangeHandlerThumbnail,
  fileChangeHandlerThumbnail2,
  fileChangeHandlerSettingImage,
  fileChangeHandlerFeature1,
  fileChangeHandlerFeature2,
  fileChangeSpec1,
  fileChangeSpec2,
  fileChangeSpec3,
  fileChangeSpecDetail1,
  fileChangeSpecDetail2,
  fileChangeSpecDetail3,
  fileLoadChangeHandler1,
  fileLoadChangeHandler2,
  registerProduct,
  moveListProductPage,
  //
  createColorImagesHandler,
  currentImagePath,
  currentColor,
  currentColorCode,
  currentSort,
  colorImagesChangeHandler,
  colorImageList,
  removeInnerImageHandler,
  //
  setSettingTitleInput,
  setPointTitleInput,
  setFeatureTitle1Input,
  setFeatureSubTitle1Input,
  setFeatureTitle2Input,
  setFeatureSubTitle2Input,
  setSpecNameInput,
  setSpecDetailTitle1Input,
  setSpecDetailTitle2Input,
  setSpecDetailTitle3Input,
  //
  priceInput,
  vipPrice1Input,
  vipPrice2Input,
}) => {
  useTitle("ADMIN | 제품 등록");

  return (
    <WholeWrapper al={`flex-start`} ju={`flex-start`}>
      <Fade>
        <Title text={`제품 등록`} />
      </Fade>

      <Wrapper margin={`10px 0px`}>
        <GuideBox padding={`5px`}>
          <GuideContent padding={`5px`}>
            등록된 데이터는 실시간으로 반영됩니다.
          </GuideContent>
          <GuideContent padding={`5px`}>
            이미지 비율이 다르면 화면에 다르게보일 수 있습니다.
          </GuideContent>
          <GuideContent padding={`5px`}>
            등록 후 수정이 불가능하오니 유의하시기 바랍니다.
          </GuideContent>
          <GuideContent padding={`5px 5px 0px 5px`}>
            기본정보 좌측에 * 표시는 필수값입니다.
          </GuideContent>
        </GuideBox>
      </Wrapper>

      <FieldsSet
        height={`30px`}
        margin={`20px 0px 5px 0px`}
        al={`flex-start`}
        padding={`0px 20px`}
      >
        기본정보
      </FieldsSet>

      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper height={`400px`}>썸네일 이미지 *</DataGuideWrapper>
        <DataWrapper height={`400px`}>
          <Image
            src={thumbnailPathInput.value}
            width={`500px`}
            height={`282px`}
            alt={`썸네일 이미지`}
          />

          <FileInput
            id="file-js"
            type="file"
            accept="image/jpeg,image/gif,image/png"
            onChange={fileChangeHandlerThumbnail}
            ref={fileRef}
          />

          {isLoading ? (
            <Wrapper width={`500px`} margin={`10px 0px 0px 0px`}>
              {fileUploadProgress.value && (
                <FileProgress
                  variant="determinate"
                  value={fileUploadProgress.value}
                />
              )}
            </Wrapper>
          ) : (
            <FileLabel
              htmlFor={`file-js`}
              width={`500px`}
              margin={`10px 0px 0px 0px`}
            >
              THUMBNAIL UPLOAD
            </FileLabel>
          )}
        </DataWrapper>
      </Wrapper>
      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper height={`400px`}>
          썸네일 호버 이미지 *
        </DataGuideWrapper>
        <DataWrapper height={`400px`}>
          <Image
            src={thumbnailPath2Input.value}
            width={`500px`}
            height={`282px`}
            alt={`썸네일 이미지`}
          />

          <FileInput
            id="file-js99"
            type="file"
            accept="image/jpeg,image/gif,image/png"
            onChange={fileChangeHandlerThumbnail2}
            ref={fileRef}
          />

          {isLoading ? (
            <Wrapper width={`500px`} margin={`10px 0px 0px 0px`}>
              {fileUploadProgress.value && (
                <FileProgress
                  variant="determinate"
                  value={fileUploadProgress.value}
                />
              )}
            </Wrapper>
          ) : (
            <FileLabel
              htmlFor={`file-js99`}
              width={`500px`}
              margin={`10px 0px 0px 0px`}
            >
              THUMBNAIL UPLOAD
            </FileLabel>
          )}
        </DataWrapper>
      </Wrapper>

      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper>제품 카테고리 *</DataGuideWrapper>
        <DataWrapper>
          <Combo {...productTypeInput} width={`200px`}>
            <ComboOption value={``}>--전체--</ComboOption>
            <ComboOption value={`USB Security`}>USB Security</ComboOption>
            <ComboOption value={`Network Security`}>
              Network Security
            </ComboOption>
            <ComboOption value={`Other Port Security`}>
              Other Port Security
            </ComboOption>
            <ComboOption value={`Anti-Theft for Computer`}>
              Anti-Theft for Computer
            </ComboOption>
            <ComboOption value={`Lock Key PRO`}>Lock Key PRO</ComboOption>
          </Combo>
        </DataWrapper>
      </Wrapper>

      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper>적용 대상 카테고리 *</DataGuideWrapper>
        <DataWrapper>
          <Combo {...productSubTypeInput} width={`200px`}>
            <ComboOption value={``}>--전체--</ComboOption>
            <ComboOption value={`USB Type-A`}>USB Type-A</ComboOption>
            <ComboOption value={`USB Type-B`}>USB Type-B</ComboOption>
            <ComboOption value={`USB Type-C`}>USB Type-C</ComboOption>
            <ComboOption value={`RJ45`}>RJ45</ComboOption>
            <ComboOption value={`LAN Cable`}>LAN Cable</ComboOption>
            <ComboOption value={`SFP/QSFP`}>SFP/QSFP</ComboOption>
            <ComboOption value={`Input/Output`}>Input/Output</ComboOption>
            <ComboOption value={`Drive/Memory`}>Drive/Memory</ComboOption>
            <ComboOption value={`Display`}>Display</ComboOption>
            <ComboOption value={`Desktop`}>Desktop</ComboOption>
            <ComboOption value={`Laptop`}>Laptop</ComboOption>
            <ComboOption value={`Network`}>Network</ComboOption>
            <ComboOption value={`Universal Lock Key`}>
              Universal Lock Key
            </ComboOption>
            <ComboOption value={`Lock Key Mini`}>Lock Key Mini</ComboOption>
          </Combo>
        </DataWrapper>
      </Wrapper>

      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper>대상 키 타입 *</DataGuideWrapper>
        <DataWrapper>
          <Combo {...keyTypeInput} width={`200px`}>
            <ComboOption value={``}>--전체--</ComboOption>
            <ComboOption value={`Universial Lock Key Compatible`}>
              Universial Lock Key Compatible
            </ComboOption>
            <ComboOption value={`Lock Key Mini Compatible`}>
              Lock Key Mini Compatible
            </ComboOption>
            <ComboOption value={`Exclusive Key`}>Exclusive Key</ComboOption>
            <ComboOption value={`Combination`}>Combination</ComboOption>
            <ComboOption value={`No key required`}>No key required</ComboOption>
          </Combo>
        </DataWrapper>
      </Wrapper>

      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper>영문 제품명(타이틀) *</DataGuideWrapper>
        <DataWrapper>
          {/* 에디터 */}

          <TextInput width={`750px`} height={`25px`} {...mainTitleInput} />
        </DataWrapper>
      </Wrapper>

      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper>제품명 *</DataGuideWrapper>
        <DataWrapper>
          <TextInput width={`750px`} height={`25px`} {...productNameInput} />
        </DataWrapper>
      </Wrapper>

      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper>모델명 *</DataGuideWrapper>
        <DataWrapper>
          <TextInput width={`750px`} height={`25px`} {...modelNameInput} />
        </DataWrapper>
      </Wrapper>
      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper>규격 *</DataGuideWrapper>
        <DataWrapper>
          <TextInput width={`750px`} height={`25px`} {...sizeInput} />
        </DataWrapper>
      </Wrapper>

      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper>중량 *</DataGuideWrapper>
        <DataWrapper>
          <TextInput width={`750px`} height={`25px`} {...weightInput} />
        </DataWrapper>
      </Wrapper>
      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper>가격 *</DataGuideWrapper>
        <DataWrapper>
          <TextInput width={`750px`} height={`25px`} {...priceInput} />
        </DataWrapper>
      </Wrapper>
      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper>LEVEL3 가격 *</DataGuideWrapper>
        <DataWrapper>
          <TextInput width={`750px`} height={`25px`} {...vipPrice1Input} />
        </DataWrapper>
      </Wrapper>
      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper>LEVEL4 가격 *</DataGuideWrapper>
        <DataWrapper>
          <TextInput width={`750px`} height={`25px`} {...vipPrice2Input} />
        </DataWrapper>
      </Wrapper>

      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper height={`500px`}>적용대상 *</DataGuideWrapper>
        <DataWrapper ju={`flex-start`} height={`500px`}>
          <Wrapper dr={`row`}>
            <IconWrapper>
              <FormControlLabel
                value="https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_USB%20(USB%20Type-A).png?alt=media&token=0794b9b0-79fa-4f7c-9256-461c1e342709"
                control={
                  <Radio
                    checked={
                      productIconInput.value ===
                      "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_USB%20(USB%20Type-A).png?alt=media&token=0794b9b0-79fa-4f7c-9256-461c1e342709"
                    }
                    onChange={() =>
                      productIconInput.setValue(
                        "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_USB%20(USB%20Type-A).png?alt=media&token=0794b9b0-79fa-4f7c-9256-461c1e342709"
                      )
                    }
                  />
                }
                label="USB(USB Type-A)"
              />
              <Wrapper width={`50px`} height={`50px`}>
                <Image
                  objectFit={`contain`}
                  bgColor={`transparent`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon%2FUSB(USB%20Type-A).svg?alt=media&token=8f68e461-8f20-4b30-8e35-8c678f2e8b3e`}
                ></Image>
              </Wrapper>
            </IconWrapper>
            {/* /////x///// */}
            <IconWrapper>
              <FormControlLabel
                value="https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_USB-B(USB%20Type-B).png?alt=media&token=c5c29a4f-72ae-453f-84cf-59be2adbd942"
                control={
                  <Radio
                    checked={
                      productIconInput.value ===
                      "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_USB-B(USB%20Type-B).png?alt=media&token=c5c29a4f-72ae-453f-84cf-59be2adbd942"
                    }
                    onChange={() =>
                      productIconInput.setValue(
                        "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_USB-B(USB%20Type-B).png?alt=media&token=c5c29a4f-72ae-453f-84cf-59be2adbd942"
                      )
                    }
                  />
                }
                label="USB-B(USB Type-B)"
              />
              <Wrapper width={`50px`} height={`50px`}>
                <Image
                  objectFit={`contain`}
                  bgColor={`transparent`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon%2FUSB-B(USB%20Type-B).svg?alt=media&token=4bb1ffe5-3cbe-4d30-aae5-7795ad49b931`}
                ></Image>
              </Wrapper>
            </IconWrapper>
            {/* /////x///// */}
            <IconWrapper>
              <FormControlLabel
                value="https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_Mini%20USB-B(Mini-B).png?alt=media&token=f091b02a-5fbc-4403-8f3c-5c9e8dfe5da2"
                control={
                  <Radio
                    checked={
                      productIconInput.value ===
                      "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_Mini%20USB-B(Mini-B).png?alt=media&token=f091b02a-5fbc-4403-8f3c-5c9e8dfe5da2"
                    }
                    onChange={() =>
                      productIconInput.setValue(
                        "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_Mini%20USB-B(Mini-B).png?alt=media&token=f091b02a-5fbc-4403-8f3c-5c9e8dfe5da2"
                      )
                    }
                  />
                }
                label="Mini USB-B(Mini-B)"
              />
              <Wrapper width={`50px`} height={`50px`}>
                <Image
                  objectFit={`contain`}
                  bgColor={`transparent`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon%2FMini%20USB-B(Mini-B).svg?alt=media&token=0b0e0561-e20d-40d9-bc51-c94599cfd746`}
                ></Image>
              </Wrapper>
            </IconWrapper>
            {/* /////x///// */}
            <IconWrapper>
              <FormControlLabel
                value="https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_Micro%20USB-B(Micro-B).png?alt=media&token=cae24e97-17c9-4d53-90ee-81f78aae7dfc"
                control={
                  <Radio
                    checked={
                      productIconInput.value ===
                      "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_Micro%20USB-B(Micro-B).png?alt=media&token=cae24e97-17c9-4d53-90ee-81f78aae7dfc"
                    }
                    onChange={() =>
                      productIconInput.setValue(
                        "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_Micro%20USB-B(Micro-B).png?alt=media&token=cae24e97-17c9-4d53-90ee-81f78aae7dfc"
                      )
                    }
                  />
                }
                label="Micro USB-B(Micro-B)"
              />
              <Wrapper width={`50px`} height={`50px`}>
                <Image
                  objectFit={`contain`}
                  bgColor={`transparent`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon%2FMicro%20USB-B(Micro-B).svg?alt=media&token=714c320a-f2e6-4351-9af8-2f1faddb19f1`}
                ></Image>
              </Wrapper>
            </IconWrapper>
            {/* /////x///// */}
            <IconWrapper>
              <FormControlLabel
                value="https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_USB-C(USB%20Type-C).png?alt=media&token=3a770a70-7147-4d58-8c59-3c13d7c26586"
                control={
                  <Radio
                    checked={
                      productIconInput.value ===
                      "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_USB-C(USB%20Type-C).png?alt=media&token=3a770a70-7147-4d58-8c59-3c13d7c26586"
                    }
                    onChange={() =>
                      productIconInput.setValue(
                        "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_USB-C(USB%20Type-C).png?alt=media&token=3a770a70-7147-4d58-8c59-3c13d7c26586"
                      )
                    }
                  />
                }
                label="USB-C(USB Type-C)"
              />
              <Wrapper width={`50px`} height={`50px`}>
                <Image
                  objectFit={`contain`}
                  bgColor={`transparent`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon%2FUSB-C(USB%20Type-C).svg?alt=media&token=8c336240-4eeb-41ec-99c1-22068e99bd93`}
                ></Image>
              </Wrapper>
            </IconWrapper>
            {/* ////x///// */}
            <IconWrapper>
              <FormControlLabel
                value="https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_RJ11(RJ-11).png?alt=media&token=100701bb-7a64-4b78-8e7c-88be8339e012"
                control={
                  <Radio
                    checked={
                      productIconInput.value ===
                      "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_RJ11(RJ-11).png?alt=media&token=100701bb-7a64-4b78-8e7c-88be8339e012"
                    }
                    onChange={() =>
                      productIconInput.setValue(
                        "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_RJ11(RJ-11).png?alt=media&token=100701bb-7a64-4b78-8e7c-88be8339e012"
                      )
                    }
                  />
                }
                label="RJ11(RJ-11)"
              />
              <Wrapper width={`50px`} height={`50px`}>
                <Image
                  objectFit={`contain`}
                  bgColor={`transparent`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon%2FRJ11(RJ-11).svg?alt=media&token=0293ee8a-e4b8-4ab7-9a12-24056aff411a`}
                ></Image>
              </Wrapper>
            </IconWrapper>
            {/* /////x///// */}
            <IconWrapper>
              <FormControlLabel
                value="https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_RJ45(RJ-45%2C%20Ethernet%20RJ-45).png?alt=media&token=6acd01d9-3aac-45c4-928e-b7d4bf61bd36"
                control={
                  <Radio
                    checked={
                      productIconInput.value ===
                      "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_RJ45(RJ-45%2C%20Ethernet%20RJ-45).png?alt=media&token=6acd01d9-3aac-45c4-928e-b7d4bf61bd36"
                    }
                    onChange={() =>
                      productIconInput.setValue(
                        "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_RJ45(RJ-45%2C%20Ethernet%20RJ-45).png?alt=media&token=6acd01d9-3aac-45c4-928e-b7d4bf61bd36"
                      )
                    }
                  />
                }
                label="RJ45(RJ-45, Ethernet RJ-45)"
              />
              <Wrapper width={`50px`} height={`50px`}>
                <Image
                  objectFit={`contain`}
                  bgColor={`transparent`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon%2FRJ45(RJ-45%2C%20Ethernet%20RJ-45).svg?alt=media&token=c6fbc4ad-2b70-4153-a05b-2ad6d21897ad`}
                ></Image>
              </Wrapper>
            </IconWrapper>
            {/* /////x///// */}
            <IconWrapper>
              <FormControlLabel
                value="https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_HDMI.png?alt=media&token=2d0c6884-1eca-420c-9b9b-aee59fa19d95"
                control={
                  <Radio
                    checked={
                      productIconInput.value ===
                      "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_HDMI.png?alt=media&token=2d0c6884-1eca-420c-9b9b-aee59fa19d95"
                    }
                    onChange={() =>
                      productIconInput.setValue(
                        "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_HDMI.png?alt=media&token=2d0c6884-1eca-420c-9b9b-aee59fa19d95"
                      )
                    }
                  />
                }
                label="HDMI"
              />
              <Wrapper width={`50px`} height={`50px`}>
                <Image
                  objectFit={`contain`}
                  bgColor={`transparent`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon%2FHDMI(High%20Definition%20Multimedia%20Interface).svg?alt=media&token=b08305f0-7458-491c-b7d2-3643f55833c3`}
                ></Image>
              </Wrapper>
            </IconWrapper>
            {/* /////x///// */}
            <IconWrapper>
              <FormControlLabel
                value="https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_DisplayPort(DP).png?alt=media&token=d54ad0b7-c032-41e4-bdb6-2eb0b38ba1c9"
                control={
                  <Radio
                    checked={
                      productIconInput.value ===
                      "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_DisplayPort(DP).png?alt=media&token=d54ad0b7-c032-41e4-bdb6-2eb0b38ba1c9"
                    }
                    onChange={() =>
                      productIconInput.setValue(
                        "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_DisplayPort(DP).png?alt=media&token=d54ad0b7-c032-41e4-bdb6-2eb0b38ba1c9"
                      )
                    }
                  />
                }
                label="DisplayPort(DP)"
              />
              <Wrapper width={`50px`} height={`50px`}>
                <Image
                  objectFit={`contain`}
                  bgColor={`transparent`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon%2FDisplayPort(DP).svg?alt=media&token=9658bfd3-9512-4b0c-aa38-a7716b4376d9`}
                ></Image>
              </Wrapper>
            </IconWrapper>
            {/* ////x////// */}
            <IconWrapper>
              <FormControlLabel
                value="https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_Mini%20DisplayPort(DP).png?alt=media&token=b3dd45f1-36cc-426e-9e28-d80d40407c14"
                control={
                  <Radio
                    checked={
                      productIconInput.value ===
                      "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_Mini%20DisplayPort(DP).png?alt=media&token=b3dd45f1-36cc-426e-9e28-d80d40407c14"
                    }
                    onChange={() =>
                      productIconInput.setValue(
                        "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_Mini%20DisplayPort(DP).png?alt=media&token=b3dd45f1-36cc-426e-9e28-d80d40407c14"
                      )
                    }
                  />
                }
                label="Mini DisplayPort(DP)"
              />
              <Wrapper width={`50px`} height={`50px`}>
                <Image
                  objectFit={`contain`}
                  bgColor={`transparent`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon%2FMini%20DisplayPort(DP).svg?alt=media&token=05456d50-5d72-485b-8682-53adaf30defc`}
                ></Image>
              </Wrapper>
            </IconWrapper>
            {/* /////x///// */}
          </Wrapper>
          <Wrapper dr={`row`}>
            <IconWrapper>
              <FormControlLabel
                value="https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_Serial.png?alt=media&token=330da580-d738-423b-a846-3d792f7c1d48"
                control={
                  <Radio
                    checked={
                      productIconInput.value ===
                      "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_Serial.png?alt=media&token=330da580-d738-423b-a846-3d792f7c1d48"
                    }
                    onChange={() =>
                      productIconInput.setValue(
                        "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_Serial.png?alt=media&token=330da580-d738-423b-a846-3d792f7c1d48"
                      )
                    }
                  />
                }
                label="Serial(DB-9, RS232)"
              />
              <Wrapper width={`50px`} height={`50px`}>
                <Image
                  objectFit={`contain`}
                  bgColor={`transparent`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon%2FSerial(DB-9%2C%20RS232).svg?alt=media&token=9cc17726-f924-49ee-986e-120093a61875`}
                ></Image>
              </Wrapper>
            </IconWrapper>
            {/* /////o///// */}
            <IconWrapper>
              <FormControlLabel
                value="https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_DVI(DVI-I%2C%20DVI-D).png?alt=media&token=37b69f57-f781-421d-9444-ace2848d2338"
                control={
                  <Radio
                    checked={
                      productIconInput.value ===
                      "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_DVI(DVI-I%2C%20DVI-D).png?alt=media&token=37b69f57-f781-421d-9444-ace2848d2338"
                    }
                    onChange={() =>
                      productIconInput.setValue(
                        "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_DVI(DVI-I%2C%20DVI-D).png?alt=media&token=37b69f57-f781-421d-9444-ace2848d2338"
                      )
                    }
                  />
                }
                label="DVI(DVI-I, DVI-D)"
              />
              <Wrapper width={`50px`} height={`50px`}>
                <Image
                  objectFit={`contain`}
                  bgColor={`transparent`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon%2FDVI(DVI-I%2C%20DVI-D).svg?alt=media&token=a3dad8a4-609f-49f3-8edd-baa637e0588f`}
                ></Image>
              </Wrapper>
            </IconWrapper>
            {/* /////o///// */}
            <IconWrapper>
              <FormControlLabel
                value="https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_Parallel(DB-25).png?alt=media&token=bf9365e8-49d8-4028-b728-41a8e75bb853"
                control={
                  <Radio
                    checked={
                      productIconInput.value ===
                      "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_Parallel(DB-25).png?alt=media&token=bf9365e8-49d8-4028-b728-41a8e75bb853"
                    }
                    onChange={() =>
                      productIconInput.setValue(
                        "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_Parallel(DB-25).png?alt=media&token=bf9365e8-49d8-4028-b728-41a8e75bb853"
                      )
                    }
                  />
                }
                label="Parallel(DB-25)"
              />
              <Wrapper width={`50px`} height={`50px`}>
                <Image
                  objectFit={`contain`}
                  bgColor={`transparent`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon%2FParallel(DB-25).svg?alt=media&token=1791a3d9-f98f-4332-b1e1-7932908a7769`}
                ></Image>
              </Wrapper>
            </IconWrapper>
            {/* /////o///// */}
            <IconWrapper>
              <FormControlLabel
                value="https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_SD(SecureDigital).png?alt=media&token=eb491f95-00de-4002-98bb-7493367f73e2"
                control={
                  <Radio
                    checked={
                      productIconInput.value ===
                      "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_SD(SecureDigital).png?alt=media&token=eb491f95-00de-4002-98bb-7493367f73e2"
                    }
                    onChange={() =>
                      productIconInput.setValue(
                        "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_SD(SecureDigital).png?alt=media&token=eb491f95-00de-4002-98bb-7493367f73e2"
                      )
                    }
                  />
                }
                label="SD(SecureDigital)"
              />
              <Wrapper width={`50px`} height={`50px`}>
                <Image
                  objectFit={`contain`}
                  bgColor={`transparent`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon%2FSD(SecureDigital).svg?alt=media&token=bc51e3de-5b7e-4e55-8ac1-fac69e93b8f3`}
                ></Image>
              </Wrapper>
            </IconWrapper>
            {/* /////o///// */}
            <IconWrapper>
              <FormControlLabel
                value="https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_CF(CompactFlash).png?alt=media&token=35751cfc-8a84-42a6-a32a-c31a59ead801"
                control={
                  <Radio
                    checked={
                      productIconInput.value ===
                      "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_CF(CompactFlash).png?alt=media&token=35751cfc-8a84-42a6-a32a-c31a59ead801"
                    }
                    onChange={() =>
                      productIconInput.setValue(
                        "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_CF(CompactFlash).png?alt=media&token=35751cfc-8a84-42a6-a32a-c31a59ead801"
                      )
                    }
                  />
                }
                label="CF(CompactFlash)"
              />
              <Wrapper width={`50px`} height={`50px`}>
                <Image
                  objectFit={`contain`}
                  bgColor={`transparent`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon%2FCF(CompactFlash).svg?alt=media&token=ba5875bc-a67e-471d-8c3c-72725ef29c79`}
                ></Image>
              </Wrapper>
            </IconWrapper>
            {/* ////o///// */}
            <IconWrapper>
              <FormControlLabel
                value="https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_eSATAp.png?alt=media&token=12be073f-b2ad-4995-8186-6aa9a36730b1"
                control={
                  <Radio
                    checked={
                      productIconInput.value ===
                      "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_eSATAp.png?alt=media&token=12be073f-b2ad-4995-8186-6aa9a36730b1"
                    }
                    onChange={() =>
                      productIconInput.setValue(
                        "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_eSATAp.png?alt=media&token=12be073f-b2ad-4995-8186-6aa9a36730b1"
                      )
                    }
                  />
                }
                label="eSATAp"
              />
              <Wrapper width={`50px`} height={`50px`}>
                <Image
                  objectFit={`contain`}
                  bgColor={`transparent`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon%2FeSATAp.svg?alt=media&token=c2654780-aa34-482e-90fa-4d4009b864b5`}
                ></Image>
              </Wrapper>
            </IconWrapper>
            {/* /////o///// */}
            <IconWrapper>
              <FormControlLabel
                value="https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_QSFP%20Transceiver.png?alt=media&token=b749c57c-99a9-4765-af84-d905c4a928ea"
                control={
                  <Radio
                    checked={
                      productIconInput.value ===
                      "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_QSFP%20Transceiver.png?alt=media&token=b749c57c-99a9-4765-af84-d905c4a928ea"
                    }
                    onChange={() =>
                      productIconInput.setValue(
                        "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_QSFP%20Transceiver.png?alt=media&token=b749c57c-99a9-4765-af84-d905c4a928ea"
                      )
                    }
                  />
                }
                label="QSFP Transceiver"
              />
              <Wrapper width={`50px`} height={`50px`}>
                <Image
                  objectFit={`contain`}
                  bgColor={`transparent`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon%2FQSFP%20Transceiver.svg?alt=media&token=3096f712-4529-4bae-ba99-903c509a4d32`}
                ></Image>
              </Wrapper>
            </IconWrapper>
            {/* /////o///// */}
            <IconWrapper>
              <FormControlLabel
                value="https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_SFP%20Transceiver.png?alt=media&token=137d99b4-4804-4600-be4c-c38e8dc9a350"
                control={
                  <Radio
                    checked={
                      productIconInput.value ===
                      "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_SFP%20Transceiver.png?alt=media&token=137d99b4-4804-4600-be4c-c38e8dc9a350"
                    }
                    onChange={() =>
                      productIconInput.setValue(
                        "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_SFP%20Transceiver.png?alt=media&token=137d99b4-4804-4600-be4c-c38e8dc9a350"
                      )
                    }
                  />
                }
                label="SFP Transceiver"
              />
              <Wrapper width={`50px`} height={`50px`}>
                <Image
                  objectFit={`contain`}
                  bgColor={`transparent`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon%2FSFP%20Transceiver.svg?alt=media&token=0605be09-42a3-4ae5-8d26-e648504100dd`}
                ></Image>
              </Wrapper>
            </IconWrapper>
            {/* /////o///// */}
            <IconWrapper>
              <FormControlLabel
                value="https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_SFP%20Port%20(Mini%20GBIC).png?alt=media&token=d6e2c841-fde6-4b8a-bff4-3aa1f221f28e"
                control={
                  <Radio
                    checked={
                      productIconInput.value ===
                      "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_SFP%20Port%20(Mini%20GBIC).png?alt=media&token=d6e2c841-fde6-4b8a-bff4-3aa1f221f28e"
                    }
                    onChange={() =>
                      productIconInput.setValue(
                        "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_SFP%20Port%20(Mini%20GBIC).png?alt=media&token=d6e2c841-fde6-4b8a-bff4-3aa1f221f28e"
                      )
                    }
                  />
                }
                label="SFP Port"
              />
              <Wrapper width={`50px`} height={`50px`}>
                <Image
                  objectFit={`contain`}
                  bgColor={`transparent`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon%2FSFP%20Port%20(Mini%20GBIC).svg?alt=media&token=6dfaa348-c698-4cea-8655-31b974bc156a`}
                ></Image>
              </Wrapper>
            </IconWrapper>
            {/* ////o////// */}
            <IconWrapper>
              <FormControlLabel
                value="https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_GBIC%20Port.png?alt=media&token=327d1e80-a0af-4799-926d-a0c6d7fcabf3"
                control={
                  <Radio
                    checked={
                      productIconInput.value ===
                      "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_GBIC%20Port.png?alt=media&token=327d1e80-a0af-4799-926d-a0c6d7fcabf3"
                    }
                    onChange={() =>
                      productIconInput.setValue(
                        "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_GBIC%20Port.png?alt=media&token=327d1e80-a0af-4799-926d-a0c6d7fcabf3"
                      )
                    }
                  />
                }
                label="GBIC Port"
              />
              <Wrapper width={`50px`} height={`50px`}>
                <Image
                  objectFit={`contain`}
                  bgColor={`transparent`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon%2FGBIC%20Port.svg?alt=media&token=fac4d1e0-cb52-4418-b253-6e65b7e25730`}
                ></Image>
              </Wrapper>
            </IconWrapper>
            {/* /////x///// */}
          </Wrapper>

          <Wrapper width={`auto`} al={`flex-start`} dr={`row`}>
            <IconWrapper>
              <FormControlLabel
                value="https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_Optical%20Disc%20Drive.png?alt=media&token=100fe45e-2299-4944-8985-b166386aa568"
                control={
                  <Radio
                    checked={
                      productIconInput.value ===
                      "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_Optical%20Disc%20Drive.png?alt=media&token=100fe45e-2299-4944-8985-b166386aa568"
                    }
                    onChange={() =>
                      productIconInput.setValue(
                        "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_Optical%20Disc%20Drive.png?alt=media&token=100fe45e-2299-4944-8985-b166386aa568"
                      )
                    }
                  />
                }
                label="Optical Disc Drive"
              />
              <Wrapper width={`50px`} height={`50px`}>
                <Image
                  objectFit={`contain`}
                  bgColor={`transparent`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon%2FOptical%20Disc%20Drive.svg?alt=media&token=d16268bf-7e85-4d05-bab3-9186e47051a7`}
                ></Image>
              </Wrapper>
            </IconWrapper>
            {/* /////q///// */}
            <IconWrapper>
              <FormControlLabel
                value="https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_female%20BNC%20Connector.png?alt=media&token=7132827d-1962-4e03-812d-bb9f12d17b5a"
                control={
                  <Radio
                    checked={
                      productIconInput.value ===
                      "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_female%20BNC%20Connector.png?alt=media&token=7132827d-1962-4e03-812d-bb9f12d17b5a"
                    }
                    onChange={() =>
                      productIconInput.setValue(
                        "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_female%20BNC%20Connector.png?alt=media&token=7132827d-1962-4e03-812d-bb9f12d17b5a"
                      )
                    }
                  />
                }
                label="female BNC Connector"
              />
              <Wrapper width={`50px`} height={`50px`}>
                <Image
                  objectFit={`contain`}
                  bgColor={`transparent`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon%2Ffemale%20BNC%20Connector.svg?alt=media&token=f8db7e22-c432-418a-b741-7c653299d667`}
                ></Image>
              </Wrapper>
            </IconWrapper>
            {/* /////x///// */}
            <IconWrapper>
              <FormControlLabel
                value="https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_RF%20Connector.png?alt=media&token=a1bc2e20-6050-4b51-bd84-9257f68cecf5"
                control={
                  <Radio
                    checked={
                      productIconInput.value ===
                      "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_RF%20Connector.png?alt=media&token=a1bc2e20-6050-4b51-bd84-9257f68cecf5"
                    }
                    onChange={() =>
                      productIconInput.setValue(
                        "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_RF%20Connector.png?alt=media&token=a1bc2e20-6050-4b51-bd84-9257f68cecf5"
                      )
                    }
                  />
                }
                label="RF Connector"
              />
              <Wrapper width={`50px`} height={`50px`}>
                <Image
                  objectFit={`contain`}
                  bgColor={`transparent`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon%2FRF%20Connector.svg?alt=media&token=43810a1e-21b6-42c7-83e3-b7e1972e5bf0`}
                ></Image>
              </Wrapper>
            </IconWrapper>
            {/* /////x///// */}
            <IconWrapper>
              <FormControlLabel
                value="https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_Lock%20Key%20Mini.png?alt=media&token=01260e1b-ad0f-4650-a25f-7cf8e85f56c8"
                control={
                  <Radio
                    checked={
                      productIconInput.value ===
                      "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_Lock%20Key%20Mini.png?alt=media&token=01260e1b-ad0f-4650-a25f-7cf8e85f56c8"
                    }
                    onChange={() =>
                      productIconInput.setValue(
                        "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_Lock%20Key%20Mini.png?alt=media&token=01260e1b-ad0f-4650-a25f-7cf8e85f56c8"
                      )
                    }
                  />
                }
                label="Lock Key Mini"
              />
              <Wrapper width={`50px`} height={`50px`}>
                <Image
                  objectFit={`contain`}
                  bgColor={`transparent`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FproAdd%2FLock%20Key%20Mini.svg?alt=media&token=70107cbc-e55c-4c10-93cb-d5978a12cd31`}
                ></Image>
              </Wrapper>
            </IconWrapper>
            {/* /////x///// */}
            <IconWrapper>
              <FormControlLabel
                value="https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_Universal%20Lock%20Key.png?alt=media&token=a1e366d9-7a0b-4907-8d64-8746f3017b65"
                control={
                  <Radio
                    checked={
                      productIconInput.value ===
                      "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_Universal%20Lock%20Key.png?alt=media&token=a1e366d9-7a0b-4907-8d64-8746f3017b65"
                    }
                    onChange={() =>
                      productIconInput.setValue(
                        "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_Universal%20Lock%20Key.png?alt=media&token=a1e366d9-7a0b-4907-8d64-8746f3017b65"
                      )
                    }
                  />
                }
                label="Universal Lock Key"
              />
              <Wrapper width={`50px`} height={`50px`}>
                <Image
                  objectFit={`contain`}
                  bgColor={`transparent`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FproAdd%2FUniversal%20Lock%20Key.svg?alt=media&token=8d1db408-cade-4971-8a7c-c0f03ea7e30f`}
                ></Image>
              </Wrapper>
            </IconWrapper>
            {/* /////x///// */}
          </Wrapper>
          <Wrapper dr={`row`}>
            <IconWrapper>
              <FormControlLabel
                value="https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_Monitor.png?alt=media&token=84b53c19-8ea9-4377-9649-f264e8b9c3e1"
                control={
                  <Radio
                    checked={
                      productIconInput.value ===
                      "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_Monitor.png?alt=media&token=84b53c19-8ea9-4377-9649-f264e8b9c3e1"
                    }
                    onChange={() =>
                      productIconInput.setValue(
                        "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_Monitor.png?alt=media&token=84b53c19-8ea9-4377-9649-f264e8b9c3e1"
                      )
                    }
                  />
                }
                label="Monitor"
              />
              <Wrapper width={`50px`} height={`50px`}>
                <Image
                  objectFit={`contain`}
                  bgColor={`transparent`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon%2FMonitor.svg?alt=media&token=ec108d52-62db-4c79-b77e-61bef76940ba`}
                ></Image>
              </Wrapper>
            </IconWrapper>
            {/* /////c///// */}
            <IconWrapper>
              <FormControlLabel
                value="https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_Display.png?alt=media&token=b09999e9-be4f-40fb-a53c-e3cf8a119ec5"
                control={
                  <Radio
                    checked={
                      productIconInput.value ===
                      "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_Display.png?alt=media&token=b09999e9-be4f-40fb-a53c-e3cf8a119ec5"
                    }
                    onChange={() =>
                      productIconInput.setValue(
                        "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_Display.png?alt=media&token=b09999e9-be4f-40fb-a53c-e3cf8a119ec5"
                      )
                    }
                  />
                }
                label="Display"
              />
              <Wrapper width={`50px`} height={`50px`}>
                <Image
                  objectFit={`contain`}
                  bgColor={`transparent`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon%2FDisplay.svg?alt=media&token=575b1515-b01f-4f06-8a5c-de1a86e42039`}
                ></Image>
              </Wrapper>
            </IconWrapper>
            {/* /////c///// */}
            <IconWrapper>
              <FormControlLabel
                value="https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_Desktop.png?alt=media&token=26db9e7a-3ebe-4045-a500-19692de56a54"
                control={
                  <Radio
                    checked={
                      productIconInput.value ===
                      "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_Desktop.png?alt=media&token=26db9e7a-3ebe-4045-a500-19692de56a54"
                    }
                    onChange={() =>
                      productIconInput.setValue(
                        "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_Desktop.png?alt=media&token=26db9e7a-3ebe-4045-a500-19692de56a54"
                      )
                    }
                  />
                }
                label="Desktop"
              />
              <Wrapper width={`50px`} height={`50px`}>
                <Image
                  objectFit={`contain`}
                  bgColor={`transparent`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon%2FDesktop.svg?alt=media&token=fadc4b6e-905f-44be-b626-24ef570a8b3a`}
                ></Image>
              </Wrapper>
            </IconWrapper>
            {/* /////c///// */}
            <IconWrapper>
              <FormControlLabel
                value="https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_Laptop.png?alt=media&token=1c504dea-89e1-439d-9fd7-b877c8ec62e7"
                control={
                  <Radio
                    checked={
                      productIconInput.value ===
                      "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_Laptop.png?alt=media&token=1c504dea-89e1-439d-9fd7-b877c8ec62e7"
                    }
                    onChange={() =>
                      productIconInput.setValue(
                        "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_Laptop.png?alt=media&token=1c504dea-89e1-439d-9fd7-b877c8ec62e7"
                      )
                    }
                  />
                }
                label="Laptop"
              />
              <Wrapper width={`50px`} height={`50px`}>
                <Image
                  objectFit={`contain`}
                  bgColor={`transparent`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon%2FLaptop.svg?alt=media&token=bd736a88-80b5-48eb-bdbc-e680b979411d`}
                ></Image>
              </Wrapper>
            </IconWrapper>
            {/* /////c///// */}
            <IconWrapper>
              <FormControlLabel
                value="https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_SD%20Card.png?alt=media&token=87cc4d89-b432-44e5-9814-72f4c7ed672d"
                control={
                  <Radio
                    checked={
                      productIconInput.value ===
                      "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_SD%20Card.png?alt=media&token=87cc4d89-b432-44e5-9814-72f4c7ed672d"
                    }
                    onChange={() =>
                      productIconInput.setValue(
                        "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_SD%20Card.png?alt=media&token=87cc4d89-b432-44e5-9814-72f4c7ed672d"
                      )
                    }
                  />
                }
                label="SD Card"
              />
              <Wrapper width={`50px`} height={`50px`}>
                <Image
                  objectFit={`contain`}
                  bgColor={`transparent`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon%2FSD%20Card.svg?alt=media&token=645b1048-e431-4024-8e05-53f725279197`}
                ></Image>
              </Wrapper>
            </IconWrapper>
            {/* ////c///// */}
            <IconWrapper>
              <FormControlLabel
                value="https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_CF%20Card.png?alt=media&token=7ddea8f1-ecea-4beb-abb2-e42ca82f1567"
                control={
                  <Radio
                    checked={
                      productIconInput.value ===
                      "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_CF%20Card.png?alt=media&token=7ddea8f1-ecea-4beb-abb2-e42ca82f1567"
                    }
                    onChange={() =>
                      productIconInput.setValue(
                        "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_CF%20Card.png?alt=media&token=7ddea8f1-ecea-4beb-abb2-e42ca82f1567"
                      )
                    }
                  />
                }
                label="CF Card"
              />
              <Wrapper width={`50px`} height={`50px`}>
                <Image
                  objectFit={`contain`}
                  bgColor={`transparent`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon%2FCF%20Card.svg?alt=media&token=db1f936b-e225-451d-8957-08b15f69b73c`}
                ></Image>
              </Wrapper>
            </IconWrapper>
            {/* /////c///// */}
            <IconWrapper>
              <FormControlLabel
                value="https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_USB%20Cable.png?alt=media&token=1c0ebadc-d92c-41f2-893c-4ca87bb92944"
                control={
                  <Radio
                    checked={
                      productIconInput.value ===
                      "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_USB%20Cable.png?alt=media&token=1c0ebadc-d92c-41f2-893c-4ca87bb92944"
                    }
                    onChange={() =>
                      productIconInput.setValue(
                        "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_USB%20Cable.png?alt=media&token=1c0ebadc-d92c-41f2-893c-4ca87bb92944"
                      )
                    }
                  />
                }
                label="USB Cable"
              />
              <Wrapper width={`50px`} height={`50px`}>
                <Image
                  objectFit={`contain`}
                  bgColor={`transparent`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon%2FUSB%20Cable(USB%20Type-A%20Connector).svg?alt=media&token=82e458e5-56ad-43c0-a5b5-2e41f25686a0`}
                ></Image>
              </Wrapper>
            </IconWrapper>
            {/* /////c///// */}
            <IconWrapper>
              <FormControlLabel
                value="https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_LAN%20Cable.png?alt=media&token=c7019e82-e9e2-4712-a924-e5c68856bbb3"
                control={
                  <Radio
                    checked={
                      productIconInput.value ===
                      "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_LAN%20Cable.png?alt=media&token=c7019e82-e9e2-4712-a924-e5c68856bbb3"
                    }
                    onChange={() =>
                      productIconInput.setValue(
                        "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_LAN%20Cable.png?alt=media&token=c7019e82-e9e2-4712-a924-e5c68856bbb3"
                      )
                    }
                  />
                }
                label="LAN Cable"
              />
              <Wrapper width={`50px`} height={`50px`}>
                <Image
                  objectFit={`contain`}
                  bgColor={`transparent`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon%2FLAN%20Cable(Ethernet%20RJ-45%20Connector).svg?alt=media&token=1d310314-1aed-4c2b-90d7-2936b7afdaf9`}
                ></Image>
              </Wrapper>
            </IconWrapper>
            {/* /////o///// */}
            <IconWrapper>
              <FormControlLabel
                value="https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_Keyboard.png?alt=media&token=1b702b33-1841-4096-a7fd-1dc58e2abbc2"
                control={
                  <Radio
                    checked={
                      productIconInput.value ===
                      "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_Keyboard.png?alt=media&token=1b702b33-1841-4096-a7fd-1dc58e2abbc2"
                    }
                    onChange={() =>
                      productIconInput.setValue(
                        "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_Keyboard.png?alt=media&token=1b702b33-1841-4096-a7fd-1dc58e2abbc2"
                      )
                    }
                  />
                }
                label="Keyboard"
              />
              <Wrapper width={`50px`} height={`50px`}>
                <Image
                  objectFit={`contain`}
                  bgColor={`transparent`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon%2FKeyboard.svg?alt=media&token=d44e41f4-a6d3-4999-8aa0-acfbfccd51ca`}
                ></Image>
              </Wrapper>
            </IconWrapper>
            {/* ////o////// */}
            <IconWrapper>
              <FormControlLabel
                value="https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_Mouse.png?alt=media&token=c13c35c2-444d-498f-8b14-ec18008e9ece"
                control={
                  <Radio
                    checked={
                      productIconInput.value ===
                      "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_Mouse.png?alt=media&token=c13c35c2-444d-498f-8b14-ec18008e9ece"
                    }
                    onChange={() =>
                      productIconInput.setValue(
                        "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2FPROICONREAL%2FPRO_Mouse.png?alt=media&token=c13c35c2-444d-498f-8b14-ec18008e9ece"
                      )
                    }
                  />
                }
                label="Mouse"
              />
              <Wrapper width={`50px`} height={`50px`}>
                <Image
                  objectFit={`contain`}
                  bgColor={`transparent`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon%2FMouse.svg?alt=media&token=fe1ea8fd-8865-49d1-ad88-faf4ad4d8554`}
                ></Image>
              </Wrapper>
            </IconWrapper>
            {/* /////x///// */}
          </Wrapper>
        </DataWrapper>
      </Wrapper>
      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper>적용대상명 영문 *</DataGuideWrapper>
        <DataWrapper>
          <TextInput width={`750px`} height={`25px`} {...iconContent1Input} />
        </DataWrapper>
      </Wrapper>

      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper height={`320px`}>제품 설명 *</DataGuideWrapper>
        <DataWrapper height={`320px`}>
          {/* 에디터 */}

          <Editor
            value={productContentInput}
            componentHeight="h-200"
            editorChangeHandler={(html) => setProductContentInput(html)}
          />
        </DataWrapper>
      </Wrapper>
      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper height={`200px`}>주의 사항</DataGuideWrapper>
        <DataWrapper height={`200px`}>
          <Editor
            value={warningContentInput}
            componentHeight="h-100"
            editorChangeHandler={(html) => setWarningContentInput(html)}
          />
        </DataWrapper>
      </Wrapper>
      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper height={`400px`}>사용 환경 이미지 *</DataGuideWrapper>
        <DataWrapper height={`400px`}>
          <Image
            src={settingImageInput.value}
            width={`500px`}
            height={`282px`}
            alt={`bannerImage`}
          />

          <FileInput
            id="file-js2"
            type="file"
            accept="image/jpeg,image/gif,image/png"
            onChange={fileChangeHandlerSettingImage}
            ref={fileRef}
          />

          {isLoading ? (
            <Wrapper width={`500px`} margin={`10px 0px 0px 0px`}>
              {fileUploadProgress.value && (
                <FileProgress
                  variant="determinate"
                  value={fileUploadProgress.value}
                />
              )}
            </Wrapper>
          ) : (
            <FileLabel
              htmlFor={`file-js2`}
              width={`500px`}
              margin={`10px 0px 0px 0px`}
            >
              IMAGE UPLOAD
            </FileLabel>
          )}
        </DataWrapper>
      </Wrapper>
      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper height={`200px`}>
          사용환경, 주의사항 제목 *
        </DataGuideWrapper>
        <DataWrapper height={`200px`}>
          <Editor
            value={settingTitleInput}
            componentHeight="h-100"
            editorChangeHandler={(html) => setSettingTitleInput(html)}
          />
        </DataWrapper>
      </Wrapper>

      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper height={`200px`}>
          사용환경, 주의사항 설명 *
        </DataGuideWrapper>
        <DataWrapper height={`200px`}>
          {/* 에디터 */}

          <Editor
            value={settingContentInput}
            componentHeight="h-100"
            editorChangeHandler={(html) => setSettingContentInput(html)}
          />
        </DataWrapper>
      </Wrapper>

      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper height={`200px`}>핵심특징 제목 *</DataGuideWrapper>
        <DataWrapper height={`200px`}>
          <Editor
            value={pointTitleInput}
            componentHeight="h-100"
            editorChangeHandler={(html) => setPointTitleInput(html)}
          />{" "}
        </DataWrapper>
      </Wrapper>

      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper height={`200px`}>핵심특징 설명 01</DataGuideWrapper>
        <DataWrapper height={`200px`}>
          {/* 에디터 */}

          <Editor
            value={pointContentInput1}
            componentHeight="h-100"
            editorChangeHandler={(html) => setPointContentInput1(html)}
          />
        </DataWrapper>
      </Wrapper>
      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper height={`200px`}>핵심특징 설명 02</DataGuideWrapper>
        <DataWrapper height={`200px`}>
          {/* 에디터 */}

          <Editor
            value={pointContentInput2}
            componentHeight="h-100"
            editorChangeHandler={(html) => setPointContentInput2(html)}
          />
        </DataWrapper>
      </Wrapper>
      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper height={`200px`}>핵심특징 설명 03</DataGuideWrapper>
        <DataWrapper height={`200px`}>
          {/* 에디터 */}

          <Editor
            value={pointContentInput3}
            componentHeight="h-100"
            editorChangeHandler={(html) => setPointContentInput3(html)}
          />
        </DataWrapper>
      </Wrapper>

      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper height={`400px`}>
          제품특징 1 이미지 *
        </DataGuideWrapper>
        <DataWrapper height={`400px`}>
          <Image
            src={featureImage1Input.value}
            width={`500px`}
            height={`282px`}
            alt={`제품특징 1 이미지`}
          />

          <FileInput
            id="file-js3"
            type="file"
            accept="image/jpeg,image/gif,image/png"
            onChange={fileChangeHandlerFeature1}
            ref={fileRef}
          />

          {isLoading ? (
            <Wrapper width={`500px`} margin={`10px 0px 0px 0px`}>
              {fileUploadProgress.value && (
                <FileProgress
                  variant="determinate"
                  value={fileUploadProgress.value}
                />
              )}
            </Wrapper>
          ) : (
            <FileLabel
              htmlFor={`file-js3`}
              width={`500px`}
              margin={`10px 0px 0px 0px`}
            >
              IMAGE UPLOAD
            </FileLabel>
          )}
        </DataWrapper>
      </Wrapper>

      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper height={`200px`}>
          제품특징 01 소제목 *
        </DataGuideWrapper>
        <DataWrapper height={`200px`}>
          <Editor
            value={featureSubTitle1Input}
            componentHeight="h-100"
            editorChangeHandler={(html) => setFeatureSubTitle1Input(html)}
          />
        </DataWrapper>
      </Wrapper>

      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper height={`200px`}>제품특징 01 제목 *</DataGuideWrapper>
        <DataWrapper height={`200px`}>
          <Editor
            value={featureTitle1Input}
            componentHeight="h-100"
            editorChangeHandler={(html) => setFeatureTitle1Input(html)}
          />{" "}
        </DataWrapper>
      </Wrapper>

      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper height={`200px`}>제품특징 01 설명 *</DataGuideWrapper>
        <DataWrapper height={`200px`}>
          {/* 에디터 */}

          <Editor
            value={featureContent1Input}
            componentHeight="h-100"
            editorChangeHandler={(html) => setFeatureContent1Input(html)}
          />
        </DataWrapper>
      </Wrapper>

      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper height={`400px`}>
          제품특징 2 이미지 *
        </DataGuideWrapper>
        <DataWrapper height={`400px`}>
          <Image
            src={featureImage2Input.value}
            width={`500px`}
            height={`282px`}
            alt={`제품특징 2 이미지`}
          />

          <FileInput
            id="file-js4"
            type="file"
            accept="image/jpeg,image/gif,image/png"
            onChange={fileChangeHandlerFeature2}
            ref={fileRef}
          />

          {isLoading ? (
            <Wrapper width={`500px`} margin={`10px 0px 0px 0px`}>
              {fileUploadProgress.value && (
                <FileProgress
                  variant="determinate"
                  value={fileUploadProgress.value}
                />
              )}
            </Wrapper>
          ) : (
            <FileLabel
              htmlFor={`file-js4`}
              width={`500px`}
              margin={`10px 0px 0px 0px`}
            >
              IMAGE UPLOAD
            </FileLabel>
          )}
        </DataWrapper>
      </Wrapper>

      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper height={`200px`}>
          제품특징 02 소제목 *
        </DataGuideWrapper>
        <DataWrapper height={`200px`}>
          <Editor
            value={featureSubTitle2Input}
            componentHeight="h-100"
            editorChangeHandler={(html) => setFeatureSubTitle2Input(html)}
          />
        </DataWrapper>
      </Wrapper>

      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper height={`200px`}>제품특징 02 제목 *</DataGuideWrapper>
        <DataWrapper height={`200px`}>
          <Editor
            value={featureTitle2Input}
            componentHeight="h-100"
            editorChangeHandler={(html) => setFeatureTitle2Input(html)}
          />{" "}
        </DataWrapper>
      </Wrapper>

      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper height={`200px`}>제품특징 02 설명 *</DataGuideWrapper>
        <DataWrapper height={`200px`}>
          {/* 에디터 */}

          <Editor
            value={featureContent2Input}
            componentHeight="h-100"
            editorChangeHandler={(html) => setFeatureContent2Input(html)}
          />
        </DataWrapper>
      </Wrapper>

      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper height={`200px`}>
          Specification 제품명 *
        </DataGuideWrapper>
        <DataWrapper height={`200px`}>
          <Editor
            value={specNameInput}
            componentHeight="h-100"
            editorChangeHandler={(html) => setSpecNameInput(html)}
          />{" "}
        </DataWrapper>
      </Wrapper>

      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper height={`500px`}>
          Specification 각도별 디테일 제품 사진 01 *
        </DataGuideWrapper>
        <DataWrapper height={`500px`}>
          <Image
            src={specImage1Input.value}
            width={`500px`}
            height={`282px`}
            alt={`Specification 이미지1`}
          />

          <FileInput
            id="file-js6"
            type="file"
            accept="image/jpeg,image/gif,image/png"
            onChange={fileChangeSpec1}
            ref={fileRef}
          />

          {isLoading ? (
            <Wrapper width={`500px`} margin={`10px 0px 0px 0px`}>
              {fileUploadProgress.value && (
                <FileProgress
                  variant="determinate"
                  value={fileUploadProgress.value}
                />
              )}
            </Wrapper>
          ) : (
            <FileLabel
              htmlFor={`file-js6`}
              width={`500px`}
              margin={`10px 0px 0px 0px`}
            >
              IMAGE UPLOAD
            </FileLabel>
          )}
        </DataWrapper>
      </Wrapper>

      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper height={`500px`}>
          Specification 각도별 디테일 제품 사진 02 *
        </DataGuideWrapper>
        <DataWrapper height={`500px`}>
          <Image
            src={specImage2Input.value}
            width={`500px`}
            height={`282px`}
            alt={`Specification 이미지2`}
          />

          <FileInput
            id="file-js7"
            type="file"
            accept="image/jpeg,image/gif,image/png"
            onChange={fileChangeSpec2}
            ref={fileRef}
          />

          {isLoading ? (
            <Wrapper width={`500px`} margin={`10px 0px 0px 0px`}>
              {fileUploadProgress.value && (
                <FileProgress
                  variant="determinate"
                  value={fileUploadProgress.value}
                />
              )}
            </Wrapper>
          ) : (
            <FileLabel
              htmlFor={`file-js7`}
              width={`500px`}
              margin={`10px 0px 0px 0px`}
            >
              IMAGE UPLOAD
            </FileLabel>
          )}
        </DataWrapper>
      </Wrapper>

      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper height={`500px`}>
          Specification 각도별 디테일 제품 사진 03 *
        </DataGuideWrapper>
        <DataWrapper height={`500px`}>
          <Image
            src={specImage3Input.value}
            width={`500px`}
            height={`282px`}
            alt={`Specification 이미지3`}
          />

          <FileInput
            id="file-js8"
            type="file"
            accept="image/jpeg,image/gif,image/png"
            onChange={fileChangeSpec3}
            ref={fileRef}
          />

          {isLoading ? (
            <Wrapper width={`500px`} margin={`10px 0px 0px 0px`}>
              {fileUploadProgress.value && (
                <FileProgress
                  variant="determinate"
                  value={fileUploadProgress.value}
                />
              )}
            </Wrapper>
          ) : (
            <FileLabel
              htmlFor={`file-js8`}
              width={`500px`}
              margin={`10px 0px 0px 0px`}
            >
              IMAGE UPLOAD
            </FileLabel>
          )}
        </DataWrapper>
      </Wrapper>
      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper height={`700px`}>
          Specification 세부 특징 사진 01
        </DataGuideWrapper>
        <DataWrapper height={`700px`}>
          <Image
            src={specDetailImage1Input.value}
            width={`500px`}
            height={`282px`}
            alt={`Specification 세부이미지1`}
          />
          <FileInput
            id="file-js20"
            type="file"
            accept="image/jpeg,image/gif,image/png"
            onChange={fileChangeSpecDetail1}
            ref={fileRef}
          />
          {isLoading ? (
            <Wrapper width={`500px`} margin={`10px 0px 0px 0px`}>
              {fileUploadProgress.value && (
                <FileProgress
                  variant="determinate"
                  value={fileUploadProgress.value}
                />
              )}
            </Wrapper>
          ) : (
            <FileLabel
              htmlFor={`file-js20`}
              width={`500px`}
              margin={`10px 0px 0px 0px`}
            >
              IMAGE UPLOAD
            </FileLabel>
          )}
          <Editor
            placeholder={`세부특징 제목`}
            value={specDetailTitle1Input}
            componentHeight="h-100"
            editorChangeHandler={(html) => setSpecDetailTitle1Input(html)}
          />

          {/* 에디터 */}
          <Editor
            placeholder={`세부특징 설명`}
            value={specDetailContent1Input}
            componentHeight="h-100"
            editorChangeHandler={(html) => setSpecDetailContent1Input(html)}
          />
        </DataWrapper>
      </Wrapper>
      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper height={`700px`}>
          Specification 세부 특징 사진 02
        </DataGuideWrapper>
        <DataWrapper height={`700px`}>
          <Image
            src={specDetailImage2Input.value}
            width={`500px`}
            height={`282px`}
            alt={`Specification 세부이미지2`}
          />

          <FileInput
            id="file-js21"
            type="file"
            accept="image/jpeg,image/gif,image/png"
            onChange={fileChangeSpecDetail2}
            ref={fileRef}
          />

          {isLoading ? (
            <Wrapper width={`500px`} margin={`10px 0px 0px 0px`}>
              {fileUploadProgress.value && (
                <FileProgress
                  variant="determinate"
                  value={fileUploadProgress.value}
                />
              )}
            </Wrapper>
          ) : (
            <FileLabel
              htmlFor={`file-js21`}
              width={`500px`}
              margin={`10px 0px 0px 0px`}
            >
              IMAGE UPLOAD
            </FileLabel>
          )}
          <Editor
            placeholder={`세부특징 제목`}
            value={specDetailTitle2Input}
            componentHeight="h-100"
            editorChangeHandler={(html) => setSpecDetailTitle2Input(html)}
          />
          {/* 에디터 */}
          <Editor
            placeholder={`세부특징 설명`}
            value={specDetailContent2Input}
            componentHeight="h-100"
            editorChangeHandler={(html) => setSpecDetailContent2Input(html)}
          />
        </DataWrapper>
      </Wrapper>
      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper height={`700px`}>
          Specification 세부 특징 사진 03
        </DataGuideWrapper>
        <DataWrapper height={`700px`}>
          <Image
            src={specDetailImage3Input.value}
            width={`500px`}
            height={`282px`}
            alt={`Specification 세부이미지3`}
          />

          <FileInput
            id="file-js22"
            type="file"
            accept="image/jpeg,image/gif,image/png"
            onChange={fileChangeSpecDetail3}
            ref={fileRef}
          />

          {isLoading ? (
            <Wrapper width={`500px`} margin={`10px 0px 0px 0px`}>
              {fileUploadProgress.value && (
                <FileProgress
                  variant="determinate"
                  value={fileUploadProgress.value}
                />
              )}
            </Wrapper>
          ) : (
            <FileLabel
              htmlFor={`file-js22`}
              width={`500px`}
              margin={`10px 0px 0px 0px`}
            >
              IMAGE UPLOAD
            </FileLabel>
          )}
          <Editor
            placeholder={`세부특징 제목`}
            value={specDetailTitle3Input}
            componentHeight="h-100"
            editorChangeHandler={(html) => setSpecDetailTitle3Input(html)}
          />
          {/* 에디터 */}

          <Editor
            placeholder={`세부특징 설명`}
            value={specDetailContent3Input}
            componentHeight="h-100"
            editorChangeHandler={(html) => setSpecDetailContent3Input(html)}
          />
        </DataWrapper>
      </Wrapper>

      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper height={`200px`}>맺음말 제목 *</DataGuideWrapper>
        <DataWrapper height={`200px`}>
          <Editor
            value={finalTitleInput}
            componentHeight="h-100"
            editorChangeHandler={(html) => setFinalTitleInput(html)}
          />
        </DataWrapper>
      </Wrapper>
      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper height={`200px`}>맺음말 본문 *</DataGuideWrapper>
        <DataWrapper height={`200px`}>
          <Editor
            value={finalContentInput}
            componentHeight="h-100"
            editorChangeHandler={(html) => setFinalContentInput(html)}
          />
        </DataWrapper>
      </Wrapper>

      <Wrapper dr={`row`}>
        <DataGuideWrapper>제조 인증1</DataGuideWrapper>
        <DataWrapper dr={`row`} ju={`flex-start`}>
          {/* 에디터 */}

          <TextInput width={`250px`} height={`25px`} {...cerContent1Input} />

          <Combo {...cerIconImage1Input}>
            <ComboOption>--선택--</ComboOption>
            <ComboOption
              value={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon2%2FLocal%20Patent%20%E1%84%80%E1%85%AE%E1%86%A8%E1%84%82%E1%85%A2%E1%84%90%E1%85%B3%E1%86%A8%E1%84%92%E1%85%A5.svg?alt=media&token=94b2b564-c200-4267-a026-21c1b3c9d85f`}
            >
              국내특허
            </ComboOption>
            <ComboOption
              value={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon2%2FGlobal%20Patent%20%E1%84%92%E1%85%A2%E1%84%8B%E1%85%AC%E1%84%90%E1%85%B3%E1%86%A8%E1%84%92%E1%85%A5.svg?alt=media&token=178f82bf-5eb9-47b3-af37-e3cbcb3049ea`}
            >
              해외특허
            </ComboOption>
            <ComboOption
              value={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon2%2FPrize%20%E1%84%89%E1%85%AE%E1%84%89%E1%85%A1%E1%86%BC.svg?alt=media&token=fb556b03-0814-4df6-94bc-72dcc0d0ea0e`}
            >
              수상
            </ComboOption>
            <ComboOption
              value={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon2%2FSelf-Developed%20%E1%84%80%E1%85%AE%E1%86%A8%E1%84%82%E1%85%A2%20%E1%84%80%E1%85%A2%E1%84%87%E1%85%A1%E1%86%AF%20%E1%84%8C%E1%85%A6%E1%84%8C%E1%85%A9.svg?alt=media&token=efc6dac2-4ddc-448b-91c2-d91fcf784247`}
            >
              국내 개발제조
            </ComboOption>
          </Combo>
        </DataWrapper>
      </Wrapper>
      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper>제조 인증2</DataGuideWrapper>
        <DataWrapper dr={`row`} ju={`flex-start`}>
          {/* 에디터 */}

          <TextInput width={`250px`} height={`25px`} {...cerContent2Input} />

          <Combo {...cerIconImage2Input}>
            <ComboOption>--선택--</ComboOption>
            <ComboOption
              value={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon2%2FLocal%20Patent%20%E1%84%80%E1%85%AE%E1%86%A8%E1%84%82%E1%85%A2%E1%84%90%E1%85%B3%E1%86%A8%E1%84%92%E1%85%A5.svg?alt=media&token=94b2b564-c200-4267-a026-21c1b3c9d85f`}
            >
              국내특허
            </ComboOption>
            <ComboOption
              value={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon2%2FGlobal%20Patent%20%E1%84%92%E1%85%A2%E1%84%8B%E1%85%AC%E1%84%90%E1%85%B3%E1%86%A8%E1%84%92%E1%85%A5.svg?alt=media&token=178f82bf-5eb9-47b3-af37-e3cbcb3049ea`}
            >
              해외특허
            </ComboOption>
            <ComboOption
              value={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon2%2FPrize%20%E1%84%89%E1%85%AE%E1%84%89%E1%85%A1%E1%86%BC.svg?alt=media&token=fb556b03-0814-4df6-94bc-72dcc0d0ea0e`}
            >
              수상
            </ComboOption>
            <ComboOption
              value={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon2%2FSelf-Developed%20%E1%84%80%E1%85%AE%E1%86%A8%E1%84%82%E1%85%A2%20%E1%84%80%E1%85%A2%E1%84%87%E1%85%A1%E1%86%AF%20%E1%84%8C%E1%85%A6%E1%84%8C%E1%85%A9.svg?alt=media&token=efc6dac2-4ddc-448b-91c2-d91fcf784247`}
            >
              국내 개발제조
            </ComboOption>
          </Combo>
        </DataWrapper>
      </Wrapper>
      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper>제조 인증3</DataGuideWrapper>
        <DataWrapper dr={`row`} ju={`flex-start`}>
          {/* 에디터 */}

          <TextInput width={`250px`} height={`25px`} {...cerContent3Input} />

          <Combo {...cerIconImage3Input}>
            <ComboOption>--선택--</ComboOption>
            <ComboOption
              value={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon2%2FLocal%20Patent%20%E1%84%80%E1%85%AE%E1%86%A8%E1%84%82%E1%85%A2%E1%84%90%E1%85%B3%E1%86%A8%E1%84%92%E1%85%A5.svg?alt=media&token=94b2b564-c200-4267-a026-21c1b3c9d85f`}
            >
              국내특허
            </ComboOption>
            <ComboOption
              value={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon2%2FGlobal%20Patent%20%E1%84%92%E1%85%A2%E1%84%8B%E1%85%AC%E1%84%90%E1%85%B3%E1%86%A8%E1%84%92%E1%85%A5.svg?alt=media&token=178f82bf-5eb9-47b3-af37-e3cbcb3049ea`}
            >
              해외특허
            </ComboOption>
            <ComboOption
              value={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon2%2FPrize%20%E1%84%89%E1%85%AE%E1%84%89%E1%85%A1%E1%86%BC.svg?alt=media&token=fb556b03-0814-4df6-94bc-72dcc0d0ea0e`}
            >
              수상
            </ComboOption>
            <ComboOption
              value={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon2%2FSelf-Developed%20%E1%84%80%E1%85%AE%E1%86%A8%E1%84%82%E1%85%A2%20%E1%84%80%E1%85%A2%E1%84%87%E1%85%A1%E1%86%AF%20%E1%84%8C%E1%85%A6%E1%84%8C%E1%85%A9.svg?alt=media&token=efc6dac2-4ddc-448b-91c2-d91fcf784247`}
            >
              국내 개발제조
            </ComboOption>
          </Combo>
        </DataWrapper>
      </Wrapper>
      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper>제조 인증4</DataGuideWrapper>
        <DataWrapper dr={`row`} ju={`flex-start`}>
          {/* 에디터 */}

          <TextInput width={`250px`} height={`25px`} {...cerContent4Input} />

          <Combo {...cerIconImage4Input}>
            <ComboOption>--선택--</ComboOption>
            <ComboOption
              value={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon2%2FLocal%20Patent%20%E1%84%80%E1%85%AE%E1%86%A8%E1%84%82%E1%85%A2%E1%84%90%E1%85%B3%E1%86%A8%E1%84%92%E1%85%A5.svg?alt=media&token=94b2b564-c200-4267-a026-21c1b3c9d85f`}
            >
              국내특허
            </ComboOption>
            <ComboOption
              value={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon2%2FGlobal%20Patent%20%E1%84%92%E1%85%A2%E1%84%8B%E1%85%AC%E1%84%90%E1%85%B3%E1%86%A8%E1%84%92%E1%85%A5.svg?alt=media&token=178f82bf-5eb9-47b3-af37-e3cbcb3049ea`}
            >
              해외특허
            </ComboOption>
            <ComboOption
              value={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon2%2FPrize%20%E1%84%89%E1%85%AE%E1%84%89%E1%85%A1%E1%86%BC.svg?alt=media&token=fb556b03-0814-4df6-94bc-72dcc0d0ea0e`}
            >
              수상
            </ComboOption>
            <ComboOption
              value={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon2%2FSelf-Developed%20%E1%84%80%E1%85%AE%E1%86%A8%E1%84%82%E1%85%A2%20%E1%84%80%E1%85%A2%E1%84%87%E1%85%A1%E1%86%AF%20%E1%84%8C%E1%85%A6%E1%84%8C%E1%85%A9.svg?alt=media&token=efc6dac2-4ddc-448b-91c2-d91fcf784247`}
            >
              국내 개발제조
            </ComboOption>
          </Combo>
        </DataWrapper>
      </Wrapper>
      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper>제조 인증5</DataGuideWrapper>
        <DataWrapper dr={`row`} ju={`flex-start`}>
          {/* 에디터 */}

          <TextInput width={`250px`} height={`25px`} {...cerContent5Input} />

          <Combo {...cerIconImage5Input}>
            <ComboOption>--선택--</ComboOption>
            <ComboOption
              value={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon2%2FLocal%20Patent%20%E1%84%80%E1%85%AE%E1%86%A8%E1%84%82%E1%85%A2%E1%84%90%E1%85%B3%E1%86%A8%E1%84%92%E1%85%A5.svg?alt=media&token=94b2b564-c200-4267-a026-21c1b3c9d85f`}
            >
              국내특허
            </ComboOption>
            <ComboOption
              value={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon2%2FGlobal%20Patent%20%E1%84%92%E1%85%A2%E1%84%8B%E1%85%AC%E1%84%90%E1%85%B3%E1%86%A8%E1%84%92%E1%85%A5.svg?alt=media&token=178f82bf-5eb9-47b3-af37-e3cbcb3049ea`}
            >
              해외특허
            </ComboOption>
            <ComboOption
              value={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon2%2FPrize%20%E1%84%89%E1%85%AE%E1%84%89%E1%85%A1%E1%86%BC.svg?alt=media&token=fb556b03-0814-4df6-94bc-72dcc0d0ea0e`}
            >
              수상
            </ComboOption>
            <ComboOption
              value={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon2%2FSelf-Developed%20%E1%84%80%E1%85%AE%E1%86%A8%E1%84%82%E1%85%A2%20%E1%84%80%E1%85%A2%E1%84%87%E1%85%A1%E1%86%AF%20%E1%84%8C%E1%85%A6%E1%84%8C%E1%85%A9.svg?alt=media&token=efc6dac2-4ddc-448b-91c2-d91fcf784247`}
            >
              국내 개발제조
            </ComboOption>
          </Combo>
        </DataWrapper>
      </Wrapper>
      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper>제조 인증6</DataGuideWrapper>
        <DataWrapper dr={`row`} ju={`flex-start`}>
          {/* 에디터 */}

          <TextInput width={`250px`} height={`25px`} {...cerContent6Input} />

          <Combo {...cerIconImage6Input}>
            <ComboOption>--선택--</ComboOption>
            <ComboOption
              value={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon2%2FLocal%20Patent%20%E1%84%80%E1%85%AE%E1%86%A8%E1%84%82%E1%85%A2%E1%84%90%E1%85%B3%E1%86%A8%E1%84%92%E1%85%A5.svg?alt=media&token=94b2b564-c200-4267-a026-21c1b3c9d85f`}
            >
              국내특허
            </ComboOption>
            <ComboOption
              value={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon2%2FGlobal%20Patent%20%E1%84%92%E1%85%A2%E1%84%8B%E1%85%AC%E1%84%90%E1%85%B3%E1%86%A8%E1%84%92%E1%85%A5.svg?alt=media&token=178f82bf-5eb9-47b3-af37-e3cbcb3049ea`}
            >
              해외특허
            </ComboOption>
            <ComboOption
              value={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon2%2FPrize%20%E1%84%89%E1%85%AE%E1%84%89%E1%85%A1%E1%86%BC.svg?alt=media&token=fb556b03-0814-4df6-94bc-72dcc0d0ea0e`}
            >
              수상
            </ComboOption>
            <ComboOption
              value={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPERKRPRO%2Fuploads%2Ficon2%2FSelf-Developed%20%E1%84%80%E1%85%AE%E1%86%A8%E1%84%82%E1%85%A2%20%E1%84%80%E1%85%A2%E1%84%87%E1%85%A1%E1%86%AF%20%E1%84%8C%E1%85%A6%E1%84%8C%E1%85%A9.svg?alt=media&token=efc6dac2-4ddc-448b-91c2-d91fcf784247`}
            >
              국내 개발제조
            </ComboOption>
          </Combo>
        </DataWrapper>
      </Wrapper>

      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper>사용설명서 *</DataGuideWrapper>
        <DataWrapper ju={`flex-start`} dr={`row`}>
          <FileInput
            id="file-js49"
            type="file"
            onChange={(e) => fileLoadChangeHandler1(e)}
          />
          <TextInput
            type="text"
            width={`750px`}
            height={`25px`}
            margin={`3px 0px 0px 0px`}
            {...inputFileName1}
          />
          {isLoading ? (
            <CircularIndeterminate />
          ) : (
            <Search htmlFor={`file-js49`}>찾아보기</Search>
          )}
        </DataWrapper>
      </Wrapper>

      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper>해당제품 상세페이지 *</DataGuideWrapper>
        <DataWrapper ju={`flex-start`} dr={`row`}>
          <FileInput
            id="file-js50"
            type="file"
            onChange={(e) => fileLoadChangeHandler2(e)}
          />
          <TextInput
            type="text"
            width={`750px`}
            height={`25px`}
            margin={`3px 0px 0px 0px`}
            {...inputFileName2}
          />
          {isLoading ? (
            <CircularIndeterminate />
          ) : (
            <Search htmlFor={`file-js50`}>찾아보기</Search>
          )}
        </DataWrapper>
      </Wrapper>

      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper>작성자</DataGuideWrapper>
        <DataWrapper>
          <TextInput
            width={`350px`}
            height={`25px`}
            readOnly={true}
            value={`관리자`}
          />
        </DataWrapper>
      </Wrapper>
      <FieldsSet height={`30px`}>색상 별 이미지 등록/리스트</FieldsSet>
      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper height={`400px`}>색상 별 이미지</DataGuideWrapper>
        <DataWrapper height={`400px`}>
          <Image
            src={currentImagePath.value}
            width={`500px`}
            height={`282px`}
            alt={`색상 별 이미지`}
          />

          <FileInput
            id="file-js10"
            type="file"
            accept="image/jpeg,image/gif,image/png"
            onChange={colorImagesChangeHandler}
            ref={fileRef}
          />

          {isLoading ? (
            <Wrapper width={`500px`} margin={`10px 0px 0px 0px`}>
              {fileUploadProgress.value && (
                <FileProgress
                  variant="determinate"
                  value={fileUploadProgress.value}
                />
              )}
            </Wrapper>
          ) : (
            <FileLabel
              htmlFor={`file-js10`}
              width={`500px`}
              margin={`10px 0px 0px 0px`}
            >
              IMAGE UPLOAD
            </FileLabel>
          )}
        </DataWrapper>
      </Wrapper>
      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper>컬러이름</DataGuideWrapper>
        <DataWrapper>
          <Combo {...currentColor}>
            <ComboOption value={``}>--선택--</ComboOption>
            <ComboOption value={`레드`}>레드</ComboOption>
            <ComboOption value={`없음`}>없음</ComboOption>
          </Combo>
        </DataWrapper>
      </Wrapper>
      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper>컬러코드</DataGuideWrapper>
        <DataWrapper>
          <Combo {...currentColorCode}>
            <ComboOption value={``}>--선택--</ComboOption>
            <ComboOption value={`#C50707`}>#C50707</ComboOption>
            <ComboOption value={`#ffff`}>없음</ComboOption>
          </Combo>
        </DataWrapper>
      </Wrapper>
      <Wrapper dr={`row`} ju={`flex-start`}>
        <DataGuideWrapper>순서</DataGuideWrapper>
        <DataWrapper dr={`row`} ju={`space-between`}>
          <TextInput
            type="number"
            width={`100px`}
            height={`25px`}
            {...currentSort}
          />
          <CommonButton onClick={() => createColorImagesHandler()}>
            등록
          </CommonButton>
        </DataWrapper>
      </Wrapper>
      <Wrapper
        margin={`0 auto`}
        width={`90%`}
        dr={`row`}
        ju={`flex-start`}
        al={`flex-start`}
        wrap={`wrap`}
      >
        {colorImageList.map((data, idx) => {
          return (
            <Wrapper
              key={idx}
              width={`calc(100% / 5 - 20px)`}
              margin={`15px 10px 20px`}
            >
              <Wrapper
                width={`100%`}
                height={`250px`}
                isBorder={true}
                al={`flex-start`}
                ju={`flex-start`}
              >
                <Image height={`100%`} src={data.imagePath} />
              </Wrapper>

              <CommonButton
                width={`100%`}
                onClick={() => removeInnerImageHandler(idx)}
              >
                삭제
              </CommonButton>
            </Wrapper>
          );
        })}
      </Wrapper>
      <Wrapper margin={`30px 0px`}>
        {isLoading ? (
          <Wrapper al={`flex-end`} ju={`flex-end`}>
            <CircularIndeterminate />
          </Wrapper>
        ) : (
          <Wrapper al={`flex-end`} ju={`flex-end`} dr={`row`}>
            <CommonButton
              margin={`0px 5px 0px 0px`}
              kindOf={`check`}
              onClick={() => moveListProductPage()}
            >
              목록으로
            </CommonButton>
            <CommonButton
              margin={`0px 5px 0px 0px`}
              kindOf={`update`}
              onClick={() => registerProduct()}
            >
              등록
            </CommonButton>
          </Wrapper>
        )}
      </Wrapper>
    </WholeWrapper>
  );
};
