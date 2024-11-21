import { InferenceEngine } from "inferencejs";

const inferEngine = new InferenceEngine();
const MODEL_NAME = 'food-ingredients-detection-qfit7';
const MODEL_VERSION = '48';
const PUBLIC_KEY = 'rf_sPCLZp70VoNtV3apZWgmftFC2Jz2';

async function initializeWorker() {
  try {
    const workerId = await inferEngine.startWorker(MODEL_NAME, MODEL_VERSION, PUBLIC_KEY);
    console.log('Worker initialized with ID:', workerId);
  } catch (error) {
    console.error('Error initializing worker:', error);
    throw error;
  }
}

initializeWorker();

export const runComputerVision = async (imagePath: string) => {
  try {
    const result = await inferEngine.runInference(imagePath);
    return result;
  } catch (error) {
    console.error('Error running computer vision:', error);
    throw error;
  }
};