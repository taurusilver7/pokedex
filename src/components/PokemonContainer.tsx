import React from "react";
import pikachu from "../assets/pikachu.png";

const PokemonContainer = ({ image }: { image: string }) => {
	return (
		<>
			<div className="circle-container">
				<div className="outer-circle">
					<div className="inner-circle">
						<img className="inneer-circle-pokemon" src={image} alt="pokemon" />
					</div>

					<div className="lines">
						<div className="line line-1"></div>
						<div className="line line-2"></div>
					</div>
				</div>
			</div>

			{/* <div className="circle-container circle-container-2">
				<div className="outer-circle">
					<div className="inner-circle">
						<img src={pikachu} alt="" />
					</div>
					<div className="lines">
						<div className="line line-1"></div>
						<div className="line line-2"></div>
					</div>
				</div>
			</div> */}
		</>
	);
};

export default PokemonContainer;
