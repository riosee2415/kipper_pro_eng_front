import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { toast } from "react-toastify";
import withSplitting from "../../../Lib/withSplitting";
const MMPresenter = withSplitting(() => import("./MMPresenter"));
import useInput from "../../../Components/Hooks/useInput";
import queryString from "query-string";
import {
  GET_NOTICEBOARD,
  GET_NOTICEBOARD_TOTALPAGE,
  GET_NOTICEBOARD_TOTALPAGE_ONLY_CNT,
  GET_NOTICEBOARD_TYPE,
} from "./MMQueries";

const MMContainer = ({ history, location }) => {
  ////////////// - USE STATE- ///////////////
  const [currentPage, setCurrentPage] = useState(0);
  const [currentList, setCurrentList] = useState(0);
  const [limit, setLimit] = useState(1);
  const [pages, setPages] = useState(null);
  const inputSearch = useInput("");
  const [searchValue, setSearchValue] = useState("");
  const [sort, setSort] = useState("createdAt");
  const sortValue = useInput("1");

  ////////////// - USE QUERY- ///////////////
  const { data: nDatum, refetch: nRefetch } = useQuery(GET_NOTICEBOARD, {
    variables: {
      searchValue,
      limit,
      currentPage: currentPage,
      sort: sortValue.value === "1" ? "createdAt" : "hit",
    },
  });

  const { data: tData, refetch: tRefetch } = useQuery(
    GET_NOTICEBOARD_TOTALPAGE_ONLY_CNT,
    {
      variables: {
        searchValue,
      },
    }
  );

  const { data: pData, refetch: pRefetch } = useQuery(
    GET_NOTICEBOARD_TOTALPAGE,
    {
      variables: {
        searchValue,
        limit,
      },
    }
  );

  // const { data: typeData, refetch: typeRefetch } = useQuery(
  //   GET_NOTICEBOARD_TYPE
  // );

  ///////////// - USE MUTATION- /////////////

  ///////////// - EVENT HANDLER- ////////////
  const moveLinkHandler = (link) => {
    history.push(
      `/notice/${link}?page=${currentPage + 1}&search=${searchValue}&sort=${
        sortValue.value
      }`
    );
  };
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
      `/notice?page=${page + 1}&search=${searchValue}&sort=${sortValue.value}`
    );
  };
  const changePageHandler = (page) => {
    // setCurrentPage(page);
    history.push(
      `/notice?page=${page + 1}&search=${searchValue}&sort=${sortValue.value}`
    );
  };

  const searchHandler = () => {
    history.push(
      `/notice?page=1&search=${inputSearch.value}&sort=${sortValue.value}`
    );
  };

  const sortHandler = (sort) => {
    history.push(`/notice?page=1&search=${searchValue}&sort=${sort}`);
  };

  ////////////// - USE EFFECT- //////////////
  useEffect(() => {
    nRefetch();
    tRefetch();
    pRefetch();
  }, []);

  useEffect(() => {
    if (pData) {
      const temp = [];

      for (let i = 0; i < pData.getNoticeBoardTotalPageClient; i++)
        temp.push(i);

      setPages(temp);
    }
  }, [pData]);

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
      setSearchValue(query.search);
    } else {
      setSearchValue("");
    }
    if (query.sort) {
      sortValue.setValue(query.sort);
    }
  }, [location.search]);

  return (
    <MMPresenter
      inputSearch={inputSearch}
      pages={pages}
      currentPage={currentPage}
      currentList={currentList}
      limit={limit}
      sortValue={sortValue}
      //
      noticeDatum={nDatum && nDatum.getNoticeBoardClient}
      pageCnt={tData && tData.getNoticeBoardTotalPageOnlyCntClient}
      //
      moveLinkHandler={moveLinkHandler}
      prevAndNextPageChangeHandler={prevAndNextPageChangeHandler}
      changePageHandler={changePageHandler}
      searchHandler={searchHandler}
      sortHandler={sortHandler}
    />
  );
};

export default MMContainer;
