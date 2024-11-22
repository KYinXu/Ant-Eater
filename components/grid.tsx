import React, { useState, useEffect } from 'react';
import { RecipeCard } from './recipeCard';
interface GridProps {
    titles: string[];
    images: string[];
}

const Grid: React.FC<GridProps> = ({titles, images}) => {
  // State to store the grid, which is an array of numbers
  const [grid, setGrid] = useState<string[][]>([]);

  useEffect(() => {
    // Initialize the grid based on the length of images and titles
    const rows = Math.ceil(images.length / 3); // Assuming 3 columns
    const newGrid: string[][] = [];

    for (let i = 0; i < rows; i++) {
      const row: string[] = [];
      for (let j = 0; j < 3; j++) {
        const index = i * 3 + j;
        if (index < images.length) {
          row.push(images[index]);
        }
      }
      newGrid.push(row);
    }

    setGrid(newGrid);
  }, [images, titles]);

  return (
    <div>
      <div className="grid grid-cols-3 gap-2 mt-3">
        {grid.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            {row.map((image, colIndex) => (
              <RecipeCard key={colIndex} image={image} title={titles[rowIndex * 3 + colIndex]} onClick={() => {}} />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Grid;