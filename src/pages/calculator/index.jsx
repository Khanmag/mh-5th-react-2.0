import { Box, Button, Typography } from "@mui/material";
import React, {
  // useCallback,
  useEffect,
  // useLayoutEffect,
  useState,
} from "react";
import styles from "./index.module.css";
import { calcButtons } from "./utils";

// variables
const minus = calcButtons[7].content;
const plus = calcButtons[11].content;
const numButtonsList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// -----------------------------------------
const Calculator = () => {
  const [firstValue, setFirstValue] = useState(0);
  const [symbol, setSymbol] = useState(null);
  const [lastValue, setLastValue] = useState(0);
  const [result, setResult] = useState(null);
  const numberButtonOnClick = (num) => {
    if (symbol) setLastValue((prev) => +(prev + "" + num));
    else setFirstValue((prev) => +(prev + "" + num));
  };
  // const onClickToSymbol = (symbol) => {
  //   setSymbol(symbol);
  // };
  const backspaceButtonClickFunc = () => {
    if (!symbol)
      setFirstValue((prev) => ("" + prev).slice(0, ("" + prev).length - 1));
    else {
      if (lastValue)
        setLastValue((prev) => ("" + prev).slice(0, ("" + prev).length - 1));
      else setSymbol(null);
    }
  };

  const equalButtonClickFunc = () => {
    setFirstValue(result);
    setLastValue(0);
    setSymbol(null);
    setResult(null);
  };

  const changeSymbol = (newSymbol) => {
    if (newSymbol === minus && !firstValue) {
      setFirstValue("-");
    } else {
      switch (newSymbol) {
        case minus:
          return setSymbol("-");
        case plus:
          return setSymbol("+");
        default:
          return setSymbol(newSymbol);
      }
    }
  };

  const handleButtonClick = (buttonContent) => {
    if (buttonContent === "AC") {
      setFirstValue(0);
      setSymbol(null);
      setLastValue(0);
    }
    if (buttonContent === "%") console.log("%");
    if ([plus, minus, "/", "*"].includes(buttonContent)) {
      changeSymbol(buttonContent);
    }
    if (numButtonsList.includes(+buttonContent)) {
      numberButtonOnClick(buttonContent);
    }
  };

  // useEffect( func, [...deps] )
  // Сработает только при первом рендере
  // useEffect(() => {
  //   console.log("useEffect!!!");
  // }, []);

  // useEffect(() => {
  //   console.log("useEffect!!!", firstValue);
  // }, [firstValue, lastValue, symbol]);

  // useLayoutEffect(() => {}, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const eventFunc = (e) => {
    console.log(e);
    const key = e.key;
    if (numButtonsList.includes(+key)) numberButtonOnClick(+key);
    if (key === "-") changeSymbol(minus);
    if (["/", "*", "+"].includes(key)) changeSymbol(key);
    if (key === "Backspace") backspaceButtonClickFunc();
    if (key === "=" || key === "Enter") equalButtonClickFunc();
  };

  // window.addEventListener("keydown", eventFunc);
  // window.removeEventListener("keydown", eventFunc);
  useEffect(() => {
    window.addEventListener("keydown", eventFunc);
    return () => window.removeEventListener("keydown", eventFunc);
  }, [eventFunc]);

  useEffect(() => {
    setResult((prev) => {
      switch (symbol) {
        case "/":
          return firstValue / lastValue;
        case "*":
          return firstValue * lastValue;
        case "-":
          return firstValue - lastValue;
        case "+":
          return +firstValue + +lastValue;
        default:
          return null;
      }
    });
  }, [firstValue, symbol, lastValue]);

  return (
    <Box display={"flex"} justifyContent={"center"} mt={5}>
      <Box maxWidth={368}>
        <Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"flex-end"}
            gap={1}
          >
            <Typography>{firstValue}</Typography>
            <Box className={styles.symbolBox}>{symbol}</Box>
            {/* <Typography>{lastValue ? lastValue : ""}</Typography> */}
            <Typography>{lastValue || ""}</Typography>
          </Box>
          <Box display={"flex"} justifyContent={"flex-end"}>
            <Typography variant="h3">
              {lastValue && symbol ? result : null}
            </Typography>
          </Box>
        </Box>
        <Box className={styles.calcButtons}>
          {/* {calcButtons.map((buttonItem) => {
          return <b>{buttonItem.content}</b>;
          })} */}
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
    </Box>
  );
};

export default Calculator;
