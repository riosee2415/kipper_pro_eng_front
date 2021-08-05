import React, { useEffect, useRef, useState } from "react";
import withSplitting from "../../../Lib/withSplitting";
const MM14Presenter = withSplitting(() => import("./MM14Presenter"));
import { useQuery, useMutation } from "@apollo/client";
import { CREATE_CONTACT } from "./MM14Queries";
import { animateScroll as scroll } from "react-scroll";
import useInput from "../../../Components/Hooks/useInput";
import { toast } from "react-toastify";
import confirm from "../../../Components/confirm/confirm";

const MM14Container = ({ history }) => {
  ////////////// - VARIABLE- ////////////////

  ////////////// - USE REF- ///////////////

  ////////////// - USE STATE- ///////////////
  const inputType = useInput("");
  const inputTypeDesc = useInput("");
  const inputGoal = useInput("");
  const inputName = useInput("");
  const inputEmail = useInput("");
  const inputMobile = useInput("");
  const inputCompany = useInput("");
  const inputDepartment = useInput("");
  const inputChargeNum = useInput("");
  const inputFaxNum = useInput("");
  const inputDesc = useInput("");
  const inputCheck1 = useInput("");
  const inputCheck2 = useInput("");

  ////////////// - USE QUERY- ///////////////

  ///////////// - USE MUTATION- /////////////
  const [createContactMutation] = useMutation(CREATE_CONTACT);

  ///////////// - EVENT HANDLER- ////////////
  const createContactHandler = () => {
    if (!inputName.value || inputName.value.trim() === "") {
      toast.error("이름을 입력해주세요.");
      return;
    }
    if (!inputEmail.value || inputEmail.value.trim() === "") {
      toast.error("이메일을 입력해주세요.");
      return;
    }
    if (!inputMobile.value || inputMobile.value.trim() === "") {
      toast.error("연락처를 입력해주세요.");
      return;
    }

    if (!inputDesc.value || inputDesc.value.trim() === "") {
      toast.error("문의 내용을 작성해주세요.");
      return;
    }

    if (!inputCheck1) {
      toast.error("개인정보 수집, 이용을 동의해주세요.");
      return;
    }
    if (!inputCheck2) {
      // toast.error("")
      return;
    }

    confirm(
      "문의접수",
      "문의 사항을 접수하시겠습니까?",
      createContactHandlerAfter,
      null
    );
  };

  const createContactHandlerAfter = async () => {
    const { data } = await createContactMutation({
      variables: {
        type: inputType.value ? inputType.value : "-",
        typeDesc: inputTypeDesc.value ? inputTypeDesc.value : "-",
        goal: inputGoal.value ? inputGoal.value : "-",
        name: inputName.value ? inputName.value : "-",
        email: inputEmail.value ? inputEmail.value : "-",
        mobile: inputMobile.value ? inputMobile.value : "-",
        company: inputCompany.value ? inputCompany.value : "-",
        department: inputDepartment.value ? inputDepartment.value : "-",
        chargeNum: inputChargeNum.value ? inputChargeNum.value : "-",
        faxNum: inputFaxNum.value ? inputFaxNum.value : "-",
        desc: inputDesc.value ? inputDesc.value : "-",
      },
    });

    if (data.createDirectRequest) {
      toast.success("문의 사항이 접수되었습니다.");
      inputType.setValue("");
      inputTypeDesc.setValue("");
      inputGoal.setValue("");
      inputName.setValue("");
      inputEmail.setValue("");
      inputMobile.setValue("");
      inputCompany.setValue("");
      inputDepartment.setValue("");
      inputChargeNum.setValue("");
      inputFaxNum.setValue("");
      inputDesc.setValue("");
      inputCheck1.setValue("");
      inputCheck2.setValue("");

      setTimeout(() => {
        location.reload();
      }, 500);
    } else {
      toast.error("잠시 후 다시 시도해주세요.");
    }
  };

  ////////////// - USE EFFECT- //////////////

  useEffect(() => {
    scroll.scrollTo(0);
  }, []);

  useEffect(() => {
    if (inputType.value !== "직접입력") {
      inputTypeDesc.setValue("");
    }
  }, [inputType.value]);

  return (
    <MM14Presenter
      inputType={inputType}
      inputTypeDesc={inputTypeDesc}
      inputGoal={inputGoal}
      inputName={inputName}
      inputEmail={inputEmail}
      inputMobile={inputMobile}
      inputCompany={inputCompany}
      inputDepartment={inputDepartment}
      inputChargeNum={inputChargeNum}
      inputFaxNum={inputFaxNum}
      inputDesc={inputDesc}
      inputCheck1={inputCheck1}
      inputCheck2={inputCheck2}
      //
      createContactHandler={createContactHandler}
    />
  );
};

export default MM14Container;
