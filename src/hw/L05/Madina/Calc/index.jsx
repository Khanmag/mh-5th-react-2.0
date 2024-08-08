import { Box, Button, CssBaseline, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { calcButtons } from "./utilites";
import styles from "./index.module.css";

const minus = calcButtons[7].content;
const devide = calcButtons[2].content;
const multiply = calcButtons[3].content;
const plus = calcButtons[11].content;
const backSpace = calcButtons[18].content;
const equal = calcButtons[15].content;

const numButtonsList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const Calculator = () => {
  const [firstValue, setFirstValue] = useState(0);
  const [symbol, setSymbol] = useState(null);
  const [lastValue, setLastValue] = useState(0);

  const numberButtonOnClick = (num) => {
    if (symbol) setLastValue((prev) => +(prev + "" + num));
    else setFirstValue((prev) => +(prev + "" + num));
  };

  const getResult = () => {
    switch (symbol) {
      case devide:
        return firstValue / lastValue;
      case multiply:
        return firstValue * lastValue;
      case minus:
        return firstValue - lastValue;
      case plus:
        return firstValue + lastValue;
      default:
        return null;
    }
  };

  const changeSymbol = (newSymbol) => {
    if (newSymbol === minus && !firstValue) {
      setFirstValue("-");
    } else {
      setSymbol(newSymbol);
    }
  };

  const handleButtonClick = (buttonContent) => {
    if (buttonContent === "AC") {
      setFirstValue(0);
      setSymbol(null);
      setLastValue(0);
    }
    if (buttonContent === "%") console.log("%");
    if ([devide, minus, multiply, plus].includes(buttonContent)) {
      changeSymbol(buttonContent);
    }
    if ([1, 2, 3, 4, 5, 6, 7, 8, 9, 0].includes(+buttonContent)) {
      numberButtonOnClick(buttonContent);
    }
    if (buttonContent === backSpace) {
      if (symbol) {
        setLastValue((prev) => +(prev.toString().slice(0, -1) || 0));
        if (lastValue === 0) {
          setSymbol(null);
        }
      } else {
        setFirstValue((prev) => +(prev.toString().slice(0, -1) || 0));
      }
    }
    if (buttonContent === equal) {
    }
  };

  const eventFunc = (e) => {
    const key = e.key;
    if (numButtonsList.includes(+key)) numberButtonOnClick(+key);
    if (key === "-") changeSymbol(minus);
    if (["/", "*", "+"].includes(key)) changeSymbol(key);
    if (key === "Backspace") handleButtonClick(backSpace);
    if (key === "=" || key === "Enter") handleButtonClick(equal);
  };

  useEffect(() => {
    window.addEventListener("keydown", eventFunc);
    return () => window.removeEventListener("keydown", eventFunc);
  }, []);

  return (
    <Box className={styles.container}>
      <Box className={styles.screen}>
        <Box display={"flex"} gap={1}>
          <Typography>{firstValue}</Typography>
          <Box className={styles.symbolBox}>{symbol}</Box>
          <Typography>{lastValue}</Typography>
        </Box>
        <Box>
          <Typography className={styles.symbolBox} variant="h3">
            {equal} {getResult()}
          </Typography>
        </Box>
      </Box>
      <Box className={styles.calcButtons}>
        {calcButtons.map((buttonItem) => (
          <Button
            onClick={() => handleButtonClick(buttonItem.content)}
            className={buttonItem.className}
            variant="outlined"
          >
            {buttonItem.content}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Calculator;