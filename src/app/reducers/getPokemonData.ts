// Get random pokemon data from the api

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { defaultImages, images, pokemonTypes } from "../../utils";

import { generatedPokemonType, genericPokemonType } from "../../utils/Types";

export const getPokemonData = createAsyncThunk(
	"/pokemon/randomPokemon",
	async (pokemons: genericPokemonType[]) => {
		try {
			// Make API request
			const pokemonData: generatedPokemonType[] = [];
			for await (const pokemon of pokemons) {
				const {
					data,
				}: {
					data: { id: number; types: { type: generatedPokemonType }[] };
				} = await axios.get(pokemon.url);

				const types = data.types.map(
					({ type: { name } }: { type: { name: string } }) => ({
						// @ts-expect-error
						[name]: pokemonTypes[name],
					})
				);
				// @ts-expect-error
				let image: string = images[data.id];

				if (!image) {
					// @ts-expect-error
					image = defaultImages[data.id];
				}
				if (image) {
					pokemonData.push({
						name: pokemon.name,
						id: data.id,
						image,
						types,
					});
				}
			}
			// console.log(pokemonData)
			return pokemonData;
		} catch (error) {
			console.log(error);
		}
	}
);
