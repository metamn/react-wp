import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_SITE_TITLE = gql`
  query siteTitle {
    generalSettings {
      title
    }
  }
`;

const SiteTitle = () => {
  return (
    <Query query={GET_SITE_TITLE}>
      {({ data, loading, error }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error</p>;

        return <h1>{data.generalSettings.title}</h1>;
      }}
    </Query>
  );
};

export default SiteTitle;
