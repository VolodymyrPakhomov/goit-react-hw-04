import axios from 'axios';

const ACCESS_KEY = 'DZmRar8tkqFKMqA1QYuGG3Hy5fdgtFAL-W8IqLkvJHY';

const unsplashApi = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`,
  },
});

export const fetchImages = async (queryImages, currentPage) => {
  const response = await unsplashApi.get('/search/photos', {
    params: {
      query: queryImages,
      page: currentPage,
      per_page: 12,
    },
  });

  return response.data;
};
