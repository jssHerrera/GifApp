import { useEffect } from "react";
import { useState } from "react";
import { getTrendingTerms } from "../services/getTrendingTerms";

const useTrendingGet = () => {
  const [categoris, setCategories] = useState([]);

  useEffect(() => {
    getTrendingTerms().then(elem => setCategories(elem));
  }, []);

  return { categoris };
};

export default useTrendingGet;
