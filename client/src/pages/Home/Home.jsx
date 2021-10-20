import React, { useEffect, useState } from "react";
import { axiosInstance } from "config";
import { HomeHero } from "../../components";
import { HomeLists } from "../../components/HomeLists/HomeLists";
import { motion } from "framer-motion";
import { HomeFilters } from "../../components/HomeFilters/HomeFilters";

export const Home = ({ type }) => {
  const [loading, setLoading] = useState(false);
  const [lists, setLists] = useState([]);
  const [listGnres, setListGnres] = useState([]);
  const [genre, setGenre] = useState(null);
  const [randomMovie, setRandomMovie] = useState([]);
  // GETTING LISTS FROM API
  useEffect(() => {
    const getRandomLists = async () => {
      setLoading(true);
      try {
        const res = await axiosInstance.get(
          `list${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,
          {
            headers: {
              token:
                "barear " +
                JSON.parse(localStorage.getItem("user")).accessToken,
            },
          }
        );
        console.log(res);
        setLoading(false);
        setLists(res.data);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  // GETTING LISTS FROM API
  useEffect(() => {
    const getListGenres = async () => {
      try {
        const res = await axiosInstance.get(
          `list${type ? "?type=" + type : ""}`,
          {
            headers: {
              token:
                "barear " +
                JSON.parse(localStorage.getItem("user")).accessToken,
            },
          }
        );
        const data = res.data;
        let listGenres;
        listGenres = ["all", ...new Set(data.map((item) => item.genre))];
        // console.log(listGenres);
        setListGnres(listGenres);
      } catch (err) {
        console.log(err);
      }
    };
    getListGenres();
  }, [type]);

  // GETTING Random Movie FROM API
  const getRandomMovie = async () => {
    try {
      const res = await axiosInstance.get(
        `movie/random/${type ? "?type=" + type : ""}`,
        {
          headers: {
            token:
              "barear " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        }
      );
      setRandomMovie(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getRandomMovie();
  }, []);
  // console.log(lists);
  // console.log(movies);
  // console.log(randomMovie);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <HomeHero randomMovie={randomMovie} />
        <HomeFilters listGnres={listGnres} setGenre={setGenre} type={type} />
        <HomeLists lists={lists} type={type} loading={loading} />
      </motion.div>
    </>
  );
};
