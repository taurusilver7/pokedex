// @ts-nocheck
import axios from "axios";
import {extractColors} from "extract-colors";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setPokemonTab } from "../app/slices/AppSlice";
import { setCurrentPokemon } from "../app/slices/PokeSlice";
import { Loader } from "../components";
import { Wrapper } from "../sections";
import { defaultImages, images } from "../utils";
import {
	pokemonSpeciesRoute,
	pokemonTabs,
	pokeRoute,
} from "../utils/Constants";
import CapableMoves from "./pokemon/CapableMoves";
import Description from "./pokemon/Description";
import Evolution from "./pokemon/Evolution";
import Locations from "./pokemon/Locations";

const Pokemon = () => {
	const params = useParams();
	const dispatch = useAppDispatch();
	const currentPokemon = useAppSelector(
		({ pokemon: { currentPokemon } }) => currentPokemon
	);
	const currentPokemonTab = useAppSelector(
		({ app: { currentPokemonTab } }) => currentPokemonTab
	);

	const [dataLoading, setDataLoading] = useState(true);

	useEffect(() => {
		dispatch(setPokemonTab(pokemonTabs.description));
	}, [dispatch]);

	const getRecursiveEvolution = useCallback(
		(evolutionChain, level, evolutionData) => {
			if (!evolutionChain.evolves_to.length) {
				return evolutionData.push({
					pokemon: {
						...evolutionData.species,
						url: evolutionChain.species.url.replace(
							"pokemon-species",
							"pokemon"
						),
					},
					level,
				});
			}

			evolutionData.push({
				pokemon: {
					...evolutionChain.species,
					url: evolutionChain.species.url.replace(
						"pokemon-species",
						"pokemon"
					),
				},
				level,
			});

			return getRecursiveEvolution(
				evolutionChain.evolves_to[0],
				level + 1,
				evolutionData
			);
		},
		[]
	);

	// A callback function to obtain evolution data of a pokemon
	const getEvolutionData = useCallback(
		(evolutioChain) => {
			const evolutionData = [];
			getRecursiveEvolution(evolutioChain, 1, evolutionData);
			return evolutionData;
		},
		[getRecursiveEvolution]
	);

	// Function to get pokemon data from the api
	const getPokemonInfo = useCallback(
		async (image) => {
			const { data } = await axios.get(`${pokeRoute}/${params.id}`);

			// Pokemon abilities from data
			const pokemonAbilities = {
				abilities: data.abilities.map(({ ability }) => ability.name),
				moves: data.moves.map(({ move }) => move.name),
			};

			// search_locations, sub-species, evolution-details
			const { data: dataEncounters } = await axios.get(
				data.location_area_encounters
			);

			const {
				data: {
					evolution_chain: { url: evolutionURL },
				},
			} = await axios.get(`${pokemonSpeciesRoute}/${data.id}`);
			const { data: evolutionData } = await axios.get(evolutionURL);

			const encounters = [];
			// A function to get evolution data from the evaluation_chain
			const evolution = getEvolutionData(evolutionData.chain);
			let evolutionLevel;

			evolutionLevel = evolution.find(
				({ pokemon }) => pokemon.name === data.name
			).level;

			dataEncounters.forEach((encounter) => {
				encounters.push(
					encounter.location_area.name.toUpperCase().split("-").join(" ")
				);
			});

			const stats = await data.stats.map(({ stat, base_stat }) => ({
				name: stat.name,
				value: base_stat,
			}));

			// dispatch the pokemon data to pokeSlice
			dispatch(
				setCurrentPokemon({
					id: data.id,
					name: data.name,
					types: data.types.map(({ type: { name } }) => name),
					image,
					stats,
					encounters,
					evolutionLevel,
					evolution,
					pokemonAbilities,
				})
			);
			setDataLoading(false);
		},
		[params.id, dispatch, getEvolutionData]
	);

	useEffect(() => {
		const imgElement = document.createElement("img");
		imgElement.src = images[params.id];

		// A extract-colors customized options property
		const options = {
			pixels: 10000,
			distance: 1,
			splitPower: 10,
			colorValidator: (red, green, blue, alpha = 255) => alpha > 250,
			saturationDistance: 0.2,
			lightnessDistance: 0.2,
			hueDistance: 0.083333333,
		};

		// A function to set the accent property color of the application
		const getColor = async () => {
			const color = await extractColors(imgElement.src, options);
			const root = document.documentElement;
			root.style.setProperty("--accent-color", color[0].hex.split('"')[0]);
		};
		getColor();

		let image = images[params.id];
		if (!image) {
			image = defaultImages[params.id];
		}

		getPokemonInfo(image);
	}, [params.id, getPokemonInfo]);

	return (
		<>
			{!dataLoading && currentPokemon ? (
				<>
					{currentPokemonTab === pokemonTabs.description && (
						<Description />
					)}
					{currentPokemonTab === pokemonTabs.evolution && <Evolution />}
					{currentPokemonTab === pokemonTabs.locations && <Locations />}
					{currentPokemonTab === pokemonTabs.moves && <CapableMoves />}
				</>
			) : (
				<Loader />
			)}
		</>
	);
};

export default Wrapper(Pokemon);
