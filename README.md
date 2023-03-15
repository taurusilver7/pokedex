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

Create a reducer function that uses the createAsyncThunk to fetch the initial response data from the API.

The useAppSelector() hook is for getting the state data from the store while the useAppDispatch() hook is for calling the reducer function to perform actions on the state data.

Get initialPokemon data & a random 20 Pokemon data for the search page, with useEffect & redux hooks.

Create extraReducers() to perform the action after the request fulfilment status.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
