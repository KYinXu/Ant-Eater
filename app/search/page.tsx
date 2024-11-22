"use client";
import { useState, useEffect} from "react";
import { SimpleButton } from "../../components/button";
import { getRecipes } from "../../services/recipeService";
import { runRoboflowInference } from "../../services/visionService";
import { SearchItem } from "../../components/searchItem";
import ExpandableSection from "../../components/expandableSection";
import Checkbox from "../../components/checkbox";
import CVButton from "../../components/cvButton";
import allIngredients from "./ingredients";
import GridComponent from '../../components/grid';
import SearchBar from "../../components/searchBar";

export default function SearchPage() {
  const [visibleIngredients, setVisibleIngredients] = useState<string[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [base64Image, setBase64Image] = useState<string | null>(null);
  const [myIngredients, setMyIngredients] = useState<string[]>([]);
  const [possibleRecipes, setPossibleRecipes] = useState<string[][]>([]);
  
  const [showGrid, setShowGrid] = useState<boolean>(false);

  // Function to toggle the grid visibility
  const toggleGrid = (): void => {
    setShowGrid((prev) => !prev);
  };

  const handleSearchRecipeClick = async () => {
    // check if myIngredients is empty, then use butter eggs
    const recipes =
      myIngredients.length === 0
        ? await getRecipes(["butter", "egg"])
        : await getRecipes(myIngredients);
    // theoretically, possible recipes should be parsed by kyle. then we map each one to a component
    setPossibleRecipes(await recipes);
    toggleGrid();
  };

  useEffect(() => {
    setVisibleIngredients(allIngredients.flatMap(group => group.ingredients));
  }, []);
  
  const handleFileUpload = (file: File) => {
    setSelectedFile(file);

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64Data = (reader.result as string).split(',')[1];
      setMyIngredients(await runRoboflowInference(base64Data));
    };
    reader.readAsDataURL(file);
  };

  const handleSearchChange = (value: string) => {
    setVisibleIngredients(
      allIngredients.flatMap(group => group.ingredients).filter(ingredient => ingredient.substring(0, value.length) === value)
    );
  };

  const toggleIngredient = (ingredient: string, checked: boolean) => {
    setMyIngredients((prevIngredients) =>
      checked
        ? [...prevIngredients, ingredient]
        : prevIngredients.filter((item) => item !== ingredient)
    );
  };

  const clearIngredients = () => {
    setMyIngredients([]);
  };

  return (
    <div>
      <div className="flex justify-center items-center bg-gray-200 p-4">
        <h1 className="text-4xl font-bold">&Eater</h1>
      </div>
      <div className="flex min-h-screen">
        {/* Left side: Expandable sections */}
        <div className="w-1/5 bg-gray-100 p-4">
          <CVButton onFileUpload={handleFileUpload}>Upload another image</CVButton>
          <SimpleButton onClick={clearIngredients}>
            Clear Ingredients
          </SimpleButton>
          <SearchBar onSearchChange={handleSearchChange} />
          <ExpandableSection title="Selected Ingredients">
            {myIngredients.map(
              (ingredient) =>
                <Checkbox
                  key={ingredient + "selected"}
                  isChecked={myIngredients.includes(ingredient)}
                  label={ingredient}
                  onToggle={(checked) =>
                    toggleIngredient(ingredient, checked)
                  }
              />
            )}
          </ExpandableSection>
          {allIngredients.map((object) => (
            <ExpandableSection key={object.group_name} title={object.group_name}>
              {object.ingredients.map(
                (ingredient) =>
                  visibleIngredients.includes(ingredient) && (
                    <Checkbox
                      key={ingredient}
                      isChecked={myIngredients.includes(ingredient)}
                      label={ingredient}
                      onToggle={(checked) =>
                        toggleIngredient(ingredient, checked)
                      }
                    />
                  )
              )}
            </ExpandableSection>
          ))}
        </div>

        {/* Right side: Everything else */}
        <div className="flex-1 p-4">
          <SimpleButton onClick={() => handleSearchRecipeClick()}>
            search recipe api
          </SimpleButton>
          <GridComponent showGrid={showGrid} titles={possibleRecipes[0]} images={possibleRecipes[1]}/>
        </div>
        
      </div>
      
    </div>
  );
}
