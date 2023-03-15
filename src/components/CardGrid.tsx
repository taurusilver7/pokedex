import React from "react";

const CardGrid = ({ pokemons }: any) => {
	return (
		<div className="card-grid-container">
			<div className="card-grid">
				{pokemons &&
					pokemons.length > 0 &&
					pokemons?.map((data: any) => (
						<div key={data.id} className="card">
							Hello!!
						</div>
					))}
			</div>
			
		</div>
	);
};

export default CardGrid;
