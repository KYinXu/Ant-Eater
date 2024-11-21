import axios from 'axios';

const API_BASE_URL = 'http://d1.supercook.com/dyn/results';

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
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Headers": "'Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token'",
        "Access-Control-Allow-Methods": "*",
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

    axios.post(`${API_BASE_URL}`, payload, {headers})
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.error('Error fetching recipes: ', error)
    })
}

