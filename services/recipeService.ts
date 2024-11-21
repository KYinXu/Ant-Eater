import axios from 'axios';

const API_BASE_URL = 'https://d1.supercook.com/dyn/results';

export const getRecipes = async (ingredients: string[]) => {

    ingredients = ['butter', 'eggs'];
    interface requestParams {
        //needsimage: string,
        //app: string,
        kitchen: string[],
        focus: string,
        exclude: string,
        kw: string,
        catname: string,
        start: string,
        fave: string,
        lang: string,
        cv: string

    }
    const headers = {
        'needsimage': '1',
        'app': '1',
    }
    const payload: requestParams = {
        'kitchen': ['jalapeno','potato','bell', 'pepper','carrot','egg'],
        'focus': '',
        'exclude': '',
        'kw': '',
        'catname': '',
        'start': '0',
        'fave': 'false',
        'lang': 'en',
        'cv': '2'
    }

    axios.post(`${API_BASE_URL}`,{
        'kitchen': ['jalapeno','potato','bell', 'pepper','carrot','egg'],
        'focus': '',
        'exclude': '',
        'kw': '',
        'catname': '',
        'start': '0',
        'fave': 'false',
        'lang': 'en',
        'cv': '2'
    }, {headers})
    .then(response => {
        console.log(response)
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

// axios.post('https://d1.supercook.com/dyn/results', payload)
//   .then(response => {
//     console.log('API Response:', response.data);
//   })

  /*
  needsimage=1&app=1&kitchen=butter%2Colive%20oil%2Cgarlic%2Cketchup%2Cegg&focus=&exclude=&kw=&catname=&start=0&fave=false&lang=en&cv=2

    needsimage: 1,
    app: 1,
    kitchen: butter,olive oil,garlic,ketchup,egg,
    focus: ,
    exclude: ,
    kw: ,
    catname: ,
    start: 0,
    fave: false,
    lang: en,
    cv: 2
  */