import React, { useContext, useEffect, useMemo, useState } from "react";
import { axiosInstance } from "config";

export const HomeContext = React.createContext();
export const HomeProvider = ({ children }) => {
  const months = useMemo(
    () => [
      "Jan",
      "Febr",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  // user Statics
  const [allMovies, setallMovies] = useState([]);
  const [userMonthly, setUserMonthly] = useState([]);
  const [userDaily, setUserDaily] = useState([]);
  const [userYearly, setUserYealy] = useState([]);

  // API's
  // GETTING userStatics FROM API
  useEffect(() => {
    const getUserMonthly = async () => {
      try {
        const res = await axiosInstance.get("users/stats/month", {
          headers: {
            token:
              "barear " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        // console.log(res.data);
        const states = res.data.sort((a, b) => a - b);
        res.data.map((item) => {
          setUserMonthly((prev) => [
            ...prev,
            { name: months[item._id - 1], userPerMonth: item.total },
          ]);
        });
      } catch (err) {
        console.log(err);
      }
    };
    getUserMonthly();
  }, [months]);
  useEffect(() => {
    const getUserDaily = async () => {
      try {
        const res = await axiosInstance.get("users/stats/today", {
          headers: {
            token:
              "barear " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });

        setUserDaily(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUserDaily();
  }, []);
  useEffect(() => {
    const getUserYearly = async () => {
      try {
        const res = await axiosInstance.get("users/stats/year", {
          headers: {
            token:
              "barear " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });

        setUserYealy(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUserYearly();
  }, []);

  // get all movies for create list
  useEffect(async () => {
    try {
      const res = await axiosInstance.get("movie/all", {
        headers: {
          token:
            "barear " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      setallMovies(res.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <HomeContext.Provider
      value={{ allMovies, userMonthly, userDaily, userYearly }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export const useHomeContext = () => {
  return useContext(HomeContext);
};
