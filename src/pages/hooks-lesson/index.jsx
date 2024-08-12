import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getToDos } from "../../api/jsonPH";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCheckedList,
  removeItemFromCheckedList,
  setToDosData,
} from "../../store/todosSlice";
import { useCurrentDate } from "./useCurrentDate";

const HooksLesson = () => {
  // const [currentData, setCurrentData] = useState([]);
  const currentData = useSelector((state) => state.todosSlice.data);
  const dispatch = useDispatch();
  const date = useCurrentDate();

  const fetchData = async () => {
    const data = await getToDos();
    // setCurrentData(data);
    dispatch(setToDosData(data));
  };

  useEffect(() => {
    fetchData();
    // (async () => {
    //   const data = await getToDos();
    //   setCurrentData(data);
    // })();
  }, []);

  // console.log("render");

  // useEffect(() => {
  //   console.log(date);
  // }, [date]);

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <PageTitle />
      <Box>
        <Typography>{date}</Typography>
      </Box>
      <Box width={"100%"} maxWidth={600}>
        {currentData.map((item) => (
          <CustomCheckbox key={item.id} item={item} />
        ))}
      </Box>
    </Box>
  );
};

const PageTitle = () => {
  const checkedList = useSelector((state) => state.todosSlice.checkedList);
  return (
    <Box>
      <Typography>Выбрано элементов: {checkedList.length}</Typography>
    </Box>
  );
};

const CustomCheckbox = ({ item }) => {
  const dispatch = useDispatch();
  const checkedList = useSelector((state) => state.todosSlice.checkedList);
  const isCheckedById = (id) => {
    return !!checkedList.find((item) => item.id === id);
  };
  const onCheckBoxChange = (e, item) => {
    if (e.target.checked) dispatch(addItemToCheckedList(item));
    else dispatch(removeItemFromCheckedList(item));
  };
  return (
    <Box>
      <FormControlLabel
        control={
          <Checkbox
            checked={isCheckedById(item.id)}
            onChange={(e) => onCheckBoxChange(e, item)}
            color="secondary"
          />
        }
        label={item.title}
      />
      {/* <Typography>{item.title}</Typography> */}
    </Box>
  );
};

export default HooksLesson;
