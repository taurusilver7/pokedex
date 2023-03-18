// Remove a specific pokemon from an user list

import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteDoc, doc } from "firebase/firestore";
import { pokemonListRef } from "../../utils/firebase";

export const removePokemonFromList = createAsyncThunk(
	"pokemon/remove",
	async ({ id }: { id: string }) => {
		try {
			await deleteDoc(doc(pokemonListRef, id));
			return { id };
		} catch (error) {
			console.error({ error });
		}
	}
);
