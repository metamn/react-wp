import React from "react";
import { useQuery as useQueryHook } from "react-apollo-hooks";

const useQuery = (query, markup) => {
  const { data, error, loading } = useQueryHook(query);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  //console.log("useQuery:" + JSON.stringify(data));

  return markup(data);
};

export default useQuery;
