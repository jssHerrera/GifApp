import { API_KEY } from "./sttings";
export const getTrendingTerms = async ({
  limit = 25,
  keyword = "Morty",
} = {}) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=0&rating=g&lang=en`;

  const respuesta = await fetch(url);
  const { data = [] } = await respuesta.json();
  const gifs = data.map((elem) => ({
    id: elem.id,
    title: elem.title,
    imges: elem.images.downsized_medium.url,
  }));

  return gifs;
};
