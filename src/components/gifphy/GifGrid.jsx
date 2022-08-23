import { useCallback, useEffect, useRef } from "react";
import debounce from "just-debounce-it";
import GifTitle from "../title/GifTitle";
import ListOfGifs from "./ListOfGifs";
import useGiftGet from "../../hook/useGiftGet";
import useLazyScreen from "../../hook/useLazyScreen";
const GifGrid = ({ params }) => {
  const { keyword } = params;
  const { images, loading, setPage } = useGiftGet({ keyword });
  const externalRef = useRef();
  const { lazy } = useLazyScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });
  // const handleClick = () => {
  //   setPage(prevPages=> prevPages + 1)
  // };

  const debounceHandleNext = useCallback(
    debounce(() => setPage(prevPages=> prevPages + 1), 200)
  ,[]);


  useEffect(() => {
    console.log(lazy);
    if (lazy) debounceHandleNext();
  }, [lazy, debounceHandleNext]);

  return (
    <section className="">
      <div className="sticky top-0  z-30 ">
        <div className="pt-8 bg-white">
          <GifTitle texto={decodeURI(keyword)} />
        </div>
      </div>
      <ListOfGifs images={images} />
      <div ref={externalRef}></div>
      {/* <div className=" flex justify-center content-center my-5">
        <button
          onClick={handleClick}
          className="text-white w-full md:w-max bg-sky-500 hover:bg-sky-600 hover:cursor-pointer focus:outline-non font-medium rounded-lg text-sm px-4 py-2 "
        >
          Next Pages
        </button>
      </div> */}
    </section>
  );
};

export default GifGrid;
