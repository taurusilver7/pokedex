import React from "react";
import { useAppSelector } from "../../app/hooks";
import { Info, PokemonContainer } from "../../components";

const Description = () => {
	const pokemonData = useAppSelector(
		({ pokemon: { currentPokemon } }) => currentPokemon
	);
	return (
		<div className="description">
			{/* Pokemon Info */}
			<Info data={pokemonData} />
			{pokemonData && <PokemonContainer image={pokemonData.image} />}
		</div>
	);
};

export default Description;
