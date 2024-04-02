# React + TypeScript + Redux Toolkit + React Router + Antd

Explain the react component design with following frameworks:

- Antd

- Redux Toolkit

- React Router

- Tailwind

And with best practices

## Project Structure

`app/`

The `app/` directory contains the store.ts file, which is where the Redux Toolkit store is configured.

`features/`

The `features/` directory is where all of the features in the application are stored. Each feature should have its own directory, with a Slice file that configures the Redux Toolkit slice and a corresponding component file. Additionally, if a feature requires API calls, create an API file within the feature directory to keep related code organized.

`components/`

The `components/` directory contains all of the reusable components in the application. These components should be generic and not specific to any feature. It also includes a CommonComponent.js file that contains components used in multiple features.

`pages/`

The `pages/` directory contains all of the components that represent a page in the application, such as the homepage.

`hooks/`

The `hooks/` directory contains custom hooks that can be used throughout the application.

`utils/`

The `utils/` directory contains helper functions that can be used throughout the application.
