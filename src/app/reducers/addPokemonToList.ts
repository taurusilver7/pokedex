import { createAsyncThunk } from "@reduxjs/toolkit";
import { addDoc } from "firebase/firestore";
import { pokemonListRef } from "../../utils/firebase";
import {
	pokemonInterfaceType,
	pokemonStatsType,
	userPokemonsType,
} from "../../utils/Types";
import { setToast } from "../slices/AppSlice";
import { RootState } from "../store";

export const addPokemonToList = createAsyncThunk(
	"/pokemon/addPokemon",
	async (
		pokemon: {
			id: number;
			name: string;
			types: pokemonInterfaceType[] | string[];
			stats?: pokemonStatsType[];
		},
		{ getState, dispatch }
	) => {
		try {
			const {
				app: { userInfo },
				pokemon: { userPokemons },
			} = getState() as RootState;

			if (!userInfo?.email) {
				return dispatch(
					setToast("Please login to add pokemon to collections.")
				);
			}

			const index = userPokemons.findIndex(
				(userPokemon: userPokemonsType) => {
					return userPokemon.name === pokemon.name;
				}
			);
			if (index === -1) {
				let types: string[] = [];
				if (!pokemon.stats) {
					pokemon.types.forEach((type: any) =>
						types.push(Object.keys(type).toString())
					);
				} else {
					types = pokemon.types as string[];
				}
				await addDoc(pokemonListRef, {
					pokemon: { id: pokemon.id, name: pokemon.name, types },
					email: userInfo.email,
				});
				// dispatch a getUserPokmeon reducer
				dispatch(setToast(`${pokemon.name} added to your collection`));
			} else {
				dispatch(
					setToast(`${pokemon.name} already a part of your collection`)
				);
			}
		} catch (error) {
			console.error({ error });
		}
	}
);
