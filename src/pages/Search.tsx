import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getInitalData } from "../app/reducers/getInitialData";
import { getPokemonData } from "../app/reducers/getPokemonData";
import { CardGrid } from "../components";
import { Wrapper } from "../sections";
import { debounce } from "../utils/debounce";

const Search = () => {
	const dispatch = useAppDispatch();
	const { allPokemon, randomPokemon } = useAppSelector(
		({ pokemon }) => pokemon
	);

	const handleChange = debounce((value: string) => getPokemon(value), 3000);

	// Search function before debouncing
	const getPokemon = async (value: string) => {
		if (value.length) {
			const pokemons = allPokemon?.filter((pokemon) =>
				pokemon.name.includes(value.toLowerCase())
			);
			dispatch(getPokemonData(pokemons!));
		} else {
			const randomId = getRandomPokemonId();
			dispatch(getPokemonData(randomId));
		}
	};

	const getRandomPokemonId = () => {
		const clonedPokemon = [...(allPokemon as [])];
		const randomPokemonId = clonedPokemon
			.sort(() => Math.random() - Math.random())
			.slice(0, 21);
		return randomPokemonId;
	};

	// GET the initial reducer state values from the store
	useEffect(() => {
		dispatch(getInitalData());
	}, [dispatch]);

	// get random 20 Pokemon data for Search page
	useEffect(() => {
		if (allPokemon) {
			const randomId = getRandomPokemonId();
			// console.log(randomPokemonId);
			dispatch(getPokemonData(randomId));
		}
	}, [allPokemon, dispatch]);

	return (
		<>
			<div className="search">
				<input
					type="text"
					className="searchbar"
					placeholder="Search Pokemon..."
					onChange={(e) => handleChange(e.target.value)}
				/>
				<CardGrid pokemons={randomPokemon!} />
			</div>
		</>
	);
};

export default Wrapper(Search);
