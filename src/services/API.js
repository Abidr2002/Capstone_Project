import axios from 'axios';

const getNewsData = async () => {
  try {
    const response = await axios.get(
      `https://api-berita-indonesia.vercel.app/suara/health/`
    );
    return response.data.data.posts || [];
  } catch (error) {
    console.error('Error fetching news data:', error);
    return [];
  }
};

export default getNewsData;
