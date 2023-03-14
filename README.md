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



## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
