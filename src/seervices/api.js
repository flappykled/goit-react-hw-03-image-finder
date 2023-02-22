import axios from "axios";

const API_KEY = '32302124-e6dfdbd2009eaa3575731b612';

export const addFotoObj = async (searchInput, pageNum) => {
    const response = await axios.get(`https://pixabay.com/api/?q=${searchInput}&page=${pageNum}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
   
    return response.data.hits;
}
