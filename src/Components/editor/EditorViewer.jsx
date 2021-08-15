import React from "react";
import ReactQuill from "react-quill";
import styled from "styled-components";
import { Wrapper } from "../CommonComponents";
import "../../../node_modules/react-quill/dist/quill.snow.css";

const EditorWrapper = styled(Wrapper)`
  & .quill {
    width: 100%;
  }

  & .ql-editor {
    padding: 0;
    overflow-y: initial;
  }

  & .ql-toolbar.ql-snow {
    display: none;
  }

  & .ql-container.ql-snow {
    border: none;
  }

  ${(props) =>
    props.fontSize &&
    `
    & * {
      font-size: ${props.fontSize} !important;
    }
  `}

  ${(props) =>
    props.fontWeight &&
    `
    & * {
      font-weight: ${props.fontWeight} !important;
    }
  `}

${(props) =>
    props.textAlign &&
    `
    & * {
      text-align: ${props.textAlign} !important;
    }
  `}

  ${(props) =>
    props.letterSpacing &&
    `
    & * {
    letter-spacing: ${props.letterSpacing} !important;
    }
  `}

  ${(props) =>
    props.lineHeight &&
    `
    & * {
    line-height: ${props.lineHeight} !important;
    }
  `}
`;

const EditorViewer = ({ value, ...props }) => {
  return (
    <EditorWrapper {...props}>
      <ReactQuill theme="snow" value={value || ""} readOnly={true} />
    </EditorWrapper>
  );
};

export default EditorViewer;
