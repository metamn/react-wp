import React from "react";
import gql from "graphql-tag";
import useQuery from "./../../hooks";

const query = gql`
  query siteTitle {
    generalSettings {
      title
    }
  }
`;

const markup = data => {
  const title = data.generalSettings.title;
  return <h1>{title}</h1>;
};

const SiteTitle = () => {
  return useQuery(query, markup);
};

export default SiteTitle;
