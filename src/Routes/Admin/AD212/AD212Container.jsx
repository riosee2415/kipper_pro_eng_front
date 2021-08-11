import React, { useEffect, useState } from "react";
import AD212Presenter from "./AD212Presenter";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ALL_TOKEN, CREATE_TOKEN, DELETE_TOKEN } from "./AD212Queries.js";
import { toast } from "react-toastify";
import storageFn from "../../../fsStorage";
import useInput from "../../../Components/Hooks/useInput";
import confirm from "../../../Components/confirm/confirm";

export default ({ history }) => {
  ////////////// - USE STATE- ///////////////
  const [currentTab, setCurrentTab] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("User");

  const currentUserId = useInput(``);
  const currentPassWord = useInput(``);
  const currentPassWordRe = useInput(``);
  const currentContry = useInput(``);
  const currentLevel = useInput(``);
  const currentCharge = useInput(``);
  const currentEmail = useInput(``);
  const currentTel = useInput(``);
  const currentCompanyName = useInput(``);
  ////////////// - VARIABLE- ////////////////

  ////////////// - USE QUERY- ///////////////
  const { data: tDatum, refetch: tRefetch } = useQuery(GET_ALL_TOKEN);

  ////////////// - USE MUTATION- //////////////

  const [createTokenMutation] = useMutation(CREATE_TOKEN);
  const [deleteTokenMutation] = useMutation(DELETE_TOKEN);

  ////////////// - USE HANDLER- //////////////
  const createTokenHandler = async () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    if (currentPassWord.value !== currentPassWordRe.value) {
      toast.error("비밀번호가 일치하지 않습니다");
      return;
    }

    const { data } = await createTokenMutation({
      variables: {
        userId: currentUserId.value,
        passWord: currentPassWord.value,
        passWordRe: currentPassWordRe.value,
        contry: currentContry.value,
        level: currentLevel.value,
        companyName: currentCompanyName.value,
        charge: currentCharge.value,
        email: currentEmail.value,
        tel: currentTel.value,
      },
    });

    if (data.createToken) {
      toast.info("회원이 생성되었습니다.");
      setCurrentTab(1);
      currentUserId.setValue("");
      currentPassWord.setValue("");
      currentPassWordRe.setValue("");
      currentContry.setValue("");
      currentLevel.setValue("");
      currentCompanyName.setValue("");
      currentCharge.setValue("");
      currentEmail.setValue("");
      currentTel.setValue("");
    } else {
      toast.error("실패하였습니다. 개발사에 문의해 주시기 바랍니다.");
    }
  };

  const searchValueHandler = (event) => {
    setSearchValue(event.target.value);
  };

  const deleteTokenHandler = (id) => {
    confirm(
      `DELETE`,
      `해당 데이터를 삭제하시겠습니까?`,
      deleteTokenHandlerAfter,
      id
    );
  };

  const deleteTokenHandlerAfter = async (id) => {
    const { data } = await deleteTokenMutation({
      variables: {
        id,
      },
    });

    if (data.deleteToken) {
      toast.info("데이터가 삭제되었습니다.");
      tRefetch();
    } else {
      toast.error("처리 중 문제가 발생했습니다. 개발사에게 문의해주세요.");
    }
  };

  ////////////// - USE EFFECT- ///////////////
  useEffect(() => {
    currentUserId.setValue("");
    currentPassWord.setValue("");
    currentPassWordRe.setValue("");
    currentContry.setValue("");
    currentLevel.setValue("");
    currentCompanyName.setValue("");
    currentCharge.setValue("");
    currentEmail.setValue("");
    currentTel.setValue("");
    tRefetch();
  }, [currentTab]);

  useEffect(() => {
    tRefetch();
  }, []);

  return (
    <AD212Presenter
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      isLoading={isLoading}
      currentUserId={currentUserId}
      currentPassWord={currentPassWord}
      currentPassWordRe={currentPassWordRe}
      currentContry={currentContry}
      currentLevel={currentLevel}
      currentCompanyName={currentCompanyName}
      currentCharge={currentCharge}
      currentEmail={currentEmail}
      currentTel={currentTel}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      //
      tDatum={tDatum && tDatum.getAllToken}
      //
      createTokenHandler={createTokenHandler}
      searchValueHandler={searchValueHandler}
      deleteTokenHandler={deleteTokenHandler}
    />
  );
};
