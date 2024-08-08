import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../store/firstSlice";

const ReduxLesson = () => {
  const count = useSelector((store) => store.firstSlice.count);
  const dispatch = useDispatch();
  const buttonHandleClick = (value) => {
    if (value > 0) dispatch(increment(value));
    // else dispatch(decrement(-value))
    else dispatch(decrement(Math.abs(value)));
  };
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Typography variant="h2">Счётчик</Typography>
      <Box>
        <Typography textAlign={"center"} variant="h4">
          {count >= 0 ? count + " н.э" : Math.abs(count) + " до н.э."}
        </Typography>
        {[1, 5, 10, 15, 25, 50, 100, 300, 1000].map((itemNum) => (
          <Box
            display={"flex"}
            justifyContent={"center"}
            gap={1}
            mb={1}
            key={itemNum}
          >
            <Button
              onClick={() => buttonHandleClick(-itemNum)}
              variant="contained"
              color="secondary"
            >
              {-itemNum}
            </Button>
            <Button
              onClick={() => buttonHandleClick(itemNum)}
              variant="contained"
              disabled={count + itemNum > 2024}
              color="secondary"
            >
              {+itemNum}
            </Button>
          </Box>
        ))}
        {count > 1700 && count < 1900 && <Box>Событие!!!</Box>}
        <input type="range" />
        {/* <Box display={"flex"} gap={1} mb={1}>
          <Button
            onClick={() => buttonHandleClick(-1)}
            variant="contained"
            color="secondary"
          >
            -1
          </Button>
          <Button
            onClick={() => buttonHandleClick(1)}
            variant="contained"
            color="secondary"
          >
            +1
          </Button>
        </Box>
        <Box display={"flex"} gap={1} mb={1}>
          <Button variant="contained" color="secondary">
            -5
          </Button>
          <Button variant="contained" color="secondary">
            +5
          </Button>
        </Box>
        <Box display={"flex"} gap={1} mb={1}>
          <Button variant="contained" color="secondary">
            -10
          </Button>
          <Button variant="contained" color="secondary">
            +10
          </Button>
        </Box>
        <Box display={"flex"} gap={1}>
          <Button variant="contained" color="secondary">
            -15
          </Button>
          <Button variant="contained" color="secondary">
            +15
          </Button>
        </Box> */}
      </Box>
    </Box>
  );
};

export default ReduxLesson;
