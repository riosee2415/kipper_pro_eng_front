import React, { useEffect, useRef, useState } from "react";
import withSplitting from "../../../Lib/withSplitting";
const MM09Presenter = withSplitting(() => import("./MM09Presenter"));
import { useQuery, useMutation } from "@apollo/client";
import { GET_PRODUCT_ONE } from "./MM09Queries";
import { animateScroll as scroll } from "react-scroll";
import useInput from "../../../Components/Hooks/useInput";
import { toast } from "react-toastify";
import { saveAs } from "file-saver";

const MM09Container = ({ history, location, match }) => {
  ////////////// - VARIABLE- ////////////////
  const currentMenu = location.pathname.split("/")[1];

  ////////////// - USE REF- ///////////////

  ////////////// - USE STATE- ///////////////
  const [search, setSearch] = useState(false);
  const [arrow, setArrow] = useState(false);

  const inputSearchValue = useInput("");

  const [colorList, setColorList] = useState([]);
  const [currentColor, setCurrentColor] = useState(null);
  const [currentColorImages, setCurrentColorImages] = useState(null);
  const [currentColorImage, setCurrentColorImage] = useState(null);

  ////////////// - USE QUERY- ///////////////
  const { data: pData, refetch: pRefetch } = useQuery(GET_PRODUCT_ONE, {
    variables: {
      id: match.params.key,
    },
  });

  ///////////// - USE MUTATION- /////////////

  ///////////// - EVENT HANDLER- ////////////
  const searchToggle = () => {
    setSearch(!search);
  };

  const arrowToggle = () => {
    setArrow(!arrow);
  };

  const moveLinkHandler = (link) => {
    history.push(link);
  };

  const searchDataHandler = () => {
    history.push(`/${currentMenu}?search=${inputSearchValue.value}`);
  };

  const fileDownloadHandler = async (filePath, originName) => {
    if (!originName || originName === "-") {
      return;
    }
    let blob = await fetch(filePath).then((r) => r.blob());

    const file = new Blob([blob]);

    saveAs(file, originName);
  };

  ////////////// - USE EFFECT- //////////////

  useEffect(() => {
    scroll.scrollTo(0);

    pRefetch();
  }, []);

  useEffect(() => {
    if (pData) {
      (async () => {
        const compareList = [];

        await Promise.all(
          pData.getProductOne.colorImage.map((data) => {
            if (compareList.includes(data.color)) return;

            if (compareList.length === 0) setCurrentColor(data);

            compareList.push(data.color);
            colorList.push(data);
          })
        );

        setColorList([...colorList]);
      })();
    }
  }, [pData]);

  useEffect(() => {
    if (currentColor) {
      (async () => {
        let colorImages = [];

        await Promise.all(
          pData.getProductOne.colorImage.map((data) => {
            if (currentColor.color === data.color) {
              if (colorImages.length === 0) setCurrentColorImage(data);

              colorImages.push(data);
            }
          })
        );

        colorImages = await colorImages.sort((a, b) => {
          return a.sort - b.sort;
        });

        setCurrentColorImages([...colorImages]);
      })();
    }
  }, [currentColor]);

  return (
    <MM09Presenter
      location={location}
      //
      currentMenu={currentMenu}
      //
      search={search}
      arrow={arrow}
      inputSearchValue={inputSearchValue}
      colorList={colorList}
      currentColor={currentColor}
      setCurrentColor={setCurrentColor}
      currentColorImages={currentColorImages}
      currentColorImage={currentColorImage}
      setCurrentColorImage={setCurrentColorImage}
      //
      pData={pData && pData.getProductOne}
      //
      searchToggle={searchToggle}
      arrowToggle={arrowToggle}
      moveLinkHandler={moveLinkHandler}
      searchDataHandler={searchDataHandler}
      fileDownloadHandler={fileDownloadHandler}
    />
  );
};

export default MM09Container;
