// ?importamos las variables de entorno
const apiKey = "46798177-446734c774d01c40df943d4d1";
const apiUrl = "https://pixabay.com/api/";

const imageCache = {};

export const fetchCountryImages = async (countries) => {
  const allImages = {};
  const BATCH_SIZE = 5; // ?Limitar el número de países

  for (let i = 0; i < countries.length; i += BATCH_SIZE) {
    const batch = countries.slice(i, i + BATCH_SIZE);
    const imagePromises = batch.map(async (country) => {
      // ?Comprobar en caché
      if (imageCache[country.code]) {
        return { code: country.code, imageUrl: imageCache[country.code] };
      }

      const url = `${apiUrl}?key=${apiKey}&q=${encodeURIComponent(
        country.name
      )}&image_type=photo&per_page=3`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      const imageUrl =
        result.hits && result.hits.length > 0
          ? result.hits[0].webformatURL
          : null;

      if (imageUrl) {
        imageCache[country.code] = imageUrl; // ?Guardar en caché
      }

      return { code: country.code, imageUrl }; // ?Retornar la imagen
    });

    // ?Esperar a que se resuelvan las promesas de la tanda actual
    const images = await Promise.all(imagePromises);
    images.forEach(({ code, imageUrl }) => {
      allImages[code] = imageUrl; 
    });
  }

  return allImages;
};
