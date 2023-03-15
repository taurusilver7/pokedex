//@ts-nocheck

const fetchImg = (context: string) => {
	const imgs = {};
	const cache = {};

	function importAll(inp) {
		inp.keys().forEach((key) => (cache[key] = inp(key)));
	}
	importAll(context);

	Object.entries(cache).forEach((module: string[]) => {
		let key = module[0].split("");
		key.splice(0, 2);
		key.splice(-4, 4);
		imgs[[key.join("")]] = module[1];
	});
	return imgs;
};

export const images = fetchImg(
	require.context("../assets/pokemons/shiny", false, /\.(png|jpe?g|svg)$/)
);
export const defaultImages = fetchImg(
	require.context("../assets/pokemons/default", false, /\.(png|jpe?g|svg)$/)
);
