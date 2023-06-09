import { createSlice } from "@reduxjs/toolkit";
import {
	generatedPokemonType,
	PokemonInitialStateType,
} from "../../utils/Types";
import { getInitalData } from "../reducers/getInitialData";
import { getPokemonData } from "../reducers/getPokemonData";
import { getUserPokemon } from "../reducers/getUserPokemon";
import { removePokemonFromList } from "../reducers/removePokemonFromList";

const initialState: PokemonInitialStateType = {
	allPokemon: undefined,
	randomPokemon: undefined,
	compareQueue: [],
	userPokemons: [],
	currentPokemon: undefined,
};

export const PokeSlice = createSlice({
	name: "pokemon",
	initialState,
	reducers: {
		addToCompare: (state, action) => {
			// see if there pokemon inside the compare to avoid multiple additions.
			const index = state.compareQueue?.findIndex(
				(pokemon: generatedPokemonType) => pokemon.id === action.payload.id
			);
			if (index === -1) {
				if (state.compareQueue!.length === 2) {
					// if the compare has more than 2 values, pop the last one out
					state.compareQueue?.pop();
				}
				// add the pokemon as zeroth element if compare is empty
				state.compareQueue?.unshift(action.payload);
			}
		},
		removeFromCompare: (state, action) => {
			const index = state.compareQueue?.findIndex(
				(pokemon: generatedPokemonType) => pokemon.id === action.payload.id
			);
			const queue = [...state.compareQueue!];
			// Pull the index element from the array & reorder the array to compareQueue w/o index element.
			queue.splice(index, 1);
			state.compareQueue = queue;
		},
		setCurrentPokemon: (state, action) => {
			state.currentPokemon = action.payload;
		},
		resetRandomPokemon: (state) => {
			state.randomPokemon = undefined;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getInitalData.fulfilled, (state, action) => {
			state.allPokemon = action.payload;
		});
		builder.addCase(getPokemonData.fulfilled, (state, action) => {
			state.randomPokemon = action.payload;
		});
		builder.addCase(getUserPokemon.fulfilled, (state, action) => {
			state.userPokemons = action.payload!;
		});
		builder.addCase(removePokemonFromList.fulfilled, (state, action) => {
			const userPokemons = [...state.userPokemons];
			const index = userPokemons.findIndex(
				(pokemon) => pokemon.firebaseId === action.payload?.id
			);
			userPokemons.splice(index, 1);
			state.userPokemons = userPokemons;
		});
	},
});

export const {
	addToCompare,
	removeFromCompare,
	setCurrentPokemon,
	resetRandomPokemon,
} = PokeSlice.actions;
