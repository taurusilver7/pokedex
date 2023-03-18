import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getUserPokemon } from "../app/reducers/getUserPokemon";
import { CardGrid, Login } from "../components";
import { Wrapper } from "../sections";

const MyList = () => {
	const { userInfo } = useAppSelector(({ app }) => app);
	const { userPokemons } = useAppSelector(({ pokemon }) => pokemon);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getUserPokemon());
	}, [userInfo, dispatch]);

	// useEffect(() => {
	// 	console.log(userPokemons);
	// }, [userPokemons]);

	return (
		<div className="list">
			{/* Login component or Pokemon grid based on the uerInfo state value */}
			{userInfo ? <CardGrid pokemons={userPokemons} /> : <Login />}
		</div>
	);
};

export default Wrapper(MyList);
