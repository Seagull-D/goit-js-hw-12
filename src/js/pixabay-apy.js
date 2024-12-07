
export default getPictures;
import axios from 'axios';  


async function  getPictures (tag, page = 1) {
    //https://pixabay.com/api/?q=&image_type=photo&orientation=horizontal&safesearch=true&key=47380819-2a2ad5e165b633e18b6fd0fd3
    const API_URL = `https://pixabay.com/api`
  const API_KEY = `47380819-2a2ad5e165b633e18b6fd0fd3`
  return await axios.get(`${API_URL}/?q=${tag}&image_type=photo&orientation=horizontal&safesearch=true&key=${API_KEY}`, {
    params: {

      page,
      per_page: 15,
    }
   });
  
      
}


