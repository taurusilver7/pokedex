// Get User Liked Pokemon from the Database & populate them in the List page.

import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDocs, query, where } from "firebase/firestore";
import { defaultImages, images, pokemonTypes } from "../../utils";
import { pokemonListRef } from "../../utils/firebase";
import { userPokemonsType } from "../../utils/Types";
import { RootState } from "../store";

export const getUserPokemon = createAsyncThunk(
	"pokemon/userList",
	async (args, { getState }) => {
		try {
			// Get the user infor
			const {
				app: { userInfo },
			} = getState() as RootState;

			if (!userInfo?.email) {
				return;
			}
			const firestoreQuery = query(
				pokemonListRef,
				where("email", "==", userInfo?.email)
			);

			const fetchedPokemon = await getDocs(firestoreQuery);

			if (fetchedPokemon.docs.length) {
				const userPokemon: userPokemonsType[] = [];
				fetchedPokemon.forEach(async (pokemon) => {
					const pokemons = await pokemon.data().pokemon;
					// @ts-ignore
					let image = images[pokemons.id];
					if (!image) {
						// @ts-ignore
						image = defaultImages[pokemons.id];
					}
					const types = pokemons.types.map((name: string) => ({
                  // @ts-ignore
						[name]: pokemonTypes[name],
					}));

					userPokemon.push({
						...pokemons,
						firebaseId: pokemon.id,
						image,
						types,
					});
				});
				return userPokemon;
			}
			return [];
		} catch (error) {
			console.error({ error });
		}
	}
);
