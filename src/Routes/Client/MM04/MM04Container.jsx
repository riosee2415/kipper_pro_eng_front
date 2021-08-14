import React, { useEffect, useRef, useState } from "react";
import withSplitting from "../../../Lib/withSplitting";
const MM04Presenter = withSplitting(() => import("./MM04Presenter"));
import { useQuery, useMutation } from "@apollo/client";
import { GET_TOKEN, GET_PRODUCT_LIST_BY_TYPE } from "./MM04Queries";
import { animateScroll as scroll } from "react-scroll";
import useInput from "../../../Components/Hooks/useInput";
import { toast } from "react-toastify";
import queryString from "query-string";

const MM04Container = ({ history, location }) => {
  ////////////// - VARIABLE- ////////////////
  const query = queryString.parse(location.search);

  const tokenId = sessionStorage.getItem("DLJHQSUDCJSKALDJ");

  ////////////// - USE REF- ///////////////

  ////////////// - USE STATE- ///////////////
  const [search, setSearch] = useState(false);
  const [arrow, setArrow] = useState(false);

  const [productViewDatum, setProductViewDatum] = useState(null);

  const [productSkip, setProductSkip] = useState(true);

  const productSubType = useInput("");

  const inputSearchValue = useInput("");

  ////////////// - USE QUERY- ///////////////
  const { data: tData, refetch: tRefetch } = useQuery(GET_TOKEN, {
    variables: {
      id: tokenId,
    },
    skip: !tokenId,
  });

  const { data: pDatum, refetch: pRefetch } = useQuery(
    GET_PRODUCT_LIST_BY_TYPE,
    {
      variables: {
        searchValue: inputSearchValue.value,
        productType: "USB 물리보안",
        productSubType: productSubType.value,
      },
      skip: productSkip,
    }
  );

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

  const changeSubTypeHandler = (type) => {
    history.push(`/usb?type=${type}`);
  };

  const searchDataHandler = (e) => {
    const value = e.target.value;

    inputSearchValue.setValue(value);

    setTimeout(() => {
      setProductSkip(false);
    }, 1);
  };

  const searchDataBlurHandler = () => {
    let url = `/usb?search=${inputSearchValue.value}`;
    if (query.type) url += `&type=${query.type}`;

    history.push(url);
  };

  ////////////// - USE EFFECT- //////////////

  useEffect(() => {
    scroll.scrollTo(0);

    if (tokenId) tRefetch();
  }, []);

  useEffect(() => {
    if (pDatum) {
      setProductViewDatum(pDatum.getProductListByType);
      setProductSkip(true);
    }
  }, [pDatum]);

  useEffect(() => {
    if (query.type) {
      productSubType.setValue(query.type);
    } else {
      productSubType.setValue("");
    }

    if (query.search) {
      inputSearchValue.setValue(query.search);
    } else {
      inputSearchValue.setValue("");
    }

    setTimeout(() => {
      pRefetch();

      setTimeout(() => {
        setProductSkip(false);
      }, 500);
    }, 100);
  }, [location.search]);

  return (
    <MM04Presenter
      search={search}
      arrow={arrow}
      productSubType={productSubType}
      inputSearchValue={inputSearchValue}
      //
      tData={tData && tData.getToken}
      pDatum={productViewDatum}
      //
      searchToggle={searchToggle}
      arrowToggle={arrowToggle}
      moveLinkHandler={moveLinkHandler}
      changeSubTypeHandler={changeSubTypeHandler}
      searchDataHandler={searchDataHandler}
      searchDataBlurHandler={searchDataBlurHandler}
    />
  );
};

export default MM04Container;
