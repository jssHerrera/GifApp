import { Link } from "wouter";
import { HiLogin } from "react-icons/hi";

import useGif from "../../hook/useGifContext";
const GifDescription = ({ params }) => {
  const { images } = useGif();

  const gif = images.filter((elem) => elem.id === params.id);

  const nameDefault = JSON.parse(localStorage.getItem("lastKeywork"));
  return (
    <>
      {gif.map(({ title, imges }) => (
        <div key={title} className="h-screen grid relative">
          <div className="absolute top-10  text-3xl hover:cursor-pointer hover:text-sky-600">
            <Link to="/">
              <HiLogin />
            </Link>
          </div>

          <Link to="/" >
            <div className="flex flex-col items-center content-center bg-white rounded-lg border shadow-md md:max-w-2xl hover:bg-gray-100 p-4 hover:cursor-pointer m-auto">
              <img
                src={imges}
                alt={title}
                className="object-cover w-full  rounded-t-lg md:h-auto md:w-80 md:rounded-none md:rounded-l-lg"
                loading="lazy"
              />
              <div className="flex flex-col justify-between mt-4 leading-normal">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">
                  {title || nameDefault}
                </h5>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default GifDescription;
