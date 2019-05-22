import React from "react";

import ApolloClient from "apollo-boost";
// TODO: Check why this double embedding is necessary ...
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";

import SiteTitle from "./components/SiteTitle";
import SiteDescription from "./components/SiteDescription";
import Categories from "./components/Categories";

const client = new ApolloClient({
  uri: "http://localhost/react-wp/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <>
        <SiteTitle />
        <SiteDescription />
        <Categories />
      </>
    </ApolloHooksProvider>
  </ApolloProvider>
);

export default App;
