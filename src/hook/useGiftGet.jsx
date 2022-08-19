// import { useState } from "react";
import { useEffect } from "react";
import { getGift } from "../services/getGifs";
import useGif from "./useGifContext";
const useGiftGet = ({ keyword } = { keyword: localStorage.getItem("lastKeywork") }) => {
  const { images, setImages } = useGif();

  const keywordToUse = keyword

  useEffect(() => {
    getGift({ keyword: keywordToUse }).then((elem) => {
      setImages(elem);
    });
  }, [keyword, setImages]);

  return { images };
};

export default useGiftGet;
