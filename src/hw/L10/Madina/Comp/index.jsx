import React, { useState, useContext } from "react";
import { Box, Button } from "@mui/material";

export const LangContest = React.createContext();

const ContextLesson = () => {
  const lang = useContext(LangContest);
  return (
    <Box>
      {lang === "EN"
        ? "Current Language is English"
        : lang === "RU" ? "Текущий язык Русский" 
        : lang === "PL" ? "Aktualny język Polski"
        : "Unknown Language"}
    </Box>
  );
};

const Form = () => {
  const [currentLang, setCurrentLang] = useState("EN");

  return (
    <LangContest.Provider value={currentLang}>
      <Box display={"flex"} gap={2}>
        <Button variant="outlined" onClick={() => setCurrentLang("RU")}>
          RU
        </Button>
        <Button variant="outlined" onClick={() => setCurrentLang("EN")}>
          EN
        </Button>
        <Button variant="outlined" onClick={() => setCurrentLang("PL")}>
          PL
        </Button>

        <ContextLesson />
      </Box>
    </LangContest.Provider>
  );
};

export default Form;