import axios from 'axios';

const PROXY_URL = 'http://127.0.0.1:5000/proxy';

export const getRecipes = async (ingredients: string[]) => {
  const url = PROXY_URL;
  const headers = {
    'needsimage': '1',
    'app': '1',
  }
  const params = {
    kitchen: ingredients.join(','),
    focus: '',
    exclude: '',
    kw: '',
    catname: '',
    start: '0',
    fave: 'false',
    lang: 'en',
    cv: '2',
  };


  try {
    const response = await axios.post(url, { params, headers });
    console.log(response.data);
    
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
  //testing lulululululul
};