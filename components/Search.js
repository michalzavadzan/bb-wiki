import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Search = ({ getQuery }) => {
  const [text, setText] = useState('');

  function onChange(qValue) {
    setText(qValue);
    getQuery(qValue);
  }

  return (
    <form className="search-form">
      <motion.input
        name="query"
        className="search-bar"
        placeholder="Search..."
        type="search"
        value={text}
        onChange={(e) => onChange(e.target.value)}
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 200, opacity: 0 }}
      />
    </form>
  );
};

export default Search;
