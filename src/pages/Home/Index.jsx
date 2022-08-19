import ListOfGifs from "../../components/gifphy/ListOfGifs";
import Search from "../../components/search/Search";
import GifTitle from "../../components/title/GifTitle";
import useGiftGet from "../../hook/useGiftGet";
import useSearch from "../../hook/useSearch";

const Index = () => {
  const { form, handleChange, handleSubmit } = useSearch();
  const { images } = useGiftGet();
console.log(images);
  return (
    <section>
      <Search
        form={form}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <GifTitle texto="Ultimas busquedas" />
      <ListOfGifs images={images} />
    </section>
  );
};

export default Index;
