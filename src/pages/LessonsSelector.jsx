import { Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const LessonsSelector = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Button><Link to={"/lessons/calculator"}>Калькулятор</Link></Button>
      <Button>Бесконечный скролл</Button>
      <Button>Хуки</Button>
      <Button>Редакс</Button>
      <Button><Link to={"/lessons/routing"}>Роутинг</Link></Button>
    </Box>
  );
};

export default LessonsSelector;
