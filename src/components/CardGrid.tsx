import { pokemonInterfaceType, userPokemonsType } from "../utils/Types";
import { IoGitCompare } from "react-icons/io5";
import { FaPlus, FaTrash } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { addToCompare } from "../app/slices/PokeSlice";
import { setToast } from "../app/slices/AppSlice";
import { addPokemonToList } from "../app/reducers/addPokemonToList";
import { removePokemonFromList } from "../app/reducers/removePokemonFromList";

const CardGrid = ({ pokemons }: { pokemons: userPokemonsType[] }) => {
	const location = useLocation();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const handleCompare = (data: userPokemonsType) => {
		dispatch(addToCompare(data));
		dispatch(setToast(`${data.name} has been added to compare !`));
	};

	return (
		<div className="card-grid-container">
			<div className="card-grid">
				{pokemons &&
					pokemons.length > 0 &&
					pokemons?.map((data: userPokemonsType) => (
						<div key={data.id} className="card">
							{/* Conditional Render buttons */}
							<div className="card-list">
								{location.pathname.includes("/pokemon") ? (
									<FaPlus
										className="plus"
										onClick={() => dispatch(addPokemonToList(data))}
									/>
								) : location.pathname.includes("/search") ? (
									<FaPlus
										className="plus"
										onClick={() => dispatch(addPokemonToList(data))}
									/>
								) : (
									<FaTrash
										onClick={async () => {
											await dispatch(
												removePokemonFromList({
													id: data.firebaseId!,
												})
											);
											dispatch(
												setToast(
													`${data.name} has been removed from collection`
												)
											);
										}}
										className="trash"
									/>
								)}
							</div>

							<div className="card-compare">
								<IoGitCompare onClick={() => handleCompare(data)} />
							</div>

							<h3 className="card-title">{data.name}</h3>
							<img
								src={data.image}
								alt={data.name}
								loading="lazy"
								className="card-image"
								onClick={() => navigate(`/pokemon/${data.id}`)}
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
