import Head from 'next/head';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import Header from '../components/Header';
import Search from '../components/Search';
import CharGrid from '../components/CharGrid';

export default function Home() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [noMatches, setNoMatches] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://breakingbadapi.com/api/characters?name=${query}`
      );
      setItems(result.data);
      setIsLoading(false);

      if (result.data.length === 0) setNoMatches(true);
      else setNoMatches(false);
    };
    fetchItems();
  }, [query]);

  return (
    <>
      <Head>
        <title>Breaking Bad wiki</title>
      </Head>
      <AnimatePresence>
        <Header key="header" />
        <Search key="search" getQuery={(qValue) => setQuery(qValue)} />
        <CharGrid
          key="grid"
          items={items}
          isLoading={isLoading}
          noMatches={noMatches}
        />
      </AnimatePresence>
    </>
  );
}
