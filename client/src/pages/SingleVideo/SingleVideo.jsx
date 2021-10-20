import React from "react";
import { useLocation, Redirect } from "react-router-dom";
import { motion } from "framer-motion";
import { SingleVideoComp } from "../../components/SingleVideoComp/SingleVideoComp";

export const SingleVideo = () => {
  let location = useLocation();
  const movie = location.movie;
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0 }}
      >
        {!location.movie ? (
          <Redirect to="/" />
        ) : (
          <SingleVideoComp movie={movie} />
        )}
      </motion.div>
    </>
  );
};
