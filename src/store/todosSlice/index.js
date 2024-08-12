import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  checkedList: [],
};

const todosSlice = createSlice({
  name: "todosSlice",
  initialState,
  reducers: {
    setToDosData(state, { payload: newData }) {
      state.data = newData;
    },
    addItemToCheckedList(state, { payload: item }) {
      state.checkedList.push(item);
    },
    removeItemFromCheckedList(state, { payload: item }) {
      state.checkedList = state.checkedList.filter(
        (checkedItem) => checkedItem.id !== item.id
      );
    },
  },
});

export default todosSlice.reducer;

export const { setToDosData, addItemToCheckedList, removeItemFromCheckedList } =
  todosSlice.actions;
