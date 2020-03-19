# gemeente-boilerplate-frontend

This boilerplate serves as a base to get a project up and running real quick and to start developing features immediately.

## Development

First read [contributing](CONTRIBUTING.md)

### Setup

1. Install the latest (LTS) version of [Nodejs](https://nodejs.org/en/download/)
1. `git clone https://github.com/egemenuzunali/berichtgeving-frontend.git`
1. `npm install / yarn install`
1. `npm start / yarn start`

## Folder structure

It looks like this:

```
src/
    App/
    assets/
    components/
	lib/
		Mutations/
			signInMutation.js
		Queries/
			currentUserQuery.js
	pages/
		Home.js
		Login.js
		ProtectedPage.js
	Dockerfile
    index.js
```

### Components

The components folder includes the presentational components,
these can be reused in pages and other components.

### Pages

Pages are the container components,

### Lib

Things that are not a page or a component should probably go here.
It defines 'lib'.
For instance, Mutations, Queries and the gql client can be found in there .

### Rules

The following rules apply:

- wip
