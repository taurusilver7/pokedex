# Pokedex

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) TS template.

The original [template](https://react-redux.js.org/introduction/getting-started) for creating a model of react-redux-typescript application.

## Available Scripts

```bash
npx crete-react-app <app_name> --template redux-typescript
# and
yarn add <packages>
#and
yarn start (start the app in development server)
```

## Build

Scaffold a starter project from the available script with necessary templates and refactor the code-base to its barebones.

Add /components, /pages, /scss, /utils & /section directories to the source directory to better navigate the application with best practices.

Create the pages necessary to navigate the application and initiate the required routes in the App component. The application pages include a Search, Pokemon, MyList, About & Compare pages.

Create & style a higher-order wrapper component `Background` for application background layout. Style the blurred background in `index.scss`

Organize the /scss directory with /base, /components, /pages, /sections, /utils directories to separate the component stylings from the sections.., Import all to the main /scss/index.scss

Create a partial `_background.scss` in /scss/background to style the Background component.

Create a `_base.scss` in /scss/base to set up the default base styling for the application. (margin, box-style..,)

Add [fonts](https://fonts.google.com/specimen/Raleway?query=ral) styling to the application from google-fonts

Style the Navbar & Footer after setting the base format for the App page (navbar, wrapper, footer) in \_app.scss.

Initiate the react-router navigation, and assign the paths for pages & navigation re-routes.

Convert the Wrapper section to a higher-order component such that the layout & styles of the wrapper surrounds the pages.

To populate the pages with the api data, setup a redux toolkit, to arrange a global store to pluck the information from, disregarding the component position, heirarchy, and order.

Create two redux slices in /app directory (AppSlice & PokemonSlice). A slice decouples the response data into required chunks of objects of same category for extensive usage.

Pull the required pokemon data from [pokeapi](https://pokeapi.co/), an easily accessible, modern restful API service.

## Search

Create a reducer function that uses the createAsyncThunk to fetch the initial response data from the API.

The useAppSelector() hook is for getting the state data from the store while the useAppDispatch() hook is for calling the reducer function to perform actions on the state data.

Get initialPokemon data & a random 20 Pokemon data for the search page, with useEffect & redux hooks.

Create extraReducers() to update the state values with the action payload after the request fulfilment status.

Create a Pokemon card component to render the search results or random pokemon results in the search page. Add the compare & list buttons based on the pokemon-list page data availability. Render the buttons with conditional render.

Based on the page location (with useLocation() hook), render the corresponding buttons & their respective functions in a card.

Create a custom search function that takes in the input changes from the input element, and requests the API for response to populate in CardGrid.

But the rapid change events from input element will increase the API call rate & eat up one's reserves with a few searches. Create a debounce utility function to reduce the number of api calls from the search page.

### Compare

Add the variable `compareQueue` to the intialState in PokeSlice & add the corresponding interface in the Types.

Create reducer functions `addToCompare` & `removeFromCompare` to add/remove pokemon to compare page. Check if there are pokemon in the compare to avoid adding it multiple times. Condition the addition with element index from the initial State compareQueue array.

Dispatch the actions `addToCompare` in Search page on pokemon card Compare button click-event.

Setup the Toast notification in AppSlice reducer actions (setToast & clearToast) & add a toast when a pokemon is added to compare from Search Page.

Populate the compare page with a container to add pokemon to compare at its initial state. If a pokemon is already added to compareQueue global state, replace the blank container with the pokemon data.

Populate the compare block with the pokemon stats & images. Create a stats array withe Sets to specially segragate the different stats in a pokemon object.

Create the action buttons that navigate to different pages in the application or perform CRUD operation on the pokemon in an accound.

## List

To add a compared pokemon or search result pokemon to the personalized to list, setup a storage in firebase.

Create a project & set up the real-time database & google-authentication to the project before integrating it to the application.

The List page has either the list of the pokemon a user has added, or the login page, if the user was not authenticated yet.

Add a global state `userInfo` in the AppSlice, and create a reducer function to set the user status & email authentication.

Create a reducer function `addPokemonToList` with the props taking interface type `pokemonStatType`.

Add the pokeman stats (id, name, types) to the pokemonRefList in firebase under the user email account. Dispatch a toast notification stating the addition or already existing status based on the collection data.

Add the reducer function `addPokemonToList` to the CardGrid (FaPlus) event & compare `add` event.

To make the auth-state unfettered with refreshes, add an authStateChange event to update the userInfo with the user credentials.

Create a new reducer `getUserPokemon`to get data from the database & update the global state userPokemon to populate them in the List page. dispatch the getUserPokemon reducer from the List page to get the lastest pokemon list for the user.

## Pokemon

Start the pokemon page with a dependency. Add [extract-colors](https://www.npmjs.com/package/extract-colors) & customize the extract options.

Create a function `getPokemonInfo` to populate the pokemon information from different api-requests.

Create a image element & set its source to the id value from params. The params value is obtained from the events in other pages that led to the pokemon page.

Create a function to extract the most dominant color from a pokemon image & assign the color to a sass variable to apply it at multiple points.

Create a function to get the evolution_details of a pokemon using useCallback() hook to loop over a data multiple times.

Get the pokemon abilities & moves from the api-route. Get a speices route & its evolution_chains from another api_route.

get the location_encounters, and stats from the other api_routes. Dispatch the details to setCurrentPokemon global variable from pokemonSlice.

The Description page has Info & Pokemon container components. The container has the image element & the circular designs around it. The info component has 4 blocks with each on the corner of the page with absolute positioning & custom styled corresponding to the pokemon dominating color.

Create a statsArray for the pokemon for its stats & type from the hard-coded typeArray, and populate the stats in the Info Component. Style the description page for various breakpoints.

The Evolution page has the pokemon evolution stages. The location has the location_capture_ares, & the moves tab has the pokemon moves & abilities populated.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
