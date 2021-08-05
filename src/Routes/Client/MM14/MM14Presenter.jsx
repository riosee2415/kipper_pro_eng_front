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
  CommonSubTitle,
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
  point,
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
  ableIcon,
  setAbleIcon,
  //
  createContactHandler,
}) => {
  useTitle(`Contact us | ${process.env["HOMEPAGE_NAME"]}`);

  return (
    <WholeWrapper
      bgColor={Theme.black_C}
      color={Theme.white_C}
      padding={`0 0 200px`}
    >
      <RsWrapper>
        <Wrapper padding={width < 900 && `0 0 0 36px`} margin={`160px 0 15px`}>
          <Image
            alt="contact"
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Ftitle%2FContact%20us.svg?alt=media&token=ba2e1b7a-c77d-4315-8526-53b595f21a12`}
            width={width < 900 ? `164px` : `383px`}
          />
        </Wrapper>
        <Text fontSize={`18px`} color={Theme.greyTheme7_C}>
          Find a SMARTKEEPER distributor near your region
        </Text>

        <Wrapper isRelative={true}>
          <Image
            width={`100%`}
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2F%E1%84%8C%E1%85%B5%E1%84%83%E1%85%A9.png?alt=media&token=37261bad-6bd3-4223-9db4-ee54b98cc834`}
          />
          {point.map((data, idx) => {
            return (
              <Wrapper
                isAbsolute={true}
                width={`50px`}
                height={`50px`}
                top={data.top}
                left={data.left}
              >
                {ableIcon !== idx ? (
                  <Wrapper
                    width={`15px`}
                    height={`15px`}
                    radius={`50%`}
                    bgColor={`#fff`}
                    onClick={() => setAbleIcon(idx)}
                  ></Wrapper>
                ) : (
                  <Wrapper
                    isAbsolute={true}
                    width={`370px`}
                    top={`0px`}
                    left={`0px`}
                    dr={`row`}
                    ju={`space-between`}
                    al={`flex-start`}
                  >
                    <Image src={data.src} width={`50px`} height={`50px`} />
                    <Image src={data.info} width={`300px`} />
                  </Wrapper>
                )}
              </Wrapper>
            );
          })}
        </Wrapper>
      </RsWrapper>
    </WholeWrapper>
  );
};

export default withResizeDetector(MM14Presenter);
