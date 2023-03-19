import { useEffect } from "react";
import { useAppDispatch } from "../app/hooks";
import { addPokemonToList } from "../app/reducers/addPokemonToList";
import { currentPokemonType, pokemonStatsType } from "../utils/Types";

const Info = ({ data }: { data: currentPokemonType | undefined }) => {
	const dispatch = useAppDispatch();
	// console.log(data);

	useEffect(() => {
		const progressBar = document.querySelectorAll("progress");
		progressBar.forEach((bar) => {
			bar.style.width = "10rem";
		});
	}, []);

	return (
		<>
			<div className="details">
				<h1 className="name">{data?.name}</h1>
				<h3>Type: {data?.types.join(" - ")}</h3>
				<h3>Evolution: {data?.evolutionLevel}</h3>
				<button>See next evolution</button>
			</div>

			<div className="stats">
				<ul>
					{data?.stats.map((stat: pokemonStatsType) => (
						<li key={stat.name}>
							{stat.name}: {stat.value}
							<progress max={100} value={stat.value} />
						</li>
					))}
				</ul>
			</div>

			<div className="battle-stats">
				{
					<ul>
						<li>
							<span>Strengths: </span>
							<span></span>
						</li>
						<li>
							<span>Weakness: </span>
							<span></span>
						</li>
						<li>
							<span>Resistance: </span>
							<span></span>
						</li>
						<li>
							<span>Vulnerable: </span>
							<span></span>
						</li>
					</ul>
				}
				<button className="add-pokemon" onClick={() => dispatch(addPokemonToList(data!))}>
					Add Pokemon
				</button>
			</div>
		</>
	);
};

export default Info;
