import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const productManageThunk = createAsyncThunk(
  "/managerInfo/productManageThunk",
  async (num) => {
    const { data } = await axios.post(
      "http://localhost:8080/api/manager/productManage",
      {
        number: num,
      }
    );

    return data;
  }
);

// 우선순위 - > 초기값 설정 //

const productManage = createSlice({
  name: "productManageInfo",
  initialState: [
    {
      brand: 1,
      category: 2,
      description: 3,
      id: 4,
      img: 5,
      name: 6,
      price: 7,
    },
  ],
  reducers: {
    setProduct: (state, action) => {
      const { type, payload } = action;
      state = [...state, ...payload];
    },
  },
  extraReducers: (bulider) => {
    bulider
      .addCase(productManageThunk.pending, (state, action) => {
        console.log("pending");
      })
      .addCase(productManageThunk.fulfilled, (state, action) => {
        const { type, payload } = action;
        console.log(payload);
        console.log("fulfilled");
        return payload;
      })
      .addCase(productManageThunk.rejected, (state, action) => {
        console.log("rejected");
      });
  },
});

export const action = productManage.actions;

export const reducer = productManage.reducer;
