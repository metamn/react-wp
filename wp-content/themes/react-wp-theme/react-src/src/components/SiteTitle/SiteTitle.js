import React from "react";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "./../../environment";

const SiteTitle = () => {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query SiteTitleQuery {
          generalSettings {
            title
          }
        }
      `}
      variables={{}}
      render={({ error, props }) => {
        if (error) {
          return <div>Error!</div>;
        }
        if (!props) {
          return <div>Loading...</div>;
        }
        return <h1>{props.generalSettings.title}</h1>;
      }}
    />
  );
};

export default SiteTitle;
