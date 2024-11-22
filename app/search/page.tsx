"use client";
import { useState } from "react";
import { SimpleButton } from "../../components/button";
import { getRecipes } from "../../services/recipeService";
import { runRoboflowInference } from "../../services/visionService";
import { SearchItem } from "../../components/searchItem";
import ExpandableSection from "../../components/expandableSection";
import Checkbox from "../../components/checkbox";
import CVButton from "../../components/cvButton";
import allIngredients from "./ingredients";

export default function SearchPage() {
  const [visibleIngredients, setVisibleIngredients] = useState<string[]>(
    allIngredients.flatMap((group) => group.ingredients)
  );

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [base64Image, setBase64Image] = useState<string | null>(null);
  const [myIngredients, setMyIngredients] = useState<string[]>([]);
  const [possibleRecipes, setPossibleRecipes] = useState<string[]>([]);

  const handleSearchRecipeClick = async () => {
    // check if myIngredients is empty, then use butter eggs
    const recipes =
      myIngredients.length === 0
        ? await getRecipes(["butter", "egg"])
        : await getRecipes(myIngredients);
    // theoretically, possible recipes should be parsed by kyle. then we map each one to a component
    setPossibleRecipes(await recipes);
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
      checked
        ? [...prevIngredients, ingredient]
        : prevIngredients.filter((item) => item !== ingredient)
    );
  };

  const clearIngredients = () => {
    setMyIngredients([]);
  };

  return (
    <div className="flex min-h-screen">
      {/* Left side: Expandable sections */}
      <div className="w-1/5 bg-gray-100 p-4">
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
        <h1>Selected Ingredients</h1>
        {myIngredients.map((ingredient) => (
          <h1 key={ingredient}>{ingredient}</h1>
        ))}
        <SimpleButton onClick={clearIngredients}>
          Clear Ingredients
        </SimpleButton>
        <p>This is the search page.</p>
        <br />
        <SimpleButton onClick={handleSearchRecipeClick}>
          search recipe api
        </SimpleButton>
        <br />
        <input type="file" onChange={handleFileChange} />
        <CVButton onFileUpload={(file) => setSelectedFile(file)} />
        <SimpleButton onClick={handleCVClick}>try cv api</SimpleButton>
      </div>
    </div>
  );
}
