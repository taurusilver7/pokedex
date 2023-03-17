import React from "react";
import { FaPlus } from "react-icons/fa";
import { pokemonInterfaceType, userPokemonType } from "../utils/Types";

const CompareContainer = ({
	pokemon = undefined,
	isEmpty = false,
}: {
	pokemon?: userPokemonType;
	isEmpty?: boolean;
}) => {
	// console.log(isEmpty);
	const getStats = () => {};
	return (
		<div className="compare-container">
			{isEmpty && (
				<div className="empty">
					<button>
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
									{pokemon?.types.map((type: pokemonInterfaceType) => {
										const keys = Object.keys(type);
										return (
											<div className="pokemon-type">
												<img className="pokemon-type-image" src={type[keys[0]].image} alt="type" />
											</div>
										);
									})}
								</div>
							</div>

							{/* {getStats()} */}
						</div>
					</div>

					{/* Compare buttons */}
					<div className="compare-action-buttons">
						<button className="compare-btn">Add</button>
						<button className="compare-btn">View</button>
						<button className="compare-btn">Remove</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default CompareContainer;
