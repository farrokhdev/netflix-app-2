import React, { useEffect } from "react";
import { List } from "./List/List";
import { HomeListsSec } from "./StyleHomeLists";
import { useHomeContext } from "../../context/HomeContext/HomeContext";

export const HomeLists = ({ lists, type, loading }) => {
  // const { path } = useHomeContext();

  return (
    <>
      <HomeListsSec>
        {!loading ? (
          <>
            {lists.map((list, indx) => (
              <List key={indx} list={list} type={type} loading={loading} />
            ))}
          </>
        ) : (
          <h1>Loading ...</h1>
        )}
      </HomeListsSec>
    </>
  );
};
