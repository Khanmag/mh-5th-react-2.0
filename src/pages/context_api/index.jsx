import React, { useContext } from "react";
import { MyContext } from "../..";
import { Box } from "@mui/material";
import { LangContext } from "../../App";

const translateFunction = (text, lang) => {
  switch (lang) {
    case "RU":
      return "Текущий язык - Русский";
    case "EN":
      return "Current language is English";
    case "CH":
      return "目前的语言是中文";
    default:
      return "...";
  }
};

const ContextLesson = (props) => {
  const lang = useContext(LangContext);
  return (
    <div>
      {/* <Years value={props.date.getFullYear()} /> */}
      <Years />
      <Box>{translateFunction(null, lang)}</Box>
    </div>
  );
};

const Years = () => {
  // return <div>{value}</div>;
  const contextData = useContext(MyContext);
  return <div>{contextData.date.getHours()}</div>;
};
export default ContextLesson;
