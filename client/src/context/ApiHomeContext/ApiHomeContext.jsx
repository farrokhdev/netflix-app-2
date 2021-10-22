import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export const ApiHomeContext = React.createContext();

const movieUrl = "https://imdb-api.com/en/API/Top250Movies/k_fpg7d5gg";
const seriesUrl = "https://imdb-api.com/en/API/Top250TVs/k_fpg7d5gg";
console.log(movieUrl);

export const ApiHomeProvider = ({ children }) => {
  const [movies250, setMovies250] = useState([]);
  const apiLocaton = useLocation();
  const apiPath = apiLocaton.pathname.split("/")[1];

  const fetchMovies = async () => {
    if (apiPath === "movies") {
      try {
        await axios.get(movieUrl).then((res) => {
          const movies = res.data.items;
          // console.log(movies);
          setMovies250(movies);
        });
      } catch (err) {
        console.log(err);
      }
    }
    if (apiPath === "series") {
      try {
        await axios.get(seriesUrl).then((res) => {
          const series = res.data.items;
          // console.log(movies);
          setMovies250(series);
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      return;
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [apiPath]);

  console.log(apiPath);

  return (
    <ApiHomeContext.Provider value={{ movies250 }}>
      {children}
    </ApiHomeContext.Provider>
  );
};

export const useApiHomeContext = () => {
  return useContext(ApiHomeContext);
};
