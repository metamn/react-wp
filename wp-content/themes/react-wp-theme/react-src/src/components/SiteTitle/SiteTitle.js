import React from "react";
import { graphql, QueryRenderer } from "react-relay";
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
        return <div>{props.generalSettings.title}</div>;
      }}
    />
  );
};

export default SiteTitle;
