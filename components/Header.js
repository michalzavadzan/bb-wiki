import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <div className="header">
      <header className="header-container">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          exit={{ opacity: 0 }}
        >
          Breaking Bad wiki
        </motion.h1>
        <motion.h4
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          exit={{ opacity: 0 }}
        >
          made out of{' '}
          <a href="https://www.breakingbadapi.com/" target="_blank">
            API
          </a>{' '}
          on practice purposes
        </motion.h4>
      </header>
    </div>
  );
};

export default Header;
