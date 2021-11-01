import React, { useEffect, useRef, useState } from "react";
import withSplitting from "../../../Lib/withSplitting";
const MM18Presenter = withSplitting(() => import("./MM18Presenter"));
import { useQuery, useMutation } from "@apollo/client";
import { GET_TOKEN, GET_PRODUCT_LIST_BY_TYPE } from "./MM18Queries";
import { animateScroll as scroll } from "react-scroll";
import useInput from "../../../Components/Hooks/useInput";
import { toast } from "react-toastify";
import queryString from "query-string";

const MM18Container = ({ history, location }) => {
  ////////////// - VARIABLE- ////////////////
  const query = queryString.parse(location.search);

  const tokenId = sessionStorage.getItem("DLJHQSUDCJSKALDJ");

  ////////////// - USE REF- ///////////////

  ////////////// - USE STATE- ///////////////
  const [search, setSearch] = useState(false);
  const [arrow, setArrow] = useState(false);
  const [searchValue, setSearchValue] = useState(null);

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
        searchValue: searchValue ? searchValue : inputSearchValue.value,
        productType: "Network Security",
        productSubType: productSubType.value,
      },
    }
  );

  ///////////// - USE MUTATION- /////////////

  ///////////// - EVENT HANDLER- ////////////
  const searchToggle = () => {
    if (!search) {
      inputSearchValue.setValue(null);
    }

    setSearch(!search);
  };

  const arrowToggle = () => {
    setArrow(!arrow);
  };

  const moveLinkHandler = (link) => {
    history.push(link);
  };

  const changeSubTypeHandler = (type) => {
    history.push(`/network-physicalsecurity?type=${type}`);
  };

  const searchDataHandler = (e) => {
    const value = e.target.value;

    inputSearchValue.setValue(value);

    setTimeout(() => {
      setProductSkip(false);
    }, 1);
  };

  const searchDataBlurHandler = () => {
    let url = `/network-physicalsecurity?`;
    if (query.type) url += `&type=${query.type}`;

    history.push(url);
  };

  ////////////// - USE EFFECT- //////////////
  useEffect(() => {
    inputSearchValue.setValue("");
  }, [search]);

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

    setTimeout(() => {
      pRefetch();
    }, 100);
  }, [location.search]);

  return (
    <MM18Presenter
      tokenId={tokenId}
      //
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

export default MM18Container;
