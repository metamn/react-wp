import React from "react";
import { useQuery } from "react-apollo-hooks";
import gql from "graphql-tag";

const GET_SITE_TITLE = gql`
  query siteTitle {
    generalSettings {
      title
    }
  }
`;

const SiteTitle = () => {
  const { data, error, loading } = useQuery(GET_SITE_TITLE);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  return <h1>{data.generalSettings.title}</h1>;
};

export default SiteTitle;
