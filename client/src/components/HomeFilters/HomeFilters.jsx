import React, { useRef, useState, useEffect } from "react";
import { FiltersSec, GenresGroup } from "./StyleHomeFilters";
import { Link, useLocation } from "react-router-dom";
// import { colors } from "../../Variables";
// import { useHomeContext } from "../../context/HomeContext/HomeContext";

export const HomeFilters = ({ listGnres, setGenre, type }) => {
  const singleGenresRef = useRef([]);
  singleGenresRef.current = [];

  const addToRefs = (el) => {
    if (el && !singleGenresRef.current.includes(el)) {
      singleGenresRef.current.push(el);
    }
  };

  // const [isSelected, setIsSelected] = useState(false);
  const clickHandler = (e) => {
    console.log(singleGenresRef.current);
    e.preventDefault();
    const content = e.target.textContent;
    singleGenresRef.current.map((gnr) => {
      gnr.className = "";
      if (gnr.textContent === content) {
        gnr.className = "red";
      }
    });
    setGenre(content);
    if (content === "all") {
      setGenre("");
    }
  };

  return (
    <>
      {type && (
        <FiltersSec>
          <h3>{type} genres</h3>
          <GenresGroup>
            {listGnres.map((gnre, indx) => (
              <button
                className={gnre === "all" && "red"}
                onClick={(e) => clickHandler(e)}
                key={indx}
                ref={addToRefs}
              >
                {gnre}
              </button>
            ))}
          </GenresGroup>
        </FiltersSec>
      )}
    </>
  );
};
