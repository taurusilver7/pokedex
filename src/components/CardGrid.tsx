import { pokemonInterfaceType, userPokemonType } from "../utils/Types";

const CardGrid = ({ pokemons }: { pokemons: userPokemonType[] }) => {
	return (
		<div className="card-grid-container">
			<div className="card-grid">
				{pokemons &&
					pokemons.length > 0 &&
					pokemons?.map((data: userPokemonType) => (
						<div key={data.id} className="card">
							<div className="card-list"></div>
							<div className="card-compare"></div>
							<h3 className="card-title">{data.name}</h3>
							<img
								src={data.image}
								alt={data.name}
								loading='lazy'
								className="card-image"
							/>

							{/* Pokemon-type */}
							<div className="card-types">
								{data.types.map(
									(type: pokemonInterfaceType, index: number) => {
										const keys = Object.keys(type);
										return (
											<div className="card-types_type" key={index}>
												<img
													className="card-types_image"
													src={type[keys[0]].image}
													alt="type"
													loading="lazy"
												/>
												<h6 className="card-types_text">
													{keys[0]}
												</h6>
											</div>
										);
									}
								)}
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default CardGrid;
