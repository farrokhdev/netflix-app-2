import { HomeHeroApi } from "../../components";
import { HomeListsApi } from "../../components/HomeListsApi/HomeListsApi";
import { motion } from "framer-motion";

export const HomeApi = ({ type }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <HomeHeroApi type={type} />
        <HomeListsApi type={type} />
      </motion.div>
    </>
  );
};
