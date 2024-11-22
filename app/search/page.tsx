"use client";
import { useState, useEffect, use} from "react";
import { SimpleButton } from "../../components/button";
import { getRecipes } from "../../services/recipeService";
import { runRoboflowInference } from "../../services/visionService";
import { SearchItem } from "../../components/searchItem";
import ExpandableSection from "../../components/expandableSection";
import Checkbox from "../../components/checkbox";
import CVButton from "../../components/cvButton";
import allIngredients from "./ingredients";
import Grid from '../../components/grid';
import SearchBar from "../../components/searchBar";
import { getRecipeDetails } from "../../services/recipeService";

export default function SearchPage() {
  const [visibleIngredients, setVisibleIngredients] = useState<string[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [base64Image, setBase64Image] = useState<string | null>(null);
  const [myIngredients, setMyIngredients] = useState<string[]>(['egg']);
  const [possibleRecipes, setPossibleRecipes] = useState<string[][]>([]);

  useEffect(() => {
    handleSearchRecipeClick();
  }, [myIngredients]);

  const handleSearchRecipeClick = async () => {
    // check if myIngredients is empty, then use butter eggs
    const recipes =
      myIngredients.length === 0
        ? await getRecipes(['egg'])
        : await getRecipes(myIngredients);
    // theoretically, possible recipes should be parsed by kyle. then we map each one to a component
    setPossibleRecipes(await recipes);
  };

  useEffect(() => {
    setVisibleIngredients(allIngredients.flatMap(group => group.ingredients));
  }, []);
  
  const handleFileUpload = (file: File) => {
    setSelectedFile(file);

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64Data = (reader.result as string).split(',')[1];
      const predicted = await runRoboflowInference(base64Data)
      setMyIngredients([...myIngredients, ...predicted]);
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
      <div className="flex row justify-center bg-whitewhite items-center p-4 border-b-2 border-stone-400">
        <div className="text-6xl font-black text-left bg-clip-text text-transparent bg-gradient-to-r from-big1 to-big2">
          <div className="font-bebas">&Eater</div>
        </div>
      </div>
      <div className="flex min-h-screen">
        {/* Left side: Expandable sections */}
        <div className="w-1/5 p-4">
          
          
          
          <div className="flex">
          <SearchBar onSearchChange={handleSearchChange} />
          <CVButton onFileUpload={handleFileUpload}>Upload another image</CVButton>
          </div>
          <div className="ms-2">
          <SimpleButton onClick={clearIngredients}>
            Clear Ingredients
          </SimpleButton>
          {/* <div className="border-b-2 border-gray-700 mt-2 mb-4"></div> */}
          </div>
          <div className="flex flex-wrap mt-2">
            {myIngredients.map(
              (ingredient) =>
                <SearchItem
                  key={ingredient + "selected"}
                  //isChecked={myIngredients.includes(ingredient)}
                  //label={ingredient}
                  // onToggle={(checked) =>
                  //   toggleIngredient(ingredient, checked)
                  // }
                  text={ingredient}
                  onClick={()=>{toggleIngredient(ingredient, false)}}
              />
            )}
          </div>
          <div className="border-t border-gray-300 mt-2 mb-2"></div>
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
        <div className="flex-1">
          {/* <SimpleButton onClick={() => handleSearchRecipeClick()}>
            search recipe api
          </SimpleButton>
          {possibleRecipes[0] && possibleRecipes[1] && <Grid titles={possibleRecipes[0]} images={possibleRecipes[1]} />}
          </SimpleButton> */}
          {possibleRecipes[0] && possibleRecipes[1] && possibleRecipes[2] && <Grid titles={possibleRecipes[0]} images={possibleRecipes[1]} rids={possibleRecipes[2]}/>}
        </div>
        
      </div>
      
    </div>
  );
}
