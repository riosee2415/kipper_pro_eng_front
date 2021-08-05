import React from "react";
import withSplitting from "../../../Lib/withSplitting";
import {
  WholeWrapper,
  RsWrapper,
  Wrapper,
  Text,
  TextInput,
  Combo,
  ComboOption,
  TextArea,
  CommonButton,
  Image,
} from "../../../Components/CommonComponents";
import styled from "styled-components";
import { withResizeDetector } from "react-resize-detector";
import useTitle from "@4leaf.ysh/use-title";
import Theme from "../../../Styles/Theme";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import ReCAPTCHA from "react-google-recaptcha";

const ComboBox = styled(Combo)`
  width: ${(props) => props.width};
  height: ${(props) => props.height || `40px`};
  border: ${(props) => props.border || `1px solid ${props.theme.greyTheme7_C}`};
  color: ${(props) => props.theme.white_C};
  margin: ${(props) => props.margin || `0`};
  background-color: ${(props) => props.bgColor || `transparent`};
  font-size: 14px;
`;

const Link = styled(Text)`
  color: ${(props) => props.theme.subTheme_C};
  text-decoration: underline;
  font-size: 14px;
  font-weight: 300;
  cursor: pointer;

  @media (max-width: 900px) {
    font-size: 13px;
  }
`;

const MM14Presenter = ({
  width,
  //
  inputType,
  inputTypeDesc,
  inputGoal,
  inputName,
  inputEmail,
  inputMobile,
  inputCompany,
  inputDepartment,
  inputChargeNum,
  inputFaxNum,
  inputDesc,
  inputCheck1,
  inputCheck2,
  //
  createContactHandler,
}) => {
  useTitle(`Contact us | ${process.env["HOMEPAGE_NAME"]}`);

  return (
    <WholeWrapper bgColor={Theme.black_C} color={Theme.white_C}>
      <RsWrapper
        margin={width < 900 ? `115px 0 60px` : `196px 0 100px`}
        paddingLeft={width < 900 && `0`}
        paddingRight={width < 900 && `0`}
      >
        <Wrapper
          width={width < 900 ? `100%` : `80%`}
          borderBottom={`1px solid ${Theme.greyTheme7_C}`}
          padding={width < 900 ? `0 0 35px` : `0 0 100px`}
        >
          {/* <Wrapper
          al={`flex-start`}
          fontSize={`70px`}
          isGotham={true}
          color={Theme.white_C}
          letterSpacing={`-3px`}
          fontWeight={`bold`}
        >
          Contact us
        </Wrapper> */}
          <Wrapper al={`flex-start`} padding={width < 900 && `0 0 0 36px`}>
            <Image
              alt="contact"
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ftitle%2FContact%20us.svg?alt=media&token=ba2e1b7a-c77d-4315-8526-53b595f21a12`}
              width={width < 900 ? `164px` : `335px`}
            />
          </Wrapper>
          <Wrapper
            padding={width < 900 && `0 30px 0 36px`}
            dr={`row`}
            ju={`flex-start`}
            fontSize={width < 900 ? `15px` : `18px`}
            fontWeight={`300`}
            margin={`15px 0 70px`}
            lineHeight={`1.6`}
          >
            <Text display={width < 900 ? `contents` : `block`}>스마트키퍼</Text>
            는 보안제품으로, 견적 및 제안 요청 시에는 최종사용자 정보가 필요함을
            양해해 주시길 바랍니다.
          </Wrapper>

          <Wrapper
            borderBottom={`1px solid ${Theme.greyTheme7_C}`}
            padding={width < 900 ? `0 0 15px 36px` : `0 0 15px`}
            fontSize={width < 900 ? `20px` : `28px`}
            al={`flex-start`}
            margin={width < 900 ? `0 0 50px` : `0 0 55px`}
            fontWeight={`bold`}
          >
            문의사항이 있으신가요?
          </Wrapper>

          <Wrapper padding={width < 900 ? `0 0 0 36px` : `0 0 0 50px`}>
            <Wrapper dr={`row`} ju={`flex-start`} margin={`0 0 20px`}>
              <Text
                width={width < 900 ? `100%` : `110px`}
                margin={width < 900 && `0 0 10px`}
                fontSize={width < 900 ? `17px` : `18px`}
              >
                문의구분
              </Text>
              <Wrapper
                width={`auto`}
                margin={width < 900 ? `0 25px 0 0` : `0 10px 0 0`}
              >
                <RadioGroup aria-label="contact" name="contact">
                  <FormControlLabel
                    value="제품문의"
                    control={
                      <Radio
                        checked={inputType.value === "제품문의"}
                        onChange={() => inputType.setValue("제품문의")}
                      />
                    }
                    label="제품문의"
                  />
                </RadioGroup>
              </Wrapper>
              <Wrapper
                width={`auto`}
                margin={width < 900 ? `0 25px 0 0` : `0 10px 0 0`}
              >
                <RadioGroup aria-label="contact" name="contact">
                  <FormControlLabel
                    value="견적요청"
                    control={
                      <Radio
                        checked={inputType.value === "견적요청"}
                        onChange={() => inputType.setValue("견적요청")}
                      />
                    }
                    label="견적요청"
                  />
                </RadioGroup>
              </Wrapper>
              <Wrapper width={`auto`} margin={width < 900 ? `0` : `0 10px 0 0`}>
                <RadioGroup aria-label="contact" name="contact">
                  <FormControlLabel
                    value="제휴문의"
                    control={
                      <Radio
                        checked={inputType.value === "제휴문의"}
                        onChange={() => inputType.setValue("제휴문의")}
                      />
                    }
                    label="제휴문의"
                  />
                </RadioGroup>
              </Wrapper>
              <Wrapper
                width={`auto`}
                margin={width < 900 ? `10px 10px 0 0` : `0 10px 0 0`}
                dr={`row`}
              >
                <RadioGroup aria-label="contact" name="contact">
                  <FormControlLabel
                    value="직접입력"
                    control={
                      <Radio
                        checked={inputType.value === "직접입력"}
                        onChange={() => inputType.setValue("직접입력")}
                      />
                    }
                    label=""
                  />
                </RadioGroup>
                <TextInput
                  color={`#fff`}
                  width={width < 900 && `276px`}
                  placeholder={`직접입력`}
                  readOnly={inputType.value !== "직접입력"}
                  readOnlyColor={`transparent`}
                  {...inputTypeDesc}
                />
              </Wrapper>
            </Wrapper>

            <Wrapper
              dr={`row`}
              ju={`flex-start`}
              margin={width < 900 ? `0 0 20px` : `0 0 40px`}
            >
              <Text
                width={width < 900 ? `100%` : `110px`}
                margin={width < 900 && `0 0 10px`}
                fontSize={width < 900 ? `17px` : `18px`}
              >
                목적
              </Text>
              <Wrapper
                width={`auto`}
                margin={width < 900 ? `0 25px 0 0` : `0 10px 0 0`}
              >
                <RadioGroup aria-label="contact" name="contact">
                  <FormControlLabel
                    value="직접사용"
                    control={
                      <Radio
                        checked={inputGoal.value === "직접사용"}
                        onChange={() => inputGoal.setValue("직접사용")}
                      />
                    }
                    label="직접사용"
                  />
                </RadioGroup>
              </Wrapper>
              <Wrapper width={`auto`} margin={`0 10px 0 0`}>
                <RadioGroup aria-label="contact" name="contact">
                  <FormControlLabel
                    value="외부판매"
                    control={
                      <Radio
                        checked={inputGoal.value === "외부판매"}
                        onChange={() => inputGoal.setValue("외부판매")}
                      />
                    }
                    label="외부판매"
                  />
                </RadioGroup>
              </Wrapper>
            </Wrapper>

            <Wrapper dr={`row`} margin={`0 0 20px`}>
              <Wrapper
                width={width < 900 ? `100%` : `50%`}
                dr={`row`}
                ju={`flex-start`}
                margin={width < 900 && `0 0 20px`}
              >
                <Text
                  width={width < 900 ? `100%` : `110px`}
                  margin={width < 900 && `0 0 10px`}
                  fontSize={width < 900 ? `17px` : `18px`}
                >
                  이름 *
                </Text>

                <TextInput
                  color={`#fff`}
                  width={width < 900 ? `300px` : `calc(100% - 120px)`}
                  placeholder={`담당자명을 입력해 주세요.`}
                  {...inputName}
                />
              </Wrapper>

              <Wrapper
                width={width < 900 ? `100%` : `50%`}
                dr={`row`}
                ju={`flex-start`}
                padding={width < 900 ? `0` : `0 0 0 50px`}
              >
                <Text
                  width={width < 900 ? `100%` : `110px`}
                  margin={width < 900 && `0 0 10px`}
                  fontSize={width < 900 ? `17px` : `18px`}
                >
                  이메일 *
                </Text>

                <TextInput
                  color={`#fff`}
                  width={width < 900 ? `300px` : `calc(100% - 120px)`}
                  placeholder={`이메일 주소를 입력해 주세요.`}
                  {...inputEmail}
                />
              </Wrapper>
            </Wrapper>

            <Wrapper
              dr={`row`}
              margin={width < 900 ? `0 0 20px` : `0 0 40px`}
              ju={`flex-start`}
            >
              <Wrapper
                width={width < 900 ? `100%` : `50%`}
                dr={`row`}
                ju={`flex-start`}
              >
                <Text
                  width={width < 900 ? `100%` : `110px`}
                  margin={width < 900 && `0 0 10px`}
                  fontSize={width < 900 ? `17px` : `18px`}
                >
                  휴대폰 번호 *
                </Text>

                <Wrapper
                  width={width < 900 ? `300px` : `calc(100% - 120px)`}
                  dr={`row`}
                >
                  <ComboBox width={`110px`}>
                    <ComboOption>+82</ComboOption>
                  </ComboBox>
                  <TextInput
                    color={`#fff`}
                    width={`calc(100% - 110px)`}
                    placeholder={`010 0000 0000`}
                    {...inputMobile}
                  />
                </Wrapper>
              </Wrapper>
            </Wrapper>
            <Wrapper dr={`row`} margin={`0 0 20px`}>
              <Wrapper
                width={width < 900 ? `100%` : `50%`}
                dr={`row`}
                ju={`flex-start`}
                margin={width < 900 && `0 0 20px`}
              >
                <Text
                  width={width < 900 ? `100%` : `110px`}
                  margin={width < 900 && `0 0 10px`}
                  fontSize={width < 900 ? `17px` : `18px`}
                >
                  기업
                </Text>

                <TextInput
                  color={`#fff`}
                  width={width < 900 ? `300px` : `calc(100% - 120px)`}
                  placeholder={`기업명을 입력해 주세요.`}
                  {...inputCompany}
                />
              </Wrapper>

              <Wrapper
                width={width < 900 ? `100%` : `50%`}
                dr={`row`}
                ju={`flex-start`}
                padding={width < 900 ? `0` : `0 0 0 50px`}
              >
                <Text
                  width={width < 900 ? `100%` : `110px`}
                  margin={width < 900 && `0 0 10px`}
                  fontSize={width < 900 ? `17px` : `18px`}
                >
                  부서
                </Text>

                <TextInput
                  color={`#fff`}
                  width={width < 900 ? `300px` : `calc(100% - 120px)`}
                  placeholder={`부서명을 입력해 주세요.`}
                  {...inputDepartment}
                />
              </Wrapper>
            </Wrapper>
            <Wrapper dr={`row`} margin={width < 900 ? `0 0 20px` : `0 0 40px`}>
              <Wrapper
                width={width < 900 ? `100%` : `50%`}
                dr={`row`}
                ju={`flex-start`}
                margin={width < 900 && `0 0 20px`}
              >
                <Text
                  width={width < 900 ? `100%` : `110px`}
                  margin={width < 900 && `0 0 10px`}
                  fontSize={width < 900 ? `17px` : `18px`}
                >
                  담당 번호
                </Text>

                <TextInput
                  color={`#fff`}
                  width={width < 900 ? `300px` : `calc(100% - 120px)`}
                  placeholder={`02 0000 0000`}
                  {...inputChargeNum}
                />
              </Wrapper>

              <Wrapper
                width={width < 900 ? `100%` : `50%`}
                dr={`row`}
                ju={`flex-start`}
                padding={width < 900 ? `0` : `0 0 0 50px`}
              >
                <Text
                  width={width < 900 ? `100%` : `110px`}
                  margin={width < 900 && `0 0 10px`}
                  fontSize={width < 900 ? `17px` : `18px`}
                >
                  팩스 번호
                </Text>

                <TextInput
                  color={`#fff`}
                  width={width < 900 ? `300px` : `calc(100% - 120px)`}
                  placeholder={`02 0000 0000`}
                  {...inputFaxNum}
                />
              </Wrapper>
            </Wrapper>

            <Wrapper al={`flex-start`}>
              <Text fontSize={`20px`} margin={`0 0 20px`}>
                문의 내용 *
              </Text>
              <TextArea
                color={`#fff`}
                width={width < 900 && `300px`}
                placeholder={`세부내용에 대해 작성해 주세요.
견적 및 제안 요청시에는 최종사용자 정보가 필요함을 양해해 주시길 바랍니다.`}
                placePadding={`15px`}
                {...inputDesc}
              />
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </RsWrapper>

      <Wrapper
        dr={`row`}
        margin={`0 0 50px`}
        fontWeight={`300`}
        fontSize={width < 900 ? `13px` : `14px`}
      >
        <RadioGroup aria-label="contact" name="contact">
          <FormControlLabel
            value="(필수) 개인정보 수집, 이용동의"
            control={
              <Radio
                checked={inputCheck2.value}
                onChange={() => inputCheck2.setValue(!inputCheck2.value)}
              />
            }
            label="(필수) 개인정보 수집, 이용동의"
          />
        </RadioGroup>
        <Text
          fontSize={width < 900 ? `13px` : `14px`}
          display={width < 900 ? `none` : `block`}
          color={`rgb(163, 163, 163)`}
          fontWeight={`400`}
          margin={`0 5px 0 -10px`}
        >
          개인정보보호정책
        </Text>
        <Link>개인정보보호정책</Link>
      </Wrapper>
      <ReCAPTCHA
        sitekey={process.env.CAPCHA}
        onChange={() => {
          inputCheck2.setValue(true);
        }}
      />
      <CommonButton
        kindOf={`grey`}
        margin={width < 900 ? `30px 0 65px` : `45px 0 200px`}
        width={width < 900 ? `127px` : `330px`}
        height={width < 900 ? `34px` : `75px`}
        fontSize={width < 900 ? `13px` : `20px`}
        onClick={createContactHandler}
      >
        문의접수
      </CommonButton>
    </WholeWrapper>
  );
};

export default withResizeDetector(MM14Presenter);
