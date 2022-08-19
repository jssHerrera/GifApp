// import { useState } from "react";
import { useEffect } from "react";
import { getGift } from "../services/getGifs";
import useGif from "./useGifContext";
const useGiftGet = ({ keyword } = { keyword: null }) => {
  const { images, setImages } = useGif();

  const keywordToUse = keyword || localStorage.getItem("lastKeywork")

  useEffect(() => {
    getGift({ keyword: keywordToUse }).then((elem) => {
      setImages(elem);
    });
  }, [keyword, setImages]);

  return { images };
};

export default useGiftGet;
