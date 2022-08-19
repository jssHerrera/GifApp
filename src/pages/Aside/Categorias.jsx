import ListCategori from "../../components/categorias/ListCategori";
import GifTitle from "../../components/title/GifTitle";

const Categorias = () => {
  const init = ["dragon ball", "Naruto", "morty"];

  return (
    <aside className=" md:overflow-y-auto md:w-52 md:h-screen bg-gray-50 " aria-label="Sidebar">
      <div className=" py-8 px-3  rounded dark:bg-gray-800">
        <GifTitle texto='Gifphy App'/>
        <ul className="flex flex-col justify-center sm:flex-row md:flex-col gap-2 md:space-y-2">
          <ListCategori init={init}/>
        </ul>
      </div>
    </aside>
  );
};

export default Categorias;
