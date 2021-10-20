import React from "react";
import { motion } from "framer-motion";
import { useLocation, Redirect } from "react-router-dom";
import { SingleInfoComp } from "../../components/SingleInfoComp/SingleInfoComp";

export const SingleInfo = () => {
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
          <SingleInfoComp movie={movie} />
        )}
      </motion.div>
    </>
  );
};
