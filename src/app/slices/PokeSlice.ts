import { createSlice } from "@reduxjs/toolkit";
import { PokemonTypeInitialState } from "../../utils/Types";

const initialState: PokemonTypeInitialState = {};

export const PokeSlice = createSlice({
	name: "pokemon",
	initialState,
	reducers: {},
});

export const {} = PokeSlice.actions;
