const fs = require("fs");
const args = process.argv.slice(2);

fs.mkdirSync(`./src/Routes/Admin/AD${args[0]}`);
fs.writeFile(
  `./src/Routes/Admin/AD${args[0]}/AD${args[0]}Container.jsx`,

  `import React, { useEffect, useState, useRef } from "react";
  import AD${args[0]}Presenter from "./AD${args[0]}Presenter";
  import { useMutation, useQuery } from "@apollo/client";
  import {} from "./AD${args[0]}Queries.js";
  import { toast } from "react-toastify";
  import storageFn from "../../../fsStorage";
  import useInput from "../../../Components/Hooks/useInput";
  import confirm from "../../../Components/confirm/confirm";
  import { useCookies } from "react-cookie";
  import { emptyCheck, progressLoading, checkCookieSort} from "../../../commonUtils";

  export default ({ history }) => {
    ////////////// - USE STATE- //////////////////
    const [currentTab, setCurrentTab] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const fileUploadProgress = useInput(null);

    ////////////// - USE REF- ////////////////////
    const fileRef = useRef();

    ////////////// - VARIABLE- ///////////////////
    const [cookie, setCookie] = useCookies();

    ////////////// - USE QUERY- /////////////////
  
    ////////////// - USE MUTATION- //////////////
  
    ////////////// - USE HANDLER- ///////////////
    const fileChangeHandler = async (e) => {
      // Presenter Logic
      /**
       *   <Image
            src={imagePath}
            width={\`350px\`}
            height={\`350px\`}
            margin={\`0px 0px 5px 0px\`}
            isBorder={true}
          />
          <FileInput
            ref={fileRef}
            id="file-js"
            type="file"
            accept="image/jpeg,image/gif,image/png"
            onChange={fileChangeHandler}
          />

          {isLoading ? (
            <Wrapper width={\`350px\`} margin={\`10px 0\`}>
              {fileUploadProgress.value && (
                <FileProgress
                  variant="determinate"
                  value={fileUploadProgress.value}
                />
              )}
            </Wrapper>
          ) : (
            <FileLabel
              htmlFor={\`file-js\`}
              width={\`350px\`}
              margin={\`10px 0\`}
            >
              THUMBNAIL UPLOAD
            </FileLabel>
          )}
       * 
       */
  
      process.nextTick(() => {
        setIsLoading(true);
      });
  
      const realFile = e.target.files[0];
  
      if (!realFile) {
        setIsLoading(false);
        return;
      }

      const result = await progressLoading(
        realFile,
        "test", // Foldername
        fileUploadProgress.setValue,
        setCurrentThumbnail,
        true, // isResize
        350, // if you use resize function, you must be going to write width that this type is only Integer
        350 // if you use resize function, you should be going to write height that this type is only Integer
      );
  
      if (result) {
        setIsLoading(false);
        fileRef.current.value = null;
      }
    };
  
    ////////////// - USE EFFECT- ///////////////
    useEffect(() => {}, []);
  
    useEffect(() => {}, [currentTab]);
  
    return (
      <AD${args[0]}Presenter
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        isLoading={isLoading}
        fileUploadProgress={fileUploadProgress}
        //
        fileRef={fileRef}
        //
        fileChangeHandler={fileChangeHandler}
      />
    );
  };
  
  `,
  function (err) {
    if (err === null) {
      console.log("🍀 4LEAF SOFTWARE - DEV ENV - COMMAND SYSTEM CLEAR RUN!");
    } else {
      console.log(err);
      console.log("fail");
    }
  }
);

fs.writeFile(
  `./src/Routes/Admin/AD${args[0]}/AD${args[0]}Presenter.jsx`,

  `import React from "react";
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
  import { FiAlertCircle } from "react-icons/fi";
  import FileProgress from "../../../Components/FileProgress";
  import useTitle from "@4leaf.ysh/use-title";
  import {Modal} from "antd";
  
  const tabs = ["셈플 텝"];
  
  export default ({ 
    currentTab, 
    setCurrentTab, 
    isLoading,
    fileRef,
    fileUploadProgress,
    //
    fileChangeHandler
}) => {
    useTitle("ADMIN | 셈플");
  
    return (
      <WholeWrapper al={\`flex-start\`} ju={\`flex-start\`}>
        <Fade right>
          <Title text="셈플 텝" />
          <Tabs
            tabs={tabs}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          />
        </Fade>
      </WholeWrapper>
    );
  };
  
  `,
  function (err) {
    if (err === null) {
      console.log("🍀 4LEAF SOFTWARE - DEV ENV - COMMAND SYSTEM CLEAR RUN!");
    } else {
      console.log(err);
      console.log("fail");
    }
  }
);

fs.writeFile(
  `./src/Routes/Admin/AD${args[0]}/AD${args[0]}Queries.js`,

  `import { gql } from '@apollo/client';
  `,
  function (err) {
    if (err === null) {
      console.log("🍀 4LEAF SOFTWARE - DEV ENV - COMMAND SYSTEM CLEAR RUN!");
    } else {
      console.log(err);
      console.log("fail");
    }
  }
);

fs.writeFile(
  `./src/Routes/Admin/AD${args[0]}/index.js`,

  `import AD${args[0]}Container from "./AD${args[0]}Container.jsx";
  
  export default AD${args[0]}Container;
  `,
  function (err) {
    if (err === null) {
      console.log("🍀 4LEAF SOFTWARE - DEV ENV - COMMAND SYSTEM CLEAR RUN!");
    } else {
      console.log(err);
      console.log("fail");
    }
  }
);
