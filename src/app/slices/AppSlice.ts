import { createSlice } from "@reduxjs/toolkit";
import { AppInitialStateType } from "../../utils/Types";

const initialState: AppInitialStateType = {}

export const AppSlice = createSlice({
   name: 'app',
   initialState,
   reducers: {},
})

export const {} = AppSlice.actions;