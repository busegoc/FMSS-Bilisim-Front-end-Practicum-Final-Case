import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useCallback } from 'react';
import coverImg from "../Image.json"

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const URL = "https://swapi.dev/api/starships/";
  const [searchTerm, setSearchTerm] = useState("");
  const [ships, setShips] = useState([]);
  const [originalShips, setOriginalShips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState("");
  const [images, setImages] = useState(coverImg);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);
  const [show, setShow] = useState(false);

  const fetchShips = useCallback(async () => {
    setLoading(true);
    let allStarships = [];
    let nextPage = URL;
    try {
      const response = await axios.get(URL);
      allStarships = response.data.results;
      nextPage = response.data.next;

      while (nextPage) {
        const response = await axios.get(nextPage);
        allStarships = [...allStarships, ...response.data.results];
        nextPage = response.data.next;
      }

      console.log(allStarships);
      setShips(allStarships);
      setOriginalShips(allStarships);

      if (allStarships.length >= 1) {
        setResultTitle("Starships List");
      } else {
        setResultTitle("No Search Result Found!");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [URL]);

  useEffect(() => {
    setImages(coverImg);
  }, []);

  
  useEffect(() => {
    fetchShips();
  }, [searchTerm, fetchShips]);

  const updateShips = useCallback(() => {
    const newShips = originalShips.slice(0, limit);
    setShips(newShips);
  }, [originalShips, limit]);

  
  const loadMore = () => {
    setLimit(limit + 8);
    setPage(page + 1);
  };

  useEffect(() => {
    updateShips();
  }, [limit, updateShips]);

  console.log(ships);

  return (
    <AppContext.Provider value={{
      loading,
      ships,
      images,
      setSearchTerm,
      resultTitle,
      setResultTitle,
      loadMore,
      page,
      show,
      setShow,
      originalShips,
      setShips
    }}>
      {children}
    </AppContext.Provider>
  )
}


export const useGlobalContext = () => {
  return useContext(AppContext);
}
export { AppContext, AppProvider };