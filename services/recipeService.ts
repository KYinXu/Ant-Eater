import axios from 'axios';

const API_BASE_URL = 'https://d1.supercook.com/dyn/results';

export const getRecipes = async () => {

    const payload = {
        
    }
    axios.get(`${API_BASE_URL}`, payload)
    .then(response => {

    })
    .catch(error => {
        console.error('Error fetching recipes: ', error)
    })
}

export const getRecipeById = async (id: string) => {
  try {
    return "Recipe";
  } catch (error) {
    console.error(`Error fetching recipe with id ${id}:`, error);
    throw error;
  }
};

axios.post('https://d1.supercook.com/dyn/results', payload)
  .then(response => {
    console.log('API Response:', response.data);
  })