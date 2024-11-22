import axios from 'axios';

const PROXY_URL = 'http://127.0.0.1:5000/proxy';
const DETAILS_URL = 'http://127.0.0.1:5000/proxy/details';

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
    // console.log(response.data);
    // console.log(response.data.results)
    // console.log(response.data.results[0])
    let recipes: any[] = Object.values(response.data.results);
    console.log(recipes)
    const titles = recipes.map((obj: any) => obj['title']);
    const images = recipes.map((obj: any) => obj['img']);
    const rids = recipes.map((obj: any) => obj['id']);
    return [titles, images, rids];
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const getRecipeDetails = async (rid: string) => {
  const url = DETAILS_URL;
  const headers = {}
  const params = {
    rid: rid,
    lang: "en",
    ingredients: ""
  }


  try {
    const response = await axios.post(url,{params, headers});
    console.log(response.data.recipe.hash);
    return response.data.recipe.hash;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};