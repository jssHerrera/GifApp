import { useEffect, useState, useRef  } from "react";

const useLazyScreen = ({distace = '100px'}={}) => {
  const [lazy, setLazy] = useState(false);
  const elemenRef = useRef();

  useEffect(() => {
    const cambio = (entries, observer) => {
      const elemeto = entries[0];
      console.log(elemeto.isIntersecting);
      if (elemeto.isIntersecting) {
        setLazy(true);
        observer.disconnect();
      }
    };
    const observer = new IntersectionObserver(cambio, {
      rootMargin: distace,
    });
    
    observer.observe(elemenRef.current);

    return () => observer.disconnect();
  }, []);

  return { lazy, elemenRef };
};

export default useLazyScreen;
