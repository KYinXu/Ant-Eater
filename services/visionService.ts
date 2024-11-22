import axios from 'axios';

const url = 'https://detect.roboflow.com/food-ingredients-detection-qfit7/48';
const public_api_key = 'uSHFpLCjs4VxZItHQ6Iz';

export const runRoboflowInference = async (base64Image: string) => {
  try {
    const response = await axios({
      method: 'POST',
      url: url,
      params: {
        api_key: public_api_key
      },
      data: base64Image,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    console.log(response.data);
    const ingredientSet = new Set<string>();
    for (const prediction of response.data.predictions) {
      const translatedIngredients = translateIngredient(prediction.class);
      translatedIngredients.forEach(ingredient => ingredientSet.add(ingredient));
    }

    return Array.from(ingredientSet);
  } catch (error) {
    console.error('Error running Roboflow inference:', error);
    throw error;
  }
};

export const translateIngredient = (ingredient: string): string[] => {
  const ingredientMapping: { [key: string]: string[] } = {
    'bulgar': [],
    'cabbage': [],
    'eggplant': [],
    'green pepper': [],
    'margarine': [],

    'cheese': ['parmesan', 'mozzarella'],
    'chicken': ['chicken breast', 'chicken wings', 'chicken thighs'],
    'chickpeas': ['chickpea'],
    'farfalle pasta': ['bow-tie pasta'],
    'fusilli pasta': ['spaghetti'],
    'ground meat': ['ground beef', 'ground pork'],
    'mushroom': ['button mushroom'],
    'olive': ['black olives'],
    'rice': ['white rice', 'brown rice'],
  };

  return ingredientMapping[ingredient] || [ingredient];
};

