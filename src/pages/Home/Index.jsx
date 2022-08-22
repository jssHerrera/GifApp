import ListOfGifs from "../../components/gifphy/ListOfGifs";
import Search from "../../components/search/Search";
import GifTitle from "../../components/title/GifTitle";
import useGiftGet from "../../hook/useGiftGet";
import useSearch from "../../hook/useSearch";

const Index = () => {
  const { form, handleChange, handleSubmit } = useSearch();
  const { images } = useGiftGet();

  return (
    <section className="mb-8">
      <div className="sticky top-0 pt-8 z-30 bg-white">
        <Search
          form={form}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <GifTitle texto="Ultimas busquedas" />
      </div>
      <ListOfGifs images={images} />
    </section>
  );
};

export default Index;
