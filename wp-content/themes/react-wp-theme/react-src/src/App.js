import React from "react";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";

import SiteTitle from "./components/SiteTitle";

const client = new ApolloClient({
  uri: "http://localhost/react-wp/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <>
        <SiteTitle />
      </>
    </ApolloHooksProvider>
  </ApolloProvider>
);

export default App;
