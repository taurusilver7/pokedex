import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { addPokemonToList } from "../app/reducers/addPokemonToList";
import { removeFromCompare } from "../app/slices/PokeSlice";
import { pokemonTypes } from "../utils";
import {
	pokemonInterfaceType,
	pokemonStatType,
	userPokemonsType,
} from "../utils/Types";

const CompareContainer = ({
	pokemon = undefined,
	isEmpty = false,
}: {
	pokemon?: userPokemonsType;
	isEmpty?: boolean;
}) => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const createStatsArray = (
		types: pokemonInterfaceType[],
		statType: pokemonStatType
	) => {
		const statsArray: { name: string; image: string }[] = [];
		const statSet = new Set<string>();
		types.forEach((type: pokemonInterfaceType) => {
			const key = Object.keys(type)[0];
			type[key][statType].forEach((stat: string) => {
				if (!statSet.has(stat)) {
					// @ts-ignore
					statsArray.push({ name: stat, image: pokemonTypes[stat].image });
				}
			});
		});
		return statsArray;
	};
	// console.log(isEmpty);
	const getStats = () => (
		<>
			<div className="pokemon-types">
				<h4 className="pokemon-type-title">Strength</h4>
				<div className="pokemon-type-icons">
					{createStatsArray(pokemon?.types!, "strength").map(
						(stat: { image: string }, index) => (
							<div key={index} className="pokemon-type">
								<img
									src={stat.image}
									alt=""
									className="pokemon-type-image"
								/>
							</div>
						)
					)}
				</div>
			</div>
			<div className="pokemon-types">
				<h4 className="pokemon-type-title">Weakness</h4>
				<div className="pokemon-type-icons">
					{createStatsArray(pokemon?.types!, "weakness").map(
						(stat: { image: string }, index) => (
							<div key={index} className="pokemon-type">
								<img
									src={stat.image}
									alt=""
									className="pokemon-type-image"
								/>
							</div>
						)
					)}
				</div>
			</div>
			<div className="pokemon-types">
				<h4 className="pokemon-type-title">Resistance</h4>
				<div className="pokemon-type-icons">
					{createStatsArray(pokemon?.types!, "resistance").map(
						(stat: { image: string }, index) => (
							<div key={index} className="pokemon-type">
								<img
									src={stat.image}
									alt=""
									className="pokemon-type-image"
								/>
							</div>
						)
					)}
				</div>
			</div>
			<div className="pokemon-types">
				<h4 className="pokemon-type-title">Vulnerable</h4>
				<div className="pokemon-type-icons">
					{createStatsArray(pokemon?.types!, "vulnerable").map(
						(stat: { image: string }, index) => (
							<div key={index} className="pokemon-type">
								<img
									src={stat.image}
									alt=""
									className="pokemon-type-image"
								/>
							</div>
						)
					)}
				</div>
			</div>
		</>
	);
	return (
		<div className="compare-container">
			{isEmpty && (
				<div className="empty">
					<button onClick={() => navigate("/search")}>
						<FaPlus />
					</button>
					<h3>Add Pokemon to compare</h3>
				</div>
			)}

			{/* Pokemon compare Container */}
			{pokemon && (
				<div className="compare-element">
					<div className="compare-info">
						<div className="compare-details">
							<h3>{pokemon?.name}</h3>
							<img
								src={pokemon?.image}
								alt={pokemon?.name}
								className="compare-image"
							/>
						</div>

						{/* pokemon attributes container */}
						<div className="pokemon-types-container">
							<div className="pokemon-types">
								<h4 className="pokemon-type-title">type</h4>
								<div className="pokemon-type-icons">
									{pokemon?.types.map(
										(type: pokemonInterfaceType, index: number) => {
											const keys = Object.keys(type);
											return (
												<div key={index} className="pokemon-type">
													<img
														className="pokemon-type-image"
														src={type[keys[0]].image}
														alt="type"
													/>
												</div>
											);
										}
									)}
								</div>
							</div>

							{getStats()}
						</div>
					</div>

					{/* Compare buttons */}
					<div className="compare-action-buttons">
						<button
							onClick={() => dispatch(addPokemonToList(pokemon))}
							className="compare-btn"
						>
							Add
						</button>
						<button
							onClick={() => navigate(`/pokemon/${pokemon?.id}`)}
							className="compare-btn"
						>
							View
						</button>
						<button
							onClick={() =>
								dispatch(removeFromCompare({ id: pokemon?.id }))
							}
							className="compare-btn"
						>
							Remove
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default CompareContainer;
