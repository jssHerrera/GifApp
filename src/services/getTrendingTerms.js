import { API_KEY, API_URL } from "./sttings";
export const getTrendingTerms = async () => {
  const url = `${API_URL}/trending/searches?api_key=${API_KEY}`;
  const respuesta = await fetch(url);
  const { data = [] } = await respuesta.json();
  return data
};
