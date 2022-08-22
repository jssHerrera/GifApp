import { useState, useEffect } from "react";
import { getGift } from "../services/getGifs";
import useGif from "./useGifContext";

const INITIAL_PAGE = 0;

// ------UseGifGet--------
const useGiftGet = ({ keyword } = { keyword: null }) => {
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPages] = useState(false);
  const { images, setImages } = useGif();
  const [page, setPage] = useState(INITIAL_PAGE);

  const keywordToUse = keyword ||  JSON.parse(localStorage.getItem('lastKeyword'))

  // ---------Get Gif ---------------
  useEffect(() => {
    setLoading(true);
    getGift({ keyword: keywordToUse }).then((elem) => {
      setImages(elem);
      setLoading(false);
    });
  }, [keyword, keywordToUse, setImages]);

  // ---------Get  pages---------------
  useEffect(() => {
    setLoadingNextPages(true);
    if (page === INITIAL_PAGE) return;
    getGift({ keyword: keywordToUse, page }).then((elem) => {
      setImages((prevGifs) => prevGifs.concat(elem));
      setLoadingNextPages(false);
    });
  }, [page, keyword, keywordToUse, setImages]);
  
  return { images, loading, loadingNextPage, setPage };
};

export default useGiftGet;
