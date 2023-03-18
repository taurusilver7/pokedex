// Type interface for the api responses.

// Type for AppSlice Initial State Values
export interface AppInitialStateType {
	toasts: string[];
	userInfo: undefined | { email: string };
	isLoading: boolean;
	currentPokemonTab: string;
}

// Type for the PokemonSlice Initial State Values.
export interface PokemonInitialStateType {
	allPokemon: undefined | genericPokemonType[];
	randomPokemon: generatedPokemonType[] | undefined;
	compareQueue: generatedPokemonType[];
	userPokemons: userPokemonsType[];
	currentPokemon: currentPokemonType | undefined;
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

// Current Pokemon Interface type
export interface currentPokemonType {
	id: number;
	name: string;
	types: pokemonInterfaceType[];
	images: string;
	stats: pokemonStatsType[];
	encounters: string[];
	evolutionLevel: number;
	evolution: { level: number; pokemon: { name: string; url: string } }[];
	pokemonAbilities: { abilities: string[]; moves: string[] };
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

export interface userPokemonsType extends generatedPokemonType {
	firebaseId?: string;
}

export interface pokemonStatsType {
	name: string;
	value: string;
}

export type pokemonStatType =
	| "vulnerable"
	| "weakness"
	| "strength"
	| "resistance";

export type pokemonElementType =
	| "bug"
	| "dark"
	| "dragon"
	| "electric"
	| "fairy"
	| "fighting"
	| "fire"
	| "flying"
	| "ghost"
	| "grass"
	| "ground"
	| "ice"
	| "normal"
	| "poison"
	| "psychic"
	| "rock"
	| "steel"
	| "water";
