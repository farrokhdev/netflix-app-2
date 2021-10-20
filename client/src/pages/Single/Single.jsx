import React from "react";
import { useLocation, Redirect } from "react-router-dom";
import { SingleComp } from "../../components/SingleComp/SingleComp";
import { motion } from "framer-motion";

export const Single = () => {
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
        {!location.movie ? <Redirect to="/" /> : <SingleComp movie={movie} />}
      </motion.div>
    </>
  );
};
