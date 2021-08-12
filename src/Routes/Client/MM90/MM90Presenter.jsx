import React from "react";
import withSplitting from "../../../Lib/withSplitting";
import {
  WholeWrapper,
  Wrapper,
  Image,
  CommonButton,
  TextInput,
} from "../../../Components/CommonComponents";
import styled from "styled-components";
import { withResizeDetector } from "react-resize-detector";
import useTitle from "@4leaf.ysh/use-title";
import Theme from "../../../Styles/Theme";

const Button = styled(Wrapper)`
  width: 345px;
  height: 50px;
  background-color: ${(props) => props.theme.greyTheme8_C};
  color: ${(props) => props.theme.white_C};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.white_C};
    color: ${(props) => props.theme.black_C};
  }
`;

const MM90Presenter = ({ width }) => {
  useTitle(`login | ${process.env["HOMEPAGE_NAME"]}`);

  return (
    <WholeWrapper height={`100vh`} bgColor={Theme.black_C}>
      <Wrapper>
        <Image
          width={`auto`}
          margin={`0 0 57px`}
          alt="logo"
          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Flogo%2Flogin-logo.png?alt=media&token=97197e6b-b6be-4d47-a3b8-90c3085c2b62`}
        />
        <TextInput
          width={`346px`}
          height={`50px`}
          type={`text`}
          placeholder={`Entry code`}
          margin={`0 0 13px`}
        />
        <TextInput
          width={`346px`}
          height={`50px`}
          type={`password`}
          placeholder={`Password`}
          margin={`0 0 63px`}
        />
        <Button>Sign in</Button>
      </Wrapper>
    </WholeWrapper>
  );
};

export default withResizeDetector(MM90Presenter);
