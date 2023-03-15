// Get initial pokemon data from the api

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { pokemonRoute } from "../../utils/Constants";

export const getInitalData = createAsyncThunk(
	"/pokemon/initialData",
	async () => {
		try {
			// Make API request
			const { data } = await axios.get(pokemonRoute);
			console.log({ data });
			return data.results;
		} catch (error) {
			console.log(error);
		}
	}
);
