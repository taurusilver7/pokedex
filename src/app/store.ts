import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { AppSlice } from "./slices/AppSlice";
import { PokeSlice } from "./slices/PokeSlice";

export const store = configureStore({
	reducer: {
		app: AppSlice.reducer,
		pokemon: PokeSlice.reducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
