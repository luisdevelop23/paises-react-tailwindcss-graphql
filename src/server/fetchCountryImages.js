// ?importamos las variables de entorno
const apiKey = "46822481-80ff7d3398873baa0581ebf99"
const apiUrl = "https://pixabay.com/api/"

// ?funcion para obtener las imagenes
export const fetchCountryImages = async (countries) => {
  // ?creamos un array de promesas
  const imagePromises = countries.map(async (country) => {
    // ?obtener la url de la imagen
    const url = `${apiUrl}?key=${apiKey}&q=${encodeURIComponent(
      country.name
    )}&image_type=photo&per_page=3`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    // ?al pedir page=3, se obtienen 3 imagenes,
    // ?al cumplir 2 reglas, que tenga hits, y que sean mayor a 3,
    //? filtramos los hits que no sean nulos
    const imageUrl =
      result.hits && result.hits.length > 0
        ? result.hits.find((hit) => hit.webformatURL)?.webformatURL
        : result.hits[0]?.webformatURL;
    // ?retornamos el objeto con el code y la imagen
    return { code: country.code, imageUrl };
  });

  // ?Esperar a que todas las promesas se resuelvan y devolver un objeto de imágenes
  const images = await Promise.all(imagePromises);
  // console.log(images);
  // ?el arreglo de imagenes se convierte en un objeto,
  return images.reduce((acc, { code, imageUrl }) => {
    acc[code] = imageUrl;
    return acc;
  }, {});
};
