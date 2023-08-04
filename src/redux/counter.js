import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dltID: null,
  custData: [],
  showCustList: true,
  isUpdate: false,
  updateID: null,
  editCustObj: null,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setDltId: (state, action) => {
      state.dltID = action.payload;
    },
    setCustData: (state, action) => {
      state.custData = action.payload;
    },
    setShowCustList: (state, action) => {
      state.showCustList = action.payload;
    },
    setIsUpdate: (state, action) => {
      state.isUpdate = action.payload;
    },
    setUpdateID: (state, action) => {
      state.updateID = action.payload;
    },
    setEditCustObj: (state, action) => {
      state.editCustObj = action.payload;
    },
    appendCustData: (state, action) => {
      state.custData = [...state.custData, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setDltId,
  appendCustData,
  setCustData,
  setShowCustList,
  setIsUpdate,
  setEditCustObj,
  setUpdateID,
} = counterSlice.actions;

export default counterSlice.reducer;
