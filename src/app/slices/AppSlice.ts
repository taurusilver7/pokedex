import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { pokemonTabs } from "../../utils/Constants";
import { AppInitialStateType } from "../../utils/Types";

const initialState: AppInitialStateType = {
	toasts: [],
	userInfo: undefined,
	isLoading: true,
	currentPokemonTab: pokemonTabs.description,
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
		setUserStatus: (
			state,
			action: PayloadAction<{ email: string } | undefined>
		) => {
			state.userInfo = action.payload;
		},
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
		setPokemonTab: (state, action) => {
			state.currentPokemonTab = action.payload;
		},
	},
});

export const {
	setToast,
	clearToast,
	setLoading,
	setUserStatus,
	setPokemonTab,
} = AppSlice.actions;
