import React, { useEffect, useRef, useState } from "react";
import withSplitting from "../../../Lib/withSplitting";
const MM90Presenter = withSplitting(() => import("./MM90Presenter"));
import { useQuery, useMutation } from "@apollo/client";
import {} from "./MM90Queries";
import { animateScroll as scroll } from "react-scroll";
import useInput from "../../../Components/Hooks/useInput";
import { toast } from "react-toastify";

const MM90Container = ({ history }) => {
////////////// - VARIABLE- ////////////////

////////////// - USE REF- ///////////////

////////////// - USE STATE- ///////////////

////////////// - USE QUERY- ///////////////

///////////// - USE MUTATION- /////////////

///////////// - EVENT HANDLER- ////////////

////////////// - USE EFFECT- //////////////

useEffect(() => {
  scroll.scrollTo(0);
}, []);

return <MM90Presenter />;
};

export default MM90Container;
  