import React from 'react';
import { motion } from 'framer-motion';
import CharItem from './CharItem';

const CharGrid = ({ items, isLoading, noMatches }) => {
  const listVariant = {
    initial: {
      opacity: 0,
      y: 0,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.04,
        staggerDirection: 1,
      },
    },
    exit: {
      opacity: 0,
    },
  };
  const statusVariant = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      y: 50,
      opacity: 0,
    },
  };

  return isLoading ? (
    <motion.h1 className="text-center">Getting data from server..</motion.h1>
  ) : noMatches ? (
    <motion.h1 className="text-center">No matches found</motion.h1>
  ) : (
    <main className="main-container">
      <motion.ul
        className="grid"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={listVariant}
      >
        {items.map((item) => (
          <CharItem key={item.char_id} item={item} />
        ))}
      </motion.ul>
    </main>
  );
};

export default CharGrid;
