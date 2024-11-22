'use client';
import { useState } from 'react';
import { SimpleButton } from '../../components/button';
import { getRecipes } from '../../services/recipeService';
import { runRoboflowInference } from '../../services/visionService';
import { SearchItem } from '../../components/searchItem';
import ExpandableSection from '../../components/expandableSection';
import Checkbox from '../../components/checkbox';
import GridComponent from '../../components/grid';

export default function SearchPage() {
  // hardcoded
  const [allIngredients, setAllIngredients] = useState<string[]>(["butter", "milk","egg"]);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [base64Image, setBase64Image] = useState<string | null>(null);
  const [myIngredients, setMyIngredients] = useState<string[]>([]);
  const [possibleRecipes, setPossibleRecipes] = useState<string[]>([]);

  const handleSearchRecipeClick = async () => {
    // check if myIngredients is empty, then use butter eggs
    const recipes = myIngredients.length === 0 ? await getRecipes(['butter', 'egg']) : await getRecipes(myIngredients);
    // theoretically, possible recipes should be parsed by kyle. then we map each one to a component
    setPossibleRecipes(await recipes)
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
      setMyIngredients(await runRoboflowInference(base64Image));
    }
  };

  const toggleIngredient = (ingredient: string, checked: boolean) => {
    setMyIngredients((prevIngredients) =>
      checked ? [...prevIngredients, ingredient] : prevIngredients.filter((item) => item !== ingredient)
    );
  };

  const clearIngredients = () => {
    setMyIngredients([]);
  };



  return (
    <>
      <h1>Search Page</h1>

      <ExpandableSection title="Essentials"> 
        {allIngredients.map((ingredient) => (
          <Checkbox key={ingredient} isChecked={myIngredients.includes(ingredient)} label={ingredient} onToggle={(checked) => toggleIngredient(ingredient, checked)} />
        ))}
      </ExpandableSection>
      {myIngredients.map((ingredient) => (
        <span key={ingredient}>{ingredient}</span>
      ))}
      <SimpleButton onClick={clearIngredients}>Clear Ingredients</SimpleButton>
      <p>This is the search page.</p>
      <SearchItem text="TESTING" onClick={() => {}}/>
      <br />
      <SimpleButton onClick={handleSearchRecipeClick}>search recipe api</SimpleButton>
      <br />
      <input type="file" onChange={handleFileChange}/>
      <SimpleButton onClick={handleCVClick}>try cv api</SimpleButton>
      <GridComponent />
    </>
  );
}