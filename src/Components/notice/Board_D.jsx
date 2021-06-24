import React, { useEffect, useState } from "react";
import {
  GET_NOTICEBOARD_DETAIL,
  GET_NOTICEBOARD_BEFORE_ID,
  GET_NOTICEBOARD_NEXT_ID,
} from "./BoardQueries";
import styled from "styled-components";
import { withResizeDetector } from "react-resize-detector";
import { useQuery } from "@apollo/client";
import { toast } from "react-toastify";
import {
  WholeWrapper,
  RsWrapper,
  CommonButton,
  Wrapper,
} from "../CommonComponents";
import CircularIndeterminate from "../loading/CircularIndeterminate";
import useTitle from "@4leaf.ysh/use-title";
import Theme from "../../Styles/Theme";
import queryString from "query-string";
import useInput from "../Hooks/useInput";

const Board_D_title = styled.h2`
  width: 100%;
  padding: 30px 0;
  font-size: 22px;
  font-weight: 700;

  border-bottom: ${(props) =>
    props.borderBottom || `3px solid ${props.theme.black_C}`};
`;

const Board_D = styled.ul`
  width: 100%;
  height: ${(props) => (props.height ? props.height : `50px`)};
  display: flex;
  flex-direction: row;
  align-items: center;
  background: ${(props) => props.bgColor};
  border-bottom: ${(props) =>
    props.borderBottom || `1px solid ${props.theme.lightGrey_C}`};

  @media (max-width: 700px) {
    flex-direction: column;
    height: auto;
  }
`;

const Board_D_List = styled.li`
  width: ${(props) => props.width};
  line-height: 50px;
  background: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  text-align: ${(props) => props.ta || `center`};
  padding: ${(props) => (props.padding ? props.padding : `0px 10px`)};
  border-radius: ${(props) => props.radius};
`;

const Board_D_Desc = styled.div`
  width: 100%;
  min-height: 500px;
  padding: 15px;
  line-height: 1.4;
  border-bottom: ${(props) =>
    props.borderBottom || `1px solid ${props.theme.lightGrey_C}`};
`;

export default withResizeDetector(({ match, history, location, width }) => {
  ////////////// - USE CONTEXT- ///////////////

  ////////////// - USE STATE- ///////////////
  const [currentData, setCurrentData] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchValue, setSearchValue] = useState("");

  const sortValue = useInput("1");
  ///////////// - USE QUERY- ////////////////

  const {
    data: nData,
    loading: nLoading,
    refetch: nRefetch,
  } = useQuery(GET_NOTICEBOARD_DETAIL, {
    variables: {
      id: match.params.key,
    },
  });

  const { data: nextData, refetch: nextRefetch } = useQuery(
    GET_NOTICEBOARD_NEXT_ID,
    {
      variables: {
        id: match.params.key,
        sort:
          queryString.parse(location.search).sort === "1" ? "createdAt" : "hit",

        hit: nData ? parseInt(nData.getNoticeBoardDetail.hit) : 0,
      },

      skip: nLoading,
    }
  );

  const { data: beforeData, refetch: beforeRefetch } = useQuery(
    GET_NOTICEBOARD_BEFORE_ID,
    {
      variables: {
        id: match.params.key,
        sort:
          queryString.parse(location.search).sort === "1" ? "createdAt" : "hit",
        hit: nData ? parseInt(nData.getNoticeBoardDetail.hit) : 0,
      },
      skip: nLoading,
    }
  );

  ///////////// - EVENT HANDLER- ////////////

  const _moveBeforeBoard = () => {
    if (beforeData.getNoticeBoardBeforeId === null) {
      toast.error("첫번째 글 입니다.");

      return null;
    }
    history.push(
      `/notice/${beforeData.getNoticeBoardBeforeId._id}?page=${
        currentPage + 1
      }&search=${searchValue}&sort=${sortValue.value}`
    );
  };

  const _moveNextBoard = () => {
    if (nextData.getNoticeBoardNextId === null) {
      toast.error("마지막 글 입니다.");

      return null;
    }

    history.push(
      `/notice/${nextData.getNoticeBoardNextId._id}?page=${
        currentPage + 1
      }&search=${searchValue}&sort=${sortValue.value}`
    );
  };

  const _moveListBoard = () => {
    history.push(
      `/notice?page=${currentPage + 1}&search=${searchValue}&sort=${
        sortValue.value
      }`
    );
  };

  ///////////// - USE EFFECT- ///////////////
  useEffect(() => {
    if (nData && nData.getNoticeBoardDetail) {
      let tempData = nData.getNoticeBoardDetail;

      const desc = document.getElementById("notice_description-js");

      if (desc !== null) {
        desc.innerHTML = tempData.description;
        setCurrentData(tempData);
      }
    }
  }, [nData]);

  useEffect(() => {
    nRefetch();
    // nextRefetch();
    // beforeRefetch();
  }, []);

  useEffect(() => {
    const query = queryString.parse(location.search);

    if (query.page) {
      setCurrentPage(parseInt(query.page - 1));
    }
    if (query.search) {
      setSearchValue(query.search);
    }
    if (query.sort) {
      sortValue.setValue(query.sort);
    }
  }, [location.search]);

  useTitle(``);
  return (
    <WholeWrapper margin={`100px 0 0 0`}>
      <RsWrapper padding={`80px 0`}>
        <Board_D_title>
          {currentData ? currentData.title : <CircularIndeterminate />}
        </Board_D_title>

        <Board_D dr={`row`}>
          <Board_D_List>작성자</Board_D_List>
          <Board_D_List color={Theme.subTheme_C}>관리자</Board_D_List>

          <Board_D_List>작성일</Board_D_List>
          <Board_D_List color={Theme.subTheme_C}>
            {currentData ? (
              currentData.createdAt.slice(0, 10)
            ) : (
              <CircularIndeterminate />
            )}
          </Board_D_List>

          <Board_D_List>조회수</Board_D_List>
          <Board_D_List color={Theme.subTheme_C}>
            {currentData ? currentData.hit : <CircularIndeterminate />}
          </Board_D_List>
        </Board_D>

        <Board_D_Desc>
          <Wrapper
            id={"notice_description-js"}
            className={"ql-editor"}
            al={`flex-start`}
          ></Wrapper>
        </Board_D_Desc>

        <Wrapper margin={`30px 0px`} ju={`flex-end`} dr={`row`}>
          <CommonButton
            width={`80px`}
            margin={`0px 10px 0px 0px`}
            onClick={_moveListBoard}
          >
            목록
          </CommonButton>

          <CommonButton
            width={`80px`}
            margin={`0px 10px 0px 0px`}
            kindOf={`white`}
            onClick={_moveBeforeBoard}
          >
            이전
          </CommonButton>

          <CommonButton
            width={`80px`}
            margin={`0px 10px 0px 0px`}
            kindOf={`white`}
            onClick={_moveNextBoard}
          >
            다음
          </CommonButton>
        </Wrapper>
      </RsWrapper>
    </WholeWrapper>
  );
});
