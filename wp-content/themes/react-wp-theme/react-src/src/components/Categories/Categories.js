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
  const edges = data.categories.edges;
  return (
    <ul>
      {edges.map(node => (
        <li key={node.id}>
          {node.name}-{node.categoryId}
        </li>
      ))}
    </ul>
  );
};

const Categories = () => {
  return useQuery(query, markup);
};

export default Categories;
