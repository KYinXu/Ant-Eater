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
    <div className="bg-offwhite">
      <div className="flex justify-center bg-whitewhite items-center p-4 border-b-2 border-stone-400">
        <h1 className="text-4xl font-bold">&Eater</h1>
      </div>
      <div className="flex min-h-screen">
        {/* Left side: Expandable sections */}
        <div className="w-1/5 p-4">
          <CVButton onFileUpload={handleFileUpload}>Upload another image</CVButton>
          <div className="border-t border-gray-300 mt-2 mb-2"></div>
          <SimpleButton onClick={clearIngredients}>
            Clear Ingredients
          </SimpleButton>
          <div className="border-b-2 border-gray-700 mt-2 mb-2"></div>
          <SearchBar onSearchChange={handleSearchChange} />
          <div className="border-t border-gray-300 mt-2 mb-2"></div>
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
