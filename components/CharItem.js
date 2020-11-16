import React from 'react';
import { motion } from 'framer-motion';

const CharItem = ({ item }) => {
  const itemVariant = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
    exit: {
      opacity: 0,
      y: 100,
    },
  };

  return (
    <motion.li
      key={item.char_id}
      className="card"
      variants={itemVariant}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.1 }}
    >
      <img className="card-img" src={item.img} alt={item.name} />
      <h3>{item.name}</h3>
      <motion.div
        className="card-info-panel"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        whileTap={{ opacity: 1 }}
      >
        <h3>{item.name}</h3>
        <strong>Nickname: </strong>
        <p>{item.nickname}</p>
        <strong>Actor: </strong>
        <p>{item.portrayed}</p>
        <strong>Status: </strong>
        <p>{item.status}</p>
      </motion.div>
    </motion.li>
  );
};

export default CharItem;
