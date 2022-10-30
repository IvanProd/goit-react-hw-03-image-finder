const API_KEY = '29824999-ac7732ff734cbf874c6efba54';
const QUERY_PARAMETERS = 'image_type=photo&orientation=horizontal';
const page = 1;
const ASK_WHAT = 'coin';

export const getImages = async (page, ASK_WHAT) => {
  const URL_TO_GET = `https://pixabay.com/api/?key=${API_KEY}&q=${ASK_WHAT}&${QUERY_PARAMETERS}&page=${page}&per_page=12`;

  try {
    const serverRespose = await fetch(URL_TO_GET).then(res => res.json());
    const receivedImages = await serverRespose.hits;
    const totalFound = serverRespose.total;
    const total = serverRespose.totalHits;
    const imageData = {
      images: receivedImages,
      imagesTotal: totalFound,
      foundImages: total,
    };
    console.log(serverRespose);
    console.log(ImageData);
    return imageData;
  } catch (error) {}
};
