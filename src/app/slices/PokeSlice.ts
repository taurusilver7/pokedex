import { createSlice } from "@reduxjs/toolkit";
import { PokemonTypeInitialState } from "../../utils/Types";
import { getInitalData } from "../reducers/getInitialData";
import { getPokemonData } from "../reducers/getPokemonData";

const initialState: PokemonTypeInitialState = {
	allPokemon: undefined,
	randomPokemon: undefined,
};

export const PokeSlice = createSlice({
	name: "pokemon",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getInitalData.fulfilled, (state, action) => {
			state.allPokemon = action.payload;
		});
		builder.addCase(getPokemonData.fulfilled, (state, action) => {state.randomPokemon = action.payload})
	},
});

export const {} = PokeSlice.actions;
 