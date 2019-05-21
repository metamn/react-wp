import React from "react";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import SiteTitle from "./components/SiteTitle";

const client = new ApolloClient({
  uri: "http://localhost/react-wp/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <>
      <SiteTitle />
    </>
  </ApolloProvider>
);

export default App;
