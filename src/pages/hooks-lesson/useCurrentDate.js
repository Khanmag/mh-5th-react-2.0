import { useEffect, useState } from "react";

export const useCurrentDate = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  // const currentDate = new Date();
  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);
  return getDateString(currentDate);
};

const getDateString = (dateObj) => {
  // const seconds =
  //   dateObj.getSeconds() < 10
  //     ? "0" + dateObj.getSeconds()
  //     : dateObj.getSeconds();
  const getNumberWithTwoSymbols = (num) =>
    (num + "").length < 2 ? "0" + num : num;
  const seconds = getNumberWithTwoSymbols(dateObj.getSeconds());
  const minutes = getNumberWithTwoSymbols(dateObj.getMinutes());
  // const hours = getNumberWithTwoSymbols(dateObj.getHours());
  return `${dateObj.getHours()}:${minutes}:${seconds}`;
};
