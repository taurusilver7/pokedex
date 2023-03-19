import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getPokemonData } from "../../app/reducers/getPokemonData";
import { CardGrid, Loader } from "../../components";
import { genericPokemonType } from "../../utils/Types";

const Evolution = () => {
	const [isLoaded, setIsLoaded] = useState(false);
	const dispatch = useAppDispatch();
	const { currentPokemon, randomPokemon } = useAppSelector(
		({ pokemon }) => pokemon
	);

	// console.log("randomPokemon", randomPokemon);

	useEffect(() => {
		const fetchData = async () => {
			const pokemons: genericPokemonType[] = currentPokemon!.evolution.map(
				({ pokemon }: { pokemon: genericPokemonType }) => pokemon
			);
			await dispatch(getPokemonData(pokemons));
			setIsLoaded(true);
		};
		fetchData();
	}, [dispatch, currentPokemon]);

	return (
		<div className="page">
			{isLoaded ? <CardGrid pokemons={randomPokemon!} /> : <Loader />}
		</div>
	);
};

export default Evolution;
