import { createSlice } from "@reduxjs/toolkit";
import { AppInitialStateType } from "../../utils/Types";

const initialState: AppInitialStateType = {
	toasts: [],
};

export const AppSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		setToast: (state, action) => {
			const toasts = [...state.toasts];
			toasts.push(action.payload);
			state.toasts = toasts;
		},
		clearToast: (state) => {
			state.toasts = [];
		},
	},
});

export const { setToast, clearToast } = AppSlice.actions;
