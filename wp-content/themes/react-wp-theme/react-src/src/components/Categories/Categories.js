import React from "react";
import gql from "graphql-tag";
import useQuery from "./../../hooks";

const query = gql`
  query Categories {
    categories {
      edges {
        node {
          id
          categoryId
          name
        }
      }
    }
  }
`;

const markup = data => {
  const items = data.categories.edges.map(edge => (
    <li key={edge.node.id}>{edge.node.name}</li>
  ));
  return <ul>{items}</ul>;
};

const Categories = () => {
  return useQuery(query, markup);
};

export default Categories;
