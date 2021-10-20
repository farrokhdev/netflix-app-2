import React, { useContext, useEffect, useState } from "react";
import { axiosInstance } from "config";
export const HomeContext = React.createContext();

export const HomeProvider = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [allMovies, setAllMovies] = useState([]);

  // TOGGLE NAVBAR FROM NORMAL POSITION TO FIXEd
  useEffect(() => {
    window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    };
  }, []);

  // API's
  // GETTING Movies FROM API
  useEffect(() => {
    const getAllMovies = async () => {
      try {
        const res = await axiosInstance.get(`movie/all`, {
          headers: {
            token:
              "barear " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setAllMovies(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllMovies();
  }, []);
  console.log(allMovies);

  return (
    <HomeContext.Provider
      value={{
        isScrolled,
        allMovies,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export const useHomeContext = () => {
  return useContext(HomeContext);
};
