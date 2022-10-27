import axios from 'axios';

const KEY = '29824999-ac7732ff734cbf874c6efba54';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const GetImage = async (searchQuery, Page) => {
  const response = await axios.get(
    `?key=${KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&page=${Page}&per_page=12`
  );
  return response.data.hits;
};
