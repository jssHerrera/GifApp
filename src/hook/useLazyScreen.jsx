import { useEffect, useState, useRef  } from "react";

const useLazyScreen = ({distace = '100px', externalRef, once=true}={}) => {
  const [lazy, setLazy] = useState(false);
  const elemenRef = useRef();

  useEffect(() => {

    const elemt = externalRef ? externalRef.current : elemenRef.current

    const cambio = (entries, observer) => {
      const elemeto = entries[0];

      if (elemeto.isIntersecting) {
        setLazy(true);
        once && observer.disconnect();
      }else{
        !once && setLazy(false)
      }

    };
    const observer = new IntersectionObserver(cambio, {
      rootMargin: distace,
    });

    if (elemt) observer.observe(elemt);

    return () => observer.disconnect();
  }, []);

  return { lazy, elemenRef };
};

export default useLazyScreen;
