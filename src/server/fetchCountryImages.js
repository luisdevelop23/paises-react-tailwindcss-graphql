const accessKey = "QskgPVZv9cXS4oLFcn3RCFzzZBB4IKb56Cl8LHvZpvk";
const apiUrl = "https://api.unsplash.com/search/photos";

export const fetchCountryImages = async (countries) => {
  const allImages = {};
  const imageCache = {};
  const MAX_BATCH_SIZE = 10;

  for (let i = 0; i < countries.length; i += MAX_BATCH_SIZE) {
    const batch = countries.slice(i, i + MAX_BATCH_SIZE);

    const imagePromises = batch.map(async (country) => {
      if (imageCache[country.code]) {
        return { code: country.code, imageUrl: imageCache[country.code] };
      }

      const url = `${apiUrl}?client_id=${accessKey}&query=${encodeURIComponent(
        country.name,
      )}&per_page=1`;

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        const imageUrl = result.results?.[0]?.urls?.small || null;

        if (imageUrl) {
          imageCache[country.code] = imageUrl;
        }

        return { code: country.code, imageUrl };
      } catch (error) {
        return { code: country.code, imageUrl: null };
      }
    });

    const images = await Promise.all(imagePromises);
    images.forEach(({ code, imageUrl }) => {
      allImages[code] = imageUrl;
    });

    await new Promise((resolve) => setTimeout(resolve, 200));
  }

  return allImages;
};
