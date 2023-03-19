// Static data for the pokemon api calls

export const pokeAPI = process.env.REACT_APP_SERVER_URL;
export const pokemonRoute = `${pokeAPI}/pokemon?limit=2000`;
export const pokeRoute = `${pokeAPI}/pokemon`;
export const pokemonSpeciesRoute = `${pokeAPI}/pokemon-species`;

export const pokemonTabs = {
	description: "description",
	evolution: "evolution",
	locations: "locations",
	moves: "moves",
};
