import ListCategori from "../../components/categorias/ListCategori";
import GifTitle from "../../components/title/GifTitle";

import useTrendingGet from "../../hook/useTrendingGet";

const Categorias = () => {
  const { categoris } = useTrendingGet();
  const catRandom = categoris.sort(() => Math.random() - 0.5);
  const lista = catRandom.slice(0, 14);

  return (
    <aside
      className=" md:overflow-y-auto pt-8 md:sticky top-0 md:h-screen min-w-min md:w-1/6 "
      aria-label="Sidebar"
    >
      <div className="  px-3  rounded dark:bg-gray-800 ">
        <GifTitle texto="Gifphy App" />
        <ul className="flex justify-center flex-wrap sm:flex-row  md:flex-col md:space-y-2">
          <ListCategori lista={lista} />
        </ul>
      </div>
    </aside>
  );
};

export default Categorias;
