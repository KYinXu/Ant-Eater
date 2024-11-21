import axios from 'axios';

const url = 'https://detect.roboflow.com/ingredients-hbvsw/1';
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
    return response.data;
  } catch (error) {
    console.error('Error running Roboflow inference:', error);
    throw error;
  }
};