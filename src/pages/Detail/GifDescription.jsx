import React from "react";

import useGif from "../../hook/useGifContext";
const GifDescription = ({ params }) => {
  const { images } = useGif();

  const gif = images.filter((elem) => elem.id === params.id);

  const nameDefault = JSON.parse(localStorage.getItem("lastKeywork"));
  return (
    <>
      {gif.map(({ title, imges }) => (
        <div
          key={title}
          className="flex flex-col items-center content-center bg-white rounded-lg border shadow-md md:max-w-xl hover:bg-gray-100 p-4  m-auto"
        >
          <img
            src={imges}
            alt={title}
            className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-64 md:rounded-none md:rounded-l-lg"
            loading="lazy"
          />
          <div className="flex flex-col justify-between mt-4 leading-normal">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">
              {title || nameDefault}
            </h5>
          </div>
        </div>
      ))}
    </>
  );
};

export default GifDescription;
