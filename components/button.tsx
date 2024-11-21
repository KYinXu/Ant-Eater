import React from 'react';
import "/components/hi.tsx";
import {getRecipes} from "../services/recipeService";

// Simple Button component
export const SimpleButton: React.FC = () => {
  // Handler function for the button click event
  const handleClick = () => {
    getRecipes(['butter', 'eggs'])
    alert('Button clicked!');
  };

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
};

export default SimpleButton;