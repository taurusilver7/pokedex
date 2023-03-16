// Type interface for the api responses.

// Type for AppSlice Initial State Values
export interface AppInitialStateType {}

// Type for the PokemonSlice Initial State Values.
export interface PokemonInitialStateType {
	allPokemon: undefined | genericPokemonType[];
	randomPokemon: undefined | generatedPokemonType[];
	compareQueue: generatedPokemonType[];
}

// For generating random Pokemon results in the search page at render. Type for getPokemonData for random pokemon.

export interface genericPokemonType {
	name: string;
	url: string;
}

export interface generatedPokemonType {
	name: string;
	id: number;
	image: string;
	types: pokemonInterfaceType[];
}

// Pokemon interface type for transistion between generic & generated pokemon type.
export interface pokemonInterfaceType {
	[key: string]: {
		image: string;
		resistance: string[];
		strength: string[];
		weakness: string[];
		vulnerable: string[];
	};
}

export interface userPokemonType extends generatedPokemonType {
	firebaseId?: string;
}
