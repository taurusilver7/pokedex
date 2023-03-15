import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getInitalData } from "../app/reducers/getInitialData";
import { getPokemonData } from "../app/reducers/getPokemonData";
import { CardGrid } from "../components";
import { Wrapper } from "../sections";

const Search = () => {
	const dispatch = useAppDispatch();
	const { allPokemon, randomPokemon } = useAppSelector(({ pokemon }) => pokemon);

	// GET the initial reducer state values from the store
	useEffect(() => {
		dispatch(getInitalData());
	}, [dispatch]);

	// get random 20 Pokemon data for Search page
	useEffect(() => {
		if (allPokemon) {
			const clonedPokemon = [...allPokemon];
			const randomPokemonId = clonedPokemon
				.sort(() => Math.random() - Math.random())
				.slice(0, 20);
			// console.log(randomPokemonId);
			dispatch(getPokemonData(randomPokemonId))
		}
	}, [allPokemon, dispatch]);

	return <>
		<div className="search">
			<input type="text" name="" id="" />
			<CardGrid pokemons={randomPokemon} />
		</div>
	</>;
};

export default Wrapper(Search);
