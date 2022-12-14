import { API_KEY, API_URL } from "./sttings";

export const getGift = async ({ limit = 5, keyword = "Morty", page=0 } = {}) => {
  const url = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page*limit}&rating=g&lang=en`;

  const respuesta = await fetch(url);
  const { data = [] } = await respuesta.json();
  const gifs = data.map((elem) => ({
    id: elem.id,
    title: elem.title,
    imges: elem.images.downsized_medium.url,
  }));

  return gifs;
};
