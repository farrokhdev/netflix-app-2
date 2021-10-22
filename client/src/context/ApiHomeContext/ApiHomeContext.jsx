import React, { useContext, useEffect, useState } from "react";
import { axiosInstance } from "config";
import { useLocation } from "react-router-dom";

export const ApiHomeContext = React.createContext();

const movieUrl =
  "https://imdb-api.com/en/API/Top250Movies/pk_ym4fuc6c4u2mvc7fa";
const sieriesUrl =
  "https://imdb-api.com/en/API/Top250Movies/pk_ym4fuc6c4u2mvc7fa";
console.log(movieUrl);

export const ApiHomeProvider = ({ children }) => {
  const [movies250, setMovies250] = useState([]);
  const apiLocaton = useLocation();
  const apiPath = apiLocaton.pathname.split("/")[1];

  console.log(apiPath);

  const fetchMovies = async () => {
    if (apiPath === "movies") {
      try {
        await axiosInstance.get(movieUrl).then((res) => {
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
        await axiosInstance.get(sieriesUrl).then((res) => {
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
  }, []);
  return (
    <ApiHomeContext.Provider value={{ movies250 }}>
      {children}
    </ApiHomeContext.Provider>
  );
};

export const useApiHomeContext = () => {
  return useContext(ApiHomeContext);
};
