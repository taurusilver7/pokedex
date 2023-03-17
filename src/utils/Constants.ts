// Static data for the pokemon api calls

export const pokeAPI = process.env.REACT_APP_SERVER_URL;
export const pokemonRoute = `${pokeAPI}/pokemon?limit=5000`;

export const pokemonTabs = {
	description: "description",
	evolution: "evolution",
	locations: "locations",
	moves: "moves",
};
