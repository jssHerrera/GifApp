import { createContext, useState } from "react";

const GifContext = createContext();

const GifProvider = ({ children }) => {
  const [images, setImages] = useState([]);

  return (
    <GifContext.Provider
      value={{
        images,
        setImages,
      }}
    >
      {children}
    </GifContext.Provider>
  );
};

export { GifProvider };
export default GifContext;
