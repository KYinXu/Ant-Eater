'use client';
import { useState } from 'react';
import { SimpleButton } from '../../components/button';
import { getRecipes } from '../../services/recipeService';
import { runRoboflowInference } from '../../services/visionService';
import { SearchItem } from '../../components/searchItem';

export default function SearchPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [base64Image, setBase64Image] = useState<string | null>(null);

  

  const handleSearchRecipeClick = async () => {
    await getRecipes(['butter', 'egg']);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setSelectedFile(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setBase64Image(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCVClick = async () => {
    if (base64Image) {
      // const base64Data = base64Image.split(',')[1]; // Remove the data URL prefix
      await runRoboflowInference(base64Image);
    }
  };

  return (
    <div>
      <h1>Search Page</h1>
      <p>This is the search page.</p>
      <SearchItem text="TESTING" onClick={() => {}}/>
      <br />
      <SimpleButton onClick={handleSearchRecipeClick}>search recipe api</SimpleButton>
      <br />
      <input type="file" onChange={handleFileChange}/>
      <SimpleButton onClick={handleCVClick}>try cv api</SimpleButton>
    </div>
  );
}