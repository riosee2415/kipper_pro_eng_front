import React, { useEffect, useRef, useState } from "react";
import withSplitting from "../../../Lib/withSplitting";
const MM15Presenter = withSplitting(() => import("./MM15Presenter"));
import { useQuery, useMutation } from "@apollo/client";
import {
  GET_REFERENCE,
  GET_REFERENCE_TOTALPAGE,
  GET_REFERENCE_TOTALPAGE_ONLY_CNT,
  GET_CATALOGUE,
  GET_CATALOGUE_TOTALPAGE,
  GET_CATALOGUE_TOTALPAGE_ONLY_CNT,
} from "./MM15Queries";
import { animateScroll as scroll } from "react-scroll";
import useInput from "../../../Components/Hooks/useInput";
import { toast } from "react-toastify";
import queryString from "query-string";
import { saveAs } from "file-saver";

const MM15Container = ({ history, location }) => {
  ////////////// - VARIABLE- ////////////////

  ////////////// - USE REF- ///////////////

  ////////////// - USE STATE- ///////////////
  const [currentTab, setCurrentTab] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentList, setCurrentList] = useState(0);
  const [limit, setLimit] = useState(16);
  const [pages, setPages] = useState(null);
  const inputSearch = useInput("");
  const [searchValue, setSearchValue] = useState("");
  const [sort, setSort] = useState("createdAt");
  const [currentLink, setCurrentLink] = useState("");

  ////////////// - USE QUERY- ///////////////
  const { data: rDatum, refetch: rRefetch } = useQuery(GET_REFERENCE, {
    variables: {
      searchValue,
      limit,
      currentPage: currentPage,
    },
  });

  const { data: tData, refetch: tRefetch } = useQuery(
    GET_REFERENCE_TOTALPAGE_ONLY_CNT,
    {
      variables: {
        searchValue,
      },
    }
  );

  const { data: pData, refetch: pRefetch } = useQuery(GET_REFERENCE_TOTALPAGE, {
    variables: {
      searchValue,
      limit,
    },
  });

  const { data: CatDatum, refetch: CatRefetch } = useQuery(GET_CATALOGUE, {
    variables: {
      searchValue,
      limit,
      currentPage: currentPage,
    },
  });

  const { data: CatTData, refetch: CatTRefetch } = useQuery(
    GET_CATALOGUE_TOTALPAGE_ONLY_CNT,
    {
      variables: {
        searchValue,
      },
    }
  );

  const { data: CatPData, refetch: CatPRefetch } = useQuery(
    GET_CATALOGUE_TOTALPAGE,
    {
      variables: {
        searchValue,
        limit,
      },
    }
  );

  ///////////// - USE MUTATION- /////////////

  ///////////// - EVENT HANDLER- ////////////
  const changeLinkHandler = (link) => {
    setCurrentLink(link);
  };

  const downloadHandler = async (filePath, fileName) => {
    if (
      filePath ===
      ` -
        `
    ) {
      toast.info("다운받을 파일이 없습니다.");
      return;
    }

    let blobData = await fetch(filePath).then((response) => response.blob());

    const element = document.createElement("a");
    const file = new Blob([blobData]);

    saveAs(file, fileName);
  };

  // const moveLinkHandler = (link) => {
  //   history.push(
  //     `/reference/${link}?page=${currentPage + 1}&search=${searchValue}$type=${currentTab}`
  //   );
  // };
  const prevAndNextPageChangeHandler = (page) => {
    if (page < 0) {
      toast.error("첫 페이지 입니다.");
      return;
    }

    if (page > pages.length - 1) {
      toast.error("마지막 페이지 입니다.");
      return;
    }

    history.push(
      `/reference?page=${page + 1}&search=${searchValue}&type=${currentTab}`
    );
  };
  const changePageHandler = (page) => {
    history.push(
      `/reference?page=${page + 1}&search=${searchValue}&type=${currentTab}`
    );
  };

  const searchHandler = (e) => {
    const value = e.target.value;

    inputSearch.setValue(value);
    setSearchValue(value);
    setCurrentPage(0);
    setCurrentList(0);
  };

  const searchBlurHandler = (e) => {
    history.push(
      `/reference?page=1&search=${inputSearch.value}&type=${currentTab}`
    );
  };

  const changeTabHandler = (currentTab) => {
    history.push(`/reference?page=1&type=${currentTab}`);
  };

  ////////////// - USE EFFECT- //////////////
  useEffect(() => {
    const query = queryString.parse(location.search);

    if (query.page) {
      setCurrentPage(parseInt(query.page - 1));
      setCurrentList(
        parseInt(
          query.page / 5 > parseInt(query.page / 5)
            ? query.page / 5
            : query.page / 5 - 1
        )
      );
    }

    if (query.search) {
      inputSearch.setValue(query.search);
      setSearchValue(query.search);
    } else {
      inputSearch.setValue("");
      setSearchValue("");
    }

    if (query.type) {
      setCurrentTab(parseInt(query.type));
    }
  }, [location.search]);

  console.log(currentTab);

  useEffect(() => {
    if (currentTab === 0 && pData) {
      const temp = [];

      for (let i = 0; i < pData.getReferenceTotalPageClient; i++) temp.push(i);

      setPages(temp);
    } else if (CatPData) {
      const temp = [];

      for (let i = 0; i < CatPData.getCatalogueTotalPageClient; i++)
        temp.push(i);

      setPages(temp);
    }
  }, [currentTab, pData, CatPData]);

  useEffect(() => {
    scroll.scrollTo(0);
  }, []);

  return (
    <MM15Presenter
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      inputSearch={inputSearch}
      pages={pages}
      currentPage={currentPage}
      currentList={currentList}
      limit={limit}
      currentLink={currentLink}
      setCurrentPage={setCurrentPage}
      //
      rDatum={rDatum && rDatum.getReferenceClient}
      CatDatum={CatDatum && CatDatum.getCatalogueClient}
      //
      // moveLinkHandler={moveLinkHandler}
      prevAndNextPageChangeHandler={prevAndNextPageChangeHandler}
      changePageHandler={changePageHandler}
      searchHandler={searchHandler}
      searchBlurHandler={searchBlurHandler}
      changeTabHandler={changeTabHandler}
      downloadHandler={downloadHandler}
      changeLinkHandler={changeLinkHandler}
    />
  );
};

export default MM15Container;
