import React from "react";
import { useAppSelector } from "../../app/hooks";

const CapableMoves = () => {
	const { currentPokemon } = useAppSelector(({ pokemon }) => pokemon);
	return (
		<div className="page capable-moves">
			<h1 className="capable-moves-title">Abilities</h1>
			<ul className="capable-moves-list ability">
				{currentPokemon?.pokemonAbilities.abilities.map(
					(ability: string) => (
						<li className="move" key={ability}>
							{ability}
						</li>
					)
				)}
			</ul>

			<h1 className="capable-moves-title">Moves</h1>
			<ul className="capable-moves-list">
				{currentPokemon?.pokemonAbilities.moves.map((ability: string) => (
					<li className="move" key={ability}>
						{ability}
					</li>
				))}
			</ul>
		</div>
	);
};

export default CapableMoves;
