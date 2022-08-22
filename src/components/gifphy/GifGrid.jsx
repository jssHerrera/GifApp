import GifTitle from "../title/GifTitle";
import ListOfGifs from "./ListOfGifs";
import useGiftGet from "../../hook/useGiftGet";
import Loading from "../loader/Loading";
const GifGrid = ({ params }) => {
  const { keyword } = params;
  const { loading, images, setPage } = useGiftGet({ keyword });

  const handleClick = () => {
    setPage((prevPages) => prevPages + 1);
  };

  return (
    // <>
    //   {loading ? (
    //     <Loading />
    //   ) : (
        <section className="min-h-screen">
          <div className="sticky top-0  z-30 ">
            <div className="pt-8 bg-white">
              <GifTitle texto={decodeURI(keyword)} />
            </div>
          </div>
          <ListOfGifs images={images} />
          <div className=" flex justify-center content-center my-5">
            <button
              onClick={handleClick}
              className="text-white w-full md:w-max bg-sky-500 hover:bg-sky-600 hover:cursor-pointer focus:outline-non font-medium rounded-lg text-sm px-4 py-2 "
            >
              Next Pages
            </button>
          </div>
        </section>
    //   )}
    // </>
  );
};

export default GifGrid;
