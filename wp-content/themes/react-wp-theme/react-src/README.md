# Apollo

## Gotchas

### Server URL

In `App.js` the GraphQL server URL must be changed before deployment

```Javascript
const client = new ApolloClient({
  uri: "http://localhost/react-wp/graphql"
});
```

## Install

- https://www.apollographql.com/docs/react/essentials/get-started
- Hooks: https://github.com/trojanowski/react-apollo-hooks
- Typescript (Apollo doesn't support Flow): https://www.apollographql.com/docs/react/recipes/static-typing

## Tutorial

- https://www.apollographql.com/docs/tutorial/client
