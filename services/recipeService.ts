import axios from 'axios';

const PROXY_URL = 'http://127.0.0.1:5000/proxy';

export const getRecipes = async (ingredients: string[]) => {
  const url = PROXY_URL;
  //let HEADERS/PARAMS = 
  //params
  try {
    const response = await axios.post(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
  //test
};