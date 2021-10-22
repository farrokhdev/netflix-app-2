import React, { useEffect } from "react";
import { List } from "./List/List";
import { HomeListsSec } from "./StyleHomeLists";

import { useApiHomeContext } from "../../context/ApiHomeContext/ApiHomeContext";

export const HomeListsApi = ({ type }) => {
  const { movies250 } = useApiHomeContext();

  return (
    <>
      {movies250 && (
        <HomeListsSec>
          <List movies250={movies250} type={type} />
        </HomeListsSec>
      )}
    </>
  );
};
