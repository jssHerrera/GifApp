import GifTitle from "../title/GifTitle";
import ListOfGifs from "./ListOfGifs";
import useGiftGet from "../../hook/useGiftGet";
const GifGrid = ({ params }) => {
  const { keyword } = params;
  const { images } = useGiftGet({keyword});
  // const [location, setLocation] = useLocation();
  // const palabra = location.split('/');
  // const palabraActual = palabra[palabra.length -1];

  return (
    <section>
      <GifTitle texto={decodeURI(keyword)} />
      <ListOfGifs images={images} />
    </section>
  );
};

export default GifGrid;
